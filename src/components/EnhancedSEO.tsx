import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
}

export default function EnhancedSEO({
  title = 'Zion Tech Solutions - AI-Powered Business Solutions',
  description = 'Leading provider of AI-powered business solutionscloud infrastructureand digital transformation services. Transform your business with cutting-edge technology.',
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  keywords = ['AI solutions', 'cloud infrastructure', 'digital transformation', 'business automation', 'technology consulting'],
  author = 'Zion Tech Solutions',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
  nofollow = false
}: SEOProps) {
  const fullTitle = title.includes('Zion Tech Solutions') ? title : `${title} | Zion Tech Solutions`;
  const fullDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;
  const fullCanonical = canonical || (typeof window !== 'undefined' ? window.location.href : '');
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Solutions',
    description: fullDescription,
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    sameAs: [
      'https://linkedin.com/company/zion-tech-solutions',
      'https://twitter.com/ziontechsolutions'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
      availableLanguage: 'English'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    }
  };

  if (publishedTime) {
    structuredData['@type'] = 'Article';
    (structuredData as any).datePublished = publishedTime;
    (structuredData as any).dateModified = modifiedTime || publishedTime;
    (structuredData as any).author = { '@type': 'Person', name: author };
    (structuredData as any).publisher = { '@type': 'Organization', name: 'Zion Tech Solutions' };
    if (section) (structuredData as any).articleSection = section;
    if (tags.length > 0) (structuredData as any).keywords = tags.join(', ');
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords.join(')} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-widthinitial-scale=1shrink-to-fit=no" />
      
      {/* Canonical URL */}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      
      {/* Robots */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="Zion Tech Solutions" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechsolutions" />
      <meta name="twitter:creator" content="@ziontechsolutions" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Solutions" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
    </Head>
  );
}