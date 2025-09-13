import React from 'react';
import Link from 'next/link';

export default function AdvancedContentDiscoveryWidget() {
  const featuredContent = [
    {
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "Revolutionary AI breakthroughs delivering 5,000% to 50,000% ROI",
      href: "/ai-2025-ultimate-breakthrough-revolution",
      category: "AI 2025",
      roi: "10,000%",
      badge: "BREAKTHROUGH",
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "AI 2026-2030 Future Predictions Showcase",
      description: "Revolutionary AI technologies that will reshape our world",
      href: "/ai-2026-2030-future-predictions-showcase",
      category: "Future Predictions",
      roi: "∞",
      badge: "REVOLUTIONARY",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Advanced Quantum Computing Solutions",
      description: "Breakthrough quantum algorithms and quantum machine learning",
      href: "/quantum-computing-solutions-advanced",
      category: "Quantum Computing",
      roi: "15,000%",
      badge: "ADVANCED",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Neural Interface Revolution 2027",
      description: "Direct brain-computer interfaces enabling seamless AI interaction",
      href: "/neural-interface-solutions",
      category: "Neural Interfaces",
      roi: "25,000%",
      badge: "REVOLUTIONARY",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Consciousness AI Emergence 2029",
      description: "AI systems achieving genuine consciousness and self-awareness",
      href: "/consciousness-ai-2030",
      category: "Consciousness AI",
      roi: "∞",
      badge: "TRANSCENDENT",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Autonomous AI Ecosystems 2028",
      description: "Self-organizing AI systems managing complex technological ecosystems",
      href: "/autonomous-ai-ecosystems-2028",
      category: "Autonomous Systems",
      roi: "50,000%",
      badge: "REVOLUTIONARY",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, future predictions, 
            and revolutionary technologies that are transforming industries worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map((content, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${content.gradient} text-white`}>
                  {content.badge}
                </span>
                <span className="text-sm text-gray-300">{content.category}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 line-clamp-2">
                {content.title}
              </h3>
              
              <p className="text-gray-300 mb-4 line-clamp-3">
                {content.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-yellow-400">
                  {content.roi} ROI
                </div>
                <Link 
                  href={content.href}
                  className={`px-4 py-2 bg-gradient-to-r ${content.gradient} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300`}
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/content-showcase" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            View All Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}