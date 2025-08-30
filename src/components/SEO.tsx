import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article' | 'product' | 'profile' | 'book';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  noindex?: boolean;
  nofollow?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: any;
  language?: string;
  alternateLanguages?: { [key: string]: string };
  robots?: string;
  viewport?: string;
  themeColor?: string;
  msTileColor?: string;
  appleTouchIcon?: string;
  manifest?: string;
  preconnect?: string[];
  dnsPrefetch?: string[];
}

export function SEO({
  title,
  description,
  keywords,
  ogImage = '/og-image.jpg',
  canonicalUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  nofollow = false,
  author,
  publishedTime,
  modifiedTime,
  section,
  tags,
  structuredData,
  language = 'en',
  alternateLanguages,
  robots,
  viewport = 'width=device-width, initial-scale=1.0',
  themeColor = '#22ddd2',
  msTileColor = '#22ddd2',
  appleTouchIcon = '/apple-touch-icon.png',
  manifest = '/site.webmanifest',
  preconnect = ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
  dnsPrefetch = ['//www.google-analytics.com', '//fonts.googleapis.com']
}: SEOProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [pageLoadTime, setPageLoadTime] = useState(0);

  // Generate meta robots content
  const robotsContent = robots || [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
    'max-snippet:-1',
    'max-image-preview:large',
    'max-video-preview:-1'
  ].join(',');

  // Generate structured data
  const generateStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Zion Tech Group',
      url: canonicalUrl || currentUrl,
      description: 'Leading technology solutions provider specializing in AI, cybersecurity, and digital transformation',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${canonicalUrl || currentUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };

    if (ogType === 'article' && publishedTime) {
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: ogImage,
        author: {
          '@type': 'Organization',
          name: 'Zion Tech Group'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
          logo: {
            '@type': 'ImageObject',
            url: '/logo.png'
          }
        },
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl || currentUrl
        }
      };
    }

    if (ogType === 'product') {
      return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: title,
        description: description,
        image: ogImage,
        brand: {
          '@type': 'Brand',
          name: 'Zion Tech Group'
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'USD'
        }
      };
    }

    return baseData;
  };

  // Performance monitoring
  useEffect(() => {
    // Set current URL
    setCurrentUrl(window.location.href);

    // Measure page load time
    const startTime = performance.now();
    
    const measureLoadTime = () => {
      const loadTime = performance.now() - startTime;
      setPageLoadTime(loadTime);
      
      // Send to analytics if available
      if (typeof gtag !== 'undefined') {
        gtag('event', 'page_load_time', {
          value: Math.round(loadTime),
          page_title: title,
          page_url: canonicalUrl || currentUrl
        });
      }
    };

    if (document.readyState === 'complete') {
      measureLoadTime();
    } else {
      window.addEventListener('load', measureLoadTime);
      return () => window.removeEventListener('load', measureLoadTime);
    }
  }, [title, canonicalUrl, currentUrl]);

  // Generate meta tags
  const metaTags = [
    // Basic Meta Tags
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'author', content: author || 'Zion Tech Group' },
    { name: 'robots', content: robotsContent },
    { name: 'viewport', content: viewport },
    { name: 'theme-color', content: themeColor },
    { name: 'msapplication-TileColor', content: msTileColor },
    { name: 'format-detection', content: 'telephone=no' },
    
    // Open Graph Meta Tags
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: ogType },
    { property: 'og:url', content: canonicalUrl || currentUrl },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:site_name', content: 'Zion Tech Group' },
    { property: 'og:locale', content: 'en_US' },
    
    // Twitter Card Meta Tags
    { name: 'twitter:card', content: twitterCard },
    { name: 'twitter:site', content: '@ziontechgroup' },
    { name: 'twitter:creator', content: '@ziontechgroup' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
    
    // Additional Meta Tags
    { name: 'application-name', content: 'Zion Tech Group' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-title', content: 'Zion Tech Group' },
    
    // Security Headers
    { httpEquiv: 'X-Content-Type-Options', content: 'nosniff' },
    { httpEquiv: 'X-Frame-Options', content: 'DENY' },
    { httpEquiv: 'X-XSS-Protection', content: '1; mode=block' },
    { httpEquiv: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
    { httpEquiv: 'Content-Security-Policy', content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'self';" }
  ];

  // Add article-specific meta tags
  if (ogType === 'article') {
    if (publishedTime) metaTags.push({ property: 'article:published_time', content: publishedTime });
    if (modifiedTime) metaTags.push({ property: 'article:modified_time', content: modifiedTime });
    if (section) metaTags.push({ property: 'article:section', content: section });
    if (tags) {
      tags.forEach(tag => {
        metaTags.push({ property: 'article:tag', content: tag });
      });
    }
  }

  // Add language alternates
  if (alternateLanguages) {
    Object.entries(alternateLanguages).forEach(([lang, url]) => {
      metaTags.push({ rel: 'alternate', hrefLang: lang, href: url });
    });
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Dynamic Meta Tags */}
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="manifest" href={manifest} />

      {/* Preconnect to external domains for performance */}
      {preconnect.map((url, index) => (
        <link key={index} rel="preconnect" href={url} crossOrigin="anonymous" />
      ))}

      {/* DNS Prefetch for performance */}
      {dnsPrefetch.map((url, index) => (
        <link key={index} rel="dns-prefetch" href={url} />
      ))}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || generateStructuredData())}
      </script>

      {/* Performance Monitoring */}
      {pageLoadTime > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: title,
            description: description,
            url: canonicalUrl || currentUrl,
            mainEntity: {
              '@type': 'Organization',
              name: 'Zion Tech Group',
              url: 'https://ziontechgroup.com'
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://ziontechgroup.com'
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: title,
                  item: canonicalUrl || currentUrl
                }
              ]
            }
          })}
        </script>
      )}

      {/* Additional SEO optimizations */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      
      {/* Social Media Meta Tags */}
      <meta property="og:image:alt" content={`${title} - Zion Tech Group`} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:secure_url" content={ogImage} />
      
      {/* Twitter specific */}
      <meta name="twitter:image:alt" content={`${title} - Zion Tech Group`} />
      
      {/* Mobile specific */}
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      
      {/* Search Engine Optimization */}
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Page specific structured data */}
      {ogType === 'website' && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: title,
            description: description,
            url: canonicalUrl || currentUrl,
            isPartOf: {
              '@type': 'WebSite',
              name: 'Zion Tech Group',
              url: 'https://ziontechgroup.com'
            },
            about: {
              '@type': 'Organization',
              name: 'Zion Tech Group',
              description: 'Leading technology solutions provider specializing in AI, cybersecurity, and digital transformation',
              url: 'https://ziontechgroup.com',
              logo: 'https://ziontechgroup.com/logo.png',
              sameAs: [
                'https://www.linkedin.com/company/zion-tech-group',
                'https://twitter.com/ziontechgroup',
                'https://www.facebook.com/ziontechgroup'
              ]
            }
          })}
        </script>
      )}

      {/* Performance hints */}
      <link rel="preload" href="/fonts/orbitron-v19-latin-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/rajdhani-v15-latin-500.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Critical CSS */}
      <style>
        {`
          /* Critical CSS for above-the-fold content */
          .hero-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          
          .loading-spinner {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(255,255,255,.3);
            border-radius: 50%;
            border-top-color: #fff;
            animation: spin 1s ease-in-out infinite;
          }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </Helmet>
  );
}

// Specialized SEO components for different page types
export function HomePageSEO() {
  return (
    <SEO
      title="AI-Powered Business Solutions & Quantum Computing | Zion Tech Group"
      description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative IT services. Leading digital transformation with autonomous business operations and advanced cybersecurity."
      keywords="AI business solutions, quantum computing, autonomous operations, digital transformation, IT services, cybersecurity, machine learning, neural networks"
      ogType="website"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Zion Tech Group - AI-Powered Business Solutions",
        "description": "Leading provider of AI-powered business solutions, quantum computing, and innovative IT services for digital transformation.",
        "url": "https://ziontechgroup.com",
        "mainEntity": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "AI-powered business solutions and quantum computing services"
        }
      }}
    />
  );
}

export function ServicesPageSEO() {
  return (
    <SEO
      title="AI Services, Quantum Computing & IT Solutions | Zion Tech Group"
      description="Comprehensive range of AI services, quantum computing solutions, and enterprise IT services. From autonomous business operations to advanced cybersecurity and cloud infrastructure."
      keywords="AI services, quantum computing services, IT infrastructure, cybersecurity services, cloud computing, business automation, machine learning services"
      ogType="website"
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
      ogType="website"
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
      author={author}
      canonical={`https://ziontechgroup.com/blog/${slug}`}
      ogType="article"
      ogImage={image}
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
