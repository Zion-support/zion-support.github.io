import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  readTime?: string;
  category?: string;
  isNew?: boolean;
  isTrending?: boolean;
}

interface ContentShowcaseProps {
  title: string;
  subtitle: string;
  items: ContentItem[];
  variant?: 'default' | 'featured' | 'trending';
  showViewAll?: boolean;
  viewAllHref?: string;
}

export default function ContentShowcase({
  title,
  subtitle,
  items,
  variant = 'default',
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
          subtitle: 'text-white opacity-90',
          itemTitle: 'text-white',
          itemDesc: 'text-white opacity-90',
          meta: 'text-white opacity-75',
          button: 'bg-white text-indigo-600 hover:bg-gray-100',
          buttonSecondary: 'border-2 border-white text-white hover:bg-white hover:text-indigo-600'
        };
      case 'trending':
        return {
          container: 'bg-gradient-to-r from-orange-500 to-red-500 text-white',
          badge: 'bg-white bg-opacity-20',
          badgeText: 'text-white',
          card: 'bg-white bg-opacity-10 backdrop-blur-sm border-white border-opacity-20',
          cardHover: 'hover:bg-opacity-20',
          title: 'text-white',
          subtitle: 'text-white opacity-90',
          itemTitle: 'text-white',
          itemDesc: 'text-white opacity-90',
          meta: 'text-white opacity-75',
          button: 'bg-white text-orange-600 hover:bg-gray-100',
          buttonSecondary: 'border-2 border-white text-white hover:bg-white hover:text-orange-600'
        };
      default:
        return {
          container: 'bg-white',
          badge: 'bg-blue-100 text-blue-800',
          badgeText: 'text-blue-800',
          card: 'bg-white border border-gray-200',
          cardHover: 'hover:shadow-lg',
          title: 'text-gray-900',
          subtitle: 'text-gray-600',
          itemTitle: 'text-gray-900',
          itemDesc: 'text-gray-600',
          meta: 'text-gray-500',
          button: 'bg-blue-600 text-white hover:bg-blue-700',
          buttonSecondary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <section className={`py-16 ${styles.container} relative overflow-hidden`}>
      {variant === 'featured' && (
        <div className="absolute inset-0 bg-black opacity-10"></div>
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center ${styles.badge} rounded-full px-6 py-2 mb-6`}>
            <span className={`text-sm font-medium ${styles.badgeText}`}>
              {variant === 'featured' ? '✨ JUST PUBLISHED' : variant === 'trending' ? '🔥 TRENDING NOW' : '📚 LATEST CONTENT'}
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${styles.title}`}>
            {title}
          </h2>
          <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed ${styles.subtitle}`}>
            {subtitle}
          </p>
          {showViewAll && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href={viewAllHref}
                className={`${styles.button} px-10 py-4 rounded-lg font-semibold transition-colors text-lg shadow-lg`}
              >
                📚 View All Content
              </Link>
              <Link
                href="/resources"
                className={`${styles.buttonSecondary} px-10 py-4 rounded-lg font-semibold transition-colors text-lg`}
              >
                📋 Download Resources
              </Link>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className={`${styles.card} p-6 rounded-xl transition-all duration-300 ${styles.cardHover}`}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  {item.isNew && (
                    <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      NEW
                    </span>
                  )}
                  {item.isTrending && (
                    <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      TRENDING
                    </span>
                  )}
                  {item.category && (
                    <span className={`${styles.meta} text-xs font-medium`}>
                      {item.category}
                    </span>
                  )}
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${styles.itemTitle}`}>
                  {item.title}
                </h3>
                <p className={`text-sm mb-3 ${styles.itemDesc}`}>
                  {item.description}
                </p>
                <div className="flex items-center text-xs opacity-75">
                  {item.readTime && (
                    <>
                      <span className={styles.meta}>{item.readTime}</span>
                      <span className={`mx-2 ${styles.meta}`}>•</span>
                    </>
                  )}
                  <span className={styles.meta}>
                    {item.href.includes('/blog/') ? 'Article' : 
                     item.href.includes('/case-studies/') ? 'Case Study' : 
                     item.href.includes('/resources/') ? 'Resource' : 'Content'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Predefined content collections for easy use
export const featuredContent = [
  {
    title: "AI Enterprise Transformation 2026",
    description: "Complete implementation guide with 400% ROI case studies from Fortune 500 companies",
    href: "/blog/ai-2026-enterprise-transformation",
    icon: "🏢",
    readTime: "25 min read",
    category: "Enterprise AI",
    isNew: true
  },
  {
    title: "AI Breakthrough Predictions 2026",
    description: "Discover the most significant AI breakthroughs predicted for 2026 - from AGI to quantum AI",
    href: "/blog/ai-2026-breakthrough-predictions",
    icon: "🔮",
    readTime: "22 min read",
    category: "AI Predictions",
    isNew: true
  },
  {
    title: "AI Healthcare Diagnosis Breakthrough",
    description: "95% accuracy case study: How AI saved 2,500+ lives and delivered $50M+ in savings",
    href: "/case-studies/ai-healthcare-diagnosis-breakthrough-2026",
    icon: "🏥",
    readTime: "18 min read",
    category: "Healthcare AI",
    isNew: true
  },
  {
    title: "AI Implementation Master Guide 2026",
    description: "Complete 200-page playbook with templates, checklists, and case studies",
    href: "/resources/ai-implementation-master-guide-2026",
    icon: "📚",
    readTime: "Free Download",
    category: "Resources",
    isNew: true
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