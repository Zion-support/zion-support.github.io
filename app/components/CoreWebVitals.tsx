<<<<<<< HEAD
import React, { useEffect } from 'react';

interface CoreWebVitalsProps {
  children: React.ReactNode;
  className?: string;
}

const CoreWebVitals: React.FC<CoreWebVitalsProps> = ({ children, className = '' }) => {
  useEffect(() => {
    // Core Web Vitals tracking
    const trackWebVitals = () => {
      // Track Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          if (lastEntry) {
            const lcp = lastEntry.startTime;
            
            // Log in development
            if (process.env.NODE_ENV === 'development') {
              console.log('LCP:', lcp);
            }
            
            // Send to analytics
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'LCP',
                value: Math.round(lcp)
              });
            }
          }
        });
        
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Track First Input Delay (FID)
      if ('PerformanceObserver' in window) {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            const fid = entry.processingStart - entry.startTime;
            
            // Log in development
            if (process.env.NODE_ENV === 'development') {
              console.log('FID:', fid);
            }
            
            // Send to analytics
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'FID',
                value: Math.round(fid)
              });
            }
          });
        });
        
        fidObserver.observe({ entryTypes: ['first-input'] });
      }

      // Track Cumulative Layout Shift (CLS)
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          
          // Log in development
          if (process.env.NODE_ENV === 'development') {
            console.log('CLS:', clsValue);
          }
          
          // Send to analytics
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'CLS',
              value: Math.round(clsValue * 1000) / 1000
            });
          }
        });
        
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }

      // Track First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              const fcp = entry.startTime;
              
              // Log in development
              if (process.env.NODE_ENV === 'development') {
                console.log('FCP:', fcp);
              }
              
              // Send to analytics
              if (typeof window !== 'undefined' && 'gtag' in window) {
                (window as any).gtag('event', 'web_vitals', {
                  event_category: 'Performance',
                  event_label: 'FCP',
                  value: Math.round(fcp)
                });
              }
            }
          });
        });
        
        fcpObserver.observe({ entryTypes: ['paint'] });
      }
    };

    // Start tracking when component mounts
    trackWebVitals();

    // Track page load time
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.navigationStart;
      
      // Log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Page Load Time:', loadTime);
      }
      
      // Send to analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'Page Load Time',
          value: Math.round(loadTime)
        });
      }
    });
  }, []);

  return (
    <div className={`core-web-vitals ${className}`}>
      {children}
    </div>
  );
};

export default CoreWebVitals;
=======
'use client'}
import React from 'react'}
import { Helmet } from 'react-helmet-async'}

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>CoreWebVitals - Zion Tech Group</title>
        <meta name="description" content="Professional corewebvitals services by Zion Tech Group." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            CoreWebVitals
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional corewebvitals solutions tailored to your business needs.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions
              </h3>
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge corewebvitals solutions.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation
              </h3>
              <p className="text-green-700">
                Tailored corewebvitals implementations for your specific requirements.
              </p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-purple-700">
                Round-the-clock support for all your corewebvitals needs.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>}
)
}
>>>>>>> origin/main
