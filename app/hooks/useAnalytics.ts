<<<<<<< HEAD
import { useCallback } from "react";
interface AnalyticsEvent {
  event_category: string;
  event_label: string;
  value?: number;
=======
import { useState, useEffect } from "react";

export function useAnalytics() {
  const [state, setState] = useState(null);

  useEffect(() => {
    /// Comment
  }, []);

  return { state, setState };
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
}

export const useAnalytics = () => {
  const trackEvent = useCallback(
    (eventName: string, parameters: AnalyticsEvent) => {
      if (typeof window !== "undefined" && "gtag" in window) {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.(
          "event",
          eventName,
          parameters,
        );
      }
    },
    [],
  );

  const trackPageView = useCallback((pagePath: string, pageTitle: string) => {
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.(
        "config",
        "GA_MEASUREMENT_ID",
        {
          page_path: pagePath,
          page_title: pageTitle,
        },
      );
    }
  }, []);

  return {
    trackEvent,
    trackPageView,
  };
};
