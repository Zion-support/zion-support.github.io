'use client';
import React, { useEffect, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
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

  const generateOpenGraphData = useCallback(() => {
    return {
      'og:title': seoData.ogTitle,
      'og:description': seoData.ogDescription,
      'og:image': seoData.ogImage,
      'og:url': seoData.canonicalUrl,
      'og:type': 'website'
    };
  }, [seoData]);

  const generateTwitterCardData = useCallback(() => {
    return {
      'twitter:card': seoData.twitterCard,
      'twitter:title': seoData.twitterTitle,
      'twitter:description': seoData.twitterDescription,
      'twitter:image': seoData.twitterImage
    };
  }, [seoData]);

  const generateMetaTags = useCallback(() => {
    const metaTags = [
      { name: 'description', content: seoData.description },
      { name: 'keywords', content: seoData.keywords.join(', ') },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ];

    return metaTags;
  }, [seoData]);

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
  );
};

export default AdvancedSEOOptimizer;