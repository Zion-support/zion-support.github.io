import React from 'react';
import Link from 'next/link';

interface NewContentBannerProps {
  variant?: 'default' | 'featured' | 'trending';
  maxItems?: number;
  className?: string;
}

const newContent = [
  {
    id: 'ai-enterprise-integration-2025',
    title: 'AI Enterprise Integration 2025',
    description: 'Complete implementation guide for enterprise AI transformation',
    type: 'blog',
    category: 'Enterprise AI',
    readTime: '25 min',
    status: 'New',
    emoji: '🏢',
    href: '/blog/ai-enterprise-integration-2025',
    featured: true,
    trending: false,
  },
  {
    id: 'ai-productivity-automation-2025',
    title: 'AI Productivity Automation: 300% Boost',
    description: 'Achieve unprecedented productivity gains with AI automation',
    type: 'blog',
    category: 'Productivity',
    readTime: '22 min',
    status: 'Trending',
    emoji: '⚡',
    href: '/blog/ai-productivity-automation-2025',
    featured: true,
    trending: true,
  },
  {
    id: 'ai-cybersecurity-threats-2025',
    title: 'AI Cybersecurity Threats 2025',
    description: 'Complete defense guide against AI-powered cyber attacks',
    type: 'blog',
    category: 'Cybersecurity',
    readTime: '16 min',
    status: 'Critical',
    emoji: '🛡️',
    href: '/blog/ai-cybersecurity-threats-2025',
    featured: true,
    trending: false,
  },
  {
    id: 'ai-transformation-manufacturing-2025',
    title: 'AI Manufacturing Transformation',
    description: '85% defect reduction case study in manufacturing',
    type: 'case-study',
    category: 'Manufacturing',
    readTime: '12 min',
    status: 'Success Story',
    emoji: '🏭',
    href: '/case-studies/ai-transformation-manufacturing-2025',
    featured: true,
    trending: true,
  },
  {
    id: 'ai-2026-breakthrough-predictions',
    title: 'AI 2026 Breakthrough Predictions',
    description: 'Expert predictions for the next frontier of AI technology',
    type: 'blog',
    category: 'Future Predictions',
    readTime: '25 min',
    status: 'New',
    emoji: '🔮',
    href: '/blog/ai-2026-breakthrough-predictions',
    featured: false,
    trending: true,
  },
  {
    id: 'ai-startup-funding-masterclass-2025',
    title: 'AI Startup Funding Masterclass',
    description: 'Complete guide to raising capital in the AI era',
    type: 'blog',
    category: 'Startup Funding',
    readTime: '22 min',
    status: 'New',
    emoji: '💰',
    href: '/blog/ai-startup-funding-masterclass-2025',
    featured: false,
    trending: false,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'New':
      return 'bg-green-100 text-green-800';
    case 'Trending':
      return 'bg-blue-100 text-blue-800';
    case 'Critical':
      return 'bg-red-100 text-red-800';
    case 'Success Story':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Enterprise AI':
      return 'bg-blue-100 text-blue-800';
    case 'Productivity':
      return 'bg-green-100 text-green-800';
    case 'Cybersecurity':
      return 'bg-red-100 text-red-800';
    case 'Manufacturing':
      return 'bg-purple-100 text-purple-800';
    case 'Future Predictions':
      return 'bg-indigo-100 text-indigo-800';
    case 'Startup Funding':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function NewContentBanner({ 
  variant = 'default', 
  maxItems = 4, 
  className = '' 
}: NewContentBannerProps) {
  const getFilteredContent = () => {
    switch (variant) {
      case 'featured':
        return newContent.filter(item => item.featured).slice(0, maxItems);
      case 'trending':
        return newContent.filter(item => item.trending).slice(0, maxItems);
      default:
        return newContent.slice(0, maxItems);
    }
  };

  const content = getFilteredContent();

  if (content.length === 0) return null;

  return (
    <section className={`py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">
              {variant === 'featured' ? '✨ FEATURED CONTENT' : 
               variant === 'trending' ? '🔥 TRENDING NOW' : '📚 NEW CONTENT'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {variant === 'featured' ? '🚀 Featured AI Insights & Guides' :
             variant === 'trending' ? '🔥 Trending Content This Week' : '📚 Fresh AI & Tech Content'}
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            {variant === 'featured' ? 
              'Discover our most comprehensive and impactful content covering AI implementation, productivity automation, cybersecurity, and real-world success stories.' :
             variant === 'trending' ?
              'Explore the most popular and highly-rated content from our AI experts. Fresh insights, practical guides, and proven strategies.' :
              'Stay ahead with our latest articles, case studies, and resources covering the most important trends in AI, automation, and business growth.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              📚 Read Latest Articles
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              📋 View Case Studies
            </Link>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 h-full">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.emoji}
                </div>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm opacity-90 mb-3 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </div>
                <div className="flex items-center text-xs opacity-75">
                  <span>{item.readTime} read</span>
                  <span className="mx-2">•</span>
                  <span className="capitalize">{item.type.replace('-', ' ')}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href={variant === 'trending' ? '/blog?filter=trending' : '/blog'}
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            View All {variant === 'trending' ? 'Trending' : 'Content'}
            <span>→</span>
          </Link>
        </div>
<<<<<<< HEAD
interface NewContentBannerProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
  gradientFrom: string;
  gradientTo: string;
  className?: string;
}

const NewContentBanner: React.FC<NewContentBannerProps> = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  gradientFrom,
  gradientTo,
  className = ''
}) => {
  return (
    <section className={`py-20 bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">{subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryButtonHref}
              className="bg-white text-gray-900 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              {primaryButtonText}
            </Link>
            <Link
              href={secondaryButtonHref}
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-lg"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
=======
>>>>>>> cursor/create-and-deploy-new-content-47dd
      </div>
    </section>
  );
};

export default NewContentBanner;
<<<<<<< HEAD
export { hotContent };
export default NewContentBanner;
=======
export { hotContent };
>>>>>>> cursor/create-and-deploy-new-content-47dd
