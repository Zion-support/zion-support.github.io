import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  lang?: string;
  meta?: Array<{ name: string; content: string }>;
  links?: Array<{ rel: string; href: string }>;
  scripts?: Array<{ type: string; innerHTML: string }>;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Leading AI & Technology Solutions Provider',
  description = 'Transform your business with cutting-edge AI, cybersecurity, cloud infrastructure, and digital transformation solutions from Zion Tech Group.',
  keywords = ['AI', 'artificial intelligence', 'cybersecurity', 'cloud computing', 'digital transformation', 'technology services', 'Zion Tech Group'],
  author = 'Zion Tech Group',
  canonical = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
  lang = 'en',
  meta = [],
  links = [],
  scripts = [],
}) => {
  // Default structured data for organization
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: canonical,
    logo: `${canonical}/logo.png`,
    description: description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://www.linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
    ],
    ...structuredData,
  };

  // Enhanced meta tags
  const enhancedMeta = [
    // Basic SEO
    { name: 'description', content: description },
    { name: 'keywords', content: keywords.join(', ') },
    { name: 'author', content: author },
    { name: 'robots', content: `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}, max-snippet:-1, max-image-preview:large, max-video-preview:-1` },
    
    // Open Graph
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: ogType },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:site_name', content: 'Zion Tech Group' },
    { property: 'og:locale', content: 'en_US' },
    
    // Twitter
    { name: 'twitter:card', content: twitterCard },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
    { name: 'twitter:site', content: '@ziontechgroup' },
    
    // Additional SEO
    { name: 'format-detection', content: 'telephone=no,address=no,email=no' },
    { name: 'color-scheme', content: 'dark light' },
    { name: 'theme-color', content: '#06b6d4' },
    { name: 'msapplication-TileColor', content: '#06b6d4' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-title', content: 'Zion Tech Group' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    
    // Performance and security
    { name: 'referrer', content: 'strict-origin-when-cross-origin' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover' },
    
    ...meta,
  ];

  // Enhanced links
  const enhancedLinks = [
    // Canonical
    { rel: 'canonical', href: canonical },
    
    // PWA
    { rel: 'manifest', href: '/manifest.json' },
    
    // Icons
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#06b6d4' },
    
    // Preconnect for performance
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    { rel: 'preconnect', href: 'https://www.google-analytics.com' },
    
    // DNS prefetch
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
    
    ...links,
  ];

  // Enhanced scripts
  const enhancedScripts = [
    // Structured data
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(defaultStructuredData),
    },
    
    // Performance monitoring
    {
      type: 'text/javascript',
      innerHTML: `
        // Performance monitoring
        window.addEventListener('load', () => {
          if ('performance' in window) {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData) {
              // Send performance data to analytics
              if (typeof gtag !== 'undefined') {
                gtag('event', 'timing_complete', {
                  name: 'load',
                  value: Math.round(perfData.loadEventEnd - perfData.loadEventStart),
                  event_category: 'Performance'
                });
              }
            }
          }
        });
        
        // Core Web Vitals monitoring
        if ('PerformanceObserver' in window) {
          try {
            // LCP
            new PerformanceObserver((entryList) => {
              const entries = entryList.getEntries();
              const lastEntry = entries[entries.length - 1];
              if (lastEntry) {
                const lcp = lastEntry.startTime;
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'web_vitals', {
                    event_category: 'Web Vitals',
                    event_label: 'LCP',
                    value: Math.round(lcp),
                    non_interaction: true
                  });
                }
              }
            }).observe({ entryTypes: ['largest-contentful-paint'] });
            
            // FID
            new PerformanceObserver((entryList) => {
              const entries = entryList.getEntries();
              entries.forEach((entry) => {
                const fid = entry.processingStart - entry.startTime;
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'web_vitals', {
                    event_category: 'Web Vitals',
                    event_label: 'FID',
                    value: Math.round(fid),
                    non_interaction: true
                  });
                }
              });
            }).observe({ entryTypes: ['first-input'] });
            
            // CLS
            new PerformanceObserver((entryList) => {
              let clsValue = 0;
              const entries = entryList.getEntries();
              entries.forEach((entry) => {
                if (!entry.hadRecentInput) {
                  clsValue += entry.value;
                }
              });
              if (typeof gtag !== 'undefined') {
                gtag('event', 'web_vitals', {
                  event_category: 'Web Vitals',
                  event_label: 'CLS',
                  value: Math.round(clsValue * 1000),
                  non_interaction: true
                });
              }
            }).observe({ entryTypes: ['layout-shift'] });
          } catch (error) {
            console.warn('Performance monitoring failed:', error);
          }
        }
      `,
    },
    
    ...scripts,
  ];

  // Update document title and meta tags when component mounts
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);
    
    // Update language
    document.documentElement.lang = lang;
    
    // Add structured data to page
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(defaultStructuredData);
    document.head.appendChild(script);
    
    // Cleanup function
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [title, description, canonical, lang, defaultStructuredData]);

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <html lang={lang} />
      
      {/* Meta tags */}
      {enhancedMeta.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      
      {/* Links */}
      {enhancedLinks.map((link, index) => (
        <link key={index} {...link} />
      ))}
      
      {/* Scripts */}
      {enhancedScripts.map((script, index) => (
        <script key={index} {...script} />
      ))}
      
      {/* Additional SEO optimizations */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/src/main.tsx" as="script" />
      <link rel="preload" href="/src/index.css" as="style" />
      
      {/* Font preloading */}
      <link 
        rel="preload" 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" 
        as="style" 
      />
      
      {/* Critical CSS inline */}
      <style>{`
        /* Critical CSS for above-the-fold content */
        body { 
          margin: 0; 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
          background: #0f172a;
          color: #e2e8f0;
        }
        #root { min-height: 100vh; }
        .loading { 
          display: flex; 
          justify-content: center; 
          align-items: center; 
          height: 100vh; 
        }
        .loading::after { 
          content: ''; 
          width: 50px; 
          height: 50px; 
          border: 3px solid #f3f3f3; 
          border-top: 3px solid #06b6d4; 
          border-radius: 50%; 
          animation: spin 1s linear infinite; 
        }
        @keyframes spin { 
          0% { transform: rotate(0deg); } 
          100% { transform: rotate(360deg); } 
        }
        
        /* SEO-friendly focus styles */
        *:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
        
        /* Skip link for accessibility */
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #06b6d4;
          color: white;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 1000;
        }
        .skip-link:focus {
          top: 6px;
        }
      `}</style>
    </Helmet>
  );
};

// Export SEO utilities
export const seoUtils = {
  // Generate meta description from content
  generateDescription: (content: string, maxLength: number = 160): string => {
    const cleanContent = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    if (cleanContent.length <= maxLength) return cleanContent;
    return cleanContent.substring(0, maxLength - 3) + '...';
  },
  
  // Generate keywords from content
  generateKeywords: (content: string, maxKeywords: number = 10): string[] => {
    const words = content.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3);
    
    const wordCount = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return Object.entries(wordCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, maxKeywords)
      .map(([word]) => word);
  },
  
  // Validate meta description
  validateDescription: (description: string): boolean => {
    return description.length >= 120 && description.length <= 160;
  },
  
  // Validate title
  validateTitle: (title: string): boolean => {
    return title.length >= 30 && title.length <= 60;
  },
  
  // Generate Open Graph image URL
  generateOGImage: (title: string, subtitle?: string): string => {
    const baseUrl = 'https://ziontechgroup.com/api/og';
    const params = new URLSearchParams({
      title: encodeURIComponent(title),
      ...(subtitle && { subtitle: encodeURIComponent(subtitle) }),
    });
    return `${baseUrl}?${params.toString()}`;
  },
};
