'use client'
import React from 'react'
import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI & IT Solutions | 300% ROI Guaranteed',
  description = 'Transform your business with cutting-edge AI and IT solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains. Leading provider of AI automation, cloud infrastructure, and cybersecurity.',
  keywords = 'AI solutions, artificial intelligence, IT services, cloud computing, cybersecurity, data analytics, digital transformation, machine learning, automation, enterprise AI, AI consulting, cloud migration, AI chatbots, predictive analytics, business intelligence',
  canonical,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image'
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : 'https://ziontechgroup.com')

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="theme-color" content="#0f172a" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "description": description,
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png",
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "industry": "Information Technology",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "postalCode": "19709",
              "addressCountry": "US"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "info@ziontechgroup.com",
                "availableLanguage": "English"
              },
              {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "sales",
                "email": "sales@ziontechgroup.com",
                "availableLanguage": "English"
              }
            ],
            "sameAs": [
              "https://linkedin.com/company/ziontechgroup",
              "https://twitter.com/ziontechgroup",
              "https://facebook.com/ziontechgroup",
              "https://youtube.com/ziontechgroup"
            ],
            "offers": [
              {
                "@type": "Offer",
                "name": "AI Solutions",
                "description": "Advanced artificial intelligence solutions for business automation and optimization",
                "price": "5000",
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "5000",
                  "priceCurrency": "USD",
                  "billingIncrement": "P1M"
                }
              },
              {
                "@type": "Offer",
                "name": "Cloud Infrastructure",
                "description": "Scalable and secure cloud solutions for modern businesses",
                "price": "2500",
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "2500",
                  "priceCurrency": "USD",
                  "billingIncrement": "P1M"
                }
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI and IT Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Solutions",
                    "description": "Machine Learning, NLP, Computer Vision, Predictive Analytics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cloud Infrastructure",
                    "description": "AWS, Azure, GCP Migration, DevOps, Container Orchestration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cybersecurity",
                    "description": "Threat Detection, Data Protection, Compliance, Security Audits"
                  }
                }
              ]
            }
          })
        }}
      />
    </Head>
  )
}

export default SEOHead