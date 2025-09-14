"use client";
'use client';

import React{ useState } from 'react';
import Link from 'next/link';

const UltimateAI2025ContentShowcase = () => {
  const [activeCategorysetActiveCategory] = useState('all');

  const content = [
    {
      id: 'ultimate-transformation-guide',
      type: 'blog',
      title: 'AI 2025: The Ultimate Enterprise Transformation Revolution - Ultimate Breakthrough Guide to 5,000% ROI',
      description: 'The complete framework that has enabled Fortune 500 companies to achieve 5,000% ROI within 18 monthsgenerating $15.8 billion in annual savings.',
      url: '/blog/ai-2025-ultimate-enterprise-transformation-revolution-ultimate-breakthrough-2025',
      metrics: {
        roi: '5,000%',
        savings: '$15.8B+',
        efficiency: '2,400%',
        satisfaction: '99.7%'
      },
      readingTime: '35 min read',
      featured: true,
      category: 'transformation'
    },
    {
      id: 'fortune-500-success-story',
      type: 'case-study',
      title: 'Fortune 500 Ultimate AI Transformation: $15.8B Annual Savings - 5,000% ROI Ultimate Success Story',
      description: 'Discover how a Fortune 500 manufacturing company achieved unprecedented results through comprehensive AI transformation in just 18 months.',
      url: '/case-studies/fortune-500-ultimate-ai-transformation-5000-roi-ultimate-success-story',
      metrics: {
        roi: '5,000%',
        savings: '$15.8B',
        timeline: '18 months',
        uptime: '99.9%'
      },
      readingTime: '25 min read',
      featured: true,
      category: 'case-study'
    },
    {
      id: 'implementation-master-guide',
      type: 'resource',
      title: 'AI 2025 Ultimate Transformation Implementation Master Guide: Complete Roadmap to 5,000% ROI',
      description: 'The comprehensive 45-minute implementation guide that reveals the exact framework used by Fortune 500 companies to achieve extraordinary results.',
      url: '/resources/ai-2025-ultimate-transformation-implementation-master-guide-5000-roi',
      metrics: {
        roi: '5,000%',
        guide: '45 min',
        success: '94%',
        projects: '500+'
      },
      readingTime: '45 min read',
      featured: true,
      category: 'implementation'
    },
    {
      id: 'quantum-ai-revolution',
      type: 'blog',
      title: 'AI 2025: The Quantum AI Business Revolution - $100B Market Transformation',
      description: 'Explore how quantum AI is revolutionizing business operations with 1,200% speed improvements and 99.97% accuracy in Fortune 500 companies.',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      metrics: {
        roi: '1,200%',
        market: '$100B',
        accuracy: '99.97%',
        speed: '1,200%'
      },
      readingTime: '20 min read',
      featured: false,
      category: 'innovation'
    },
    {
      id: 'autonomous-enterprise',
      type: 'blog',
      title: 'AI 2025: The Ultimate Autonomous Enterprise Revolution - Ultimate Breakthrough Guide to 8,500% ROI',
      description: 'Learn how to build fully autonomous enterprises that achieve 8,500% ROI with 99.7% operational autonomy and $45.2B in annual savings.',
      url: '/blog/ai-2025-ultimate-autonomous-enterprise-revolution-ultimate-breakthrough',
      metrics: {
        roi: '8,500%',
        savings: '$45.2B+',
        efficiency: '3,200%',
        autonomy: '99.7%'
      },
      readingTime: '35 min read',
      featured: false,
      category: 'transformation'
    },
    {
      id: 'neural-architectures',
      type: 'blog',
      title: 'AI 2026: The Advanced Neural Architectures Revolution - Ultimate Breakthrough Guide to 5,000% ROI',
      description: 'Discover next-generation neural architectures that are enabling Fortune 500 companies to achieve 5,000% ROI with $18.2B in annual savings.',
      url: '/blog/ai-2026-advanced-neural-architectures-revolution-ultimate-breakthrough',
      metrics: {
        roi: '5,000%',
        savings: '$18.2B+',
        efficiency: '2,400%',
        accuracy: '99.98%'
      },
      readingTime: '32 min read',
      featured: false,
      category: 'innovation'
    }
  ];

  const categories = [
    { id: 'all'name: 'All Content'count: content.length },
    { id: 'transformation'name: 'Transformation'count: content.filter(c => c.category === 'transformation').length },
    { id: 'case-study'name: 'Case Studies'count: content.filter(c => c.category === 'case-study').length },
    { id: 'implementation'name: 'Implementation'count: content.filter(c => c.category === 'implementation').length },
    { id: 'innovation'name: 'Innovation'count: content.filter(c => c.category === 'innovation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  const featuredContent = content.filter(item => item.featured);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            <span className="mr-2">🚀</span>
            ULTIMATE AI 2025 CONTENT COLLECTION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access the complete collection of AI transformation content that has helped Fortune 500 companies achieve unprecedented results.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {item.type.toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-500">{item.readingTime}</span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {Object.entries(item.metrics).map(([keyvalue]) => (
                      <div key={key} className="bg-gray-50 rounded-lg p-2 text-center">
                        <div className="text-sm font-bold text-purple-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={item.url}
                    className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">All Content</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.type === 'blog' 
                      ? 'bg-blue-100 text-blue-800'
                      : item.type === 'case-study'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {item.type.toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h4>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Object.entries(item.metrics).map(([keyvalue]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-2 text-center">
                      <div className="text-sm font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
                
                <Link
                  href={item.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  {item.type === 'blog' ? 'Read Article' : item.type === 'case-study' ? 'Read Case Study' : 'Download Guide'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your AI Transformation?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies already achieving extraordinary results with our proven AI framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAI2025ContentShowcase;