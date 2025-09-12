import React from 'react';
import Link from 'next/link';

export default function TrendingContentWidget() {
  const trendingContent = [
    {
      title: "Advanced AI Agents",
      description: "Autonomous business operations with 95% accuracy",
      href: "/blog/ai-2025-advanced-ai-agents",
      category: "AI Technology",
      readTime: "12 min",
      icon: "🤖",
      trending: true
    },
    {
      title: "Quantum AI Breakthrough",
      description: "1000x speedup with quantum computing",
      href: "/blog/ai-2025-quantum-ai-breakthrough",
      category: "Breakthrough",
      readTime: "15 min",
      icon: "⚛️",
      trending: true
    },
    {
      title: "FinTech Unicorn Success",
      description: "$3.2B valuation through AI transformation",
      href: "/case-studies/ai-2025-fintech-unicorn-transformation",
      category: "Success Story",
      readTime: "8 min",
      icon: "🚀",
      trending: false
    },
    {
      title: "AI Automation Services",
      description: "Transform your business with intelligent automation",
      href: "/services/ai-automation",
      category: "Services",
      readTime: "5 min",
      icon: "⚡",
      trending: false
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">🔥 Trending Content</h2>
        <Link 
          href="/content-showcase"
          className="text-blue-600 hover:text-blue-700 font-medium text-sm"
        >
          View All →
        </Link>
      </div>
      
      <div className="space-y-4">
        {trendingContent.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group block p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div className="text-2xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  {item.trending && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      🔥 Trending
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">{item.category}</span>
                  <span>{item.readTime} read</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="text-center">
          <Link
            href="/content-showcase"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Explore All Content
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}