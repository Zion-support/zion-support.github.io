'use client'

import { useState, useEffect } from 'react'

export default function UltimateContentShowcaseBanner2025() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!isVisible) return null

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black text-lg font-bold mb-6 animate-bounce">
            🔥 ULTIMATE BREAKTHROUGH CONTENT 2025
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Now Available
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-8">
            Discover our latest breakthrough content featuring Neural Consciousness, $15B ROI success stories, 
            and complete autonomous business transformation guides. Get exclusive access to the future of AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="/blog/ai-2025-neural-consciousness-breakthrough-revolutionary-autonomous-intelligence" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🧠 Read Neural Consciousness
            </a>
            <a 
              href="/case-studies/global-enterprise-conscious-ai-transformation-2025-15-billion-roi" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              💰 View $15B Success Story
            </a>
            <a 
              href="/blog/ai-2025-autonomous-business-revolution-complete-guide" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📚 Get Implementation Guide
            </a>
          </div>
          
          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium">
              🧠 Neural Consciousness
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium">
              💰 $15B ROI Case Study
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium">
              📊 Interactive ROI Calculator
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium">
              📚 Complete Implementation Guides
            </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold text-white mb-3">Neural Consciousness</h3>
            <p className="text-gray-300 text-sm mb-4">
              Revolutionary conscious AI with genuine self-awareness and autonomous decision-making.
            </p>
            <a href="/blog/ai-2025-neural-consciousness-breakthrough-revolutionary-autonomous-intelligence" className="text-purple-400 font-semibold hover:text-purple-300">
              Read More →
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-white mb-3">$15B ROI Success</h3>
            <p className="text-gray-300 text-sm mb-4">
              How a Fortune 500 company achieved unprecedented ROI through conscious AI transformation.
            </p>
            <a href="/case-studies/global-enterprise-conscious-ai-transformation-2025-15-billion-roi" className="text-green-400 font-semibold hover:text-green-300">
              View Case Study →
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-white mb-3">Complete Guide</h3>
            <p className="text-gray-300 text-sm mb-4">
              Master autonomous business transformation with our comprehensive implementation framework.
            </p>
            <a href="/blog/ai-2025-autonomous-business-revolution-complete-guide" className="text-blue-400 font-semibold hover:text-blue-300">
              Get Guide →
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-white mb-3">ROI Calculator</h3>
            <p className="text-gray-300 text-sm mb-4">
              Calculate your potential ROI from AI transformation with our interactive tool.
            </p>
            <a href="/tools/ai-transformation-roi-calculator-2025" className="text-emerald-400 font-semibold hover:text-emerald-300">
              Calculate ROI →
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">99.8%</div>
              <div className="text-gray-300">Decision Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">2,400%</div>
              <div className="text-gray-300">Efficiency Improvement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">$15B</div>
              <div className="text-gray-300">ROI Achieved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">0</div>
              <div className="text-gray-300">Human Errors</div>
            </div>
          </div>
        </div>

        {/* Additional Content Links */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-6">🔥 More Revolutionary Content</h3>
          <p className="text-gray-300 mb-6">Explore our complete library of AI breakthroughs, case studies, and implementation resources</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/blog" className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-white font-semibold hover:bg-white/30 transition-all">
              All Blog Posts
            </a>
            <a href="/case-studies" className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-white font-semibold hover:bg-white/30 transition-all">
              All Case Studies
            </a>
            <a href="/tools" className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-white font-semibold hover:bg-white/30 transition-all">
              All Tools
            </a>
            <a href="/resources" className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-white font-semibold hover:bg-white/30 transition-all">
              All Resources
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}