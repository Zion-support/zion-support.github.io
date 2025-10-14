<<<<<<< HEAD
import React from 'react'
'use client''
import React from 'react';
"use client"
export default function ComponentsPage() {return (
    <div className="min-h-screen bg-gray-900 text-white py-20">"
      <div className="container mx-auto px-4">"
        <h1 className="text-4xl font-bold mb-8">Components</h1>"
        <p className="text-gray-300 text-lg">"
          This page is under development.;
        </p>
      </div>
    </div>
  )
=======
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
<<<<<<< HEAD
  ); }
>>>>>>> origin/main
          This page is under development.</p></div></div>
  )
        </p>
      </div>
    </div>
  )}
<<<<<<< HEAD
''
=======
        </p>;
      </div>
    </div>
  );}
}
'
=======
  );
>>>>>>> origin/main
};

export default WebVitalsTracker;
>>>>>>> origin/main
>>>>>>> origin/main
