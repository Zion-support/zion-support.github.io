import React from 'react';
import Link from 'next/link';

interface TrendingItem {
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'tool';
  readTime?: string;
  views?: string;
  trending?: boolean;
}

const trendingContent: TrendingItem[] = [
  {
    title: "AI Trends 2025: Comprehensive Analysis",
    description: "Explore quantum AI breakthroughs, neural interfaces, and enterprise automation strategies shaping 2025.",
    href: "/blog/ai-2025-comprehensive-trends-analysis",
    type: "blog",
    readTime: "15 min",
    views: "2.3k",
    trending: true
  },
  {
    title: "Manufacturing Giant $2.1B Transformation",
    description: "How a Fortune 500 company achieved 400% efficiency gains through strategic AI implementation.",
    href: "/case-studies/ai-2025-manufacturing-giant-transformation",
    type: "case-study",
    readTime: "12 min",
    views: "1.8k",
    trending: true
  },
  {
    title: "AI ROI Calculator",
    description: "Calculate your potential AI investment returns with our interactive calculator tool.",
    href: "/tools/ai-roi-calculator",
    type: "tool",
    readTime: "5 min",
    views: "3.1k",
    trending: true
  },
  {
    title: "LLM Optimization Masterclass",
    description: "Learn how to achieve 10x performance gains with large language models.",
    href: "/blog/ai-2025-llm-optimization-masterclass",
    type: "blog",
    readTime: "20 min",
    views: "4.2k"
  },
  {
    title: "$2.8B Tech Unicorn Success Story",
    description: "How AI transformed a startup into a global tech unicorn.",
    href: "/case-studies/ai-2025-global-tech-unicorn-transformation",
    type: "case-study",
    readTime: "10 min",
    views: "2.7k"
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'blog':
      return '📝';
    case 'case-study':
      return '📊';
    case 'tool':
      return '🧮';
    default:
      return '📄';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'blog':
      return 'bg-blue-100 text-blue-800';
    case 'case-study':
      return 'bg-green-100 text-green-800';
    case 'tool':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function TrendingContentWidget() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Trending Content</h2>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600">Live</span>
        </div>
      </div>

      <div className="space-y-4">
        {trendingContent.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block group hover:bg-gray-50 rounded-lg p-4 transition-colors"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${getTypeColor(item.type)}`}>
                  {getTypeIcon(item.type)}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  {item.trending && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      🔥 Trending
                    </span>
                  )}
                </div>
                
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span className="flex items-center space-x-1">
                    <span>👁️</span>
                    <span>{item.views}</span>
                  </span>
                  {item.readTime && (
                    <span className="flex items-center space-x-1">
                      <span>⏱️</span>
                      <span>{item.readTime}</span>
                    </span>
                  )}
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(item.type)}`}>
                    {item.type === 'case-study' ? 'Case Study' : item.type === 'tool' ? 'Tool' : 'Article'}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <Link
          href="/content-showcase"
          className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
        >
          View All Content
        </Link>
      </div>
    </div>
  );
}