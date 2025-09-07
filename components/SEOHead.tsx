<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  title?: string;
  description?: string;
  keywords?: string;
  canonical_url?: string;
  og_image?: string;
  og_type?: string;
  twitter_card?: string;
  structured_data?: object;
  noindex?: boolean;
  nofollow?: boolean;
}
      <meta name="twitter:title" content={title} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={fullOgImage} />;
      <meta name="twitter:site" content="@ziontechgroup" />;
      <meta name="twitter:creator" content="@ziontechgroup" />;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
import React from 'react';
import Head from 'next / head';
import { use_router } from 'next / router';
interface SEOHeadProps {
=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Technology Solutions'
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology solutions.'
  keywords = 'AI services, IT solutions, micro SaaS, technology consulting, cloud migration, cybersecurity, blockchain, web development'
  canonicalUrl
  ogImage = '/og-image.jpg'
  ogType = 'website'
  twitterCard = 'summary_large_image'
  structuredData
  noindex = false
  nofollow = false
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '')
  const imageUrl = ogImage.startsWith('http') ? ogImage : `https: //zion.app${ogImage}`

  const defaultStructuredData = {
    '@context': 'https://schema.org'
    '@type': 'Organization'
    name: 'Zion Tech Group'
    url: 'https://zion.app'
    logo: 'https://zion.app/logo.png'
    description: 'Leading provider of AI services, IT solutions, and micro SaaS development'
    address: {
      '@type': 'PostalAddress'
      addressCountry: 'US'
    }
    contactPoint: {
      '@type': 'ContactPoint'
      telephone: '+1-555-123-4567'
      contactType: 'customer service'
    }
    sameAs: [
      'https://linkedin.com/company/zion-tech-group'
      'https://twitter.com/ziontechgroup'
    ]
  }

  const mergedStructuredData = structuredData || defaultStructuredData

=======
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
import React from 'react';
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Technology Solutions',
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology solutions.',
  keywords = 'AI services, IT solutions, micro SaaS, technology consulting, cloud migration, cybersecurity, blockchain, web development',
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
export default function SEOHead({
  title = 'Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions',
  description = 'Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions.',
  keywords = 'micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions',
<<<<<<< HEAD

export default function SEOHead({
  title = 'Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions,
  description = Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions.',
  keywords = 'micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions,
=======
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');
  const imageUrl = ogImage.startsWith('http') ? ogImage : `https://zion.app${ogImage}`;

  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
export default function SEOHead({
  title = 'Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions',
  description = 'Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions.',
  keywords = 'micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions',
<<<<<<< HEAD

export default function SEOHead({
  title = 'Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions,
  description = Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions.',
  keywords = 'micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions,
=======
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge
  canonicalUrl,
  ogImage = /og-image.jpg',
  ogType = 'website,
  twitterCard = summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
<<<<<<< HEAD
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '')
  const imageUrl = ogImage.startsWith('http') ? ogImage : `https://zion.app${ogImage}`
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
    name: 'Zion Tech Group',
    url: 'https://zion.app',
    logo: 'https://zion.app/logo.png',
    description: 'Leading provider of AI services, IT solutions, and micro SaaS development',
    address: {
<<<<<<< HEAD
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
=======
      "@type": "PostalAddress",
      addressCountry: 'US',
    },
    contactPoint: {
      "@type": "ContactPoint",
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
    ],
<<<<<<< HEAD
  };

  const mergedStructuredData = structuredData || defaultStructuredData;
=======
  }
  const mergedStructuredData = structuredData || defaultStructuredData
=======
>>>>>>> origin/chore/fix-lint-and-merge
}: SEOHeadProps) {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullDescription = description || 'Leading provider of micro SaaS products, AI services, and IT solutions.';
  const fullKeywords = keywords || 'micro SaaS, AI services, IT solutions, cloud computing, automation';
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
<<<<<<< HEAD
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
      <meta property="og:description" content={description} />
=======
      <meta name=description" content={fullDescription} />
      <meta name="keywords content={fullKeywords} />
      <meta name=viewport" content="width=device-width, initial-scale=1 />
      <meta charSet=utf-8" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical href={canonicalUrl} />}

<<<<<<< HEAD
      {/* Open Graph Tags */}
      <meta property="og: title" content={fullTitle} />
      <meta property="og: description" content={description} />
      <meta property="og: type" content={ogType} />
      <meta property="og: url" content={currentUrl} />
      <meta property="og: image" content={imageUrl} />
      <meta property="og: image:width" content="1200" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      {/* Twitter Card Tags */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <meta name="twitter: card" content={twitterCard} />
      <meta name="twitter: title" content={fullTitle} />
      <meta name="twitter: description" content={description} />
      <meta name="twitter: image" content={imageUrl} />
      <meta name="twitter: site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
=======
      {/* Robots */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
>>>>>>> origin/chore/fix-lint-and-merge
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter */}
      <meta name="twitter:card content={twitterCard} />
      <meta name=twitter:title" content={fullTitle} />
      <meta name="twitter:description content={fullDescription} />
      <meta name=twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="author content=Zion Tech Group" />
      <meta name="theme-color content=#0f172a" />
      <meta name="msapplication-TileColor content=#0f172a" />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<<<<<<< HEAD
      <link rel="manifest" href="/site.webmanifest" />
      {/* Preconnect to external domains */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <link rel="preconnect" href="https: //fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mergedStructuredData)
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
      <meta httpEquiv="X-XSS-Protection" content="1, mode=block" />
    </Head>
  )
}

export default SEOHead
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      {/* Structured Data */}
      <script
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

export default SEOHead;
=======
<<<<<<< HEAD
      <link rel="manifest" href="/site.webmanifest" />
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https: //fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      {/* Structured Data */}
      <script;
        type=application / ld + json";
        dangerouslySetInnerHTML={{
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts && fonts.googleapis.com" />;
      <link rel="preconnect" href="https://fonts && fonts.gstatic.com" crossOrigin="anonymous" />;
      <link rel="preconnect" href="https://images && images.unsplash.com" />;
    </Head>;
  );
          __html: JSON.stringify (structured_data || defaultStructuredData);
          __html: JSON.stringify(mergedStructuredData)
        }}
      />;
      {/* Preconnect to external domains */}
      <link rel="preconnect href=https://fonts.googleapis.com" />;
      <link rel="preconnect href=https://fonts.gstatic.com" cross_origin="anonymous />;
      <link rel=preconnect" href="https://images.unsplash.com" />;
    </Head>);
}
;


<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  title?: string;
  description?: string;
  keywords?: string;
  canonical_url?: string;
  og_image?: string;
  og_type?: string;
  twitter_card?: string;
  structured_data?: object;
  noindex?: boolean;
  nofollow?: boolean;
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const SEOHead: React.FC<SEOHeadProps> = ({;
  title = 'Zion Tech Group - Technology Solutions',;
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology solutions.',;
  keywords = 'AI services, IT solutions, micro SaaS, technology consulting, cloud migration, cybersecurity, blockchain, web development',}
const SEOHead: React.FC<SEOHeadProps> = ({;
  title = 'Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions',;
  description = 'Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions.',;
  keywords = 'micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions',;
  canonicalUrl,;
  ogImage = '/og-image && image.jpg',;
  ogType = 'website',;
  twitterCard = 'summary_large_image',;
  noIndex = false,;
  structuredData;
}) => {;
  const router = useRouter();
  const baseUrl = 'https://ziontechgroup && ziontechgroup.com';
  const fullCanonicalUrl = canonicalUrl || `${baseUrl}${router && router.asPath}`;
  const fullOgImage = ogImage && ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  const defaultStructuredData = {;
    '@context': 'https://schema && schema.org',;
    '@type': 'Organization',;
    name: 'Zion Tech Group',;
    url: 'https://zion && zion.app',;
    logo: 'https://zion && zion.app/logo && logo.png',;
    description: 'Leading provider of AI services, IT solutions, and micro SaaS development',;
    address: {;
      '@type': 'PostalAddress',;
      addressCountry: 'US'    },;
    "contactPoint": {;
      "@type": "ContactPoint",;
      "telephone": "+1 302 464 0950",;
      "contactType": "customer service",;
      "email": "kleber@ziontechgroup && ziontechgroup.com";
    },;
    sameAs: [;
      'https://linkedin && linkedin.com/company/zion-tech-group',;
      'https://twitter && twitter.com/ziontechgroup';
    ]  };
<<<<<<< HEAD
  return (
    <Head>;
      {/* Basic Meta Tags */}
=======


  return (
    <Head>;
      {/* Basic Meta Tags */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <title>{title}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={keywords} />;
      <meta name="viewport" content="width=device-width, initial-scale=1 && 1.0" />;
      <metahttpEquiv="Content-Type" content="text/html charset=utf-8" />;
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />;
<<<<<<< HEAD
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {/* Open Graph Tags */}
=======


      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {/* Open Graph Tags */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <meta property="og:title" content={fullTitle} />;
      <meta property="og:description" content={description} />;
      <meta property="og:type" content={ogType} />;
      <meta property="og:url" content={currentUrl} />;
      <meta property="og:image" content={imageUrl} />;
      <meta property="og:image:width" content="1200" />;
      <meta property="og:image:height" content="630" />;
      <meta property="og:site_name" content="Zion Tech Group" />;
      <meta property="og:locale" content="en_US" />;
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#2563eb" />;
      <meta name="msapplication-TileColor" content="#2563eb" />;
      <meta name="apple-mobile-web-app-capable" content="yes" />;
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />;
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />      ;
      {/* Favicon */}
      <link rel="icon" href="/favicon && favicon.ico" />;
      <link rel="apple-touch-icon" href="/apple-touch-icon && icon.png" />;
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32 && 32x32.png" />;
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16 && 16x16.png" />;
      {/* Open Graph */}
      <meta property="og:title" content={title} />;
      <meta property="og:description" content={description} />;
      <meta property="og:url" content={fullCanonicalUrl} />;
      <meta property="og:type" content={ogType} />;
      <meta property="og:site_name" content="Zion Tech Group" />;
      <meta property="og:locale" content="en_US" />;
      <meta property="og:image" content={fullOgImage} />;
      <meta property="og:image:width" content="1200" />;
      <meta property="og:image:height" content="630" />;
      <meta property="og:image:alt" content={title} />;
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <meta name="twitter:title" content={title} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={fullOgImage} />;
      <meta name="twitter:site" content="@ziontechgroup" />;
      <meta name="twitter:creator" content="@ziontechgroup" />;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      {/* Additional SEO */}
      <meta name="theme-color" content="#1e40af" />;
      <meta name="msapplication-TileColor" content="#1e40af" />;
      <meta name="msapplication-config" content="/browserconfig && browserconfig.xml" />;


<<<<<<< HEAD
      <meta name="theme-color" content="#1e40af" />;
      <meta name="msapplication-TileColor" content="#1e40af" />;
      <meta name="msapplication-config" content="/browserconfig && browserconfig.xml" />;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const SEOHead: React.FC < SEOHeadProps> = ({
  title = 'Zion Tech Group - Technology Solutions',
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting - edge technology solutions.',
  keywords = 'AI services, IT solutions, micro SaaS, technology consulting, cloud migration, cybersecurity, blockchain, web development', }
const SEOHead: React.FC < SEOHeadProps> = ({
  title = 'Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions',
  description = 'Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions.',
  keywords = 'micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions',
  canonical_url,
  og_image = '/og - image.jpg',
  og_type = 'website',
  twitter_card = 'summary_large_image',
  no_index = false,
  structured_data;
}) => {
  const router = use_router ();
  const base_url = 'https://ziontechgroup.com';
  const fullCanonicalUrl = canonical_url || `${base_url}${router.as_path}`;
  const fullOgImage = og_image.starts_with ('http') ? og_image : `${base_url}${og_image}`;
;
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://zion.app',
    logo: 'https://zion.app / logo.png',
    description: 'Leading provider of AI services, IT solutions, and micro SaaS development',
    address: {
      '@type': 'PostalAddress',
      address_country: 'US'    },
    "contact_point": {
      "@type": "ContactPoint",
      "telephone": "+1 302 464 0950",
      "contact_type": "customer service",
      "email": "kleber@ziontechgroup.com";
    },
    same_as: [;
      'https://linkedin.com / company / zion - tech - group',
      'https://twitter.com / ziontechgroup';
    ]  }
;
  return (
    <Head>;
      {/* Basic Meta Tags */}
      <title>{title}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={keywords} />;
      <meta name="viewport" content="width = device - width, initial - scale = 1.0" />;
      <meta http_equiv="Content - Type" content="text / html; charset = utf - 8" />;
      <meta http_equiv="X - UA - Compatible" content="IE = edge" />;
      {/* Canonical URL */}
      {canonical_url && <link rel="canonical" href={canonical_url} />}
      {/* Open Graph Tags */}
      <meta property="og:title" content={full_title} />;
      <meta property="og:description" content={description} />;
      <meta property="og:type" content={og_type} />;
      <meta property="og:url" content={current_url} />;
      <meta property="og:image" content={image_url} />;
      <meta property="og:image:width" content="1200" />;
      <meta property="og:image:height" content="630" />;
      <meta property="og:site_name" content="Zion Tech Group" />;
      <meta property="og:locale" content="en_US" />;
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitter_card} />;
      <meta name="twitter:title" content={full_title} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={image_url} />;
      <meta name="twitter:site" content="@ziontechgroup" />;
      <meta name="twitter:creator" content="@ziontechgroup" />;
      {/* Additional Meta Tags */}
      <meta name="theme - color" content="#2563eb" />;
      <meta name="msapplication - TileColor" content="#2563eb" />;
      <meta name="apple - mobile - web - app - capable" content="yes" />;
      <meta name="apple - mobile - web - app - status - bar - style" content="default" />;
      <meta name="apple - mobile - web - app - title" content="Zion Tech Group" />;
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />;
      <link rel="apple - touch - icon" href="/apple - touch - icon.png" />;
      <link rel="icon" type="image / png" sizes="32x32" href="/favicon - 32x32.png" />;
      <link rel="icon" type="image / png" sizes="16x16" href="/favicon - 16x16.png" />;
      {/* Open Graph */}
      <meta property="og:title" content={title} />;
      <meta property="og:description" content={description} />;
      <meta property="og:url" content={fullCanonicalUrl} />;
      <meta property="og:type" content={og_type} />;
      <meta property="og:site_name" content="Zion Tech Group" />;
      <meta property="og:locale" content="en_US" />;
      <meta property="og:image" content={fullOgImage} />;
      <meta property="og:image:width" content="1200" />;
      <meta property="og:image:height" content="630" />;
      <meta property="og:image:alt" content={title} />;
      {/* Twitter */}
      <meta name="twitter:card" content={twitter_card} />;
      <meta name="twitter:title" content={title} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={fullOgImage} />;
      <meta name="twitter:site" content="@ziontechgroup" />;
      <meta name="twitter:creator" content="@ziontechgroup" />;
      {/* Additional SEO */}
      <meta name="theme - color" content="#1e40af" />;
      <meta name="msapplication - TileColor" content="#1e40af" />;
      <meta name="msapplication - config" content="/browserconfig.xml" />;
<<<<<<< HEAD
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {/* Structured Data */}
      <script;
        type="application / ld + json";
        dangerouslySetInnerHTML={{
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
          __html: JSON.stringify(structuredData |defaultStructuredData)
        }}
      />
=======

          __html: JSON && JSON.stringify(structuredData || defaultStructuredData)
        }}
      />;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts && fonts.googleapis.com" />;
      <link rel="preconnect" href="https://fonts && fonts.gstatic.com" crossOrigin="anonymous" />;
      <link rel="preconnect" href="https://images && images.unsplash.com" />;
    </Head>;
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          __html: JSON.stringify (structured_data || defaultStructuredData);
        }}
      />;
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />;
      <link rel="preconnect" href="https://fonts.gstatic.com" cross_origin="anonymous" />;
      <link rel="preconnect" href="https://images.unsplash.com" />;
    </Head>);
}
;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react';
},
,
const SEOHead: React.FC<SEOHeadProps> = ({,
  title = $2;
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology solutions.',
  keywords = 'AI services, IT solutions, micro SaaS, technology consulting, cloud migration, cybersecurity, blockchain, web development',
  canonicalUrl,
  ogImage = $2;
  ogType = $2;
  twitterCard = $2;
  structuredData,
  noindex = $2;
  nofollow = $2;
  const fullTitle = $2;
  const currentUrl = $2;
  const imageUrl = $2;
,
  const defaultStructuredData = $2;
    '@context': 'http: //schema.org@type': 'Organization',
    nam: 'Zion Tech Group',
    ur: l: 'http: //zion.app',
    log: o: 'http: //zion.app/logo.png',
    descriptio: 'Leading provider of AI services, IT solutions, and micro SaaS development',
    addres: {,
      '@type': 'PostalAddress',
      addressCountr: 'US'
    },
    contactPoin: {,
      '@type': 'ContactPoint',
      telephon: '+1-555-123-4567',
      contactTyp: 'customer service'
    },
    sameA: [,
      'http: //linkedin.com/company/zion-tech-grouphttp: //twitter.com/ziontechgroup'
    ]
  },
,
  const mergedStructuredData = $2;
,
  return (,
    <Head>,
      {/* Basic Meta Tags */},
      <title>{fullTitle}</title>,
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />,
      <meta name="viewport" content="width=device-width, initial-scale = $2;
      <meta httpEquiv="Content-Type" content="text/html, charset = $2;
      <meta httpEquiv = $2;
      {/* Canonical URL */},
      {canonicalUrl && <link rel = $2;
,
      {/* Open Graph Tags */},
      <meta property = $2;
      <meta property = $2;
      <meta property = $2;
      <meta property = $2;
      <meta property = $2;
      <meta property = $2;
      <meta property = $2;
      <meta property = $2;
      <meta property = $2;
      {/* Twitter Card Tags */},
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      {/* Additional Meta Tags */},
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      {/* Favicon */},
      <link rel = $2;
      <link rel = $2;
      <link rel = $2;
      <link rel = $2;
      <link rel = $2;
      {/* Preconnect to external domains */},
      <link rel = $2;
      <link rel = $2;
      <link rel = $2;
      {/* Structured Data */},
      <script,
        type = $2;
        dangerouslySetInnerHTML = $2;
          __htm: l: JSON.stringify(mergedStructuredData)
        }},
      />,
      {/* Additional SEO Meta Tags */},
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      {/* Language and Region */},
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      {/* Mobile App Meta Tags */},
      <meta name = $2;
      <meta name = $2;
      {/* Security Headers */},
      <meta httpEquiv = $2;
      <meta httpEquiv = $2;
      <meta httpEquiv="X-XSS-Protection" content="1, mode = $2;
    </Head>,
  )
},
,
export default SEOHead,
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export default SEOHead
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </Head>
  );
<<<<<<< HEAD
};

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export default SEOHead;
=======
}
<<<<<<< HEAD
=======
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
=======
<<<<<<< HEAD
=======
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
=======

<<<<<<< HEAD
export default SEOHead;
export default SEOHead;
};

export default SEOHead;
}
};

export default SEOHead;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default SEOHead;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
