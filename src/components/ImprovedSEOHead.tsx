import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: Record<string, any>;
}

const ImprovedSEOHead: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of cutting-edge AI solutions, micro SaaS platforms, and comprehensive IT services. Transform your business with our innovative technology solutions.',
  keywords = ['AI', 'artificial intelligence', 'machine learning', 'micro SaaS', 'IT services', 'technology solutions', 'business automation'],
  image = '/images/zion-tech-group-og.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
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
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;

  // Generate robots meta
  const robots = [];
  if (noindex) robots.push('noindex');
  if (nofollow) robots.push('nofollow');
  if (!noindex && !nofollow) robots.push('index', 'follow');

  // Generate structured data
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebSite',
    name: fullTitle,
    description,
    url: fullUrl,
    image: fullImage,
    author: {
      '@type': 'Organization',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ziontechgroup.com/images/zion-tech-group-logo.png'
      }
    }
  };

  if (type === 'article' && publishedTime) {
    defaultStructuredData.datePublished = publishedTime;
  }
  if (modifiedTime) {
    defaultStructuredData.dateModified = modifiedTime;
  }
  if (section) {
    defaultStructuredData.articleSection = section;
  }
  if (tags.length > 0) {
    defaultStructuredData.keywords = tags.join(', ');
  }

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots.join(', ')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || fullUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Article-specific tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#1e293b" />
      <meta name="msapplication-TileColor" content="#1e293b" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Performance and Security */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional structured data for organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
          description: 'Leading provider of cutting-edge AI solutions, micro SaaS platforms, and comprehensive IT services.',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'US',
            addressRegion: 'Delaware'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-302-464-0950',
            contactType: 'customer service',
            availableLanguage: 'English'
          },
          sameAs: [
            'https://twitter.com/ziontechgroup',
            'https://linkedin.com/company/zion-tech-group',
            'https://github.com/zion-tech-group'
          ]
        })}
      </script>
    </Helmet>
  );
};

export default ImprovedSEOHead;