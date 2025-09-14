"use client";
import React{ useEffect } from 'react';

const AdvancedSEOAnalytics = () => {
  useEffect(() => {
    // Enhanced SEO tracking
    const trackPageView = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event'page_view'{
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname
        });
      }
    };

    // Track user engagement
    const trackEngagement = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event'engagement'{
          engagement_time_msec: Date.now(),
          page_title: document.title
        });
      }
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      let maxScroll = 0;
      const trackScroll = () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event'scroll'{
              scroll_depth: maxScroll
            });
          }
        }
      };

      window.addEventListener('scroll'trackScroll);
      return () => window.removeEventListener('scroll'trackScroll);
    };

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event'timing_complete'{
          name: 'time_on_page',
          value: timeOnPage
        });
      }
    };

    // Initialize tracking
    trackPageView();
    trackEngagement();
    const cleanupScroll = trackScrollDepth();

    // Track time on page when user leaves
    const handleBeforeUnload = () => {
      trackTimeOnPage();
    };

    window.addEventListener('beforeunload'handleBeforeUnload);

    return () => {
      cleanupScroll();
      window.removeEventListener('beforeunload'handleBeforeUnload);
    };
  }[]);

  // Enhanced structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Transform your business with cutting-edge AIcloud infrastructureand micro SaaS solutions. Expert consulting and implementation services.",
    "url": "https://zion.app",
    "logo": "https://zion.app/logo.png",
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/zion-tech-group"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-ZION-TECH",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "offers": {
      "@type": "Offer",
      "name": "AI Implementation Services",
      "description": "Revolutionary AI solutions with 10,000% ROI",
      "price": "Contact for pricing",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      {/* Enhanced structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Performance monitoring script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Enhanced performance monitoring
            if (typeof window !== 'undefined') {
              window.addEventListener('load'function() {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData && window.gtag) {
                  window.gtag('event'timing_complete'{
                    name: 'page_load_time',
                    value: Math.round(perfData.loadEventEnd - perfData.loadEventStart)
                  });
                }
              });
            }
          `
        }}
      />
    </>
  );
};

export default AdvancedSEOAnalytics;