import React, { useCallback, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  author?: string;
  canonicalUrl?: string;
  robots?: string;
  structuredData?: Record<string, unknown>;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
  };
  twitterCard?: {
    card?: string;
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    image?: string;
  };
}

export interface AdvancedSEOOptimizerProps {
  seoData: SEOData;
  enableStructuredData?: boolean;
  enableOpenGraph?: boolean;
  enableTwitterCards?: boolean;
  enableSchemaMarkup?: boolean;
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({
  seoData,
  enableStructuredData = true,
  enableOpenGraph = true,
  enableTwitterCards = true,
  enableSchemaMarkup = true,
}) => {
  const structuredDataRef = useRef<HTMLScriptElement | null>(null);
  
  const generateStructuredData = useCallback(() => {
    if (!enableStructuredData || !seoData.structuredData) {
      return null;
    }

    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: seoData.title,
      description: seoData.description,
      url: seoData.canonicalUrl,
      ...seoData.structuredData,
    };

    return baseStructuredData;
  }, [seoData, enableStructuredData]);

  const generateOpenGraphData = useCallback(() => {
    if (!enableOpenGraph) return {};

    return {
      'og:title': seoData.openGraph?.title || seoData.title,
      'og:description': seoData.openGraph?.description || seoData.description,
      'og:image': seoData.openGraph?.image || '/images/og-image.jpg',
      'og:url': seoData.openGraph?.url || seoData.canonicalUrl,
      'og:type': seoData.openGraph?.type || 'website',
      'og:site_name': 'Zion Tech Group',
      'og:locale': 'en_US',
    };
  }, [seoData, enableOpenGraph]);

  const generateTwitterCardData = useCallback(() => {
    if (!enableTwitterCards) return {};

    return {
      'twitter:card': seoData.twitterCard?.card || 'summary_large_image',
      'twitter:site': seoData.twitterCard?.site || '@ziontechgroup',
      'twitter:creator': seoData.twitterCard?.creator || '@ziontechgroup',
      'twitter:title': seoData.twitterCard?.title || seoData.title,
      'twitter:description': seoData.twitterCard?.description || seoData.description,
      'twitter:image': seoData.twitterCard?.image || '/images/twitter-card.jpg',
    };
  }, [seoData, enableTwitterCards]);

  const generateMetaTags = useCallback(() => {
    const metaTags = [
      { name: 'description', content: seoData.description },
      { name: 'keywords', content: seoData.keywords.join(', ') },
      { name: 'author', content: seoData.author || 'Zion Tech Group' },
      { name: 'robots', content: seoData.robots || 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#3B82F6' },
      { name: 'msapplication-TileColor', content: '#3B82F6' },
      { name: 'msapplication-config', content: '/browserconfig.xml' },
    ];

    return metaTags;
  }, [seoData]);

  const structuredData = generateStructuredData();
  const openGraphData = generateOpenGraphData();
  const twitterCardData = generateTwitterCardData();
  const metaTags = generateMetaTags();

  const addStructuredData = (data: Record<string, unknown>) => {
    if (structuredDataRef.current) {
      structuredDataRef.current.remove();
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    script.id = 'structured-data';
    document.head.appendChild(script);
    structuredDataRef.current = script;
  };

  useEffect(() => {
    if (structuredData) {
      addStructuredData(structuredData);
    }
  }, [structuredData]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = seoData.title;
      
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', seoData.description);

      if (seoData.canonicalUrl) {
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
          canonicalLink = document.createElement('link');
          canonicalLink.setAttribute('rel', 'canonical');
          document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', seoData.canonicalUrl);
      }
    }
  }, [seoData]);

  return (
    <Helmet>
      <title>{seoData.title}</title>
      
      {metaTags.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}
      
      {seoData.canonicalUrl && <link rel="canonical" href={seoData.canonicalUrl} />}
      
      {Object.entries(openGraphData).map(([key, value]) => (
        <meta key={key} property={key} content={value as string} />
      ))}
      
      {Object.entries(twitterCardData).map(([key, value]) => (
        <meta key={key} name={key} content={value as string} />
      ))}

      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Helmet>
  );
};

export default AdvancedSEOOptimizer;