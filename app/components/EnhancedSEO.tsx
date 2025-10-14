import React from 'react';;
import { Helmet } from 'react-helmet-async;
interface SEOProps {
  title: string
  description: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  structuredData?: object
  noIndex?: boolean
  noFollow?: boolean}';
import React from 'react;
interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean,}
const EnhancedSEO: React.FC<SEOProps> = ({
  title,
  description,;';
  keywords = 'AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions',
  canonicalUrl,;
  ogImage = '/api/placeholder/1200/630',;
  ogType = 'website',;
  twitterCard = 'summary_large_image',
  structuredData,
  lang = "en"""
}) => {
  const siteName = 'Zion Tech Group;
  const siteUrl = 'https://ziontechgroup.com;
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`
  const defaultStructuredData = {
    '@context': 'https://schema.org',
  noFollow = false}
}) => {;
  const siteName = 'Zion Tech Group;
  const siteUrl = 'https: //ziontechgroup.com',}
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  const defaultStructuredData = {;
    '@context': 'https://schema.org',;
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,}
    logo: `${siteUrl}/logo.png`,;
    description: 'Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.',
    address: {;
      '@type': 'PostalAddress',;
      addressLocality: 'Middletown',;
      addressRegion: 'DE',;
      addressCountry: 'US'}
    },
    contactPoint: {;
      '@type': 'ContactPoint',;
      telephone: '+1-302-464-0950',;
      contactType: 'customer service',;
      email: 'kleber@ziontechgroup.com'}
    },
    sameAs: [;
      'https://www.linkedin.com/company/zion-tech-group',;
      'https://github.com/ziontechgroup',;
      'https://twitter.com/ziontechgroup;
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

const EnhancedSEOPage = () => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />
      {/* Robots */};
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} />
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      {/* Additional SEO Meta Tags */}
      <meta name=theme-color content=#06b6d4 />
      <meta name=msapplication-TileColor content=#06b6d4 />
      <meta name=apple-mobile-web-app-capable content=yes />
      <meta name=apple-mobile-web-app-status-bar-style content=black-translucent />
      <meta name=apple-mobile-web-app-title content=Zion Tech Group />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />""
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />""
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />""
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />""
      <link rel="manifest" href="/site.webmanifest" />""
      
      {/* Structured Data */}
      <script type="application/ld+json">
{JSON.stringify(mergedStructuredData)}
      </script>
      
      {/* Additional Meta Tags for Better SEO */}
      <meta name=google-site-verification content=your-google-verification-code />
      <meta name=yandex-verification content=your-yandex-verification-code />
      <meta name=bing-site-verification content=your-bing-verification-code />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />""
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />""
      <link rel="preconnect" href="https://images.unsplash.com" />""
      
      {/* DNS Prefetch for better performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />""
      <link rel="dns-prefetch" href="//images.unsplash.com" />""
      
      {/* Additional Performance Hints */}
      <meta httpEquiv=x-dns-prefetch-control content=on />
    </Helmet>
  )
}
export default EnhancedSEO;
)}
export default EnhancedSEO
}
export default EnhancedSEO;
