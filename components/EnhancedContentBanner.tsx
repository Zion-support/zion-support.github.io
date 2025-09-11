import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
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
          </div>
        )}
      </div>
    </section>
  );
}