import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget() {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = {
    all: {
      title: 'All Revolutionary Content',
      items: [
        {
          title: 'AI 2025 Ultimate Breakthrough Revolution',
          description: 'The most revolutionary AI breakthrough of 2025 delivering 10,000% ROI',
          href: '/ai-2025-ultimate-breakthrough-revolution',
          badge: 'BREAKTHROUGH',
          color: 'red',
          icon: '🚀'
        },
        {
          title: 'Quantum Computing Solutions 2025',
          description: 'Revolutionary quantum computing with quantum supremacy and error-corrected quantum',
          href: '/quantum-computing-solutions-2025',
          badge: 'QUANTUM',
          color: 'indigo',
          icon: '⚛️'
        },
        {
          title: 'Advanced Automation Solutions 2026',
          description: 'Intelligent process automation and autonomous decision systems with 15,000% ROI',
          href: '/advanced-automation-solutions-2026',
          badge: 'AUTOMATION',
          color: 'emerald',
          icon: '🤖'
        }
      ]
    },
    ai: {
      title: 'AI Breakthroughs',
      items: [
        {
          title: 'AI 2025 Ultimate Breakthrough Revolution',
          description: 'The most revolutionary AI breakthrough of 2025 delivering 10,000% ROI',
          href: '/ai-2025-ultimate-breakthrough-revolution',
          badge: 'BREAKTHROUGH',
          color: 'red',
          icon: '🚀'
        },
        {
          title: 'AI 2026 Quantum-Neural Fusion',
          description: 'Revolutionary fusion of quantum computing and neural networks',
          href: '/ai-2026-quantum-neural-fusion',
          badge: 'FUSION',
          color: 'purple',
          icon: '🧠'
        },
        {
          title: 'AI 2027 Future Predictions',
          description: 'Comprehensive predictions for AI development in 2027',
          href: '/ai-2027-future-predictions',
          badge: 'FUTURE',
          color: 'blue',
          icon: '🔮'
        }
      ]
    },
    quantum: {
      title: 'Quantum Computing',
      items: [
        {
          title: 'Quantum Computing Solutions 2025',
          description: 'Revolutionary quantum computing with quantum supremacy and error-corrected quantum',
          href: '/quantum-computing-solutions-2025',
          badge: 'QUANTUM',
          color: 'indigo',
          icon: '⚛️'
        },
        {
          title: 'Quantum-AI Fusion Revolution',
          description: 'Revolutionary fusion of quantum computing and artificial intelligence',
          href: '/quantum-ai-fusion-revolution',
          badge: 'FUSION',
          color: 'purple',
          icon: '⚛️'
        },
        {
          title: 'Quantum Internet Infrastructure',
          description: 'Revolutionary quantum internet enabling secure quantum communication',
          href: '/quantum-internet-infrastructure',
          badge: 'INFRASTRUCTURE',
          color: 'cyan',
          icon: '🌐'
        }
      ]
    },
    automation: {
      title: 'Automation Solutions',
      items: [
        {
          title: 'Advanced Automation Solutions 2026',
          description: 'Intelligent process automation and autonomous decision systems with 15,000% ROI',
          href: '/advanced-automation-solutions-2026',
          badge: 'AUTOMATION',
          color: 'emerald',
          icon: '🤖'
        },
        {
          title: 'Intelligent Process Automation',
          description: 'AI-powered process automation that learns and adapts in real-time',
          href: '/intelligent-process-automation',
          badge: 'INTELLIGENT',
          color: 'teal',
          icon: '⚡'
        },
        {
          title: 'Autonomous Decision Systems',
          description: 'Fully autonomous AI systems with human-level decision-making',
          href: '/autonomous-decision-systems',
          badge: 'AUTONOMOUS',
          color: 'blue',
          icon: '🎯'
        }
      ]
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: 'from-red-50 to-pink-50 border-red-200 text-red-800 bg-red-100',
      indigo: 'from-indigo-50 to-purple-50 border-indigo-200 text-indigo-800 bg-indigo-100',
      emerald: 'from-emerald-50 to-teal-50 border-emerald-200 text-emerald-800 bg-emerald-100',
      purple: 'from-purple-50 to-pink-50 border-purple-200 text-purple-800 bg-purple-100',
      blue: 'from-blue-50 to-cyan-50 border-blue-200 text-blue-800 bg-blue-100',
      teal: 'from-teal-50 to-cyan-50 border-teal-200 text-teal-800 bg-teal-100',
      cyan: 'from-cyan-50 to-blue-50 border-cyan-200 text-cyan-800 bg-cyan-100'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.red;
  };

  const currentCategory = contentCategories[activeCategory as keyof typeof contentCategories];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Discover Revolutionary Content
        </h2>
        <p className="text-gray-600 text-lg">
          Explore our latest breakthrough content across AI, quantum computing, and automation
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {Object.entries(contentCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeCategory === key
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCategory.items.map((item, index) => {
          const colorClasses = getColorClasses(item.color);
          return (
            <Link
              key={index}
              href={item.href}
              className={`group bg-gradient-to-br ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} p-6 rounded-xl border ${colorClasses.split(' ')[2]} hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
            >
              <div className="flex items-start mb-4">
                <div className="text-3xl mr-3">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {item.description}
                  </p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colorClasses.split(' ')[3]} ${colorClasses.split(' ')[4]}`}>
                    {item.badge}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                Explore Content
                <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          );
        })}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <Link
          href="/content-showcase"
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          View All Revolutionary Content
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}