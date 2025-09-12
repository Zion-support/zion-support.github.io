import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'guide';
  readTime: string;
  icon: string;
  badge: string;
  badgeColor: string;
}

const contentItems: ContentItem[] = [
  {
    title: "LLM Optimization Masterclass",
    description: "10x performance with advanced techniques: prompt engineering, fine-tuning, RAG optimization",
    href: "/blog/ai-2025-llm-optimization-masterclass",
    type: "guide",
    readTime: "25 min read",
    icon: "🚀",
    badge: "NEW",
    badgeColor: "bg-green-100 text-green-800"
  },
  {
    title: "AI Automation Enterprise Guide",
    description: "Complete implementation guide for 300-500% efficiency gains through strategic AI automation",
    href: "/blog/ai-2025-automation-enterprise-transformation",
    type: "guide",
    readTime: "30 min read",
    icon: "🤖",
    badge: "HOT",
    badgeColor: "bg-red-100 text-red-800"
  },
  {
    title: "$2.8B Unicorn Transformation",
    description: "Global tech unicorn achieves 340% ROI and market leadership through comprehensive AI transformation",
    href: "/case-studies/ai-2025-global-tech-unicorn-transformation",
    type: "case-study",
    readTime: "20 min read",
    icon: "🏆",
    badge: "$2.8B Value",
    badgeColor: "bg-purple-100 text-purple-800"
  },
  {
    title: "Advanced AI Agents Revolution",
    description: "Autonomous intelligence systems with 300-500% efficiency improvements and multi-agent collaboration",
    href: "/blog/ai-2025-advanced-ai-agents",
    type: "blog",
    readTime: "15 min read",
    icon: "🤖",
    badge: "TRENDING",
    badgeColor: "bg-blue-100 text-blue-800"
  },
  {
    title: "Quantum Computing Revolution",
    description: "10,000x speedups in optimization with breakthrough quantum algorithms transforming business operations",
    href: "/blog/quantum-computing-business-revolution-2025",
    type: "blog",
    readTime: "18 min read",
    icon: "⚡",
    badge: "BREAKTHROUGH",
    badgeColor: "bg-yellow-100 text-yellow-800"
  },
  {
    title: "$3.2B Fortune 500 Success",
    description: "Fortune 500 transformation with 45% efficiency gains and 340% ROI through quantum AI implementation",
    href: "/case-studies/ai-2025-fortune-500-quantum-transformation",
    type: "case-study",
    readTime: "22 min read",
    icon: "🏆",
    badge: "$3.2B Value",
    badgeColor: "bg-green-100 text-green-800"
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'blog':
      return 'text-blue-600';
    case 'case-study':
      return 'text-purple-600';
    case 'guide':
      return 'text-green-600';
    default:
      return 'text-gray-600';
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'blog':
      return 'Article';
    case 'case-study':
      return 'Case Study';
    case 'guide':
      return 'Guide';
    default:
      return 'Content';
  }
};

export default function ContentRecommendationWidget() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Recommended for You</h3>
        <Link 
          href="/content-showcase" 
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          View All →
        </Link>
      </div>
      
      <div className="space-y-4">
        {contentItems.slice(0, 3).map((item, index) => (
          <Link key={index} href={item.href} className="group block">
            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="text-2xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <span className={`text-xs font-medium ${getTypeColor(item.type)}`}>
                    {getTypeLabel(item.type)}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>{item.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <Link 
          href="/content-showcase"
          className="w-full bg-blue-50 text-blue-600 hover:bg-blue-100 text-center py-2 px-4 rounded-lg font-medium transition-colors block"
        >
          Discover More Content
        </Link>
      </div>
    </div>
  );
}