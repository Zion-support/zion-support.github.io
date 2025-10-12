'use client'
import React, { useState } from 'react'
import { Search, CheckCircle, ArrowRight, Zap, Shield, Brain } from 'lucide-react'

interface SEOEnhancerProps {
  className?: string
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ className = '' }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [seoScore, setSeoScore] = useState(0)

  const seoFeatures = [
    {
      icon: <Search className="w-6 h-6 text-blue-500" />,
      title: 'Keyword Optimization',
      description: 'Optimize your content for relevant keywords and search terms.'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'Page Speed',
      description: 'Improve your page loading speed for better user experience.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Security',
      description: 'Ensure your site follows security best practices for SEO.'
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-500" />,
      title: 'AI Analysis',
      description: 'Use AI to analyze and improve your SEO performance.'
    }
  ]

  const handleAnalyze = async () => {
    setIsAnalyzing(true)
    
    // Simulate analysis process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Generate random SEO score between 60-95
    const score = Math.floor(Math.random() * 35) + 60
    setSeoScore(score)
    setAnalysisComplete(true)
    setIsAnalyzing(false)
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 80) return 'text-yellow-600'
    if (score >= 70) return 'text-orange-600'
    return 'text-red-600'
  }

  return (
    <div className={`bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 ${className}`}>
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
          <Search className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          SEO Enhancer
        </h2>
        <p className="text-gray-600">
          Analyze and improve your website's SEO performance with our advanced tools.
        </p>
      </div>

      {!analysisComplete && (
        <div className="space-y-4">
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isAnalyzing ? (
              <>
                <Search className="w-5 h-5 mr-2 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Search className="w-5 h-5 mr-2" />
                Analyze SEO
              </>
            )}
          </button>
        </div>
      )}

      {analysisComplete && (
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">
              SEO Score: <span className={getScoreColor(seoScore)}>{seoScore}/100</span>
            </div>
            <p className="text-gray-600">
              {seoScore >= 90 ? 'Excellent SEO performance!' : 
               seoScore >= 80 ? 'Good SEO performance with room for improvement.' :
               seoScore >= 70 ? 'Fair SEO performance. Consider optimization.' :
               'Poor SEO performance. Immediate optimization needed.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {seoFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-3">
                  {feature.icon}
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setAnalysisComplete(false)
                setSeoScore(0)
              }}
              className="bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center mx-auto"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Analyze Again
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SEOEnhancer