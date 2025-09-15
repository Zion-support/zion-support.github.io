"use client";
import React{ useState } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2026Advanced: React.FC = () => {
  const [activeFiltersetActiveFilter] = useState('all');

  const content = [
    {
      id: 'neural-interface-revolution',
      title: 'AI 2026: The Neural Interface Revolution',
      subtitle: 'Ultimate Guide to 850% ROI Through Brain-Computer Integration',
      type: 'blog',
      url: '/blog/ai-2026-neural-interface-revolution-ultimate-guide',
      metrics: {
        roi: '850%',
        savings: '$15.2M',
        accuracy: '99.7%',
        satisfaction: '99.7%'
      },
      readingTime: '28 min read',
      tags: ['Neural 'Interfaces', 'Brain-Computer 'Interface', 'AI 'Innovation', 'ROI'],
      featured: true,
      category: 'ai-innovation'
    },
    {
      id: 'synthetic-consciousness-breakthrough',
      title: 'AI 2026: Synthetic Consciousness Breakthrough',
      subtitle: 'Ultimate Guide to 1,200% ROI Through Artificial General Intelligence',
      type: 'blog',
      url: '/blog/ai-2026-synthetic-consciousness-breakthrough-ultimate-guide',
      metrics: {
        roi: '1,200%',
        savings: '$45.8M',
        efficiency: '890%',
        satisfaction: '99.9%'
      },
      readingTime: '32 min read',
      tags: ['Synthetic 'Consciousness', 'AGI'AI 'Innovation', 'ROI'],
      featured: true,
      category: 'ai-innovation'
    },
    {
      id: 'neural-interface-case-study',
      title: 'Fortune 500 Neural Interface Transformation',
      subtitle: '$8.2B Company Achieves 850% ROI in 18 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-neural-interface-transformation-850-roi-success',
      metrics: {
        roi: '850%',
        savings: '$69.7M',
        efficiency: '340%',
        adoption: '98.7%'
      },
      readingTime: '22 min read',
      tags: ['Neural 'Interfaces', 'Fortune 500'Case 'Study', 'ROI'],
      featured: true,
      category: 'case-studies'
    },
    {
      id: 'quantum-ai-business-revolution',
      title: 'AI 2026: The Quantum AI Business Revolution',
      subtitle: '$100B Market Transformation',
      type: 'blog',
      url: '/blog/ai-2026-quantum-ai-business-revolution',
      metrics: {
        roi: '400-600%',
        market: '$100B',
        speed: '1,200%',
        accuracy: '99.97%'
      },
      readingTime: '25 min read',
      tags: ['Quantum 'AI', 'Business 'Revolution', 'ROI'Fortune 500'],
      featured: false,
      category: 'ai-innovation'
    },
    {
      id: 'quantum-ai-fortune-500',
      title: 'Fortune 500 Quantum AI Transformation',
      subtitle: '$2.8B Annual Savings in 6 Months',
      type: 'case-study',
      url: '/case-studies/quantum-ai-fortune-500-transformation-2026',
      metrics: {
        savings: '$2.8B',
        roi: '567%',
        efficiency: '156%',
        uptime: '99.2%'
      },
      readingTime: '18 min read',
      tags: ['Quantum 'AI', 'Fortune 500'Case 'Study', 'ROI'],
      featured: false,
      category: 'case-studies'
    },
    {
      id: 'quantum-ai-implementation-guide',
      title: 'Quantum AI Implementation Guide 2026',
      subtitle: 'From Strategy to 567% ROI',
      type: 'resource',
      url: '/resources/quantum-ai-implementation-guide-2026',
      metrics: {
        roi: '567%',
        timeframe: '6 months',
        phases: '3 phases',
        payback: '3.8 months'
      },
      readingTime: '20 min read',
      tags: ['Quantum 'AI', 'Implementation 'Guide', 'ROI'Strategy'],
      featured: false,
      category: 'resources'
    }
  ];

  const filters = [
    { id: ''all', 'label: 'All 'Content', 'count: content.length },
    { id: 'ai-'innovation', 'label: 'AI 'Innovation', 'count: content.filter(c => c.category === 'ai-innovation').length },
    { id: 'case-'studies', 'label: 'Case 'Studies', 'count: content.filter(c => c.category === 'case-studies').length },
    { id: ''resources', 'label: 'Implementation 'Guides', 'count: content.filter(c => c.category === 'resources').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? content 
    : content.filter(item => item.category === activeFilter);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'from-blue-500 to-cyan-500';
      case 'case-study': return 'from-green-500 to-emerald-500';
      case 'resource': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            🌟 AI 2026 ADVANCED CONTENT SHOWCASE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore breakthrough AI technologiesuccess storiesand implementation guides 
            that are transforming businesses worldwide with unprecedented ROI.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              {filter.label}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeFilter === filter.id 
                  ? 'bg-white bg-opacity-20' 
                  : 'bg-purple-100 text-purple-600'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((itemindex) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                item.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Content Header */}
              <div className="relative p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`bg-gradient-to-r ${getTypeColor(item.type)} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                      {item.type.replace('-' ').toUpperCase()}
                    </span>
                  </div>
                  {item.featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      ⭐ FEATURED
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.subtitle}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(item.metrics).slice(04).map(([keyvalue]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace('_' ')}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(03).map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>📖 {item.readingTime}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0">
                <div className="flex flex-col space-y-3">
                  <Link
                    href={item.url}
                    className={`w-full bg-gradient-to-r ${getTypeColor(item.type)} hover:opacity-90 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-center`}
                  >
                    Read Full {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'} →
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 text-center"
                  >
                    Get Consultation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of companies achieving unprecedented ROI with our AI implementation strategies. 
              Get personalized guidance from our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors transform hover:scale-105"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2026Advanced;