'use client'
import React from 'react'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

const EnhancedSEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - AI & IT Solutions',
  description = 'Leading provider of AI and IT solutions, transforming businesses through innovative technology and expert consulting.',
  keywords = 'AI solutions, IT services, artificial intelligence, machine learning, cloud computing, cybersecurity, digital transformation',
  image = '/og-image.jpg',
  url,
  type = 'website'
}) => {
  const location = useLocation()
  const currentUrl = url || `https://ziontechgroup.com${location.pathname}`
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": description,
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "contact@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    }
  }

  return (
    <div>

    <Helmet>
  
      <title>{title}</title>
      <meta>
  
      <meta>
  
      <meta>
  
      <meta>
  
      <meta>
  
      <meta>
  
      <meta>
  
      <meta>
  
      <meta>
  
      <meta>
  
      <meta>
  
      <link>
  
      <script>
  
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}

export default EnhancedSEOHead
