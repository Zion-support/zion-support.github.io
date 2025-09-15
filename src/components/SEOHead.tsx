import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion App - Revolutionary AI Solutions',
  description = 'Transform your business with cutting-edge AI solutions. Discover revolutionary technology that drives enterprise success and innovation.',
  keywords = ['AI', 'artificial intelligence', 'machine learning', 'enterprise solutions', 'automation', 'technology'],
  image = '/og-image.jpg',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website',
  author = 'Zion Holdings',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
  nofollow = false,
}) => {
  const fullTitle = title.includes('Zion App') ? title : `${title} | Zion App`;
  const fullImage = image.startsWith('http') ? image : `${process.env.REACT_APP_BASE_URL || ''}${image}`;
  const fullUrl = url.startsWith('http') ? url : `${process.env.REACT_APP_BASE_URL || ''}${url}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebSite',
    name: fullTitle,
    description,
    url: fullUrl,
    image: fullImage,
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zion Holdings',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.REACT_APP_BASE_URL || ''}/logo.png`,
      },
    },
    ...(type === 'article' && {
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
      section,
      keywords: tags.join(', '),
    }),
    ...(type === 'website' && {
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${process.env.REACT_APP_BASE_URL || ''}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    }),
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Robots */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Zion App" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@ZionHoldings" />
      <meta name="twitter:creator" content="@ZionHoldings" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional structured data for organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Zion Holdings',
          url: process.env.REACT_APP_BASE_URL || '',
          logo: `${process.env.REACT_APP_BASE_URL || ''}/logo.png`,
          description: 'Revolutionary AI solutions for enterprise transformation',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'US',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'contact@zion.app',
          },
          sameAs: [
            'https://twitter.com/ZionHoldings',
            'https://linkedin.com/company/zion-holdings',
            'https://github.com/Zion-Holdings',
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;