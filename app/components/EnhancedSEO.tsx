'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Search, TrendingUp, Target, BarChart3 } from 'lucide-react'

interface SEOData {
  title: string
  description: string
  keywords: string[]
  canonicalUrl: string
  ogImage?: string
  structuredData?: Record<string, unknown>
}

interface EnhancedSEOProps {
  seoData: SEOData
  enableStructuredData?: boolean
  enableOpenGraph?: boolean
  enableTwitterCards?: boolean
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  seoData,
  enableStructuredData = true,
  enableOpenGraph = true,
  enableTwitterCards = true
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords.join(', ')} />
      <link rel="canonical" href={seoData.canonicalUrl} />

      {/* Open Graph Tags */}
      {enableOpenGraph && (
        <>
          <meta property="og:title" content={seoData.title} />
          <meta property="og:description" content={seoData.description} />
          <meta property="og:url" content={seoData.canonicalUrl} />
          <meta property="og:type" content="website" />
          {seoData.ogImage && <meta property="og:image" content={seoData.ogImage} />}
        </>
      )}

      {/* Twitter Card Tags */}
      {enableTwitterCards && (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seoData.title} />
          <meta name="twitter:description" content={seoData.description} />
          {seoData.ogImage && <meta name="twitter:image" content={seoData.ogImage} />}
        </>
      )}

      {/* Structured Data */}
      {enableStructuredData && seoData.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(seoData.structuredData)}
        </script>
      )}
    </Helmet>
  )
}

// SEO Analysis Component
const SEOAnalysis: React.FC = () => {
  const seoMetrics = [
    {
      icon: Search,
      title: 'Keyword Optimization',
      score: 95,
      description: 'Optimized for target keywords'
    },
    {
      icon: TrendingUp,
      title: 'Page Speed',
      score: 88,
      description: 'Fast loading times'
    },
    {
      icon: Target,
      title: 'Mobile Friendly',
      score: 92,
      description: 'Responsive design'
    },
    {
      icon: BarChart3,
      title: 'Content Quality',
      score: 90,
      description: 'High-quality content'
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">SEO Analysis</h3>
      <div className="grid grid-cols-2 gap-4">
        {seoMetrics.map((metric, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <metric.icon className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-600">{metric.score}%</span>
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">{metric.title}</h4>
            <p className="text-xs text-gray-600">{metric.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EnhancedSEO
export { SEOAnalysis }