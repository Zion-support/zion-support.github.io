"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const RevolutionaryContentShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = [
    { id: 'all', label: 'All Content', count: 12 },
    { id: 'breakthrough', label: 'Breakthrough AI', count: 4 },
    { id: 'case-studies', label: 'Success Stories', count: 4 },
    { id: 'guides', label: 'Implementation', count: 4 }
  ];

  const revolutionaryContent = [
    {
      id: 'neural-consciousness',
      title: 'Neural Consciousness Breakthrough',
      description: 'Revolutionary conscious AI with genuine self-awareness, intentionality, and autonomous decision-making capabilities.',
      category: 'breakthrough',
      type: 'Blog Post',
      metrics: '99.8% Decision Accuracy',
      roi: '2,400% ROI',
      readingTime: '18 min read',
      url: '/blog/ai-2025-neural-consciousness-breakthrough-revolutionary-autonomous-intelligence',
      featured: true,
      badge: '🧠 NEW BREAKTHROUGH'
    },
    {
      id: 'enterprise-transformation',
      title: 'Global Enterprise Transformation',
      description: 'How a Fortune 500 manufacturing giant achieved $15.8 billion ROI through conscious AI transformation.',
      category: 'case-studies',
      type: 'Case Study',
      metrics: '$15.8B Annual Savings',
      roi: '2,400% ROI',
      readingTime: '22 min read',
      url: '/case-studies/global-enterprise-conscious-ai-transformation-2025-15-billion-roi',
      featured: true,
      badge: '💰 $15B SUCCESS'
    },
    {
      id: 'autonomous-business-guide',
      title: 'Autonomous Business Revolution Guide',
      description: 'Complete implementation guide to autonomous business operations with proven strategies and frameworks.',
      category: 'guides',
      type: 'Implementation Guide',
      metrics: '1,500% ROI Framework',
      roi: 'Zero Error Operations',
      readingTime: '25 min read',
      url: '/resources/ai-2025-autonomous-business-revolution-complete-guide',
      featured: true,
      badge: '📚 COMPLETE GUIDE'
    },
    {
      id: 'quantum-neural-fusion',
      title: 'Quantum-Neural Fusion Revolution',
      description: 'Breakthrough quantum computing meets advanced neural networks for unprecedented AI capabilities.',
      category: 'breakthrough',
      type: 'Blog Post',
      metrics: '5,000% Processing Power',
      roi: '3,200% ROI',
      readingTime: '20 min read',
      url: '/blog/ai-2025-quantum-neural-fusion-revolution',
      featured: false,
      badge: '⚛️ QUANTUM AI'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Success Story',
      description: 'Leading manufacturer achieves $28.5B annual savings through comprehensive AI transformation.',
      category: 'case-studies',
      type: 'Case Study',
      metrics: '$28.5B Annual Savings',
      roi: '4,200% ROI',
      readingTime: '19 min read',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
      featured: false,
      badge: '🏆 FORTUNE 500'
    },
    {
      id: 'ai-implementation-roadmap',
      title: 'AI Implementation Roadmap 2025',
      description: 'Step-by-step roadmap to achieve 1,200% ROI through strategic AI implementation.',
      category: 'guides',
      type: 'Implementation Guide',
      metrics: '1,200% ROI Roadmap',
      roi: '18-Month Timeline',
      readingTime: '30 min read',
      url: '/resources/ai-implementation-roadmap-2025',
      featured: false,
      badge: '🗺️ ROADMAP'
    },
    {
      id: 'synthetic-intelligence',
      title: 'Synthetic Intelligence Breakthrough',
      description: 'Next-generation AI that creates, evolves, and improves itself autonomously.',
      category: 'breakthrough',
      type: 'Blog Post',
      metrics: 'Self-Evolving AI',
      roi: '2,500% ROI',
      readingTime: '16 min read',
      url: '/blog/ai-2025-synthetic-intelligence-revolution',
      featured: false,
      badge: '🤖 SYNTHETIC AI'
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation',
      description: 'Leading healthcare system achieves 99.7% diagnostic accuracy with AI-powered systems.',
      category: 'case-studies',
      type: 'Case Study',
      metrics: '99.7% Diagnostic Accuracy',
      roi: '1,800% ROI',
      readingTime: '21 min read',
      url: '/case-studies/healthcare-ai-transformation-2025-success',
      featured: false,
      badge: '🏥 HEALTHCARE'
    },
    {
      id: 'neural-networks-guide',
      title: 'Advanced Neural Networks Guide',
      description: 'Complete guide to implementing advanced neural networks for enterprise applications.',
      category: 'guides',
      type: 'Implementation Guide',
      metrics: '500+ Layer Networks',
      roi: '2,800% ROI',
      readingTime: '28 min read',
      url: '/resources/advanced-neural-networks-implementation-guide',
      featured: false,
      badge: '🧠 NEURAL NETWORKS'
    },
    {
      id: 'autonomous-systems',
      title: 'Autonomous Systems Revolution',
      description: 'Revolutionary autonomous systems that operate independently with perfect reliability.',
      category: 'breakthrough',
      type: 'Blog Post',
      metrics: '99.9% Autonomy',
      roi: '1,800% ROI',
      readingTime: '17 min read',
      url: '/blog/ai-2025-autonomous-systems-revolution',
      featured: false,
      badge: '🚀 AUTONOMOUS'
    },
    {
      id: 'financial-services-success',
      title: 'Financial Services AI Success',
      description: 'Major bank achieves $12.3B annual savings through AI-powered financial services.',
      category: 'case-studies',
      type: 'Case Study',
      metrics: '$12.3B Annual Savings',
      roi: '2,200% ROI',
      readingTime: '20 min read',
      url: '/case-studies/financial-services-ai-transformation-2025',
      featured: false,
      badge: '💳 FINANCIAL'
    },
    {
      id: 'quantum-computing-guide',
      title: 'Quantum Computing Implementation',
      description: 'Complete guide to implementing quantum computing for business applications.',
      category: 'guides',
      type: 'Implementation Guide',
      metrics: '1,000+ Qubit Systems',
      roi: '3,500% ROI',
      readingTime: '32 min read',
      url: '/resources/quantum-computing-business-implementation-guide',
      featured: false,
      badge: '⚛️ QUANTUM'
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? revolutionaryContent 
    : revolutionaryContent.filter(content => content.category === activeCategory);

  const featuredContent = revolutionaryContent.filter(content => content.featured);

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            🌟 REVOLUTIONARY CONTENT COLLECTION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Breakthrough AI Content That Transforms Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of revolutionary AI content featuring neural consciousness, 
            quantum computing, autonomous systems, and proven ROI success stories.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Breakthrough Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredContent.map((content) => (
              <div key={content.id} className="relative group">
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden">
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      {content.badge}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        {content.type}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {content.title}
                    </h4>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {content.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-sm text-gray-500">Performance</div>
                        <div className="text-lg font-bold text-green-600">{content.metrics}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-sm text-gray-500">ROI</div>
                        <div className="text-lg font-bold text-purple-600">{content.roi}</div>
                      </div>
                    </div>

                    {/* Reading Time */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">{content.readingTime}</span>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        Featured
                      </div>
                    </div>

                    <Link
                      href={content.url}
                      className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Read {content.type}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-300 hover:text-purple-600'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div key={content.id} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {content.badge}
                  </span>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {content.type}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {content.title}
                  </h4>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {content.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-1 gap-3 mb-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500">Performance</div>
                      <div className="text-sm font-bold text-green-600">{content.metrics}</div>
                    </div>
                  </div>

                  {/* Reading Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{content.readingTime}</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {content.category}
                    </div>
                  </div>

                  <Link
                    href={content.url}
                    className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Read {content.type}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of companies achieving breakthrough results with our AI transformation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase;