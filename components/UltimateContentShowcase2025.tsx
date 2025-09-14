import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentItems = [
    {
      id: 'neural-interface-revolution',
      title: 'AI 2025: The Neural Interface Revolution',
      subtitle: 'Ultimate Guide to 1,500% ROI',
      description: 'Transform your business with neural interfaces achieving 1,500% ROI and $45.2M annual savings through direct brain-computer interaction.',
      metrics: {
        roi: '1,500%',
        savings: '$45.2M',
        accuracy: '99.7%',
        speed: '1,200%'
      },
      url: '/blog/ai-2025-neural-interface-revolution-ultimate-guide',
      type: 'blog',
      readingTime: '25 min read',
      featured: true,
      category: 'ai-revolution'
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution',
      subtitle: 'Ultimate Guide to 3,000% ROI',
      description: 'Achieve unprecedented 3,000% ROI with quantum computing, saving $127M annually through exponential computational power.',
      metrics: {
        roi: '3,000%',
        savings: '$127M',
        speed: '1,200%',
        accuracy: '99.97%'
      },
      url: '/blog/ai-2025-quantum-computing-business-revolution-ultimate-guide',
      type: 'blog',
      readingTime: '28 min read',
      featured: true,
      category: 'quantum-ai'
    },
    {
      id: 'autonomous-ecosystem-transformation',
      title: 'AI 2025 Autonomous Ecosystem Transformation',
      subtitle: '$5.2B Company Achieves 2,100% ROI',
      description: 'Fortune 100 company achieves 2,100% ROI with intelligent automation, saving $890M annually through comprehensive AI transformation.',
      metrics: {
        roi: '2,100%',
        savings: '$890M',
        efficiency: '156%',
        quality: '89%'
      },
      url: '/case-studies/ai-2025-autonomous-ecosystem-transformation-ultimate-success',
      type: 'case-study',
      readingTime: '22 min read',
      featured: true,
      category: 'case-study'
    },
    {
      id: 'sustainable-technology-transformation',
      title: 'AI 2025 Sustainable Technology Transformation',
      subtitle: '$3.8B Company Achieves 1,800% ROI with Green AI',
      description: 'Achieve 1,800% ROI while reducing carbon footprint by 67% and saving $234M annually through AI-powered sustainability.',
      metrics: {
        roi: '1,800%',
        savings: '$234M',
        carbon_reduction: '67%',
        efficiency: '89%'
      },
      url: '/case-studies/ai-2025-sustainable-technology-transformation-ultimate-success',
      type: 'case-study',
      readingTime: '20 min read',
      featured: true,
      category: 'sustainability'
    },
    {
      id: 'enterprise-transformation-master-roadmap',
      title: 'AI 2025 Enterprise Transformation Master Roadmap',
      subtitle: 'From Strategy to 2,000% ROI',
      description: 'Comprehensive roadmap for achieving 2,000% ROI through strategic AI implementation across your entire organization.',
      metrics: {
        roi: '2,000%',
        savings: '$2.8B',
        success_rate: '94%',
        timeframe: '24 months'
      },
      url: '/resources/ai-2025-enterprise-transformation-master-roadmap',
      type: 'resource',
      readingTime: '35 min read',
      featured: true,
      category: 'implementation'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'ai-revolution', label: 'AI Revolution', count: contentItems.filter(item => item.category === 'ai-revolution').length },
    { id: 'quantum-ai', label: 'Quantum AI', count: contentItems.filter(item => item.category === 'quantum-ai').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'sustainability', label: 'Sustainability', count: contentItems.filter(item => item.category === 'sustainability').length },
    { id: 'implementation', label: 'Implementation', count: contentItems.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium mb-6">
            🚀 ULTIMATE CONTENT SHOWCASE 2025
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Breakthrough AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Delivering Unprecedented ROI
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our latest breakthrough content featuring proven strategies, real-world case studies, 
            and comprehensive guides that deliver 1,500% to 3,000% ROI for enterprise implementations.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">3,000%</div>
            <div className="text-gray-600">Highest ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$2.8B</div>
            <div className="text-gray-600">Total Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              {filter.label}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Content Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === 'blog' ? 'bg-blue-100 text-blue-800' :
                      item.type === 'case-study' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {item.type === 'case-study' ? 'Case Study' : 
                       item.type === 'resource' ? 'Guide' : 'Article'}
                    </span>
                    {item.featured && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        ⭐ Featured
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-lg font-semibold text-purple-600 mb-3">
                  {item.subtitle}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="px-6 pb-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6">
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform group-hover:scale-105"
                >
                  Read {item.type === 'case-study' ? 'Case Study' : 
                        item.type === 'resource' ? 'Guide' : 'Article'}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join 500+ companies achieving unprecedented ROI through our proven AI strategies and implementation guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
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

export default UltimateContentShowcase2025;