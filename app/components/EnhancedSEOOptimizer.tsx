import React, { useEffect, useState } from 'react';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  twitterCard: string;
  structuredData: object;
  robots: string;
  language: string;
  author: string;
  publisher: string;
}

interface EnhancedSEOOptimizerProps {
  seoData: SEOData;
  children: React.ReactNode;
}

const EnhancedSEOOptimizer: React.FC<EnhancedSEOOptimizerProps> = ({ seoData, children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set document title
    document.title = seoData.title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: string) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', seoData.description);
    updateMetaTag('keywords', seoData.keywords.join(', '));
    updateMetaTag('author', seoData.author);
    updateMetaTag('robots', seoData.robots);
    updateMetaTag('language', seoData.language);
    updateMetaTag('publisher', seoData.publisher);

    // Open Graph tags
    updateMetaTag('', seoData.title, 'og:title');
    updateMetaTag('', seoData.description, 'og:description');
    updateMetaTag('', seoData.canonical, 'og:url');
    updateMetaTag('', seoData.ogImage, 'og:image');
    updateMetaTag('', 'website', 'og:type');
    updateMetaTag('', 'Zion Tech Group', 'og:site_name');

    // Twitter Card tags
    updateMetaTag('', 'summary_large_image', 'twitter:card');
    updateMetaTag('', seoData.title, 'twitter:title');
    updateMetaTag('', seoData.description, 'twitter:description');
    updateMetaTag('', seoData.ogImage, 'twitter:image');
    updateMetaTag('', '@ziontechgroup', 'twitter:site');
    updateMetaTag('', '@ziontechgroup', 'twitter:creator');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', seoData.canonical);

    // Structured data
    const structuredDataScript = document.createElement('script');
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.textContent = JSON.stringify(seoData.structuredData);
    
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(structuredDataScript);

    // Add performance hints
    const addResourceHint = (rel: string, href: string, as?: string, type?: string) => {
      const link = document.createElement('link');
      link.setAttribute('rel', rel);
      link.setAttribute('href', href);
      if (as) link.setAttribute('as', as);
      if (type) link.setAttribute('type', type);
      document.head.appendChild(link);
    };

    // Preload critical resources
    addResourceHint('preload', '/css/critical.css', 'style');
    addResourceHint('preload', '/fonts/inter.woff2', 'font', 'font/woff2');
    
    // Preconnect to external domains
    addResourceHint('preconnect', 'https://fonts.googleapis.com');
    addResourceHint('preconnect', 'https://www.google-analytics.com');
    addResourceHint('preconnect', 'https://www.googletagmanager.com');

    // Add DNS prefetch for performance
    addResourceHint('dns-prefetch', 'https://fonts.gstatic.com');
    addResourceHint('dns-prefetch', 'https://www.google-analytics.com');

    setIsLoaded(true);

    // Cleanup function
    return () => {
      // Remove dynamically added meta tags and scripts
      const dynamicMetaTags = document.querySelectorAll('meta[data-dynamic="true"]');
      dynamicMetaTags.forEach(tag => tag.remove());
    };
  }, [seoData]);

  // Generate breadcrumb structured data
  const generateBreadcrumbStructuredData = () => {
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const breadcrumbItems = pathSegments.map((segment, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      item: `https://ziontechgroup.com/${pathSegments.slice(0, index + 1).join('/')}`
    }));

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://ziontechgroup.com'
        },
        ...breadcrumbItems
      ]
    };
  };

  // Add breadcrumb structured data
  useEffect(() => {
    if (isLoaded) {
      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.textContent = JSON.stringify(generateBreadcrumbStructuredData());
      breadcrumbScript.setAttribute('data-dynamic', 'true');
      document.head.appendChild(breadcrumbScript);
    }
  }, [isLoaded]);

  // Track page views and performance
  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined') {
      // Track page view
      if ('gtag' in window) {
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: seoData.title,
          page_location: seoData.canonical,
          custom_map: {
            dimension1: 'page_type',
            dimension2: 'content_category'
          }
        });
      }

      // Track Core Web Vitals
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            if ('gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'CLS',
                value: Math.round(metric.value * 1000)
              });
            }
          });

          getFID((metric) => {
            if ('gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'FID',
                value: Math.round(metric.value)
              });
            }
          });

          getFCP((metric) => {
            if ('gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'FCP',
                value: Math.round(metric.value)
              });
            }
          });

          getLCP((metric) => {
            if ('gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'LCP',
                value: Math.round(metric.value)
              });
            }
          });

          getTTFB((metric) => {
            if ('gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'TTFB',
                value: Math.round(metric.value)
              });
            }
          });
        });
      }
    }
  }, [isLoaded, seoData]);

  return <>{children}</>;
};

export default EnhancedSEOOptimizer;