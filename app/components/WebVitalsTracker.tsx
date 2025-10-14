import React from "react";

<<<<<<< HEAD
interface WebVitalsTrackerProps {
  children: ReactNode;
}

const WebVitalsTracker: React.FC<WebVitalsTrackerProps> = ({ children }) => {
  useEffect(() => {
    const sendToAnalytics = (metric: any) => {
      // Send to Google Analytics or other analytics service
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    };

    // Track Core Web Vitals
    const trackWebVitals = () => {
      if (typeof window !== 'undefined' && 'web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(sendToAnalytics);
          getFID(sendToAnalytics);
          getFCP(sendToAnalytics);
          getLCP(sendToAnalytics);
          getTTFB(sendToAnalytics);
        });
      }
    };

    trackWebVitals();
  }, []);

  return <>{children}</>;
=======
const WebVitalsTracker = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">WebVitalsTracker</h2>
      <p>This component is under construction.</p>
    </div>
  );
>>>>>>> origin/main
};

export default WebVitalsTracker;
