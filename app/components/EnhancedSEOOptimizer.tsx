'use client'
import React, { useState } from 'react'
import { Search, Target, CheckCircle, TrendingUp, Zap } from 'lucide-react'

interface SEOOptimization {
  title: string
  description: string
  keywords: string[]
  score: number
  improvements: string[]
}

const EnhancedSEOOptimizer: React.FC = () => {
  const [optimization, setOptimization] = useState<SEOOptimization>({
    title: '',
    description: '',
    keywords: [],
    score: 0,
    improvements: []
  })

  const [isOptimizing, setIsOptimizing] = useState(false)

  const optimizeContent = () => {
    setIsOptimizing(true)
    
    // Simulate optimization process
    setTimeout(() => {
      setOptimization({
        title: 'AI-Powered SEO Solutions | Zion Tech Group',
        description: 'Transform your online presence with our advanced AI-powered SEO solutions. Boost rankings, increase traffic, and drive conversions.',
        keywords: ['AI SEO', 'search optimization', 'digital marketing', 'SEO tools'],
        score: 95,
        improvements: [
          'Title length optimized (55 characters)',
          'Meta description added (155 characters)',
          'Keywords strategically placed',
          'Header structure improved',
          'Internal linking optimized'
        ]
      })
      setIsOptimizing(false)
    }, 2000)
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">SEO Content Optimizer</h3>
        <button
          onClick={optimizeContent}
          disabled={isOptimizing}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          <Zap className="w-4 h-4 mr-2" />
          {isOptimizing ? 'Optimizing...' : 'Optimize Content'}
        </button>
      </div>

      {isOptimizing && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-300">Optimizing your content for better SEO...</p>
        </div>
      )}

      {!isOptimizing && optimization.score > 0 && (
        <div className="space-y-6">
          {/* SEO Score */}
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">{optimization.score}/100</div>
            <div className="text-gray-300">SEO Score</div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div 
                className="h-2 rounded-full bg-green-500 transition-all duration-1000"
                style={{ width: `${optimization.score}%` }}
              ></div>
            </div>
          </div>

          {/* Optimized Title */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
              <Target className="w-5 h-5 text-blue-400 mr-2" />
              Optimized Title
            </h4>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-white">{optimization.title}</p>
              <p className="text-sm text-gray-400 mt-1">
                Length: {optimization.title.length} characters (Recommended: 50-60)
              </p>
            </div>
          </div>

          {/* Optimized Description */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
              <Search className="w-5 h-5 text-green-400 mr-2" />
              Meta Description
            </h4>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-white">{optimization.description}</p>
              <p className="text-sm text-gray-400 mt-1">
                Length: {optimization.description.length} characters (Recommended: 150-160)
              </p>
            </div>
          </div>

          {/* Keywords */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
              <TrendingUp className="w-5 h-5 text-yellow-400 mr-2" />
              Target Keywords
            </h4>
            <div className="flex flex-wrap gap-2">
              {optimization.keywords.map((keyword, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Improvements */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Optimizations Applied
            </h4>
            <ul className="space-y-2">
              {optimization.improvements.map((improvement, index) => (
                <li key={index} className="flex items-center text-sm text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  {improvement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default EnhancedSEOOptimizer