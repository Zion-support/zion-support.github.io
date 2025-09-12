import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Tag, Star, Zap, Globe, Leaf, Award, TrendingUp, Download, BookOpen, PlayCircle } from 'lucide-react';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'resource' | 'case-study' | 'video' | 'webinar';
  readTime?: string;
  isNew?: boolean;
  icon?: string;
  category?: string;
  featured?: boolean;
  isTrending?: boolean;
  badge?: string;
  badgeColor?: string;
  metrics?: string;
  author?: string;
  publishDate?: string;
  views?: string;
  rating?: number;
}

interface FeaturedNewContentShowcaseProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showViewAll?: boolean;
  viewAllHref?: string;
  viewAllText?: string;
  columns?: 2 | 3 | 4;
}

const FeaturedNewContentShowcase: React.FC<FeaturedNewContentShowcaseProps> = ({
  title = "Featured New Content",
  subtitle = "Discover our latest AI insights, case studies, and resources",
  className = '',
  showViewAll = true,
  viewAllHref = '/content-showcase',
  viewAllText = 'View All Content',
  columns = 3
}) => {
  const featuredContent: ContentItem[] = [
    {
      title: "AI 2025 Revolutionary Breakthroughs: The Future is Here",
      description: "Discover the most revolutionary AI breakthroughs of 2025 that are reshaping industries, transforming businesses, and creating unprecedented opportunities for innovation and growth.",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      type: "blog",
      readTime: "15 min read",
      isNew: true,
      icon: "🚀",
      category: "AI Innovation",
      featured: true,
      isTrending: true,
      badge: "Trending",
      badgeColor: "bg-red-500",
      metrics: "2.5K views",
      author: "Zion Tech Group",
      publishDate: "Jan 17, 2025",
      rating: 4.9
    },
    {
      title: "AI Healthcare Diagnosis Revolution: 95% Accuracy Breakthrough",
      description: "Discover how a leading healthcare system achieved 95% diagnostic accuracy and 60% faster diagnosis times using revolutionary AI technology, saving lives and reducing costs by $2.3M annually.",
      href: "/case-studies/ai-healthcare-diagnosis-revolution-2025",
      type: "case-study",
      readTime: "12 min read",
      isNew: true,
      icon: "🏥",
      category: "Healthcare AI",
      featured: true,
      badge: "Featured",
      badgeColor: "bg-green-500",
      metrics: "$2.3M savings",
      author: "Zion Tech Group",
      publishDate: "Jan 17, 2025",
      rating: 4.8
    },
    {
      title: "AI 2025 Comprehensive Implementation Playbook: Complete Guide",
      description: "The ultimate 200-page AI implementation playbook for 2025. Step-by-step framework, templates, checklists, and proven strategies to successfully implement AI in your organization with 95% success rate.",
      href: "/resources/ai-2025-comprehensive-implementation-playbook",
      type: "resource",
      readTime: "200 pages",
      isNew: true,
      icon: "📚",
      category: "Implementation",
      featured: true,
      isTrending: true,
      badge: "Popular",
      badgeColor: "bg-purple-500",
      metrics: "50+ templates",
      author: "Zion Tech Group",
      publishDate: "Jan 17, 2025",
      rating: 4.9
    },
    {
      title: "AI Financial Services Transformation: $50M Cost Savings Case Study",
      description: "Discover how a leading financial services company achieved $50M cost savings and 300% efficiency gains through comprehensive AI transformation.",
      href: "/case-studies/ai-financial-services-transformation-2025",
      type: "case-study",
      readTime: "18 min read",
      isNew: false,
      icon: "🏦",
      category: "Financial AI",
      featured: false,
      badge: "Success Story",
      badgeColor: "bg-blue-500",
      metrics: "$50M savings",
      author: "Zion Tech Group",
      publishDate: "Jan 15, 2025",
      rating: 4.7
    },
    {
      title: "AI Manufacturing Automation: 300% Efficiency Gains",
      description: "Learn how smart factory implementation achieved 300% efficiency gains through AI-powered automation and predictive maintenance.",
      href: "/case-studies/ai-manufacturing-automation-2025",
      type: "case-study",
      readTime: "16 min read",
      isNew: false,
      icon: "🏭",
      category: "Manufacturing AI",
      featured: false,
      badge: "Case Study",
      badgeColor: "bg-orange-500",
      metrics: "300% efficiency",
      author: "Zion Tech Group",
      publishDate: "Jan 14, 2025",
      rating: 4.6
    },
    {
      title: "AI Trends 2025: Comprehensive Market Analysis",
      description: "Deep dive into the AI trends shaping 2025 and beyond, with market insights, investment opportunities, and strategic recommendations.",
      href: "/resources/ai-2025-trends-report",
      type: "resource",
      readTime: "45 pages",
      isNew: false,
      icon: "📊",
      category: "Market Analysis",
      featured: false,
      badge: "Report",
      badgeColor: "bg-indigo-500",
      metrics: "Market insights",
      author: "Zion Tech Group",
      publishDate: "Jan 12, 2025",
      rating: 4.8
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <BookOpen className="w-4 h-4" />;
      case 'case-study': return <Award className="w-4 h-4" />;
      case 'resource': return <Download className="w-4 h-4" />;
      case 'video': return <PlayCircle className="w-4 h-4" />;
      case 'webinar': return <Globe className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'text-blue-600 bg-blue-100';
      case 'case-study': return 'text-green-600 bg-green-100';
      case 'resource': return 'text-purple-600 bg-purple-100';
      case 'video': return 'text-red-600 bg-red-100';
      case 'webinar': return 'text-indigo-600 bg-indigo-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getColumnClasses = () => {
    switch (columns) {
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 mb-4">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Latest Content</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className={`grid ${getColumnClasses()} gap-8`}>
          {featuredContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:border-blue-300">
                {/* Header with badges */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {content.isNew && (
                        <span className="px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">
                          NEW
                        </span>
                      )}
                      {content.badge && (
                        <span className={`px-2 py-1 text-xs font-semibold text-white rounded-full ${content.badgeColor}`}>
                          {content.badge}
                        </span>
                      )}
                      {content.isTrending && (
                        <span className="px-2 py-1 text-xs font-semibold text-white bg-orange-500 rounded-full flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          TRENDING
                        </span>
                      )}
                    </div>
                    <div className="text-3xl">{content.icon}</div>
                  </div>

                  {/* Type and category */}
                  <div className="flex items-center space-x-3 mb-3">
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(content.type)}`}>
                      {getTypeIcon(content.type)}
                      <span className="ml-1 capitalize">{content.type.replace('-', ' ')}</span>
                    </span>
                    {content.category && (
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {content.category}
                      </span>
                    )}
                  </div>

                  {/* Title and description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {content.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {content.description}
                  </p>

                  {/* Metrics and metadata */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      {content.readTime && (
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {content.readTime}
                        </div>
                      )}
                      {content.metrics && (
                        <div className="flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          {content.metrics}
                        </div>
                      )}
                    </div>
                    {content.rating && (
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-1" />
                        <span className="font-medium">{content.rating}</span>
                      </div>
                    )}
                  </div>

                  {/* Author and date */}
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{content.author}</span>
                    <span>{content.publishDate}</span>
                  </div>
                </div>

                {/* Footer with CTA */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      {content.type === 'resource' ? 'Download' : 'Read More'}
                    </span>
                    <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
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
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              {viewAllText}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedNewContentShowcase;