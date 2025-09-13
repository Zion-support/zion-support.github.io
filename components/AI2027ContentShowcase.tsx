import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Star, TrendingUp, Brain, Car, BookOpen } from 'lucide-react';

const featuredContent = [
  {
    title: 'AI 2027 Future Predictions: Revolutionary Breakthroughs Ahead',
    description: 'Discover the most groundbreaking AI predictions for 2027. From quantum AI to neural interfaces, explore the future of artificial intelligence.',
    href: '/blog/ai-2027-future-predictions',
    type: 'Blog Post',
    readTime: '15 min',
    category: 'Predictions',
    icon: <Brain className="w-6 h-6" />,
    featured: true,
    stats: {
      views: '12.5K',
      rating: '4.9',
      comments: '127'
    }
  },
  {
    title: 'AI 2027 Automotive Transformation: 3000% ROI Breakthrough',
    description: 'How a leading automotive manufacturer achieved 3000% ROI using AI 2027 technologies. Complete transformation story with actionable insights.',
    href: '/case-studies/ai-2027-automotive-transformation-breakthrough',
    type: 'Case Study',
    readTime: '12 min',
    category: 'Success Story',
    icon: <Car className="w-6 h-6" />,
    featured: true,
    stats: {
      views: '8.7K',
      rating: '4.8',
      comments: '89'
    }
  },
  {
    title: 'AI 2027 Ultimate Implementation Master Guide',
    description: 'The definitive guide to implementing AI 2027 technologies in your organization. Step-by-step roadmap with proven strategies.',
    href: '/resources/ai-2027-ultimate-implementation-master-guide',
    type: 'Implementation Guide',
    readTime: '25 min',
    category: 'Guide',
    icon: <BookOpen className="w-6 h-6" />,
    featured: true,
    stats: {
      views: '15.2K',
      rating: '4.9',
      comments: '203'
    }
  }
];

const trendingContent = [
  {
    title: 'Quantum AI Revolution: What to Expect in 2027',
    href: '/blog/quantum-ai-revolution-2027',
    category: 'Quantum Computing',
    views: '6.3K'
  },
  {
    title: 'Neural Interface Breakthroughs: The Future is Here',
    href: '/blog/neural-interface-breakthroughs-2027',
    category: 'Neural Interfaces',
    views: '5.8K'
  },
  {
    title: 'AI 2027 Healthcare Transformation Case Study',
    href: '/case-studies/ai-2027-healthcare-transformation',
    category: 'Healthcare AI',
    views: '7.1K'
  },
  {
    title: 'Autonomous Everything: AI 2027 Implementation',
    href: '/resources/autonomous-everything-ai-2027',
    category: 'Autonomous Systems',
    views: '4.9K'
  }
];

export default function AI2027ContentShowcase() {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            AI 2027 BREAKTHROUGH CONTENT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content for 2027
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge AI predictions, success stories, and implementation guides 
            that will transform your understanding of artificial intelligence.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg">
                      {content.icon}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                        {content.type}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {content.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        {content.stats.views} views
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-semibold">{content.stats.rating}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={content.href}
                    className="group/link inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Trending Now</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trendingContent.map((content, index) => (
              <Link 
                key={index}
                href={content.href}
                className="group block p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {content.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    {content.views}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                  {content.title}
                </h4>
                <div className="flex items-center gap-2 text-purple-600 font-semibold">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your AI Strategy?</h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Join thousands of organizations already implementing AI 2027 technologies. 
            Get started with our comprehensive implementation guide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/resources/ai-2027-ultimate-implementation-master-guide"
              className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Implementation Guide
            </Link>
            <Link 
              href="/contact"
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}