import React from 'react';
import Link from 'next/link';

export default function TrendingContentWidget() {
  const trendingContent = [
    {
      title: "Advanced AI Agents: The Future of Autonomous Business Operations",
      type: "Blog Post",
      category: "AI Technology",
      readTime: "15 min",
      views: "12.5K",
      trending: true,
      href: "/blog/ai-2025-advanced-ai-agents",
      excerpt: "Discover how advanced AI agents are revolutionizing business operations with autonomous decision-making and multi-modal capabilities."
    },
    {
      title: "Quantum AI Breakthrough: The Next Frontier in Artificial Intelligence",
      type: "Blog Post", 
      category: "Quantum Computing",
      readTime: "18 min",
      views: "8.9K",
      trending: true,
      href: "/blog/ai-2025-quantum-ai-breakthrough",
      excerpt: "Explore the revolutionary intersection of quantum computing and AI, unlocking unprecedented computational power."
    },
    {
      title: "FinTech Unicorn Transformation: $5.2B Valuation Through AI Innovation",
      type: "Case Study",
      category: "Success Stories",
      readTime: "12 min",
      views: "15.2K",
      trending: true,
      href: "/case-studies/ai-2025-fintech-unicorn-transformation",
      excerpt: "How a traditional financial services company became a $5.2B unicorn through strategic AI implementation."
    },
    {
      title: "AI Implementation Success Framework 2025: Complete Guide",
      type: "Resource",
      category: "Implementation",
      readTime: "25 min",
      views: "22.1K",
      trending: true,
      href: "/resources/ai-2025-implementation-success-framework",
      excerpt: "The definitive framework for successful AI implementation in enterprise environments."
    },
    {
      title: "Enterprise AI Governance Master Guide",
      type: "Blog Post",
      category: "AI Governance",
      readTime: "20 min",
      views: "7.3K",
      trending: false,
      href: "/blog/ai-2025-enterprise-ai-governance",
      excerpt: "Learn how to implement proper governance for AI systems in enterprise environments."
    },
    {
      title: "Global Retail Transformation: $2.8B Value Creation",
      type: "Case Study",
      category: "Success Stories",
      readTime: "14 min",
      views: "9.7K",
      trending: false,
      href: "/case-studies/ai-2025-global-retail-transformation-success",
      excerpt: "How AI transformed a global retail giant, creating $2.8B in value and revolutionizing customer experience."
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">🔥 Trending Content</h2>
            <p className="text-blue-100">Most popular articles, case studies, and resources this week</p>
          </div>
          <div className="text-4xl">📈</div>
        </div>
      </div>
      
      {/* Content List */}
      <div className="p-6">
        <div className="space-y-4">
          {trendingContent.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.type === 'Blog Post' ? 'bg-blue-100 text-blue-700' :
                      item.type === 'Case Study' ? 'bg-green-100 text-green-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {item.type}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                      {item.category}
                    </span>
                    {item.trending && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 flex items-center gap-1">
                        🔥 Trending
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {item.views} views
                  </span>
                </div>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                  Read more
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-6 text-center">
          <Link
            href="/content-showcase"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Content
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}