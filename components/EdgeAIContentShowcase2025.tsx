"use client";
import React from 'react';
import Link from 'next/link';

const EdgeAIContentShowcase2025 = () => {
  const edgeAIContent = [
    {
      id: 'edge-computing-revolution',
      title: 'AI 2025: The Edge Computing Revolution',
      description: 'Achieve 450% ROI with edge AI solutions that deliver real-time processing and massive cost savings.',
      url: '/blog/ai-2025-edge-computing-revolution-enterprise-breakthrough',
      type: 'Blog Post',
      category: 'Technology',
      metrics: {
        roi: '450%',
        savings: '$180M',
        uptime: '99.7%',
        speed: '94% faster'
      },
      image: '🚀',
      gradient: 'from-blue-600 to-purple-600',
      readingTime: '14 min read',
      featured: true
    },
    {
      id: 'fortune-500-edge-ai',
      title: 'Fortune 500 Edge AI Transformation: 450% ROI',
      description: 'How a Fortune 500 manufacturer achieved $2.1B annual savings with edge AI across 47 facilities.',
      url: '/case-studies/fortune-500-edge-ai-transformation-450-percent-roi',
      type: 'Case Study',
      category: 'Success Story',
      metrics: {
        roi: '450%',
        savings: '$2.1B',
        efficiency: '78%',
        quality: '92%'
      },
      image: '🏭',
      gradient: 'from-green-600 to-blue-600',
      readingTime: '12 min read',
      featured: true
    },
    {
      id: 'edge-ai-implementation-guide',
      title: 'Edge AI Implementation Guide: From Strategy to 450% ROI',
      description: 'Complete roadmap for implementing edge AI solutions with proven ROI and success metrics.',
      url: '/resources/ai-2025-edge-computing-implementation-guide',
      type: 'Implementation Guide',
      category: 'Strategy',
      metrics: {
        roi: '450%',
        timeline: '24 months',
        success: '98%',
        savings: '$180M'
      },
      image: '📋',
      gradient: 'from-purple-600 to-pink-600',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'edge-ai-roi-calculator',
      title: 'Edge AI ROI Calculator: Calculate Your 450%+ ROI Potential',
      description: 'Interactive tool to calculate your potential ROI and savings with edge AI implementation.',
      url: '/tools/edge-ai-roi-calculator',
      type: 'Tool',
      category: 'Calculator',
      metrics: {
        accuracy: '95%',
        users: '10,000+',
        satisfaction: '98%',
        completion: '15 min'
      },
      image: '🧮',
      gradient: 'from-orange-600 to-red-600',
      readingTime: 'Interactive Tool',
      featured: false
    },
    {
      id: 'edge-ai-security-guide',
      title: 'Edge AI Security: Complete Protection Guide',
      description: 'Comprehensive security framework for edge AI deployments with 95% threat reduction.',
      url: '/resources/edge-ai-security-complete-guide',
      type: 'Security Guide',
      category: 'Security',
      metrics: {
        threat_reduction: '95%',
        compliance: '100%',
        incidents: '<1/year',
        protection: '99.9%'
      },
      image: '🛡️',
      gradient: 'from-red-600 to-pink-600',
      readingTime: '18 min read',
      featured: false
    },
    {
      id: 'edge-ai-industry-applications',
      title: 'Edge AI Industry Applications: 15 Use Cases with ROI',
      description: 'Real-world applications across manufacturinghealthcaretailand financial services.',
      url: '/resources/edge-ai-industry-applications-guide',
      type: 'Industry Guide',
      category: 'Applications',
      metrics: {
        industries: '15+',
        use_cases: '50+',
        avg_roi: '340%',
        success_rate: '94%'
      },
      image: '🏢',
      gradient: 'from-indigo-600 to-purple-600',
      readingTime: '22 min read',
      featured: false
    }
  ];

  const categories = ['All'Technology'Success Story'Strategy'Calculator'Security'Applications'];
  const [selectedCategorysetSelectedCategory] = React.useState('All');

  const filteredContent = selectedCategory === 'All' 
    ? edgeAIContent 
    : edgeAIContent.filter(content => content.category === selectedCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW: Edge AI Revolution 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Edge AI Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive resources for implementing edge AI solutions with{' '}
            <span className="font-bold text-blue-600">450% ROI</span> and{' '}
            <span className="font-bold text-green-600">$180M+ annual savings</span>
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                content.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
            >
              {/* Content Header */}
              <div className={`h-32 bg-gradient-to-r ${content.gradient} rounded-t-2xl relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 p-6 h-full flex items-center justify-between">
                  <div>
                    <span className="text-4xl">{content.image}</span>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {content.type}
                    </span>
                    {content.featured && (
                      <span className="block mt-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {content.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {content.description}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">{content.metrics.roi || content.metrics.accuracy || content.metrics.industries}</div>
                    <div className="text-xs text-gray-500">
                      {content.metrics.roi ? 'ROI' : 
                       content.metrics.accuracy ? 'Accuracy' : 'Industries'}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">{content.metrics.savings || content.metrics.users || content.metrics.use_cases}</div>
                    <div className="text-xs text-gray-500">
                      {content.metrics.savings ? 'Savings' : 
                       content.metrics.users ? 'Users' : 'Use Cases'}
                    </div>
                  </div>
                </div>

                {/* Reading Time and Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{content.readingTime}</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {content.category}
                  </span>
                </div>

                {/* Action Button */}
                <Link
                  href={content.url}
                  className={`w-full bg-gradient-to-r ${content.gradient} text-white py-3 rounded-lg font-semibold text-center block hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  {content.type === 'Tool' ? 'Use Tool' : 'Read More'} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Edge AI Success Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">450%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$180M</div>
              <div className="text-gray-600">Average Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">99.7%</div>
              <div className="text-gray-600">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">94%</div>
              <div className="text-gray-600">Faster Processing</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Enterprise with Edge AI?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies achieving 450% ROI with our proven edge AI implementation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdgeAIContentShowcase2025;