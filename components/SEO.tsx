<<<<<<< HEAD
import React from 'react';
=======
import Head from 'next/head';
>>>>>>> 14eca1f1070a8f01fa9716aba945c40febbf2397

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image?: string;
  type?: string;
}

<<<<<<< HEAD
const SEO: React.FC<SEOProps></SEOProps> = ({
  title = 'Zion Tech Group - Pioneering the Future of Technology',
  description = 'Leading technology solutions provider specializing in AI, quantum computing, space technology, and innovative business solutions. Transform your business with cutting-edge technology.',
  keywords = ['technology', 'AI', 'quantum computing', 'space technology', 'business solutions', 'innovation'],
  image = 'https://ziontechgroup.com/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Zion Tech Group',
  section,
  tags = [],
  structuredData,
  noindex = false,
  nofollow = false,
}) => {
=======
export default function SEO({ 
  title, 
  description, 
  keywords, 
  url, 
  image = '/og-image.jpg',
  type = 'website'
}: SEOProps) {
>>>>>>> 14eca1f1070a8f01fa9716aba945c40febbf2397
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  
  return (
<<<<<<< HEAD
    <>
      {/* Basic Meta Tags */}
=======
    <Head>
>>>>>>> 14eca1f1070a8f01fa9716aba945c40febbf2397
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={`https://zion.app${url}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://zion.app${url}`} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={`https://zion.app${image}`} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://zion.app${image}`} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="theme-color" content="#4f46e5" />
      
      {/* Structured Data */}
<<<<<<< HEAD
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      
      {/* Default Structured Data if none provided */}
      {!structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
              "description": description,
              "foundingDate": "2020",
              "sameAs": [
                "https://www.linkedin.com/company/zion-tech-group",
                "https://twitter.com/ziontechgroup",
                "https://github.com/Zion-Holdings"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Technology Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI & Machine Learning Solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Quantum Computing Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Space Technology Solutions"
                    }
                  }
                ]
              }
            })
          }}
        />
      )}
    </>
=======
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://zion.app",
            "logo": "https://zion.app/logo.png",
            "description": "AI and technology solutions company",
            "sameAs": [
              "https://twitter.com/ziontechgroup",
              "https://linkedin.com/company/zion-tech-group"
            ]
          })
        }}
      />
    </Head>
>>>>>>> 14eca1f1070a8f01fa9716aba945c40febbf2397
  );
}