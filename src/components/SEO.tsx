import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'profile' | 'book';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  structuredData?: Record<string, any>;
  noIndex?: boolean;
  noFollow?: boolean;
  language?: string;
  alternateLanguages?: Array<{ lang: string; url: string }>;
  themeColor?: string;
  colorScheme?: 'light' | 'dark' | 'only light' | 'only dark';
  viewport?: string;
  robots?: string;
  preconnect?: string[];
  dnsPrefetch?: string[];
  preload?: Array<{ href: string; as: string; type?: string }>;
  prefetch?: string[];
}

export function SEO({
  title,
  description,
  keywords = [],
  author = 'Zion Tech Group',
  canonical,
  ogImage = '/images/zion-tech-group-og.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
  noFollow = false,
  language = 'en',
  alternateLanguages = [],
  themeColor = '#020617',
  colorScheme = 'dark',
  viewport = 'width=device-width, initial-scale=1, viewport-fit=cover',
  robots,
  preconnect = [],
  dnsPrefetch = [],
  preload = [],
  prefetch = []
}: SEOProps) {
  // Generate robots meta tag
  const robotsContent = useMemo(() => {
    if (robots) return robots;
    
    const directives = [];
    if (noIndex) directives.push('noindex');
    if (noFollow) directives.push('nofollow');
    
    if (directives.length === 0) {
      directives.push('index', 'follow', 'max-snippet:-1', 'max-image-preview:large', 'max-video-preview:-1');
    }
    
    return directives.join(', ');
  }, [robots, noIndex, noFollow]);

  // Generate canonical URL
  const canonicalUrl = useMemo(() => {
    if (canonical) return canonical;
    return `${window.location.origin}${window.location.pathname}`;
  }, [canonical]);

  // Default structured data for Zion Tech Group
  const defaultStructuredData = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
    description: 'Leading provider of AI-powered business solutions, IT services, and digital transformation consulting.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@ziontechgroup.com'
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
      'https://facebook.com/ziontechgroup'
    ],
    offers: {
      '@type': 'Offer',
      description: 'AI Business Intelligence, Cloud DevOps, Digital Twin Solutions, Data Analytics, IT Infrastructure',
      category: 'Technology Services'
    }
  }), []);

  // Merge custom structured data with default
  const finalStructuredData = useMemo(() => {
    if (structuredData) {
      return { ...defaultStructuredData, ...structuredData };
    }
    return defaultStructuredData;
  }, [structuredData, defaultStructuredData]);

  // Add resource hints
  useEffect(() => {
    // Preconnect to external domains
    preconnect.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });

    // DNS prefetch
    dnsPrefetch.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Preload critical resources
    preload.forEach(({ href, as, type }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      if (type) link.type = type;
      document.head.appendChild(link);
    });

    // Prefetch non-critical resources
    prefetch.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    });

    // Cleanup function
    return () => {
      // Remove dynamically added links
      document.querySelectorAll('link[rel="preconnect"], link[rel="dns-prefetch"], link[rel="preload"], link[rel="prefetch"]').forEach(link => {
        if (link.getAttribute('data-dynamic') === 'true') {
          link.remove();
        }
      });
    };
  }, [preconnect, dnsPrefetch, preload, prefetch]);

  // Add structured data to page
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(finalStructuredData);
    script.setAttribute('data-dynamic', 'true');
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[data-dynamic="true"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [finalStructuredData]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <meta name="language" content={language} />
      <meta name="viewport" content={viewport} />
      <meta name="theme-color" content={themeColor} />
      <meta name="color-scheme" content={colorScheme} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Alternate Languages */}
      {alternateLanguages.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={language} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />

      {/* Additional Meta Tags for Zion Tech Group */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-TileColor" content={themeColor} />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

      {/* Performance and Caching */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />

      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Fonts Preload */}
      <link 
        rel="preload" 
        href="/fonts/orbitron-v19-latin-700.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous" 
      />
      <link 
        rel="preload" 
        href="/fonts/rajdhani-v15-latin-500.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous" 
      />

      {/* Critical CSS Preload */}
      <link 
        rel="preload" 
        href="/src/index.css" 
        as="style" 
        onLoad="this.onload=null;this.rel='stylesheet'" 
      />

      {/* Service Worker Registration */}
      <script>
        {`
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                  console.log('SW registered: ', registration);
                })
                .catch(function(registrationError) {
                  console.log('SW registration failed: ', registrationError);
                });
            });
          }
        `}
      </script>

      {/* Performance Monitoring */}
      <script>
        {`
          // Web Vitals monitoring
          if ('PerformanceObserver' in window) {
            try {
              // First Contentful Paint
              new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                entries.forEach((entry) => {
                  if (entry.name === 'first-contentful-paint') {
                    console.log('FCP:', entry.startTime);
                    // Send to analytics
                    if (window.gtag) {
                      window.gtag('event', 'web_vitals', {
                        event_category: 'Web Vitals',
                        event_label: 'FCP',
                        value: Math.round(entry.startTime)
                      });
                    }
                  }
                });
              }).observe({ entryTypes: ['paint'] });

              // Largest Contentful Paint
              new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                const lastEntry = entries[entries.length - 1];
                if (lastEntry) {
                  console.log('LCP:', lastEntry.startTime);
                  if (window.gtag) {
                    window.gtag('event', 'web_vitals', {
                      event_category: 'Web Vitals',
                      event_label: 'LCP',
                      value: Math.round(lastEntry.startTime)
                    });
                  }
                }
              }).observe({ entryTypes: ['largest-contentful-paint'] });

              // First Input Delay
              new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                entries.forEach((entry) => {
                  if (entry.entryType === 'first-input') {
                    const fid = entry.processingStart - entry.startTime;
                    console.log('FID:', fid);
                    if (window.gtag) {
                      window.gtag('event', 'web_vitals', {
                        event_category: 'Web Vitals',
                        event_label: 'FID',
                        value: Math.round(fid)
                      });
                    }
                  }
                });
              }).observe({ entryTypes: ['first-input'] });

              // Cumulative Layout Shift
              new PerformanceObserver((entryList) => {
                let clsValue = 0;
                const entries = entryList.getEntries();
                entries.forEach((entry) => {
                  if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                  }
                });
                console.log('CLS:', clsValue);
                if (window.gtag) {
                  window.gtag('event', 'web_vitals', {
                    event_category: 'Web Vitals',
                    event_label: 'CLS',
                    value: Math.round(clsValue * 1000)
                  });
                }
              }).observe({ entryTypes: ['layout-shift'] });
            } catch (error) {
              console.warn('Performance monitoring failed:', error);
            }
          }
        `}
      </script>

      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: '${title}',
            page_location: '${canonicalUrl}',
            custom_map: {
              custom_parameter_1: 'page_type',
              custom_parameter_2: 'user_type'
            }
          });
        `}
      </script>

      {/* Enhanced Meta Tags for Zion Tech Group */}
      <meta name="company" content="Zion Tech Group" />
      <meta name="industry" content="Technology, AI, IT Services, Digital Transformation" />
      <meta name="services" content="AI Business Intelligence, Cloud DevOps, Digital Twin, Data Analytics, IT Infrastructure" />
      <meta name="location" content="United States" />
      <meta name="contact" content="info@ziontechgroup.com" />
      
      {/* Business Hours and Contact Info */}
      <meta name="business:contact_data:street_address" content="123 Tech Street" />
      <meta name="business:contact_data:locality" content="Tech City" />
      <meta name="business:contact_data:region" content="CA" />
      <meta name="business:contact_data:postal_code" content="12345" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-555-123-4567" />
      <meta name="business:contact_data:email" content="info@ziontechgroup.com" />
      <meta name="business:contact_data:website" content="https://ziontechgroup.com" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-verification-code" />
      <meta name="yandex-verification" content="your-verification-code" />
      
      {/* Additional Open Graph Tags */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Zion Tech Group - AI-Powered Business Solutions" />
      
      {/* Twitter Additional Tags */}
      <meta name="twitter:image:alt" content="Zion Tech Group - AI-Powered Business Solutions" />
      <meta name="twitter:label1" content="Established" />
      <meta name="twitter:data1" content="2020" />
      <meta name="twitter:label2" content="Services" />
      <meta name="twitter:data2" content="AI, Cloud, DevOps, Digital Twin" />
    </Helmet>
  );
}

export function HomePageSEO() {
  return (
    <SEO
      title="AI Services, Quantum Computing & IT Solutions | Zion Tech Group"
      description="Comprehensive range of AI services, quantum computing solutions, and enterprise IT services. From autonomous business operations to advanced cybersecurity and cloud infrastructure."
      keywords="AI services, quantum computing services, IT infrastructure, cybersecurity services, cloud computing, business automation, machine learning services"
      type="website"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Technology Services",
        "provider": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        },
        "serviceType": "AI Solutions, Quantum Computing, IT Services",
        "description": "Comprehensive technology services including AI, quantum computing, and IT infrastructure"
      }}
    />
  );
}

export function ContactPageSEO() {
  return (
    <SEO
      title="Contact Zion Tech Group | Get in Touch for AI & Quantum Solutions"
      description="Contact Zion Tech Group for AI-powered business solutions, quantum computing services, and IT consulting. Get expert advice on digital transformation and technology implementation."
      keywords="contact Zion Tech Group, AI consulting, quantum computing consulting, IT consulting, digital transformation consulting"
      type="website"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Zion Tech Group",
        "description": "Get in touch with Zion Tech Group for technology consulting and solutions",
        "mainEntity": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-0123",
            "contactType": "customer service",
            "email": "info@ziontechgroup.com"
          }
        }
      }}
    />
  );
}

export function BlogPostSEO({ 
  title, 
  description, 
  author, 
  publishedDate, 
  image, 
  slug 
}: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  image: string;
  slug: string;
}) {
  return (
    <SEO
      title={title}
      description={description}
      image={image}
      url={`https://ziontechgroup.com/blog/${slug}`}
      type="article"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "image": image,
        "author": {
          "@type": "Person",
          "name": author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "logo": {
            "@type": "ImageObject",
            "url": "https://ziontechgroup.com/images/zion-tech-group-logo.png"
          }
        },
        "datePublished": publishedDate,
        "dateModified": publishedDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://ziontechgroup.com/blog/${slug}`
        }
      }}
    />
  );
}
