import React, { useState } from 'react';
import Link from 'next/link';

export default function AI2025ContentDiscoveryWidget() {
  const [isExpanded, setIsExpanded] = useState(false);

  const contentItems = [
    {
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "Discover groundbreaking AI innovations reshaping industries",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      category: "Breakthroughs",
      readTime: "15 min",
      featured: true
    },
    {
      title: "Global Enterprise Transformation: 2000% ROI",
      description: "Fortune 500 success story with unprecedented results",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      category: "Case Study",
      readTime: "12 min",
      featured: true
    },
    {
      title: "AI 2025 Implementation Master Guide",
      description: "Complete roadmap for enterprise AI transformation",
      href: "/resources/ai-2025-implementation-master-guide",
      category: "Guide",
      readTime: "25 min",
      featured: false
    },
    {
      title: "Quantum-Enhanced Neural Networks",
      description: "10,000x performance improvements in optimization",
      href: "/blog/ai-2025-quantum-neural-networks",
      category: "Research",
      readTime: "18 min",
      featured: false
    },
    {
      title: "Autonomous Enterprise Systems",
      description: "Fully autonomous business operations with 99.9% uptime",
      href: "/blog/ai-2025-autonomous-enterprise",
      category: "Analysis",
      readTime: "20 min",
      featured: false
    },
    {
      title: "AI 2026 Breakthrough Predictions",
      description: "What to expect in the next wave of AI innovation",
      href: "/blog/ai-2026-breakthrough-predictions",
      category: "Prediction",
      readTime: "14 min",
      featured: false
    }
  ];

  const featuredItems = contentItems.filter(item => item.featured);
  const regularItems = contentItems.filter(item => !item.featured);

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">🚀 AI 2025 Content Discovery</h3>
            <p className="text-blue-100 text-sm">Explore revolutionary breakthroughs and insights</p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-white hover:text-blue-200 transition-colors"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            <svg 
              className={`w-5 h-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Featured Content */}
      <div className="p-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
          ⭐ Featured Content
        </h4>
        <div className="space-y-3">
          {featuredItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                  {item.category}
                </span>
                <span className="text-xs text-gray-500">{item.readTime}</span>
              </div>
              <h5 className="font-semibold text-gray-900 mb-1 text-sm">
                {item.title}
              </h5>
              <p className="text-gray-600 text-xs mb-2">
                {item.description}
              </p>
              <Link 
                href={item.href}
                className="text-blue-600 hover:text-blue-800 text-xs font-semibold"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Expandable Regular Content */}
      {isExpanded && (
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
            📚 More Content
          </h4>
          <div className="space-y-2">
            {regularItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-2 hover:bg-white rounded transition-colors">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500">{item.readTime}</span>
                  </div>
                  <h5 className="font-semibold text-gray-900 text-sm mb-1">
                    {item.title}
                  </h5>
                  <p className="text-gray-600 text-xs">
                    {item.description}
                  </p>
                </div>
                <Link 
                  href={item.href}
                  className="text-blue-600 hover:text-blue-800 text-xs font-semibold ml-2"
                >
                  →
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="border-t border-gray-200 p-4 bg-gray-50">
        <div className="flex items-center justify-between">
          <Link 
            href="/ai-2025-content-showcase"
            className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
          >
            View All Content →
          </Link>
          <Link 
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-semibold transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}