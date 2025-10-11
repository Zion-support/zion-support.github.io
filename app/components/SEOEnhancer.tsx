'use client'
import React, { useState, useEffect } from 'react'
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
  metrics: {
    titleLength: number
    descriptionLength: number
    keywordDensity: number
    headingStructure: number
  }
}

interface SEOEnhancerProps {
  seoData: SEOData
  enableRealTimeAnalysis?: boolean
  onAnalysisComplete?: (analysis: SEOAnalysis) => void
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  seoData,
  enableRealTimeAnalysis = true,
  onAnalysisComplete
}) => {
  const [analysis, setAnalysis] = useState<SEOAnalysis>({
    score: 0,
    issues: [],
    suggestions: [],
    metrics: {
      titleLength: 0,
      descriptionLength: 0,
      keywordDensity: 0,
      headingStructure: 0
    }
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
        'Images lack alt text',
        'No structured data'
      ],
      suggestions: [
        'Optimize title length to 50-60 characters',
        'Add compelling meta description',
        'Include alt text for all images',
        'Add structured data markup'
      ],
      metrics: {
        titleLength: seoData.title.length,
        descriptionLength: seoData.description.length,
        keywordDensity: Math.random() * 5,
        headingStructure: Math.floor(Math.random() * 100)
      }
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

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return 'bg-green-500'
    if (score >= 70) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Search className="w-5 h-5 mr-2 text-blue-500" />
          SEO Enhancer
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
            className={`h-2 rounded-full transition-all duration-500 ${getScoreBgColor(analysis.score)}`}
            style={{ width: `${analysis.score}%` }}
          />
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-600">Title Length</span>
            <Target className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-lg font-bold text-gray-900">
            {analysis.metrics.titleLength}
          </div>
          <div className="text-xs text-gray-500">
            {analysis.metrics.titleLength > 60 ? 'Too long' : 'Good'}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-600">Description</span>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <div className="text-lg font-bold text-gray-900">
            {analysis.metrics.descriptionLength}
          </div>
          <div className="text-xs text-gray-500">
            {analysis.metrics.descriptionLength > 160 ? 'Too long' : 'Good'}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-600">Keyword Density</span>
            <BarChart3 className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-lg font-bold text-gray-900">
            {analysis.metrics.keywordDensity.toFixed(1)}%
          </div>
          <div className="text-xs text-gray-500">
            {analysis.metrics.keywordDensity > 3 ? 'Too high' : 'Good'}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-600">Headings</span>
            <Search className="w-4 h-4 text-orange-500" />
          </div>
          <div className="text-lg font-bold text-gray-900">
            {analysis.metrics.headingStructure}%
          </div>
          <div className="text-xs text-gray-500">
            {analysis.metrics.headingStructure > 80 ? 'Good' : 'Needs work'}
          </div>
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

export default SEOEnhancer