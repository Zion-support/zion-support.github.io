"use client";
import React{ useState } from 'react';
import Link from 'next/link';

export default function RevolutionaryContentDiscoveryWidget() {
  const [activeTabsetActiveTab] = useState('breakthrough');

  const contentCategories = {
    breakthrough: {
      title: 'Revolutionary Breakthroughs',
      icon: '🚀',
      color: 'from-red-500 to-pink-500',
      content: [
        {
          title: 'AI 2025 Ultimate Breakthrough Revolution',
          description: 'Experience 10,000% ROI with transcendent intelligence',
          roi: '10,000% ROI',
          link: '/ai-2025-ultimate-breakthrough-revolution',
          featured: true
        },
        {
          title: 'Quantum Computing Integration',
          description: 'Revolutionary quantum-AI fusion technology',
          roi: '15,000% ROI',
          link: '/quantum-computing-solutions-2025',
          featured: true
        },
        {
          title: 'Neural Interface Technology',
          description: 'Direct brain-computer interface capabilities',
          roi: '8,000% ROI',
          link: '/neural-interface-solutions',
          featured: false
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
          description: 'Fortune 500 company achieves 10,000% ROI',
          roi: '10,000% ROI',
          link: '/case-studies/ai-2025-global-transformation-breakthrough',
          featured: true
        },
        {
          title: 'Quantum Financial Optimization',
          description: 'Tech startup achieves 15,000% ROI',
          roi: '15,000% ROI',
          link: '/case-studies/quantum-ai-financial-optimization-breakthrough-2026',
          featured: true
        },
        {
          title: 'Enterprise Automation Success',
          description: 'Manufacturing company achieves 8,500% ROI',
          roi: '8,500% ROI',
          link: '/case-studies/ai-2026-autonomous-manufacturing-revolution',
          featured: false
        }
      ]
    },
    resources: {
      title: 'Implementation Guides',
      icon: '📚',
      color: 'from-blue-500 to-cyan-500',
      content: [
        {
          title: 'AI 2025 Ultimate Implementation Guide',
          description: 'Complete guide to achieving 10,000% ROI',
          roi: 'Essential',
          link: '/resources/ai-2025-ultimate-implementation-toolkit',
          featured: true
        },
        {
          title: 'Quantum Computing Mastery',
          description: 'Master quantum-AI integration techniques',
          roi: 'Advanced',
          link: '/resources/quantum-computing-mastery-guide-2025',
          featured: true
        },
        {
          title: 'Neural Interface Implementation',
          description: 'Step-by-step neural interface setup',
          roi: 'Expert',
          link: '/resources/neural-interface-implementation-guide',
          featured: false
        }
      ]
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 mb-6">
            <span className="text-yellow-400 font-semibold text-sm">🌟 REVOLUTIONARY CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our breakthrough AI contentsuccess storiesand implementation guides 
            that deliver unprecedented ROI and transformation.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([keycategory]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentCategories[activeTab as keyof typeof contentCategories].content.map((itemindex) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 p-6 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-yellow-500/50' : ''
              }`}
            >
              {item.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  FEATURED
                </div>
              )}
              
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${contentCategories[activeTab as keyof typeof contentCategories].color} text-white`}>
                  {item.roi}
                </div>
              </div>
              
              <Link
                href={item.link}
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg text-center hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
              >
                Explore Now →
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 p-8 rounded-xl border border-purple-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of companies already achieving 10,000% ROI with our revolutionary AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold px-8 py-4 rounded-lg text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/ai-implementation-guide-2025"
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                View Implementation Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}