<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'
interface SEOProps { title: string
  description: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  structuredData?: object
  noIndex?: boolean
<<<<<<< HEAD
  noFollow?: boolean}
import React from 'react';
import { Helmet } from 'react-helmet-async";
interface SEOProps {title: string;
=======
  noFollow?: boolean }
import React from 'react';'
import { Helmet } from 'react-helmet-async';
interface SEOProps { title: string;
>>>>>>> origin/main
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noIndex?: boolean;
<<<<<<< HEAD
  noFollow?: boolean}
=======
  noFollow?: boolean; }
}
>>>>>>> origin/main
const EnhancedSEO: React.FC<SEOProps> = ({
  title,
  description,''
  keywords = 'AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions','
  canonicalUrl,''
  ogImage = '/api/placeholder/1200/630',''
  ogType = 'website',''
  twitterCard = 'summary_large_image','
  structuredData,
  noIndex = false,
  noFollow = false
}) => {
<<<<<<< HEAD
  const siteName = 'Zion Tech Group''
  const siteUrl = 'https://ziontechgroup.com''
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl`
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`"`"`
  const defaultStructuredData = {
=======
  const siteName = 'Zion Tech Group'
  const siteUrl = 'https://ziontechgroup.com'
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`
  const defaultStructuredData = { '@context': 'https://schema.org',
  noFollow = false }
}) => { '
  const siteName = 'Zion Tech Group';'
  const siteUrl = 'https://ziontechgroup.com'; }
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;'
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  const defaultStructuredData = { '
>>>>>>> origin/main
    '@context': 'https://schema.org','
  noFollow = false}
}) => {''
  const siteName = 'Zion Tech Group'
  const siteUrl = 'https://ziontechgroup.com'}'
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl';"`"`
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`";`"`
  const defaultStructuredData = {''
    '@context': 'https://schema.org',''
    '@type': 'Organization','
    name: siteName,
<<<<<<< HEAD
    url: siteUrl,}
    logo: `${siteUrl}/logo.png`,'"`"`
    description: 'Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.','
    address: {''
      '@type': 'PostalAddress',''
      addressLocality: 'Middletown',''
      addressRegion: 'DE',''
      addressCountry: 'US'}'
    },
    contactPoint: {''
      '@type': 'ContactPoint',''
      telephone: '+1-302-464-0950',''
      contactType: 'customer service',''
      email: 'kleber@ziontechgroup.com'}'
=======
    url: siteUrl, }
    logo: `${siteUrl}/logo.png`,'
    description: "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
    address: { '
      '@type': 'PostalAddress','
      addressLocality: "Middletown",'
      addressRegion: "DE",'
      addressCountry: "US" }
    },
    contactPoint: { '
      '@type': 'ContactPoint','
      telephone: "+1-302-464-0950",'
      contactType: "customer service",'
      email: "kleber@ziontechgroup.com" }
>>>>>>> origin/main
    },
    sameAs: [''
      'https://www.linkedin.com/company/zion-tech-group',''
      'https://github.com/ziontechgroup',''
      'https://twitter.com/ziontechgroup''
    ]
  }
  const mergedStructuredData = structuredData || defaultStructuredData;
  const mergedStructuredData = structuredData || defaultStructuredData
  return (
    <Helmet>
      { /* Basic Meta Tags */ }
      <title>{title}</title>
<<<<<<< HEAD
      <meta name="description" content={description} />"
      <meta name="keywords" content={keywords} />"
      <link rel="canonical" href={fullCanonicalUrl} />"
      {/* Robots */}''
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} />"`"`
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />"
      <meta property="og:title" content={title} />"
      <meta property="og:description" content={description} />"
      <meta property="og:image" content={fullOgImage} />"
      <meta property="og:url" content={fullCanonicalUrl} />"
      <meta property="og:site_name" content={siteName} />"
      <meta property="og:locale" content="en_US" />"
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />"
      <meta name="twitter:title" content={title} />"
      <meta name="twitter:description" content={description} />"
      <meta name="twitter:image" content={fullOgImage} />"
      <meta name="twitter:site" content="@ziontechgroup" />"
      <meta name="twitter:creator" content="@ziontechgroup" />"
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Zion Tech Group" />"
      <meta name="publisher" content="Zion Tech Group" />"
      <meta name="copyright" content="Zion Tech Group" />"
      <meta name="language" content="en" />"
      <meta name="revisit-after" content="7 days" />"
      <meta name="rating" content="general" />"
      <meta name="distribution" content="global" />"
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />"
      <meta name="theme-color" content="#1e293b" />"
      <meta name="msapplication-TileColor" content="#1e293b" />"
      {/* Performance Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />"
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />"
      <link rel="preconnect" href="https://fonts.googleapis.com" />"
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />"
      {/* Structured Data */}
      <script type="application/ld+json">"
        {JSON.stringify(mergedStructuredData)
=======
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />
      {/* Robots */}'
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} />
      { /* Open Graph */ }
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      { /* Twitter Card */ }
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      { /* Additional SEO Meta Tags */ }
      <meta name="author" content="Zion Tech Group" />
      <meta name="publisher" content="Zion Tech Group" />
      <meta name="copyright" content="Zion Tech Group" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      { /* Mobile Optimization */ }
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#1e293b" />
      <meta name="msapplication-TileColor" content="#1e293b" />
      { /* Performance Hints */ }
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      { /* Structured Data */ }
      <script type="application/ld+json">
        { JSON.stringify(mergedStructuredData) }
>>>>>>> origin/main
      </script>
    </Helmet>
  )
export default EnhancedSEO;
  )
export default EnhancedSEO
<<<<<<< HEAD
}
export default EnhancedSEO';
=======
};
export default EnhancedSEO;'
=======
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  keywords,
  canonical,
<<<<<<< HEAD
  ogImage = '/images/og-image.jpg',
=======
  ogImage = '/api/placeholder/1200/630',
>>>>>>> origin/main
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  nofollow = false
}) => {
<<<<<<< HEAD
  const currentDate = new Date().toISOString();
  
=======
  const robots = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow'
  ].join(', ');
=======
import React from "react";
>>>>>>> origin/main

const EnhancedSEO = () => {
>>>>>>> origin/main
  return (
<<<<<<< HEAD
    <Helmet>
<<<<<<< HEAD
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Canonical URL */}
=======
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
>>>>>>> origin/main
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="robots" content={robots} />
      
<<<<<<< HEAD
      {/* Open Graph Meta Tags */}
=======
      {/* Open Graph */}
>>>>>>> origin/main
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
<<<<<<< HEAD
      <meta property="og:url" content={canonical || window.location.href} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
=======
      {canonical && <meta property="og:url" content={canonical} />}
      
      {/* Twitter */}
>>>>>>> origin/main
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
<<<<<<< HEAD
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
=======
      
      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Zion Tech Group" />
>>>>>>> origin/main
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
<<<<<<< HEAD
          "logo": "https://ziontechgroup.com/images/logo.png",
          "description": "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",
          "foundingDate": "2020",
          "founders": [
            {
              "@type": "Person",
              "name": "Zion Tech Group Founders"
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Tech Street",
            "addressLocality": "Silicon Valley",
            "addressRegion": "CA",
            "postalCode": "94000",
=======
          "logo": "https://ziontechgroup.com/logo.png",
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
>>>>>>> origin/main
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
<<<<<<< HEAD
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "contact@ziontechgroup.com"
          },
          "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup",
            "https://github.com/ziontechgroup"
          ],
          "offers": {
            "@type": "Offer",
            "description": "AI-powered business solutions and IT services",
            "category": "Technology Services"
          }
        })}
      </script>
      
      {/* Page-specific structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": title,
          "description": description,
          "url": canonical || window.location.href,
          "datePublished": currentDate,
          "dateModified": currentDate,
          "publisher": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com"
          }
        })}
      </script>
=======
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
          }
        })}
      </script>
>>>>>>> origin/main
    </Helmet>
  );
};

<<<<<<< HEAD
export default EnhancedSEO;
=======
export default EnhancedSEO;
=======
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">EnhancedSEO</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default EnhancedSEO;
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
