import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, TrendingUp, Users, Globe, Zap, Star, Clock } from 'lucide-react';

const featuredContent = [
  {
    type: 'blog',
    title: 'AI 2025: Revolutionary Breakthroughs That Will Transform Everything',
    description: 'Discover the most groundbreaking AI innovations of 2025 that are reshaping industries, from quantum-enhanced neural networks to autonomous business intelligence systems.',
    url: '/blog/ai-2025-revolutionary-breakthroughs',
    category: 'Breakthrough Innovation',
    readTime: '8 min read',
    featured: true,
    metrics: {
      accuracy: '99.7%',
      roi: '2000%',
      impact: 'Global'
    }
  },
  {
    type: 'case-study',
    title: 'Global Enterprise AI Transformation: 2000% ROI Breakthrough',
    description: 'How a Fortune 500 company achieved unprecedented 2000% ROI through comprehensive AI transformation, revolutionizing operations across 50+ countries.',
    url: '/case-studies/ai-2025-global-enterprise-transformation-breakthrough',
    category: 'Success Story',
    readTime: '12 min read',
    featured: true,
    metrics: {
      roi: '2000%',
      savings: '$2.5B',
      countries: '50+'
    }
  }
];

const trendingContent = [
  {
    type: 'blog',
    title: 'AI 2025 Comprehensive Trends Analysis',
    description: 'Deep dive into the most significant AI trends shaping 2025 and beyond.',
    url: '/blog/ai-2025-comprehensive-trends-analysis',
    category: 'Trend Analysis',
    readTime: '6 min read',
    trending: true
  },
  {
    type: 'case-study',
    title: 'Fortune 500 Manufacturing Transformation Success',
    description: 'How a Fortune 500 company achieved 1500% ROI with AI implementation.',
    url: '/case-studies/ai-2025-fortune-500-transformation-breakthrough',
    category: 'Manufacturing',
    readTime: '10 min read',
    trending: true
  },
  {
    type: 'resource',
    title: 'AI 2025 Ultimate Implementation Toolkit',
    description: 'Complete guide to implementing AI breakthroughs in your organization.',
    url: '/resources/ai-2025-ultimate-implementation-toolkit',
    category: 'Implementation',
    readTime: '15 min read',
    trending: true
  }
];

const latestContent = [
  {
    type: 'blog',
    title: 'Quantum-Enhanced Neural Networks: The Future is Here',
    description: 'Exploring breakthrough quantum-classical hybrid architectures achieving unprecedented accuracy.',
    url: '/blog/quantum-enhanced-neural-networks-2025',
    category: 'Quantum AI',
    readTime: '7 min read',
    new: true
  },
  {
    type: 'case-study',
    title: 'Healthcare AI Diagnosis: 95% Accuracy Breakthrough',
    description: 'Revolutionary AI diagnostic systems transforming healthcare outcomes.',
    url: '/case-studies/ai-healthcare-diagnosis-breakthrough-2025',
    category: 'Healthcare',
    readTime: '9 min read',
    new: true
  },
  {
    type: 'blog',
    title: 'Autonomous Business Intelligence: Self-Evolving AI Systems',
    description: 'How AI systems are automatically optimizing business processes and predicting market changes.',
    url: '/blog/autonomous-business-intelligence-2025',
    category: 'Business AI',
    readTime: '5 min read',
    new: true
  }
];

export default function AI2025RevolutionaryContentShowcase() {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 mr-2" />
            REVOLUTIONARY AI CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover the Future of AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore breakthrough innovations, success stories, and implementation guides 
            that are transforming industries worldwide.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Featured Content</h3>
            <Link 
              href="/content-showcase" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                      {content.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {content.readTime}
                    </div>
                  </div>

                  <h4 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {content.title}
                  </h4>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {content.description}
                  </p>

                  {/* Metrics */}
                  {content.metrics && (
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(content.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{value}</div>
                          <div className="text-sm text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link 
                    href={content.url}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Read {content.type === 'blog' ? 'Article' : content.type === 'case-study' ? 'Case Study' : 'Guide'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Content */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Trending Now</h3>
            <Link 
              href="/trending" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All Trending
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingContent.map((content, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    {content.category}
                  </span>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-gray-500">Trending</span>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {content.title}
                </h4>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {content.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {content.readTime}
                  </div>
                  <Link 
                    href={content.url}
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Content */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Latest Updates</h3>
            <Link 
              href="/latest" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All Latest
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestContent.map((content, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                    {content.category}
                  </span>
                  {content.new && (
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">
                      NEW
                    </span>
                  )}
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {content.title}
                </h4>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {content.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {content.readTime}
                  </div>
                  <Link 
                    href={content.url}
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with AI Breakthroughs
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Get the latest insights, case studies, and implementation guides delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}