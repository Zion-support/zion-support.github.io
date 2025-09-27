import { useEffect } from "react";

interface WebVitalsMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

export function reportWebVitals(metric: WebVitalsMetric) {
  // Send to analytics service
  if (typeof window !== "undefined" && "gtag" in window) {
    (window as any).gtag("event", metric.name, {
      event_category: "Web Vitals",
      event_label: metric.id,
      value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
}

export default function WebVitals() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(reportWebVitals);
        getFID(reportWebVitals);
        getFCP(reportWebVitals);
        getLCP(reportWebVitals);
        getTTFB(reportWebVitals);
      });
    }
  }, []);

  return null;
}