import React, { useEffect, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

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
  twitterDescription?: string;
  twitterImage?: string;
}

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
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup'
      ]
    };
  }, [mergedSEO.description]);

  useEffect(() => {
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

    const updatePropertyTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

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

  return (
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