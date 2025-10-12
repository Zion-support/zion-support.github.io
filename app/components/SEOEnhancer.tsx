'use client'
import React, { useState, useEffect } from 'react'
import { Search, CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react'

interface SEOData {
  title: string
  description: string
  keywords: string[]
  canonicalUrl: string
  ogImage: string
  structuredData?: any
}

interface SEOEnhancerProps {
  seoData: SEOData
  onSEOUpdate?: (data: SEOData) => void
  className?: string
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  seoData,
  onSEOUpdate,
  className = ''
}) => {
  const [seoScore, setSeoScore] = useState(0)
  const [recommendations, setRecommendations] = useState<string[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const analyzeSEO = () => {
    setIsAnalyzing(true)
    const newRecommendations: string[] = []
    let score = 100

    // Analyze title
    if (!seoData.title || seoData.title.length < 30) {
      newRecommendations.push('Title should be at least 30 characters long')
      score -= 20
    }
    if (seoData.title && seoData.title.length > 60) {
      newRecommendations.push('Title should be under 60 characters')
      score -= 10
    }

    // Analyze description
    if (!seoData.description || seoData.description.length < 120) {
      newRecommendations.push('Description should be at least 120 characters long')
      score -= 20
    }
    if (seoData.description && seoData.description.length > 160) {
      newRecommendations.push('Description should be under 160 characters')
      score -= 10
    }

    // Analyze keywords
    if (!seoData.keywords || seoData.keywords.length === 0) {
      newRecommendations.push('Add relevant keywords')
      score -= 15
    }

    // Analyze canonical URL
    if (!seoData.canonicalUrl) {
      newRecommendations.push('Add canonical URL')
      score -= 10
    }

    // Analyze OG image
    if (!seoData.ogImage) {
      newRecommendations.push('Add Open Graph image')
      score -= 15
    }

    setSeoScore(Math.max(0, score))
    setRecommendations(newRecommendations)
    setIsAnalyzing(false)
  }

  useEffect(() => {
    analyzeSEO()
  }, [seoData])

  const getScoreColor = () => {
    if (seoScore >= 80) return 'text-green-600'
    if (seoScore >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreBgColor = () => {
    if (seoScore >= 80) return 'bg-green-100'
    if (seoScore >= 60) return 'bg-yellow-100'
    return 'bg-red-100'
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Search className="w-5 h-5 mr-2 text-blue-500" />
          SEO Analyzer
        </h3>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreBgColor()} ${getScoreColor()}`}>
          {seoScore}/100
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={seoData.title}
            onChange={(e) => onSEOUpdate?.({ ...seoData, title: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter page title"
          />
          <p className="text-xs text-gray-500 mt-1">
            {seoData.title.length}/60 characters
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            value={seoData.description}
            onChange={(e) => onSEOUpdate?.({ ...seoData, description: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="Enter page description"
          />
          <p className="text-xs text-gray-500 mt-1">
            {seoData.description.length}/160 characters
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Keywords</label>
          <input
            type="text"
            value={seoData.keywords.join(', ')}
            onChange={(e) => onSEOUpdate?.({ ...seoData, keywords: e.target.value.split(', ').filter(k => k.trim()) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter keywords separated by commas"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Canonical URL</label>
          <input
            type="url"
            value={seoData.canonicalUrl}
            onChange={(e) => onSEOUpdate?.({ ...seoData, canonicalUrl: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/page"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">OG Image URL</label>
          <input
            type="url"
            value={seoData.ogImage}
            onChange={(e) => onSEOUpdate?.({ ...seoData, ogImage: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/image.jpg"
          />
        </div>
      </div>

      {recommendations.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Recommendations:</h4>
          <ul className="space-y-1">
            {recommendations.map((recommendation, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2 text-yellow-500" />
                {recommendation}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={analyzeSEO}
        disabled={isAnalyzing}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center disabled:opacity-50"
      >
        {isAnalyzing ? (
          <>
            <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Analyzing...
          </>
        ) : (
          <>
            <TrendingUp className="w-4 h-4 mr-2" />
            Analyze SEO
          </>
        )}
      </button>
    </div>
  )
}

export default SEOEnhancer