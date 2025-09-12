import React from 'react';
import Link from 'next/link';

export default function TrendingContentWidget() {
  const trendingContent = [
    {
      title: "AI 2025 Breakthrough Innovations",
      type: "Article",
      category: "AI & Technology",
      readTime: "25 min",
      status: "New",
      href: "/blog/ai-2025-breakthrough-innovations",
      icon: "🚀",
      description: "Multimodal AI, Quantum AI, Neural Interfaces, and Advanced Robotics",
      views: "12.5K",
      trending: true
    },
    {
      title: "Fortune 500 AI Success Story",
      type: "Case Study",
      category: "Success Stories",
      readTime: "18 min",
      status: "Hot",
      href: "/case-studies/ai-transformation-fortune-500-success-2025",
      icon: "🏆",
      description: "$50M savings, 300% ROI, complete transformation story",
      views: "8.2K",
      trending: true
    },
    {
      title: "AI Productivity Automation 2025",
      type: "Article",
      category: "AI & Automation",
      readTime: "15 min",
      status: "Trending",
      href: "/blog/ai-productivity-automation-2025",
      icon: "⚡",
      description: "300% productivity gains, 40% cost reduction",
      views: "15.7K",
      trending: true
    },
    {
      title: "AI Implementation Master Guide",
      type: "Resource",
      category: "Free Resources",
      readTime: "150+ pages",
      status: "Popular",
      href: "/resources/ai-implementation-master-guide-2025",
      icon: "📚",
      description: "150+ pages of templates, checklists, and frameworks",
      views: "22.3K",
      trending: false
    },
    {
      title: "AI Enterprise Transformation 2025",
      type: "Article",
      category: "Enterprise AI",
      readTime: "20 min",
      status: "New",
      href: "/blog/ai-enterprise-transformation-2025",
      icon: "🏢",
      description: "Complete guide to enterprise-wide AI transformation",
      views: "9.8K",
      trending: true
    },
    {
      title: "AI Manufacturing Automation Success",
      type: "Case Study",
      category: "Manufacturing",
      readTime: "12 min",
      status: "Rising",
      href: "/case-studies/ai-manufacturing-automation-success-2025",
      icon: "🏭",
      description: "40% cost reduction and 60% faster processing",
      views: "6.4K",
      trending: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-green-100 text-green-800';
      case 'Hot':
        return 'bg-red-100 text-red-800';
      case 'Trending':
        return 'bg-blue-100 text-blue-800';
      case 'Popular':
        return 'bg-purple-100 text-purple-800';
      case 'Rising':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">🔥 Trending Content</h3>
        <Link 
          href="/content-showcase" 
          className="text-blue-600 hover:text-blue-700 font-medium text-sm"
        >
          View All →
        </Link>
      </div>

      <div className="space-y-4">
        {trendingContent.map((item, index) => (
          <Link key={index} href={item.href} className="group block">
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="text-2xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                  <span className="text-xs text-gray-500">{item.type}</span>
                  {item.trending && (
                    <span className="text-xs text-orange-600 font-medium">🔥 Trending</span>
                  )}
                </div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>{item.category}</span>
                  <span>•</span>
                  <span>{item.readTime}</span>
                  <span>•</span>
                  <span>{item.views} views</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">25+</div>
            <div className="text-sm text-gray-600">New Articles</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">15+</div>
            <div className="text-sm text-gray-600">Case Studies</div>
          </div>
        </div>
      </div>
    </div>
  );
}