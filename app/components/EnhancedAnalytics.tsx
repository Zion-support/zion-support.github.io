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

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
