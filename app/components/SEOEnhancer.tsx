<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DEFAULT_SEO, META_TAGS } from '../constants/seo';
import { useSEO } from '../hooks/useSEO';

interface SEOEnhancerProps {
=======
import React from 'react';'import { useEffect } from 'react';'import { Helmet } from 'react-helmet-async';'interface SEOEnhancerProps {
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  structuredData?: unknown;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
<<<<<<< HEAD
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  keywords = DEFAULT_SEO.keywords,
  image = DEFAULT_SEO.image,
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = DEFAULT_SEO.type,
  structuredData
}) => {
  useSEO(structuredData);
  // Generate meta tags
  const metaTags = [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords.join(', ') },
    { name: 'author', content: META_TAGS.AUTHOR },
    { name: 'robots', content: META_TAGS.ROBOTS },
    { name: 'viewport', content: META_TAGS.VIEWPORT },
    // Open Graph tags
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: type },
    { property: 'og:site_name', content: 'Zion Tech Group' },
    // Twitter tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
    // Additional SEO tags
    { name: 'theme-color', content: '#0066cc' },
    { name: 'msapplication-TileColor', content: '#0066cc' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
  ];
=======
  title = 'Zion Tech Group - Advanced AI and IT Solutions','  description = 'Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation.','  keywords = ['AI', 'IT solutions', 'automation', 'digital transformation', 'Zion Tech Group'],'  image = '/images/og-image.jpg','  url = typeof window !== 'undefined' ? window.location.href : ','  type = 'website','  structuredData
}) => {
  useEffect(() => {
    // Add structured data to the page
    if (structuredData) {
      const script = document.createElement('script');'      script.type = 'application/ld+json';'      script.text = JSON.stringify(structuredData);
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
    { name: 'description', content: description },'    { name: 'keywords', content: keywords.join(', ') },'    { name: 'author', content: 'Zion Tech Group' },'    { name: 'robots', content: 'index, follow' },'    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },'    // Open Graph tags
    { property: 'og:title', content: title },'    { property: 'og:description', content: description },'    { property: 'og:image', content: image },'    { property: 'og:url', content: url },'    { property: 'og:type', content: type },'    { property: 'og:site_name', content: 'Zion Tech Group' },'    // Twitter tags
    { name: 'twitter:card', content: 'summary_large_image' },'    { name: 'twitter:title', content: title },'    { name: 'twitter:description', content: description },'    { name: 'twitter:image', content: image },'    // Additional SEO tags
    { name: 'theme-color', content: '#0066cc' },'    { name: 'msapplication-TileColor', content: '#0066cc' },'    { name: 'apple-mobile-web-app-capable', content: 'yes' },'    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },'  ];
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
  return (
    <Helmet>
      <title>{title}</title>
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      {/* Canonical URL */}
      <link rel="canonical" href={url} />"      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />"      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />"      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />"      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />"      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />"      <link rel="preconnect" href="https://fonts.gstatic.com" />"      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />"      <link rel="dns-prefetch" href="//www.googletagmanager.com" />"    </Helmet>
  );
};
export default SEOEnhancer;