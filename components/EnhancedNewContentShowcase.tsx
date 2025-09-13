import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Tag, Star, TrendingUp, BookOpen, Users, Zap, Award, Target } from 'lucide-react';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'resource' | 'case-study';
  readTime?: string;
  isNew?: boolean;
  icon?: string;
  category?: string;
  featured?: boolean;
  isTrending?: boolean;
  badge?: string;
  badgeColor?: string;
  metrics?: string;
  stats?: string;
}

const newContentItems: ContentItem[] = [
  {
    title: "AI Enterprise Transformation 2025: Complete Implementation Guide",
    description: "Transform your enterprise with AI in 2025. Learn proven strategies, implementation frameworks, and real-world case studies for successful AI transformation.",
    href: "/blog/ai-2025-enterprise-transformation",
    type: "blog",
    readTime: "25 min read",
    category: "Enterprise AI",
    isNew: true,
    featured: true,
    icon: "🏢",
    badge: "FEATURED",
    badgeColor: "bg-indigo-100 text-indigo-800",
    metrics: "40% Productivity Boost",
    stats: "5-Phase Framework"
  },
  {
    title: "AI Trends 2025: Revolutionary Predictions & Market Analysis",
    description: "Discover the most impactful AI trends shaping 2025. Expert predictions, market analysis, and actionable insights for businesses and developers.",
    href: "/blog/ai-2025-trends-predictions",
    type: "blog",
    readTime: "18 min read",
    category: "AI Trends",
    isNew: true,
    isTrending: true,
    icon: "📈",
    badge: "TRENDING",
    badgeColor: "bg-purple-100 text-purple-800",
    metrics: "$1.8T Market Size",
    stats: "Top 10 Trends"
  },
  {
    title: "AI Retail Transformation Success: 300% Revenue Growth Case Study",
    description: "Discover how a global retail giant achieved 300% revenue growth and 85% cost reduction through comprehensive AI transformation. Real results, proven strategies.",
    href: "/case-studies/ai-retail-transformation-success-2025",
    type: "case-study",
    readTime: "15 min read",
    category: "Case Study",
    isNew: true,
    featured: true,
    icon: "🛍️",
    badge: "SUCCESS",
    badgeColor: "bg-emerald-100 text-emerald-800",
    metrics: "300% Revenue Growth",
    stats: "Real Results"
  },
  {
    title: "AI Implementation Complete Guide 2025: 200-Page Master Playbook",
    description: "The most comprehensive AI implementation guide for 2025. 200+ pages of proven strategies, frameworks, templates, and real-world case studies for successful AI transformation.",
    href: "/resources/ai-implementation-complete-guide-2025",
    type: "resource",
    readTime: "200+ pages",
    category: "Resource Guide",
    isNew: true,
    featured: true,
    icon: "📚",
    badge: "MASTER",
    badgeColor: "bg-orange-100 text-orange-800",
    metrics: "50+ Case Studies",
    stats: "30+ Templates"
  }
];

const EnhancedNewContentShowcase: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 mb-6">
            <Star className="w-4 h-4 text-indigo-600 mr-2" />
            <span className="text-sm font-medium text-indigo-800">Fresh Content</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest AI Insights & Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our newest content featuring expert analysis, proven strategies, and real-world success stories to accelerate your AI transformation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newContentItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              {/* Header with badge */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex flex-col items-end space-y-2">
                    {item.isNew && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        NEW
                      </span>
                    )}
                    {item.badge && (
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{item.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Tag className="w-3 h-3 mr-1" />
                    <span>{item.category}</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{item.metrics}</div>
                      <div className="text-xs text-gray-500">{item.stats}</div>
                    </div>
                    {item.isTrending && (
                      <TrendingUp className="w-4 h-4 text-purple-500" />
                    )}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t">
                <Link 
                  href={item.href}
                  className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                >
                  {item.type === 'resource' ? 'Download Guide' : 
                   item.type === 'case-study' ? 'View Case Study' : 'Read Article'}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg mb-6 text-indigo-100">
              Get expert guidance, proven strategies, and comprehensive resources to accelerate your AI transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/content-showcase"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore All Content
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                href="/contact"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Get Expert Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedNewContentShowcase;