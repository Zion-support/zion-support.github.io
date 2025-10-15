import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

interface SEOOptimizerProps {
  seoData: SEOData;
  enableStructuredData?: boolean;
  enableOpenGraph?: boolean;
  enableTwitterCards?: boolean;
  enableCanonical?: boolean;
}

const AdvancedSEOOptimizer: React.FC<SEOOptimizerProps> = ({
  seoData,
  enableStructuredData = true,
  enableOpenGraph = true,
  enableTwitterCards = true,
  enableCanonical = true
}) => {
  useEffect(() => {
    // Update page title
    if (seoData.title) {
      document.title = seoData.title;
    }

    // Update meta description
    if (seoData.description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', seoData.description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = seoData.description;
        document.head.appendChild(meta);
      }
    }

    // Update meta keywords
    if (seoData.keywords && seoData.keywords.length > 0) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', seoData.keywords.join(', '));
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = seoData.keywords.join(', ');
        document.head.appendChild(meta);
      }
    }

    // Add canonical URL
    if (enableCanonical && seoData.canonicalUrl) {
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', seoData.canonicalUrl);
      } else {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = seoData.canonicalUrl;
        document.head.appendChild(link);
      }
    }

    // Add robots meta
    if (seoData.robots) {
      const metaRobots = document.querySelector('meta[name="robots"]');
      if (metaRobots) {
        metaRobots.setAttribute('content', seoData.robots);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'robots';
        meta.content = seoData.robots;
        document.head.appendChild(meta);
      }
    }

    // Add author meta
    if (seoData.author) {
      const metaAuthor = document.querySelector('meta[name="author"]');
      if (metaAuthor) {
        metaAuthor.setAttribute('content', seoData.author);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'author';
        meta.content = seoData.author;
        document.head.appendChild(meta);
      }
    }

    // Add structured data
    if (enableStructuredData && seoData.structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(seoData.structuredData);
      document.head.appendChild(script);
    }
  }, [seoData, enableStructuredData, enableCanonical]);

  return (
    <Helmet>
      {/* Open Graph tags */}
      {enableOpenGraph && (
        <>
          {seoData.ogTitle && <meta property="og:title" content={seoData.ogTitle} />}
          {seoData.ogDescription && <meta property="og:description" content={seoData.ogDescription} />}
          {seoData.ogImage && <meta property="og:image" content={seoData.ogImage} />}
          {seoData.ogUrl && <meta property="og:url" content={seoData.ogUrl} />}
          <meta property="og:type" content="website" />
        </>
      )}

      {/* Twitter Card tags */}
      {enableTwitterCards && (
        <>
          <meta name="twitter:card" content={seoData.twitterCard || "summary_large_image"} />
          {seoData.twitterTitle && <meta name="twitter:title" content={seoData.twitterTitle} />}
          {seoData.twitterDescription && <meta name="twitter:description" content={seoData.twitterDescription} />}
          {seoData.twitterImage && <meta name="twitter:image" content={seoData.twitterImage} />}
        </>
      )}

      {/* Additional meta tags */}
      {seoData.publishedTime && <meta property="article:published_time" content={seoData.publishedTime} />}
      {seoData.modifiedTime && <meta property="article:modified_time" content={seoData.modifiedTime} />}
      {seoData.section && <meta property="article:section" content={seoData.section} />}
      {seoData.tags && seoData.tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
    </Helmet>
  );
};

export default AdvancedSEOOptimizer;