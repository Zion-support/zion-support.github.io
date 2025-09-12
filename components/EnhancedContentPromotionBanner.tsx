import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  readTime?: string;
  type: 'article' | 'case-study' | 'resource';
  badge?: string;
}

interface EnhancedContentPromotionBannerProps {
  variant?: 'default' | 'featured' | 'trending' | 'latest';
  maxItems?: number;
  title?: string;
  subtitle?: string;
  showBadges?: boolean;
  className?: string;
}

const contentItems: ContentItem[] = [
  {
    title: 'AI 2026 Predictions: The Next Frontier',
    description: 'Expert insights and predictions for the most significant AI developments expected to reshape technology and society in 2026.',
    href: '/blog/ai-2026-predictions',
    icon: '🔮',
    readTime: '22 min read',
    type: 'article',
    badge: 'New'
  },
  {
    title: 'AI Productivity Automation 2025',
    description: 'Achieve 300% productivity boost with AI-powered automation. Complete guide to implementing intelligent workflows and process optimization.',
    href: '/blog/ai-productivity-automation-2025',
    icon: '⚡',
    readTime: '25 min read',
    type: 'article',
    badge: 'Trending'
  },
  {
    title: 'AI Transformation: 300% Revenue Growth',
    description: 'How a Fortune 500 retail company achieved unprecedented growth through comprehensive AI transformation and operational automation.',
    href: '/case-studies/ai-transformation-retail-giant-2025',
    icon: '🏪',
    readTime: '15 min read',
    type: 'case-study',
    badge: 'Featured'
  },
  {
    title: 'AI Implementation Master Guide 2025',
    description: 'Complete 200+ page playbook with proven strategies, frameworks, checklists, and templates for successful AI transformation.',
    href: '/resources/ai-implementation-master-guide-2025',
    icon: '📚',
    readTime: '200+ pages',
    type: 'resource',
    badge: 'Free'
  },
  {
    title: 'AI 2025: Year in Review',
    description: 'Comprehensive analysis of the most significant AI developments, breakthroughs, and industry transformations that shaped 2025.',
    href: '/blog/ai-2025-year-in-review',
    icon: '📊',
    readTime: '18 min read',
    type: 'article',
    badge: 'Popular'
  },
  {
    title: 'AI Multimodal Revolution',
    description: 'Beyond text to vision, audio, and code - how multimodal AI is transforming human-computer interaction and creative industries.',
    href: '/blog/ai-multimodal-revolution-2025',
    icon: '🎯',
    readTime: '22 min read',
    type: 'article',
    badge: 'New'
  },
  {
    title: 'Manufacturing AI Automation Success',
    description: 'How a Fortune 500 manufacturer achieved 40% cost reduction and 60% faster processing times through AI automation.',
    href: '/case-studies/ai-automation-manufacturing-2025',
    icon: '🏭',
    readTime: '12 min read',
    type: 'case-study',
    badge: 'Success'
  },
  {
    title: 'AI Security Hardening Checklist',
    description: 'Essential security measures and best practices for AI systems. Comprehensive checklist for protecting your AI infrastructure.',
    href: '/resources/ai-security-hardening-checklist',
    icon: '🛡️',
    readTime: 'Free Download',
    type: 'resource',
    badge: 'Essential'
  }
];

const getVariantStyles = (variant: string) => {
  switch (variant) {
    case 'featured':
      return {
        background: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600',
        badge: 'bg-white bg-opacity-20',
        badgeText: 'text-white',
        title: 'text-white',
        subtitle: 'text-white opacity-90',
        card: 'bg-white bg-opacity-10 backdrop-blur-sm border-white border-opacity-20',
        cardHover: 'hover:bg-opacity-20',
        text: 'text-white',
        textSecondary: 'text-white opacity-90'
      };
    case 'trending':
      return {
        background: 'bg-gradient-to-r from-orange-500 to-red-500',
        badge: 'bg-white bg-opacity-20',
        badgeText: 'text-white',
        title: 'text-white',
        subtitle: 'text-white opacity-90',
        card: 'bg-white bg-opacity-10 backdrop-blur-sm border-white border-opacity-20',
        cardHover: 'hover:bg-opacity-20',
        text: 'text-white',
        textSecondary: 'text-white opacity-90'
      };
    case 'latest':
      return {
        background: 'bg-gradient-to-r from-green-500 to-blue-500',
        badge: 'bg-white bg-opacity-20',
        badgeText: 'text-white',
        title: 'text-white',
        subtitle: 'text-white opacity-90',
        card: 'bg-white bg-opacity-10 backdrop-blur-sm border-white border-opacity-20',
        cardHover: 'hover:bg-opacity-20',
        text: 'text-white',
        textSecondary: 'text-white opacity-90'
      };
    default:
      return {
        background: 'bg-gradient-to-r from-blue-600 to-indigo-600',
        badge: 'bg-white bg-opacity-20',
        badgeText: 'text-white',
        title: 'text-white',
        subtitle: 'text-white opacity-90',
        card: 'bg-white bg-opacity-10 backdrop-blur-sm border-white border-opacity-20',
        cardHover: 'hover:bg-opacity-20',
        text: 'text-white',
        textSecondary: 'text-white opacity-90'
      };
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'article':
      return 'text-blue-400';
    case 'case-study':
      return 'text-green-400';
    case 'resource':
      return 'text-purple-400';
    default:
      return 'text-gray-400';
  }
};

const getBadgeColor = (badge: string) => {
  switch (badge) {
    case 'New':
      return 'bg-green-500 text-white';
    case 'Trending':
      return 'bg-orange-500 text-white';
    case 'Featured':
      return 'bg-purple-500 text-white';
    case 'Free':
      return 'bg-blue-500 text-white';
    case 'Popular':
      return 'bg-pink-500 text-white';
    case 'Success':
      return 'bg-green-600 text-white';
    case 'Essential':
      return 'bg-red-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

export default function EnhancedContentPromotionBanner({
  variant = 'default',
  maxItems = 4,
  title,
  subtitle,
  showBadges = true,
  className = ''
}: EnhancedContentPromotionBannerProps) {
  const styles = getVariantStyles(variant);
  const displayItems = contentItems.slice(0, maxItems);

  const getDefaultTitle = () => {
    switch (variant) {
      case 'featured':
        return '🚀 Featured AI Content';
      case 'trending':
        return '🔥 Trending Now';
      case 'latest':
        return '✨ Latest Content';
      default:
        return '📚 AI Insights & Resources';
    }
  };

  const getDefaultSubtitle = () => {
    switch (variant) {
      case 'featured':
        return 'Discover our most popular and impactful AI content, case studies, and resources.';
      case 'trending':
        return 'The most read and shared AI content this week. Stay ahead with trending insights.';
      case 'latest':
        return 'Fresh AI content, case studies, and resources published this week.';
      default:
        return 'Explore our comprehensive collection of AI insights, case studies, and practical resources.';
    }
  };

  return (
    <section className={`py-20 ${styles.background} text-white relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">
              {variant === 'featured' && '✨ FEATURED'}
              {variant === 'trending' && '🔥 TRENDING'}
              {variant === 'latest' && '📅 JUST PUBLISHED'}
              {variant === 'default' && '📚 CONTENT SHOWCASE'}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {title || getDefaultTitle()}
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            {subtitle || getDefaultSubtitle()}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              📚 Read Latest Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              📋 Download Free Resources
            </Link>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayItems.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className={`${styles.card} ${styles.cardHover} p-6 rounded-xl transition-all duration-300 border`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  {showBadges && item.badge && (
                    <div className={`${getBadgeColor(item.badge)} px-2 py-1 rounded-full text-xs font-medium`}>
                      {item.badge}
                    </div>
                  )}
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${styles.text}`}>
                  {item.title}
                </h3>
                <p className={`text-sm mb-3 ${styles.textSecondary}`}>
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-xs opacity-75">
                  <span className={`${getTypeColor(item.type)} font-medium`}>
                    {item.type === 'article' && '📝 Article'}
                    {item.type === 'case-study' && '📊 Case Study'}
                    {item.type === 'resource' && '📋 Resource'}
                  </span>
                  <span className={styles.textSecondary}>
                    {item.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center gap-2 bg-white bg-opacity-20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-30 transition-colors text-lg"
          >
            View All Content
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}