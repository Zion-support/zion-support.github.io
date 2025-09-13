import React from 'react';
import Link from 'next/link';

interface TrendingItem {
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'guide';
  readTime: string;
  icon: string;
  views: string;
  trending: boolean;
}

const trendingItems: TrendingItem[] = [
  {
    title: "LLM Optimization Masterclass",
    description: "10x performance with advanced techniques: prompt engineering, fine-tuning, RAG optimization",
    href: "/blog/ai-2025-llm-optimization-masterclass",
    type: "guide",
    readTime: "25 min read",
    icon: "🚀",
    views: "12.5K views",
    trending: true
  },
  {
    title: "AI Automation Enterprise Guide",
    description: "Complete implementation guide for 300-500% efficiency gains through strategic AI automation",
    href: "/blog/ai-2025-automation-enterprise-transformation",
    type: "guide",
    readTime: "30 min read",
    icon: "🤖",
    views: "8.9K views",
    trending: true
  },
  {
    title: "$2.8B Unicorn Transformation",
    description: "Global tech unicorn achieves 340% ROI and market leadership through comprehensive AI transformation",
    href: "/case-studies/ai-2025-global-tech-unicorn-transformation",
    type: "case-study",
    readTime: "20 min read",
    icon: "🏆",
    views: "15.2K views",
    trending: true
  },
  {
    title: "Advanced AI Agents Revolution",
    description: "Autonomous intelligence systems with 300-500% efficiency improvements and multi-agent collaboration",
    href: "/blog/ai-2025-advanced-ai-agents",
    type: "blog",
    readTime: "15 min read",
    icon: "🤖",
    views: "22.1K views",
    trending: true
  },
  {
    title: "Quantum Computing Revolution",
    description: "10,000x speedups in optimization with breakthrough quantum algorithms transforming business operations",
    href: "/blog/quantum-computing-business-revolution-2025",
    type: "blog",
    readTime: "18 min read",
    icon: "⚡",
    views: "18.7K views",
    trending: true
  },
  {
    title: "$3.2B Fortune 500 Success",
    description: "Fortune 500 transformation with 45% efficiency gains and 340% ROI through quantum AI implementation",
    href: "/case-studies/ai-2025-fortune-500-quantum-transformation",
    type: "case-study",
    readTime: "22 min read",
    icon: "🏆",
    views: "11.3K views",
    trending: true
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'blog':
      return 'bg-blue-100 text-blue-800';
    case 'case-study':
      return 'bg-purple-100 text-purple-800';
    case 'guide':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
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

export default function TrendingContentCarousel() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-100 text-red-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">🔥 TRENDING NOW</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Most Popular AI Content This Week
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most engaging and impactful AI content that's capturing attention 
            and driving real business results across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingItems.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.trending && (
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                        🔥 TRENDING
                      </span>
                    )}
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{item.readTime}</span>
                  <span>{item.views}</span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-blue-600 group-hover:text-blue-800 font-medium">
                    <span className="text-sm">Read More</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <span>Explore All Trending Content</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}