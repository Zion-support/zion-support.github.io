'use client';
import React, { useEffect } from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  structuredData?: any;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  structuredData,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  nofollow = false
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
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

    // Update keywords
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
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', canonicalUrl);
      document.head.appendChild(canonicalLink);
    }

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (ogTag) {
        ogTag.setAttribute('content', content);
      } else {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        ogTag.setAttribute('content', content);
        document.head.appendChild(ogTag);
      }
    };

    updateOGTag('og:title', title);
    updateOGTag('og:description', description);
    updateOGTag('og:url', canonicalUrl);
    updateOGTag('og:image', ogImage);
    updateOGTag('og:type', ogType);
    updateOGTag('og:site_name', 'Zion Tech Group');

    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (twitterTag) {
        twitterTag.setAttribute('content', content);
      } else {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        twitterTag.setAttribute('content', content);
        document.head.appendChild(twitterTag);
      }
    };

    updateTwitterTag('twitter:card', twitterCard);
    updateTwitterTag('twitter:title', title);
    updateTwitterTag('twitter:description', description);
    updateTwitterTag('twitter:image', ogImage);

    // Update robots meta
    const robotsContent = [
      noindex ? 'noindex' : 'index',
      nofollow ? 'nofollow' : 'follow'
    ].join(', ');

    let robotsTag = document.querySelector('meta[name="robots"]');
    if (robotsTag) {
      robotsTag.setAttribute('content', robotsContent);
    } else {
      robotsTag = document.createElement('meta');
      robotsTag.setAttribute('name', 'robots');
      robotsTag.setAttribute('content', robotsContent);
      document.head.appendChild(robotsTag);
    }

    // Add structured data
    if (structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
      if (structuredDataScript) {
        structuredDataScript.textContent = JSON.stringify(structuredData);
      } else {
        structuredDataScript = document.createElement('script');
        structuredDataScript.type = 'application/ld+json';
        structuredDataScript.textContent = JSON.stringify(structuredData);
        document.head.appendChild(structuredDataScript);
      }
    }

    // Add viewport meta if not present
    let viewportTag = document.querySelector('meta[name="viewport"]');
    if (!viewportTag) {
      viewportTag = document.createElement('meta');
      viewportTag.setAttribute('name', 'viewport');
      viewportTag.setAttribute('content', 'width=device-width, initial-scale=1.0');
      document.head.appendChild(viewportTag);
    }

    // Add theme color
    let themeColorTag = document.querySelector('meta[name="theme-color"]');
    if (!themeColorTag) {
      themeColorTag = document.createElement('meta');
      themeColorTag.setAttribute('name', 'theme-color');
      themeColorTag.setAttribute('content', '#0f172a');
      document.head.appendChild(themeColorTag);
    }

    // Add language attribute
    document.documentElement.lang = 'en';

    // Add preconnect for performance
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com'
    ];

    preconnectDomains.forEach(domain => {
      let preconnectLink = document.querySelector(`link[rel="preconnect"][href="${domain}"]`);
      if (!preconnectLink) {
        preconnectLink = document.createElement('link');
        preconnectLink.setAttribute('rel', 'preconnect');
        preconnectLink.setAttribute('href', domain);
        document.head.appendChild(preconnectLink);
      }
    });

  }, [title, description, keywords, canonicalUrl, structuredData, ogImage, ogType, twitterCard, noindex, nofollow]);

  return null;
};

export default SEOOptimizer;