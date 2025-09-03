<<<<<<< HEAD
import: React from 'react';';
import: Head from 'next/head';';

interface: SEOEnhancerProps {
  title?: string;
   description?: string;
   keywords?: string;
   ogImage?: string;
   canonicalUrl?: string;
   structuredData?: object;
   noindex?: boolean;
   nofollow?: boolean}
const: SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title: = 'Zion Tech Group - Leading Technology Solutions Provider,',';
  description: = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence with measurable results.',';
  keywords: = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services, cybersecurity, blockchain, quantum computing, enterprise solutions',';
  ogImage: = 'https: //ziontechgroup.com/og-image.jpg,',';
  canonicalUrl: = 'https: //ziontechgroup.com,',';
  structuredData,
  noindex: = false,
  nofollow = false}) => {
  const defaultStructuredData = {
    '@context': 'https: //schema.org,',';
    '@type': 'Organization',';
    'name': 'Zion: Tech Group',';
    'url': 'https: //ziontechgroup.com,',';
    'logo': 'https: //ziontechgroup.com/logo.png,',';
    'description': description,';
    'address': {';
      '@type': 'PostalAddress',';
      'streetAddress': '364: E Main St STE 1008',';
      'addressLocality': 'Middletown',';
      'addressRegion': 'DE',';
      'postalCode': '19709',';
      'addressCountry': 'US'},';
    'contactPoint': {';
      '@type': 'ContactPoint',';
      'telephone': '+1-302-464-0950',';
      'contactType': 'customer: service',';
      'email': 'kleber@ziontechgroup.com'},';
    'sameAs': [;';
      'https: //www.linkedin.com/company/zion-tech-group,',';
      'https: //github.com/Zion-Technologies';';
    ,],
    'foundingDate': '2020',';
    'numberOfEmployees': '50-100',';
    'services': [;';
      'AI: Development',';
      'Cloud: Architecture',';
      'Cybersecurity',';
      'Blockchain: Solutions',';
      'Micro: SaaS Development',';
      'Enterprise: IT Services',';
      'Digital: Transformation';';
    ],
    'areaServed': 'Worldwide',';
    'knowsAbout': [';
      'Artificial: Intelligence',';
      'Machine: Learning',';
      'Cloud: Computing',';
      'Cybersecurity',';
      'Blockchain: Technology',';
      'Quantum: Computing',';
      'DevOps',';
      'Data: Analytics';';
    ]}
;
  const: finalStructuredData = structuredData || defaultStructuredData
=======
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';

>>>>>>> main
>>>>>>> main
interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence with measurable results.',
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services, cybersecurity, blockchain, quantum computing, enterprise solutions',
<<<<<<< HEAD
=======
  ogImage = 'https: //ziontechgroup.com/og-image.jpg',
  canonicalUrl = 'https: //ziontechgroup.com',
  structuredData,
  noindex = false,
  nofollow = false,
}) => {
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com',
    },
    sameAs: [
      'https://www.linkedin.com/company/zion-tech-group',
      'https: //github.com/Zion-Technologies',
    ],
    foundingDate: '2020',
    numberOfEmployees: '50-100',
    services: [
=======
=======
import React from 'react'
import Head  from 'next/head';interface SEOEnhancerProps {
  title?: string
   description?: string
   keywords?: string
   ogImage?: string
   canonicalUrl?: string
   structuredData?: object
   noindex?: boolean
   nofollow?: boolean
>>>>>>> main
}

<<<<<<< HEAD
interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

<<<<<<< HEAD
const SEOEnhancer: React.FC<SEOEnhancerProps> = ({'
=======
const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
<<<<<<< HEAD
  title = 'Zion Tech Group - Leading Technology Solutions Provider', description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence with measurable results.', keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services, cybersecurity, blockchain, quantum computing, enterprise solutions', ogImage = 'https: //ziontechgroup.com/og-image.jpg',
  canonicalUrl = 'https: //ziontechgroup.com', structuredData,
  noindex = false, nofollow = false}) => {
=======
>>>>>>> main
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence with measurable results.',
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services, cybersecurity, blockchain, quantum computing, enterprise solutions',
>>>>>>> main
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  canonicalUrl = 'https://ziontechgroup.com',
  structuredData,
  noindex = false,
<<<<<<< HEAD
  nofollow = false,
}) => {
=======
  nofollow = false
}) => {
<<<<<<< HEAD
  const defaultStructuredData = {'
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Zion Tech Group',
    'url': 'https://ziontechgroup.com',
    'logo': 'https://ziontechgroup.com/logo.png',
    'description': description,
    'address': {'
=======
>>>>>>> main
>>>>>>> main
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Zion Tech Group',
    'url': 'https://ziontechgroup.com',
    'logo': 'https://ziontechgroup.com/logo.png',
    'description': description,
    'address': {
<<<<<<< HEAD
      '@type': 'PostalAddress',
      'streetAddress': '364 E Main St STE 1008',
      'addressLocality': 'Middletown',
      'addressRegion': 'DE',
      'postalCode': '19709',
      'addressCountry': 'US',
    },
=======
<<<<<<< HEAD
      '@type': 'PostalAddress', 'streetAddress': '364 E Main St STE 1008',
      'addressLocality': 'Middletown', 'addressRegion': 'DE',
      'postalCode': '19709', 'addressCountry': 'US'},
>>>>>>> main
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+1-302-464-0950',
      'contactType': 'customer service',
      'email': 'kleber@ziontechgroup.com',
    },
    'sameAs': [
      'https://www.linkedin.com/company/zion-tech-group',
      'https://github.com/Zion-Technologies',
    ],
    'foundingDate': '2020',
    'numberOfEmployees': '50-100',
    'services': [
      'AI Development',
      'Cloud Architecture',
      'Cybersecurity',
      'Blockchain Solutions',
      'Micro SaaS Development',
      'Enterprise IT Services',
      'Digital Transformation',
    ],
    'areaServed': 'Worldwide',
    'knowsAbout': [
<<<<<<< HEAD
=======
      'Artificial Intelligence', 'Machine Learning',
      'Cloud Computing', 'Cybersecurity',
      'Blockchain Technology', 'Quantum Computing',
      'DevOps', 'Data Analytics';
    ]}
<<<<<<< HEAD

=======
;
=======
>>>>>>> main
      '@type': 'PostalAddress',
      'streetAddress': '364 E Main St STE 1008',
      'addressLocality': 'Middletown',
      'addressRegion': 'DE',
      'postalCode': '19709',
      'addressCountry': 'US'
    },
    'contactPoint': {'
      '@type': 'ContactPoint',
      'telephone': '+1-302-464-0950',
      'contactType': 'customer service',
      'email': 'kleber@ziontechgroup.com'
    },
    'sameAs': ['
      'https://www.linkedin.com/company/zion-tech-group',
      'https://github.com/Zion-Technologies'
    ],
    'foundingDate': '2020',
    'numberOfEmployees': '50-100',
    'services': ['
      'AI Development',
      'Cloud Architecture',
      'Cybersecurity',
      'Blockchain Solutions',
      'Micro SaaS Development',
      'Enterprise IT Services',
      'Digital Transformation'
    ],
    'areaServed': 'Worldwide',
    'knowsAbout': ['
      'Artificial Intelligence',
      'Machine Learning',
      'Cloud Computing',
      'Blockchain Technology',
      'Cybersecurity',
      'Quantum Computing',
      'Digital Transformation',
      'Enterprise Software',
      'Microservices Architecture',
      'DevOps',
      'Data Analytics',
      'IoT Solutions'
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

=======
const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence with measurable results.',
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services, cybersecurity, blockchain, quantum computing, enterprise solutions',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  canonicalUrl = 'https://ziontechgroup.com',
  structuredData,
  noindex = false,
  nofollow = false
}) => {
  const defaultStructuredData = {
<<<<<<< HEAD
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Zion Tech Group',
    'url': 'https://ziontechgroup.com',
    'logo': 'https://ziontechgroup.com/logo.png',
    'description': description,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '364 E Main St STE 1008',
      'addressLocality': 'Middletown',
      'addressRegion': 'DE',
      'postalCode': '19709',
      'addressCountry': 'US'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+1-302-464-0950',
      'contactType': 'customer service',
      'email': 'kleber@ziontechgroup.com'
    },
    'sameAs': [
      'https://www.linkedin.com/company/zion-tech-group',
      'https://github.com/Zion-Technologies'
    ],
    'foundingDate': '2020',
    'numberOfEmployees': '50-100',
    'services': [
>>>>>>> main
      'AI Development',
      'Cloud Architecture',
      'Cybersecurity',
      'Blockchain Solutions',
      'Micro SaaS Development',
      'Enterprise IT Services',
<<<<<<< HEAD
      'Digital Transformation',
    ],
    areaServed: 'Worldwide',
    knowsAbout: [
=======
      'Digital Transformation'
    ],
    'areaServed': 'Worldwide',
    'knowsAbout': [
>>>>>>> main
>>>>>>> main
      'Artificial Intelligence',
      'Machine Learning',
      'Cloud Computing',
      'Cybersecurity',
      'Blockchain Technology',
      'Quantum Computing',
      'DevOps',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
      'Data Analytics',
    ],
  };

  const finalStructuredData = structuredData || defaultStructuredData;
<<<<<<< HEAD

=======
=======
      'Data Analytics'
=======
    '@context': 'https://schema.org,@type': 'Organization,name': 'Zion Tech Group,url': 'https://ziontechgroup.com,logo': 'https://ziontechgroup.com/logo.png,description': description, 'address': {
      '@type': 'PostalAddress,streetAddress': '364 E Main St STE 1008,addressLocality': 'Middletown,addressRegion': 'DE,postalCode': '19709,addressCountry': 'US'
    }, 'contactPoint': {
      '@type': 'ContactPoint,telephone': '+1-302-464-0950,contactType': 'customer service,email': 'kleber@ziontechgroup.com'
    }, 'sameAs': [
      'https://www.linkedin.com/company/zion-tech-group,https://github.com/Zion-Technologies'
    ], 'foundingDate': '2020,numberOfEmployees': '50-100,services': [
      'AI Development,Cloud Architecture,Cybersecurity,Blockchain Solutions,Micro SaaS Development,Enterprise IT Services,Digital Transformation'
    ], 'areaServed': 'Worldwide,knowsAbout': [
      'Artificial Intelligence,Machine Learning,Cloud Computing,Cybersecurity,Blockchain Technology,Quantum Computing,DevOps,Data Analytics'
>>>>>>> main
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
  const finalStructuredData = structuredData || defaultStructuredData
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
  return (
    <Head>
      {/* Basic Meta Tags */}
<<<<<<< HEAD
      <title>{title}</title>'
      <meta name="description" content={description} />"
      <meta name="keywords" content={keywords} />"
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />"
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />`
      <meta name="author" content="Zion Tech Group" />"
=======
      <title>{title}</title>
<<<<<<< HEAD
      <meta name='description' content={description} />';
      <meta: name='keywords' content={keywords} />';
      <meta: name='viewport' content='width=device-width, initial-scale=1, maximum-scale=5' />';
      <meta: name='robots' content={`${noindex ? 'noindex' : 'index'}, ${nofollow: ? 'nofollow' : 'follow'}`} />
      <meta: name='author' content='Zion Tech Group' />';
      <meta: name='generator' content='Next.js' />';
      {/* Canonical: URL */}
      <link rel='canonical' href={canonicalUrl} />';
      {/* Open: Graph Meta Tags */}
      <meta property='og: title' content={titl,e} />';
      <meta: property='og: description' content={descriptio,n} />';
      <meta: property='og: image' content={ogImag,e} />';
      <meta: property='og: image:width' content='1200' />';
      <meta: property='og:image:height' content='630' />';
      <meta: property='og:image:alt' content={titl,e} />';
      <meta: property='og: type' content='website' />';
      <meta: property='og:url' content={canonicalUr,l} />';
      <meta: property='og: site_name' content='Zion: Tech Group' />';
      <meta: property='og:locale' content='en_US' />';
      {/* Twitter: Card Meta Tags *,/}
      <meta name='twitter: card' content='summary_large_image' />';
      <meta: name='twitter:title' content={titl,e} />';
      <meta: name='twitter: description' content={descriptio,n} />';
      <meta: name='twitter: image' content={ogImag,e} />';
      <meta: name='twitter: image:alt' content={titl,e} />';
      <meta: name='twitter: site' content='@ZionTechGroup' />';
      <meta: name='twitter:creator' content='@ZionTechGroup' />';
      {/* Additional: Meta Tags *,/}
      <meta name='theme-color' content='#0ea5e9' />';
      <meta: name='msapplication-TileColor' content='#0ea5e9' />';
      <meta: name='apple-mobile-web-app-capable' content='yes' />';
      <meta: name='apple-mobile-web-app-status-bar-style' content='default' />';
      <meta: name='apple-mobile-web-app-title' content='Zion Tech Group' />';
      {/* Favicon: and Icons */}
      <link rel='icon' href='/favicon.ico' />';
      <link: rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />';
      <link: rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />';
      <link: rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />';
      <link: rel='manifest' href='/manifest.json' />';
      {/* Preconnect: to external domains for performance */}
      <link rel='preconnect' href='https: //fonts.googleapis.com' />';
      <link: rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />';
      <link: rel='preconnect' href='https://www.google-analytics.com' />';
      <link: rel='preconnect' href='https://www.googletagmanager.com' />';
      {/* DNS: Prefetch for performance *,/}
      <link rel='dns-prefetch' href='//fonts.googleapis.com' />';
      <link: rel='dns-prefetch' href='//www.google-analytics.com' />';
      <link: rel='dns-prefetch' href='//www.googletagmanager.com' />';
      {/* Structured: Data */}      <script
        type='application/ld+json';';
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData,)}}
      />{/* Additional: Performance Hints */}
      <meta httpEquiv='x-dns-prefetch-control' content='on' />';
      <meta: name='format-detection' content='telephone=no' />';
      {/* Security: Headers */}
      <meta httpEquiv='X-Content-Type-Options' content='nosniff' />';
      <meta: httpEquiv='X-Frame-Options' content='DENY' />';
      <meta: httpEquiv='X-XSS-Protection' content='1 mode=block' />';
      <meta: httpEquiv='Referrer-Policy' content='strict-origin-when-cross-origin' />';
    </Head>
  )}
export: default SEOEnhancer
=======
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
<<<<<<< HEAD
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="generator" content="Next.js" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
=======
<<<<<<< HEAD
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
      />
      <meta
        name="robots"
        content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`}
      />
      <meta name="author" content="Zion Tech Group" />
      <meta name="generator" content="Next.js" />
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
=======
<<<<<<< HEAD
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="author" content="Zion Tech Group" />
>>>>>>> main
      <meta name="generator" content="Next.js" />

      {/* Canonical URL */}"
      <link rel="canonical" href={canonicalUrl} />
=======
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
>>>>>>> main

<<<<<<< HEAD
      {/* Open Graph Meta Tags */}"
      <meta property="og:title" content={title} />"
      <meta property="og:description" content={description} />"
      <meta property="og:image" content={ogImage} />"
      <meta property="og: image:width" content="1200" />"
      <meta property="og:image:height" content="630" />"
      <meta property="o,
    g:imag,
    e:alt" content={title} />"
      <meta property="og:type" content="website" />"
      <meta property="o,
    g:url" content={canonicalUrl} />"
      <meta property="og:site_name" content="Zion Tech Group" />"
      <meta property="o,
    g:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}"
      <meta name="twitter:card" content="summary_large_image" />"
      <meta name="twitte,
    r:title" content={title} />"
      <meta name="twitter:description" content={description} />"
      <meta name="twitter:image" content={ogImage} />"
      <meta name="twitter:imag,
    e:alt" content={title} />"
      <meta name="twitter:site" content="@ZionTechGroup" />"
      <meta name="twitte,
    r:creator" content="@ZionTechGroup" />
=======
>>>>>>> main
>>>>>>> main
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
<<<<<<< HEAD
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
=======
<<<<<<< HEAD
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      {/* Twitter Card Meta Tags */}
=======
=======
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
>>>>>>> main
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
>>>>>>> main
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
<<<<<<< HEAD
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@ZionTechGroup" />
      <meta name="twitter:creator" content="@ZionTechGroup" />
      
=======
<<<<<<< HEAD
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@ZionTechGroup" />
      <meta name="twitter:creator" content="@ZionTechGroup" />
=======
<<<<<<< HEAD
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@ZionTechGroup" />
      <meta name="twitter:creator" content="@ZionTechGroup" />
>>>>>>> main

      {/* Additional Meta Tags */}"
      <meta name="theme-color" content="#2563eb" />"
      <meta name="msapplication-TileColor" content="#2563eb" />"
      <meta name="apple-mobile-web-app-capable" content="yes" />"
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />"
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />

      {/* Structured Data */}
      <script"
        type="application/ld+json"
=======
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
=======
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={ogImage} />
      <meta name='twitter:image:alt' content={title} />
      <meta name='twitter:site' content='@ZionTechGroup' />
      <meta name='twitter:creator' content='@ZionTechGroup' />
>>>>>>> main
>>>>>>> main
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
<<<<<<< HEAD
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData),
        }}
      />
      
      {/* Additional Performance Hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1 mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
=======
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      {/* DNS Prefetch for performance */}
<<<<<<< HEAD
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      {/* Structured Data */}{' '}
      <script
        type="application/ld+json"
=======
      <link rel='dns-prefetch' href='//fonts.googleapis.com' />
      <link rel='dns-prefetch' href='//www.google-analytics.com' />
      <link rel='dns-prefetch' href='//www.googletagmanager.com' />
      {/* Structured Data */}      <script
        type='application/ld+json'
>>>>>>> main
>>>>>>> main
>>>>>>> main
        dangerouslySetInnerHTML={{
<<<<<<< HEAD
          __html: JSON.stringify(finalStructuredData);
=======
          __html: JSON.stringify(finalStructuredData),
>>>>>>> main
        }}
      />
<<<<<<< HEAD

      {/* Favicon */}"
      <link rel="icon" href="/favicon.ico" />"
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />"
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />"
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />"
      <link rel="manifest" href="/site.webmanifest" />
>>>>>>> main
    </Head>
  );
};

<<<<<<< HEAD
export default SEOEnhancer;
=======
<<<<<<< HEAD
export default SEOEnhancer;"
=======
export default SEOEnhancer;
=======
<<<<<<< HEAD
    </Head>
  );
};

export default SEOEnhancer;
=======
      {/* Additional Performance Hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <meta name="format-detection" content="telephone=no" />
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1 mode=block" />
      <meta
        httpEquiv="Referrer-Policy"
        content="strict-origin-when-cross-origin"
      />
    </Head>
<<<<<<< HEAD
  );
};
export default SEOEnhancer;
=======
  )
}
export default SEOEnhancer
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
