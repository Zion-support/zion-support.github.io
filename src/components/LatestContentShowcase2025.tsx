import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, TrendingUp, Award, BookOpen } from 'lucide-react';

const LatestContentShowcase2025 = () => {
  const latestContent = [
    {
      id: 1,
      type: 'blog',
      title: 'AI 2025: Next-Generation Autonomous Systems Revolutionary Breakthrough',
      excerpt: 'Discover the revolutionary breakthrough in next-generation autonomous systems that are transforming business operations in 2025.',
      author: 'Zion Tech Group',
      date: '2025-01-13',
      readTime: '12 min read',
      category: 'AI Technology',
      featured: true,
      url: '/blog/ai-2025-next-generation-autonomous-systems-revolutionary-breakthrough',
      image: '/images/ai-2025-autonomous-systems-breakthrough.jpg',
      stats: {
        views: '15.2K',
        engagement: '94%'
      }
    },
    {
      id: 2,
      type: 'case-study',
      title: 'AI 2025 Global Enterprise Transformation: 15,000% ROI Breakthrough Success Story',
      excerpt: 'Learn how a Fortune 500 company achieved a staggering 15,000% ROI through comprehensive AI transformation in 2025.',
      author: 'Zion Tech Group',
      date: '2025-01-13',
      readTime: '18 min read',
      category: 'Case Study',
      featured: true,
      url: '/case-studies/ai-2025-global-enterprise-transformation-breakthrough-15000-roi',
      image: '/images/ai-enterprise-transformation-15000-roi.jpg',
      stats: {
        views: '28.7K',
        engagement: '97%'
      }
    },
    {
      id: 3,
      type: 'guide',
      title: 'AI 2025 Ultimate Autonomous Systems Implementation Master Guide',
      excerpt: 'The complete master guide to implementing autonomous AI systems from strategy to execution and optimization.',
      author: 'Zion Tech Group',
      date: '2025-01-13',
      readTime: '25 min read',
      category: 'Implementation Guide',
      featured: true,
      url: '/resources/ai-2025-ultimate-autonomous-systems-implementation-master-guide',
      image: '/images/ai-2025-implementation-master-guide.jpg',
      stats: {
        views: '42.1K',
        engagement: '96%'
      }
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-5 h-5" />;
      case 'case-study':
        return <Award className="w-5 h-5" />;
      case 'guide':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'guide':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            Latest Content - January 2025
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Breakthrough Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest insights, case studies, and implementation guides for next-generation autonomous AI systems.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {latestContent.map((content, index) => (
            <Link 
              key={content.id}
              href={content.url}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(content.type)}`}>
                    {getTypeIcon(content.type)}
                    <span className="ml-1 capitalize">{content.type.replace('-', ' ')}</span>
                  </span>
                </div>
                {content.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-400 text-yellow-900 text-xs font-bold">
                      ⭐ FEATURED
                    </span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {content.stats.views} views
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                      {content.stats.engagement}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  {content.date}
                  <Clock className="w-4 h-4 ml-4 mr-1" />
                  {content.readTime}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    By {content.author}
                  </div>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Content Performance</h3>
            <p className="text-blue-100">Our latest content is making waves in the AI community</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">85.9K</div>
              <div className="text-blue-100 text-sm">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">95.7%</div>
              <div className="text-blue-100 text-sm">Engagement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">2.3K</div>
              <div className="text-blue-100 text-sm">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-blue-100 text-sm">User Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated with the Latest AI Breakthroughs
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get exclusive access to our latest content, case studies, and implementation guides. 
            Join thousands of professionals transforming their businesses with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/newsletter" 
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Subscribe to Newsletter
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestContentShowcase2025;