import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2025() {
  const [activeTab, setActiveTab] = useState('ai-2025');

  const contentCategories = {
    'ai-2025': {
      title: 'AI 2025 Breakthroughs',
      color: 'from-purple-500 to-pink-500',
      content: [
        {
          title: 'AI 2025 Ultimate Breakthrough Revolution',
          description: 'Experience the most revolutionary AI technologies of 2025 delivering unprecedented 10,000% ROI',
          link: '/ai-2025-ultimate-breakthrough-revolution',
          roi: '10,000% ROI',
          icon: '🚀'
        },
        {
          title: 'Quantum Computing Breakthroughs 2030',
          description: 'Revolutionary quantum computing with error-corrected quantum computers and 15,000% ROI',
          link: '/quantum-computing-breakthroughs-2030',
          roi: '15,000% ROI',
          icon: '⚛️'
        },
        {
          title: 'Neural Interface Solutions',
          description: 'Direct brain-computer communication with 99.7% accuracy and 3,000% ROI',
          link: '/neural-interface-solutions',
          roi: '3,000% ROI',
          icon: '🧠'
        }
      ]
    },
    'ai-2026': {
      title: 'AI 2026 Revolutionary Content',
      color: 'from-cyan-500 to-purple-500',
      content: [
        {
          title: 'AI 2026 Breakthrough Revolutionary Content',
          description: 'Quantum-neural fusion, consciousness AI, and transcendent intelligence with infinite ROI',
          link: '/ai-2026-breakthrough-revolutionary-content',
          roi: '∞ ROI',
          icon: '🌌'
        },
        {
          title: 'AI 2027 Future Predictions Revolutionary',
          description: 'Neural synthesis, quantum-AI fusion, and transcendent intelligence delivering 8,000% ROI',
          link: '/ai-2027-future-predictions-revolutionary',
          roi: '8,000% ROI',
          icon: '🔮'
        },
        {
          title: 'AI 2028 Future Predictions Breakthrough',
          description: 'Automotive transformation, quantum neural fusion, and advanced AI systems with 3,000% ROI',
          link: '/ai-2028-future-predictions-breakthrough',
          roi: '3,000% ROI',
          icon: '🚗'
        }
      ]
    },
    'quantum': {
      title: 'Quantum Computing Solutions',
      color: 'from-indigo-500 to-pink-500',
      content: [
        {
          title: 'Quantum Computing Breakthroughs 2030',
          description: 'Error-corrected quantum computers, quantum internet, and quantum-AI fusion',
          link: '/quantum-computing-breakthroughs-2030',
          roi: '15,000% ROI',
          icon: '⚛️'
        },
        {
          title: 'Quantum Internet Implementation',
          description: 'Ultra-secure quantum internet with 100% security and instant communication',
          link: '/quantum-internet-implementation',
          roi: '100% Secure',
          icon: '🌐'
        },
        {
          title: 'Quantum-AI Fusion Technology',
          description: 'Revolutionary fusion of quantum computing and AI with infinite capabilities',
          link: '/quantum-ai-fusion-technology',
          roi: '∞ Potential',
          icon: '⚛️🧠'
        }
      ]
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-400/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-pink-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-blue-400/10 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            🎯 Interactive Content Discovery
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Explore our revolutionary AI content library and discover breakthrough technologies delivering unprecedented ROI across all industries.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentCategories[activeTab as keyof typeof contentCategories].content.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-4 mb-6">
                <div className="text-green-400 font-bold text-lg">{item.roi}</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              <Link
                href={item.link}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-2 transition-all duration-300"
              >
                Explore Content →
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of companies already achieving unprecedented ROI with our revolutionary AI technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/resources"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}