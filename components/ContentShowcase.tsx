import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Tag, Star } from 'lucide-react';

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
}

const featuredContent: ContentItem[] = [
  {
    title: "AI 2025 Revolutionary Breakthroughs: The Future is Here",
    description: "Discover the most revolutionary AI breakthroughs of 2025 that are reshaping industries, transforming businesses, and creating unprecedented opportunities for innovation and growth.",
    href: "/blog/ai-2025-revolutionary-breakthroughs",
    category: "AI Innovation",
    readTime: "15 min read",
    isNew: true,
    icon: "🚀",
    metrics: "Revolutionary insights"
  },
  {
    title: "AI Manufacturing Transformation: $2.3B Cost Savings Case Study",
    description: "Discover how a Fortune 500 manufacturing company achieved $2.3B in cost savings and 400% efficiency gains through comprehensive AI transformation across their global operations.",
    href: "/case-studies/ai-manufacturing-transformation-2025",
    category: "Case Study",
    readTime: "12 min read",
    isNew: true,
    icon: "🏭",
    metrics: "$2.3B savings achieved"
  },
  {
    title: "AI Enterprise Transformation Playbook 2025: Complete Implementation Guide",
    description: "Master AI transformation with our comprehensive 200-page playbook. Step-by-step framework, checklists, templates, and proven strategies for successful enterprise AI implementation.",
    href: "/resources/ai-enterprise-transformation-playbook-2025",
    category: "Implementation Guide",
    readTime: "200 pages",
    isNew: true,
    icon: "📚",
    metrics: "95% success rate"
  },
  {
    title: "AI Business Automation 2025: Complete Implementation Guide",
    description: "Transform your business operations with AI automation. Learn proven strategies to boost productivity by 40% and reduce costs by 60% in 2025.",
    href: "/blog/ai-business-automation-2025",
    category: "AI & Automation",
    readTime: "12 min read",
    isNew: false,
    icon: "🤖",
    metrics: "40% productivity boost"
  },
  {
    title: "AI Startup Funding Playbook 2025: From Seed to Series A",
    description: "Master AI startup funding with our comprehensive playbook. Learn proven strategies to secure $47B+ in AI funding, with real examples and pitch templates.",
    href: "/blog/ai-startup-funding-playbook-2025",
    category: "Startup Strategy",
    readTime: "22 min read",
    isNew: false,
    icon: "💰",
    metrics: "$47B+ funding insights"
  },
  {
    title: "AI Financial Services Transformation: $50M Cost Savings Case Study",
    description: "Discover how a leading financial services company achieved $50M cost savings and 300% efficiency gains through comprehensive AI transformation.",
    href: "/case-studies/ai-financial-services-transformation-2025",
    category: "Case Study",
    readTime: "18 min read",
    isNew: false,
    icon: "🏦",
    metrics: "$50M savings achieved"
  }
];

const trendingContent: ContentItem[] = [
  {
    title: "AI 2025 Revolutionary Breakthroughs: The Future is Here",
    description: "Discover the most revolutionary AI breakthroughs of 2025 that are reshaping industries and creating unprecedented opportunities.",
    href: "/blog/ai-2025-revolutionary-breakthroughs",
    category: "AI Innovation",
    readTime: "15 min read",
    isTrending: true,
    icon: "🚀",
    metrics: "Trending #1"
  },
  {
    title: "AI Manufacturing Transformation: $2.3B Cost Savings Case Study",
    description: "Fortune 500 manufacturing company achieved $2.3B in cost savings through AI transformation.",
    href: "/case-studies/ai-manufacturing-transformation-2025",
    category: "Case Study",
    readTime: "12 min read",
    isTrending: true,
    icon: "🏭",
    metrics: "Trending #2"
  },
  {
    title: "AI Enterprise Transformation Playbook 2025",
    description: "Comprehensive 200-page playbook for successful enterprise AI implementation.",
    href: "/resources/ai-enterprise-transformation-playbook-2025",
    category: "Implementation Guide",
    readTime: "200 pages",
    isTrending: true,
    icon: "📚",
    metrics: "Trending #3"
  }
];

const latestContent: ContentItem[] = [
  {
    title: "AI 2025 Revolutionary Breakthroughs: The Future is Here",
    description: "Discover the most revolutionary AI breakthroughs of 2025 that are reshaping industries and creating unprecedented opportunities.",
    href: "/blog/ai-2025-revolutionary-breakthroughs",
    category: "AI Innovation",
    readTime: "15 min read",
    isNew: true,
    icon: "🚀"
  },
  {
    title: "AI Manufacturing Transformation: $2.3B Cost Savings Case Study",
    description: "Fortune 500 manufacturing company achieved $2.3B in cost savings through AI transformation.",
    href: "/case-studies/ai-manufacturing-transformation-2025",
    category: "Case Study",
    readTime: "12 min read",
    isNew: true,
    icon: "🏭"
  },
  {
    title: "AI Enterprise Transformation Playbook 2025",
    description: "Comprehensive 200-page playbook for successful enterprise AI implementation.",
    href: "/resources/ai-enterprise-transformation-playbook-2025",
    category: "Implementation Guide",
    readTime: "200 pages",
    isNew: true,
    icon: "📚"
  }
];

export default function ContentShowcase({
  title,
  subtitle,
  items,
  variant = 'default',
  className = '',
  showViewAll = true,
  viewAllHref = '/blog'
}: ContentShowcaseProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return {
          container: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white',
          badge: 'bg-white bg-opacity-20',
          badgeText: 'text-white',
          card: 'bg-white bg-opacity-10 backdrop-blur-sm border-white border-opacity-20',
          cardHover: 'hover:bg-opacity-20',
          title: 'text-white',
          subtitle: 'text-indigo-100',
          text: 'text-white',
          link: 'text-indigo-200 hover:text-white'
        };
      case 'trending':
        return {
          container: 'bg-gradient-to-r from-orange-500 to-red-500 text-white',
          badge: 'bg-white bg-opacity-20',
          badgeText: 'text-white',
          card: 'bg-white bg-opacity-10 backdrop-blur-sm border-white border-opacity-20',
          cardHover: 'hover:bg-opacity-20',
          title: 'text-white',
          subtitle: 'text-orange-100',
          text: 'text-white',
          link: 'text-orange-200 hover:text-white'
        };
      default:
        return {
          container: 'bg-white',
          badge: 'bg-blue-100',
          badgeText: 'text-blue-800',
          card: 'bg-white border border-gray-200',
          cardHover: 'hover:shadow-lg',
          title: 'text-gray-900',
          subtitle: 'text-gray-600',
          text: 'text-gray-700',
          link: 'text-blue-600 hover:text-blue-800'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <section className={`py-16 ${styles.container} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold ${styles.title} mb-4`}>
            {title}
          </h2>
          <p className={`text-lg ${styles.subtitle} max-w-3xl mx-auto`}>
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`group ${styles.card} ${styles.cardHover} rounded-xl p-6 transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {item.icon && (
                    <span className="text-2xl">{item.icon}</span>
                  )}
                  {item.isNew && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles.badge} ${styles.badgeText}`}>
                      New
                    </span>
                  )}
                  {item.isTrending && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles.badge} ${styles.badgeText}`}>
                      Trending
                    </span>
                  )}
                </div>
                {item.metrics && (
                  <span className={`text-sm font-medium ${styles.link}`}>
                    {item.metrics}
                  </span>
                )}
              </div>

              <h3 className={`text-xl font-semibold ${styles.title} mb-3 group-hover:underline`}>
                {item.title}
              </h3>

              <p className={`${styles.text} mb-4 line-clamp-3`}>
                {item.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm">
                  {item.category && (
                    <span className={`flex items-center ${styles.link}`}>
                      <Tag className="w-4 h-4 mr-1" />
                      {item.category}
                    </span>
                  )}
                  {item.readTime && (
                    <span className={`flex items-center ${styles.text}`}>
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </span>
                  )}
                </div>
                <ArrowRight className={`w-5 h-5 ${styles.link} group-hover:translate-x-1 transition-transform`} />
              </div>
            </Link>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-12">
            <Link
              href={viewAllHref}
              className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${styles.link} border border-current hover:bg-current hover:text-white`}
            >
              View All Content
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export { featuredContent, trendingContent, latestContent };