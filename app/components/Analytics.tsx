'use client';
import React, { useEffect } from &quot;react&quot;

interface AnalyticsProps {
  className?: string;
}

const Analytics: React.FC = () => {
  useEffect(() => {
    const initAnalytics = () => {
      if (typeof window !== &quot;undefined&quot; && window.gtag) {
        window.gtag(&quot;config&quot;, &quot;GA_MEASUREMENT_ID&quot;, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
          page_location: window.location.href,
        });
      }
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
    }
    initAnalytics()
  }, []);

  return null; // Analytics component doesn&apos;t render anything
}
;
export default Analytics
};

export default AnalyticsPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1c80
