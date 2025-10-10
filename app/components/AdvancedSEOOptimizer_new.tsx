import React, { useEffect, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {}
'use client';
import React, { useEffect, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
interface SEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;,
  twitterImage?: string;
}

interface AdvancedSEOOptimizerProps {}
  seoData: SEOData;
  enableStructuredData?: boolean;
  enableOpenGraph?: boolean;
  enableTwitterCards?: boolean;
  enableSchemaMarkup?: boolean;
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({,
  seoData;
const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({}
  seoData,
  enableStructuredData = true,
  enableOpenGraph = true,
  enableTwitterCards = true,
  enableSchemaMarkup = true,
}) => {}
  const structuredDataRef = useRef<HTMLScriptElement | null>(null);

  const generateStructuredData = useCallback(() => {}
    if (!enableStructuredData || !seoData.structuredData) {}
      return null;
    }

    const baseStructuredData = {
      '@context': 'https: //schema.org',
    const baseStructuredData = {}
      '@context': 'https://schema.org',
      '@type': 'TechCompany',
      name: 'Zion Tech Group'
      description: seoData.description;
      url: seoData.canonicalUrl;
      logo: 'https://ziontechgroup.com/logo.webp'
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https: //twitter.com/ziontechgroup',
        'https: //github.com/zion-tech-group',
      ],
      contactPoint: {,
      contactPoint: {}
interface AdvancedSEOOptimizerProps {
  seoData?: SEOData;
  children?: React.ReactNode;
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({ 
  seoData = {}, 
  children 
}) => {
  const defaultSEO: SEOData = {
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI-powered solutions, IT consulting, and innovative technology services for businesses worldwide.',
    keywords: ['AI solutions', 'IT consulting', 'cloud infrastructure', 'cybersecurity', 'digital transformation'],
    canonical: 'https://ziontechgroup.com',
    ogTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
    ogDescription: 'Leading provider of AI-powered solutions, IT consulting, and innovative technology services.',
    ogImage: 'https://ziontechgroup.com/og-image.jpg',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
    twitterDescription: 'Leading provider of AI-powered solutions, IT consulting, and innovative technology services.',
    twitterImage: 'https://ziontechgroup.com/twitter-image.jpg'
  };

  const mergedSEO = useMemo(() => ({ ...defaultSEO, ...seoData }), [defaultSEO, seoData]);

  const generateStructuredData = useCallback(() => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description: mergedSEO.description,
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English'
      },
      address: {
        '@type': 'PostalAddress'
      address: {}
        '@type': 'PostalAddress',
        streetAddress: '123 Tech Innovation Drive',
        addressLocality: 'San Francisco',
        addressRegion: 'CA',
        postalCode: '94105',
        addressCountry: 'US',
      },
      ...seoData.structuredData,
    };

    if (seoData.author) {}
      baseStructuredData.author = {}
        '@type': 'Person',
        name: seoData.author;
      };
    }

    if (seoData.publishedTime) {}
      baseStructuredData.datePublished = seoData.publishedTime;
    }

    if (seoData.modifiedTime) {}
      baseStructuredData.dateModified = seoData.modifiedTime;
    }

    if (seoData.section) {}
      baseStructuredData.articleSection = seoData.section;
    }

    if (seoData.tags && seoData.tags.length > 0) {}
      baseStructuredData.keywords = seoData.tags.join(', ');
    }

  twitterDescription?: string;
  twitterImage?: string;
}

interface AdvancedSEOOptimizerProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  children?: React.ReactNode;
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  children
}) => {
  const seoData: SEOData = useMemo(() => ({
    title,
    description,
    keywords,
    canonicalUrl: canonicalUrl || (typeof window !== 'undefined' ? window.location.href : ''),
    ogTitle: ogTitle || title,
    ogDescription: ogDescription || description,
    ogImage,
    twitterCard,
    twitterTitle: twitterTitle || title,
    twitterDescription: twitterDescription || description,
    twitterImage: twitterImage || ogImage
  }), [title, description, keywords, canonicalUrl, ogTitle, ogDescription, ogImage, twitterCard, twitterTitle, twitterDescription, twitterImage]);

  const generateStructuredData = useCallback(() => {
    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US'
      }
    };

    return baseStructuredData;
  }, []);

  // Generate Open Graph data;
  const generateOpenGraphData = useCallback(() => {
    if (!enableOpenGraph) return {};

    return {
      'og: title': seoData.ogTitle || seoData.title;
      'og: description': seoData.ogDescription || seoData.description;
      'og: url': seoData.canonicalUrl;
      'og: type': seoData.ogType || 'website'
      'og: image': seoData.ogImage || '/og-image.webp',
      'og: site_name': 'Zion Tech Group',
      'og: locale': 'en_US',
  const generateOpenGraphData = useCallback(() => {
    return {
      'og:title': seoData.ogTitle,
      'og:description': seoData.ogDescription,
      'og:image': seoData.ogImage,
      'og:url': seoData.canonicalUrl,
      'og:type': 'website'
    };
  }, [seoData]);

  // Generate Twitter Card data;
  const generateTwitterCardData = useCallback(() => {
    if (!enableTwitterCards) return {};

    const faqData = {
      '@context': 'https: //schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {,
          '@type': 'Question',
          name: 'What services does Zion Tech Group offer?',
          acceptedAnswer: {,
  // Generate Open Graph data
  const generateOpenGraphData = useCallback(() => {}
    if (!enableOpenGraph) return {};

    return {}
      'og:title': seoData.ogTitle || seoData.title,
      'og:description': seoData.ogDescription || seoData.description,
      'og:url': seoData.canonicalUrl,
      'og:type': seoData.ogType || 'website',
      'og:image': seoData.ogImage || '/og-image.webp',
      'og:site_name': 'Zion Tech Group',
      'og:locale': 'en_US',
    };
  }, [seoData, enableOpenGraph]);

  // Generate Twitter Card data
  const generateTwitterCardData = useCallback(() => {}
    if (!enableTwitterCards) return {};

    const faqData = {}
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {}
          '@type': 'Question',
          name: 'What services does Zion Tech Group offer?',
          acceptedAnswer: {}
            '@type': 'Answer',
            text: 'We offer comprehensive AI solutions, digital transformation services, cloud computing, automation, and business intelligence services.',
          },
        },
        {}
          '@type': 'Question',
          name: 'How can I contact Zion Tech Group?',
          acceptedAnswer: {,
          acceptedAnswer: {}
            '@type': 'Answer',
            text: 'You can contact us through our website, email, or phone. Visit our contact page for more information.',
          },
        },
        {}
          '@type': 'Question',
          name: 'What makes Zion Tech Group different?',
          acceptedAnswer: {,
          acceptedAnswer: {}
            '@type': 'Answer',
            text: 'We combine cutting-edge AI technology with deep industry expertise to deliver transformative solutions that drive real business value.',
          },
        },
      ],
  const generateTwitterCardData = useCallback(() => {
    return {
      'twitter:card': seoData.twitterCard,
      'twitter:title': seoData.twitterTitle,
      'twitter:description': seoData.twitterDescription,
      'twitter:image': seoData.twitterImage
    };
  }, [seoData]);

  // Generate meta tags;
  const generateMetaTags = useCallback(() => {
  // Generate meta tags
  const generateMetaTags = useCallback(() => {}
    const metaTags = [
      { name: 'description', content: seoData.description },
      { name: 'keywords', content: seoData.keywords.join(', ') },
      { name: 'author', content: seoData.author || 'Zion Tech Group' },
      { name: 'robots', content: seoData.robots || 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#3B82F6' },
      { name: 'msapplication-TileColor', content: '#3B82F6' },
      { name: 'msapplication-config', content: '/browserconfig.xml' },
  const generateMetaTags = useCallback(() => {
    const metaTags = [
      { name: 'description', content: seoData.description },
      { name: 'keywords', content: seoData.keywords.join(', ') },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ];

    return metaTags;
  }, [seoData]);

  const structuredData = generateStructuredData();
  const openGraphData = generateOpenGraphData();
  const twitterCardData = generateTwitterCardData();
  const metaTags = generateMetaTags();
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup'
      ]
    };
  }, [mergedSEO.description]);

  useEffect(() => {
    // Update page title and meta description for better SEO;
    if (typeof document !== 'undefined') {
  useEffect(() => {}
    // Update page title and meta description for better SEO
    if (typeof document !== 'undefined') {}
      document.title = seoData.title;

      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {}
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
    // Update meta tags dynamically
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

      // Update canonical URL;
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {}
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
    const updatePropertyTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

  const addStructuredData = (data: Record<string, unknown>) => {
    // Remove existing structured data;
    if (structuredDataRef.current) {
  const addStructuredData = (data: Record<string, unknown>) => {}
    // Remove existing structured data
    if (structuredDataRef.current) {}
      structuredDataRef.current.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    structuredDataRef.current = script;

  useEffect(() => {}
    if (structuredData) {}
      addStructuredData(structuredData);
    }
  }, [structuredData]);

  useEffect(() => {
    // Track page performance;
    if (typeof window !== 'undefined' && 'performance' in window) {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (perfData) {
        // Track performance metrics;
        if (typeof (window as any).gtag === 'function') {
          (window as any).gtag('event', 'page_load_performance', {
  useEffect(() => {}
    // Track page performance
    if (typeof window !== 'undefined' && 'performance' in window) {}
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (perfData) {}
        // Track performance metrics
        if (typeof (window as any).gtag === 'function') {}
          (window as any).gtag('event', 'page_load_performance', {)}
            event_category: 'Performance',
            event_label: 'Page Load',
            value: Math.round(perfData.loadEventEnd - perfData.fetchStart)
          });
          (window as any).gtag('event', 'page_load_performance', {)
            event_category: 'Performance'),
            event_label: 'Page Load'),
            value: Math.round(perfData.loadEventEnd - perfData.fetchStart),
        }
      }
    }
  }, []);
    if (mergedSEO.title) {
      document.title = mergedSEO.title;
    }
    if (mergedSEO.description) {
      updateMetaTag('description', mergedSEO.description);
    }
    if (mergedSEO.keywords) {
      updateMetaTag('keywords', mergedSEO.keywords.join(', '));
    }
    if (mergedSEO.canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = mergedSEO.canonical;
    }

    // Open Graph tags
    if (mergedSEO.ogTitle) {
      updatePropertyTag('og:title', mergedSEO.ogTitle);
    }
    if (mergedSEO.ogDescription) {
      updatePropertyTag('og:description', mergedSEO.ogDescription);
    }
    if (mergedSEO.ogImage) {
      updatePropertyTag('og:image', mergedSEO.ogImage);
    }

    // Twitter Card tags
    if (mergedSEO.twitterCard) {
      updateMetaTag('twitter:card', mergedSEO.twitterCard);
    }
    if (mergedSEO.twitterTitle) {
      updateMetaTag('twitter:title', mergedSEO.twitterTitle);
    }
    if (mergedSEO.twitterDescription) {
      updateMetaTag('twitter:description', mergedSEO.twitterDescription);
    }
    if (mergedSEO.twitterImage) {
      updateMetaTag('twitter:image', mergedSEO.twitterImage);
    }

    // Add structured data
    const structuredData = generateStructuredData();
    let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [mergedSEO, generateStructuredData]);

  return(<Helmet>)
      {/* Basic Meta Tags */})
      <title>{seoData.title}</title>)
      {metaTags.map((tag, index) => (
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoData.title}</title>
      {metaTags.map((tag, index) => (}
        <meta key={index} name={tag.name} content={tag.content} />
      ))}

      {/* Canonical URL */}
      {seoData.canonicalUrl && (}
        <link rel="canonical" href={seoData.canonicalUrl} />
      )}

      {/* Open Graph Tags */}
      {Object.entries(openGraphData).map(([property, content]) => (}
        <meta key={property} property={property} content={content} />
      ))}

      {/* Twitter Card Tags */}
      {Object.entries(twitterCardData).map(([name, content]) => (}
        <meta key={name} name={name} content={content} />
      ))}

      {/* Additional SEO Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.webp" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.webp" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.webp" />
      <link rel="manifest" href="/site.webmanifest" />
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https: //fonts.googleapis.com" />,
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />,
      <link rel="preconnect" href="https://www.google-analytics.com" />,
      <link rel="preconnect" href="https://www.googletagmanager.com" />,
,
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
  useEffect(() => {
    // Update document title
    document.title = seoData.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = seoData.description;
      document.head.appendChild(meta);
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', seoData.canonicalUrl);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = seoData.canonicalUrl;
      document.head.appendChild(link);
    }
  }, [seoData]);

  return (
    <Helmet>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords.join(', ')} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={seoData.canonicalUrl} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={seoData.ogTitle} />
      <meta property="og:description" content={seoData.ogDescription} />
      <meta property="og:image" content={seoData.ogImage} />
      <meta property="og:url" content={seoData.canonicalUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content={seoData.twitterCard} />
      <meta name="twitter:title" content={seoData.twitterTitle} />
      <meta name="twitter:description" content={seoData.twitterDescription} />
      <meta name="twitter:image" content={seoData.twitterImage} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData())}
      </script>
    </Helmet>
    <>
      <Helmet>
        <title>{mergedSEO.title}</title>
        <meta name="description" content={mergedSEO.description} />
        {mergedSEO.keywords && (
          <meta name="keywords" content={mergedSEO.keywords.join(', ')} />
        )}
        {mergedSEO.canonical && (
          <link rel="canonical" href={mergedSEO.canonical} />
        )}
        <meta property="og:title" content={mergedSEO.ogTitle} />
        <meta property="og:description" content={mergedSEO.ogDescription} />
        <meta property="og:image" content={mergedSEO.ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content={mergedSEO.twitterCard} />
        <meta name="twitter:title" content={mergedSEO.twitterTitle} />
        <meta name="twitter:description" content={mergedSEO.twitterDescription} />
        <meta name="twitter:image" content={mergedSEO.twitterImage} />
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())}
        </script>
      </Helmet>
      {children}
    </>
  );
};

export default AdvancedSEOOptimizer;