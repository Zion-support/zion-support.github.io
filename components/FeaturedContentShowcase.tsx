import React from 'react';
import Link from 'next/link';
import { BookOpen, Case, Wrench, ArrowRight, Calendar, Clock, Eye, TrendingUp } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  featured: boolean;
  publishDate: string;
  readTime: string;
  views: string;
  category: string;
  tags: string[];
  image?: string;
}

const FeaturedContentShowcase: React.FC = () => {
  const featuredContent: ContentItem[] = [
    {
      id: 'generative-ai-revolution',
      title: 'The Generative AI Revolution 2025: Beyond Text and Images',
      description: 'Explore how generative AI is revolutionizing content creation, design, and business processes with advanced multimodal capabilities and enterprise applications.',
      type: 'blog',
      url: '/blog/ai-2025-generative-ai-revolution',
      featured: true,
      publishDate: 'January 30, 2025',
      readTime: '22 min read',
      views: '3.1K views',
      category: 'AI Innovation',
      tags: ['Generative AI', 'Content Creation', 'Multimodal AI', 'Enterprise AI']
    },
    {
      id: 'healthcare-diagnosis',
      title: 'AI Healthcare Diagnosis Revolution 2025: Saving Lives with Precision Medicine',
      description: 'Discover how AI is revolutionizing healthcare diagnosis with early disease detection, personalized treatment plans, and improved patient outcomes.',
      type: 'blog',
      url: '/blog/ai-healthcare-diagnosis-revolution-2025',
      featured: true,
      publishDate: 'January 30, 2025',
      readTime: '25 min read',
      views: '4.2K views',
      category: 'Healthcare AI',
      tags: ['Medical AI', 'Diagnosis', 'Precision Medicine', 'Healthcare Technology']
    },
    {
      id: 'financial-transformation',
      title: 'AI Financial Services Transformation Success: $2.3B in Value Created',
      description: 'Comprehensive case study of how a Fortune 500 company achieved unprecedented success through AI transformation, creating $2.3 billion in value.',
      type: 'case-study',
      url: '/case-studies/ai-financial-services-transformation-success-2025',
      featured: true,
      publishDate: 'January 30, 2025',
      readTime: '28 min read',
      views: '5.7K views',
      category: 'Financial Services',
      tags: ['AI Transformation', 'Fintech', 'Banking AI', 'ROI Success']
    },
    {
      id: 'ai-tools-frameworks',
      title: 'AI Tools & Frameworks 2025: Complete Developer Resource Guide',
      description: 'Comprehensive guide to the best AI tools, frameworks, and libraries for developers in 2025. From machine learning to generative AI.',
      type: 'resource',
      url: '/resources/ai-tools-frameworks-2025',
      featured: true,
      publishDate: 'January 30, 2025',
      readTime: '35 min read',
      views: '8.9K views',
      category: 'Developer Resources',
      tags: ['AI Tools', 'Frameworks', 'Developer Guide', 'Machine Learning']
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-5 h-5" />;
      case 'case-study':
        return <Case className="w-5 h-5" />;
      case 'resource':
        return <Wrench className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'case-study':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'resource':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog':
        return 'Blog Post';
      case 'case-study':
        return 'Case Study';
      case 'resource':
        return 'Resource';
      default:
        return 'Content';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            FEATURED CONTENT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest AI Insights & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our latest research, case studies, and resources covering the most 
            important developments in artificial intelligence and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Article - Large */}
          <div className="lg:col-span-1">
            <Link href={featuredContent[0].url} className="group block">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(featuredContent[0].type)}`}>
                      {getTypeIcon(featuredContent[0].type)}
                      <span className="ml-2">{getTypeLabel(featuredContent[0].type)}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {featuredContent[0].category}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {featuredContent[0].title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredContent[0].description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {featuredContent[0].publishDate}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredContent[0].readTime}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {featuredContent[0].views}
                      </div>
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {featuredContent[0].tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Other Featured Articles */}
          <div className="lg:col-span-1 space-y-6">
            {featuredContent.slice(1).map((item, index) => (
              <Link key={item.id} href={item.url} className="group block">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                      <span className="ml-1">{getTypeLabel(item.type)}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.category}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      <span>{item.publishDate}</span>
                      <span>•</span>
                      <span>{item.readTime}</span>
                      <span>•</span>
                      <span>{item.views}</span>
                    </div>
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                      Read
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with the Latest AI Insights
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Get exclusive access to our latest research, case studies, and expert analysis 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore All Content
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/newsletter"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContentShowcase;