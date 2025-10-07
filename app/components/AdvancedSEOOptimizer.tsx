import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  enableStructuredData?: boolean;
  enableOpenGraph?: boolean;
  enableTwitterCards?: boolean;
  enableSchemaMarkup?: boolean;
}

interface AdvancedSEOOptimizerProps {
  config: SEOConfig;
  enableStructuredData?: boolean;
  enableOpenGraph?: boolean;
  enableTwitterCards?: boolean;
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({
  config,
  enableStructuredData = true,
  enableOpenGraph = true,
  enableTwitterCards = true,
}) => {
  useEffect(() => {
    // Update page title
    document.title = config.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', config.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = config.description;
      document.head.appendChild(meta);
    }

    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', config.keywords.join(', '));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = config.keywords.join(', ');
      document.head.appendChild(meta);
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', config.canonicalUrl);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = config.canonicalUrl;
      document.head.appendChild(link);
    }
  }, [config]);

  const generateStructuredData = () => {
    if (!enableStructuredData) return null;

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description: config.description,
      url: config.canonicalUrl,
      logo: config.ogImage,
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup',
        'https://github.com/ziontechgroup',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Tech Street',
        addressLocality: 'San Francisco',
        addressRegion: 'CA',
        postalCode: '94105',
        addressCountry: 'US',
      },
      offers: {
        '@type': 'Offer',
        description: 'AI and IT Solutions',
        category: 'Technology Services',
      },
    };

    return structuredData;
  };

  const generateOpenGraphTags = () => {
    if (!enableOpenGraph) return null;

    return (
      <>
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:image" content={config.ogImage} />
        <meta property="og:url" content={config.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
      </>
    );
  };

  const generateTwitterCardTags = () => {
    if (!enableTwitterCards) return null;

    return (
      <>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:image" content={config.ogImage} />
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
      </>
    );
  };

  const generateAdditionalMetaTags = () => {
    return (
      <>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </>
    );
  };

  return (
    <Helmet>
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <meta name="keywords" content={config.keywords.join(', ')} />
      <link rel="canonical" href={config.canonicalUrl} />
      
      {generateOpenGraphTags()}
      {generateTwitterCardTags()}
      {generateAdditionalMetaTags()}
      
      {enableStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData()),
          }}
        />
      )}
    </Helmet>
  );
};

export default AdvancedSEOOptimizer;