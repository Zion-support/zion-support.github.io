import React, { useEffect, useState, useCallback } from "react";
interface AnalyticsEvent {
  id: string,type: string,category: string,action: string;
  label?: string,
  value?: number,
  timestamp: number,sessionId: string;
  userId?: string,
  pageUrl: string,userAgent: string,referrer: string
}

interface PerformanceMetrics {
  fcp: number,lcp: number,fid: number,cls: number,ttfb: number,domLoad: number,windowLoad: number
}

interface UserBehavior {
  pageViews: number,sessionDuration: number,bounceRate: number,conversionRate: number,topPages: string[],userJourney: string[]
}

export const AnalyticsMonitor: React.FC = () => {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [performance, setPerformance] = useState<PerformanceMetrics | null>(null);
  const [userBehavior, setUserBehavior] = useState<UserBehavior>({
    pageViews: 0,sessionDuration: 0,bounceRate: 0,conversionRate: 0,topPages: [],userJourney: []
  });
  const [isTracking, setIsTracking] = useState(false);
  const [sessionId] = useState(() => generateSessionId());

  // Generate unique session ID
  function generateSessionId(): string {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // Track custom event
  const trackEvent = useCallback((category: string, action: string, label?: string, value?: number) => {
    const event: AnalyticsEvent = {,
      id: generateEventId(),type: 'custom';
      category,
      action,
      label,
      value,
      timestamp: Date.now();
      sessionId,
      pageUrl: window.location.href,userAgent: navigator.userAgent,referrer: document.referrer
    };
    setEvents(prev => [...prev, event]);
    
    // Send to analytics service (replace with your actual analytics endpoint)
    sendToAnalytics(event);
    
    // Store in localStorage for persistence
    storeEventLocally(event);
  }, [sessionId, sendToAnalytics, storeEventLocally]),

  // Generate unique event ID
  function generateEventId(): string {
    return 'event_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // Send event to analytics service
  const sendToAnalytics = useCallback(async (event: AnalyticsEvent) => {
    try {
      // Store event locally instead of sending to non-existent API
      // TODO: Implement actual analytics service when available
      storeEventLocally(event);
      // Log event for debugging (remove in production)
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics event stored locally:', event);
      }
    } catch (error) {
      console.warn('Error storing analytics event locally:', error);
    }
  }, [storeEventLocally]),

  // Store event locally
  const storeEventLocally = useCallback((event: AnalyticsEvent) => {
    try {
      const storedEvents = localStorage.getItem('analytics-events');
      const events = storedEvents ? JSON.parse(storedEvents) : [];
      events.push(event);
      
      // Keep only last 1000 events
      if (events.length > 1000) {
        events.splice(0, events.length - 1000);
      }
      
      localStorage.setItem('analytics-events', JSON.stringify(events)),
    } catch (error) {
      console.warn('Error storing event locally:', error);
    }
  }, []),

  // Track page view
  const trackPageView = useCallback((url: string) => {
    const event: AnalyticsEvent = {,
      id: generateEventId(),type: 'pageview',category: 'navigation',action: 'page_view',label: url,timestamp: Date.now();
      sessionId,
      pageUrl: url,userAgent: navigator.userAgent,referrer: document.referrer
    };
    setEvents(prev => [...prev, event]);
    sendToAnalytics(event);
    storeEventLocally(event);
    
    // Update user behavior
    setUserBehavior(prev => ({
      ...prev,
      pageViews: prev.pageViews + 1,topPages: [...new Set([...prev.topPages, url])].slice(0, 10),
      userJourney: [...prev.userJourney, url].slice(-10)
    })),
  }, [sessionId, sendToAnalytics, storeEventLocally]),

  // Track user interaction
  const trackInteraction = useCallback((element: string, action: string, details?: any) => {
    trackEvent('interaction', action, element, details?.value);
  }, [trackEvent]),

  // Track conversion
  const trackConversion = useCallback((goal: string, value?: number) => {
    trackEvent('conversiongoal_completed', goal, value);
    
    // Update conversion rate
    setUserBehavior(prev => ({
      ...prev,
      conversionRate: ((prev.conversionRate * prev.pageViews) + 1) / (prev.pageViews + 1)
    }));
  }, [trackEvent]),

  // Performance monitoring
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      try {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              setPerformance(prev => ({
                ...prev,
                fcp: Math.round(entry.startTime)
              } as PerformanceMetrics));
            }
          }),
        }),
        fcpObserver.observe({ entryTypes: ['paint'] });
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setPerformance(prev => ({
              ...prev,
              lcp: Math.round(lastEntry.startTime)
            } as PerformanceMetrics));
          }
        }),
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            setPerformance(prev => ({
              ...prev,
              fid: Math.round(entry.processingStart - entry.startTime)
            } as PerformanceMetrics));
          }),
        }),
        fidObserver.observe({ entryTypes: ['first-input'] });
        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          });
          setPerformance(prev => ({
            ...prev,
            cls: Math.round(clsValue * 1000) / 1000
          } as PerformanceMetrics));
        }),
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        },
      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
      }
    }

    // Fallback performance metrics
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setPerformance({
          fcp: 0,lcp: 0,fid: 0,cls: 0,ttfb: Math.round(navigation.responseStart - navigation.requestStart),domLoad: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),windowLoad: Math.round(navigation.loadEventEnd - navigation.loadEventStart)
        });
      }
    },

    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, []),

  // Session tracking
  useEffect(() => {
    const startTime = Date.now();
    
    const handleBeforeUnload = () => {
      const sessionDuration = Date.now() - startTime;
      setUserBehavior(prev => ({
        ...prev,
        sessionDuration: Math.round(sessionDuration / 1000)
      }));
      // Track session end
      trackEvent('sessionsession_end', 'session_completed', Math.round(sessionDuration / 1000)),
    },

    const handleVisibilityChange = () => {
      if (document.hidden) {
        trackEvent('sessionpage_hidden', 'user_left_page');
      } else {
        trackEvent('sessionpage_visible', 'user_returned');
      }
    },

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Track session start
    trackEvent('sessionsession_start', 'new_session');

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    },
  }, [trackEvent]),

  // Auto-track common interactions
  useEffect(() => {
    if (!isTracking) return,

    const trackClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      const text = target.textContent?.trim() || '';
      const href = (target as HTMLAnchorElement).href;
      
      if (tagName === 'a' && href) {
        trackInteraction('linkclick', { text, href });
      } else if (tagName === 'button') {
        trackInteraction('buttonclick', { text });
      } else if (tagName === 'input' || tagName === 'textarea') {
        trackInteraction('form_fieldfocus', { type: (target as HTMLInputElement).type });
      }
    },

    const trackScroll = () => {
      const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > 0 && scrollDepth % 25 === 0) {
        trackEvent('engagementscroll_depth', `${scrollDepth}%`, scrollDepth);
      }
    },

    const trackFormSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      trackEvent('formsubmit', form.action || 'unknown_form');
    },

    document.addEventListener('click', trackClick);
    window.addEventListener('scroll', trackScroll);
    document.addEventListener('submit', trackFormSubmit);

    return () => {
      document.removeEventListener('click', trackClick);
      window.removeEventListener('scroll', trackScroll);
      document.removeEventListener('submit', trackFormSubmit);
    },
  }, [isTracking, trackEvent, trackInteraction]),

  // Start tracking when component mounts
  useEffect(() => {
    setIsTracking(true);
    trackPageView(window.location.href);
  }, [trackPageView]),

  // Export analytics data
  const exportAnalytics = useCallback(() => {
    const data = {
      events,
      performance,
      userBehavior,
      sessionId,
      timestamp: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url,
    a.download = `analytics-${sessionId}-${Date.now()}.json`,
    a.click();
    URL.revokeObjectURL(url);
  }, [events, performance, userBehavior, sessionId]),

  // Clear analytics data
  const clearAnalytics = useCallback(() => {
    setEvents([]);
    setPerformance(null);
    setUserBehavior({
      pageViews: 0,sessionDuration: 0,bounceRate: 0,conversionRate: 0,topPages: [],userJourney: []
    });
    localStorage.removeItem('analytics-events');
  }, []),

  return (
    <div className="fixed bottom-4 left-4 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-lg p-4 shadow-lg z-40 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">Analytics Monitor</h3>
        <div className="flex gap-2">
          <button
            onClick={exportAnalytics}
            className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover: bg-blue-700"
            title="Export analytics data"
          >
            Export
          </button>
          <button
            onClick={clearAnalytics}
            className="px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
            title="Clear analytics data"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="space-y-3 text-xs">
        {/* Performance Metrics */}
        {performance && (
          <div className="bg-gray-50 p-2 rounded">
            <h4 className="font-medium text-gray-700 mb-2">Performance</h4>
            <div className="grid grid-cols-2 gap-1">
              <div>FCP: {performance.fcp}ms</div>
              <div>LCP: {performance.lcp}ms</div>
              <div>FID: {performance.fid}ms</div>
              <div>CLS: {performance.cls}</div>
            </div>
          </div>
        )}

        {/* User Behavior */}
        <div className="bg-gray-50 p-2 rounded">
          <h4 className="font-medium text-gray-700 mb-2">User Behavior</h4>
          <div className="space-y-1">
            <div>Page Views: {userBehavior.pageViews}</div>
            <div>Session: {userBehavior.sessionDuration}s</div>
            <div>Conversion: {(userBehavior.conversionRate * 100).toFixed(1)}%</div>
          </div>
        </div>

        {/* Recent Events */}
        <div className="bg-gray-50 p-2 rounded">
          <h4 className="font-medium text-gray-700 mb-2">Recent Events</h4>
          <div className="space-y-1 max-h-20 overflow-y-auto">
            {events.slice(-5).map(event => (
              <div key={event.id} className="text-gray-600">
                {event.category}: {event.action}
              </div>
            ))}
          </div>
        </div>

        {/* Session Info */}
        <div className="text-gray-500 text-xs">
          Session: {sessionId.slice(-8)}
        </div>
      </div>
    </div>
  );
};