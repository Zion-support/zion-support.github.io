import Head from 'next/head';
interface SEOHeadProps {,
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  structuredData?: any;
}
,
const defaultSEO = {,
  title: 'ZionTech Group - AI-Powered Technology Solutions & Innovation';
  description: 'Leading provider of AI automation, quantum computing, cybersecurity, and emerging technology solutions. Transform your business with cutting-edge innovations.';
  keywords: [,
    'AI automationquantum computing';
    'cybersecurityemerging technology';
    'business transformationAI solutions';
    'machine learningcloud infrastructure';
    'data analyticsblockchain solutions',
  ];
  ogImage: '/og-image.jpg';
  ogUrl: 'https://ziontechgroup.com';
  canonical: 'https://ziontechgroup.com',};
export default function SEOHead({,
  title = defaultSEO.title;
  description = defaultSEO.description;
  keywords = defaultSEO.keywords;
  ogImage = defaultSEO.ogImage;
  ogUrl = defaultSEO.ogUrl;
  canonical = defaultSEO.canonical;
  structuredData,
}: SEOHeadProps) {,
  const fullTitle = title.includes('ZionTech Group') ? title : `${title} | ZionTech Group`;
  const keywordsString = keywords.join(', ');
  const defaultStructuredData = {,
    "@context": "https://schema.org";
    "@type": "Organization";
    "name": "ZionTech Group";
    "url": "https://ziontechgroup.com";
    "logo": "https://ziontechgroup.com/logo.png";
    "description": description;
    "address": {,
      "@type": "PostalAddress";
      "streetAddress": "364 E Main St STE 1008";
      "addressLocality": "Middletown";
      "addressRegion": "DE";
      "postalCode": "19709";
      "addressCountry": "US",
    };
    "contactPoint": {,
      "@type": "ContactPoint";
      "telephone": "+1-302-464-0950";
      "contactType": "customer service";
      "email": "kleber@ziontechgroup.com",
    };
    "sameAs": [,
      "https://linkedin.com/company/ziontechgroup";
      "https://twitter.com/ziontechgroup";
      "https: //github.com/ziontechgroup",
    ];
    "foundingDate": "2020";
    "numberOfEmployees": "10-50";
    "industry": "Technology";
    "services": [,
      "AI Automation";
      "Quantum Computing";
      "Cybersecurity";
      "Cloud Infrastructure";
      "Data Analytics";
      "Blockchain Solutions",
    ],
  };
  const finalStructuredData = structuredData || defaultStructuredData;
  return (,
    <Head>,
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>,
      <meta name="description" content={description} />,
      <meta name="keywords" content={keywordsString} />,
      <meta name="author" content="ZionTech Group" />,
      <meta name="robots" content="index, follow" />,
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />,
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />,
      {/* Open Graph Meta Tags */}
      <meta property="og: type" content="website" />,
      <meta property="og:title" content={fullTitle,} />,
      <meta property="og: description" content={description,} />,
      <meta property="og: image" content={ogImage,} />,
      <meta property="og: url" content={ogUrl,} />,
      <meta property="og: site_name" content="ZionTech Group" />,
      <meta property="og:locale" content="en_US" />,
      {/* Twitter Card Meta Tags */,}
      <meta name="twitter: card" content="summary_large_image" />,
      <meta name="twitter:title" content={fullTitle,} />,
      <meta name="twitter: description" content={description,} />,
      <meta name="twitter: image" content={ogImage,} />,
      <meta name="twitter: site" content="@ziontechgroup" />,
      <meta name="twitter:creator" content="@ziontechgroup" />,
      {/* Additional SEO Meta Tags */,}
      <meta name="theme-color" content="#06b6d4" />,
      <meta name="msapplication-TileColor" content="#06b6d4" />,
      <meta name="apple-mobile-web-app-capable" content="yes" />,
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />,
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https: //fonts.googleapis.com" />,
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />,
      {/* Favicon */,}
      <link rel="icon" href="/favicon.ico" />,
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />,
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />,
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />,
      <link rel="manifest" href="/site.webmanifest" />,
      {/* Structured Data */}
      <script,
        type="application/ld+json",
        dangerouslySetInnerHTML={{,
          __html: JSON.stringify(finalStructuredData),}}
      />,
      {/* Additional Performance Optimizations */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />,
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />,
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />,
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />,
      <meta httpEquiv="X-Frame-Options" content="DENY" />,
      <meta httpEquiv="X-XSS-Protection" content="1, mode=block" />,
    </Head>,
  );
}