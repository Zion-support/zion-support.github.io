noFollow?: boolean }
import React from 'react';';
import { Helmet } from 'react-helmet-async';
interface SEOProps { title: string;

  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noIndex?: boolean;

  noFollow?: boolean; }
}
;
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
  noFollow = false)
}) => {;
const siteName = 'Zion Tech Group';
const siteUrl = 'https://ziontechgroup.com';
const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
const defaultStructuredData = { '@context': 'https://schema.org',
  noFollow = false }
}) => { ';
const siteName = 'Zion Tech Group';';
const siteUrl = 'https://ziontechgroup.com'; }
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;';
const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  const defaultStructuredData = { '

    '@context': 'https://schema.org','
  noFollow = false}
}) => {'';
const siteName = 'Zion Tech Group';
const siteUrl = 'https://ziontechgroup.com'}';
const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl';"`"`";
const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`";`"`;
const defaultStructuredData = {''
    '@context': 'https://schema.org',''
    '@type': 'Organization','
    name: siteName,

    url: siteUrl, }
    logo: `${siteUrl}/logo.png`,'"
    description: "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
    address: { '
      '@type': 'PostalAddress','"
      addressLocality: "Middletown",'"
      addressRegion: "DE",'"
      addressCountry: "US" }
    },
    contactPoint: { '
      '@type': 'ContactPoint','"
      telephone: "+1-302-464-0950",'"
      contactType: "customer service",'"
      email: "kleber@ziontechgroup.com" }

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
    <Helmet></Helmet>
      { /* Basic Meta Tags */ }
      <title>{title}</title>
"
      <meta name="description" content={description} />"
      <meta name="keywords" content={keywords} />"
      <link rel="canonical" href={fullCanonicalUrl} />
      {/* Robots */}'"
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} />
      { /* Open Graph */ }"
      <meta property="og:type" content={ogType} />"
      <meta property="og:title" content={title} />"
      <meta property="og:description" content={description} />"
      <meta property="og:image" content={fullOgImage} />"
      <meta property="og:url" content={fullCanonicalUrl} />"
      <meta property="og:site_name" content={siteName} />"
      <meta property="og:locale" content="en_US" />
      { /* Twitter Card */ }"
      <meta name="twitter:card" content={twitterCard} />"
      <meta name="twitter:title" content={title} />"
      <meta name="twitter:description" content={description} />"
      <meta name="twitter:image" content={fullOgImage} />"
      <meta name="twitter:site" content="@ziontechgroup" />"
      <meta name="twitter:creator" content="@ziontechgroup" />
      { /* Additional SEO Meta Tags */ }"
      <meta name="author" content="Zion Tech Group" />"
      <meta name="publisher" content="Zion Tech Group" />"
      <meta name="copyright" content="Zion Tech Group" />"
      <meta name="language" content="en" />"
      <meta name="revisit-after" content="7 days" />"
      <meta name="rating" content="general" />"
      <meta name="distribution" content="global" />
      { /* Mobile Optimization */ }"
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />"
      <meta name="theme-color" content="#1e293b" />"
      <meta name="msapplication-TileColor" content="#1e293b" />
      { /* Performance Hints */ }"
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />"
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />"
      <link rel="preconnect" href="https://fonts.googleapis.com" />"
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      { /* Structured Data */ }"
      <script type="application/ld+json">)
        { JSON.stringify(mergedStructuredData) }

      </script>
    </Helmet>
  );
export default EnhancedSEO;
  );
export default EnhancedSEO

};
export default EnhancedSEO;'
=======
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
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  nofollow = false
}) => {
  const currentDate = new Date().toISOString();
  

const EnhancedSEO = () => {
>>>>>>> origin/main
  return (
    <Helmet>
<<<<<<< HEAD
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="robots" content={robots} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical || window.location.href} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
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
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
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
    </Helmet>
  );
};

export default EnhancedSEO;
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
