import React, { useEffect } from 'react';
import { WebVitalsTrackerProps } from 'lucide-react';
interface WebVitalsTrackerProps {
  children: React.ReactNode;
}
interface WebVitalsData {
  name: string;,
    value: number;,
    delta: number;,
    id: string;,
    navigationType: string;
}
const WebVitalsTracker: React.FC<WebVitalsTrackerProps> = ({ children }) => {
  useEffect(() => {
    const sendToAnalytics = () => {
  return;
});
      }
      // Log to console in development,
    if (process.env.NODE_ENV === 'development') {
              }
    };
    // Track Core Web Vitals,
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  }, []);
  return <>{children}</>;
};
export default WebVitalsTracker;