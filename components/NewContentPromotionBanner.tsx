import React from 'react';
import Link from 'next/link';

interface NewContentPromotionBannerProps {
  variant?: 'default' | 'featured' | 'trending';
  maxItems?: number;
  className?: string;
}

const contentItems = [
  {
    title: "AI 2025: Quantum Computing Breakthrough",
    description: "Revolutionary quantum AI technologies transforming industries",
    href: "/blog/ai-2025-quantum-computing-breakthrough",
    icon: "⚛️",
    category: "Quantum AI",
    readTime: "28 min read",
    isNew: true,
    isTrending: true
  },
  {
    title: "AI 2025: Neural Interfaces Revolution",
    description: "Mind-machine connection technology breakthrough",
    href: "/blog/ai-2025-neural-interfaces",
    icon: "🧠",
    category: "Neural Technology",
    readTime: "32 min read",
    isNew: true,
    isTrending: false
  },
  {
    title: "AI 2025: Autonomous Vehicles",
    description: "Level 5 autonomy achieved in real-world conditions",
    href: "/blog/ai-2025-autonomous-vehicles",
    icon: "🚗",
    category: "Autonomous Systems",
    readTime: "35 min read",
    isNew: true,
    isTrending: true
  },
  {
    title: "$50M Financial Services AI Success",
    description: "300% ROI achieved through AI transformation",
    href: "/case-studies/ai-2025-financial-services-transformation",
    icon: "💰",
    category: "Case Study",
    readTime: "25 min read",
    isNew: true,
    isTrending: false
  },
  {
    title: "AI Implementation Master Guide 2026",
    description: "200+ page comprehensive implementation resource",
    href: "/resources/ai-implementation-master-guide-2026",
    icon: "📚",
    category: "Free Resource",
    readTime: "45 min read",
    isNew: true,
    isTrending: true
  }
];

export default function NewContentPromotionBanner({ 
  variant = 'default', 
  maxItems = 4,
  className = ''
}: NewContentPromotionBannerProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return {
          container: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600',
          badge: 'bg-white bg-opacity-20',
          badgeText: 'text-white',
          title: 'text-white',
          description: 'text-white opacity-90',
          button: 'bg-white text-indigo-600 hover:bg-gray-100',
          buttonSecondary: 'border-2 border-white text-white hover:bg-white hover:text-indigo-600'
        };
      case 'trending':
        return {
          container: 'bg-gradient-to-r from-orange-600 via-red-600 to-pink-600',
          badge: 'bg-white bg-opacity-20',
          badgeText: 'text-white',
          title: 'text-white',
          description: 'text-white opacity-90',
          button: 'bg-white text-orange-600 hover:bg-gray-100',
          buttonSecondary: 'border-2 border-white text-white hover:bg-white hover:text-orange-600'
        };
      default:
        return {
          container: 'bg-gradient-to-r from-blue-600 to-indigo-600',
          badge: 'bg-white bg-opacity-20',
          badgeText: 'text-white',
          title: 'text-white',
          description: 'text-white opacity-90',
          button: 'bg-white text-blue-600 hover:bg-gray-100',
          buttonSecondary: 'border-2 border-white text-white hover:bg-white hover:text-blue-600'
        };
    }
  };

  const styles = getVariantStyles();
  const filteredItems = contentItems
    .filter(item => {
      if (variant === 'trending') return item.isTrending;
      if (variant === 'featured') return item.isNew;
      return true;
    })
    .slice(0, maxItems);

  const getBadgeText = () => {
    switch (variant) {
      case 'featured': return '✨ FEATURED CONTENT';
      case 'trending': return '🔥 TRENDING NOW';
      default: return '🚀 NEW CONTENT';
    }
  };

  const getTitle = () => {
    switch (variant) {
      case 'featured': return 'Featured AI & Tech Content';
      case 'trending': return 'Trending AI Insights';
      default: return 'Latest AI & Tech Content';
    }
  };

  const getDescription = () => {
    switch (variant) {
      case 'featured': return 'Discover our most popular and impactful content covering the latest AI breakthroughs, case studies, and implementation guides.';
      case 'trending': return 'Explore the most popular and trending AI content that our community is reading and sharing right now.';
      default: return 'Stay ahead with our latest articles, case studies, and resources covering cutting-edge AI technologies and business transformation.';
    }
  };

  return (
    <section className={`py-12 ${styles.container} text-white relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center ${styles.badge} rounded-full px-6 py-2 mb-4`}>
            <span className={`text-sm font-medium ${styles.badgeText}`}>
              {getBadgeText()}
            </span>
          </div>
          
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${styles.title}`}>
            {getTitle()}
          </h2>
          
          <p className={`text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed ${styles.description}`}>
            {getDescription()}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content-showcase"
              className={`${styles.button} px-8 py-4 rounded-lg font-semibold transition-colors text-lg`}
            >
              Explore All Content
            </Link>
            <Link
              href="/blog"
              className={`${styles.buttonSecondary} px-8 py-4 rounded-lg font-semibold transition-colors text-lg`}
            >
              Read Latest Articles
            </Link>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:underline">
                  {item.title}
                </h3>
                <p className="text-sm opacity-90 mb-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-xs opacity-75">
                  <span>{item.readTime}</span>
                  <div className="flex items-center gap-2">
                    {item.isNew && (
                      <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                        New
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="bg-orange-500 bg-opacity-20 px-2 py-1 rounded-full text-xs">
                        Trending
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-8">
          <Link
            href="/resources"
            className={`${styles.buttonSecondary} px-6 py-3 rounded-lg font-semibold transition-colors inline-block`}
          >
            Download Free Resources
          </Link>
        </div>
      </div>
    </section>
  );
}