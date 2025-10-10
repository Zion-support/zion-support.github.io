import React from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
interface SEOHeadProps {
;
interface SEOHeadProps {;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;}
const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI & IT Solutions',
  description = 'Transform your business with cutting-edge artificial intelligence, cloud infrastructure, and innovative technology solutions. Expert AI and IT consulting services.',
  keywords = 'AI solutions, IT consulting, cloud infrastructure, cybersecurity, automation, machine learning, artificial intelligence, business transformation',
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData;
  const, fullTitle = titl, e.include, s('Zion, Tech Grou, p') ? titl, e : `${titl, e} | Zion, Tech Grou, p`;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Advanced AI and IT Solutions company providing cutting-edge technology services",
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
      "https://www.linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ]
  return (</SEOHeadProps>
    <Helmet/>
      <titl, e>{fullTitl, e}</titl, e>
      <meta, name="descriptio, n" conten, t={descriptio, n} />
      <meta, name="keyword, s" conten, t={keyword, s} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta, property="o, g:titl, e" conten, t={fullTitl, e} />
      <meta, property="o, g:descriptio, n" conten, t={descriptio, n} />
      <meta, property="o, g:typ, e" conten, t={ogTyp, e} />
      <meta, property="o, g:ur, l" conten, t={canonicalUr, l} />
      <meta, property="o, g:imag, e" conten, t={ogImag, e} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      <meta, name="twitte, r:car, d" conten, t={twitterCar, d} />
      <meta, name="twitte, r:titl, e" conten, t={fullTitl, e} />
      <meta, name="twitte, r:descriptio, n" conten, t={descriptio, n} />
      <meta, name="twitte, r:imag, e" conten, t={ogImag, e} />
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
;
const SEOHead: React.FC<SEOHeadProps> = ({;
  title = 'Zion Tech Group - Advanced AI & IT Solutions',;
  description = 'Transform your business with cutting-edge artificial intelligence, cloud infrastructure, and innovative technology solutions. Expert AI and IT consulting services.',;
  keywords = 'AI solutions, IT consulting, cloud infrastructure, cybersecurity, automation, machine learning, artificial intelligence, business transformation',;
  canonical,;
  ogImage = '/og-image.jpg',;
  ogType = 'website',;
  twitterCard = 'summary_large_image',;
  structuredData;}
  const, fullTitle = titl, e.include, s('Zion, Tech Grou, p') ? titl, e : `${titl, e} | Zion, Tech Grou, p`;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');
;
  const defaultStructuredData = {;
    "@context": "https://schema.org",;
    "@type": "Organization",;
    "name": "Zion Tech Group",;
    "url": "https://ziontechgroup.com",;
    "logo": "https://ziontechgroup.com/logo.png",;
    "description": "Advanced AI and IT Solutions company providing cutting-edge technology services",;
    "address": {;
      "@type": "PostalAddress",;
      "streetAddress": "364 E Main St STE 1008",;
      "addressLocality": "Middletown",;
      "addressRegion": "DE",;
      "postalCode": "19709",;
      "addressCountry": "US";}
    "contactPoint": {;
      "@type": "ContactPoint",;
      "telephone": "+1-302-464-0950",;
      "contactType": "customer service",;
      "email": "kleber@ziontechgroup.com";}
    "sameAs": [;
      "https://www.linkedin.com/company/zion-tech-group",;
      "https://twitter.com/ziontechgroup";
    ];
;</SEOHeadProps>
  return (;</SEOHeadProps>
    <Helmet>;</Helmet>
      <titl, e>{fullTitl, e}</titl, e>;
      <meta, name="descriptio, n" conten, t={descriptio, n} />;
      <meta, name="keyword, s" conten, t={keyword, s} />;
      <meta name="author" content="Zion Tech Group" />;
      <meta name="robots" content="index, follow" />;
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />;
;
      <meta, property="o, g:titl, e" conten, t={fullTitl, e} />;
      <meta, property="o, g:descriptio, n" conten, t={descriptio, n} />;
      <meta, property="o, g:typ, e" conten, t={ogTyp, e} />;
      <meta, property="o, g:ur, l" conten, t={canonicalUr, l} />;
      <meta, property="o, g:imag, e" conten, t={ogImag, e} />;
      <meta property="og:site_name" content="Zion Tech Group" />;
      <meta property="og:locale" content="en_US" />;
      <meta, name="twitte, r:car, d" conten, t={twitterCar, d} />;
      <meta, name="twitte, r:titl, e" conten, t={fullTitl, e} />;
      <meta, name="twitte, r:descriptio, n" conten, t={descriptio, n} />;
      <meta, name="twitte, r:imag, e" conten, t={ogImag, e} />;
      <meta name="theme-color" content="#0f172a" />;
      <meta name="msapplication-TileColor" content="#0f172a" />;
      <meta name="apple-mobile-web-app-capable" content="yes" />;
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />;
      <script type="application/ld+json">;</script>
  );
export default SEOHead;
;
export default SEOHead;
