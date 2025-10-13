'use client'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOOptimizerProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
}

const SEOOptimizer = ({ 
  title = "Zion Tech Group - AI & IT Solutions",
  description = "Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology.",
  keywords = "AI solutions, IT services, cybersecurity, cloud computing, digital transformation, technology services, Zion Tech Group",
  canonical,
  ogImage = "https://ziontechgroup.com/og-image.jpg"
}: SEOOptimizerProps) => {
  useEffect(() => {
    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": description,
      "foundingDate": "2020",
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
        "email": "kleber@ziontechgroup.com",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://linkedin.com/company/ziontechgroup",
        "https://twitter.com/ziontechgroup",
        "https://github.com/ziontechgroup"
      ],
      "service": [
        {
          "@type": "Service",
          "name": "AI Solutions",
          "description": "Artificial intelligence and machine learning solutions"
        },
        {
          "@type": "Service", 
          "name": "Cybersecurity",
          "description": "Comprehensive cybersecurity solutions and IT services"
        },
        {
          "@type": "Service",
          "name": "5G Implementation",
          "description": "5G network implementation and edge computing solutions"
        }
      ]
    }

    // Add structured data to head
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    // Cleanup
    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [description])

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || "https://ziontechgroup.com"} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  )
}

export default SEOOptimizer