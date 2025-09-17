import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile' | 'product';
  siteName?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonical?: string;
  robots?: string;
  noindex?: boolean;
  nofollow?: boolean;
  section?: string;
  tags?: string[];
}
const SEO: React.FC<SEOProps> = ({
  title = 'Zion Holdings - Advanced Financial Solutions',
  description = 'Leading provider of comprehensive financial services, investment solutions, and wealth management strategies.',
  keywords = 'financial services, investment, wealth management, banking, fintech',
  image = '/og-image.jpg',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website',
  siteName = 'Zion Holdings',
  author = 'Zion Holdings',
  publishedTime,
  modifiedTime,
  canonical,
  robots = 'index, follow',
  noindex = false,
  nofollow = false}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

<<<<<<< HEAD
    // Update or create meta tags
    const updateMetaTag = (name: "string", content: "string", property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
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
    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', noindex || nofollow ? 'noindex, nofollow' : robots);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', siteName, true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Article specific tags
    if (publishedTime) {
      updateMetaTag('article:published_time', publishedTime, true);
    }
if (modifiedTime) {
      updateMetaTag('article:modified_time', modifiedTime, true);
    }
    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
link.setAttribute('href', canonical);
    }
    // JSON-LD structured data
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'Organization',
      name: "siteName",
      description,
      url,
      ...(type === 'article' && {
        headline: "title",
        author: {
          '@type': 'Person',
          name: "author"},
        publisher: {
          '@type': 'Organization',
          name: "siteName"},
        ...(publishedTime && { datePublished: publishedTime }),
        ...(modifiedTime && { dateModified: modifiedTime })})};
    // Remove existing JSON-LD
    const existingJsonLd = document.querySelector('script[type="application/ld+json"]');
    if (existingJsonLd) {
      existingJsonLd.remove();
    }
    // Add new JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }, [title, description, keywords, image, url, type, siteName, author, publishedTime, modifiedTime, canonical, robots, noindex, nofollow]);

  return null;
  };
export default SEO;
=======
export function SEO({
  title = 'Zion Tech Group - The Future of Tech Marketplace',
  description = 'Connect with AI experts, discover innovative services, and accelerate your digital transformation with Zion Tech Group\'s comprehensive platform.',
  keywords = 'AI services, tech marketplace, digital transformation, IT consulting, cloud solutions, cybersecurity, talent placement',
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
  nofollow = false,
  canonical
}: SEOProps) {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullUrl = canonical || url;

  useEffect(() => {
    // Update document title for accessibility
    document.title = fullTitle;
    
    // Add structured data for better SEO
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': type === 'website' ? 'Organization' : 'Article',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: description,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English'
      },
      sameAs: [
        'https://facebook.com/ziontechgroup',
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup',
        'https://instagram.com/ziontechgroup'
      ]
    };

    // Add structured data to page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [fullTitle, description, type]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.length > 0 && (
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))
      )}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Manifest */}
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
}
>>>>>>> origin/website-improvements-v2
