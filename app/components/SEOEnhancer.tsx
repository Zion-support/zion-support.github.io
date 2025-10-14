<<<<<<< HEAD
import React, { useEffect } from 'react';
=======
import React from 'react';
import { useEffect } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
import { Helmet } from 'react-helmet-async';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  structuredData?: unknown;
<<<<<<< HEAD
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation.',
  keywords = ['AI', 'IT solutions', 'automation', 'digital transformation', 'Zion Tech Group'],
  image = '/images/og-image.jpg',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website',
<<<<<<< HEAD
  structuredData,
  canonicalUrl,
  noindex = false,
  nofollow = false
=======
  structuredData
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
}) => {
  useEffect(() => {
    // Add structured data to the page
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
    return undefined;
  }, [structuredData]);

  // Generate meta tags
  const metaTags = [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords.join(', ') },
    { name: 'author', content: 'Zion Tech Group' },
<<<<<<< HEAD
    { name: 'robots', content: `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}` },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'theme-color', content: '#1e293b' },
=======
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
    // Open Graph tags
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: type },
    { property: 'og:site_name', content: 'Zion Tech Group' },
<<<<<<< HEAD
    { property: 'og:locale', content: 'en_US' },
    // Twitter Card tags
=======
    // Twitter tags
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
<<<<<<< HEAD
    { name: 'twitter:site', content: '@ziontechgroup' },
    { name: 'twitter:creator', content: '@ziontechgroup' },
    // Additional SEO tags
    { name: 'google-site-verification', content: 'your-google-verification-code' },
    { name: 'msvalidate.01', content: 'your-bing-verification-code' },
    { name: 'yandex-verification', content: 'your-yandex-verification-code' }
=======
    // Additional SEO tags
    { name: 'theme-color', content: '#0066cc' },
    { name: 'msapplication-TileColor', content: '#0066cc' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
  ];

  return (
    <Helmet>
      <title>{title}</title>
<<<<<<< HEAD
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
=======
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
    </Helmet>
  );
};

<<<<<<< HEAD
=======
// Default structured data for the organization
const defaultStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zion Tech Group",
  "description": "Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation.",
  "url": "https://ziontechgroup.com",
  "logo": "https://ziontechgroup.com/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-0123",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.linkedin.com/company/zion-tech-group",
    "https://twitter.com/ziontechgroup",
    "https://github.com/ziontechgroup"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Tech Street",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94105",
    "addressCountry": "US"
  }
};

>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
export default SEOEnhancer;