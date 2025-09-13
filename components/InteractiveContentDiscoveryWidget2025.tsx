import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2025() {
  const [activeTab, setActiveTab] = useState('breakthrough');

  const contentCategories = {
    breakthrough: {
      title: 'Revolutionary Breakthroughs',
      icon: '🚀',
      color: 'from-red-500 to-pink-500',
      content: [
        {
          title: 'AI 2025 Ultimate Breakthrough Revolution',
          description: '10,000% ROI guaranteed with quantum-neural fusion technology',
          link: '/ai-2025-ultimate-breakthrough-revolution',
          badge: 'BREAKTHROUGH',
          badgeColor: 'bg-red-500'
        },
        {
          title: 'Quantum Computing Breakthroughs 2030',
          description: 'Error-corrected quantum computers with infinite processing power',
          link: '/quantum-computing-breakthroughs-2030',
          badge: 'REVOLUTIONARY',
          badgeColor: 'bg-purple-500'
        },
        {
          title: 'AI 2026 Ultimate Innovation Showcase',
          description: 'Future predictions and breakthrough innovations for 2026',
          link: '/ai-2026-ultimate-innovation-showcase',
          badge: 'FUTURE',
          badgeColor: 'bg-blue-500'
        }
      ]
    },
    caseStudies: {
      title: 'Success Stories',
      icon: '🏆',
      color: 'from-green-500 to-emerald-500',
      content: [
        {
          title: 'Global Transformation Breakthrough',
          description: 'Fortune 500 company achieves 10,000% ROI in 6 months',
          link: '/case-studies/ai-2025-global-transformation-breakthrough',
          badge: '10,000% ROI',
          badgeColor: 'bg-green-500'
        },
        {
          title: 'Quantum Manufacturing Revolution',
          description: 'Manufacturing company achieves 15,000% ROI with quantum AI',
          link: '/case-studies/quantum-manufacturing-revolution-2026',
          badge: '15,000% ROI',
          badgeColor: 'bg-cyan-500'
        },
        {
          title: 'Enterprise AI Transformation',
          description: 'Tech company achieves 5,000% ROI with autonomous systems',
          link: '/case-studies/enterprise-ai-transformation-2025',
          badge: '5,000% ROI',
          badgeColor: 'bg-blue-500'
        }
      ]
    },
    resources: {
      title: 'Implementation Guides',
      icon: '📚',
      color: 'from-purple-500 to-indigo-500',
      content: [
        {
          title: 'AI 2025 Ultimate Implementation Guide',
          description: 'Complete guide to implementing AI breakthrough technology',
          link: '/resources/ai-2025-ultimate-implementation-guide',
          badge: 'ESSENTIAL',
          badgeColor: 'bg-purple-500'
        },
        {
          title: 'Quantum Computing Implementation',
          description: 'Step-by-step quantum computing integration guide',
          link: '/resources/quantum-computing-implementation-guide',
          badge: 'REVOLUTIONARY',
          badgeColor: 'bg-indigo-500'
        },
        {
          title: 'ROI Optimization Toolkit',
          description: 'Tools and strategies for maximizing AI ROI',
          link: '/resources/roi-optimization-toolkit-2025',
          badge: 'PROVEN',
          badgeColor: 'bg-green-500'
        }
      ]
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 font-bold text-sm uppercase tracking-wide">
              🔍 INTERACTIVE CONTENT DISCOVERY
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Discover Revolutionary Content
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, success stories, and implementation guides
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentCategories[activeTab as keyof typeof contentCategories].content.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {activeTab === 'breakthrough' ? '🚀' : activeTab === 'caseStudies' ? '🏆' : '📚'}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.badgeColor} text-white`}>
                  {item.badge}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {item.description}
              </p>
              
              <Link
                href={item.link}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group-hover:translate-x-1 transform duration-300"
              >
                Explore Now
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Can't find what you're looking for? Our AI assistant can help you discover the perfect content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-assistant"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-bold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
            >
              🤖 Ask AI Assistant
            </Link>
            <Link
              href="/content-library"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-black transition-all duration-300"
            >
              📚 Browse All Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}