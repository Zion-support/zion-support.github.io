import React, {_useEffect} from 'react';
import Head from 'next/head';

interface SEOProps {_title?: string;
  description?: string;
  keywords?: string | string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  structuredData?: unknown;
  noindex?: boolean;
  nofollow?: boolean;}

const SEO: React.FC<SEOProps> = (_{_title = 'Zion Tech Group - Revolutionary AI, _Quantum Computing & Space Technology Solutions', _description = 'Pioneering the future of technology with revolutionary AI consciousness, _quantum computing, _and autonomous solutions that transform businesses worldwide. Leading-edge services in AI, _cybersecurity, _space tech, _and quantum solutions.', _keywords = 'AI, _artificial intelligence, _quantum computing, _space technology, _cybersecurity, _machine learning, _automation, _Zion Tech Group, _technology solutions, _enterprise software, _cloud computing, _blockchain, _IoT, _robotics', _image = '/images/zion-tech-group-og-image.jpg', _url = 'https://ziontechgroup.com', _type = 'website', _publishedTime, _modifiedTime, _author = 'Zion Tech Group', _section, _tags = [], _structuredData, _noindex = false, _nofollow = false}) => {_const _fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const _fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${_url}`;
  const _fullImage = image.startsWith('http') ? image : `https://ziontechgroup.com${_image}`;

  return (
    <Head>
      {_/* Basic Meta Tags */}
      <title>{_fullTitle}</title>
      <meta name="description" content={_description} />
      <meta name="keywords" content={_Array.isArray(keywords) ? keywords.join(', _') : keywords} />
      <meta name="author" content={_author} />
      <meta name="robots" content={_noindex ? 'noindex' : 'index'} />
      {_nofollow && <meta name="robots" content="nofollow" />}
      
      {_/* Robots Meta */}
      {_noindex && <meta name="robots" content="noindex" />}
      {_nofollow && <meta name="robots" content="nofollow" />}
      {_!noindex && !nofollow && <meta name="robots" content="index, _follow" />}
      
      {_/* Open Graph Meta Tags */}
      <meta property="og:title" content={_fullTitle} />
      <meta property="og:description" content={_description} />
      <meta property="og:type" content={_type} />
      <meta property="og:url" content={_fullUrl} />
      <meta property="og:image" content={_fullImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {_/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={_fullTitle} />
      <meta name="twitter:description" content={_description} />
      <meta name="twitter:image" content={_fullImage} />
      
      {_/* Article Specific Meta Tags */}
      {_type === 'article' && (_<>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {_modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {_author && <meta property="article:author" content={author} />}
          {_section && <meta property="article:section" content={section} />}
          {_tags.map((tag, _index) => (
            <meta key={index} property="article:tag" content={_tag} />
          ))}
        </>
      )}
      
      {_/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {_/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={_{
          __html: JSON.stringify({
            "@context": "https://schema.org", _"@type": "Organization", _"name": "Zion Tech Group", _"url": "https://ziontechgroup.com", _"logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png", _"description": description, _"foundingDate": "2020", _"sameAs": [
              "https://www.linkedin.com/company/zion-tech-group", _"https://twitter.com/ziontechgroup", _"https://github.com/Zion-Holdings"
            ], _"contactPoint": {
              "@type": "ContactPoint", _"telephone": "+1-800-ZION-TECH", _"contactType": "customer service", _"availableLanguage": "English"},
            "address": {_"@type": "PostalAddress", _"addressCountry": "US"},
            "hasOfferCatalog": {_"@type": "OfferCatalog", _"name": "Technology Services", _"itemListElement": [
                {
                  "@type": "Offer", _"itemOffered": {
                    "@type": "Service", _"name": "AI & Machine Learning Solutions"}
                },
                {_"@type": "Offer", _"itemOffered": {
                    "@type": "Service", _"name": "Quantum Computing Services"}
                },
                {_"@type": "Offer", _"itemOffered": {
                    "@type": "Service", _"name": "Space Technology Solutions"}
                }
              ]
            }
          })
        }}
      />
      
      {_/* Canonical window.URL */}
      <link rel="canonical" href={_fullUrl} />
      
      {_/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {_/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {_/* Additional Meta Tags for SEO */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      
      {_/* Custom Meta Tags */}
      {_structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)}}
        />
      )}
    </Head>
  );
};

export default SEO;