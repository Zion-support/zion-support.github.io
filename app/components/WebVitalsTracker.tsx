import React from 'react'';use client';
import React from 'react';;
'use client';
export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Components</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.</p>
      </div>
    </div>
  )
}

const WebVitalsTracker: React.FC<WebVitalsTrackerProps> = ({ children }) => {
  useEffect(() => {
    // Track Core Web Vitals
    const trackWebVitals = () => {
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            console.log('CLS:', metric);
          });
          getFID((metric) => {
            console.log('FID:', metric);
          });
          getFCP((metric) => {
            console.log('FCP:', metric);
          });
          getLCP((metric) => {
            console.log('LCP:', metric);
          });
          getTTFB((metric) => {
            console.log('TTFB:', metric);
          });
        });
      }
    };

    trackWebVitals();
  }, []);

  return <>{children}</>;
};
