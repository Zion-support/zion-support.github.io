import React, { useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  type?: string;
  image?: string;
  url?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
}

export const EnhancedSEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  type = 'website',
  image,
  url,
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonical,
  noindex = false,
  nofollow = false,
  structuredData
}) => {
  const currentUrl = url || window.location.href;
  const currentImage = image || '/images/zion-tech-group-og.jpg';

  const generateStructuredData = useCallback(() => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'Organization',
      name: 'Zion Tech Group',
      description: description,
      url: currentUrl,
      logo: '/images/zion-tech-group-logo.png',
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/zion-tech-group',
        'https://facebook.com/ziontechgroup'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English'
      }
    };

    if (type === 'article') {
      return {
        ...baseData,
        '@type': 'Article',
        headline: title,
        author: {
          '@type': 'Person',
          name: author
        },
        publisher: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
          logo: {
            '@type': 'ImageObject',
            url: '/images/zion-tech-group-logo.png'
          }
        },
        datePublished: publishedTime,
        dateModified: modifiedTime,
        articleSection: section,
        keywords: [...keywords, ...tags].join(', '),
        image: currentImage
      };
    }

    return baseData;
  }, [title, description, keywords, type, currentUrl, currentImage, author, publishedTime, modifiedTime, section, tags]);

  const generateMetaTags = useCallback(() => {
    const tags = [
      // Basic SEO
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
      { name: 'author', content: author },
      { name: 'robots', content: `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}` },
      
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: currentUrl },
      { property: 'og:image', content: currentImage },
      { property: 'og:site_name', content: 'Zion Tech Group' },
      { property: 'og:locale', content: 'en_US' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: currentImage },
      { name: 'twitter:site', content: '@ziontechgroup' },
      
      // Additional SEO
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#0ea5e9' },
      { name: 'msapplication-TileColor', content: '#0ea5e9' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Zion Tech Group' },
      
      // Performance
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'mobile-web-app-capable', content: 'yes' }
    ].filter(tag => tag.content);

    return tags;
  }, [title, description, keywords, author, noindex, nofollow, type, currentUrl, currentImage]);

  const generateLinkTags = useCallback(() => {
    const links = [
      // Canonical
      canonical && { rel: 'canonical', href: canonical },
      
      // Preconnect to external domains
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      
      // DNS prefetch
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
      
      // Favicon
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      
      // Manifest
      { rel: 'manifest', href: '/site.webmanifest' }
    ].filter(Boolean);

    return links;
  }, [canonical]);

  useEffect(() => {
    // Update page title for better UX
    document.title = title;
    
    // Add structured data to page
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [title, structuredData]);

  const metaTags = generateMetaTags();
  const linkTags = generateLinkTags();
  const structuredDataScript = generateStructuredData();

  return (
    <Helmet>
      <title>{title}</title>
      
      {/* Meta tags */}
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      
      {/* Link tags */}
      {linkTags.map((link, index) => (
        <link key={index} {...link} />
      ))}
      
      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredDataScript)}
      </script>
    </Helmet>
  );
};