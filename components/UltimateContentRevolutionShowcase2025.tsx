"use client";
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentRevolutionShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: "AI 2025: The Ultimate Content Revolution",
      description: "25,000% ROI Guide - Transform Your Business with Revolutionary AI Content Strategies",
      url: "/blog/ai-2025-ultimate-content-revolution-ultimate-breakthrough",
      type: "Blog Post",
      category: "AI Revolution",
      metrics: "25,000% ROI",
      savings: "$500B+",
      readingTime: "35 min read",
      featured: true
    },
    {
      id: 2,
      title: "Fortune 500 AI Content Revolution Success",
      description: "$500B Annual Savings - 25,000% ROI Success Story",
      url: "/case-studies/fortune-500-ai-content-revolution-25000-roi-success-story",
      type: "Case Study",
      category: "Success Stories",
      metrics: "25,000% ROI",
      savings: "$500B",
      readingTime: "25 min read",
      featured: true
    },
    {
      id: 3,
      title: "AI Content Revolution Implementation Guide",
      description: "Complete Roadmap to 25,000% ROI - Revolutionary Content Strategy",
      url: "/resources/ai-content-revolution-implementation-guide-2025",
      type: "Implementation Guide",
      category: "Guides",
      metrics: "25,000% ROI",
      savings: "$500B+",
      readingTime: "45 min read",
      featured: false
    },
    {
      id: 4,
      title: "Advanced AI Content Analytics",
      description: "Revolutionary Analytics for 25,000% ROI Content Performance",
      url: "/blog/advanced-ai-content-analytics-2025",
      type: "Blog Post",
      category: "AI Revolution",
      metrics: "25,000% ROI",
      savings: "$200B+",
      readingTime: "30 min read",
      featured: false
    },
    {
      id: 5,
      title: "Global Content Distribution Success",
      description: "Multi-Market Content Strategy Achieving 25,000% ROI",
      url: "/case-studies/global-content-distribution-success-2025",
      type: "Case Study",
      category: "Success Stories",
      metrics: "25,000% ROI",
      savings: "$300B",
      readingTime: "20 min read",
      featured: false
    },
    {
      id: 6,
      title: "Content Automation Mastery",
      description: "Complete Guide to Automated Content Operations",
      url: "/resources/content-automation-mastery-guide-2025",
      type: "Implementation Guide",
      category: "Guides",
      metrics: "25,000% ROI",
      savings: "$150B+",
      readingTime: "40 min read",
      featured: false
    }
  ];

  const categories = ['all', 'AI Revolution', 'Success Stories', 'Guides'];

  const filteredContent = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeFilter);

  const featuredContent = contentItems.filter(item => item.featured);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-semibold">🚀 ULTIMATE CONTENT REVOLUTION 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breakthrough content strategies delivering 25,000% ROI and transforming businesses worldwide
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Content</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredContent.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.type}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.metrics}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-gray-500">
                        <span className="font-semibold">Savings:</span> {item.savings}
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="font-semibold">Read:</span> {item.readingTime}
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    href={item.url}
                    className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Read Full Content
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                  activeFilter === category
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category === 'all' ? 'All Content' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {item.type}
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {item.metrics}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold">Savings:</span> {item.savings}
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.readingTime}
                  </div>
                </div>
                
                <Link
                  href={item.url}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Read More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve 25,000% ROI?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of businesses transforming their content strategy with our revolutionary AI framework
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/content"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentRevolutionShowcase2025;