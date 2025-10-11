import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOData {
  title: string
  description: string
  canonicalUrl?: string
  ogImage?: string
  keywords?: string[]
  structuredData?: object
}

interface AdvancedSEOOptimizerProps {
  seoData: SEOData
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({ seoData }) => {
  const {
    title,
    description,
    canonicalUrl,
    ogImage,
    keywords = [],
    structuredData
  } = seoData

  // Check title length
  const isTitleOptimal = title.length >= 30 && title.length <= 60

  // Default structured data
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": description,
    "url": canonicalUrl || (typeof window !== 'undefined' ? window.location.origin : ''),
    "logo": ogImage,
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup"
    ]
  }

  const _trackPageView = (config: SEOData) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: config.title,
        page_location: config.canonicalUrl
      })
    }
  }

  React.useEffect(() => {
    _trackPageView(seoData)
    
    // Track performance metrics
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (perfData && typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'page_load_performance', {
          event_category: 'Performance',
          event_label: 'Page Load',
          value: Math.round(perfData.loadEventEnd - perfData.fetchStart)
        })
      }
    })
  }, [seoData])

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  )
}

export default AdvancedSEOOptimizer