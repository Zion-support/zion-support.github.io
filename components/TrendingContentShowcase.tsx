import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Eye, Star, Clock, Tag } from 'lucide-react';

interface TrendingContentItem {
  title: string;
  description: string;
  href: string;
  category: string;
  readTime: string;
  views: string;
  rating: number;
  isNew?: boolean;
  isTrending?: boolean;
  icon: string;
  badge?: string;
  badgeColor?: string;
}

interface TrendingContentShowcaseProps {
  className?: string;
}

const trendingContent: TrendingContentItem[] = [
  {
    title: "AI Enterprise Adoption Trends 2025: Complete Market Analysis",
    description: "Discover the latest AI enterprise adoption trends for 2025. Learn how Fortune 500 companies are implementing AI, key success factors, and market predictions.",
    href: "/blog/ai-2025-enterprise-adoption-trends",
    category: "Enterprise AI",
    readTime: "15 min read",
    views: "2.3k views",
    rating: 4.9,
    isNew: true,
    isTrending: true,
    icon: "📈",
    badge: "Trending",
    badgeColor: "bg-red-100 text-red-800"
  },
  {
    title: "AI Workflow Automation 2025: Complete Optimization Guide",
    description: "Master AI workflow automation with our comprehensive 2025 guide. Learn proven strategies to optimize business processes, reduce costs by 60%, and boost productivity by 40%.",
    href: "/blog/ai-automation-workflow-optimization-2025",
    category: "AI Automation",
    readTime: "18 min read",
    views: "3.1k views",
    rating: 4.8,
    isNew: true,
    isTrending: true,
    icon: "⚡",
    badge: "New",
    badgeColor: "bg-green-100 text-green-800"
  },
  {
    title: "AI Manufacturing Transformation: $2.8B Cost Savings Case Study",
    description: "Discover how a Fortune 500 manufacturing company achieved $2.8B in cost savings and 45% efficiency gains through comprehensive AI transformation.",
    href: "/case-studies/ai-manufacturing-transformation-2025",
    category: "Case Study",
    readTime: "20 min read",
    views: "4.2k views",
    rating: 4.9,
    isNew: true,
    isTrending: true,
    icon: "🏭",
    badge: "Featured",
    badgeColor: "bg-blue-100 text-blue-800"
  },
  {
    title: "AI Implementation Master Guide 2025: Complete 150-Page Playbook",
    description: "Master AI implementation with our comprehensive 150-page guide. Step-by-step framework, checklists, templates, and proven strategies for successful AI transformation.",
    href: "/resources/ai-implementation-master-guide-2025",
    category: "Resources",
    readTime: "Free Download",
    views: "12.5k downloads",
    rating: 4.9,
    isNew: true,
    isTrending: true,
    icon: "📚",
    badge: "Popular",
    badgeColor: "bg-purple-100 text-purple-800"
  }
];

export default function TrendingContentShowcase({ className = '' }: TrendingContentShowcaseProps) {
  return (
    <div className={`bg-gradient-to-br from-orange-50 to-red-50 py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            TRENDING NOW
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Most Popular Content This Week
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the AI content that's capturing attention and driving results 
            for businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trendingContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  {item.badge && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-1" />
                    <span>{item.category}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{item.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1 text-gray-400" />
                    <span className="text-sm text-gray-500">{item.views}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-500">{item.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/content-showcase" 
            className="inline-flex items-center px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg shadow-lg"
          >
            View All Trending Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}