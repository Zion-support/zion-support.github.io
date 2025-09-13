import React, { useState } from 'react';
import Link from 'next/link';

export default function AI2025ContentDiscoveryWidget() {
  const [isExpanded, setIsExpanded] = useState(false);

  const featuredContent = [
    {
      title: "Advanced Autonomous Systems",
      description: "Self-healing infrastructure with 2,500% ROI",
      href: "/blog/ai-2025-advanced-autonomous-systems",
      type: "Blog Post",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-100 text-red-800"
    },
    {
      title: "Manufacturing Revolution Case Study",
      description: "Fortune 500 achieves 8,500% ROI",
      href: "/case-studies/ai-2025-autonomous-manufacturing-revolution",
      type: "Case Study",
      badge: "8,500% ROI",
      badgeColor: "bg-green-100 text-green-800"
    },
    {
      title: "AI 2025 Content Showcase",
      description: "Comprehensive collection of breakthrough content",
      href: "/ai-2025-content-showcase",
      type: "Showcase",
      badge: "NEW",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Quantum-Neural Fusion",
      description: "Next-generation AI technology",
      href: "/blog/ai-2025-quantum-neural-fusion",
      type: "Blog Post",
      badge: "REVOLUTIONARY",
      badgeColor: "bg-purple-100 text-purple-800"
    },
    {
      title: "Enterprise AI Roadmap",
      description: "Step-by-step transformation guide",
      href: "/resources/ai-2025-enterprise-transformation-master-guide",
      type: "Guide",
      badge: "MASTER GUIDE",
      badgeColor: "bg-indigo-100 text-indigo-800"
    },
    {
      title: "AI 2026 Future Predictions",
      description: "Comprehensive predictions for next year",
      href: "/blog/ai-2026-future-predictions-breakthrough",
      type: "Blog Post",
      badge: "FUTURE",
      badgeColor: "bg-cyan-100 text-cyan-800"
    }
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-300 ${
        isExpanded ? 'w-96 h-96' : 'w-16 h-16'
      }`}>
        {!isExpanded ? (
          <button
            onClick={() => setIsExpanded(true)}
            className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            aria-label="Open content discovery"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </button>
        ) : (
          <div className="p-4 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">
                🚀 AI 2025 Content
              </h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close widget"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              <div className="space-y-3">
                {featuredContent.map((content, index) => (
                  <Link
                    key={index}
                    href={content.href}
                    className="block p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {content.title}
                      </h4>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${content.badgeColor}`}>
                        {content.badge}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">
                      {content.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {content.type}
                      </span>
                      <svg className="w-3 h-3 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                href="/ai-2025-content-showcase"
                className="block w-full text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                View All Content
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}