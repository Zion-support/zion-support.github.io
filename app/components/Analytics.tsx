<<<<<<< HEAD
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: "Analytics | Zion Tech Group",
  description: "Professional analytics services by Zion Tech Group",
  keywords: "analytics, technology, services",
  openGraph: {
    title: "Analytics | Zion Tech Group",
    description: "Professional analytics services by Zion Tech Group",
    type: "website",
  },
};

export default function AnalyticsPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Analytics
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional analytics services by Zion Tech Group
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Analytics Services
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive analytics solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Expert Consultation
                  </h3>
                  <p className="text-blue-700">
                    Professional guidance and strategic planning for your analytics needs.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Custom Solutions
                  </h3>
                  <p className="text-green-700">
                    Tailored analytics solutions designed specifically for your business.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-purple-700">
                    Round-the-clock support and maintenance for all your analytics services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
=======
'use client';

import React, { memo, useEffect } from 'react';

interface AnalyticsProps {
  className?: string;
  children?: React.ReactNode;
  gaId?: string;
  gtmId?: string;
  enabled?: boolean;
}

// Extend Window interface for analytics
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const Analytics: React.FC<AnalyticsProps> = memo(({ 
  gaId = process.env.NEXT_PUBLIC_GA_ID,
  gtmId = process.env.NEXT_PUBLIC_GTM_ID,
  enabled = process.env.NODE_ENV === 'production'
}) => {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Google Analytics
    if (gaId) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      }
      gtag('js', new Date());
      gtag('config', gaId, {
        page_title: document.title,
        page_location: window.location.href,
      });

      window.gtag = gtag;
    }

    // Google Tag Manager
    if (gtmId) {
      const script = document.createElement('script');
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');
      `;
      document.head.appendChild(script);

      const noscript = document.createElement('noscript');
      noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.insertBefore(noscript, document.body.firstChild);
    }
  }, [gaId, gtmId, enabled]);

  return null;
});

Analytics.displayName = 'Analytics';

export default Analytics;
>>>>>>> c271e7ba1e2d2951f565c25080f0cec45834b100
