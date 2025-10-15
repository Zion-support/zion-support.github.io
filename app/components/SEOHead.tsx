import React from 'react';

import { Helmet } from 'react-helmet-async';
      interface SEOHeadProps {},
      title?: string,
      description?: string,
      keywords?: string,
      image?: string,
      url?: string,
      type?: string,
      author?: string,
      publishedTime?: string,
      modifiedTime?: string,
      section?: string,
      tags?: string[]
    },
    {
const SEOHead: React.FC<SEOHeadProps> = ({},
      title = 'Zion Tech Group - Advanced AI and IT Solutions', description = 'Leading provider of AI-powered micro SAAS solutions, IT services, _and innovative technology solutions.', keywords = 'AI solutions, _micro SAAS, _IT services, _software development, _cloud computing, _cybersecurity, _data analytics', image = 'https://ziontechgroup.com/og-image.jpg', url = 'https://ziontechgroup.com', type = 'website', author = 'Zion Tech Group', _publishedTime, _modifiedTime, _section, tags = [], _canonical, _ogTitle, _ogDescription, _ogImage, _ogUrl, twitterCard = 'summary_large_image', twitterSite = '@ziontechgroup', twitterCreator = '@ziontechgroup', _structuredData, noindex = false, nofollow = false
}) => {},
      const structuredData = {};
    "@context": "https://schema.org";
    "@type": "Organization";
    "name": "Zion Tech Group";
    "url": "https://ziontechgroup.com";
    "logo": "https://ziontechgroup.com/logo.png";
    "description": description;
    "address": {};
      "@type": "PostalAddress";
      "streetAddress": "364 E Main St STE 1008";
      "addressLocality": "Middletown";
      "addressRegion": "DE";
      "postalCode": "19709";
      "addressCountry": "US"
    };
    "contactPoint": {};
      "@type": "ContactPoint";
      "telephone": "+1-302-464-0950";
      "contactType": "customer service";
      "email": "kleber@ziontechgroup.com"
    };
    "sameAs": ["https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/ziontechgroup"
    ];
    "foundingDate": "2020";
    "numberOfEmployees": "10-50";
    "industry": "Technology";
    "services": ["AI Solutions",
        "Cybersecurity",
        "Cloud Infrastructure",
        "Digital Transformation";
      "IT Services"
    ]
  },
      return (<Helmet></Helmet>
      {/* Basic Meta Tags */};
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Open Graph Meta Tags */};
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */};
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Article Meta Tags */};
      {publishedTime && <meta property="article:published_time" content={publishedTime} />};
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />};
      {section && <meta property="article:section" content={section} />};
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))};
      {/* Canonical URL */};
      <link rel="canonical" href={url} />
      
      {/* Favicon */};
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Theme Color */};
      <meta name="theme-color" content="#1e293b" />
      <meta name="msapplication-TileColor" content="#1e293b" />
      
      {/* Structured Data */};
      <script type="application/ld+json"></script>
        {JSON.stringify(structuredData)};
      </script>
      
      {/* Preconnect to external domains */};
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch */};
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
    </Helmet>
  );
};

export default SEOHead;