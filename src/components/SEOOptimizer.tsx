import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
}

interface SEOOptimizerProps {
  data: SEOData;
  structuredData?: any;
  enableAnalytics?: boolean;
}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  data,
  structuredData,
  enableAnalytics = true
}) => {
  const {
    title,
    description,
    keywords = [],
    image = '/og-image.jpg',
    url = window.location.href,
    type = 'website',
    author = 'Zion Tech Group',
    publishedTime,
    modifiedTime,
    section,
    tags = [],
    canonical
  } = data;

  // Generate structured data for different page types
  const generateStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type === 'article' ? 'Article' : 'WebPage',
      "name": title,
      "description": description,
      "url": url,
      "image": image,
      "author": {
        "@type": "Organization",
        "name": author,
        "url": "https://ziontechgroup.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ziontechgroup.com/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      }
    };

    if (type === 'article') {
      return {
        ...baseData,
        "@type": "Article",
        "headline": title,
        "datePublished": publishedTime,
        "dateModified": modifiedTime || publishedTime,
        "articleSection": section,
        "keywords": keywords.join(', '),
        "articleBody": description
      };
    }

    if (type === 'service') {
      return {
        ...baseData,
        "@type": "Service",
        "serviceType": title,
        "areaServed": "Worldwide",
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": url
        }
      };
    }

    return baseData;
  };

  // Track page views for analytics
  useEffect(() => {
    if (enableAnalytics) {
      // Google Analytics 4
      if (typeof gtag !== 'undefined') {
        gtag('config', 'G-XXXXXXXXXX', {
          page_title: title,
          page_location: url,
          custom_map: {
            'page_type': type,
            'page_section': section
          }
        });
      }

      // Google Tag Manager
      if (typeof dataLayer !== 'undefined') {
        dataLayer.push({
          event: 'page_view',
          page_title: title,
          page_url: url,
          page_type: type,
          page_section: section
        });
      }

      // Facebook Pixel
      if (typeof fbq !== 'undefined') {
        fbq('track', 'PageView', {
          page_title: title,
          page_url: url
        });
      }

      // LinkedIn Insight Tag
      if (typeof lintrk !== 'undefined') {
        lintrk('track', { conversion_id: 123456 });
      }
    }
  }, [title, url, type, section, enableAnalytics]);

  // Generate meta keywords string
  const metaKeywords = keywords.length > 0 ? keywords.join(', ') : undefined;

  // Generate Open Graph tags
  const ogTags = [
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: type },
    { property: 'og:site_name', content: 'Zion Tech Group' },
    { property: 'og:locale', content: 'en_US' }
  ];

  // Generate Twitter Card tags
  const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@ziontechgroup' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image }
  ];

  // Generate additional meta tags
  const additionalTags = [
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
    { name: 'googlebot', content: 'index, follow' },
    { name: 'author', content: author },
    { name: 'copyright', content: 'Zion Tech Group' },
    { name: 'language', content: 'English' },
    { name: 'revisit-after', content: '7 days' },
    { name: 'distribution', content: 'global' },
    { name: 'rating', content: 'general' }
  ];

  // Add keywords if provided
  if (metaKeywords) {
    additionalTags.push({ name: 'keywords', content: metaKeywords });
  }

  // Add tags if provided
  if (tags.length > 0) {
    additionalTags.push({ name: 'tags', content: tags.join(', ') });
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Additional Meta Tags */}
      {additionalTags.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}

      {/* Open Graph Tags */}
      {ogTags.map((tag, index) => (
        <meta key={`og-${index}`} property={tag.property} content={tag.content} />
      ))}

      {/* Twitter Card Tags */}
      {twitterTags.map((tag, index) => (
        <meta key={`twitter-${index}`} name={tag.name} content={tag.content} />
      ))}

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Default Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData())}
      </script>

      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": "Leading provider of AI-powered business solutions, quantum computing, and digital transformation services",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "info@ziontechgroup.com"
          },
          "sameAs": [
            "https://www.linkedin.com/company/zion-tech-group",
            "https://twitter.com/ziontechgroup",
            "https://www.facebook.com/ziontechgroup"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOOptimizer;
