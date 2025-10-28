'use client';


import React, { useEffect, memo, useCallback } from 'react';

interface SEOOptimizationProps {
  className?: string;
}

const SEOOptimization: React.FC<SEOOptimizationProps> = memo(({ className = '' }) => {
  // Add structured data
  const addStructuredData = useCallback(() => {
    if (typeof window === 'undefined') return;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Leading technology solutions provider specializing in AI, blockchain, and modern web development",
      "url": window.location.origin,
      "logo": window.location.origin + "/logo.png",
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

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, []);

  // Optimize meta tags
  const optimizeMetaTags = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = window.location.href;
      document.head.appendChild(link);
    }

    // Add Open Graph tags if not present
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = document.title;
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = document.querySelector('meta[name="description"]')?.getAttribute('content') || 'Zion Tech Group - Leading technology solutions';
      document.head.appendChild(meta);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:url');
      meta.content = window.location.href;
      document.head.appendChild(meta);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:image');
      meta.content = window.location.origin + '/og-image.jpg';
      document.head.appendChild(meta);
    }
  }, []);

  // Add breadcrumb structured data
  const addBreadcrumbData = useCallback(() => {
    if (typeof window === 'undefined') return;

    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    if (pathSegments.length === 0) return;

    
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(script);
  }, []);

  // Optimize images for SEO
  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return;

    document.querySelectorAll('img').forEach(img => {
      // Add alt text if missing
      if (!img.alt) {
        img.alt = img.src.split('/').pop()?.split('.')[0] || 'Image';
      }

      // Add loading="lazy" for images below the fold
      if (!img.hasAttribute('loading')) {
        img.loading = 'lazy';
      }

      // Add width and height attributes for layout stability
      if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
        img.addEventListener('load', () => {
          img.width = img.naturalWidth;
          img.height = img.naturalHeight;
        });
      }
    });
  }, []);

  useEffect(() => {
    addStructuredData();
    optimizeMetaTags();
    addBreadcrumbData();
    optimizeImages();
  }, [addStructuredData, optimizeMetaTags, addBreadcrumbData, optimizeImages]);

  return (
    <div className={`seo-optimization ${className}`} style={{ display: 'none' }}>
      {/* This component doesn't render anything visible */}
    </div>
  );
});

SEOOptimization.displayName = 'SEOOptimization';

export default SEOOptimization;