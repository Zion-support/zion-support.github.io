<<<<<<< HEAD
'use client';

import { useEffect } from 'react';

interface AnalyticsProps {
  children: React.ReactNode;
}

const Analytics: React.FC<AnalyticsProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics tracking
    const initAnalytics = () => {
      // Google Analytics initialization
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
=======
import React, {useEffect } from &quot;react&quot;
;
interface AnalyticsProps {}
  className?: string;
}
;
const Analytics: React.FC="()" => {useEffect(() => {"
    const initAnalytics: ";";
      if (typeof window !== &quot;undefined&quot; && window.gtag) {
        window.gtag(&quot;config&quot;, &quot;GA_MEASUREMENT_ID&quot;, {}
          page_title: document.title,});
>>>>>>> 995b39195cc56a514459b6fa1d6f8ba8874b88ba
          page_location: window.location.href,
        });
      }
<<<<<<< HEAD
    };

    initAnalytics();
  }, []);

  return <>{children}</>;
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default Analytics;
=======
    }
    initAnalytics()
  }, []);

  return null; // Analytics component doesn't render anything
}
;
export default Analytics
};
;
export default AnalyticsPage;"
>>>>>>> 995b39195cc56a514459b6fa1d6f8ba8874b88ba
