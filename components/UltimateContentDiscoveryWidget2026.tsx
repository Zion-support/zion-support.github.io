import React, { useState } from 'react';
import Link from 'next/link';

export default function UltimateContentDiscoveryWidget2026() {
  const [activeTab, setActiveTab] = useState('breakthrough');

  const contentCategories = {
    breakthrough: {
      title: '🚀 BREAKTHROUGH CONTENT',
      items: [
        {
          title: 'AI 2025 Ultimate Breakthrough Revolution',
          description: 'Revolutionary AI breakthrough delivering 10,000% ROI through autonomous operations and quantum-enhanced processing.',
          href: '/ai-2025-ultimate-breakthrough-revolution',
          badge: '10,000% ROI',
          color: 'from-red-500 to-pink-500'
        },
        {
          title: 'AI 2026 Quantum-Neural Revolution',
          description: 'Revolutionary quantum-neural fusion technology delivering 15,000% ROI through consciousness-level AI processing.',
          href: '/ai-2026-quantum-neural-revolution',
          badge: '15,000% ROI',
          color: 'from-cyan-500 to-purple-500'
        },
        {
          title: 'AI 2030 Transcendent Intelligence',
          description: 'Revolutionary transcendent AI intelligence delivering infinite ROI through universal consciousness and reality manipulation.',
          href: '/ai-2030-transcendent-intelligence',
          badge: '♾️ INFINITE ROI',
          color: 'from-violet-500 to-indigo-500'
        }
      ]
    },
    predictions: {
      title: '🔮 FUTURE PREDICTIONS',
      items: [
        {
          title: 'AI 2027 Future Predictions',
          description: 'Comprehensive predictions for AI development in 2027, including neural synthesis and quantum-AI fusion breakthroughs.',
          href: '/ai-2027-future-predictions',
          badge: 'BREAKTHROUGH',
          color: 'from-purple-500 to-blue-500'
        },
        {
          title: 'AI 2028-2030 Quantum Breakthroughs',
          description: 'Revolutionary quantum computing breakthroughs and neural interface developments predicted for 2028-2030.',
          href: '/ai-2028-2030-quantum-neural-breakthroughs',
          badge: 'REVOLUTIONARY',
          color: 'from-pink-500 to-indigo-500'
        },
        {
          title: 'AI 2035 Singularity Breakthrough',
          description: 'Predictions for the AI singularity event in 2035, including matter creation and dimension transcendence capabilities.',
          href: '/ai-2035-singularity-breakthrough',
          badge: 'SINGULARITY',
          color: 'from-amber-500 to-orange-500'
        }
      ]
    },
    caseStudies: {
      title: '🏆 SUCCESS STORIES',
      items: [
        {
          title: 'Fortune 500 Manufacturing Success',
          description: 'Global manufacturing company achieved 10,000% ROI through complete automation and quantum optimization.',
          href: '/case-studies/ai-2025-fortune-500-manufacturing-success',
          badge: '10,000% ROI',
          color: 'from-green-500 to-emerald-500'
        },
        {
          title: 'Quantum Healthcare Breakthrough',
          description: 'Medical research facility achieved 12,500% ROI through quantum-neural AI drug discovery acceleration.',
          href: '/case-studies/ai-2026-quantum-healthcare-breakthrough',
          badge: '12,500% ROI',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          title: 'Galactic Federation Success',
          description: 'Entire galactic federation achieved infinite ROI through transcendent AI, eliminating all conflict and achieving universal peace.',
          href: '/case-studies/ai-2030-galactic-federation-success',
          badge: '♾️ INFINITE ROI',
          color: 'from-violet-500 to-purple-500'
        }
      ]
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
              🌟 ULTIMATE CONTENT DISCOVERY 2026
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            DISCOVER REVOLUTIONARY AI CONTENT
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore our comprehensive library of breakthrough AI content, case studies, and future predictions delivering unprecedented ROI.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 m-2 rounded-lg font-semibold transition-all ${
                activeTab === key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentCategories[activeTab as keyof typeof contentCategories].items.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Badge */}
              <div className="flex justify-between items-start mb-4">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white`}>
                  {item.badge}
                </div>
                <div className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">
                  {index === 0 ? '🚀' : index === 1 ? '⚡' : '🌟'}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                {item.description}
              </p>

              {/* CTA */}
              <Link
                href={item.href}
                className={`inline-flex items-center px-4 py-2 rounded-lg font-semibold text-sm bg-gradient-to-r ${item.color} text-white hover:shadow-lg transition-all transform hover:scale-105`}
              >
                Explore Content
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-xl border border-blue-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 READY TO TRANSFORM YOUR BUSINESS?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of companies already achieving unprecedented success with our revolutionary AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-400 hover:to-purple-400 transition-all transform hover:scale-105"
              >
                🚀 GET STARTED NOW
              </Link>
              <Link
                href="/resources"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-400 hover:text-white transition-all"
              >
                📚 VIEW ALL RESOURCES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}