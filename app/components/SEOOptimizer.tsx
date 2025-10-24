"use client"

import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOOptimizerProps {
  children: React.ReactNode
}

export default function SEOOptimizer({ children }: SEOOptimizerProps) {
  useEffect(() => {
    // SEO optimizations
    if (typeof window !== 'undefined') {
      // Add structured data
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "description": "Professional AI and IT solutions for modern businesses",
        "url": window.location.origin
      }

      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)

      return () => {
        const existingScript = document.querySelector('script[type="application/ld+json"]')
        if (existingScript) {
          existingScript.remove()
        }
      }
    }
  }, [])

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#059669" />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
      </Helmet>
      {children}
    </>
  )
}