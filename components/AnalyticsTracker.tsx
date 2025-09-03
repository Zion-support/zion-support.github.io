import React, { useEffect } from "react";

interface AnalyticsTrackerProps {
  pageName?: string;
  customEvents?: Array<{
    event: string;
    category?: string;
    action?: string;
    label?: string;
    value?: number;
  }>;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({
  pageName = "Home",
  customEvents = [],
}) => {
  useEffect(() => {
    const trackPageView = () => {
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "page_view", {
          page_title: pageName,
          page_location: window.location.href,
        });
      }
    };

    const trackScrollDepth = () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      if (typeof window !== "undefined" && (window as any).gtag) {
        if (scrollDepth >= 25 && scrollDepth < 50) {
          (window as any).gtag("event", "scroll", { event_label: "25_percent" });
        } else if (scrollDepth >= 50 && scrollDepth < 75) {
          (window as any).gtag("event", "scroll", { event_label: "50_percent" });
        } else if (scrollDepth >= 75) {
          (window as any).gtag("event", "scroll", { event_label: "75_percent" });
        }
      }
    };

    const trackButtonClicks = (e: Event) => {
      const target = e.target as HTMLElement;
      const button = target.closest("button");
      if (button && typeof window !== "undefined" && (window as any).gtag) {
        const buttonText = button.textContent || "Unknown";
        (window as any).gtag("event", "click", {
          event_category: "button",
          event_label: buttonText,
          page_title: pageName,
        });
      }
    };

    // Fire initial page view
    trackPageView();

    // Attach listeners
    window.addEventListener("scroll", trackScrollDepth, { passive: true });
    window.addEventListener("click", trackButtonClicks as EventListener);

    // Fire any custom events provided
    if (Array.isArray(customEvents)) {
      customEvents.forEach((evt) => {
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", evt.event, {
            event_category: evt.category,
            event_action: evt.action,
            event_label: evt.label,
            value: evt.value,
          });
        }
      });
    }

    return () => {
      window.removeEventListener("scroll", trackScrollDepth);
      window.removeEventListener("click", trackButtonClicks as EventListener);
    };
  }, [pageName, customEvents]);

  return null;
};

export default AnalyticsTracker;