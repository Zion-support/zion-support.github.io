import React, { useEffect } from 'react';

const SEOOptimizer: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const optimizeSEO = () => {
      // Add structured data for better SEO
      const addStructuredData = () => {
        const existingScript = document.querySelector('script[type="application/ld+json"]');
        if (existingScript) return;

        const structuredData = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.svg",
          "description": "Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
          },
          "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup"
          ],
          "offers": [
            {
              "@type": "Offer",
              "name": "AI Solutions",
              "description": "Artificial intelligence and machine learning services"
            },
            {
              "@type": "Offer",
              "name": "IT Services",
              "description": "Comprehensive technology solutions and support"
            },
            {
              "@type": "Offer",
              "name": "Micro SAAS",
              "description": "Ready-to-use software solutions for immediate deployment"
            }
          ]
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      };

      // Optimize meta tags
      const optimizeMetaTags = () => {
        // Ensure viewport meta tag
        let viewport = document.querySelector('meta[name="viewport"]');
        if (!viewport) {
          viewport = document.createElement('meta');
          viewport.setAttribute('name', 'viewport');
          viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
          document.head.appendChild(viewport);
        }

        // Add theme color
        let themeColor = document.querySelector('meta[name="theme-color"]');
        if (!themeColor) {
          themeColor = document.createElement('meta');
          themeColor.setAttribute('name', 'theme-color');
          themeColor.setAttribute('content', '#00ffff');
          document.head.appendChild(themeColor);
        }

        // Add language attribute
        if (!document.documentElement.lang) {
          document.documentElement.lang = 'en';
        }
      };

      // Add canonical URL if not present
      const addCanonicalUrl = () => {
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
          canonical = document.createElement('link');
          canonical.setAttribute('rel', 'canonical');
          canonical.setAttribute('href', window.location.href);
          document.head.appendChild(canonical);
        }
      };

      // Add preconnect hints for performance
      const addPreconnectHints = () => {
        const domains = [
          'https://fonts.googleapis.com',
          'https://fonts.gstatic.com',
          'https://www.google-analytics.com'
        ];

        domains.forEach(domain => {
          if (!document.querySelector(`link[rel="preconnect"][href="${domain}"]`)) {
            const link = document.createElement('link');
            link.rel = 'preconnect';
            link.href = domain;
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
          }
        });
      };

      addStructuredData();
      optimizeMetaTags();
      addCanonicalUrl();
      addPreconnectHints();
    };

    // Run optimization when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeSEO);
    } else {
      optimizeSEO();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', optimizeSEO);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SEOOptimizer;
