import React, { useState } from 'react';
import Link from 'next/link';

export default function RevolutionaryContentDiscoveryWidget2026() {
  const [activeTab, setActiveTab] = useState('breakthroughs');

  const contentCategories = {
    breakthroughs: [
      {
        title: "AI 2025 Enterprise Automation Revolution",
        description: "3,500% ROI breakthrough case study",
        url: "/case-studies/ai-2025-enterprise-automation-revolution-breakthrough",
        badge: "BREAKTHROUGH",
        badgeColor: "bg-red-500",
        icon: "🚀"
      },
      {
        title: "Quantum-AI Fusion 2026",
        description: "15,000% ROI revolutionary technology",
        url: "/blog/quantum-ai-fusion-2026-breakthrough",
        badge: "REVOLUTIONARY",
        badgeColor: "bg-purple-500",
        icon: "⚛️"
      },
      {
        title: "Neural Interface Revolution 2035",
        description: "Consciousness-level AI breakthrough",
        url: "/blog/neural-interface-revolution-2035",
        badge: "FUTURE",
        badgeColor: "bg-cyan-500",
        icon: "🧠"
      },
      {
        title: "AI 2029 Singularity Breakthrough",
        description: "Transcendent intelligence achieved",
        url: "/blog/ai-2029-singularity-breakthrough",
        badge: "SINGULARITY",
        badgeColor: "bg-indigo-500",
        icon: "🌌"
      }
    ],
    caseStudies: [
      {
        title: "Fortune 500 Transformation Success",
        description: "2,000% ROI in 6 months",
        url: "/case-studies/fortune-500-transformation-success",
        badge: "SUCCESS",
        badgeColor: "bg-green-500",
        icon: "🏆"
      },
      {
        title: "Global Enterprise Automation",
        description: "10,000% ROI breakthrough",
        url: "/case-studies/global-enterprise-automation-success",
        badge: "BREAKTHROUGH",
        badgeColor: "bg-blue-500",
        icon: "🌍"
      },
      {
        title: "Quantum Computing Implementation",
        description: "5,000% ROI quantum success",
        url: "/case-studies/quantum-computing-implementation-success",
        badge: "QUANTUM",
        badgeColor: "bg-purple-500",
        icon: "⚛️"
      }
    ],
    resources: [
      {
        title: "AI 2025 Ultimate Implementation Guide",
        description: "Complete transformation roadmap",
        url: "/resources/ai-2025-ultimate-implementation-guide",
        badge: "ESSENTIAL",
        badgeColor: "bg-orange-500",
        icon: "📚"
      },
      {
        title: "Quantum-AI Fusion Toolkit",
        description: "Revolutionary technology guide",
        url: "/resources/quantum-ai-fusion-toolkit",
        badge: "REVOLUTIONARY",
        badgeColor: "bg-cyan-500",
        icon: "🛠️"
      },
      {
        title: "ROI Calculator 2026",
        description: "Calculate your potential returns",
        url: "/tools/roi-calculator-2026",
        badge: "TOOL",
        badgeColor: "bg-green-500",
        icon: "🧮"
      }
    ]
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-bold mb-6 animate-pulse">
            🔍 REVOLUTIONARY CONTENT DISCOVERY 2026
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Breakthrough Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our revolutionary AI content library featuring breakthrough case studies, 
            cutting-edge research, and implementation guides that deliver unprecedented results.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(contentCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                activeTab === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              {category === 'breakthroughs' && '🚀 Breakthroughs'}
              {category === 'caseStudies' && '🏆 Case Studies'}
              {category === 'resources' && '📚 Resources'}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentCategories[activeTab as keyof typeof contentCategories].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border-l-4 border-blue-500 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <Link
                  href={item.url}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                >
                  Explore Content
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Content Highlight */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              ⚛️ Featured: Quantum-AI Fusion Breakthrough
            </h3>
            <p className="text-xl text-indigo-100 mb-6 max-w-3xl mx-auto">
              Discover how companies achieved 15,000% ROI with revolutionary quantum-AI fusion technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog/quantum-ai-fusion-2026-breakthrough"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Read the Breakthrough
              </Link>
              <Link
                href="/case-studies/quantum-ai-fusion-enterprise-transformation"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all transform hover:scale-105"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated with Revolutionary Content
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get exclusive access to breakthrough content, case studies, and implementation guides 
              that deliver unprecedented business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Join 50,000+ business leaders getting breakthrough insights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}