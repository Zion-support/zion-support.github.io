'use client'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOData {
  title?: string
  description?: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
  structuredData?: Record<string, unknown>
}

interface EnhancedSEOOptimizerProps {
  seoData: SEOData
  children?: React.ReactNode
}

const EnhancedSEOOptimizer: React.FC<EnhancedSEOOptimizerProps> = ({ 
  seoData, 
  children 
}) => {
  useEffect(() => {
    // Update meta tags dynamically
    if (seoData.title) {
      document.title = seoData.title
    }
    
    if (seoData.description) {
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', seoData.description)
      }
    }
  }, [seoData])

  return (
    <>
      <Helmet>
        {seoData.title && <title>{seoData.title}</title>}
        {seoData.description && <meta name="description" content={seoData.description} />}
        {seoData.keywords && <meta name="keywords" content={seoData.keywords.join(', ')} />}
        {seoData.canonicalUrl && <link rel="canonical" href={seoData.canonicalUrl} />}
        
        {/* Open Graph tags */}
        {seoData.title && <meta property="og:title" content={seoData.title} />}
        {seoData.description && <meta property="og:description" content={seoData.description} />}
        {seoData.ogImage && <meta property="og:image" content={seoData.ogImage} />}
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        {seoData.title && <meta name="twitter:title" content={seoData.title} />}
        {seoData.description && <meta name="twitter:description" content={seoData.description} />}
        {seoData.ogImage && <meta name="twitter:image" content={seoData.ogImage} />}
        
        {/* Structured data */}
        {seoData.structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(seoData.structuredData)}
          </script>
        )}
      </Helmet>
      {children}
    </>
  )
}

export default EnhancedSEOOptimizer