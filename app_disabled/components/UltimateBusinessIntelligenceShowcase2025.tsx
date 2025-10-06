'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligenceShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const content = [
    {
      id: 'ultimate-business-intelligence-revolution',
      title: 'AI 2025: The Ultimate Business Intelligence Revolution - Ultimate Breakthrough Guide to 30,000% ROI',
      description: 'Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented insights and competitive advantage.',
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough',
      type: 'Blog Post',
      category: 'blog',
      metrics: {
        roi: '30,000%',
        savings: '$750B+',
        accuracy: '99.99%',
<<<<<<< HEAD
        speed: '5,000% faster'
=======
>>>>>>> 97e2d060e1d7 (Fix merge conflicts and resolve errors in codebase)
      },
      readingTime: '35 min read',
      featured: true,
      tags: ['AI Revolution', 'Business Intelligence', 'ROI', 'Fortune 500', '30,000% ROI']
    },
    {
      id: 'fortune-500-business-intelligence-success',
      title: 'Fortune 500 Ultimate Business Intelligence Success: $750B Annual Savings - 30,000% ROI Success Story',
      description: 'How a $15.2B manufacturing giant achieved unprecedented business intelligence transformation with AI-powered analytics and decision-making systems.',
      url: '/case-studies/fortune-500-ultimate-business-intelligence-30000-roi-success-story',
      type: 'Case Study',
      category: 'case-study',
      metrics: {
        roi: '30,000%',
        savings: '$750B',
        company: '$15.2B',
<<<<<<< HEAD
        timeline: '18 months'
=======
>>>>>>> 97e2d060e1d7 (Fix merge conflicts and resolve errors in codebase)
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['Fortune 500', 'Case Study', 'ROI', 'Success Story', 'Manufacturing']
    },
    {
      id: 'business-intelligence-implementation-guide',
      title: 'AI 2025 Ultimate Business Intelligence Implementation Guide: Complete Roadmap to 30,000% ROI',
      description: 'Complete roadmap to 30,000% ROI through revolutionary AI-powered business intelligence transformation. Step-by-step implementation guide.',
      url: '/resources/ai-2025-ultimate-business-intelligence-implementation-guide',
      type: 'Implementation Guide',
      category: 'guide',
      metrics: {
        roi: '30,000%',
        success: '99.8%',
        timeline: '18 months',
<<<<<<< HEAD
        adoption: '100%'
      },
      readingTime: '45 min read',
      featured: true,
      tags: ['Implementation', 'Guide', 'ROI', 'Roadmap', 'Transformation']
    }
  ];

  const filteredContent = activeFilter === 'all' 
    ? content 
    : content.filter(item => item.category === activeFilter);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-lg font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              ULTIMATE SHOWCASE: BUSINESS INTELLIGENCE REVOLUTION 2025
            </span>
            <span className="text-2xl">⚡</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              AI-Powered Business Intelligence
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Showcase & Resources
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI-powered business intelligence resources, case studies, 
            and implementation guides that deliver <span className="text-yellow-400 font-bold">30,000% ROI</span> for Fortune 500 companies.
=======
>>>>>>> 97e2d060e1d7 (Fix merge conflicts and resolve errors in codebase)
          </p>
        </div>

<<<<<<< HEAD
        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
=======
>>>>>>> 97e2d060e1d7 (Fix merge conflicts and resolve errors in codebase)
            {[
              { id: 'all', label: 'All Content' },
              { id: 'blog', label: 'Blog Posts' },
              { id: 'case-study', label: 'Case Studies' },
<<<<<<< HEAD
              { id: 'guide', label: 'Guides' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
=======
>>>>>>> 97e2d060e1d7 (Fix merge conflicts and resolve errors in codebase)
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
<<<<<<< HEAD
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item, index) => (
            <Link key={item.id} href={item.url} className="group">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 h-full">
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  {/* Type Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">📊</div>
                      <div>
                        <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold rounded-full">
                          {item.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">🔥 ULTIMATE</span>
                      <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">BREAKTHROUGH</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
=======
                    )}
                  </div>

                  {/* Title */}
>>>>>>> 97e2d060e1d7 (Fix merge conflicts and resolve errors in codebase)
                    {item.title}
                  </h3>

                  {/* Description */}
<<<<<<< HEAD
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(item.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-xl font-bold text-cyan-400 mb-1">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
=======
                    {item.description}
                  </p>

                  {/* Metrics */}
>>>>>>> 97e2d060e1d7 (Fix merge conflicts and resolve errors in codebase)
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
<<<<<<< HEAD
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/20 text-white text-xs rounded-full">
=======
>>>>>>> 97e2d060e1d7 (Fix merge conflicts and resolve errors in codebase)
                        {tag}
                      </span>
                    ))}
                  </div>

<<<<<<< HEAD
                  {/* Meta Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>⏱️ {item.readingTime}</span>
                      <span>📅 September 2025</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:text-white transition-colors">
                      <span>Read {item.type}</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </div>
=======
>>>>>>> 97e2d060e1d7 (Fix merge conflicts and resolve errors in codebase)
            </Link>
          ))}
        </div>

        {/* Call-to-Action Section */}
<<<<<<< HEAD
        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-3xl">🎯</span>
            <h3 className="text-3xl font-bold">
              Ready to Achieve 30,000% ROI?
            </h3>
            <span className="text-3xl">🚀</span>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join Fortune 500 companies achieving unprecedented business intelligence transformation. 
            Get expert guidance from Zion Tech Group's AI specialists.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="text-xl">📞</span>
              <span>Get Expert Consultation</span>
            </Link>
            
            <Link
              href="/blog"
              className="group flex items-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10"
            >
              <span>Explore All Content</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Fortune 500 Clients' },
            { value: '30,000%', label: 'Average ROI' },
            { value: '99.99%', label: 'Accuracy Rate' },
            { value: '24/7', label: 'Expert Support' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
=======
>>>>>>> 97e2d060e1d7 (Fix merge conflicts and resolve errors in codebase)
  );
};

export default UltimateBusinessIntelligenceShowcase2025;