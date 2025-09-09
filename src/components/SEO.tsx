import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  structuredData?: any;
  canonical?: string;
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Leading AI and Technology Solutions',
  description = 'Transform your business with cutting-edge AI and technology solutions from Zion Tech Group.',
  keywords = ['AI', 'artificial intelligence', 'micro SaaS', 'IT services', 'technology', 'innovation'],
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  structuredData,
  canonical,
  noindex = false
}) => {
  const fullImageUrl = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;
  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`;
  const canonicalUrl = canonical || fullUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional SEO */}
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1e293b" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export const HomePageSEO: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of cutting-edge AI solutions, cybersecurity services, and digital transformation expertise",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "areaServed": "Worldwide",
    "serviceType": [
      "AI Development",
      "Cybersecurity",
      "Cloud Computing",
      "Digital Transformation",
      "Micro SaaS Solutions"
    ]
  };

  return (
    <SEO
      title="Zion Tech Group - Leading AI and Technology Solutions"
      description="Transform your business with cutting-edge AI and technology solutions from Zion Tech Group. Specializing in AI development, cybersecurity, and cloud computing."
      keywords={[
        'AI development',
        'artificial intelligence',
        'cybersecurity',
        'cloud computing',
        'micro SaaS',
        'IT services',
        'technology innovation',
        'business automation'
      ]}
      structuredData={structuredData}
    />
  );
};
