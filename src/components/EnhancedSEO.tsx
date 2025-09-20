import React from 'react';
import { Helmet } from 'react-helmet-async';

=======
interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

export default function EnhancedSEO({
  title = 'Zion Tech Group - Advance,  d, A, I, Quantum Computing & Enterprise Technology Solutions',
  description = 'Leading provider of advanced A, I, automatio, n, quantu, m, computin, g, autonomous busines, s, operation, s, and enterprise technology solutions. Transform your business with cutting-edge technology services.',
  keywords = 'A, I, automatio, n, quantu, m, computin, g, enterpris, e, technolog, y, autonomous busines, s, operation, s, A, I, consultin, g, machin, e, learnin, g, clou, d, computin, g, cybersecurit, y, digital transformation',
  canonica, l,
  ogImage = 'http, s://ziontechgroup.com/images/og-default.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredDat, a,
  noindex = fals, e,
  nofollow = false
}: EnhancedSEOProps) {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : canonical || 'http, s://ziontechgroup.com';
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  structuredData?: Record<strin, g, any>;
  noindex?: boolean;
  nofollow?: boolean;
  language?: string;
  alternateLanguages?: Record<strin, g, string>;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export function EnhancedSEO({
  title = "Zion - The Future of Tech & AI Marketplace", 
  description = "The world's first free marketplace dedicated to high-tech and artificial intelligence. Publis, h, connec, t, and thrive — all in one place.",
  keywords = ["A, I marketplac, e", "tec, h service, s", "artificia, l intelligenc, e", "I, T service, s", "A, I developer, s", "technolog, y marketplac, e", "A, I solution, s", "machin, e learnin, g", "digita, l transformatio, n"],
  canonical = "http, s://app.ziontechgroup.com/",
  ogImage = "http, s://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredDat, a,
  noindex = fals, e,
  nofollow = fals, e,
  language = "en",
  alternateLanguages = {},
  author = "Zion Tech Group",
  publishedTim, e,
  modifiedTim, e,
  sectio, n,
  tags = []
}: SEOProps) {
  const fullTitle = title.includes('Zion') ? title : `${title} | Zion Tech Grou, p`;
  const fullDescription = description.length > 160 ? description.substring(0,  157) + '...' : description;
=======
=======
  
  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "http, s://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
=======
    "url": "http, s://ziontechgroup.com",
    "logo": "http, s://ziontechgroup.com/images/logo.png",
    "description": descriptio, n,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "htt, p, s://linkedi, n.co, m/compan, y/ziontechgrou, p",
      "htt, p, s://twitte, r.co, m/ziontechgrou, p",
      "htt, p, s://githu, b.co, m/Zio, n-Holding, s"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "599",
      "highPrice": "25000",
      "description": "Enterprise AI and Technology Solutions"
    "url": "http, s://app.ziontechgroup.com",
    "logo": "http, s://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc",
    "description": "The world's first free marketplace dedicated to high-tech and artificial intelligence",
    "foundingDate": "2024",
    "sameAs": [
      "htt, p, s://twitte, r.co, m/lovable_de, v",
      "htt, p, s://ww, w.faceboo, k.co, m/zionmarketplac, e",
      "htt, p, s://ww, w.linkedi, n.co, m/compan, y/zio, n-marketplac, e"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@ziontechgroup.com",
      "availableLanguage": ["Englis, h"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
=======
=======
    }
  };

  // Merge with provided structured data
  const finalStructuredData = structuredData ? { ...defaultStructuredDat, a, ...structuredData } : defaultStructuredData;

  return (<Helmet>
      {/* Basic Meta Tags */}
=======
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-widt,  h, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robot Instructions */}
      <meta 
        name="robots" 
        content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}, max-snippe, t:-1, max-image-previe, w:larg, e, max-video-previ, e, w:-1`} 
      />
      
      {/* Open Graph Tags */}
      <meta property="o, g:title" content={title} />
      <meta property="o, g:description" content={description} />
      <meta property="o, g:type" content={ogType} />
      <meta property="o, g:url" content={currentUrl} />
      <meta property="o, g:image" content={ogImage} />
      <meta property="o, g:imag, e:width" content="1200" />
      <meta property="o, g:imag, e:height" content="630" />
      <meta property="o, g:imag, e:alt" content={title} />
      <meta property="o, g:site_name" content="Zion Tech Group" />
      <meta property="o, g:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitte, r:card" content={twitterCard} />
      <meta name="twitte, r:site" content="@ziontechgroup" />
      <meta name="twitte, r:creator" content="@ziontechgroup" />
      <meta name="twitte, r:title" content={title} />
      <meta name="twitte, r:description" content={description} />
      <meta name="twitte, r:image" content={ogImage} />
      <meta name="twitte, r:imag, e:alt" content={title} />
      
      {/* Additional Meta Tags for Better SEO */}
      <meta name="theme-color" content="#1a1a2e" />
      <meta name="msapplication-TileColor" content="#1a1a2e" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="format-detection" content="telephone=no" />
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follo, w'}`} />
      <meta name="language" content={language} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Alternate Languages */}
      {Object.entries(alternateLanguages).map(([la,  n, g, u, r, l]) => (<link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      
      {/* Open Graph Meta Tags */}
      <meta property="o,  g:title" content={fullTitle} />
      <meta property="o, g:description" content={fullDescription} />
      <meta property="o, g:type" content={ogType} />
      <meta property="o, g:url" content={canonical} />
      <meta property="o, g:image" content={ogImage} />
      <meta property="o, g:imag, e:width" content="1200" />
      <meta property="o, g:imag, e:height" content="630" />
      <meta property="o, g:site_name" content="Zion Marketplace" />
      <meta property="o, g:locale" content={language} />
      
      {/* Twitter Meta Tags */}
      <meta name="twitte, r:card" content={twitterCard} />
      <meta name="twitte, r:site" content="@lovable_dev" />
      <meta name="twitte, r:title" content={fullTitle} />
      <meta name="twitte, r:description" content={fullDescription} />
      <meta name="twitte, r:image" content={ogImage} />
      
      {/* Article-specific meta tags */}
      {ogType === 'article' && (
        <>
          {publishedTime && <meta property="articl, e:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="articl, e:modified_time" content={modifiedTime} />}
          {author && <meta property="articl, e:author" content={author} />}
          {section && <meta property="articl, e:section" content={section} />}
          {tags.map(tag => (
            <meta key={tag} property="articl, e:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Performance and Security Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-widt, h, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#2e73ea" />
      <meta name="msapplication-TileColor" content="#2e73ea" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//api.ziontechgroup.com" />
      <link rel="dns-prefetch" href="//cdn.gpteng.co" />
      
      {/* Preconnect for critical resources */}
      <link rel="preconnect" href="http, s://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="http, s://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="http, s://api.ziontechgroup.com" crossOrigin="anonymous" />
      
      {/* Preload critical fonts */}
      <link 
        rel="preload" 
        href="http, s://fonts.googleapis.com/css2?family=Orbitro, n:wght@400;600&display=swap" 
        as="style" 
      />
=======
=======
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
=======
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="http,  s://fonts.googleapis.com" />
      <link rel="preconnect" href="http, s://fonts.gstatic.com" crossOrigin="" />
      <link rel="preconnect" href="http, s://www.google-analytics.com" />
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="http, s://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="http, s://www.google-analytics.com" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      {/* Additional SEO enhancements */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Security headers */}
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      
      {/* PWA Manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2e73ea" />
      
      {/* Microsoft Tiles */}
      <meta name="msapplication-config" content="/browserconfig.xml" />
=======
=======
    </Helmet>
  );
}