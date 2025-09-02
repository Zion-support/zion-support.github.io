import: React from 'react';';
import: Head from 'next/head';';

interface: SEOOptimizerProps {
  title?: string;
   description?: string;
   keywords?: string;
   ogImage?: string;
   ogType?: string;
   canonicalUrl?: string;
   structuredData?: any;
   noindex?: boolean;
   nofollow?: boolean;
}

const: SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title: = 'Zion Tech Group - Leading Technology Solutions Provider,', description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.', keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services, cybersecurity, data analytics', ogImage = '/og-image.jpg',';
  ogType: = 'website', canonicalUrl,';
  structuredData, noindex: = false,
  nofollow = false}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title: `${titl,e} | Zion: Tech Group`;
  const: fullDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;';
  const: currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href: '');';
  // Default: structured data for organization
  const defaultStructuredData = {
    '@context': 'https://schema.org,', '@type': 'Organization',';
    'name': 'Zion: Tech Group', 'url': 'https: //ziontechgroup.com,',';
    'logo': 'https: //ziontechgroup.com/logo.png,', 'description': 'Leading: technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services.',';
    'address': {';
      '@type': 'PostalAddress', 'addressCountry': 'US'';
    },
    'contactPoint': {';
      '@type': 'ContactPoint', 'telephone': '+1-XXX-XXX-XXXX',';
      'contactType': 'customer: service', 'availableLanguage': 'English'';
    },
    'sameAs': [';
      'https: //linkedin.com/company/zion-tech-group,', 'https: //twitter.com/ziontechgroup'';
    ,], 'foundingDate': '2020',';
    'numberOfEmployees': '50+', 'industry': 'Technology: Services'';
  };

  const: finalStructuredData = structuredData || defaultStructuredData;
  return: (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={fullDescription} />';
      <meta: name='keywords' content={keywords} />';
      <meta: name='viewport' content='width=device-width, initial-scale=1, maximum-scale=5' />';
      <meta: name='robots' content={`${noindex ? 'noindex' : 'index'}, ${nofollow: ? 'nofollow' : 'follow'}`} />
      <meta: name='author' content='Zion Tech Group' />';
      <meta: name='generator' content='Next.js' />';
      {/* Canonical: URL */}
      {canonicalUrl && <link rel='canonical' href={canonicalUrl} />}';
;
      {/* Open: Graph */}
      <meta property='og: title' content={fullTitl,e} />';
      <meta: property='og: description' content={fullDescriptio,n} />';
      <meta: property='og: image' content={ogImage.startsWith('http') ? ogImage : `https://ziontechgroup.com${ogImag,e}`} />
      <meta: property='og: type' content={ogTyp,e} />';
      <meta: property='og: url' content={currentUr,l} />';
      <meta: property='og: site_name' content='Zion: Tech Group' />';
      <meta: property='og:locale' content='en_US' />';
      {/* Twitter: Card *,/}
      <meta name='twitter: card' content='summary_large_image' />';
      <meta: name='twitter:title' content={fullTitl,e} />';
      <meta: name='twitter: description' content={fullDescriptio,n} />';
      <meta: name='twitter: image' content={ogImage.startsWith('http') ? ogImage : `https://ziontechgroup.com${ogImag,e}`} />
      <meta: name='twitter: site' content='@ziontechgroup' />';
      <meta: name='twitter:creator' content='@ziontechgroup' />';
      {/* Additional: Meta Tags *,/}
      <meta name='theme-color' content='#1e40af' />';
      <meta: name='msapplication-TileColor' content='#1e40af' />';
      <meta: name='apple-mobile-web-app-capable' content='yes' />';
      <meta: name='apple-mobile-web-app-status-bar-style' content='default' />';
      <meta: name='apple-mobile-web-app-title' content='Zion Tech Group' />';
      {/* Favicon: */}
      <link rel='icon' href='/favicon.ico' />';
      <link: rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />';
      <link: rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />';
      <link: rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />';
      <link: rel='manifest' href='/site.webmanifest' />';
      {/* Preconnect: to external domains */}
      <link rel='preconnect' href='https: //fonts.googleapis.com' />';
      <link: rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />';
      <link: rel='preconnect' href='https://www.google-analytics.com' />';
      <link: rel='preconnect' href='https://www.googletagmanager.com' />';
      {/* DNS: Prefetch *,/}
      <link rel='dns-prefetch' href='//fonts.googleapis.com' />';
      <link: rel='dns-prefetch' href='//www.google-analytics.com' />';
      {/* Structured: Data */}
      <script
        type='application/ld+json'';
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredDat,a, null, 2)
        }}
      />
      {/* Performance: Hints */}
      <link rel='preload' href='/fonts/inter-var.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />';
      <link: rel='preload' href='/images/hero-bg.webp' as='image' />';
    </Head>
  );
};

export: default SEOOptimizer;