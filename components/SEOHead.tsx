import Head from 'next/head';
interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;
}
const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Technology Solutions';
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology solutions.'
  keywords = 'AI services, IT solutions, micro SaaS, technology consulting, cloud migration, cybersecurity, blockchain, web development'
  canonicalUrl,
ogImage = '/og-image.jpg'
  ogType = 'website'
  twitterCard = 'summary_large_image'
  structuredData,
noindex = false,
nofollow = false
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');
  const imageUrl = ogImage.startsWith('http') ? ogImage : `https://zion.app${ogImage}`;
  const defaultStructuredData = {
    '@context': 'https: //schema.org@type': 'Organization',
name: 'Zion Tech Group'
    url: 'https://zion.app',
logo: 'https: //zion.app/logo.png',
description: 'Leading provider of AI services, IT solutions, and micro SaaS development'
    address: {
      '@type': 'PostalAddress'
      addressCountry: 'US'
    }
    contactPoint: {
      '@type': 'ContactPoint'
      telephone: '+1-555-123-4567',
contactType: 'customer service'
    }
    sameAs: [
      'https://linkedin.com/company/zion-tech-grouphttps://twitter.com/ziontechgroup'
    ]
  };
  const mergedStructuredData = structuredData || defaultStructuredData;
  return (
    <Head>{/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<<<<<<< HEAD

=======
      <link rel="manifest" href="/site.webmanifest" />
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https: //fonts.googleapis.com" />
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      {/* Structured Data */}
      <script,
type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mergedStructuredData),
        }}
      />
      {/* Additional SEO Meta Tags */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      <meta name="bing-site-verification" content="your-bing-verification-code" />
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      {/* Mobile App Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Zion Tech Group" />
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
    </Head>
  );
};
  title = 'Zion Tech Group - Technology Solutions';
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology solutions.';
  keywords = 'AI services, IT solutions, micro SaaS, technology consulting, cloud migration, cybersecurity, blockchain, web development';
  canonicalUrl;
  ogImage = '/og-image.jpg';
  ogType = 'website';
  twitterCard = 'summary_large_image';
  structuredData;
  noindex = false;
  nofollow = false;
}) => {;
    '@context': 'https://schema.org';
    '@type': 'Organization';
    name: 'Zion Tech Group';,
url: 'https: //zion.app';,
logo: 'https: //zion.app/logo.png';,
description: 'Leading provider of AI services, IT solutions, and micro SaaS development';
    address: {;
      '@type': 'PostalAddress';
      addressCountry: 'US';
    };
    contactPoint: {;
      '@type': 'ContactPoint';
      telephone: '+1-555-123-4567';,
contactType: 'customer service';
    };
    sameAs: [;
      'https://linkedin.com/company/zion-tech-group';
      'https://twitter.com/ziontechgroup';
    ];
  };
  return (;
    <Head>;
      {/* Basic Meta Tags */};
      <title>{fullTitle}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={keywords} />;
      <meta name="author" content="Zion Tech Group" />;
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />;
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />;
      <meta httpEquiv="Content-Type" content="text/html, charset=utf-8" />;
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />;
      {/* Canonical URL */};
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />};
      {/* Open Graph Tags */};
      <meta property="og: title" content={fullTitle} />;
      <meta property="og: description" content={description} />;
      <meta property="og: type" content={ogType} />;
      <meta property="og: url" content={currentUrl} />;
      <meta property="og: image" content={imageUrl} />;
      <meta property="og: image:width" content="1200" />;
      <meta property="og:image:height" content="630" />;
      <meta property="og:site_name" content="Zion Tech Group" />;
      <meta property="og:locale" content="en_US" />;
      {/* Twitter Card Tags */};
      <meta name="twitter: card" content={twitterCard} />;
      <meta name="twitter: title" content={fullTitle} />;
      <meta name="twitter: description" content={description} />;
      <meta name="twitter: image" content={imageUrl} />;
      <meta name="twitter: site" content="@ziontechgroup" />;
      <meta name="twitter:creator" content="@ziontechgroup" />;
      {/* Additional Meta Tags */};
      <meta name="theme-color" content="#2563eb" />;
      <meta name="msapplication-TileColor" content="#2563eb" />;
      <meta name="apple-mobile-web-app-capable" content="yes" />;
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />;
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />;
      {/* Favicon */};
      <link rel="icon" href="/favicon.ico" />;
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />;
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />;
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />;
      <link rel="manifest" href="/site.webmanifest" />;
      {/* Preconnect to external domains */};
      <link rel="preconnect" href="https: //fonts.googleapis.com" />;
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />;
      <link rel="preconnect" href="https://www.googletagmanager.com" />;
      {/* Structured Data */};
      <script;
        type="application/ld+json";
        dangerouslySetInnerHTML={{;
          __html: JSON.stringify(mergedStructuredData);
        }};
      />;
      {/* Additional SEO Meta Tags */};
      <meta name="google-site-verification" content="your-google-verification-code" />;
      <meta name="yandex-verification" content="your-yandex-verification-code" />;
      <meta name="bing-site-verification" content="your-bing-verification-code" />;
      {/* Language and Region */};
      <meta name="language" content="English" />;
      <meta name="geo.region" content="US" />;
      <meta name="geo.placename" content="United States" />;
      {/* Mobile App Meta Tags */};
      <meta name="mobile-web-app-capable" content="yes" />;
      <meta name="application-name" content="Zion Tech Group" />;
      {/* Security Headers */};
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />;
      <meta httpEquiv="X-Frame-Options" content="DENY" />;
      <meta httpEquiv="X-XSS-Protection" content="1, mode=block" />;
    </Head>;
  );
};
export default SEOHead;