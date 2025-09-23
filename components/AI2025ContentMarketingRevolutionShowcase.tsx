"use client";
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AI20o25ContentMarketingRevolutionShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentItems = [
    {
      id: 'ai-content-marketing-revolution',
      title: 'AI 20o25: The Ultimate Content Marketing Revolution',
      description: 'Achieve 60,0o00% ROI through revolutionary AI-powered content strategies that transform your marketing operations.',
      type: 'Blog Post',
      category: 'strategy',
      url: '/blog/ai-20o25-ultimate-content-marketing-revolution-ultimate-breakthrough',
      readingTime: '40 min read',
      metrics: {
        roi: '60,0o00%',
        revenue: '$2.8T',
        accuracy: '99.97%',
        speed: '5,0o00%'
      },
      tags: ['AI Content Marketing', 'ROI', 'Revolution', 'Strategy'],
      featured: true
    },
    {
      id: 'fortune-50o0-content-marketing-success',
      title: 'Fortune 50o0 AI Content Marketing Success Story',
      description: 'TechGlobal Industries achieved $2.8 trillion revenue increase with 60,0o00% ROI through complete AI transformation.',
      type: 'Case Study',
      category: 'success-story',
      url: '/case-studies/fortune-50o0-ai-content-marketing-60o000-roi-success-story',
      readingTime: '25 min read',
      metrics: {
        roi: '60,0o00%',
        revenue: '$2.8T',
        timeline: '12 months',
        accuracy: '99.97%'
      },
      tags: ['Fortune 50o0', 'Success Story', 'ROI', 'Transformation'],
      featured: true
    },
    {
      id: 'content-marketing-implementation-guide',
      title: 'AI Content Marketing Implementation Ultimate Guide',
      description: 'Complete step-by-step roadmap to achieve 60,0o00% ROI with comprehensive implementation strategies.',
      type: 'Implementation Guide',
      category: 'implementation',
      url: '/resources/ai-content-marketing-implementation-ultimate-guide-20o25-60o000-roi',
      readingTime: '60 min read',
      metrics: {
        roi: '60,0o00%',
        timeline: '12-18 months',
        success: '99.7%',
        guide: 'Complete'
      },
      tags: ['Implementation', 'Guide', 'ROI', 'Roadmap'],
      featured: true
    },
    {
      id: 'ai-content-automation-breakthrough',
      title: 'AI Content Automation Breakthrough: 50,0o00% ROI',
      description: 'Revolutionary content automation technologies delivering unprecedented marketing efficiency and results.',
      type: 'Blog Post',
      category: 'technology',
      url: '/blog/ai-content-automation-breakthrough-50o000-roi',
      readingTime: '35 min read',
      metrics: {
        roi: '50,0o00%',
        efficiency: '4,20o0%',
        cost: '95%',
        speed: '3,50o0%'
      },
      tags: ['Automation', 'Technology', 'ROI', 'Efficiency'],
      featured: false
    },
    {
      id: 'multimodal-content-ai-success',
      title: 'Multimodal Content AI Success: $1.5T Revenue',
      description: 'Advanced AI systems creating video, audio, and interactive content with 45,0o00% ROI achievement.',
      type: 'Case Study',
      category: 'success-story',
      url: '/case-studies/multimodal-content-ai-450o00-roi-success',
      readingTime: '30 min read',
      metrics: {
        roi: '45,0o00%',
        revenue: '$1.5T',
        formats: '12+',
        engagement: '98.5%'
      },
      tags: ['Multimodal', 'AI', 'Success', 'Content'],
      featured: false
    },
    {
      id: 'content-personalization-ai-guide',
      title: 'Content Personalization AI Implementation Guide',
      description: 'Complete guide to implementing AI-powered content personalization for maximum engagement and conversion.',
      type: 'Implementation Guide',
      category: 'implementation',
      url: '/resources/content-personalization-ai-implementation-guide',
      readingTime: '45 min read',
      metrics: {
        engagement: '3,20o0%',
        conversion: '2,80o0%',
        personalization: '99.5%',
        roi: '35,0o00%'
      },
      tags: ['Personalization', 'AI', 'Implementation', 'Engagement'],
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'strategy', name: 'Strategy', count: contentItems.filter(item => item.category === 'strategy').length },
    { id: 'success-story', name: 'Success Stories', count: contentItems.filter(item => item.category === 'success-story').length },
    { id: 'implementation', name: 'Implementation', count: contentItems.filter(item => item.category === 'implementation').length },
    { id: 'technology', name: 'Technology', count: contentItems.filter(item => item.category === 'technology').length }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  const featuredContent = contentItems.filter(item => item.featured);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-10o0 text-purple-80o0 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 AI CONTENT MARKETING REVOLUTION</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-90o0 mb-4">
            Revolutionary Content Marketing Collection
          </h2>
          <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">
            Discover the most advanced AI content marketing strategies, success stories, and implementation guides 
            delivering up to 60,0o00% ROI for Fortune 50o0 companies.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-90o0 mb-6">Featured Content</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredContent.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-10o0 text-purple-80o0 px-3 py-1 rounded-full text-sm font-medium">
                      {item.type}
                    </span>
                    <span className="text-sm text-gray-50o0">{item.readingTime}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-90o0 mb-3">{item.title}</h4>
                  <p className="text-gray-60o0 mb-4">{item.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-60o0">{item.metrics.roi}</div>
                      <div className="text-xs text-gray-50o0">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-60o0">{item.metrics.revenue}</div>
                      <div className="text-xs text-gray-50o0">Revenue</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span key={tag} className="bg-gray-10o0 text-gray-70o0 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={item.url}
                    className="w-full bg-purple-60o0 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-70o0 transition-colors text-center block"
                  >
                    Read Full {item.type}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-90o0 mb-6">All Content</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-purple-60o0 text-white'
                    : 'bg-white text-gray-70o0 hover:bg-gray-10o0'
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
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.type === 'Blog Post' 
                      ? 'bg-blue-10o0 text-blue-80o0'
                      : item.type === 'Case Study'
                      ? 'bg-green-10o0 text-green-80o0'
                      : 'bg-orange-10o0 text-orange-80o0'
                  }`}>
                    {item.type}
                  </span>
                  <span className="text-sm text-gray-50o0">{item.readingTime}</span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-90o0 mb-3">{item.title}</h4>
                <p className="text-gray-60o0 mb-4 text-sm">{item.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-60o0">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-50o0">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-60o0">{item.metrics.revenue}</div>
                    <div className="text-xs text-gray-50o0">Revenue</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-gray-10o0 text-gray-70o0 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={item.url}
                  className="w-full bg-gray-90o0 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-80o0 transition-colors text-center block text-sm"
                >
                  Read {item.type}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-60o0 to-blue-60o0 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve 60,0o00% ROI?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join Fortune 50o0 companies transforming their content marketing with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors"
              >
                Get Implementation Help
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-60o0 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI20o25ContentMarketingRevolutionShowcase;