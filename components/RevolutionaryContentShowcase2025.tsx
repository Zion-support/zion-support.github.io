import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContentShowcase2025() {
  const contentItems = [
    {
      title: 'AI 2025 Ultimate Automation Revolution',
      description: 'Experience the most revolutionary AI automation platform ever created with 5,000% ROI and 99.9% accuracy.',
      href: '/blog/ai-2025-ultimate-automation-revolution',
      badge: 'BREAKTHROUGH',
      badgeColor: 'from-red-500 to-pink-500',
      icon: '🚀',
      stats: '5,000% ROI'
    },
    {
      title: 'AI 2026 Quantum Neural Breakthrough',
      description: 'Discover revolutionary quantum-neural fusion technology delivering 15,000% ROI with quantum computing.',
      href: '/blog/ai-2026-quantum-neural-breakthrough',
      badge: 'QUANTUM',
      badgeColor: 'from-purple-500 to-cyan-500',
      icon: '⚛️',
      stats: '15,000% ROI'
    },
    {
      title: 'AI 2030 Transcendent Intelligence',
      description: 'Experience transcendent intelligence that transcends human limitations with infinite ROI potential.',
      href: '/blog/ai-2030-transcendent-intelligence',
      badge: 'TRANSCENDENT',
      badgeColor: 'from-indigo-500 to-pink-500',
      icon: '🌌',
      stats: '∞ ROI'
    },
    {
      title: 'AI 2025 Revolutionary Trends & Predictions',
      description: 'Comprehensive analysis of AI trends and predictions for 2025 with breakthrough insights.',
      href: '/blog/ai-2025-revolutionary-trends-predictions',
      badge: 'NEW',
      badgeColor: 'from-blue-500 to-purple-500',
      icon: '🔮',
      stats: '99.9% Accuracy'
    },
    {
      title: 'AI 2026 Future Predictions Breakthrough',
      description: 'Revolutionary predictions for AI development in 2026 with quantum-enhanced forecasting.',
      href: '/blog/ai-2026-future-predictions-breakthrough',
      badge: 'FUTURE',
      badgeColor: 'from-green-500 to-blue-500',
      icon: '🔮',
      stats: '95% Probability'
    },
    {
      title: 'AI 2028-2030 Quantum Neural Breakthroughs',
      description: 'Advanced quantum neural technologies that will revolutionize AI by 2030.',
      href: '/blog/ai-2028-2030-quantum-neural-breakthroughs',
      badge: 'REVOLUTIONARY',
      badgeColor: 'from-cyan-500 to-indigo-500',
      icon: '⚛️',
      stats: '10,000x Faster'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold mb-6">
            🚀 REVOLUTIONARY CONTENT SHOWCASE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 2025-2030 Ultimate Content Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover the most comprehensive collection of AI content ever created. 
            From automation breakthroughs to transcendent intelligence, explore the future of AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${item.badgeColor}`}>
                    {item.badge}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-green-600">
                    {item.stats}
                  </div>
                  <Link 
                    href={item.href}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/content-showcase"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Explore All Content
          </Link>
        </div>
      </div>
    </section>
  );
}