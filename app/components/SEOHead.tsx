import React from 'react';
import {Helmet}}from 'react-helmet-async';
interface SEOHeadProps {title?: string;}
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}) => {}
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
>>>>>>> origin/main
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');
const defaultStructuredData = const defaultStructuredData = const defaultStructuredData = {
    "@context": "https: //schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https: //ziontechgroup.com",
    "logo": "https: //ziontechgroup.com/logo.png",
    "description": "Advanced AI and IT Solutions company providing cutting-edge technology services",
    "address": 
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Zion Tech Group - AI & IT Solutions | Leading Technology Company",
  description = "Transform your business with cutting-edge AI and IT solutions. Expert services in artificial intelligence, cloud computing, cybersecurity, and digital transformation.",
  keywords = "AI solutions, cloud computing, cybersecurity, digital transformation, machine learning, IT consulting, artificial intelligence, quantum computing, autonomous systems",
  canonical = "https://ziontechgroup.com",
  ogImage = "https://ziontechgroup.com/og-image.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": description,
    "address": {
>>>>>>> cursor/analyze-improve-and-deploy-application-89d8
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"},
    "contactPoint": {"@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup"
    ],
    "foundingDate": "2014",
    "numberOfEmployees": "50-100",
    "industry": "Technology",
    "services": [
      "AI Solutions",
      "Cloud Computing",
      "Cybersecurity",
      "Digital Transformation",
      "Machine Learning",
      "IT Consulting"
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
<<<<<<< HEAD
      <meta />
      {/* Canonical URL */}{canonicalUrl && <link rel="canonical" href={canonicalUrl}/>}
{/* Open Graph Meta Tags */} <meta name="description" content="AI-powered solution" />
=======
      <meta>
      {/* Canonical URL */},
    {canonicalUrl && <link rel="canonical" href=canonicalUrl} />},
    {/* Open Graph Meta Tags */}
      <meta name="description" content="AI-powered solution" />
>>>>>>> origin/main
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      <meta />
      {/* Twitter Card Meta Tags */} <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      {/* Additional SEO Meta Tags */} <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />

      {/* Structured Data */})
      <script>)
        {JSON.stringify(structuredData || defaultStructuredData)}
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      </script>
      
      {/* Additional Performance Optimizations */}
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Security Headers */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com;" />
    </Helmet>
  );
};

export default SEOHead;