import React, { useState } from 'react';
import Link from 'next/link';

export default function NewContentDiscoveryWidget2025() {
  const [activeTab, setActiveTab] = useState('breakthrough');

  const contentCategories = {
    breakthrough: {
      title: 'Revolutionary Breakthroughs',
      icon: '🚀',
      color: 'from-red-500 to-pink-500',
      content: [
        {
          title: 'AI 2025 Revolutionary Breakthrough Announcement',
          description: 'Discover the most revolutionary AI breakthrough in history with 15,000% ROI',
          url: '/ai-2025-revolutionary-breakthrough-announcement',
          badge: 'BREAKTHROUGH',
          badgeColor: 'bg-red-500'
        },
        {
          title: 'AI 2026 Future Predictions Breakthrough',
          description: 'Exclusive predictions for quantum computing, neural interfaces, and transcendent intelligence',
          url: '/ai-2026-future-predictions-breakthrough',
          badge: 'NEW',
          badgeColor: 'bg-blue-500'
        },
        {
          title: 'Quantum Computing 2026 Ultimate Breakthrough',
          description: 'Revolutionary error-corrected quantum computers with quantum supremacy',
          url: '/quantum-computing-2026-ultimate-breakthrough',
          badge: 'REVOLUTIONARY',
          badgeColor: 'bg-purple-500'
        }
      ]
    },
    caseStudies: {
      title: 'Success Stories',
      icon: '🏆',
      color: 'from-green-500 to-emerald-500',
      content: [
        {
          title: 'AI 2025 Revolutionary Breakthrough Success',
          description: 'Real case study showing 15,000% ROI with Fortune 500 companies',
          url: '/case-studies/ai-2025-revolutionary-breakthrough-success',
          badge: '15,000% ROI',
          badgeColor: 'bg-green-500'
        },
        {
          title: 'Quantum Computing Success Stories',
          description: 'Proven results from quantum computing implementations across industries',
          url: '/case-studies/quantum-computing-success-stories',
          badge: '20,000% ROI',
          badgeColor: 'bg-indigo-500'
        }
      ]
    },
    predictions: {
      title: 'Future Predictions',
      icon: '🔮',
      color: 'from-purple-500 to-indigo-500',
      content: [
        {
          title: 'AI 2026-2030 Future Predictions',
          description: 'Comprehensive predictions for the next decade of AI development',
          url: '/ai-2026-future-predictions-breakthrough',
          badge: 'EXCLUSIVE',
          badgeColor: 'bg-purple-500'
        },
        {
          title: 'Quantum Technology Predictions 2026',
          description: 'Revolutionary quantum computing predictions and applications',
          url: '/quantum-computing-2026-ultimate-breakthrough',
          badge: 'BREAKTHROUGH',
          badgeColor: 'bg-cyan-500'
        }
      ]
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest breakthrough content, success stories, and future predictions. 
            Get exclusive access to the most advanced AI and quantum computing technologies.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`mx-2 mb-4 px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${category.color} text-white transform scale-105 shadow-lg`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
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
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl mb-4">{contentCategories[activeTab as keyof typeof contentCategories].icon}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-6 text-sm">
                {item.description}
              </p>
              
              <Link
                href={item.url}
                className={`inline-flex items-center px-6 py-3 rounded-lg font-bold text-white bg-gradient-to-r ${contentCategories[activeTab as keyof typeof contentCategories].color} hover:opacity-90 transition-all duration-300`}
              >
                Explore Content
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Ready to experience the future of AI and quantum computing?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
            >
              Get Exclusive Access
            </Link>
            <Link
              href="/content-showcase"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              View All Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}