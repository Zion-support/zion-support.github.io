import React from 'react';
import Link from 'next/link';

interface TrendingItem {
  title: string;
  description: string;
  href: string;
  category: string;
  readTime: string;
  views: string;
  trend: 'up' | 'down' | 'stable';
  isNew?: boolean;
}

const trendingContent: TrendingItem[] = [
  {
    title: "AI Advanced Automation 2025",
    description: "Complete enterprise implementation guide with 40-60% efficiency gains",
    href: "/blog/ai-2025-advanced-automation",
    category: "Automation",
    readTime: "18 min",
    views: "25.3K",
    trend: "up",
    isNew: true
  },
  {
    title: "AI Healthcare Diagnosis Revolution",
    description: "95-98% diagnostic accuracy breakthrough transforming medical care",
    href: "/blog/ai-healthcare-diagnosis-revolution-2025",
    category: "Healthcare",
    readTime: "22 min",
    views: "18.7K",
    trend: "up",
    isNew: true
  },
  {
    title: "Fortune 500 AI Success Story",
    description: "$50M savings and 60% efficiency gains through AI automation",
    href: "/case-studies/ai-2025-advanced-automation-success",
    category: "Case Study",
    readTime: "15 min",
    views: "12.4K",
    trend: "up"
  },
  {
    title: "AI Implementation Playbook",
    description: "150-page comprehensive guide with templates and checklists",
    href: "/resources/ai-automation-implementation-playbook-2025",
    category: "Resource",
    readTime: "45 min",
    views: "8.9K",
    trend: "up",
    isNew: true
  },
  {
    title: "AI 2025 Breakthrough Innovations",
    description: "Quantum AI, brain-computer interfaces, and AGI breakthroughs",
    href: "/blog/ai-2025-breakthrough-innovations",
    category: "Innovation",
    readTime: "28 min",
    views: "15.2K",
    trend: "stable"
  },
  {
    title: "AI Cybersecurity Revolution",
    description: "Advanced threat detection and automated security responses",
    href: "/blog/ai-2025-cybersecurity-revolution",
    category: "Security",
    readTime: "20 min",
    views: "11.8K",
    trend: "up"
  }
];

export default function TrendingContentWidget() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">🔥 Trending Content</h2>
        <div className="flex items-center text-sm text-gray-500">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Live updates
        </div>
      </div>

      <div className="space-y-4">
        {trendingContent.map((item, index) => (
          <Link key={index} href={item.href} className="group block">
            <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                    {item.title}
                  </h3>
                  {item.isNew && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                      NEW
                    </span>
                  )}
                </div>
                
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-3">
                    <span className="bg-gray-100 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span>{item.readTime}</span>
                    <span>{item.views} views</span>
                  </div>
                  
                  <div className="flex items-center">
                    {item.trend === 'up' && (
                      <span className="text-green-500 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        Trending
                      </span>
                    )}
                    {item.trend === 'stable' && (
                      <span className="text-gray-400 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        Stable
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <Link
          href="/content-showcase"
          className="block text-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          View All Trending Content →
        </Link>
      </div>
    </div>
  );
}