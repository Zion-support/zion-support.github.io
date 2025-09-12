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
  type: 'article' | 'case-study' | 'resource' | 'guide';
  status: 'new' | 'popular' | 'trending' | 'featured';
  type: 'blog' | 'resource' | 'case-study';
  readTime?: string;
  isNew?: boolean;
  isTrending?: boolean;
  icon: string;
  category: string;
  type: 'article' | 'resource' | 'case-study';
  readTime?: string;
  fileSize?: string;
  badge?: string;
  badgeColor?: string;
}

interface ContentShowcaseProps {
  title: string;
  subtitle: string;
  items: ContentItem[];
  variant?: 'default' | 'featured' | 'trending';
  className?: string;
  showViewAll?: boolean;
  viewAllHref?: string;
  backgroundColor?: string;
  textColor?: string;
  showViewAll?: boolean;
  viewAllHref?: string;
  viewAllText?: string;
  variant?: 'default' | 'gradient' | 'dark';
  showViewAll?: boolean;
  viewAllHref?: string;
  columns?: 2 | 3 | 4;
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
  showViewAll?: boolean;
  viewAllHref?: string;
  variant?: 'default' | 'featured' | 'compact';
}

const ContentShowcase: React.FC<ContentShowcaseProps> = ({
  title,
  subtitle,
  items,
  className = '',
  showViewAll = true,
  viewAllHref = '/blog'
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-green-100 text-green-800';
      case 'popular':
        return 'bg-blue-100 text-blue-800';
      case 'trending':
        return 'bg-purple-100 text-purple-800';
      case 'featured':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
        return '📚';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📋';
      case 'guide':
        return '📖';
      default:
        return '📄';
  viewAllHref = '/blog',
  columns = 3
}: ContentShowcaseProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white';
      case 'dark':
        return 'bg-gray-900 text-white';
      default:
        return 'bg-gray-50';
    }
  };

  const getCardClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 border border-white border-opacity-20';
      case 'dark':
        return 'bg-gray-800 hover:bg-gray-700 border border-gray-700';
      default:
        return 'bg-white hover:bg-gray-50 border border-gray-200';
    }
  };

  const getTextClasses = () => {
    switch (variant) {
      case 'gradient':
      case 'dark':
        return 'text-white';
      default:
        return 'text-gray-900';
    }
  };

  const getSubtextClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'text-white opacity-90';
      case 'dark':
        return 'text-gray-300';
      default:
        return 'text-gray-600';
    }
  };

  const getGridClasses = () => {
    switch (columns) {
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 4:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
    <section className={`py-16 ${getVariantClasses()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${getTextClasses()}`}>
            {title}
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${getSubtextClasses()}`}>
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {items.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{getTypeIcon(item.type)}</span>
                    <span className="capitalize">{item.type.replace('-', ' ')}</span>
                    {item.readTime && (
                      <>
                        <span>•</span>
                        <span>{item.readTime}</span>
                      </>
                    )}
                  </div>
                  <span className="text-blue-600 font-medium group-hover:underline text-sm">
                    Read More →
                  </span>
  showViewAll = true,
  viewAllHref = '/blog',
  variant = 'default'
}) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'resource': return 'bg-green-100 text-green-800';
      case 'case-study': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Article';
      case 'resource': return 'Resource';
      case 'case-study': return 'Case Study';
      default: return 'Content';
    }
  };

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {showViewAll && (
            <Link
              href={viewAllHref}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View All →
            </Link>
          )}
        </div>
        <div className="space-y-3">
          {items.slice(0, 3).map((item, index) => (
            <Link key={index} href={item.href} className="group block">
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-2xl">{item.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                    {item.isNew && (
                      <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                        Trending
                      </span>
                    )}
                  </div>
                  <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs mt-1 line-clamp-2">
                    {item.description}
                  </p>
        <div className={`grid ${getGridClasses()} gap-6 mb-8`}>
          {items.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className={`p-6 rounded-xl transition-all duration-300 ${getCardClasses()}`}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {item.isNew && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                      {item.isTrending && (
                        <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                          TRENDING
                        </span>
                      )}
                      {item.category && (
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          variant === 'gradient' || variant === 'dark' 
                            ? 'bg-white bg-opacity-20' 
                            : 'bg-gray-100'
                        }`}>
                          {item.category}
                        </span>
                      )}
                    </div>
                    <h3 className={`text-lg font-semibold mb-2 group-hover:underline ${getTextClasses()}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm mb-3 ${getSubtextClasses()}`}>
                      {item.description}
                    </p>
                    {item.readTime && (
                      <div className={`flex items-center text-xs ${getSubtextClasses()}`}>
                        <span>{item.readTime}</span>
                        {item.isNew && (
                          <>
                            <span className="mx-2">•</span>
                            <span>New</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
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
    title: "AI Productivity Automation 2025",
    description: "Transform your business with 300% productivity gains and 40% cost reduction",
    href: "/blog/ai-productivity-automation-2025",
    icon: "🤖",
    readTime: "15 min read",
    category: "AI & Automation",
    isNew: true
  },
  {
    title: "Startup Pricing Strategy 2025",
    description: "Validate willingness to pay and scale with confidence using data-driven strategies",
    href: "/blog/startup-pricing-strategy-2025",
    icon: "💰",
    readTime: "12 min read",
    category: "Growth Strategy",
    isNew: true
  },
  {
    title: "Healthcare AI Success Story",
    description: "95% accuracy in medical diagnosis with 80% faster processing times",
    href: "/case-studies/ai-healthcare-diagnosis-success-2025",
    icon: "🏥",
    readTime: "Case Study",
    category: "Healthcare",
    isNew: true
  },
  {
    title: "AI Implementation Playbook",
    description: "Complete 150-page guide to successful AI deployment with templates and checklists",
    href: "/resources/ai-implementation-playbook-2025",
    icon: "📚",
    readTime: "Free Download",
    category: "Resources",
    isNew: true
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
    isTrending: true
  },
  {
    title: "LLM Guardrails in Production",
    description: "Safety without blocking delivery - practical implementation guide",
    href: "/blog/llm-guardrails-in-production-2025",
    icon: "🛡️",
    readTime: "8 min read",
    category: "AI Engineering",
    isTrending: true
  },
  {
    title: "Edge AI: Privacy by Design",
    description: "On-device intelligence for instant, compliant customer experiences",
    href: "/blog/edge-ai-privacy-by-design-2025",
    icon: "🔐",
    readTime: "7 min read",
    category: "AI & Privacy",
    isTrending: true
  }
];

export const latestContent = [
  {
    title: "AI Customer Support Automation",
    description: "Resolve faster, cut costs, and improve satisfaction with intelligent automation",
    href: "/blog/ai-customer-support-automation-2025",
    icon: "🎧",
    readTime: "9 min read",
    category: "Customer Experience"
  },
  {
    title: "AI Governance in Practice",
    description: "Controls that reduce risk without blocking delivery",
    href: "/blog/ai-governance-in-practice-2025",
    icon: "⚖️",
    readTime: "9 min read",
    category: "AI Governance"
  },
  {
    title: "Cloud-Native Architecture Blueprint",
    description: "Build scalable, resilient applications with modern cloud-native patterns",
    href: "/blog/cloud-native-architecture-2025",
    icon: "☁️",
    readTime: "15 min read",
    category: "Cloud & DevOps"
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
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {showViewAll && (
          <div className="text-center">
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
    );
  }

  if (variant === 'featured') {
    return (
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">✨ FEATURED CONTENT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">{subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.slice(0, 6).map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium bg-white bg-opacity-20 px-2 py-1 rounded-full">
                      {getTypeLabel(item.type)}
                    </span>
                    {item.isNew && (
                      <span className="text-xs font-medium bg-green-500 bg-opacity-20 px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="text-xs font-medium bg-orange-500 bg-opacity-20 px-2 py-1 rounded-full">
                        Trending
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:underline">{item.title}</h3>
                  <p className="text-sm opacity-90 mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex items-center text-xs opacity-75">
                    {item.readTime && <span>{item.readTime}</span>}
                    <span className="mx-2">•</span>
                    <span>{item.category}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {showViewAll && (
            <div className="text-center mt-8">
              <Link
                href={viewAllHref}
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                View All Content
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                  <div className="text-6xl">{item.icon}</div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                    {item.isNew && (
                      <span className="text-xs font-medium text-white bg-green-600 px-3 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="text-xs font-medium text-white bg-orange-600 px-3 py-1 rounded-full">
                        TRENDING
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm text-gray-500">{item.category}</span>
                    {item.readTime && (
                      <>
                        <span className="text-gray-300">•</span>
                        <span className="text-sm text-gray-500">{item.readTime}</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-12">
            <Link
              href={viewAllHref}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              View All Content
              <span>→</span>
              className={`bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg`}
            >
              {viewAllText}
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-colors ${
                variant === 'gradient' || variant === 'dark'
                  ? 'bg-white text-indigo-600 hover:bg-gray-100'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              View All Content
              <span>→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentShowcase;
    </div>
  );
};

export default ContentShowcase;
}

// Predefined content collections for easy use
export const featuredArticles: ContentItem[] = [
  {
    title: 'AI Multimodal Applications 2025',
    description: 'Beyond text to vision, audio, and beyond - the future of AI',
    href: '/blog/ai-multimodal-applications-2025',
    icon: '🎭',
    type: 'article',
    readTime: '15 min read',
    badge: 'New'
  },
  {
    title: 'AI Cybersecurity Threats 2025',
    description: 'Protect against next-gen AI-powered attacks and deepfakes',
    href: '/blog/ai-cybersecurity-threats-2025',
    icon: '🛡️',
    type: 'article',
    readTime: '18 min read',
    badge: 'New'
  },
  {
    title: 'AI Edge Computing & IoT 2025',
    description: 'The future of distributed intelligence and real-time processing',
    href: '/blog/ai-edge-computing-iot-2025',
    icon: '⚡',
    type: 'article',
    readTime: '16 min read',
    badge: 'New'
  }
];

export const featuredResources: ContentItem[] = [
  {
    title: 'AI Edge Computing Implementation Guide',
    description: 'Complete 45-page guide covering hardware selection, model optimization, and deployment strategies',
    href: '/resources/ai-edge-computing-implementation-guide-2025',
    icon: '⚡',
    type: 'resource',
    fileSize: '45 pages • PDF',
    badge: 'Free Guide'
  },
  {
    title: 'AI Cybersecurity Checklist 2025',
    description: '80-item comprehensive checklist to protect your AI systems from emerging threats',
    href: '/resources/ai-cybersecurity-checklist-2025',
    icon: '🛡️',
    type: 'resource',
    fileSize: '80 items • PDF',
    badge: 'Security Checklist'
  },
  {
    title: 'AI Implementation Playbook 2025',
    description: 'Step-by-step implementation guide with best practices and real-world examples',
    href: '/resources/ai-implementation-playbook-2025',
    icon: '📋',
    type: 'resource',
    fileSize: '60 pages • PDF',
    badge: 'Free Download'
  }
];

export const featuredCaseStudies: ContentItem[] = [
  {
    title: 'AI Retail Transformation Success',
    description: 'How a major retail chain achieved 40% revenue increase and 60% cost reduction',
    href: '/case-studies/ai-retail-transformation-2025',
    icon: '🏪',
    type: 'case-study',
    readTime: '12 min read',
    badge: 'Success Story'
  },
  {
    title: 'AI Healthcare Diagnosis Success',
    description: '95% accuracy in medical diagnosis with 80% faster processing times',
    href: '/case-studies/ai-healthcare-diagnosis-success-2025',
    icon: '🏥',
    type: 'case-study',
    readTime: '10 min read',
    badge: 'Case Study'
  },
  {
    title: 'Fortune 500 AI Transformation',
    description: 'Complete digital transformation success story with measurable ROI',
    href: '/case-studies/fortune-500-ai-transformation',
    icon: '🏆',
    type: 'case-study',
    readTime: '15 min read',
    badge: 'Enterprise Success'
  }
];
}
