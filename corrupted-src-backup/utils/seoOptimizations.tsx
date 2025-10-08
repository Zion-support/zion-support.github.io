/**
 * SEO Optimization Utilities
 * Comprehensive SEO enhancements for the Zion website
 */

import { Helmet } from 'react-helmet-async';

// Meta tags utilities
export const seoUtils = {/* content */}
  // Generate structured data for organization
  generateOrganizationSchema: () => ({/* content */}
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://zion.app",
    "logo": "https://zion.app/logo.png",
    "description": "Advanced AI and IT Solutions",
    "sameAs": [
      "https://linkedin.com/company/zion-tech"
    ]
  }),

  // Generate breadcrumb structured data
  generateBreadcrumbSchema: (items: Array<{name: string, url: string}>) => ({/* content */}
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({/* content */}
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }),

  // Generate FAQ structured data
  generateFAQSchema: (faqs: Array<{question: string, answer: string}>) => ({/* content */}
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({/* content */}
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {/* content */}
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }),

  // Generate article structured data
  generateArticleSchema: (article: {/* content */}
    title: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified: string;
    image?: string;
    url: string;
  }) => ({/* content */}
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {/* content */}
      "@type": "Person",
      "name": article.author
    },
    "image": {/* content */}
      "url": article.image || "https://zion.app/logo.png"
    }
  })
});
};

// Sitemap generation utilities
export const sitemapUtils = {/* content */}
  // Generate sitemap entries
  generateSitemapEntry: (url: string, lastmod?: string, changefreq?: string, priority?: string) => {/* content */}
    return {/* content */}
      url,
      lastmod: lastmod || new Date().toISOString().split('T')[0],
      changefreq: changefreq || 'weekly',
      priority: priority || '0.8'
    };
  },

  // Generate robots.txt content
  generateRobotsTxt: (sitemapUrl: string = 'https://zion.app/sitemap.xml') => {/* content */}
    return `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}`;
  }
};

// URL optimization utilities
export const urlUtils = {/* content */}
  // Generate canonical URL
  generateCanonicalUrl: (path: string, baseUrl: string = 'https://zion.app') => {/* content */}
    return `${baseUrl}${path}`;
  },

  // Generate Open Graph URL
  generateOGUrl: (path: string, baseUrl: string = 'https://zion.app') => {/* content */}
    return `${baseUrl}${path}`;
  },

  // Generate Twitter Card URL
  generateTwitterUrl: (path: string, baseUrl: string = 'https://zion.app') => {/* content */}
    return `${baseUrl}${path}`;
  }
};

// Content optimization utilities
export const contentOptimization = {/* content */}
  // Extract keywords from content
  extractKeywords: (content: string, minLength: number = 3): string[] => {/* content */}
    const words = content.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length >= minLength);
    
    const wordCount = words.reduce((acc, word) => {/* content */}
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return Object.entries(wordCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([word]) => word);
  },

  // Generate meta description
  generateMetaDescription: (content: string, maxLength: number = 160): string => {/* content */}
    const cleanContent = content.replace(/<[^>]*>/g, '').trim();
    if (cleanContent.length <= maxLength) return cleanContent;
    
    return cleanContent.substring(0, maxLength - 3) + '...';
  },

  // Generate title tag
  generateTitle: (pageTitle: string, siteName: string = 'Zion Tech Group', separator: string = ' | '): string => {/* content */}
    return pageTitle ? `${pageTitle}${separator}${siteName}` : siteName;
  }
};

// Performance SEO utilities
export const performanceSEO = {/* content */}
  // Preload critical resources
  preloadCriticalResources: () => {/* content */}
    const criticalResources = [
      { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2' },
      { href: '/css/critical.css', as: 'style' },
      { href: '/images/logo.svg', as: 'image' }
    ];

    criticalResources.forEach(resource => {/* content */}
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      document.head.appendChild(link);
    });
  },

  // Optimize images for SEO
  optimizeImageSEO: (src: string, alt: string, width?: number, height?: number): {/* content */}
    src: string;
    alt: string;
    width?: number;
    height?: number;
    loading: 'lazy';
  } => {/* content */}
    return {/* content */}
      src: src.includes('?') ? src : `${src}?w=${width || 800}&h=${height || 600}&f=webp&q=85`,
      alt,
      width,
      height,
      loading: 'lazy' as const
    };
  }
};

// Analytics and tracking utilities
export const analyticsUtils = {/* content */}
  // Track page views
  trackPageView: (url: string, title: string) => {/* content */}
    if (typeof window !== 'undefined' && (window as typeof window & { gtag?: Function }).gtag) {/* content */}
      (window as typeof window & { gtag: Function }).gtag('config', 'GA_MEASUREMENT_ID', {/* content */}
        page_title: title,
        page_location: url
      });
    }
  },

  // Track custom events
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => {/* content */}
    if (typeof window !== 'undefined' && (window as Window & { gtag?: Function }).gtag) {/* content */}
      (window as Window & { gtag: Function }).gtag('event', eventName, parameters);
    }
  },

  // Track conversion events
  trackConversion: (conversionId: string, value?: number) => {/* content */}
    if (typeof window !== 'undefined' && (window as typeof window & { gtag?: Function }).gtag) {/* content */}
      (window as typeof window & { gtag: Function }).gtag('event', 'conversion', {/* content */}
        send_to: conversionId,
        value: value
      });
    }
  }
};

// Core Web Vitals tracking
export const coreWebVitals = {/* content */}
  // Track Core Web Vitals
  trackCoreWebVitals: () => {/* content */}
    if (typeof window === 'undefined') return;

    const trackMetric = (metric: { name: string; value: number; id: string; delta: number }) => {/* content */}
      analyticsUtils.trackEvent('core_web_vitals', {/* content */}
        metric_name: metric.name,
        metric_value: Math.round(metric.value),
        metric_id: metric.id,
        metric_delta: metric.delta
      });
    };

    // Import and track web vitals
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {/* content */}
      onCLS(trackMetric);
      // onFID(trackMetric); // onFID is deprecated in newer web-vitals versions
      onFCP(trackMetric);
      onLCP(trackMetric);
      onTTFB(trackMetric);
    });
  }
};

// SEO component for React
export const SEOComponent = ({/* content */}
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  structuredData 
}: {/* content */}
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: Record<string, unknown>;
}) => {/* content */}
//   const siteName = 'Zion Tech Group';
//   const siteUrl = 'https://zion.app';
//   const defaultImage = `${siteUrl}/images/og-default.jpg`;
  
//   const fullTitle = title ? `${title} | ${siteName}` : siteName;
//   const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
//   const fullImage = image ? `${siteUrl}${image}` : defaultImage;

  return (
  <div> </div><Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={siteName} />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Initialize SEO optimizations
export const initializeSEO = () => {/* content */}
  // Preload critical resources
  performanceSEO.preloadCriticalResources();
  
  // Track Core Web Vitals
  coreWebVitals.trackCoreWebVitals();
  
  // Set up meta tags
  if (typeof document !== 'undefined') {/* content */}
//     const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {/* content */}
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(meta);
    }
  }
};