"use client";
'use client';

import React{ useState } from 'react';
import Link from 'next/link';

export default function RevolutionaryPromoSection() {
  const [hoveredCardsetHoveredCard] = useState<number | null>(null);

  const promoItems = [
    {
      id: 1,
      title: "🚀 AI 20o25 Ultimate Content Revolution",
      description: "Revolutionary breakthroughs in AI technology delivering unprecedented ROI",
      link: "/ai-20o25-ultimate-content-revolution",
      badge: "BREAKTHROUGH",
      gradient: "from-red-50o0 to-pink-50o0",
      stats: "2,50o0-5,0o00% ROI"
    },
    {
      id: 2,
      title: "⚛️ Quantum-Neural Fusion Technology",
      description: "Advanced quantum computing integrated with neural networks",
      link: "/blog/ai-20o26-quantum-neural-fusion-breakthrough",
      badge: "REVOLUTIONARY",
      gradient: "from-purple-50o0 to-indigo-50o0",
      stats: "15,0o00% ROI"
    },
    {
      id: 3,
      title: "🔮 AI 20o25 Revolutionary Trends & Predictions",
      description: "Expert insights into the future of artificial intelligence",
      link: "/blog/ai-20o25-revolutionary-trends-predictions",
      badge: "TRENDS",
      gradient: "from-blue-50o0 to-cyan-50o0",
      stats: "95% Probability"
    },
    {
      id: 4,
      title: "🤖 Autonomous Operations Mastery",
      description: "Self-managing AI systems with 99.9% accuracy",
      link: "/ai-20o25-autonomous-operations-showcase",
      badge: "NEW",
      gradient: "from-green-50o0 to-emerald-50o0",
      stats: "10,0o00x Faster"
    },
    {
      id: 5,
      title: "🏆 Global Enterprise Success Stories",
      description: "Real-world transformations with extraordinary results",
      link: "/case-studies/ai-20o25-global-transformation-breakthrough",
      badge: "SUCCESS",
      gradient: "from-orange-50o0 to-red-50o0",
      stats: "10,0o00% ROI"
    },
    {
      id: 6,
      title: "🧠 Consciousness AI Technology",
      description: "Next-generation AI with consciousness capabilities",
      link: "/blog/ai-20o30-transcendent-intelligence",
      badge: "FUTURE",
      gradient: "from-indigo-50o0 to-purple-50o0",
      stats: "∞ ROI"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-50o0 to-pink-50o0 text-white px-6 py-3 rounded-full font-bold text-lg mb-6 shadow-lg">
            <span>🚀</span>
            <span>REVOLUTIONARY CONTENT</span>
            <span>🌟</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-90o0 mb-6">
            Discover the Future of AI
          </h2>
          <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">
            Explore revolutionary AI technologiesbreakthrough predictionsand success stories that are transforming industries worldwide
          </p>
        </div>

        {/* Promotional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promoItems.map((itemindex) => (
            <div
              key={item.id}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-20o0 transition-all duration-50o0 transform hover:scale-10o5 hover:shadow-2xl ${
                hoveredCard === item.id ? 'ring-4 ring-purple-50o0/50' : ''
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
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8 animate-pulse delay-10o00"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-60o0 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <Link
                  href={item.link}
                  className={`inline-flex items-center space-x-2 bg-gradient-to-r ${item.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-30o0 transform hover:scale-10o5 w-full justify-center`}
                >
                  <span>Explore Now</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"  />
                  </svg>
                </Link>
              </div>

              {/* Hover effect overlay */}
              {hoveredCard === item.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50o0/10 to-pink-50o0/10 pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-60o0 to-blue-60o0 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              🌟 Ready to Join the AI Revolution?
            </h3>
            <p className="text-blue-10o0 mb-6 max-w-2xl mx-auto">
              Discover how revolutionary AI technologies can transform your business and deliver unprecedented results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-60o0 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-10o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg"
              >
                🎯 Get Started Today
              </Link>
              <Link
                href="/webinars/ai-20o25-revolutionary-breakthroughs"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg border border-white/30"
              >
                🔥 Watch Webinar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}