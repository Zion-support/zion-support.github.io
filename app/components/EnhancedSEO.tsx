'use client'
import React, { useState, useEffect } from 'react'
import { Search, TrendingUp, Globe, Target, CheckCircle, AlertCircle, Zap, BarChart3 } from 'lucide-react'

interface SEOData {
  keyword: string
  position: number
  searchVolume: number
  difficulty: number
  cpc: number
}

interface SEOAnalysis {
  score: number
  issues: string[]
  suggestions: string[]
  keywords: SEOData[]
}

interface EnhancedSEOProps {
  enableRealTimeAnalysis?: boolean
  enableKeywordTracking?: boolean
  enableCompetitorAnalysis?: boolean
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  enableRealTimeAnalysis = true
}) => {
  const [analysis, setAnalysis] = useState<SEOAnalysis>({
    score: 0,
    issues: [],
    suggestions: [],
    keywords: []
  })

  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    if (enableRealTimeAnalysis && typeof window !== 'undefined') {
      setCurrentUrl(window.location.href)
      performSEOAnalysis()
    }
  }, [enableRealTimeAnalysis])

  const performSEOAnalysis = async () => {
    setIsAnalyzing(true)
    
    // Simulate SEO analysis
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const mockAnalysis: SEOAnalysis = {
      score: 78,
      issues: [
        'Missing meta description',
        'Images without alt text',
        'Slow page load speed',
        'Missing structured data'
      ],
      suggestions: [
        'Add compelling meta descriptions',
        'Optimize image alt attributes',
        'Implement lazy loading',
        'Add JSON-LD structured data'
      ],
      keywords: [
        { keyword: 'AI solutions', position: 3, searchVolume: 12000, difficulty: 65, cpc: 2.50 },
        { keyword: 'IT services', position: 7, searchVolume: 8500, difficulty: 45, cpc: 1.80 },
        { keyword: 'digital transformation', position: 12, searchVolume: 3200, difficulty: 55, cpc: 3.20 },
        { keyword: 'cloud migration', position: 5, searchVolume: 2100, difficulty: 40, cpc: 2.10 }
      ]
    }
    
    setAnalysis(mockAnalysis)
    setIsAnalyzing(false)
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500'
    if (score >= 60) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-500'
    if (score >= 60) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <Search className="w-6 h-6 mr-2 text-purple-600" />
          Enhanced SEO Analysis
        </h2>
        <button
          onClick={performSEOAnalysis}
          disabled={isAnalyzing}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 disabled:opacity-50 transition-colors duration-200 flex items-center"
        >
          {isAnalyzing ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Analyzing...
            </>
          ) : (
            <>
              <Zap className="w-4 h-4 mr-2" />
              Analyze Now
            </>
          )}
        </button>
      </div>

      {/* SEO Score */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">SEO Score</span>
          <span className={`text-2xl font-bold ${getScoreColor(analysis.score)}`}>
            {analysis.score}/100
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className={`h-3 rounded-full transition-all duration-300 ${getScoreBgColor(analysis.score)}`}
            style={{ width: `${analysis.score}%` }}
          ></div>
        </div>
      </div>

      {/* Current URL */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Current URL
        </label>
        <div className="flex items-center space-x-2">
          <Globe className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-600 truncate">
            {currentUrl || 'No URL detected'}
          </span>
        </div>
      </div>

      {/* Issues and Suggestions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Issues */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
            Issues Found
          </h3>
          <div className="space-y-2">
            {analysis.issues.map((issue, index) => (
              <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-800">{issue}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Suggestions */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            Suggestions
          </h3>
          <div className="space-y-2">
            {analysis.suggestions.map((suggestion, index) => (
              <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-sm text-green-800">{suggestion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keywords */}
      {analysis.keywords.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <TrendingUp className="w-5 h-5 text-blue-500 mr-2" />
            Keyword Analysis
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Keyword
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Volume
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Difficulty
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    CPC
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {analysis.keywords.map((keyword, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {keyword.keyword}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      #{keyword.position}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {keyword.searchVolume.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {keyword.difficulty}%
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      ${keyword.cpc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center">
          <BarChart3 className="w-4 h-4 mr-2" />
          View Report
        </button>
        
        <button className="px-4 py-2 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center">
          <Target className="w-4 h-4 mr-2" />
          Optimize Now
        </button>
      </div>
    </div>
  )
}

export default EnhancedSEO