'use client'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Search, TrendingUp, Target, BarChart3, CheckCircle, AlertCircle } from 'lucide-react'

interface SEOData {
  title: string
  description: string
  keywords: string[]
  canonicalUrl: string
  ogImage?: string
  structuredData?: Record<string, unknown>
}

interface SEOAnalysis {
  score: number
  issues: string[]
  suggestions: string[]
}

interface EnhancedSEOOptimizerProps {
  seoData: SEOData
  enableRealTimeAnalysis?: boolean
  onAnalysisComplete?: (analysis: SEOAnalysis) => void
}

const EnhancedSEOOptimizer: React.FC<EnhancedSEOOptimizerProps> = ({
  seoData,
  enableRealTimeAnalysis = true,
  onAnalysisComplete
}) => {
  const [analysis, setAnalysis] = useState<SEOAnalysis>({
    score: 0,
    issues: [],
    suggestions: []
  })

  const [isAnalyzing, setIsAnalyzing] = useState(false)

  useEffect(() => {
    if (enableRealTimeAnalysis) {
      analyzeSEO()
    }
  }, [seoData, enableRealTimeAnalysis])

  const analyzeSEO = async () => {
    setIsAnalyzing(true)
    
    // Simulate SEO analysis
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const newAnalysis: SEOAnalysis = {
      score: Math.floor(Math.random() * 40) + 60, // Score between 60-100
      issues: [
        'Title tag is too long',
        'Missing meta description',
        'Images lack alt text'
      ],
      suggestions: [
        'Optimize title length to 50-60 characters',
        'Add compelling meta description',
        'Include alt text for all images'
      ]
    }
    
    setAnalysis(newAnalysis)
    setIsAnalyzing(false)
    
    if (onAnalysisComplete) {
      onAnalysisComplete(newAnalysis)
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500'
    if (score >= 70) return 'text-yellow-500'
    return 'text-red-500'
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href={seoData.canonicalUrl} />
      </Helmet>

      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Search className="w-5 h-5 mr-2" />
          SEO Optimizer
        </h3>
        <button
          onClick={analyzeSEO}
          disabled={isAnalyzing}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isAnalyzing ? 'Analyzing...' : 'Analyze'}
        </button>
      </div>

      {/* SEO Score */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">SEO Score</span>
          <span className={`text-2xl font-bold ${getScoreColor(analysis.score)}`}>
            {analysis.score}/100
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${
              analysis.score >= 90 ? 'bg-green-500' : 
              analysis.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${analysis.score}%` }}
          />
        </div>
      </div>

      {/* Issues */}
      {analysis.issues.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
            <AlertCircle className="w-4 h-4 mr-2 text-red-500" />
            Issues Found
          </h4>
          <ul className="space-y-2">
            {analysis.issues.map((issue, index) => (
              <li key={index} className="text-sm text-red-600 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                {issue}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Suggestions */}
      {analysis.suggestions.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
            Suggestions
          </h4>
          <ul className="space-y-2">
            {analysis.suggestions.map((suggestion, index) => (
              <li key={index} className="text-sm text-green-600 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default EnhancedSEOOptimizer