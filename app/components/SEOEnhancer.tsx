'use client'
<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
const SEOEnhancer: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ]
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
=======
import React, { useState, useEffect } from 'react'
import { Search, CheckCircle, BarChart3, Target, Zap, Globe } from 'lucide-react'

interface SEOEnhancerProps {
  onOptimize?: (seoScore: number) => void
  className?: string
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  onOptimize,
  className = ''
}) => {
  const [seoScore, setSeoScore] = useState(0)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [recommendations, setRecommendations] = useState<string[]>([])

  const analyzeSEO = async () => {
    setIsAnalyzing(true)
    
    // Simulate SEO analysis
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const newScore = Math.floor(Math.random() * 40) + 60 // Score between 60-100
    setSeoScore(newScore)
    
    const newRecommendations = [
      'Add meta descriptions to all pages',
      'Optimize images with alt text',
      'Improve page loading speed',
      'Add structured data markup',
      'Create XML sitemap',
      'Optimize internal linking',
      'Improve mobile responsiveness',
      'Add social media meta tags'
    ]
    
    setRecommendations(newRecommendations)
    onOptimize?.(newScore)
    setIsAnalyzing(false)
  }

  useEffect(() => {
    // Initial SEO analysis
    analyzeSEO()
  }, [])

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500'
    if (score >= 70) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-500'
    if (score >= 70) return 'bg-yellow-500'
    return 'bg-red-500'
  }

>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Search className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">SEO Enhancer</h3>
            <p className="text-gray-300 text-sm">Analyze and optimize your SEO performance</p>
          </div>
        </div>
        <button
          onClick={analyzeSEO}
          disabled={isAnalyzing}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          {isAnalyzing ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Search className="w-4 h-4" />
              <span>Analyze</span>
            </>
          )}
        </button>
      </div>

      {/* SEO Score */}
      <div className="text-center mb-6">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-gray-700"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 40}`}
              strokeDashoffset={`${2 * Math.PI * 40 * (1 - seoScore / 100)}`}
              className={`${getScoreColor(seoScore)} transition-all duration-1000`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-2xl font-bold ${getScoreColor(seoScore)}`}>
              {seoScore}
            </span>
          </div>
        </div>
        <div className="text-white font-semibold">SEO Score</div>
        <div className="text-gray-400 text-sm">
          {seoScore >= 90 ? 'Excellent' : seoScore >= 70 ? 'Good' : 'Needs Improvement'}
        </div>
      </div>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <div>
          <h4 className="text-white font-semibold mb-3 flex items-center">
            <Target className="w-5 h-5 text-blue-500 mr-2" />
            Recommendations
          </h4>
          <div className="space-y-2">
            {recommendations.map((recommendation, index) => (
              <div key={index} className="flex items-start text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                {recommendation}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SEOEnhancer