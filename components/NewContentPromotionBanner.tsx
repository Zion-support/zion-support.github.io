import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  category: string;
  readTime?: string;
  type?: string;
  date: string;
}

interface NewContentPromotionBannerProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
  contentItems: ContentItem[];
  variant?: 'default' | 'featured' | 'compact';
  maxItems?: number;
  className?: string;
}

export default function NewContentPromotionBanner({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  contentItems,
  variant = 'default',
  maxItems = 4,
  className = ''
}: NewContentPromotionBannerProps) {
  const displayItems = contentItems.slice(0, maxItems);
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return {
          container: 'py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white relative overflow-hidden',
          badge: 'bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6',
          title: 'text-4xl md:text-6xl font-bold mb-6',
          description: 'text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed',
          buttonPrimary: 'bg-white text-purple-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg',
          buttonSecondary: 'border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg',
          grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
          card: 'bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'
        };
      case 'compact':
        return {
          container: 'py-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white',
          badge: 'bg-white bg-opacity-20 rounded-full px-4 py-2 mb-4',
          title: 'text-3xl md:text-4xl font-bold mb-4',
          description: 'text-lg opacity-90 mb-6 max-w-3xl mx-auto',
          buttonPrimary: 'bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors',
          buttonSecondary: 'border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors',
          grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
          card: 'bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all duration-300'
        };
      default:
        return {
          container: 'py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden',
          badge: 'bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6',
          title: 'text-3xl md:text-5xl font-bold mb-6',
          description: 'text-xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed',
          buttonPrimary: 'bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg',
          buttonSecondary: 'border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg',
          grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
          card: 'bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <section className={`${styles.container} ${className}`}>
      {variant === 'featured' && <div className="absolute inset-0 bg-black opacity-10"></div>}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center ${styles.badge}`}>
            <span className="text-sm font-medium">{subtitle}</span>
          </div>
          <h2 className={styles.title}>
            {title}
          </h2>
          <p className={styles.description}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href={primaryButtonHref}
              className={styles.buttonPrimary}
            >
              {primaryButtonText}
            </Link>
            <Link
              href={secondaryButtonHref}
              className={styles.buttonSecondary}
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>

        {/* Content Grid */}
        <div className={styles.grid}>
          {displayItems.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className={styles.card}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm opacity-90 mb-3">
                  {item.description}
                </p>
                <div className="flex items-center text-xs opacity-75">
                  {item.readTime && (
                    <>
                      <span>{item.readTime}</span>
                      <span className="mx-2">•</span>
                    </>
                  )}
                  {item.type && (
                    <>
                      <span>{item.type}</span>
                      <span className="mx-2">•</span>
                    </>
                  )}
                  <span>{item.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pre-configured content items for easy use
export const featuredContentItems: ContentItem[] = [
  {
    title: "AI 2025: Quantum Computing Breakthrough",
    description: "Revolutionary quantum AI technologies reshaping industries",
    href: "/blog/ai-2025-quantum-computing-breakthrough",
    icon: "⚛️",
    category: "Quantum AI",
    readTime: "28 min read",
    date: "Jan 30, 2025"
  },
  {
    title: "AI Ethical Governance Framework",
    description: "Comprehensive guide to responsible AI implementation",
    href: "/blog/ai-2025-ethical-governance-framework",
    icon: "⚖️",
    category: "AI Ethics",
    readTime: "32 min read",
    date: "Jan 31, 2025"
  },
  {
    title: "Cybersecurity AI Success",
    description: "99.8% threat detection accuracy achieved",
    href: "/case-studies/ai-cybersecurity-transformation-breakthrough-2025",
    icon: "🛡️",
    category: "Case Study",
    type: "New",
    date: "Jan 30, 2025"
  },
  {
    title: "AI Implementation Master Guide",
    description: "200+ page comprehensive resource",
    href: "/resources/ai-implementation-master-guide-2026",
    icon: "📚",
    category: "Free Download",
    type: "New",
    date: "Jan 30, 2025"
  }
];

export const latestContentItems: ContentItem[] = [
  {
    title: "AI Advanced Automation 2025",
    description: "Complete implementation guide for enterprise automation",
    href: "/blog/ai-2025-advanced-automation",
    icon: "🤖",
    category: "AI Automation",
    readTime: "25 min read",
    date: "Jan 30, 2025"
  },
  {
    title: "AI Cybersecurity Threats 2025",
    description: "Complete defense guide for emerging threats",
    href: "/blog/ai-2025-cybersecurity-threats",
    icon: "🛡️",
    category: "Cybersecurity",
    readTime: "22 min read",
    date: "Jan 30, 2025"
  },
  {
    title: "AI Breakthrough Innovations",
    description: "Revolutionary technologies shaping the future",
    href: "/blog/ai-2025-breakthrough-innovations",
    icon: "🚀",
    category: "AI Innovations",
    readTime: "25 min read",
    date: "Jan 28, 2025"
  }
];