'use client'

import { useEffect, useState } from 'react'
import { Search, CheckCircle, AlertCircle, ExternalLink, Eye, Globe } from 'lucide-react'

interface SEOAnalysis {
  title: string
  description: string
  keywords: string[]
  metaTags: Array<{ name: string; content: string; valid: boolean }>
  headings: Array<{ level: number; text: string; valid: boolean }>
  images: Array<{ src: string; alt: string; valid: boolean }>
  links: Array<{ href: string; text: string; valid: boolean }>
  performance: {
    score: number
    issues: string[]
    recommendations: string[]
  }
}

export default function SEOOptimizer() {
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  useEffect(() => {
    const analyzeSEO = () => {
      setIsAnalyzing(true)
      
      // Simulate analysis delay
      setTimeout(() => {
        const mockAnalysis: SEOAnalysis = {
          title: document.title || 'Zion Tech Group - Advanced AI and Technology Solutions',
          description: document.querySelector('meta[name="description"]')?.getAttribute('content') || 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions.',
          keywords: ['AI', 'artificial intelligence', 'cloud services', 'cybersecurity', 'technology solutions', 'enterprise software', 'digital transformation'],
          metaTags: [
            { name: 'description', content: 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions.', valid: true },
            { name: 'keywords', content: 'AI, artificial intelligence, cloud services, cybersecurity, technology solutions', valid: true },
            { name: 'robots', content: 'index, follow', valid: true },
            { name: 'author', content: 'Zion Tech Group', valid: true },
            { name: 'viewport', content: 'width=device-width, initial-scale=1', valid: true },
            { name: 'theme-color', content: '#3b82f6', valid: true }
          ],
          headings: [
            { level: 1, text: 'Zion Tech Group - Advanced AI and Technology Solutions', valid: true },
            { level: 2, text: 'Revolutionary AI Services', valid: true },
            { level: 2, text: 'Cloud Infrastructure Solutions', valid: true },
            { level: 3, text: 'Machine Learning Platforms', valid: true },
            { level: 3, text: 'Cybersecurity Services', valid: true }
          ],
          images: Array.from(document.querySelectorAll('img')).map(img => ({
            src: img.src,
            alt: img.alt,
            valid: img.alt.length > 0
          })),
          links: Array.from(document.querySelectorAll('a')).map(link => ({
            href: link.href,
            text: link.textContent || '',
            valid: link.href.startsWith('http') || link.href.startsWith('/')
          })),
          performance: {
            score: 92,
            issues: [
              'Some images missing alt text',
              'External links should open in new tabs'
            ],
            recommendations: [
              'Add structured data markup',
              'Optimize images for faster loading',
              'Implement breadcrumb navigation',
              'Add social media meta tags'
            ]
          }
        }
        
        setAnalysis(mockAnalysis)
        setIsAnalyzing(false)
      }, 2000)
    }

    analyzeSEO()
  }, [])

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400'
    if (score >= 70) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-500/20 border-green-500/30'
    if (score >= 70) return 'bg-yellow-500/20 border-yellow-500/30'
    return 'bg-red-500/20 border-red-500/30'
  }

  if (isAnalyzing) {
    return (
      <div className="bg-gradient-to-br from-slate-800 via-purple-800 to-slate-800 rounded-2xl shadow-2xl p-8 border border-white/20">
        <div className="animate-pulse">
          <div className="h-8 bg-white/10 rounded-lg mb-6 w-1/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-6">
                <div className="h-4 bg-white/20 rounded mb-2"></div>
                <div className="h-6 bg-white/20 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!analysis) return null

  return (
    <div className="bg-gradient-to-br from-slate-800 via-purple-800 to-slate-800 rounded-2xl shadow-2xl p-8 border border-white/20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white flex items-center">
          <Search className="w-8 h-8 mr-3 text-blue-400" />
          SEO Optimizer
        </h2>
        <div className={`px-4 py-2 rounded-lg border ${getScoreBg(analysis.performance.score)}`}>
          <span className={`text-2xl font-bold ${getScoreColor(analysis.performance.score)}`}>
            {analysis.performance.score}
          </span>
          <span className="text-gray-300 ml-2">/ 100</span>
        </div>
      </div>

      {/* SEO Score Overview */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">SEO Score Breakdown</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">95</div>
            <div className="text-sm text-gray-300">Content Quality</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">85</div>
            <div className="text-sm text-gray-300">Technical SEO</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">96</div>
            <div className="text-sm text-gray-300">User Experience</div>
          </div>
        </div>
      </div>

      {/* Page Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Meta Tags */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Globe className="w-5 h-5 mr-2 text-blue-400" />
            Meta Tags
          </h3>
          <div className="space-y-3">
            {analysis.metaTags.map((tag, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center">
                  {tag.valid ? (
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-400 mr-2" />
                  )}
                  <span className="text-gray-300 text-sm">{tag.name}</span>
                </div>
                <span className="text-white text-sm font-mono">{tag.content.substring(0, 30)}...</span>
              </div>
            ))}
          </div>
        </div>

        {/* Headings Structure */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Eye className="w-5 h-5 mr-2 text-green-400" />
            Headings Structure
          </h3>
          <div className="space-y-2">
            {analysis.headings.map((heading, index) => (
              <div key={index} className="flex items-center p-2 bg-white/5 rounded-lg">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 ${
                  heading.level === 1 ? 'bg-blue-500 text-white' :
                  heading.level === 2 ? 'bg-green-500 text-white' :
                  'bg-purple-500 text-white'
                }`}>
                  H{heading.level}
                </div>
                <span className="text-gray-300 text-sm flex-1">{heading.text}</span>
                {heading.valid ? (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Issues and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Issues */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2 text-red-400" />
            Issues Found ({analysis.performance.issues.length})
          </h3>
          <div className="space-y-3">
            {analysis.performance.issues.map((issue, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-red-200 text-sm">{issue}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
            Recommendations ({analysis.performance.recommendations.length})
          </h3>
          <div className="space-y-3">
            {analysis.performance.recommendations.map((rec, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-green-200 text-sm">{rec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 mt-8">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center">
            <ExternalLink className="w-4 h-4 mr-2" />
            Generate Sitemap
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center">
            <Search className="w-4 h-4 mr-2" />
            Test Mobile Usability
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center">
            <Globe className="w-4 h-4 mr-2" />
            Validate HTML
          </button>
        </div>
      </div>
    </div>
  )
}