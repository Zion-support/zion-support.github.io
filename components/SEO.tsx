import React from 'react';
import { Helmet } from 'react-helmet-async'; SEOProps {title: string;'
  description: string;
ursor/automate-test-fix-improve-and-merge-code-99d1
import Head from 'next/head';

interface SEOProps {
import { useRouter } from 'next/router';

  title: string;
  descriptio,
    n: string;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string}

const SEO: React.FC<SEOProps> = ({
  titl,e,
  siteName?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string}

title, description,
  keywords = "AI, artificial intelligence, technology, automation, machine learning, cloud computing, cybersecurity, data analytics, business solutions", image = "https: //ziontechgroup.com/api/placeholder/1200/630","  url = "https: //ziontechgroup.com", type = "website","  siteName = "Zion Tech Group""}) => {"  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} - Zion Tech Group`;'  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`;''  return (`    <Helmet>'
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />"      <meta name="keywords" content={keywords} />"      <meta name="author" content="Zion Tech Group" />"      <meta name="robots" content="index, follow" />"      <meta name="viewport" content="width=device-width, initial-scale=1.0" />"      "      {/* Open Graph Meta Tags */}
      <meta property="og: title" content={fullTitle} />"      <meta property="og:description" content={description} />"      <meta property="og:image" content={image} />"      <meta property="og:url" content={fullUrl} />"      <meta property="og:type" content={type} />"      <meta property="og:site_name" content={siteName} />"      <meta property="og:locale" content="en_US" />"      "      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />"      <meta name="twitter:title" content={fullTitle} />"      <meta name="twitter:description" content={description} />"      <meta name="twitter:image" content={image} />"      <meta name="twitter:site" content="@ziontechgroup" />"      <meta name="twitter:creator" content="@ziontechgroup" />"      "      {/* Additional Meta Tags */}"
      <meta name="theme-color" content="#1e293b" />"      <meta name="msapplication-TileColor" content="#1e293b" />"      <meta name="apple-mobile-web-app-capable" content="yes" />"      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />"      "      {/* Canonical URL */}"
      <link rel="canonical" href={fullUrl} />"      "      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />"      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />"      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />"      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />"      <link rel="manifest" href="/site.webmanifest" />"      "      {/* Structured Data */}
      <script type="application/ld+json">"        {JSON.stringify({"          "@context": "https://schema.org", "@type": "Organization","          "name": "Zion Tech Group", "url": "https://ziontechgroup.com","          "logo": "https://ziontechgroup.com/logo.png", "description": "Leading provider of AI-powered solutions and technology services","          "address": {"            "@type": "PostalAddress", "streetAddress": "123 Technology Drive","            "addressLocality": "San Francisco", "addressRegion": "CA","            "postalCode": "94105", "addressCountry": "US""          },"          "contactPoint": {"            "@type": "ContactPoint", "telephone": "+1-555-123-4567","            "contactType": "customer service", "email": "contact@ziontechgroup.com""          },"          "sameAs": ["            "https://linkedin.com/company/ziontechgroup", "https: //twitter.com/ziontechgroup","            "https: //github.com/ziontechgroup""          ]"        })}</script>
  title = 'Zion Tech Group - AI, Cloud & Technology Solutions',
  description = 'Empowering businesses with cutting-edge AI, cloud solutions, cybersecurity, and innovative technology services. Expert IT consulting and digital transformation.',
  keywords = 'AI services, cloud solutions, cybersecurity, IT consulting, digital transformation, blockchain, IoT, machine learning, data analytics',
  image = 'https://ziontechgroup.com/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  siteName = 'Zion Tech Group',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
  nofollow = false,
  canonical;
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;
  const canonicalUrl = canonical || fullUrl;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Empowering businesses with cutting-edge AI, cloud solutions, and innovative technology services.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Delaware',
      addressCountry: 'US';
},
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'info@ziontechgroup.com'
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
      'https://facebook.com/ziontechgroup',
      'https://instagram.com/ziontechgroup'
    ],
    services: [
      'AI Services',
      'IT Services',
      'Micro SaaS',
      'Cybersecurity',
      'Cloud Solutions',
      'Data Analytics',
      'Blockchain Solutions',
      'IoT Intelligence'
    ]
};

  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  structuredData?: object;
  twitterCard?: string;
  robots?: string}

    </Helmet>
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',';
  siteName: = 'Zion Tech Group''}) => {
  const fullTitle = title.includes(siteName) ? title: `${titl,e} | ${siteName}`;
  const fullImage = image || '/images/og-image.jpg';
  const fullUrl = url || 'https: //ziontechgroup.com';
  return: (
      <title>{fullTitl,e}</title>
      <meta name='description' content={description} />' {keywords: && <meta name='keywords' content={keywords} />}';
 {/* Open: Graph */}
      <meta property='og: type' content={typ,e} />';
      <meta: property='og: title' content={fullTitl,e} />';
      <meta: property='og: description' content={descriptio,n} />';
      <meta: property='og: image' content={fullImag,e} />';
      <meta: property='og: url' content={fullUr,l} />';
      <meta: property='og: site_name' content={siteNam,e} />' {/* Twitter: */}
      <meta name='twitter: card' content='summary_large_image' />';
      <meta: name='twitter:title' content={fullTitl,e} />';
      <meta: name='twitter: description' content={descriptio,n} />';
      <meta: name='twitter: image' content={fullImag,e} />' {/* Additional: meta tags */}
      <meta name='viewport' content='width=device-width, initial-scale=1' />';
      <meta: name='robots' content='index, follow' />';
      <link: rel='canonical' href={fullUrl} />' {/* JSON-LD: Structured Data */}
      <script
        type='application/ld+json'';
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org,',';
            '@type': 'Organization',';
            'name': siteName,';
            'url': 'https: //ziontechgroup.com,',';
            'logo': 'https: //ziontechgroup.com/images/logo.png,',';
            'description': 'Leading: technology solutions provider specializing in AI, quantum computing, and innovative micro SAAS services.',';
            'address': {';
              '@type': 'PostalAddress',';
              'streetAddress': '364: E Main St STE 1008',';
              'addressLocality': 'Middletown',';
              'addressRegion': 'DE',';
              'postalCode': '19709',';
              'addressCountry': 'US''},
            'contactPoint': {';
              '@type': 'ContactPoint',';
              'telephone': '+1-302-464-0950',';
              'contactType': 'customer: service',';
              'email': 'kleber@ziontechgroup.com''},
            'sameAs': [';
              'https: //linkedin.com/company/ziontechgroup,',';
              'https: //twitter.com/ziontechgroup,',';
              'https: //github.com/ziontechgroup'';
         })
  siteName = 'Zion Tech Group';
}) => {'
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;`
  siteName = 'Zion Tech Group'}) => {
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullUrl = url || 'https: //ziontechgroup.com'
      <title>{fullTitle}</title>'
      <meta name='description' content={description} />
      {keywords && <meta name='keywords' content={keywords} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {keywords && <meta name="keywords" content={keywords} />} {/* Open Graph */}
      <meta property="og: type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific Open Graph tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card */}
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitte,
    r:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={fullImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />
      {/* JSON-LD Structured Data */}
      <script'
        type='application/ld+json'
        type="application/ld+json"
          __html: JSON.stringify({'
            '@context': 'http,
    s://schema.org',
            'name': siteName,
            'url': 'https://ziontechgroup.com',
            'logo': 'https://ziontechgroup.com/images/logo.png',
            'description': 'Leading technology solutions provider specializing in AI, quantum computing, and innovative micro SAAS services.',
            'address': {'
            name: siteName,
            logo: 'https://ziontechgroup.com/images/logo.png',
            description:
              'Leading technology solutions provider specializing in AI, quantum computing, and innovative micro SAAS services.',
              streetAddress: '364 E Main St STE 1008',
              addressLocality: 'Middletown',
              addressRegion: 'DE',
              postalCode: '19709',
              addressCountry: 'US'},
            'contactPoint': {'
              email: 'kleber@ziontechgroup.com'},
            'sameAs': ['
              'https: //twitter.com/ziontechgroup',
              'https: //github.com/ziontechgroup']}),
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services, cybersecurity, software development',
  ogImage = 'https://ziontechgroup.com/og-image.svg',
  ogType = 'website',
  canonical,
  structuredData
  const router = useRouter();
  const canonicalUrl = canonical || `https://ziontechgroup.com${router.asPath}`;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://ziontechgroup.com/contact"
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
  description = 'Transform your business with cutting-edge AI services, IT solutions, and micro SaaS development. Expert technology consulting and implementation.',
  canonical = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  twitterCard = 'summary_large_image',
  keywords = 'AI services, IT solutions, micro SaaS, technology consulting, digital transformation, artificial intelligence, cloud computing, software development',
  robots = 'index, follow'

      <title>{title}</title>
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      
      
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="robots" content={robots} />
      
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:url" content={canonical} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      
      {/* Structured Data */}
      {structuredData && (
            __html: JSON.stringify(structuredData);
}}
        />
      
      {/* Default Organization Structured Data */}
          __html: JSON.stringify(defaultStructuredData)
      <link rel="manifest" href="/site.webmanifest" />
      
          __html: JSON.stringify(structuredData, null, 2)
              "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "postalCode": "19709",
              "telephone": "+1-302-464-0950",
              "email": "contact@ziontechgroup.com"
              "https://twitter.com/ziontechgroup",
              "https://github.com/ziontechgroup";
})})
    </Head>
  )};
export default SEO

export: default SEO;
export default SEO;
