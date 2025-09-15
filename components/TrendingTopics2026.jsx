import React from 'react';
import Link from 'next/link';

export default function TrendingTopics2026() {
  const trendingTopics = [
    {
      topic: "AI 2025 Breakthrough Revolution",
      trend: "🔥 Trending",
      engagement: "10,000+ views",
      href: "/ai-2025-ultimate-breakthrough-revolution",
      category: "AI 2025"
    },
    {
      topic: "Quantum-Neural Fusion Technology",
      trend: "⚡ Hot",
      engagement: "8,500+ views",
      href: "/ai-2026-ultimate-predictions-breakthrough",
      category: "AI 2026"
    },
    {
      topic: "50,000% ROI Success Story",
      trend: "🏆 Viral",
      engagement: "15,000+ views",
      href: "/case-studies/ai-2026-enterprise-transformation-50000-roi",
      category: "Case Study"
    },
    {
      topic: "Consciousness-Level AI Systems",
      trend: "🚀 Rising",
      engagement: "6,200+ views",
      href: "/ai-2026-ultimate-predictions-breakthrough",
      category: "AI 2026"
    },
    {
      topic: "Autonomous Business Operations",
      trend: "📈 Growing",
      engagement: "4,800+ views",
      href: "/ai-2025-ultimate-breakthrough-revolution",
      category: "AI 2025"
    },
    {
      topic: "Predictive Market Intelligence",
      trend: "💎 Popular",
      engagement: "7,300+ views",
      href: "/ai-2026-ultimate-predictions-breakthrough",
      category: "AI 2026"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trending Topics
          </h2>
          <p className="text-lg text-gray-700">
            What's hot in AI and technology right now
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingTopics.map((item, index) => (
            <Link 
              key={index}
              href={item.href}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-gray-200 hover:border-blue-200"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-sm font-semibold text-gray-600 bg-white px-3 py-1 rounded-full shadow-sm">
                  {item.category}
                </span>
                <span className="text-xs font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 px-3 py-1 rounded-full">
                  {item.trend}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                {item.topic}
              </h3>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{item.engagement}</span>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
        
        {/* View All Trending CTA */}
        <div className="text-center mt-8">
          <Link 
            href="/trending"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            View All Trending Topics
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}