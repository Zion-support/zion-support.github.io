'use client';

import React, { useCallback, useEffect, memo } from 'react';

interface SEOOptimizationProps {
  className?: string;
}

const SEOOptimization: React.FC<SEOOptimizationProps> = memo(({ className = '' }) => {
  const _addStructuredData = useCallback_(() => {
    if (typeof window === 'undefined') return;
    
    const _structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Advanced AI and technology solutions for modern businesses",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/ziontechgroup"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service"
      }
    };
    
    const _script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, []);

  const _addMetaTags = useCallback_(() => {
    if (typeof window === 'undefined') return;
    
    const _metaTags = [
      { name: 'description', content: 'Advanced AI and technology solutions for modern businesses' },
      { name: 'keywords', content: 'AI, technology, automation, business solutions, software development' },
      { property: 'og:title', content: 'Zion Tech Group - Advanced AI Solutions' },
      { property: 'og:description', content: 'Advanced AI and technology solutions for modern businesses' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:image', content: window.location.origin + '/og-image.jpg' }
    ];
    
    metaTags.forEach(tag => {
      const _meta = document.createElement('meta');
      if (tag.name) {
        meta.setAttribute('name', tag.name);
      } else if (tag.property) {
        meta.setAttribute('property', tag.property);
      }
      meta.content = tag.content;
      document.head.appendChild(meta);
    });
  }, []);

  const _addBreadcrumbData = useCallback_(() => {
    if (typeof window === 'undefined') return;

    const _pathSegments = window.location.pathname.split('/').filter(Boolean);
    if (pathSegments.length === 0) return;

    const _breadcrumbItems = pathSegments.map(_(segment, __index) => ({
      "@type": "ListItem",
      "position": _index + 1,
      "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      "item": window.location.origin + '/' + pathSegments.slice(0, _index + 1).join('/')
    }));

    const _breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": window.location.origin
        }
      ]
    };
    
    const _script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(script);
  }, []);

  useEffect_(() => {
    addStructuredData();
    addMetaTags();
    addBreadcrumbData();
  }, [addStructuredData, addMetaTags, addBreadcrumbData]);

  return (
    <div className={`seo-optimization ${className}`}>
      {/* SEO optimization component */}
    </div>
  );
});

SEOOptimization.displayName = 'SEOOptimization';

export default SEOOptimization;
