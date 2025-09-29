import React, { useEffect, useState, useCallback } from "react";

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
  userId?: string;
  sessionId: string;
}

interface UserJourney {
  page: string;
  timestamp: number;
  duration: number;
  interactions: number;
  scrollDepth: number;
}

interface AnalyticsMetrics {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  averageSessionDuration: number;
  topPages: Array<{ page: string; views: number }>;
  userJourney: UserJourney[];
  conversionEvents: AnalyticsEvent[];
}

interface AdvancedAnalyticsProps {
  enableHeatmaps?: boolean;
  enableUserJourney?: boolean;
  enableConversionTracking?: boolean;
  enablePerformanceTracking?: boolean;
  enableErrorTracking?: boolean;
}

export const AdvancedAnalytics: React.FC<AdvancedAnalyticsProps> = ({
  enableConversionTracking = true,
  enablePerformanceTracking = true,
  enableErrorTracking = true,
}) => {
  const [metrics, setMetrics] = useState<AnalyticsMetrics>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    averageSessionDuration: 0,
    topPages: [],
    userJourney: [],
    conversionEvents: [],
  });

  const [sessionId] = useState(
    () => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
  );
  const [userId] = useState(() => {
    const stored = localStorage.getItem("analytics_user_id");
    if (stored) return stored;
    const newId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem("analytics_user_id", newId);
    return newId;
  });

  const trackEvent = useCallback(
    (
      event: string,
      category: string,
      action: string,
      label?: string,
      value?: number,
    ) => {
      const analyticsEvent: AnalyticsEvent = {
        event,
        category,
        action,
        label,
        value,
        timestamp: Date.now(),
        userId,
        sessionId,
      };

      // Store in local storage for persistence
      const events = JSON.parse(
        localStorage.getItem("analytics_events") || "[]",
      );
      events.push(analyticsEvent);
      localStorage.setItem(
        "analytics_events",
        JSON.stringify(events.slice(-1000)),
      ); // Keep last 1000 events

      // Send to analytics service
      if (
        typeof (
          window as Window & {
            gtag?: (
              command: string,
              event: string,
              data: Record<string, unknown>,
            ) => void;
          }
        ).gtag === "function"
      ) {
        (
          window as Window & {
            gtag: (
              command: string,
              event: string,
              data: Record<string, unknown>,
            ) => void;
          }
        ).gtag("event", action, {
          event_category: category,
          event_label: label,
          value: value,
        });
      }

      // Update metrics
      setMetrics((prev) => ({
        ...prev,
        conversionEvents: [...prev.conversionEvents, analyticsEvent].slice(
          -100,
        ),
      }));
    },
    [userId, sessionId],
  );

  const trackPageView = useCallback(
    (page: string) => {
      const pageView: UserJourney = {
        page,
        timestamp: Date.now(),
        duration: 0,
        interactions: 0,
        scrollDepth: 0,
      };

      setMetrics((prev) => ({
        ...prev,
        pageViews: prev.pageViews + 1,
        userJourney: [...prev.userJourney, pageView].slice(-50),
        topPages: updateTopPages(prev.topPages, page),
      }));

      trackEvent("page_view", "navigation", "view", page);
    },
    [trackEvent],
  );

  const trackUserInteraction = useCallback(
    (interaction: string, element?: string) => {
      setMetrics((prev) => ({
        ...prev,
        userJourney: prev.userJourney.map((journey, index) =>
          index === prev.userJourney.length - 1
            ? { ...journey, interactions: journey.interactions + 1 }
            : journey,
        ),
      }));

      trackEvent("user_interaction", "engagement", interaction, element);
    },
    [trackEvent],
  );

  const trackScrollDepth = useCallback((depth: number) => {
    setMetrics((prev) => ({
      ...prev,
      userJourney: prev.userJourney.map((journey, index) =>
        index === prev.userJourney.length - 1
          ? { ...journey, scrollDepth: Math.max(journey.scrollDepth, depth) }
          : journey,
      ),
    }));
  }, []);

  const trackPerformance = useCallback(
    (metric: string, value: number) => {
      if (enablePerformanceTracking) {
        trackEvent("performance", "metrics", metric, undefined, value);
      }
    },
    [enablePerformanceTracking, trackEvent],
  );

  const trackError = useCallback(
    (error: Error, context?: string) => {
      if (enableErrorTracking) {
        trackEvent("error", "exception", error.message, context);
      }
    },
    [enableErrorTracking, trackEvent],
  );

  const trackConversion = useCallback(
    (conversionType: string, value?: number) => {
      if (enableConversionTracking) {
        trackEvent("conversion", "business", conversionType, undefined, value);
      }
    },
    [enableConversionTracking, trackEvent],
  );

  // Initialize analytics
  useEffect(() => {
    // Track initial page view
    trackPageView(window.location.pathname);

    // Set up scroll tracking
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollDepth = Math.round(
          (window.scrollY /
            (document.documentElement.scrollHeight - window.innerHeight)) *
            100,
        );
        trackScrollDepth(scrollDepth);
      }, 100);
    };

    // Set up click tracking
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const element = target.tagName.toLowerCase();
      const text = target.textContent?.slice(0, 50) || "";
      trackUserInteraction("click", `${element}: ${text}`);
    };

    // Set up performance tracking
    if (enablePerformanceTracking) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "navigation") {
            const navEntry = entry as PerformanceNavigationTiming;
            trackPerformance(
              "load_time",
              navEntry.loadEventEnd - (navEntry.fetchStart || 0),
            );
          } else if (entry.entryType === "paint") {
            trackPerformance(entry.name, entry.startTime);
          }
        }
      });
      observer.observe({ entryTypes: ["navigation", "paint"] });
    }

    // Set up error tracking
    if (enableErrorTracking) {
      const handleError = (event: ErrorEvent) => {
        trackError(new Error(event.message), event.filename);
      };

      const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
        trackError(new Error(event.reason), "unhandled_promise_rejection");
      };

      window.addEventListener("error", handleError);
      window.addEventListener("unhandledrejection", handleUnhandledRejection);

      return () => {
        window.removeEventListener("error", handleError);
        window.removeEventListener(
          "unhandledrejection",
          handleUnhandledRejection,
        );
      };
    }

    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
    };
  }, [
    trackPageView,
    trackScrollDepth,
    trackUserInteraction,
    trackPerformance,
    trackError,
    enablePerformanceTracking,
    enableErrorTracking,
  ]);

  // Calculate metrics
  useEffect(() => {
    const calculateMetrics = () => {
      const events = JSON.parse(
        localStorage.getItem("analytics_events") || "[]",
      );
      const uniqueUsers = new Set(events.map((e: AnalyticsEvent) => e.userId))
        .size;
      const sessions = new Set(events.map((e: AnalyticsEvent) => e.sessionId))
        .size;

      // Calculate bounce rate (sessions with only one page view)
      const singlePageSessions = events.reduce(
        (acc: Set<string>, event: AnalyticsEvent) => {
          if (event.event === "page_view") {
            const sessionEvents = events.filter(
              (e: AnalyticsEvent) => e.sessionId === event.sessionId,
            );
            if (sessionEvents.length === 1) {
              acc.add(event.sessionId);
            }
          }
          return acc;
        },
        new Set(),
      ).size;

      const bounceRate =
        sessions > 0 ? (singlePageSessions / sessions) * 100 : 0;

      // Calculate average session duration
      const sessionDurations = events.reduce(
        (acc: Map<string, number>, event: AnalyticsEvent) => {
          if (event.event === "page_view") {
            const sessionStart =
              events.find(
                (e: AnalyticsEvent) => e.sessionId === event.sessionId,
              )?.timestamp || 0;
            acc.set(event.sessionId, event.timestamp - sessionStart);
          }
          return acc;
        },
        new Map(),
      );

      const averageSessionDuration =
        Array.from(sessionDurations.values()).reduce(
          (sum: number, duration: unknown) =>
            sum + (typeof duration === "number" ? duration : 0),
          0,
        ) / sessionDurations.size || 0;

      setMetrics((prev) => ({
        ...prev,
        uniqueVisitors: uniqueUsers,
        bounceRate,
        averageSessionDuration,
      }));
    };

    calculateMetrics();
    const interval = setInterval(calculateMetrics, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  // Expose tracking functions globally for easy access
  useEffect(() => {
    (window as Window & { analytics?: Record<string, unknown> }).analytics = {
      trackEvent,
      trackPageView,
      trackUserInteraction,
      trackScrollDepth,
      trackPerformance,
      trackError,
      trackConversion,
      getMetrics: () => metrics,
    };
  }, [
    trackEvent,
    trackPageView,
    trackUserInteraction,
    trackScrollDepth,
    trackPerformance,
    trackError,
    trackConversion,
    metrics,
  ]);

  return null; // This component doesn't render anything
};

// Helper function to update top pages
function updateTopPages(
  topPages: Array<{ page: string; views: number }>,
  page: string,
): Array<{ page: string; views: number }> {
  const existing = topPages.find((p) => p.page === page);
  if (existing) {
    existing.views += 1;
  } else {
    topPages.push({ page, views: 1 });
  }
  return topPages.sort((a, b) => b.views - a.views).slice(0, 10);
}

export default AdvancedAnalytics;
