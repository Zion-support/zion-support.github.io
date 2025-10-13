import React from 'react';

interface EnhancedAnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedAnalytics({ className = '', children }: EnhancedAnalyticsProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
export default function EnhancedAnalytics({ className = '', children, ...props }: EnhancedAnalyticsProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
import { useState, useEffect } from 'react';
interface EnhancedAnalyticsProps {
  children: React.ReactNode;
}

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

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

}
