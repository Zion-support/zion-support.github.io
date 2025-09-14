import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, BookOpen, Users, Award } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  excerpt: string;
  type: 'blog' | 'resource' | 'case-study';
  featured: boolean;
  date: string;
  tags: string[];
  image?: string;
  link: string;
}

const ContentShowcase: React.FC = () => {
  const featuredContent: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025: Enterprise Automation Mastery - Complete Guide',
      excerpt: 'Discover the complete roadmap to enterprise AI automation mastery in 2025. Learn implementation strategies, ROI optimization, and real-world success stories.',
      type: 'blog',
      featured: true,
      date: '2025-01-17',
      tags: ['AI', 'Enterprise', 'Automation', '2025'],
      link: '/blog/ai-2025-enterprise-automation-mastery-complete-guide',
      image: '/images/ai-enterprise-automation-2025.jpg'
    },
    {
      id: '2',
      title: 'AI 2025 Implementation Checklist - Comprehensive Guide',
      excerpt: 'Complete step-by-step checklist for successful AI implementation in 2025. Covering strategy, technology, team, and execution phases.',
      type: 'resource',
      featured: true,
      date: '2025-01-17',
      tags: ['AI', 'Implementation', 'Checklist', '2025'],
      link: '/resources/ai-2025-implementation-checklist-comprehensive',
      image: '/images/ai-implementation-checklist.jpg'
    },
    {
      id: '3',
      title: 'Fortune 500 AI Transformation: $2.3B Revenue Increase',
      excerpt: 'How a Fortune 500 manufacturing company achieved $2.3 billion in revenue increase through comprehensive AI transformation in just 18 months.',
      type: 'case-study',
      featured: true,
      date: '2025-01-17',
      tags: ['Fortune 500', 'AI Transformation', 'Revenue Growth', 'ROI'],
      link: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      image: '/images/fortune-500-ai-transformation.jpg'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-5 h-5" />;
      case 'resource':
        return <Award className="w-5 h-5" />;
      case 'case-study':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'resource':
        return 'bg-green-100 text-green-800';
      case 'case-study':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog':
        return 'Blog Post';
      case 'resource':
        return 'Resource Guide';
      case 'case-study':
        return 'Case Study';
      default:
        return 'Content';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest Insights & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI strategies, implementation guides, and real-world transformation stories from industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-500 to-purple-600">
                  <div className="flex items-center justify-center text-white">
                    <div className="text-6xl opacity-20">
                      {item.type === 'blog' && '📝'}
                      {item.type === 'resource' && '📚'}
                      {item.type === 'case-study' && '📊'}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    {getTypeLabel(item.type)}
                  </span>
                </div>
                {item.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                      ⭐ Featured
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group/link"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Insights</h3>
              <p className="text-gray-600 text-sm">
                Latest AI trends, strategies, and best practices from industry experts
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation Guides</h3>
              <p className="text-gray-600 text-sm">
                Step-by-step guides and checklists for successful AI implementation
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Success Stories</h3>
              <p className="text-gray-600 text-sm">
                Real-world case studies and transformation stories from leading companies
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <BookOpen className="w-5 h-5" />
              Explore All Content
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              <Award className="w-5 h-5" />
              View Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;