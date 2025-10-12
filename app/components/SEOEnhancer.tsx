'use client'
import React, { useState } from 'react'
import { Search, Target, CheckCircle, TrendingUp, Zap } from 'lucide-react'

interface SEOEnhancement {
  title: string
  description: string
  keywords: string[]
  score: number
  improvements: string[]
}

const SEOEnhancer: React.FC = () => {
  const [enhancement, setEnhancement] = useState<SEOEnhancement>({
    title: '',
    description: '',
    keywords: [],
    score: 0,
    improvements: []
  })

  const [isEnhancing, setIsEnhancing] = useState(false)

  const enhanceSEO = () => {
    setIsEnhancing(true)
    
    // Simulate SEO enhancement process
    setTimeout(() => {
      setEnhancement({
        title: 'AI-Powered SEO Solutions | Zion Tech Group - Transform Your Online Presence',
        description: 'Boost your search rankings with our advanced AI-powered SEO solutions. Get more traffic, leads, and conversions with our expert optimization services.',
        keywords: ['AI SEO', 'search optimization', 'digital marketing', 'SEO tools', 'rankings boost'],
        score: 92,
        improvements: [
          'Title optimized for target keywords',
          'Meta description enhanced',
          'Header structure improved',
          'Internal linking optimized',
          'Image alt tags added',
          'Page speed optimized',
          'Mobile responsiveness enhanced'
        ]
      })
      setIsEnhancing(false)
    }, 2500)
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">SEO Enhancer</h3>
        <button
          onClick={enhanceSEO}
          disabled={isEnhancing}
          className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          <Zap className="w-4 h-4 mr-2" />
          {isEnhancing ? 'Enhancing...' : 'Enhance SEO'}
        </button>
      </div>

      {isEnhancing && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400 mx-auto mb-4"></div>
          <p className="text-gray-300">Enhancing your SEO...</p>
        </div>
      )}

      {!isEnhancing && enhancement.score > 0 && (
        <div className="space-y-6">
          {/* SEO Score */}
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">{enhancement.score}/100</div>
            <div className="text-gray-300">SEO Score</div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div 
                className="h-2 rounded-full bg-green-500 transition-all duration-1000"
                style={{ width: `${enhancement.score}%` }}
              ></div>
            </div>
          </div>

          {/* Enhanced Title */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
              <Target className="w-5 h-5 text-blue-400 mr-2" />
              Enhanced Title
            </h4>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-white">{enhancement.title}</p>
              <p className="text-sm text-gray-400 mt-1">
                Length: {enhancement.title.length} characters (Recommended: 50-60)
              </p>
            </div>
          </div>

          {/* Enhanced Description */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
              <Search className="w-5 h-5 text-green-400 mr-2" />
              Meta Description
            </h4>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-white">{enhancement.description}</p>
              <p className="text-sm text-gray-400 mt-1">
                Length: {enhancement.description.length} characters (Recommended: 150-160)
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
              {enhancement.keywords.map((keyword, index) => (
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
              SEO Improvements Applied
            </h4>
            <ul className="space-y-2">
              {enhancement.improvements.map((improvement, index) => (
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

export default SEOEnhancer