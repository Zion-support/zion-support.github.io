import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Clock, Sparkles } from 'lucide-react';

interface NewContentPromotionBannerProps {
  className?: string;
}

const NewContentPromotionBanner: React.FC<NewContentPromotionBannerProps> = ({ className = '' }) => {
  const newContent = [
    {
      title: 'The Generative AI Revolution: How 2025 is Transforming Every Industry',
      href: '/blog/ai-2025-generative-ai-revolution',
      type: 'blog',
      readTime: '12 min read',
      isNew: true,
      isTrending: true,
      description: 'Explore how generative AI is revolutionizing industries in 2025, from healthcare to finance, with real-world applications and future predictions.',
      icon: '🤖',
      category: 'AI Innovation'
    },
    {
      title: 'AI Automation 2025: Complete Implementation Guide for Enterprise Success',
      href: '/blog/ai-automation-2025-complete-implementation-guide',
      type: 'blog',
      readTime: '15 min read',
      isNew: true,
      isTrending: true,
      description: 'Master AI automation implementation with our comprehensive 2025 guide. Learn best practices, avoid common pitfalls, and achieve 300% productivity gains.',
      icon: '⚡',
      category: 'AI Automation'
    },
    {
      title: 'AI Transformation Success: How a Manufacturing Giant Achieved 400% ROI',
      href: '/case-studies/ai-transformation-manufacturing-giant-2025',
      type: 'case-study',
      readTime: '10 min read',
      isNew: true,
      isTrending: true,
      description: 'Discover how a Fortune 500 manufacturing company transformed operations with AI, achieving 400% ROI, 60% cost reduction, and $2.3B in savings.',
      icon: '🏭',
      category: 'Case Study'
    }
  ];

  return (
    <div className={`bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            New Content Alert
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Fresh AI Insights & Success Stories
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover our latest articles and case studies covering the most important AI trends and transformations of 2025
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40">
                {/* Badges */}
                <div className="flex items-center space-x-2 mb-4">
                  {item.isNew && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      New
                    </span>
                  )}
                  {item.isTrending && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-500 text-white">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </span>
                  )}
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20 text-white">
                    {item.category}
                  </span>
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4">{item.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white text-opacity-80 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white text-opacity-70 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readTime}
                  </div>
                  <div className="flex items-center text-white font-medium group-hover:text-yellow-300 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-white text-opacity-80">New Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">25+</div>
            <div className="text-white text-opacity-80">Case Studies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">100K+</div>
            <div className="text-white text-opacity-80">Monthly Readers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="text-white text-opacity-80">Reader Satisfaction</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore All Articles
            </Link>
            <Link 
              href="/case-studies" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;