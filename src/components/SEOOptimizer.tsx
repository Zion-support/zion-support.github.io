import React, { useEffect } from 'react';

interface SEOOptimizerProps {
  children: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Add structured data for organization
    const addStructuredData = () => {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "logo": "https://ziontechgroup.com/logo.png",
        "description": "Leading provider of AI, micro SaaS, and IT solutions for enterprise transformation",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Silicon Valley",
          "addressRegion": "CA",
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
          "https://linkedin.com/company/zion-tech-group",
          "https://github.com/ZionClouds"
        ],
        "foundingDate": "2020",
        "numberOfEmployees": "50-100",
        "services": [
          "AI Services",
          "Micro SaaS Development",
          "IT Consulting",
          "Cloud Solutions",
          "Cybersecurity"
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    };

    // Add breadcrumb structured data
    const addBreadcrumbData = () => {
      const path = window.location.pathname;
      const segments = path.split('/').filter(Boolean);
      
      if (segments.length > 0) {
        const breadcrumbData = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ziontechgroup.com"
            }
          ]
        };

        segments.forEach((segment, index) => {
          const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
          breadcrumbData.itemListElement.push({
            "@type": "ListItem",
            "position": index + 2,
            "name": name,
            "item": `https://ziontechgroup.com/${segments.slice(0, index + 1).join('/')}`
          });
        });

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(breadcrumbData);
        document.head.appendChild(script);
      }
    };

    // Optimize meta tags
    const optimizeMetaTags = () => {
      // Add viewport meta tag if not present
      if (!document.querySelector('meta[name="viewport"]')) {
        const viewport = document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = 'width=device-width, initial-scale=1.0';
        document.head.appendChild(viewport);
      }

      // Add theme color
      if (!document.querySelector('meta[name="theme-color"]')) {
        const themeColor = document.createElement('meta');
        themeColor.name = 'theme-color';
        themeColor.content = '#2563eb';
        document.head.appendChild(themeColor);
      }

      // Add robots meta tag
      if (!document.querySelector('meta[name="robots"]')) {
        const robots = document.createElement('meta');
        robots.name = 'robots';
        robots.content = 'index, follow';
        document.head.appendChild(robots);
      }
    };

    // Add Open Graph meta tags
    const addOpenGraphTags = () => {
      const ogTags = [
        { property: 'og:site_name', content: 'Zion Tech Group' },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:site', content: '@ziontechgroup' },
        { name: 'twitter:creator', content: '@ziontechgroup' }
      ];

      ogTags.forEach(tag => {
        if (!document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`)) {
          const meta = document.createElement('meta');
          if (tag.property) {
            meta.setAttribute('property', tag.property);
          } else {
            meta.setAttribute('name', tag.name!);
          }
          meta.setAttribute('content', tag.content);
          document.head.appendChild(meta);
        }
      });
    };

    // Initialize SEO optimizations
    addStructuredData();
    addBreadcrumbData();
    optimizeMetaTags();
    addOpenGraphTags();

    // Update structured data on route changes
    const handleRouteChange = () => {
      addBreadcrumbData();
    };

    // Listen for navigation changes (for SPAs)
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return <>{children}</>;
};

export default SEOOptimizer;