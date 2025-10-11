'use client'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

const SEOOptimizer: React.FC = () => {
  useEffect(() => {
    // SEO optimization logic
    const optimizeSEO = () => {
      if (typeof window !== 'undefined') {
        // Add structured data
        const structuredData = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": "Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.",
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
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
          }
        }

        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.text = JSON.stringify(structuredData)
        document.head.appendChild(script)

        // Optimize meta tags
        const metaTags = [
          { name: 'robots', content: 'index, follow' },
          { name: 'author', content: 'Zion Tech Group' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
          { name: 'theme-color', content: '#00ffff' }
        ]

        metaTags.forEach(tag => {
          const existingTag = document.querySelector(`meta[name="${tag.name}"]`)
          if (!existingTag) {
            const meta = document.createElement('meta')
            meta.name = tag.name
            meta.content = tag.content
            document.head.appendChild(meta)
          }
        })
      }
    }

    optimizeSEO()
  }, [])

  return (
    <Helmet>
      <title>Zion Tech Group - Advanced AI and IT Solutions</title>
      <meta name="description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Achieve 300% ROI with our cutting-edge AI technology." />
      <meta name="keywords" content="AI solutions, artificial intelligence, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, IT consulting" />
      <link rel="canonical" href="https://ziontechgroup.com" />
    </Helmet>
  )
}

export default SEOOptimizer