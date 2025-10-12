'use client'
import React, { useState, useEffect } from 'react'
import { Search, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react'

interface SEOEnhancerProps {
  className?: string
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ className = '' }) => {
  const [seoData, setSeoData] = useState({
    score: 0,
    issues: [] as string[],
    suggestions: [] as string[],
    isOptimized: false
  })
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  useEffect(() => {
    analyzeSEO()
  }, [])

  const analyzeSEO = async () => {
    setIsAnalyzing(true)
    
    try {
      // Simulate SEO analysis
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock SEO analysis results
      const mockIssues = [
        'Missing meta description',
        'Images without alt text',
        'Low content quality score'
      ]
      
      const mockSuggestions = [
        'Add meta description to improve click-through rates',
        'Add alt text to all images for accessibility',
        'Improve content quality and keyword density'
      ]
      
      const score = Math.floor(Math.random() * 40) + 60 // 60-100
      
      setSeoData({
        score,
        issues: mockIssues,
        suggestions: mockSuggestions,
        isOptimized: score >= 80
      })
    } catch (error) {
      console.error('SEO analysis failed:', error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const optimizeSEO = () => {
    // Simulate SEO optimization
    console.log('Optimizing SEO...')
    // In a real implementation, this would trigger actual optimizations
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-center space-x-2 mb-4">
        <Search className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold text-gray-900">SEO Enhancer</h3>
      </div>
      
      {isAnalyzing ? (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
          <span className="ml-2 text-gray-600">Analyzing SEO...</span>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {seoData.score}/100
            </div>
            <div className="text-sm text-gray-600">SEO Score</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${
                  seoData.score >= 80 ? 'bg-green-500' : 
                  seoData.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${seoData.score}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {seoData.isOptimized ? (
              <>
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-green-600 font-medium">SEO Optimized</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-5 h-5 text-yellow-500" />
                <span className="text-yellow-600 font-medium">Needs Optimization</span>
              </>
            )}
          </div>
          
          {seoData.issues.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Issues Found:</h4>
              <ul className="space-y-1">
                {seoData.issues.map((issue, index) => (
                  <li key={index} className="text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {seoData.suggestions.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Suggestions:</h4>
              <ul className="space-y-1">
                {seoData.suggestions.map((suggestion, index) => (
                  <li key={index} className="text-sm text-blue-600 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {!seoData.isOptimized && (
            <button
              onClick={optimizeSEO}
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Optimize SEO
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default SEOEnhancer