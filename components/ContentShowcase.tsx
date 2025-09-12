import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Tag, Star, Zap, Globe, Leaf } from 'lucide-react';

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
}

interface ContentShowcaseProps {
  title: string;
  subtitle: string;
  items: ContentItem[];
  variant?: 'default' | 'featured' | 'trending';
  className?: string;
  showViewAll?: boolean;
  viewAllHref?: string;
  viewAllText?: string;
  columns?: 2 | 3 | 4;
}

export default function ContentShowcase({
  title,
  subtitle,
  items,
  variant = 'default',
  className = '',
  showViewAll = true,
  viewAllHref = '/content-showcase',
  viewAllText = 'View All',
  columns = 3
}: ContentShowcaseProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return {
          container: 'bg-gradient-to-br from-blue-50 to-indigo-50',
          title: 'text-gray-900',
          subtitle: 'text-gray-600'
        };
      case 'trending':
        return {
          container: 'bg-gradient-to-br from-orange-50 to-red-50',
          title: 'text-gray-900',
          subtitle: 'text-gray-600'
        };
      default:
        return {
          container: 'bg-white',
          title: 'text-gray-900',
          subtitle: 'text-gray-600'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <section className={`py-16 ${styles.container} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${styles.title}`}>
            {title}
          </h2>
          <p className={`text-lg ${styles.subtitle} max-w-3xl mx-auto`}>
            {subtitle}
          </p>
        </div>

        <div className={`grid gap-8 ${
          columns === 2 ? 'md:grid-cols-2' : 
          columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 
          'md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {items.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-200 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="flex gap-2">
                    {item.badge && (
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    )}
                    {item.featured && (
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    )}
                    {item.isTrending && (
                      <Zap className="w-4 h-4 text-orange-500" />
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  {item.isNew && (
                    <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {item.readTime}
                  </div>
                  {item.metrics && (
                    <div className="text-sm font-medium text-green-600">
                      {item.metrics}
                    </div>
                  )}
                </div>

                <div className="mt-4 flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-12">
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {viewAllText}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

// Predefined content collections for easy use
export const featuredContent = [
  {
    title: "AI Automation Enterprise Guide 2025",
    description: "Complete implementation strategy for enterprise-scale AI automation with proven 300% ROI frameworks",
    href: "/resources/ai-automation-enterprise-guide-2025",
    icon: "⚡",
    readTime: "45 min read",
    category: "Enterprise AI",
    isNew: true,
    badge: "NEW",
    badgeColor: "bg-blue-100 text-blue-800",
    metrics: "300% ROI"
  },
  {
    title: "AI Sustainability Transformation Guide 2025",
    description: "Transform your business with sustainable AI practices and reduce carbon footprint by 75%",
    href: "/resources/ai-sustainability-transformation-guide-2025",
    icon: "🌱",
    readTime: "38 min read",
    category: "Sustainable AI",
    isNew: true,
    badge: "GREEN",
    badgeColor: "bg-green-100 text-green-800",
    metrics: "75% Carbon Reduction"
  },
  {
    title: "AI Automation: Global Logistics Success",
    description: "How a Fortune 500 logistics company achieved 450% ROI and $85M annual savings",
    href: "/case-studies/ai-automation-global-logistics-2025",
    icon: "🚚",
    readTime: "12 min read",
    category: "Case Study",
    isNew: true,
    badge: "SUCCESS",
    badgeColor: "bg-green-100 text-green-800",
    metrics: "450% ROI"
  },
  {
    title: "AI Enterprise Transformation 2026",
    description: "Complete implementation guide with 400% ROI case studies from Fortune 500 companies",
    href: "/resources/ai-enterprise-transformation-2026",
    icon: "🏢",
    readTime: "25 min read",
    category: "Enterprise AI",
    featured: true
  }
];

export const trendingContent = [
  {
    title: "AI Automation: Global Logistics Success",
    description: "How a Fortune 500 logistics company achieved 450% ROI and $85M annual savings",
    href: "/case-studies/ai-automation-global-logistics-2025",
    icon: "🚚",
    readTime: "12 min read",
    category: "Case Study",
    isTrending: true,
    badge: "TRENDING",
    badgeColor: "bg-orange-100 text-orange-800",
    metrics: "450% ROI"
  },
  {
    title: "AI Automation Enterprise Guide 2025",
    description: "Complete implementation strategy for enterprise-scale AI automation with 300% average ROI",
    href: "/resources/ai-automation-enterprise-guide-2025",
    icon: "⚡",
    readTime: "45 min read",
    category: "Enterprise AI",
    isTrending: true,
    badge: "POPULAR",
    badgeColor: "bg-blue-100 text-blue-800",
    metrics: "300% ROI"
  },
  {
    title: "AI Sustainability Transformation Guide 2025",
    description: "Transform your business with sustainable AI practices and reduce carbon footprint by 75%",
    href: "/resources/ai-sustainability-transformation-guide-2025",
    icon: "🌱",
    readTime: "38 min read",
    category: "Sustainable AI",
    isTrending: true,
    badge: "GREEN",
    badgeColor: "bg-green-100 text-green-800",
    metrics: "75% Carbon Reduction"
  }
];

export const latestContent = [
  {
    title: "AI Automation: Global Logistics Success",
    description: "How a Fortune 500 logistics company achieved 450% ROI and $85M annual savings",
    href: "/case-studies/ai-automation-global-logistics-2025",
    icon: "🚚",
    readTime: "12 min read",
    category: "Case Study",
    isNew: true,
    badge: "NEW",
    badgeColor: "bg-green-100 text-green-800"
  },
  {
    title: "AI Sustainability Transformation Guide 2025",
    description: "Transform your business with sustainable AI practices and reduce carbon footprint by 75%",
    href: "/resources/ai-sustainability-transformation-guide-2025",
    icon: "🌱",
    readTime: "38 min read",
    category: "Sustainable AI",
    isNew: true,
    badge: "NEW",
    badgeColor: "bg-green-100 text-green-800"
  },
  {
    title: "AI Automation Enterprise Guide 2025",
    description: "Complete implementation strategy for enterprise-scale AI automation with 300% average ROI",
    href: "/resources/ai-automation-enterprise-guide-2025",
    icon: "⚡",
    readTime: "45 min read",
    category: "Enterprise AI",
    isNew: true,
    badge: "NEW",
    badgeColor: "bg-blue-100 text-blue-800"
  }
];