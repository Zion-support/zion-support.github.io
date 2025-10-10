'use client';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonicalUrl?: string;
  ogImage?: string;
  twitterCard?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - AI & IT Solutions',
  description = 'Leading provider of AI and IT solutions for businesses. Transform your operations with cutting-edge technology.',
  keywords = ['AI solutions', 'IT services', 'cloud computing', 'automation', 'cybersecurity'],
  canonicalUrl,
  ogImage = '/images/og-image.jpg',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
  noFollow = false
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

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
    const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywordsString);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywordsString;
      document.head.appendChild(meta);
    }

    // Update canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', canonicalUrl);
      } else {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        canonical.href = canonicalUrl;
        document.head.appendChild(canonical);
      }
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = title;
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = description;
      document.head.appendChild(meta);
    }

    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', ogImage);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:image');
      meta.content = ogImage;
      document.head.appendChild(meta);
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:title';
      meta.content = title;
      document.head.appendChild(meta);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', ogImage);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:image';
      meta.content = ogImage;
      document.head.appendChild(meta);
    }

    const twitterCardMeta = document.querySelector('meta[name="twitter:card"]');
    if (twitterCardMeta) {
      twitterCardMeta.setAttribute('content', twitterCard);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:card';
      meta.content = twitterCard;
      document.head.appendChild(meta);
    }

    // Add structured data
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Handle robots meta
    const robotsContent = [];
    if (noIndex) robotsContent.push('noindex');
    if (noFollow) robotsContent.push('nofollow');
    if (robotsContent.length === 0) robotsContent.push('index', 'follow');

    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', robotsContent.join(', '));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = robotsContent.join(', ');
      document.head.appendChild(meta);
    }
  }, [title, description, keywords, canonicalUrl, structuredData, ogImage, twitterCard, noIndex, noFollow]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(', ') : keywords} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Robots */}
      <meta name="robots" content={noIndex || noFollow ? `${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}` : 'index, follow'} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOOptimizer;
