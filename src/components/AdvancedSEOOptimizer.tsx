'use client';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface AdvancedSEOOptimizerProps {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  structuredData?: any;
  noIndex?: boolean;
  locale?: string;
  alternateLanguages?: { href: string; hreflang: string }[];
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData,
  noIndex = false,
  locale = 'en-US',
  alternateLanguages = [],
}) => {
<<<<<<< HEAD
  const structuredDataRef = useRef<HTMLScriptElement | null>(null);
  
  const generateStructuredData = useCallback(() => {
    if (!enableStructuredData || !seoData.structuredData) return null;
    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
<<<<<<< HEAD:src/components/AdvancedSEOOptimizer.tsx
      description: 'Advanced AI and IT Solutions',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US'
      },
      sameAs: [
        'https://www.linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://github.com/zion-tech-group',
      ],
<<<<<<< HEAD:src/components/AdvancedSEOOptimizer.tsx
      ...seoData.structuredData
    };
    return baseStructuredData;
  }, [enableStructuredData, seoData.structuredData]);
  const generateBreadcrumbStructuredData = useCallback(() => {
    if (!enableSchemaMarkup) return null;
    const breadcrumbData = {
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-ZION-TECH',
        contactType: 'customer service',
        availableLanguage: 'English',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Tech Innovation Drive',
        addressLocality: 'San Francisco',
        addressRegion: 'CA',
        postalCode: '94105',
        addressCountry: 'US',
      },
    };

    return {
      ...baseStructuredData,
      ...seoData.structuredData,
    };
  }, [seoData, enableStructuredData]);

  const generateBreadcrumbStructuredData = useCallback(() => {
    if (!enableSchemaMarkup || !seoData.breadcrumbData) return null;

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
        {
          '@type': 'ListItem',
          position: 2,
          name: seoData.title,
          item: seoData.canonicalUrl
        },
      ]
    };
    return breadcrumbData;
  }, [enableSchemaMarkup, seoData.title, seoData.canonicalUrl]);
  const generateFAQStructuredData = useCallback(() => {
<<<<<<< HEAD:src/components/AdvancedSEOOptimizer.tsx
    if (!enableSchemaMarkup) return null;
    const faqData = {
    if (!enableSchemaMarkup || !seoData.faqData) return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Zion Tech Group offer?',
          acceptedAnswer: {
            '@type': 'Answer',
<<<<<<< HEAD:src/components/AdvancedSEOOptimizer.tsx
            text: 'Zion Tech Group offers advanced AI and IT solutions including custom software development, AI integration, cloud solutions, and digital transformation services.'
          }
            text: 'Zion Tech Group offers advanced AI solutions, quantum computing, and autonomous systems for enterprise clients.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I contact Zion Tech Group?',
          acceptedAnswer: {
            '@type': 'Answer',
<<<<<<< HEAD:src/components/AdvancedSEOOptimizer.tsx
            text: 'You can contact us through our website contact form, email, or phone. Visit our contact page for more information.'
          }
        },
      ]
    };
    return faqData;
  }, [enableSchemaMarkup]);
  const _structuredData = generateStructuredData();
  const _breadcrumbData = generateBreadcrumbStructuredData();
  const _faqData = generateFAQStructuredData();
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bf94
  useEffect(() => {
    // Update document title with dynamic suffix
    const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
    document.title = fullTitle;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords.join(', '));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords.join(', ');
      document.head.appendChild(meta);
    }
    
    // Update canonical URL
<<<<<<< HEAD
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
            text: 'You can contact us through our website, email, or phone for consultation and support.',
          },
        },
      ],
    };
  }, [enableSchemaMarkup]);

  const structuredData = generateStructuredData();
  const breadcrumbData = generateBreadcrumbStructuredData();
  const faqData = generateFAQStructuredData();

  useEffect(() => {
    // Update page title and meta description for better SEO
    if (typeof document !== 'undefined') {
      document.title = seoData.title;
      
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', seoData.description);

      // Update canonical URL
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', seoData.canonicalUrl);
=======
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
>>>>>>> cursor/fix-errors-and-merge-to-main-bf94
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }
<<<<<<< HEAD
  }, [seoData]);
<<<<<<< HEAD:src/components/AdvancedSEOOptimizer.tsx
  const _addStructuredData = (data: Record<string, unknown>) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    script.id = 'structured-data';
    document.head.appendChild(script);
    _structuredDataRef.current = script;
  };
  const _trackPageView = (config: SEOData) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {

  const trackPageView = (config: SEOData) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: config.title,
        page_location: config.canonicalUrl
      });
    }
  };
<<<<<<< HEAD:src/components/AdvancedSEOOptimizer.tsx
  const _trackPerformanceMetrics = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      window.addEventListener('load', () => {
        const _perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (_perfData) {
          (window as any).gtag('event', 'page_load_performance', {
            event_category: 'Performance',
            event_label: 'Page Load',
            value: Math.round(_perfData.loadEventEnd - _perfData.fetchStart)
          });
        }
      });
    }
  };
=======

    // Add robots meta tag
    const robots = document.querySelector('meta[name="robots"]');
    if (robots) {
      robots.setAttribute('content', noIndex ? 'noindex,nofollow' : 'index,follow');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = noIndex ? 'noindex,nofollow' : 'index,follow';
      document.head.appendChild(meta);
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-bf94

    // Add language meta tag
    const html = document.documentElement;
    html.setAttribute('lang', locale.split('-')[0]);
    
  }, [title, description, keywords, canonicalUrl, noIndex, locale]);

  return (
    <Helmet>
      <title>{title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="language" content={locale} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="publisher" content="Zion Tech Group" />
      <meta name="copyright" content="Zion Tech Group" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
<<<<<<< HEAD
<<<<<<< HEAD:src/components/AdvancedSEOOptimizer.tsx
      <meta name="theme-color" content="#4F46E5" />

=======
      <meta name="distribution" content="global" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="theme-color" content="#0f172a" />
      
      {/* Alternate Languages */}
      {alternateLanguages.map((alt) => (
        <link key={alt.hreflang} rel="alternate" hrefLang={alt.hreflang} href={alt.href} />
      ))}
      
>>>>>>> cursor/fix-errors-and-merge-to-main-bf94
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
<<<<<<< HEAD
<<<<<<< HEAD:src/components/AdvancedSEOOptimizer.tsx
      {enableSchemaMarkup && _breadcrumbData && (
      {enableSchemaMarkup && breadcrumbData && (
        <script type="application/ld+json">
          {JSON.stringify(_breadcrumbData)}
        </script>
      )}
<<<<<<< HEAD:src/components/AdvancedSEOOptimizer.tsx
      {enableSchemaMarkup && _faqData && (
      {enableSchemaMarkup && faqData && (
        <script type="application/ld+json">
          {JSON.stringify(_faqData)}
        </script>
      )}
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      {/* DNS Prefetch for better performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
=======
      
      {/* Additional Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.",
          "foundingDate": "2020",
          "numberOfEmployees": "50-100",
          "industry": "Technology",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "Customer Service",
            "areaServed": "US",
            "availableLanguage": "en"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          },
          "sameAs": [
            "https://www.linkedin.com/company/ziontechgroup",
            "https://twitter.com/ziontechgroup",
            "https://facebook.com/ziontechgroup",
            "https://instagram.com/ziontechgroup",
            "https://github.com/ziontechgroup",
            "https://youtube.com/@ziontechgroup"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default AdvancedSEOOptimizer;