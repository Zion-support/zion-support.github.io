import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Calendar, Clock, TrendingUp, BookOpen, FileText, Lightbulb, Award, Users } from 'lucide-react';

const FeaturedContentShowcase = () => {
  const featuredContent = [
    {
      title: 'AI 2025: Revolutionary Trends Shaping the Future',
      description: 'Discover the groundbreaking AI trends of 2025 that are revolutionizing industries, from quantum-enhanced machine learning to autonomous AI systems.',
      type: 'Blog Post',
      category: 'AI Trends',
      href: '/blog/ai-2025-revolutionary-trends',
      image: '/api/placeholder/400/250',
      icon: <Lightbulb className="w-6 h-6" />,
      badge: 'Trending',
      badgeColor: 'bg-red-500',
      readTime: '8 min read',
      publishDate: 'Jan 17, 2025',
      stats: {
        views: '12.5K',
        likes: '890',
        shares: '234'
      }
    },
    {
      title: 'Fortune 500 AI Transformation Success Story',
      description: 'Learn how we helped a Fortune 500 company achieve 300% ROI and $50M in cost savings through comprehensive AI transformation.',
      type: 'Case Study',
      category: 'Success Stories',
      href: '/case-studies/ai-transformation-fortune-500-success-2025',
      image: '/api/placeholder/400/250',
      icon: <Star className="w-6 h-6" />,
      badge: 'Featured',
      badgeColor: 'bg-blue-500',
      readTime: '12 min read',
      publishDate: 'Jan 17, 2025',
      stats: {
        views: '8.7K',
        likes: '456',
        shares: '123'
      }
    },
    {
      title: 'AI Implementation Master Guide 2026',
      description: 'Complete guide to implementing AI in your organization with step-by-step instructions, best practices, and proven strategies.',
      type: 'Resource',
      category: 'Implementation',
      href: '/resources/ai-implementation-master-guide-2026',
      image: '/api/placeholder/400/250',
      icon: <BookOpen className="w-6 h-6" />,
      badge: 'New',
      badgeColor: 'bg-green-500',
      readTime: '15 min read',
      publishDate: 'Jan 17, 2025',
      stats: {
        views: '15.2K',
        likes: '1.2K',
        shares: '456'
      }
    }
  ];

  const categories = [
    { name: 'AI Trends', count: 12, icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'Case Studies', count: 8, icon: <Award className="w-5 h-5" /> },
    { name: 'Resources', count: 15, icon: <FileText className="w-5 h-5" /> },
    { name: 'Success Stories', count: 6, icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest insights, success stories, and comprehensive guides 
            to help you navigate the AI revolution.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="text-blue-600">{category.icon}</div>
              <span className="font-medium text-gray-900">{category.name}</span>
              <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full">
                {category.count}
              </span>
            </div>
          ))}
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${content.badgeColor} text-white`}>
                    {content.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4 text-white">
                  {content.icon}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">{content.category}</div>
                  <div className="text-xs opacity-90">{content.type}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {content.publishDate}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {content.readTime}
                    </div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <span>{content.stats.views} views</span>
                    <span>{content.stats.likes} likes</span>
                    <span>{content.stats.shares} shares</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={content.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with Latest Content
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Get notified about new articles, case studies, and resources delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContentShowcase;