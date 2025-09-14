import React, { useEffect } from 'react';

export function SEO({ 
  title, 
  description, 
  keywords, 
  image, 
  canonical, 
  ogImage, 
  url,
  structuredData,
  noindex = false,
  nofollow = false,
  article = false,
  publishedTime,
  modifiedTime,
  author,
  section,
  tags
}) {
  const siteName = 'Zion Tech Group';
  const fullTitle = `${title} | ${siteName}`;
  const imageUrl = ogImage || image || '/og-image.jpg';
  const canonicalUrl = canonical || url;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      let meta = document.querySelector(`meta[${property ? 'property' : 'name'}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update description
    updateMetaTag('description', description);

    // Update keywords if provided
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Update Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', imageUrl, true);
    updateMetaTag('og:type', article ? 'article' : 'website', true);
    updateMetaTag('og:site_name', siteName, true);
    if (canonicalUrl) {
      updateMetaTag('og:url', canonicalUrl, true);
    }

    // Article-specific Open Graph tags
    if (article) {
      if (publishedTime) updateMetaTag('og:published_time', publishedTime, true);
      if (modifiedTime) updateMetaTag('og:modified_time', modifiedTime, true);
      if (author) updateMetaTag('og:author', author, true);
      if (section) updateMetaTag('og:section', section, true);
      if (tags) updateMetaTag('og:tag', tags.join(', '), true);
    }

    // Update Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', imageUrl);
    updateMetaTag('twitter:site', '@ziontechgroup');

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    // Update robots directive
    const robotsValue = [
      noindex ? 'noindex' : 'index',
      nofollow ? 'nofollow' : 'follow',
      'max-snippet:-1',
      'max-image-preview:large',
      'max-video-preview:-1'
    ].join(', ');
    updateMetaTag('robots', robotsValue);

    // Update author
    updateMetaTag('author', author || siteName);

    // Add language and locale
    updateMetaTag('language', 'English');
    updateMetaTag('og:locale', 'en_US', true);

    // Add viewport optimization
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      document.head.appendChild(viewport);
    }
    viewport.setAttribute('content', 'width=device-width, initial-scale=1, shrink-to-fit=no');

    // Add theme color
    let themeColor = document.querySelector('meta[name="theme-color"]');
    if (!themeColor) {
      themeColor = document.createElement('meta');
      themeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(themeColor);
    }
    themeColor.setAttribute('content', '#0f172a');

    // Add structured data if provided
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Add default structured data for organization
    const defaultStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": "Revolutionary Technology Solutions with AI, Quantum Computing, and Autonomous Solutions",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      },
      "sameAs": [
        "https://www.linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
      ]
    };

    let orgScript = document.querySelector('script[data-structured="organization"]');
    if (!orgScript) {
      orgScript = document.createElement('script');
      orgScript.setAttribute('type', 'application/ld+json');
      orgScript.setAttribute('data-structured', 'organization');
      document.head.appendChild(orgScript);
    }
    orgScript.textContent = JSON.stringify(defaultStructuredData);

    // Cleanup function
    return () => {
      // Reset title to default if needed
      document.title = siteName;
    };
  }, [title, description, keywords, image, canonical, ogImage, url, fullTitle, imageUrl, canonicalUrl, siteName, structuredData, noindex, nofollow, article, publishedTime, modifiedTime, author, section, tags]);

  // This component doesn't render anything
  return null;
}
