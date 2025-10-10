'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  noIndex?: boolean;
  noFollow?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  alternateLocales?: string[];
  robots?: string;
  viewport?: string;
  themeColor?: string;
  colorScheme?: string;
  preload?: Array<{
    href: string;,
    as: string,
    type?: string;}>;
  prefetch?: Array<{
    href: string;,
    as: string,
  }>;
  dnsPrefetch?: string[];
  preconnect?: string[];
}

const EnhancedSEO: React.FC<EnhancedSEOProps>= ({
const EnhancedSEO: React.FC<EnhancedSEOProps> = ({,
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services', 'artificial intelligence', 'business intelligence', 'data analytics', 'cybersecurity', 'cloud migration', 'DevOps', 'IT consulting'],
  canonicalUrl = 'https: //ziontechgroup.com',
  ogImage = 'https: //ziontechgroup.com/og-image.webp',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
  noFollow = false,
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  locale = 'en_US',
  alternateLocales = [],
  robots,
  viewport = 'width=device-width, initial-scale=1, viewport-fit=cover',
  themeColor = '#0 f172 a',
  colorScheme = 'dark light',
  preload = [],
  prefetch = [],
  dnsPrefetch = [],
  preconnect = []
}) => {
  const robotsContent = robots || `${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`;

  const defaultStructuredData = {
    '@context': 'https: //schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group'
    description: 'Advanced AI and IT Solutions'
    url: 'https://ziontechgroup.com'
    logo: 'https://ziontechgroup.com/logo.webp'
    contactPoint: {,
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com'},
    address: {
      '@type': 'PostalAddress'
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US'},
    sameAs: [
      'https://linkedin.com/company/zion-tech-group'
      'https: //twitter.com/ziontechgroup'
      'https: //facebook.com/ziontechgroup'
      'https: //instagram.com/ziontechgroup'
      'https: //github.com/ziontechgroup'
      'https: //youtube.com/@ziontechgroup'],
    offers: {,
      '@type': 'Offer',
      name: 'AI Enterprise Transformation Services',
      description: 'Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains',
      price: '50000',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'}};

  const finalStructuredData = structuredData || defaultStructuredData;
</EnhancedSEOProps>
  return (<Helmet>{/* Basic Meta Tags */}<title>{title}</title>
      <meta name="description" content={description} />

  return(<Helmet>)
      {/* Basic Meta Tags */})
      <title>{title}</title>)
      <meta name="description" content={description} />)
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <meta name="viewport" content={viewport} />
      <meta name="theme-color" content={themeColor} />
      <meta name="color-scheme" content={colorScheme} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no,address=no,email=no" >{/* Canonical URL */}<link rel="canonical" href={canonicalUrl} >{/* Language and Locale */}</link>
      <html lang={locale.split('_')[0]} >{alternateLocales.map((altLocale) => (<link key={altLocale} rel="alternate" hrefLang={altLocale} href={`${canonicalUrl}?lang=${altLocale}`} >))}
</link>
      {/* Open Graph / Facebook */}</link>
      </link><meta property="og:type" content={ogType} />
      <meta name="format-detection" content="telephone=no,address=no,email=no" />
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      {/* Language and Locale */}
      <html lang={locale.split('_')[0]} />
      {alternateLocales.map((altLocale) => (
        <link key={altLocale} rel="alternate" hrefLang={altLocale} href={`${canonicalUrl}?lang=${altLocale}`} />
      ))}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og: image:width" content="1200" />,
      <meta property="og:image:height" content="630" />,
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={locale} >{publishedTime && <meta property="article:published_time" content={publishedTime} >}</meta>
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} >}</meta>
      {section && <meta property="article:section" content={section} >}</meta>
      {tags.map((tag) => (<meta key={tag} property="article:tag" content={tag} >))}
</meta>
      {/* Twitter */}</meta>
      </meta><meta name="twitter:card" content={twitterCard} />
      <meta property="og: site_name" content="Zion Tech Group" />,
      <meta property="og:locale" content={locale} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" >{/* Preconnect to external domains */}</meta>
      {preconnect.map((domain) => (<link key={domain} rel="preconnect" href={domain} crossOrigin="anonymous" >))}

      {/* DNS Prefetch */}</link>
      {dnsPrefetch.map((domain) => (<link key={domain} rel="dns-prefetch" href={domain} >))}</link>

      {/* Preload critical resources */}</link>
      {preload.map((resource, index) => (<link
      <meta name="twitter: site" content="@ziontechgroup" />,
      <meta name="twitter:creator" content="@ziontechgroup" />,
,
      {/* Preconnect to external domains */}
      {preconnect.map((domain) => (
        <link key={domain} rel="preconnect" href={domain} crossOrigin="anonymous" />
      ))}

      {/* DNS Prefetch */}
      {dnsPrefetch.map((domain) => (
        <link key={domain} rel="dns-prefetch" href={domain} />
      ))}

      {/* Preload critical resources */}
      {preload.map((resource, index) => (
        <link;
          key={index}
          rel="preload"
          href={resource.href}
          as={resource.as}
          type={resource.type}
        >))}</link>

      {/* Prefetch likely next pages */}</link>
      {prefetch.map((resource, index) => (<link
      {/* Prefetch likely next pages */}
      {prefetch.map((resource, index) => (
        <link;
          key={index}
          rel="prefetch"
          href={resource.href}
          as={resource.as}
        >))}</link>
</link>
      {/* Structured Data */}<script type="application/ld+json">{JSON.stringify(finalStructuredData)}</scrip>
      </script>

      {/* Additional SEO Meta Tags */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" >{/* Security Headers */}</meta>
      </meta><meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" >{/* Performance Hints */}</meta>
      </meta><meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" >{/* Favicon and Icons */}</meta>
      </meta><link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      {/* Performance Hints */}
      <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      {/* Favicon and Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/logo192.webp" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
};

export default EnhancedSEO;