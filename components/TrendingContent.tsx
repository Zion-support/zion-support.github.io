import React from 'react';
import Link from 'next/link';

export default function TrendingContent() {
  const trendingContent = [
    {
      title: "AI 2025 Predictions",
      description: "The future of AI in business - key trends and predictions",
      href: "/blog/ai-2025-predictions",
      type: "Article",
      readTime: "20 min read",
      icon: "🔮",
      category: "Trends",
      views: "12.3K",
      trending: true
    },
    {
      title: "AI Automation Trends 2025",
      description: "Transform your business operations with intelligent automation",
      href: "/blog/ai-automation-trends-2025",
      type: "Article",
      readTime: "16 min read",
      icon: "⚡",
      category: "Automation",
      views: "8.7K",
      trending: true
    },
    {
      title: "AI Retail Success Story",
      description: "300% revenue growth and 60% cost reduction case study",
      href: "/case-studies/ai-retail-optimization-success-2025",
      type: "Case Study",
      readTime: "18 min read",
      icon: "🏪",
      category: "Retail",
      views: "6.2K",
      trending: false
    },
    {
      title: "AI Implementation Playbook",
      description: "Step-by-step guide to successful AI implementation",
      href: "/resources/ai-implementation-playbook-2025",
      type: "Resource",
      readTime: "45 min read",
      icon: "📚",
      category: "Implementation",
      views: "15.1K",
      trending: true
    },
    {
      title: "AI Workforce Transformation",
      description: "Complete guide to reskilling and preparing for the AI era",
      href: "/blog/ai-workforce-transformation-2025",
      type: "Article",
      readTime: "18 min read",
      icon: "👥",
      category: "Workforce",
      views: "9.4K",
      trending: false
    },
    {
      title: "AI Healthcare Revolution",
      description: "How AI is transforming patient care and medical diagnosis",
      href: "/blog/ai-healthcare-revolution-2025",
      type: "Article",
      readTime: "22 min read",
      icon: "🏥",
      category: "Healthcare",
      views: "7.8K",
      trending: true
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-orange-100 text-orange-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📈 TRENDING NOW</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Most Popular Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our most viewed and shared content this month. 
            Join thousands of professionals learning from these insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {trendingContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex items-center gap-2">
                    {item.trending && (
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                        🔥 TRENDING
                      </span>
                    )}
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                      {item.type}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span>👁️ {item.views}</span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-lg"
          >
            View All Trending Content
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}