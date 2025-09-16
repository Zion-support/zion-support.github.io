"use client";
import React, { useState } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const NextGenerationAutonomousSystemsShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const content = [
    {
      id: 'next-gen-autonomous-systems-blog',
      title: "AI 2025: Next-Generation Autonomous Systems Revolutionary Breakthrough",
      subtitle: "Ultimate Guide to 18,000% ROI",
      description: "Discover how next-generation autonomous systems are revolutionizing enterprise operations with unprecedented 18,000% ROI and $200B+ in savings across Fortune 500 companies.",
      type: 'blog',
      url: '/blog/ai-2025-next-generation-autonomous-systems-revolutionary-breakthrough',
      metrics: {
        roi: "18,000%",
        savings: "$200B+",
        efficiency: "2,400%",
        accuracy: "99.97%"
      },
      readingTime: "35 min read",
      featured: true,
      tags: ["AI Revolution", "Autonomous Systems", "Next-Generation AI", "ROI", "Fortune 500", "2025", "Revolutionary Breakthrough", "18,000% ROI"]
    },
    {
      id: 'fortune-500-success-story',
      title: "Fortune 500 Next-Generation Autonomous Systems Success Story",
      subtitle: "$200B Annual Savings - 18,000% ROI",
      description: "Discover how a Fortune 500 manufacturing giant achieved unprecedented 18,000% ROI and $200B in annual savings through next-generation autonomous systems implementation.",
      type: 'case-study',
      url: '/case-studies/fortune-500-next-generation-autonomous-systems-18000-roi-success-story',
      metrics: {
        roi: "18,000%",
        savings: "$200B",
        efficiency: "2,400%",
        quality: "99.97%"
      },
      readingTime: "25 min read",
      featured: true,
      tags: ["Case Study", "Fortune 500", "Next-Generation Autonomous Systems", "18,000% ROI", "Success Story", "Manufacturing", "Revolutionary Breakthrough"]
    },
    {
      id: 'implementation-guide',
      title: "Next-Generation Autonomous Systems Implementation Guide 2025",
      subtitle: "Complete Roadmap to 18,000% ROI",
      description: "Complete implementation guide for next-generation autonomous systems that have delivered 18,000% ROI and $200B+ in savings for Fortune 500 companies.",
      type: 'resource',
      url: '/resources/next-generation-autonomous-systems-implementation-guide-2025',
      metrics: {
        roi: "18,000%",
        savings: "$200B+",
        efficiency: "2,400%",
        accuracy: "99.97%"
      },
      readingTime: "45 min read",
      featured: true,
      tags: ["Implementation Guide", "Next-Generation Autonomous Systems", "ROI", "Strategy", "Framework", "2025", "18,000% ROI"]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'blog', label: 'Blog Posts', count: content.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: content.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: content.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? content 
    : content.filter(item => item.type === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-blue-500 to-blue-600';
      case 'case-study':
        return 'from-green-500 to-green-600';
      case 'resource':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            🚀 NEW REVOLUTIONARY BREAKTHROUGH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Next-Generation Autonomous Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionary breakthrough content featuring <span className="font-bold text-green-600">18,000% ROI</span> and <span className="font-bold text-blue-600">$200B+ in savings</span> across Fortune 500 companies
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-l-4 border-green-500">
            <div className="text-3xl font-bold text-green-600 mb-2">18,000%</div>
            <div className="text-gray-600 font-medium">Average ROI</div>
            <div className="text-sm text-gray-500 mt-1">Proven Results</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-l-4 border-blue-500">
            <div className="text-3xl font-bold text-blue-600 mb-2">$200B+</div>
            <div className="text-gray-600 font-medium">Total Savings</div>
            <div className="text-sm text-gray-500 mt-1">Fortune 500</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-l-4 border-purple-500">
            <div className="text-3xl font-bold text-purple-600 mb-2">2,400%</div>
            <div className="text-gray-600 font-medium">Efficiency Gain</div>
            <div className="text-sm text-gray-500 mt-1">Operational</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-l-4 border-yellow-500">
            <div className="text-3xl font-bold text-yellow-600 mb-2">99.97%</div>
            <div className="text-gray-600 font-medium">Accuracy</div>
            <div className="text-sm text-gray-500 mt-1">System Performance</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {filter.label}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeFilter === filter.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${getTypeColor(item.type)} p-6 text-white relative`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className="text-sm font-medium uppercase tracking-wide">
                      {item.type.replace('-', ' ')}
                    </span>
                  </div>
                  {item.featured && (
                    <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-2 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-blue-100 font-semibold text-sm mb-3">
                  {item.subtitle}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item.readingTime}</span>
                  </div>
                  <div className="text-yellow-300 font-bold">18,000% ROI</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-green-700">ROI</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-blue-700">SAVINGS</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-purple-600">{item.metrics.efficiency}</div>
                    <div className="text-xs text-purple-700">EFFICIENCY</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-yellow-600">{item.metrics.accuracy || item.metrics.quality}</div>
                    <div className="text-xs text-yellow-700">ACCURACY</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="text-gray-500 text-xs">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={item.url}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                  </a>
                  <a
                    href="/contact"
                    className="flex-1 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300"
                  >
                    Get Consultation
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve 18,000% ROI?
            </h3>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              Join Fortune 500 companies achieving revolutionary results with next-generation autonomous systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start Your Transformation
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextGenerationAutonomousSystemsShowcase2025;