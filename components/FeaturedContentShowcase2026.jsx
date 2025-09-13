import React from 'react';
import Link from 'next/link';

export default function FeaturedContentShowcase2026() {
  const featuredContent = [
    {
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "Discover the revolutionary AI breakthroughs of 2025 that are delivering 10,000% ROI to enterprises worldwide.",
      href: "/ai-2025-ultimate-breakthrough-revolution",
      category: "AI 2025",
      badge: "BREAKTHROUGH",
      metrics: "10,000% ROI",
      icon: "🚀",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "AI 2026 Ultimate Predictions Breakthrough",
      description: "Exclusive AI 2026 predictions and breakthrough technologies that will revolutionize business.",
      href: "/ai-2026-ultimate-predictions-breakthrough",
      category: "AI 2026",
      badge: "PREDICTIONS",
      metrics: "50,000% ROI",
      icon: "🔮",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Enterprise Transformation: 50,000% ROI",
      description: "How a Fortune 500 company achieved 50,000% ROI through our AI 2026 transformation strategies.",
      href: "/case-studies/ai-2026-enterprise-transformation-50000-roi",
      category: "Case Study",
      badge: "SUCCESS STORY",
      metrics: "$2.5B Value",
      icon: "🏆",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold mb-6">
            ⭐ FEATURED CONTENT
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Breakthrough Content
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover our most popular and impactful content that's transforming businesses worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredContent.map((content, index) => (
            <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${content.gradient}`}></div>
              
              <div className="p-8">
                {/* Category and Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {content.category}
                  </span>
                  <span className="text-xs font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 px-3 py-1 rounded-full animate-pulse">
                    {content.badge}
                  </span>
                </div>
                
                {/* Icon and Title */}
                <div className="flex items-start mb-4">
                  <div className="text-4xl mr-4">{content.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {content.description}
                </p>
                
                {/* Metrics */}
                <div className="mb-6">
                  <div className="text-2xl font-bold text-green-600 mb-1">{content.metrics}</div>
                  <div className="text-sm text-gray-600">Proven Results</div>
                </div>
                
                {/* CTA Button */}
                <Link 
                  href={content.href}
                  className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${content.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Explore Content
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* View All Content CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/content-showcase"
            className="inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}