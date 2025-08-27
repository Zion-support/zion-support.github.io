import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: Record<string, any>;
  noindex?: boolean;
  nofollow?: boolean;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage = '/og-image.jpg',
  canonicalUrl,
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData,
  noindex = false,
  nofollow = false,
  twitterCard = 'summary_large_image'
}) => {
  const siteName = 'Zion Tech Group';
  const siteUrl = 'https://ziontechgroup.com';
  const twitterHandle = '@ziontechgroup';

  // Generate comprehensive meta tags
  const metaTags = useMemo(() => {
    const tags = [
      // Basic meta tags
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: author },
      { name: 'robots', content: `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}` },
      
      // Open Graph tags
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: canonicalUrl || siteUrl },
      { property: 'og:image', content: ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:site_name', content: siteName },
      { property: 'og:locale', content: 'en_US' },
      
      // Twitter Card tags
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:site', content: twitterHandle },
      { name: 'twitter:creator', content: twitterHandle },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}` },
      
      // Additional Open Graph tags for articles
      ...(type === 'article' && publishedTime ? [{ property: 'og:published_time', content: publishedTime }] : []),
      ...(type === 'article' && modifiedTime ? [{ property: 'og:modified_time', content: modifiedTime }] : []),
      ...(type === 'article' && section ? [{ property: 'og:section', content: section }] : []),
      ...(type === 'article' && tags.length > 0 ? tags.map(tag => ({ property: 'og:tag', content: tag })) : []),
      
      // Viewport and mobile optimization
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'theme-color', content: '#06b6d4' },
      { name: 'msapplication-TileColor', content: '#06b6d4' },
      
      // Security headers
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
      { 'http-equiv': 'X-Frame-Options', content: 'DENY' },
      { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' },
      
      // Performance optimization
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: siteName }
    ];

    return tags.filter(tag => tag.content); // Remove empty tags
  }, [title, description, keywords, author, ogImage, canonicalUrl, type, publishedTime, modifiedTime, section, tags, noindex, nofollow, twitterCard]);

  // Generate structured data (JSON-LD)
  const generateStructuredData = useMemo(() => {
    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'Organization',
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      description: 'Leading AI & Technology Solutions Provider',
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup',
        'https://github.com/ziontechgroup'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English'
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'San Francisco',
        addressRegion: 'CA',
        addressCountry: 'US'
      }
    };

    if (type === 'article') {
      return {
        ...baseStructuredData,
        '@type': 'Article',
        headline: title,
        description: description,
        author: {
          '@type': 'Person',
          name: author
        },
        publisher: {
          '@type': 'Organization',
          name: siteName,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.png`
          }
        },
        ...(publishedTime && { datePublished: publishedTime }),
        ...(modifiedTime && { dateModified: modifiedTime }),
        ...(section && { articleSection: section }),
        ...(tags.length > 0 && { keywords: tags.join(', ') })
      };
    }

    if (type === 'service') {
      return {
        ...baseStructuredData,
        '@type': 'Service',
        name: title,
        description: description,
        provider: {
          '@type': 'Organization',
          name: siteName
        },
        serviceType: 'Technology Consulting',
        areaServed: 'Worldwide'
      };
    }

    return baseStructuredData;
  }, [title, description, type, author, publishedTime, modifiedTime, section, tags]);

  // Generate breadcrumb structured data
  const generateBreadcrumbData = useMemo(() => {
    if (!canonicalUrl) return null;

    const urlParts = canonicalUrl.replace(siteUrl, '').split('/').filter(Boolean);
    const breadcrumbs = urlParts.map((part, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' '),
      item: `${siteUrl}/${urlParts.slice(0, index + 1).join('/')}`
    }));

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl
        },
        ...breadcrumbs
      ]
    };
  }, [canonicalUrl]);

  // Generate FAQ structured data if applicable
  const generateFAQData = useMemo(() => {
    if (type !== 'article' || !tags.includes('FAQ')) return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Zion Tech Group offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zion Tech Group offers AI solutions, quantum computing, micro SaaS services, digital transformation, and technology consulting.'
          }
        },
        {
          '@type': 'Question',
          name: 'How can I get started with Zion Tech Group?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Contact us through our website or call us to discuss your technology needs and get a personalized solution.'
          }
        }
      ]
    };
  }, [type, tags]);

  useEffect(() => {
    // Update document title for better UX
    document.title = title;
    
    // Add structured data to page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(generateStructuredData);
    document.head.appendChild(script);

    // Add breadcrumb data if available
    if (generateBreadcrumbData) {
      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.text = JSON.stringify(generateBreadcrumbData);
      document.head.appendChild(breadcrumbScript);
    }

    // Add FAQ data if available
    if (generateFAQData) {
      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.text = JSON.stringify(generateFAQData);
      document.head.appendChild(faqScript);
    }

    // Cleanup function
    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, [generateStructuredData, generateBreadcrumbData, generateFAQData, title]);

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="canonical" href={canonicalUrl || siteUrl} />
      
      {/* Meta tags */}
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon and app icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Additional Open Graph tags for better social sharing */}
      {type === 'article' && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:publisher" content={siteName} />
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
    </Helmet>
  );
};

export default SEO;
