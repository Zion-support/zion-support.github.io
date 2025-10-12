'use client'
import React, { useState, useEffect } from 'react'
import { Target, CheckCircle, AlertCircle } from 'lucide-react'

interface SEOData {
  score: number
  issues: string[]
  suggestions: string[]
  keywords: string[]
}

const EnhancedSEO: React.FC = () => {
  const [seoData, setSeoData] = useState<SEOData>({
    score: 0,
    issues: [],
    suggestions: [],
    keywords: []
  })

  const [isAnalyzing, setIsAnalyzing] = useState(false)

  useEffect(() => {
    if (isAnalyzing) {
      // Simulate SEO analysis
      setTimeout(() => {
        setSeoData({
          score: Math.floor(Math.random() * 40) + 60, // 60-100
          issues: [
            'Missing meta description',
            'Images without alt text',
            'Slow page load speed',
            'Missing heading structure'
          ],
          suggestions: [
            'Add meta description to all pages',
            'Optimize images and add alt text',
            'Implement lazy loading',
            'Improve heading hierarchy'
          ],
          keywords: [
            'AI solutions',
            'IT services',
            'digital transformation',
            'cloud computing'
          ]
        })
        setIsAnalyzing(false)
      }, 2000)
    }
  }, [isAnalyzing])

  const startAnalysis = () => {
    setIsAnalyzing(true)
    setSeoData({
      score: 0,
      issues: [],
      suggestions: [],
      keywords: []
    })
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">Enhanced SEO Analyzer</h3>
        <button
          onClick={startAnalysis}
          disabled={isAnalyzing}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isAnalyzing ? 'Analyzing...' : 'Analyze SEO'}
        </button>
      </div>

      {isAnalyzing && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-300">Analyzing your website's SEO...</p>
        </div>
      )}

      {!isAnalyzing && seoData.score > 0 && (
        <div className="space-y-6">
          {/* SEO Score */}
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">{seoData.score}/100</div>
            <div className="text-gray-300">SEO Score</div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div 
                className={`h-2 rounded-full transition-all duration-1000 ${
                  seoData.score >= 80 ? 'bg-green-500' : 
                  seoData.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${seoData.score}%` }}
              ></div>
            </div>
          </div>

          {/* Issues */}
          {seoData.issues.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                Issues Found
              </h4>
              <ul className="space-y-2">
                {seoData.issues.map((issue, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Suggestions */}
          {seoData.suggestions.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Suggestions
              </h4>
              <ul className="space-y-2">
                {seoData.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Keywords */}
          {seoData.keywords.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <Target className="w-5 h-5 text-blue-400 mr-2" />
                Target Keywords
              </h4>
              <div className="flex flex-wrap gap-2">
                {seoData.keywords.map((keyword, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default EnhancedSEO