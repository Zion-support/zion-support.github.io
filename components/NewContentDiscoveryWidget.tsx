import React from 'react';
import Link from 'next/link';

export default function NewContentDiscoveryWidget() {
  const newContent = [
    {
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "The most transformative AI innovations of 2025 delivering unprecedented business value",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      category: "Breakthroughs",
      badge: "NEW",
      color: "from-red-500 to-pink-500",
      stats: "2,000% ROI"
    },
    {
      title: "AI 2026 Quantum Computing Revolution",
      description: "Explore the revolutionary convergence of AI and quantum computing unlocking infinite possibilities",
      href: "/blog/ai-2026-quantum-computing-revolution",
      category: "Quantum AI",
      badge: "BREAKTHROUGH",
      color: "from-indigo-500 to-purple-500",
      stats: "10,000x Faster"
    },
    {
      title: "AI 2027 Future Predictions",
      description: "Comprehensive predictions for AI in 2027 including the approaching technological singularity",
      href: "/blog/ai-2027-future-predictions",
      category: "Predictions",
      badge: "FUTURE",
      color: "from-purple-500 to-pink-500",
      stats: "Singularity"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Latest Breakthrough Content</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>Just Published</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newContent.map((content, index) => (
          <Link 
            key={index}
            href={content.href}
            className="group bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-gray-300"
          >
            <div className="flex items-start justify-between mb-3">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${content.color} text-white`}>
                {content.badge}
              </span>
              <span className="text-xs text-gray-500 font-medium">{content.category}</span>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {content.title}
            </h4>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {content.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-gray-700">
                {content.stats}
              </div>
              <div className="text-blue-600 text-sm font-semibold group-hover:text-blue-700">
                Read More →
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Link 
          href="/content-showcase"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
        >
          Explore All Content
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}