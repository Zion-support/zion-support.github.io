import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;'
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];}
}

const SEO: React.FC<SEOProps> = ({'
  title = 'Zion Tech Group - Advanced AI and IT Solutions','
  description = 'Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide.','
  keywords = 'AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions','
  image = '/og-image.svg','
  url = 'https://ziontechgroup.com','
  type = 'website','
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = []}
}) => {'}
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;'
  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`;'
  const fullImage = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;

  const structuredData = {'
    '@context': 'https://schema.org','
    '@type': 'Organization','
    name: 'Zion Tech Group','
    url: 'https://ziontechgroup.com','
    logo: 'https://ziontechgroup.com/logo.svg','
    description: 'Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.',
    address: {'
      '@type': 'PostalAddress','
      addressLocality: 'Middletown','
      addressRegion: 'DE','
      addressCountry: 'US'}
    },
    contactPoint: {'
      '@type': 'ContactPoint','
      telephone: '+1-302-464-0950','
      contactType: 'customer service','
      email: 'kleber@ziontechgroup.com'}
    },
    sameAs: ['
      'https://www.linkedin.com/company/zion-tech-group','
      'https://twitter.com/ziontechgroup','
      'https://github.com/ziontechgroup'
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />

      {/* Article specific meta tags */}'
      {type === 'article' && publishedTime && (}
        <meta property="article:published_time" content={publishedTime} />
      )}'
      {type === 'article' && modifiedTime && (}
        <meta property="article:modified_time" content={modifiedTime} />
      )}'
      {type === 'article' && author && (}
        <meta property="article:author" content={author} />
      )}'
      {type === 'article' && section && (}
        <meta property="article:section" content={section} />
      )}'
      {type === 'article' && tags.length > 0 && (
        tags.map((tag, index) => (}
          <meta key={index} property="article:tag" content={tag} />
        ))
      )}

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no,address=no,email=no" />
      <meta name="color-scheme" content="dark light" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;'