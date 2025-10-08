'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligenceShowcase2025 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const content = [
    {
      id: 'ai-revolution-business-intelligence',
      title: 'AI Revolution: Ultimate Business Intelligence 2025 - 30,000% ROI Breakthrough',
      description: 'Discover how revolutionary AI-powered business intelligence is transforming enterprise decision-making and delivering unprecedented returns on investment.',
      url: '/articles/ai-revolution-ultimate-business-intelligence-2025-30000-roi-breakthrough',
      type: 'Article',
      category: 'article',
      metrics: {
        roi: '30,000%',
        efficiency: '500%',
        accuracy: '99.9%',
        timeline: '3 months'
      },
      tags: ['AI', 'Business Intelligence', 'ROI', 'Enterprise']
    },
    {
      id: 'predictive-analytics-mastery',
      title: 'Predictive Analytics Mastery: The Complete 2025 Implementation Guide',
      description: 'Master predictive analytics with our comprehensive guide covering advanced techniques, tools, and real-world applications for enterprise success.',
      url: '/guides/predictive-analytics-mastery-2025-implementation-guide',
      type: 'Guide',
      category: 'guide',
      metrics: {
        roi: '15,000%',
        efficiency: '400%',
        accuracy: '98.5%',
        timeline: '6 months'
      },
      tags: ['Predictive Analytics', 'Machine Learning', 'Data Science', 'Implementation']
    },
    {
      id: 'real-time-dashboard-excellence',
      title: 'Real-Time Dashboard Excellence: Transform Your Business Intelligence',
      description: 'Build world-class real-time dashboards that provide instant insights and drive data-driven decision making across your organization.',
      url: '/tutorials/real-time-dashboard-excellence-business-intelligence',
      type: 'Tutorial',
      category: 'tutorial',
      metrics: {
        roi: '8,000%',
        efficiency: '300%',
        accuracy: '99.2%',
        timeline: '2 months'
      },
      tags: ['Dashboards', 'Real-Time', 'Visualization', 'Business Intelligence']
    },
    {
      id: 'ai-powered-insights',
      title: 'AI-Powered Insights: The Future of Business Intelligence',
      description: 'Explore cutting-edge AI technologies that are revolutionizing how businesses extract insights from their data and make strategic decisions.',
      url: '/insights/ai-powered-insights-future-business-intelligence',
      type: 'Insight',
      category: 'insight',
      metrics: {
        roi: '25,000%',
        efficiency: '600%',
        accuracy: '99.8%',
        timeline: '4 months'
      },
      tags: ['AI', 'Insights', 'Future Tech', 'Strategic Planning']
    }
  ];

  const categories = ['all', 'article', 'guide', 'tutorial', 'insight'];

  const filteredContent = selectedCategory === 'all' 
    ? content 
    : content.filter(item => item.category === selectedCategory);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="absolute top-32 left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 mb-8">
            <span className="text-blue-300 text-lg font-semibold">🎯 Ultimate Business Intelligence Showcase 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              AI-Powered Intelligence
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover the most advanced business intelligence solutions that are delivering unprecedented ROI and transforming enterprises worldwide.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredContent.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 text-sm font-semibold rounded-full border border-blue-400/30">
                    {item.type}
                  </span>
                  <div className="flex space-x-2">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{item.metrics.roi}</div>
                    <div className="text-sm text-gray-400">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{item.metrics.efficiency}</div>
                    <div className="text-sm text-gray-400">Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{item.metrics.accuracy}</div>
                    <div className="text-sm text-gray-400">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">{item.metrics.timeline}</div>
                    <div className="text-sm text-gray-400">Timeline</div>
                  </div>
                </div>

                <Link
                  href={item.url}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Explore Now
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-400/20 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business Intelligence?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of enterprises already experiencing unprecedented growth with our AI-powered business intelligence solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Get Started Today
              </Link>
              <Link
                href="/enterprise"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Enterprise Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateBusinessIntelligenceShowcase2025;