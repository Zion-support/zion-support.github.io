import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Tag, Star, Sparkles } from 'lucide-react';

interface BannerItem {
  title: string;
  description: string;
  href: string;
<<<<<<< HEAD
  type: 'blog' | 'case-study' | 'resource';
  readTime?: string;
  isNew?: boolean;
  icon: string;
  category: string;
}

interface EnhancedContentBannerProps {
  variant?: 'default' | 'gradient' | 'minimal';
  maxItems?: number;
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
}

const featuredContent: ContentItem[] = [
  {
    title: 'AI Breakthrough Innovations 2025',
    description: 'The technologies reshaping business and creating new opportunities',
    href: '/blog/ai-2025-breakthrough-innovations',
    type: 'blog',
    readTime: '25 min read',
    isNew: true,
    icon: '🚀',
    category: 'AI Innovation'
  },
  {
    title: 'AI Productivity Automation 2025',
    description: 'Transform your business operations with intelligent automation',
    href: '/blog/ai-productivity-automation-2025',
    type: 'blog',
    readTime: '15 min read',
    isNew: true,
    icon: '⚡',
    category: 'Productivity'
  },
  {
    title: 'Financial Services AI Transformation',
    description: '400% ROI case study from leading financial services company',
    href: '/case-studies/ai-transformation-financial-services-2025',
    type: 'case-study',
    readTime: '12 min read',
    isNew: true,
    icon: '🏦',
    category: 'Case Study'
  },
  {
    title: 'AI Implementation Master Guide 2025',
    description: 'Complete blueprint for successful AI adoption and implementation',
    href: '/resources/ai-implementation-master-guide-2025',
    type: 'resource',
    readTime: '45 min read',
    isNew: true,
    icon: '📚',
    category: 'Master Guide'
  }
];

export default function EnhancedContentBanner({ 
  variant = 'default', 
  maxItems = 4,
  title = "Fresh AI & Tech Insights",
  subtitle = "Just published: Expert insights, case studies, and implementation guides to accelerate your AI journey.",
  showViewAll = true
}: EnhancedContentBannerProps) {
  const content = featuredContent.slice(0, maxItems);

  const getVariantStyles = () => {
    switch (variant) {
      case 'gradient':
        return {
          container: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden',
          overlay: 'absolute inset-0 bg-black opacity-10',
          content: 'relative',
          badge: 'bg-white bg-opacity-20 rounded-full px-6 py-2',
          button: 'bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg',
          buttonSecondary: 'border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg'
        };
      case 'minimal':
        return {
          container: 'bg-gray-50 text-gray-900',
          overlay: '',
          content: '',
          badge: 'bg-blue-100 text-blue-800 rounded-full px-4 py-2',
          button: 'bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg',
          buttonSecondary: 'border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg'
        };
      default:
        return {
          container: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white',
          overlay: '',
          content: '',
          badge: 'bg-white bg-opacity-20 rounded-full px-6 py-2',
          button: 'bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg',
          buttonSecondary: 'border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <section className={`py-20 ${styles.container}`}>
      {styles.overlay && <div className={styles.overlay}></div>}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${styles.content}`}>
        <div className="text-center mb-16">
          <div className={`inline-flex items-center ${styles.badge} mb-6`}>
            <span className="text-sm font-medium">✨ JUST PUBLISHED</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog"
              className={styles.button}
            >
              📚 Read Latest Articles
            </Link>
            <Link
              href="/resources"
              className={styles.buttonSecondary}
            >
              📋 Download Free Resources
interface ContentItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  readTime?: string;
  isNew?: boolean;
  isTrending?: boolean;
  category: string;
}

interface EnhancedContentBannerProps {
=======
  icon?: string;
  readTime?: string;
  isNew?: boolean;
  category?: string;
}

interface EnhancedContentBannerProps {
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-47dd
=======
>>>>>>> cursor/create-and-deploy-new-content-28f5
>>>>>>> cursor/create-and-deploy-new-content-3656
  title: string;
  subtitle: string;
  items: BannerItem[];
  ctaText: string;
  ctaHref: string;
  variant?: 'gradient' | 'solid' | 'outline';
  colorScheme?: 'blue' | 'green' | 'purple' | 'orange' | 'red';
  className?: string;
}

const EnhancedContentBanner: React.FC<EnhancedContentBannerProps> = ({
  title,
  subtitle,
  items,
  ctaText,
  ctaHref,
  variant = 'gradient',
  colorScheme = 'blue',
  className = ''
}) => {
  const getColorClasses = (scheme: string) => {
    switch (scheme) {
      case 'blue':
        return {
          gradient: 'from-blue-600 to-purple-600',
          solid: 'bg-blue-600',
          outline: 'border-blue-600 text-blue-600',
          accent: 'text-blue-100',
          hover: 'hover:from-blue-700 hover:to-purple-700'
        };
      case 'green':
        return {
          gradient: 'from-green-600 to-emerald-600',
          solid: 'bg-green-600',
          outline: 'border-green-600 text-green-600',
          accent: 'text-green-100',
          hover: 'hover:from-green-700 hover:to-emerald-700'
        };
      case 'purple':
        return {
          gradient: 'from-purple-600 to-pink-600',
          solid: 'bg-purple-600',
          outline: 'border-purple-600 text-purple-600',
          accent: 'text-purple-100',
          hover: 'hover:from-purple-700 hover:to-pink-700'
        };
      case 'orange':
        return {
          gradient: 'from-orange-600 to-red-600',
          solid: 'bg-orange-600',
          outline: 'border-orange-600 text-orange-600',
          accent: 'text-orange-100',
          hover: 'hover:from-orange-700 hover:to-red-700'
        };
      case 'red':
        return {
          gradient: 'from-red-600 to-pink-600',
          solid: 'bg-red-600',
          outline: 'border-red-600 text-red-600',
          accent: 'text-red-100',
          hover: 'hover:from-red-700 hover:to-pink-700'
        };
      default:
        return {
          gradient: 'from-blue-600 to-purple-600',
          solid: 'bg-blue-600',
<<<<<<< HEAD
          outline: 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
          accent: 'bg-blue-100 text-blue-800',
          icon: 'text-blue-600'
=======
          outline: 'border-blue-600 text-blue-600',
          accent: 'text-blue-100',
          hover: 'hover:from-blue-700 hover:to-purple-700'
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-47dd
=======
>>>>>>> cursor/create-and-deploy-new-content-28f5
>>>>>>> cursor/create-and-deploy-new-content-3656
        };
    }
  };

  const colors = getColorClasses(colorScheme);

  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return `bg-gradient-to-r ${colors.gradient} text-white`;
      case 'solid':
        return `${colors.solid} text-white`;
      case 'outline':
        return `border-2 ${colors.outline} bg-white`;
      default:
        return `bg-gradient-to-r ${colors.gradient} text-white`;
    }
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className={`rounded-2xl p-8 md:p-12 ${getVariantClasses()}`}>
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6" />
              <span className={`text-sm font-semibold ${colors.accent} opacity-90`}>
                Fresh Content
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Content Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                {/* New Badge */}
                {item.isNew && (
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full mb-4">
                    <Star className="w-3 h-3" />
                    New
                  </div>
                )}

                {/* Icon */}
                {item.icon && (
                  <div className="text-3xl mb-4">
                    {item.icon}
                  </div>
                )}

                {/* Category */}
                {item.category && (
                  <div className="flex items-center gap-1 mb-3">
                    <Tag className="w-4 h-4 opacity-70" />
                    <span className="text-sm opacity-70">{item.category}</span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold mb-3 group-hover:opacity-90 transition-opacity">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm opacity-80 mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm opacity-70">
                  {item.readTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1 group-hover:opacity-100 transition-opacity">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href={ctaHref}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                variant === 'outline'
                  ? 'bg-white text-gray-900 hover:bg-gray-100'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}
            >
              {ctaText}
              <ArrowRight className="w-5 h-5" />
            </Link>
<<<<<<< HEAD
            <Link
              href="/resources"
              className={`px-10 py-4 rounded-lg font-semibold transition-colors text-lg ${
                variant === 'outline'
                  ? 'border-2 border-white text-white hover:bg-white hover:text-gray-900'
                  : 'border-2 border-white text-white hover:bg-white hover:text-gray-900'
              }`}
            >
              📋 Download Resources
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90 mb-3">{item.description}</p>
                <div className="flex items-center justify-between text-xs opacity-75">
                  <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <span>{item.readTime} read</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {items.slice(0, 6).map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className={`${
                variant === 'outline' 
                  ? 'bg-white border border-gray-200' 
                  : 'bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20'
              } p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300`}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    variant === 'outline' ? colors.accent : 'bg-white bg-opacity-20'
                  }`}>
                    {item.category}
                  </span>
                  {item.isNew && (
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      variant === 'outline' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-green-500 bg-opacity-20'
                    }`}>
                      New
                    </span>
                  )}
                  {item.isTrending && (
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      variant === 'outline'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-orange-500 bg-opacity-20'
                    }`}>
                      Trending
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:underline">
                  {item.title}
                </h3>
                
                <p className="text-sm opacity-90 mb-3 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center text-xs opacity-75">
                  {item.readTime && <span>{item.readTime}</span>}
                  <span className="mx-2">•</span>
                  <span>Read More →</span>
                  <span>{item.readTime}</span>
                  <div className="flex items-center gap-2">
                    <span className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs">
                      {item.category}
                    </span>
                    {item.isNew && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                        New
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-12">
            <Link 
              href="/content-showcase" 
              className="inline-flex items-center gap-2 bg-white bg-opacity-20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-30 transition-colors text-lg"
            >
              View All Content
              <span>→</span>
            </Link>
        {/* Additional Content Preview */}
        {items.length > 6 && (
          <div className="text-center">
            <div className="inline-flex items-center gap-4 text-sm opacity-75 mb-4">
              <span>+{items.length - 6} more articles</span>
              <span>•</span>
              <span>Updated daily</span>
              <span>•</span>
              <span>Expert insights</span>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-sm opacity-75">New Articles</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">25K+</div>
            <div className="text-sm opacity-75">Monthly Readers</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="text-sm opacity-75">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-sm opacity-75">Fresh Content</div>
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-47dd
=======
>>>>>>> cursor/create-and-deploy-new-content-28f5
>>>>>>> cursor/create-and-deploy-new-content-3656
          </div>
        )}
      </div>
    </section>
  );
}
};

<<<<<<< HEAD
export default EnhancedContentBanner;
=======
export default EnhancedContentBanner;
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-47dd
=======
>>>>>>> cursor/create-and-deploy-new-content-28f5
>>>>>>> cursor/create-and-deploy-new-content-3656
