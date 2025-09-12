import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, Tag, Star, TrendingUp, Filter, Search } from 'lucide-react';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  readTime?: string;
  category?: string;
  isNew?: boolean;
  isTrending?: boolean;
  isFeatured?: boolean;
  stats?: {
    value: string;
    label: string;
  }[];
}

interface EnhancedContentShowcaseProps {
  title: string;
  subtitle: string;
  items: ContentItem[];
  variant?: 'default' | 'featured' | 'trending' | 'new';
  showViewAll?: boolean;
  viewAllHref?: string;
  className?: string;
}

export default function EnhancedContentShowcase({
  title,
  subtitle,
  items,
  variant = 'default',
  showViewAll = true,
  viewAllHref = '/blog',
  className = ''
}: EnhancedContentShowcaseProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return {
          container: 'bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white',
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
          buttonSecondary: 'border-2 border-white text-white hover:bg-white hover:text-indigo-600',
          stats: 'bg-white bg-opacity-20'
        };
      case 'trending':
        return {
          container: 'bg-gradient-to-br from-orange-500 to-red-500 text-white',
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
          buttonSecondary: 'border-2 border-white text-white hover:bg-white hover:text-orange-600',
          stats: 'bg-white bg-opacity-20'
        };
      case 'new':
        return {
          container: 'bg-gradient-to-br from-green-600 to-blue-600 text-white',
          badge: 'bg-white bg-opacity-20',
          badgeText: 'text-white',
          card: 'bg-white bg-opacity-10 backdrop-blur-sm border-white border-opacity-20',
          cardHover: 'hover:bg-opacity-20',
          title: 'text-white',
          subtitle: 'text-white opacity-90',
          itemTitle: 'text-white',
          itemDesc: 'text-white opacity-90',
          meta: 'text-white opacity-75',
          button: 'bg-white text-green-600 hover:bg-gray-100',
          buttonSecondary: 'border-2 border-white text-white hover:bg-white hover:text-green-600',
          stats: 'bg-white bg-opacity-20'
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
          buttonSecondary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
          stats: 'bg-gray-50'
        };
    }
  };

  const styles = getVariantStyles();

  const getBadgeText = () => {
    switch (variant) {
      case 'featured': return '✨ FEATURED CONTENT';
      case 'trending': return '🔥 TRENDING NOW';
      case 'new': return '🚀 JUST PUBLISHED';
      default: return '📚 LATEST CONTENT';
    }
  };

  return (
    <section className={`py-16 ${styles.container} relative overflow-hidden ${className}`}>
      {variant !== 'default' && (
        <div className="absolute inset-0 bg-black opacity-10"></div>
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center ${styles.badge} rounded-full px-6 py-2 mb-6`}>
            <span className={`text-sm font-medium ${styles.badgeText}`}>
              {getBadgeText()}
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
                  {item.isFeatured && (
                    <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      FEATURED
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
                
                {/* Stats Display */}
                {item.stats && item.stats.length > 0 && (
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-2">
                      {item.stats.map((stat, statIndex) => (
                        <div key={statIndex} className={`${styles.stats} px-2 py-1 rounded text-xs font-medium`}>
                          <span className="font-bold">{stat.value}</span> {stat.label}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

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
    </div>
  );
}

// Enhanced content collections with stats
export const newFeaturedContent = [
  {
    title: "AI Enterprise Transformation 2025",
    description: "Complete implementation guide: 300% productivity gains, 40% cost reduction, and 95% accuracy improvements",
    href: "/blog/ai-enterprise-transformation-2025",
    icon: "🏢",
    readTime: "18 min read",
    category: "Enterprise AI",
    isNew: true,
    isFeatured: true,
    stats: [
      { value: "300%", label: "Productivity" },
      { value: "40%", label: "Cost Reduction" },
      { value: "95%", label: "Accuracy" }
    ]
  },
  {
    title: "AI Customer Experience Revolution",
    description: "Transform CX with 95% satisfaction, 80% faster resolution, and 60% cost reduction",
    href: "/blog/ai-customer-experience-revolution-2025",
    icon: "🎯",
    readTime: "14 min read",
    category: "Customer Experience",
    isNew: true,
    isTrending: true,
    stats: [
      { value: "95%", label: "Satisfaction" },
      { value: "80%", label: "Faster Resolution" },
      { value: "60%", label: "Cost Reduction" }
    ]
  },
  {
    title: "AI Retail Transformation Success",
    description: "Real case study: 300% revenue growth, 95% customer satisfaction, and 80% cost reduction",
    href: "/case-studies/ai-retail-transformation-success-2025",
    icon: "🏪",
    readTime: "Case Study",
    category: "Retail & E-commerce",
    isNew: true,
    isFeatured: true,
    stats: [
      { value: "300%", label: "Revenue Growth" },
      { value: "95%", label: "Satisfaction" },
      { value: "80%", label: "Cost Reduction" }
    ]
  }
];

export const trendingContent = [
  {
    title: "AI Go-To-Market 2025",
    description: "From zero to traction: positioning, pricing, and distribution strategies",
    href: "/blog/ai-go-to-market-2025",
    icon: "📈",
    readTime: "12 min read",
    category: "Growth & Marketing",
    isTrending: true,
    stats: [
      { value: "200%", label: "Faster Growth" },
      { value: "85%", label: "Success Rate" }
    ]
  },
  {
    title: "LLM Guardrails in Production",
    description: "Safety without blocking delivery - practical implementation guide",
    href: "/blog/llm-guardrails-in-production-2025",
    icon: "🛡️",
    readTime: "8 min read",
    category: "AI Engineering",
    isTrending: true,
    stats: [
      { value: "99.9%", label: "Uptime" },
      { value: "90%", label: "Safety Score" }
    ]
  },
  {
    title: "Edge AI: Privacy by Design",
    description: "On-device intelligence for instant, compliant customer experiences",
    href: "/blog/edge-ai-privacy-by-design-2025",
    icon: "🔐",
    readTime: "7 min read",
    category: "AI & Privacy",
    isTrending: true,
    stats: [
      { value: "100%", label: "Privacy" },
      { value: "50ms", label: "Response Time" }
    ]
  }
];
