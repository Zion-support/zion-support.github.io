<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
import React from 'react';

interface EnhancedAnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function EnhancedAnalytics({ className = '', children }: EnhancedAnalyticsProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
export default function EnhancedAnalytics({ className = '', children, ...props }: EnhancedAnalyticsProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
import { useState, useEffect } from 'react';
interface EnhancedAnalyticsProps {
  children: React.ReactNode;
}
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c


<<<<<<< HEAD
    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined') {
        // Page view tracking would go here
        console.log('Page view tracked:', window.location.pathname);
      }
    };

    initializeAnalytics();
    trackPageView();
  }, []);

  return <>{children}</>;
};

export default EnhancedAnalytics;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
=======
import React from 'react';

interface EnhancedanalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Enhancedanalytics({ className = '', children, ...props }: EnhancedanalyticsProps) {
  return (
    <div className={`enhancedanalytics-component ${className}`} {...props}>
      {children}
    </div>
  );
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5

}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
