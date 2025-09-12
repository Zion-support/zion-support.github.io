import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Tag, Star, Zap, Globe, Leaf } from 'lucide-react';
<<<<<<< HEAD
import { ArrowRight, Clock, Tag, Star, TrendingUp, Eye, Download } from 'lucide-react';
=======
>>>>>>> cursor/create-and-deploy-new-content-46f8

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
<<<<<<< HEAD
  views?: string;
  downloads?: string;
  rating?: number;
  badge?: string;
  badgeColor?: string;
=======
>>>>>>> cursor/create-and-deploy-new-content-46f8
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
<<<<<<< HEAD
  variant?: 'default' | 'featured' | 'trending' | 'promotional';
  className?: string;
  showViewAll?: boolean;
  viewAllHref?: string;
  showPromotionalBanner?: boolean;
  promotionalText?: string;
  promotionalLink?: string;
  columns?: 2 | 3 | 4;
}

const ContentShowcase: React.FC<ContentShowcaseProps> = ({
=======
  columns?: 2 | 3 | 4;
>>>>>>> cursor/create-and-deploy-new-content-46f8
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
  showViewAll = false,
  viewAllHref = '#',
  viewAllText = 'View All',
  columns = 3
}) => {
  showViewAll = true,
  viewAllHref = '/blog'
}: ContentShowcaseProps) {
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
<<<<<<< HEAD
// Predefined content collections for easy use
export const featuredContent = [
  {
    title: "AI Enterprise Adoption Trends 2025: Complete Market Analysis",
    description: "Discover the latest AI enterprise adoption trends for 2025. Learn how Fortune 500 companies are implementing AI, key success factors, and market predictions.",
    href: "/blog/ai-2025-enterprise-adoption-trends",
    icon: "📈",
    readTime: "15 min read",
    category: "Enterprise AI",
    isNew: true,
    views: "2.3k views",
    rating: 4.9,
    badge: "Trending",
    badgeColor: "bg-red-100 text-red-800"
  },
  {
    title: "AI Workflow Automation 2025: Complete Optimization Guide",
    description: "Master AI workflow automation with our comprehensive 2025 guide. Learn proven strategies to optimize business processes, reduce costs by 60%, and boost productivity by 40%.",
    href: "/blog/ai-automation-workflow-optimization-2025",
    icon: "⚡",
    readTime: "18 min read",
    category: "AI Automation",
    isNew: true,
    views: "3.1k views",
    rating: 4.8,
    badge: "New",
    badgeColor: "bg-green-100 text-green-800"
  },
  {
    title: "AI Manufacturing Transformation: $2.8B Cost Savings Case Study",
    description: "Discover how a Fortune 500 manufacturing company achieved $2.8B in cost savings and 45% efficiency gains through comprehensive AI transformation.",
    href: "/case-studies/ai-manufacturing-transformation-2025",
    icon: "🏭",
    readTime: "20 min read",
    category: "Case Study",
    isNew: true,
    views: "4.2k views",
    rating: 4.9,
    badge: "Featured",
    badgeColor: "bg-blue-100 text-blue-800"
  },
  {
    title: "AI Implementation Master Guide 2025: Complete 150-Page Playbook",
    description: "Master AI implementation with our comprehensive 150-page guide. Step-by-step framework, checklists, templates, and proven strategies for successful AI transformation.",
    href: "/resources/ai-implementation-master-guide-2025",
    icon: "📚",
    readTime: "Free Download",
    category: "Resources",
    isNew: true,
    downloads: "12.5k downloads",
    rating: 4.9,
    badge: "Popular",
    badgeColor: "bg-purple-100 text-purple-800"
  }
];

export const trendingContent = [
  {
    title: "AI Breakthrough Predictions 2026",
    description: "Discover the most significant AI breakthroughs predicted for 2026 - from AGI to quantum AI",
    href: "/blog/ai-2026-breakthrough-predictions",
    icon: "🔮",
    readTime: "22 min read",
    category: "AI Predictions",
    isTrending: true
  },
  {
    title: "AI Healthcare Diagnosis Breakthrough",
    description: "95% accuracy case study: How AI saved 2,500+ lives and delivered $50M+ in savings",
    href: "/case-studies/ai-healthcare-diagnosis-breakthrough-2026",
    icon: "🏥",
    readTime: "18 min read",
    category: "Healthcare AI",
    isTrending: true
  },
  {
    title: "AI Enterprise Transformation 2026",
    description: "Complete implementation guide with 400% ROI case studies from Fortune 500 companies",
    href: "/blog/ai-2026-enterprise-transformation",
    icon: "🏢",
    readTime: "25 min read",
    category: "Enterprise AI",
    isTrending: true
  }
];

export const latestContent = [
  {
    title: "AI Healthcare Diagnosis Breakthrough",
    description: "95% accuracy case study: How AI saved 2,500+ lives and delivered $50M+ in savings",
    href: "/case-studies/ai-healthcare-diagnosis-breakthrough-2026",
    icon: "🏥",
    readTime: "18 min read",
    category: "Healthcare AI"
  },
  {
    title: "AI Breakthrough Predictions 2026",
    description: "Discover the most significant AI breakthroughs predicted for 2026 - from AGI to quantum AI",
    href: "/blog/ai-2026-breakthrough-predictions",
    icon: "🔮",
    readTime: "22 min read",
    category: "AI Predictions"
  },
  {
    title: "AI Enterprise Transformation 2026",
    description: "Complete implementation guide with 400% ROI case studies from Fortune 500 companies",
    href: "/blog/ai-2026-enterprise-transformation",
    icon: "🏢",
    readTime: "25 min read",
    category: "Enterprise AI"
  }
];
  backgroundColor = 'bg-gray-50',
  textColor = 'text-gray-900',
  showViewAll = true,
  viewAllHref = '/blog',
  viewAllText = 'View All'
}: ContentShowcaseProps) {
  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'article':
        return {
          badge: 'Article',
          badgeColor: 'text-blue-700',
          hoverColor: 'group-hover:text-blue-600'
        };
      case 'resource':
        return {
          badge: 'Free Resource',
          badgeColor: 'text-green-700',
          hoverColor: 'group-hover:text-green-600'
        };
      case 'case-study':
        return {
          badge: 'Success Story',
          badgeColor: 'text-purple-700',
          hoverColor: 'group-hover:text-purple-600'
        };
      default:
        return {
          badge: 'Content',
          badgeColor: 'text-gray-700',
          hoverColor: 'group-hover:text-gray-600'
        };
    }
  };

  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${textColor} mb-6`}>
            {title}
          </h2>
          <p className={`text-xl ${textColor.replace('900', '600')} max-w-3xl mx-auto mb-8`}>
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {items.map((item, index) => {
            const typeStyles = getTypeStyles(item.type);
            return (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className={`text-sm font-medium ${typeStyles.badgeColor} mb-2`}>
                    {item.badge || typeStyles.badge}
                  </div>
                  <h3 className={`text-xl font-bold ${textColor} mb-3 ${typeStyles.hoverColor} transition-colors`}>
                    {item.title}
                  </h3>
                  <p className={`${textColor.replace('900', '600')} mb-4`}>
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {item.readTime && `${item.readTime} • `}
                      {item.fileSize && `${item.fileSize} • `}
                      {item.type === 'article' ? 'Article' : item.type === 'resource' ? 'PDF' : 'Case Study'}
                    </span>
                    <span className={`${typeStyles.badgeColor} font-medium group-hover:underline`}>
                      {item.type === 'resource' ? 'Download Free →' : 'Read More →'}
                    </span>
=======
>>>>>>> cursor/create-and-deploy-new-content-46f8
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
