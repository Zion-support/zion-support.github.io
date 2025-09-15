"use client";
import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const NewContentDiscoveryWidget2025 = () => {
  const [activeTab, setActiveTab] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const contentItems = {
    featured: [
      {
        id: 1,
        title: "AI 2025 Ultimate Business Revolution: Complete Guide",
        type: "Blog Post",
        category: "AI Implementation",
        description: "Complete roadmap for implementing AI-driven business transformation with 1000%+ ROI strategies.",
        image: "/images/ai-business-revolution-guide.jpg",
        readTime: "15 min read",
        featured: true,
        url: "/blog/ai-2025-ultimate-business-revolution-complete-guide"
      },
      {
        id: 2,
        title: "50,000% ROI Success Story: Fortune 100 Transformation",
        type: "Case Study",
        category: "Success Stories",
        description: "How a Fortune 100 manufacturing giant achieved $2.8B savings and $15.6B revenue increase.",
        image: "/images/50k-roi-case-study.jpg",
        readTime: "12 min read",
        featured: true,
        url: "/case-studies/ai-2025-ultimate-transformation-50000-roi-success-story"
      },
      {
        id: 3,
        title: "AI 2025 Neural Superintelligence Breakthrough",
        type: "Blog Post",
        category: "Advanced AI",
        description: "Exploring the latest breakthroughs in neural superintelligence and consciousness evolution.",
        image: "/images/neural-superintelligence.jpg",
        readTime: "18 min read",
        featured: true,
        url: "/blog/ai-2025-2026-neural-superintelligence-breakthrough"
      }
    ],
    latest: [
      {
        id: 4,
        title: "Quantum AI Business Applications 2025",
        type: "Blog Post",
        category: "Quantum Computing",
        description: "Real-world quantum AI applications delivering breakthrough business results.",
        image: "/images/quantum-ai-business.jpg",
        readTime: "14 min read",
        featured: false,
        url: "/blog/ai-2025-quantum-ai-business-revolution-ultimate-guide"
      },
      {
        id: 5,
        title: "Autonomous Enterprise Systems Implementation",
        type: "Case Study",
        category: "Automation",
        description: "Complete guide to implementing self-managing business operations.",
        image: "/images/autonomous-enterprise.jpg",
        readTime: "20 min read",
        featured: false,
        url: "/case-studies/ai-2025-autonomous-enterprise-transformation-ultimate-success"
      },
      {
        id: 6,
        title: "AI Cybersecurity Revolution 2025",
        type: "Blog Post",
        category: "Security",
        description: "Next-generation AI-powered cybersecurity solutions for enterprise protection.",
        image: "/images/ai-cybersecurity.jpg",
        readTime: "16 min read",
        featured: false,
        url: "/blog/ai-2025-cybersecurity-revolution-ultimate-guide"
      }
    ],
    popular: [
      {
        id: 7,
        title: "Fortune 500 AI Transformation: 15,000% ROI",
        type: "Case Study",
        category: "Success Stories",
        description: "How a Fortune 500 company achieved unprecedented ROI through AI transformation.",
        image: "/images/fortune-500-ai-transformation.jpg",
        readTime: "13 min read",
        featured: false,
        url: "/case-studies/fortune-500-ai-transformation-15000-roi-success-story"
      },
      {
        id: 8,
        title: "Enterprise AI Automation Mastery",
        type: "Blog Post",
        category: "Automation",
        description: "Master the art of enterprise AI automation with proven strategies and frameworks.",
        image: "/images/enterprise-ai-automation.jpg",
        readTime: "17 min read",
        featured: false,
        url: "/blog/ai-2025-enterprise-automation-mastery-ultimate-guide"
      },
      {
        id: 9,
        title: "AI Content Revolution: 25,000% ROI",
        type: "Case Study",
        category: "Content Marketing",
        description: "Revolutionary AI content strategies delivering massive ROI for businesses.",
        image: "/images/ai-content-revolution.jpg",
        readTime: "11 min read",
        featured: false,
        url: "/case-studies/ai-2025-ultimate-content-revolution-25000-roi-success-story"
      }
    ]
  };

  const filteredContent = contentItems[activeTab].filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            <span className="mr-2">🔍</span>
            NEW CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Discover Our Latest
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> AI Content</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI guides, case studies, and success stories. 
            Find the content that will transform your business.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search content, topics, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-12 pr-4 text-lg border-2 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none transition-colors"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { key: 'featured', label: 'Featured', icon: '⭐' },
            { key: 'latest', label: 'Latest', icon: '🆕' },
            { key: 'popular', label: 'Popular', icon: '🔥' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-2xl transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-lg'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-400 to-blue-500 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.featured 
                      ? 'bg-yellow-400 text-black' 
                      : 'bg-white bg-opacity-90 text-gray-700'
                  }`}>
                    {item.featured ? 'FEATURED' : item.type}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white bg-opacity-90 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold">
                    {item.readTime}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">
                    {item.type === 'Blog Post' ? '📝' : '📊'}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {item.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                <a
                  href={item.url}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors group"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/content"
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            View All Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-black text-purple-600 mb-2">500+</div>
            <div className="text-gray-600 font-semibold">Content Pieces</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600 font-semibold">Monthly Readers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-green-600 mb-2">98%</div>
            <div className="text-gray-600 font-semibold">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600 font-semibold">Content Updates</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentDiscoveryWidget2025;