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

const ContentShowcase: React.FC<ContentShowcaseProps> = ({
  title,
  subtitle,
  items,
  variant = 'default',
  className = '',
  showViewAll = false,
  viewAllHref = '#',
  viewAllText = 'View All',
  columns = 3
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return {
          container: 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200',
          title: 'text-blue-900',
          subtitle: 'text-blue-700'
        };
      case 'trending':
        return {
          container: 'bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200',
          title: 'text-orange-900',
          subtitle: 'text-orange-700'
        };
      default:
        return {
          container: 'bg-white border border-gray-200',
          title: 'text-gray-900',
          subtitle: 'text-gray-600'
        };
    }
  };

  const styles = getVariantStyles();

  const getGridCols = () => {
    switch (columns) {
      case 2: return 'md:grid-cols-2';
      case 4: return 'md:grid-cols-2 lg:grid-cols-4';
      default: return 'md:grid-cols-2 lg:grid-cols-3';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'resource': return '📚';
      case 'case-study': return '📊';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'resource': return 'bg-green-100 text-green-800';
      case 'case-study': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`rounded-xl p-6 ${styles.container} ${className}`}>
      <div className="mb-6">
        <h2 className={`text-2xl font-bold ${styles.title} mb-2`}>
          {title}
        </h2>
        <p className={`${styles.subtitle}`}>
          {subtitle}
        </p>
      </div>

      <div className={`grid gap-6 ${getGridCols()}`}>
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group block bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">
                    {item.icon || getTypeIcon(item.type)}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                    {item.type.replace('-', ' ')}
                  </span>
                </div>
                {item.isNew && (
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                    NEW
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  {item.readTime && (
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{item.readTime}</span>
                    </div>
                  )}
                  {item.category && (
                    <div className="flex items-center space-x-1">
                      <Tag className="w-3 h-3" />
                      <span>{item.category}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-1 text-blue-600 group-hover:text-blue-700">
                  <span className="text-sm font-medium">Read</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {item.metrics && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-1 text-xs font-medium text-green-600">
                    <Zap className="w-3 h-3" />
                    <span>{item.metrics}</span>
                  </div>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {showViewAll && (
        <div className="mt-6 text-center">
          <Link
            href={viewAllHref}
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <span>{viewAllText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
};

// Featured content for homepage
export const featuredContent = [
  {
    title: "The Generative AI Revolution: Transforming Business in 2025",
    description: "Explore how generative AI is revolutionizing business operations, from content creation to customer service automation with practical implementation strategies.",
    href: "/blog/ai-2025-generative-ai-revolution",
    icon: "🎨",
    readTime: "22 min read",
    category: "Generative AI",
    isNew: true,
    badge: "HOT",
    badgeColor: "bg-purple-100 text-purple-800",
    metrics: "10x Content Output"
  },
  {
    title: "Ethical AI Governance: Building Trust in the Age of Artificial Intelligence",
    description: "Navigate the complex landscape of AI ethics and governance. Learn how to implement responsible AI practices and build trustworthy AI systems.",
    href: "/blog/ai-2025-ethical-ai-governance",
    icon: "⚖️",
    readTime: "25 min read",
    category: "AI Ethics",
    isNew: true,
    badge: "CRITICAL",
    badgeColor: "bg-green-100 text-green-800",
    metrics: "95% Trust Score"
  },
  {
    title: "Edge Computing Revolution: Bringing AI to the Edge in 2025",
    description: "Discover how edge computing is revolutionizing AI deployment, enabling real-time processing and unlocking new possibilities for IoT and smart cities.",
    href: "/blog/ai-2025-edge-computing-revolution",
    icon: "⚡",
    readTime: "20 min read",
    category: "Edge Computing",
    isNew: true,
    badge: "BREAKTHROUGH",
    badgeColor: "bg-orange-100 text-orange-800",
    metrics: "90% Latency Reduction"
  },
  {
    title: "AI 2025 Breakthrough Innovations: The Future is Here",
    description: "Discover the groundbreaking AI innovations that will reshape industries in 2025. From quantum-enhanced AI to brain-computer interfaces.",
    href: "/blog/ai-2025-breakthrough-innovations",
    icon: "🚀",
    readTime: "28 min read",
    category: "AI Innovation",
    featured: true,
    badge: "FUTURE",
    badgeColor: "bg-blue-100 text-blue-800",
    metrics: "Next Decade Tech"
  },
  {
    title: "AI Enterprise Transformation 2025: Complete Implementation Guide",
    description: "Transform your enterprise with AI in 2025. Learn proven strategies, implementation frameworks, and real-world case studies for successful AI transformation.",
    href: "/blog/ai-2025-enterprise-transformation",
    icon: "🏢",
    readTime: "25 min read",
    category: "Enterprise AI",
    featured: true,
    isNew: true,
    badge: "FEATURED",
    badgeColor: "bg-indigo-100 text-indigo-800",
    metrics: "40% Productivity Boost"
  },
  {
    title: "AI Trends 2025: Revolutionary Predictions & Market Analysis",
    description: "Discover the most impactful AI trends shaping 2025. Expert predictions, market analysis, and actionable insights for businesses and developers.",
    href: "/blog/ai-2025-trends-predictions",
    icon: "📈",
    readTime: "18 min read",
    category: "AI Trends",
    featured: true,
    isNew: true,
    badge: "TRENDING",
    badgeColor: "bg-purple-100 text-purple-800",
    metrics: "$1.8T Market Size"
  },
  {
    title: "AI Retail Transformation Success: 300% Revenue Growth Case Study",
    description: "Discover how a global retail giant achieved 300% revenue growth and 85% cost reduction through comprehensive AI transformation. Real results, proven strategies.",
    href: "/case-studies/ai-retail-transformation-success-2025",
    icon: "🛍️",
    readTime: "15 min read",
    category: "Case Study",
    featured: true,
    isNew: true,
    badge: "SUCCESS",
    badgeColor: "bg-emerald-100 text-emerald-800",
    metrics: "300% Revenue Growth"
  },
  {
    title: "AI Implementation Complete Guide 2025: 200-Page Master Playbook",
    description: "The most comprehensive AI implementation guide for 2025. 200+ pages of proven strategies, frameworks, templates, and real-world case studies for successful AI transformation.",
    href: "/resources/ai-implementation-complete-guide-2025",
    icon: "📚",
    readTime: "200+ pages",
    category: "Resource Guide",
    featured: true,
    isNew: true,
    badge: "MASTER",
    badgeColor: "bg-orange-100 text-orange-800",
    metrics: "50+ Case Studies"
  }
];

// Trending content
export const trendingContent = [
  {
    title: "AI Trends 2025: Revolutionary Predictions & Market Analysis",
    description: "Discover the most impactful AI trends shaping 2025. Expert predictions, market analysis, and actionable insights for businesses and developers.",
    href: "/blog/ai-2025-trends-predictions",
    icon: "📈",
    readTime: "18 min read",
    category: "AI Trends",
    isTrending: true,
    isNew: true,
    badge: "TRENDING",
    badgeColor: "bg-purple-100 text-purple-800",
    metrics: "$1.8T Market Size"
  },
  {
    title: "AI Enterprise Transformation 2025: Complete Implementation Guide",
    description: "Transform your enterprise with AI in 2025. Learn proven strategies, implementation frameworks, and real-world case studies for successful AI transformation.",
    href: "/blog/ai-2025-enterprise-transformation",
    icon: "🏢",
    readTime: "25 min read",
    category: "Enterprise AI",
    isTrending: true,
    isNew: true,
    badge: "FEATURED",
    badgeColor: "bg-indigo-100 text-indigo-800",
    metrics: "40% Productivity Boost"
  },
  {
    title: "The Generative AI Revolution: Transforming Business in 2025",
    description: "Explore how generative AI is revolutionizing business operations, from content creation to customer service automation with practical implementation strategies.",
    href: "/blog/ai-2025-generative-ai-revolution",
    icon: "🎨",
    readTime: "22 min read",
    category: "Generative AI",
    isTrending: true,
    badge: "TRENDING",
    badgeColor: "bg-purple-100 text-purple-800",
    metrics: "10x Content Output"
  },
  {
    title: "Edge Computing Revolution: Bringing AI to the Edge in 2025",
    description: "Discover how edge computing is revolutionizing AI deployment, enabling real-time processing and unlocking new possibilities for IoT and smart cities.",
    href: "/blog/ai-2025-edge-computing-revolution",
    icon: "⚡",
    readTime: "20 min read",
    category: "Edge Computing",
    isTrending: true,
    badge: "BREAKTHROUGH",
    badgeColor: "bg-orange-100 text-orange-800",
    metrics: "90% Latency Reduction"
  },
  {
    title: "Ethical AI Governance: Building Trust in the Age of Artificial Intelligence",
    description: "Navigate the complex landscape of AI ethics and governance. Learn how to implement responsible AI practices and build trustworthy AI systems.",
    href: "/blog/ai-2025-ethical-ai-governance",
    icon: "⚖️",
    readTime: "25 min read",
    category: "AI Ethics",
    isTrending: true,
    badge: "CRITICAL",
    badgeColor: "bg-green-100 text-green-800",
    metrics: "95% Trust Score"
  }
];

// Latest content
export const latestContent = [
  {
    title: "The Generative AI Revolution: Transforming Business in 2025",
    description: "Explore how generative AI is revolutionizing business operations, from content creation to customer service automation with practical implementation strategies.",
    href: "/blog/ai-2025-generative-ai-revolution",
    icon: "🎨",
    readTime: "22 min read",
    category: "Generative AI",
    isNew: true,
    badge: "NEW",
    badgeColor: "bg-purple-100 text-purple-800",
    metrics: "10x Content Output"
  },
  {
    title: "Ethical AI Governance: Building Trust in the Age of Artificial Intelligence",
    description: "Navigate the complex landscape of AI ethics and governance. Learn how to implement responsible AI practices and build trustworthy AI systems.",
    href: "/blog/ai-2025-ethical-ai-governance",
    icon: "⚖️",
    readTime: "25 min read",
    category: "AI Ethics",
    isNew: true,
    badge: "NEW",
    badgeColor: "bg-green-100 text-green-800",
    metrics: "95% Trust Score"
  },
  {
    title: "Edge Computing Revolution: Bringing AI to the Edge in 2025",
    description: "Discover how edge computing is revolutionizing AI deployment, enabling real-time processing and unlocking new possibilities for IoT and smart cities.",
    href: "/blog/ai-2025-edge-computing-revolution",
    icon: "⚡",
    readTime: "20 min read",
    category: "Edge Computing",
    isNew: true,
    badge: "NEW",
    badgeColor: "bg-orange-100 text-orange-800",
    metrics: "90% Latency Reduction"
  }
];

export default ContentShowcase;