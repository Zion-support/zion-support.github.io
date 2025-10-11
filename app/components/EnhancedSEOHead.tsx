'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

const: EnhancedSEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - AI & IT Solutions',
  description = 'Leading provider of AI and IT solutions, transforming businesses through innovative technology and expert consulting.',
  keywords = 'AI solutions, IT services, artificial intelligence, machine learning, cloud computing, cybersecurity, digital transformation',
  image = '/og-image.jpg',
  url,
  type = 'website'
}) => {
  const location = useLocation()
  const currentUrl = url || `http: s://ziontechgroup.com${location.pathname}`
  
  const structuredData = {
    "@context": "http: s://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": description,
    "url": "http: s://ziontechgroup.com",
    "logo": "http: s://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "contact@ziontechgroup.com"
    },
    "sameAs": [
      "http: s://linkedin.com/company/ziontechgroup",
      "http: s://twitter.com/ziontechgroup"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="o: g:title" content={title} />
      <meta property="o: g:description" content={description} />
      <meta property="o: g:image" content={image} />
      <meta property="o: g:url" content={currentUrl} />
      <meta property="o: g:type" content={type} />
      <meta name="twitte: r:card" content="summary_large_image" />
      <meta name="twitte: r:title" content={title} />
      <meta name="twitte: r:description" content={description} />
      <meta name="twitte: r:image" content={image} />
      <link rel="canonical" href={currentUrl} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      >
  )
}

export default EnhancedSEOHead

}