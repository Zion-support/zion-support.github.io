"use client";
'use client';

import React{ useState } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function RevolutionaryPromoSection() {
  const [hoveredCardsetHoveredCard] = useState<number | null>(null);

  const promoItems = [
    {
      id: 1,
      title: "🚀 AI 2025 Ultimate Content Revolution",
      description: "Revolutionary breakthroughs in AI technology delivering unprecedented ROI",
      link: "/ai-2025-ultimate-content-revolution",
      badge: "BREAKTHROUGH",
      gradient: "from-red-500 to-pink-500",
      stats: "2,500-5,000% ROI"
    },
    {
      id: 2,
      title: "⚛️ Quantum-Neural Fusion Technology",
      description: "Advanced quantum computing integrated with neural networks",
      link: "/blog/ai-2026-quantum-neural-fusion-breakthrough",
      badge: "REVOLUTIONARY",
      gradient: "from-purple-500 to-indigo-500",
      stats: "15,000% ROI"
    },
    {
      id: 3,
      title: "🔮 AI 2025 Revolutionary Trends & Predictions",
      description: "Expert insights into the future of artificial intelligence",
      link: "/blog/ai-2025-revolutionary-trends-predictions",
      badge: "TRENDS",
      gradient: "from-blue-500 to-cyan-500",
      stats: "95% Probability"
    },
    {
      id: 4,
      title: "🤖 Autonomous Operations Mastery",
      description: "Self-managing AI systems with 99.9% accuracy",
      link: "/ai-2025-autonomous-operations-showcase",
      badge: "NEW",
      gradient: "from-green-500 to-emerald-500",
      stats: "10,000x Faster"
    },
    {
      id: 5,
      title: "🏆 Global Enterprise Success Stories",
      description: "Real-world transformations with extraordinary results",
      link: "/case-studies/ai-2025-global-transformation-breakthrough",
      badge: "SUCCESS",
      gradient: "from-orange-500 to-red-500",
      stats: "10,000% ROI"
    },
    {
      id: 6,
      title: "🧠 Consciousness AI Technology",
      description: "Next-generation AI with consciousness capabilities",
      link: "/blog/ai-2030-transcendent-intelligence",
      badge: "FUTURE",
      gradient: "from-indigo-500 to-purple-500",
      stats: "∞ ROI"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-6 shadow-lg">
            <span>🚀</span>
            <span>REVOLUTIONARY CONTENT</span>
            <span>🌟</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover the Future of AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore revolutionary AI technologiesbreakthrough predictionsand success stories that are transforming industries worldwide
          </p>
        </div>

        {/* Promotional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promoItems.map((itemindex) => (
            <div
              key={item.id}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                hoveredCard === item.id ? 'ring-4 ring-purple-500/50' : ''
              }`}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Header */}
              <div className={`bg-gradient-to-r ${item.gradient} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-bold">
                      {item.badge}
                    </span>
                    <div className="text-white/80 text-sm font-semibold">
                      {item.stats}
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {item.title}
                  </h3>
                </div>
                
                {/* Animated background elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8 animate-pulse delay-1000"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <a
                  href={item.link}
                  className={`inline-flex items-center space-x-2 bg-gradient-to-r ${item.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full justify-center`}
                >
                  <span>Explore Now</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Hover effect overlay */}
              {hoveredCard === item.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              🌟 Ready to Join the AI Revolution?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Discover how revolutionary AI technologies can transform your business and deliver unprecedented results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🎯 Get Started Today
              </a>
              <a
                href="/webinars/ai-2025-revolutionary-breakthroughs"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/30"
              >
                🔥 Watch Webinar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}