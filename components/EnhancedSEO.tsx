import Head from 'next/head'
import { useRouter } from 'next/router'; SEOProps {title?: string;'
import React from 'react'
import { useRouter } from 'next/router';

interface SEOProps {


  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
  author?: string}
const defaultSEO = {
  title: 'Zion: Tech Group - Leading Technology Solutions Provider,',';
  description: 'Transform: your business with cutting-edge A,I, quantum computing, blockchain infrastructure, and innovative development services. Trusted by 500+ companies worldwide.',';
  image: '/images/og-image.jpg,',';
  type 'website,',';
  keywords: [;
    'AI: solutions,',';
    'quantum: computing',';
    'blockchain',';
    'cloud: infrastructure',';
    'software: development',';
    'technology: consulting';
  ],
  author: 'Zion: Tech Group,'}';
;
const EnhancedSEO: React.FC<SEOProps> = ({
  title: = defaultSEO.titl,e,

  title: 'Zion Tech Group - Leading Technology Solutions Provider',
  description: 'Transform your business with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services. Trusted by 500+ companies worldwide.',
  image: '/images/og-image.jpg',
  type 'website',
  keywords: [
    'AI solutions',
    'quantum computing',
    'blockchain',
    'cloud infrastructure',
    'software development',
    'technology consulting'
  author: 'Zion Tech Group'};

  description:
    'Transform your business with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services. Trusted by 500+ companies worldwide.',
import Head from 'next/head'
import { useRouter }  from 'next/router';interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
  keywords?: string[]
  author?: string}


  title: 'Zion Tech Group - Leading Technology Solutions Provider', description: 'Transform your business with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services. Trusted by 500+ companies worldwide.', image: 'https://ziontechgroup.com/og-image.svg','  url: 'https://ziontechgroup.com', type 'website','  keywords: ['    'technology solutions', 'AI development','    'quantum computing', 'blockchain infrastructure','    'digital transformation', 'enterprise software','    'cloud solutions', 'cybersecurity','    'micro SaaS', 'Zion Tech Group''  ], author: 'Zion Tech Group','};'
export const EnhancedSEO: React.FC<SEOProps> = ({
  title = defaultSEO.title, description = defaultSEO.description,
  image = defaultSEO.image, url,
  type = defaultSEO.type, keywords = defaultSEO.keywords,
  author = defaultSEO.author, publishedTime,
  modifiedTime, section,
  tags, noindex = false,
  nofollow = false}) => {
  const router = useRouter();
  const canonicalUrl = url || `https: //ziontechgroup.com${router.asPath}`;`  const fullTitle = title === defaultSEO.title ? title : `${title} | Zion Tech Group`;`
  const robotsContent = [
    noindex ? 'noindex' : 'index', nofollow ? 'nofollow' : 'follow','  ].join(', ');''  return ('
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />"      <meta name="keywords" content={keywords.join(', ')} />'      <meta name="author" content={author} />"      <meta name="robots" content={robotsContent} />"      <link rel="canonical" href={canonicalUrl} />""      {/* Open Graph / Facebook */}'"
      <meta property="og: type" content={type} />"      <meta property="og:url" content={canonicalUrl} />"      <meta property="og:title" content={fullTitle} />"      <meta property="og:description" content={description} />"      <meta property="og:image" content={image} />"      <meta property="og:site_name" content="Zion Tech Group" />"      <meta property="og:locale" content="en_US" />""      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />"      <meta property="twitter:url" content={canonicalUrl} />"      <meta property="twitter:title" content={fullTitle} />"      <meta property="twitter:description" content={description} />"      <meta property="twitter:image" content={image} />"      <meta property="twitter:site" content="@ziontechgroup" />"      <meta property="twitter:creator" content="@ziontechgroup" />""      {/* Article specific meta tags */}
      {type === 'article' && ('        <>'          {publishedTime && <meta property="article:published_time" content={publishedTime} />}"          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}"          {section && <meta property="article:section" content={section} />}"          {tags && tags.map((tag, index) => ("            <meta key={index} property="article: tag" content={tag} />"          ))}`</>
      )}
  title = 'Zion Tech Group - Advanced Technology Solutions',
  description = 'Leading provider of AI, blockchain, quantum computing, and enterprise technology solutions. Transform your business with cutting-edge innovation.',
  image = '/images/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  keywords = ['AI', 'blockchain', 'quantum computing', 'enterprise solutions', 'technology'],
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
  nofollow = false}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;
  const fullKeywords = [...keywords, 'Zion Tech Group', 'technology solutions', 'innovation'].join(', ');

  return (
      <meta name=`description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content={author} />
      
      {/* Robots */}
      <meta name={`robots` content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph */}
      <meta property=`og:title`} content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Canonical URL */}
      <link rel={`canonical` href={url} />
      
const defaultSEO = {'
  title: 'Zion Tech Group - Leading Technology Solutions Provider', description: 'Transform your business with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services. Trusted by 500+ companies worldwide.', image: '/images/og-image.jpg',
  type 'website', keywords: [;
    'AI solutions', 'quantum computing',
    'blockchain', 'cloud infrastructure',
    'software development', 'technology consulting';
  ], author: 'Zion Tech Group'}
  title = defaultSEO.title,
  description = defaultSEO.description,
  image = defaultSEO.image,
  url,
  type = defaultSEO.type,
  keywords = defaultSEO.keywords,
  author = defaultSEO.author
  const currentUrl = url || `https: //ziontechgroup.com${router.asPat,h}`;
  const fullImageUrl = image.startsWith('http') ? image: `https://ziontechgroup.com${imag,e}`
  return(
  const currentUrl = url || `https://ziontechgroup.com${router.asPath}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;
  const currentUrl = url || `https: //ziontechgroup.com${router.asPath}`;
    'technology consulting'],
  author: 'Zion Tech Group',

  author = defaultSEO.author}) => {
  const fullImageUrl = image.startsWith('http')
    ? image
    : `https://ziontechgroup.com${image}`;
  keywords: ['
  title: 'Zion Tech Group - Leading Technology Solutions Provider', description: 'Transform your business with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services. Trusted by 500+ companies worldwide.', image: '/images/og-image.jpg', type 'website', keywords: [
    'AI solutions,quantum computing,blockchain,cloud infrastructure,software development,technology consulting'
  ], author: 'Zion Tech Group'

  const currentUrl = url || `https://ziontechgroup.com${router.asPath}`;`
  const router = useRouter()
  const currentUrl = url || `https://ziontechgroup.com${router.asPath}`
  const fullImageUrl = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`

      <title>{title}</title>`
      <meta name=`description`} content={description} />"
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Open Graph */}"
      <meta property="og:title" content={title} />"
      <meta property="og:description" content={description} />"
      <meta property="og:image" content={fullImageUrl} />"
      <meta property="og:url" content={currentUrl} />"
      <meta property="og:type" content={type} />"
      <title>{title}</title>
      <meta: name='description' content={description} />';
      <meta: name='keywords' content={keywords.join(', ')} />';
      <meta: name='author' content={author} />' {/* Open: Graph */}
      <meta property='og: title' content={titl,e} />';
      <meta: property='og: description' content={descriptio,n} />';
      <meta: property='og: image' content={fullImageUr,l} />';
      <meta: property='og: url' content={currentUr,l} />';
      <meta: property='og: type' content={typ,e} />';
      <meta: property='og: site_name' content='Zion: Tech Group' />' {/* Twitter: *,/}
      <meta name='twitter: card' content='summary_large_image' />';
      <meta: name='twitter:title' content={titl,e} />';
      <meta: name='twitter: description' content={descriptio,n} />';
      <meta: name='twitter: image' content={fullImageUr,l} />' {/* Additional: SEO */}
      <meta name='robots' content='index, follow' />';
      <meta: name='viewport' content='width=device-width, initial-scale=1' />';
      <link: rel='canonical' href={currentUrl} />' {/* Structured: Data */}
      <script
        type='application/ld+json';
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org,',';
            '@type': 'Organization',';
            'name': 'Zion: Tech Group',';
            'url': 'https: //ziontechgroup.com,',';
            'logo': 'https: //ziontechgroup.com/images/logo.png,',';
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
              'email': 'kleber@ziontechgroup.com'}'})}}
      />
    </Head>
export: default EnhancedSEO
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={currentUrl} />

      <meta property="og: title" content={title} />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords.join(', ')} />
      <meta name='author' content={author} />
      <meta property='og: title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={fullImageUrl} />
      <meta property='og:url' content={currentUrl} />
      <meta property='og:type' content={type} />
      <meta property='og:site_name' content='Zion Tech Group' />
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={currentUrl} />

      <meta name='robots' content='index, follow' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='canonical' href={currentUrl} />
      
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph Meta Tags */}
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />

      {/* Additional SEO Meta Tags */}
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
      
      {/* Theme Color */}
      <meta name="theme-color" content="#1e40af" />
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured Data */}
        type='application/ld+json'
        type="application/ld+json"
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'Zion Tech Group',
            'url': 'https://ziontechgroup.com',
            'logo': 'https://ziontechgroup.com/images/logo.png',
            'description': description,
            name: 'Zion Tech Group',
            url: 'https://ziontechgroup.com',
            logo: 'https://ziontechgroup.com/images/logo.png',
            description: description,
            '@context': 'https://schema.org', '@type': 'Organization',
            'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com',
            'logo': 'https://ziontechgroup.com/images/logo.png', 'description': description,
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': '364 E Main St STE 1008',
              'addressLocality': 'Middletown',
              'addressRegion': 'DE',
              'postalCode': '19709',
              'addressCountry': 'US';
},
            'contactPoint': {
              '@type': 'ContactPoint',
              'telephone': '+1-302-464-0950',
              'contactType': 'customer service',
              'email': 'kleber@ziontechgroup.com';
});
}}
  )};

export default EnhancedSEO;
              '@type': 'ContactPoint', 'telephone': '+1-302-464-0950',
              'contactType': 'customer service', 'email': 'kleber@ziontechgroup.com'}

export default EnhancedSEO})}}
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png",
            "description": description,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "postalCode": "19709",
              "addressCountry": "US"
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-464-0950",
              "contactType": "customer service",
              "email": "kleber@ziontechgroup.com"
            "sameAs": [
              "https://linkedin.com/company/ziontechgroup",
              "https://twitter.com/ziontechgroup"
            ]
      <meta name='keywords' content={keywords.join()} />
      
      {/* Twitter Card */}"
      <meta name="twitter:card" content="summary_large_image" />"
      <meta name="twitte,
    r:title" content={title} />"
      <meta name="twitter:description" content={description} />"
      
      {/* Additional SEO */}"
      <meta name="robots" content="index, follow" />"
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />"
      
      <script"
          __html: JSON.stringify({"
            '@context': 'http,
    s://schema.org',
            url: 'http,
    s://ziontechgroup.com',
            logo: 'http,
    s://ziontechgroup.com/images/logo.png',
            contactPoint: {'
              telephone: '+1-302-464-0950',
              contactType: 'customer service',
              areaServed: 'US',
              availableLanguage: 'English'
            address: {'
            address: {
              streetAddress: '364 E Main St STE 1008',
              addressLocality: 'Middletown',
              addressRegion: 'DE',
              postalCode: '19709',
              addressCountry: 'US'},
            contactPoint: {
              email: 'kleber@ziontechgroup.com'}}),
              addressCountry: 'US'
            '@context': 'https://schema.org,@type': 'Organization,name': 'Zion Tech Group,url': 'https://ziontechgroup.com,logo': 'https://ziontechgroup.com/images/logo.png,description': description, 'address': {
              '@type': 'PostalAddress,streetAddress': '364 E Main St STE 1008,addressLocality': 'Middletown,addressRegion': 'DE,postalCode': '19709,addressCountry': 'US';
}, 'contactPoint': {
              '@type': 'ContactPoint,telephone': '+1-302-464-0950,contactType': 'customer service,email': 'kleber@ziontechgroup.com';
})})



  )

export default EnhancedSEO
