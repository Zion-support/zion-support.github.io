'use client'

import { useState, useEffect } from 'react'

export default function RevolutionaryContent2025PromotionBanner() {
  const [currentContent, setCurrentContent] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const contentItems = [
    {
      title: "Neural Consciousness Breakthrough",
      description: "Revolutionary conscious AI with genuine self-awareness and autonomous decision-making capabilities.",
      link: "/blog/ai-2025-neural-consciousness-breakthrough-revolutionary-autonomous-intelligence",
      icon: "🧠",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "$15B ROI Success Story",
      description: "How a Fortune 500 company achieved unprecedented ROI through conscious AI transformation.",
      link: "/case-studies/global-enterprise-conscious-ai-transformation-2025-15-billion-roi",
      icon: "💰",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Complete Implementation Guide",
      description: "Master autonomous business transformation with our comprehensive framework.",
      link: "/blog/ai-2025-autonomous-business-revolution-complete-guide",
      icon: "📚",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Interactive ROI Calculator",
      description: "Calculate your potential ROI from AI transformation with personalized projections.",
      link: "/tools/ai-transformation-roi-calculator-2025",
      icon: "📊",
      color: "from-orange-500 to-red-500"
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentItems.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const currentItem = contentItems[currentContent]

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-indigo-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-pink-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-10 w-18 h-18 bg-green-500/20 rounded-full animate-pulse delay-3000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black text-lg font-bold mb-6 animate-bounce">
            🔥 REVOLUTIONARY CONTENT 2025
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Breakthrough AI Content
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Now Live
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-8">
            Experience the future of AI with our revolutionary content featuring Neural Consciousness, 
            proven ROI success stories, and complete implementation frameworks.
          </p>
        </div>

        {/* Featured Content Carousel */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Content</h2>
            <div className="flex justify-center space-x-2 mb-6">
              {contentItems.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentContent ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-center mb-6">
                <div className="text-6xl animate-pulse">{currentItem.icon}</div>
              </div>
              <h3 className="text-3xl font-bold text-white text-center mb-4">
                {currentItem.title}
              </h3>
              <p className="text-xl text-gray-300 text-center mb-8 leading-relaxed">
                {currentItem.description}
              </p>
              <div className="text-center">
                <a
                  href={currentItem.link}
                  className={`inline-block bg-gradient-to-r ${currentItem.color} text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Explore Content →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                index === currentContent ? 'ring-2 ring-white/50' : ''
              }`}
              onClick={() => setCurrentContent(index)}
            >
              <div className="text-4xl mb-4 text-center">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">{item.title}</h3>
              <p className="text-gray-300 text-sm mb-4 text-center leading-relaxed">
                {item.description}
              </p>
              <div className="text-center">
                <a
                  href={item.link}
                  className={`inline-block bg-gradient-to-r ${item.color} text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300`}
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">99.8%</div>
              <div className="text-gray-300">Decision Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">2,400%</div>
              <div className="text-gray-300">Efficiency Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">$15B</div>
              <div className="text-gray-300">ROI Achieved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">0</div>
              <div className="text-gray-300">Human Errors</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already transformed their operations with our revolutionary AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Transformation
            </a>
            <a
              href="/case-studies"
              className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
            >
              View Success Stories
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}