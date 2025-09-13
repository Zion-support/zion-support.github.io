import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentShowcase() {
  const [activeTab, setActiveTab] = useState('ai2025');

  const content = {
    ai2025: {
      title: 'AI 2025 Breakthrough Content',
      description: 'Revolutionary AI 2025 content with 5,000% ROI guarantees',
      items: [
        {
          title: 'AI 2025 Ultimate Breakthrough Revolution',
          description: '5,000% ROI guaranteed with transcendent intelligence',
          link: '/ai-2025-ultimate-breakthrough-revolution',
          badge: 'BREAKTHROUGH',
          color: 'from-red-500 to-orange-500'
        },
        {
          title: 'AI 2025 Synthetic Intelligence Revolution',
          description: 'Revolutionary synthetic intelligence breakthrough',
          link: '/blog/ai-2025-synthetic-intelligence-revolution',
          badge: 'NEW',
          color: 'from-purple-500 to-pink-500'
        },
        {
          title: 'AI 2025 Ultimate Content Revolution',
          description: 'Ultimate content revolution with 2,500% ROI',
          link: '/ai-2025-ultimate-content-revolution',
          badge: 'REVOLUTIONARY',
          color: 'from-blue-500 to-cyan-500'
        }
      ]
    },
    ai2026: {
      title: 'AI 2026 Future Predictions',
      description: 'Revolutionary AI 2026 predictions with 15,000% ROI opportunities',
      items: [
        {
          title: 'AI 2026 Ultimate Breakthrough Predictions',
          description: '15,000% ROI with quantum-neural fusion technology',
          link: '/ai-2026-ultimate-breakthrough-predictions',
          badge: 'REVOLUTIONARY',
          color: 'from-cyan-500 to-purple-500'
        },
        {
          title: 'AI 2026 Quantum-Neural Fusion',
          description: 'Breakthrough quantum-neural fusion technology',
          link: '/ai-2026-quantum-neural-fusion-breakthrough',
          badge: 'BREAKTHROUGH',
          color: 'from-indigo-500 to-blue-500'
        },
        {
          title: 'AI 2026 Global Transformation Success',
          description: '15,000% ROI case study success story',
          link: '/case-studies/ai-2026-global-transformation-success',
          badge: 'SUCCESS',
          color: 'from-green-500 to-emerald-500'
        }
      ]
    },
    caseStudies: {
      title: 'Success Stories & Case Studies',
      description: 'Real results from companies achieving incredible ROI',
      items: [
        {
          title: 'Fortune 500 Transformation Success',
          description: '1,500% ROI achieved in 6 months',
          link: '/case-studies/ai-2025-fortune-500-transformation-breakthrough',
          badge: 'SUCCESS',
          color: 'from-green-500 to-blue-500'
        },
        {
          title: 'Global Enterprise Transformation',
          description: '1,200% ROI with global expansion',
          link: '/case-studies/ai-2025-global-enterprise-transformation-breakthrough',
          badge: 'BREAKTHROUGH',
          color: 'from-purple-500 to-pink-500'
        },
        {
          title: 'Manufacturing Revolution Success',
          description: '8,500% ROI in manufacturing sector',
          link: '/case-studies/ai-2026-autonomous-manufacturing-revolution',
          badge: 'REVOLUTIONARY',
          color: 'from-orange-500 to-red-500'
        }
      ]
    },
    resources: {
      title: 'Implementation Resources',
      description: 'Complete guides and resources for AI implementation',
      items: [
        {
          title: 'AI 2026 Ultimate Implementation Master Guide',
          description: 'Complete blueprint for 15,000% ROI implementation',
          link: '/resources/ai-2026-ultimate-implementation-master-guide',
          badge: 'MASTER GUIDE',
          color: 'from-indigo-500 to-purple-500'
        },
        {
          title: 'AI 2025 Ultimate Implementation Toolkit',
          description: '47 resources for AI 2025 implementation',
          link: '/resources/ai-2025-ultimate-implementation-toolkit',
          badge: 'TOOLKIT',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          title: 'AI ROI Calculator 2026',
          description: 'Calculate your potential ROI with AI 2026',
          link: '/tools/ai-2026-roi-calculator',
          badge: 'CALCULATOR',
          color: 'from-green-500 to-emerald-500'
        }
      ]
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Interactive Content Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our revolutionary AI content library. Discover breakthrough technologies, success stories, and implementation guides.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(content).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg transform scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-center text-cyan-400">
            {content[activeTab as keyof typeof content].title}
          </h3>
          <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            {content[activeTab as keyof typeof content].description}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[activeTab as keyof typeof content].items.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white`}>
                  {item.badge}
                </div>
              </div>
              
              <h4 className="text-xl font-bold mb-3 text-white">
                {item.title}
              </h4>
              
              <p className="text-gray-300 mb-6 text-sm">
                {item.description}
              </p>
              
              <Link
                href={item.link}
                className={`inline-flex items-center px-4 py-2 rounded-lg font-bold text-sm bg-gradient-to-r ${item.color} text-white hover:opacity-90 transition-all duration-300`}
              >
                Explore Content
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already achieving incredible ROI with our revolutionary AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/ai-2026-ultimate-implementation-master-guide"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Download Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}