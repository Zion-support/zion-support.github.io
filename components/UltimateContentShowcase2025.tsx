import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Automation Revolution',
      description: 'Transform your business with 500% ROI, $200M savings, and 99.8% satisfaction rates.',
      category: 'automation',
      type: 'blog',
      url: '/ai-2025-ultimate-automation-revolution',
      metrics: {
        roi: '500%',
        savings: '$200M',
        satisfaction: '99.8%',
        timeline: '12 months'
      },
      featured: true,
      image: '🤖'
    },
    {
      id: 'quantum-ai-breakthrough',
      title: 'Quantum AI 2026: The Business Breakthrough',
      description: 'Experience the quantum revolution with 400-600% ROI and 1,200% speed improvements.',
      category: 'quantum',
      type: 'blog',
      url: '/quantum-ai-2026-business-breakthrough',
      metrics: {
        roi: '400-600%',
        speed: '1,200%',
        accuracy: '99.97%',
        market: '$100B'
      },
      featured: true,
      image: '⚛️'
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation Success',
      description: 'How a $2B company achieved 567% ROI in 18 months with comprehensive AI implementation.',
      category: 'case-study',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        efficiency: '156%',
        timeline: '18 months'
      },
      featured: true,
      image: '🏆'
    },
    {
      id: 'enterprise-automation-guide',
      title: 'AI Implementation Master Guide 2025',
      description: 'Complete roadmap to achieving 500% ROI with AI automation in your organization.',
      category: 'guide',
      type: 'resource',
      url: '/resources/ai-automation-implementation-guide-2025',
      metrics: {
        roi: '500%',
        success: '94%',
        timeline: '12-18 months',
        projects: '500+'
      },
      featured: false,
      image: '📚'
    },
    {
      id: 'quantum-implementation-guide',
      title: 'Quantum AI Implementation Guide 2026',
      description: 'From strategy to 567% ROI - complete framework for quantum AI transformation.',
      category: 'quantum',
      type: 'resource',
      url: '/resources/quantum-ai-implementation-guide-2026',
      metrics: {
        roi: '567%',
        timeframe: '6 months',
        phases: '3 phases',
        payback: '3.8 months'
      },
      featured: false,
      image: '⚛️'
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation Success',
      description: 'How a $200M health system achieved 300% ROI with AI-powered patient care.',
      category: 'case-study',
      type: 'case-study',
      url: '/case-studies/healthcare-ai-transformation-2025-success',
      metrics: {
        roi: '300%',
        savings: '$18.7M',
        satisfaction: '95%',
        efficiency: '67%'
      },
      featured: false,
      image: '🏥'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'automation', label: 'Automation', count: contentItems.filter(item => item.category === 'automation').length },
    { id: 'quantum', label: 'Quantum AI', count: contentItems.filter(item => item.category === 'quantum').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'guide', label: 'Guides', count: contentItems.filter(item => item.category === 'guide').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const featuredContent = contentItems.filter(item => item.featured);
  const regularContent = filteredContent.filter(item => !item.featured);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ultimate Content Showcase 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI transformation content, 
            featuring revolutionary guides, success stories, and implementation frameworks.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Content */}
        {activeCategory === 'all' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredContent.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{item.image}</span>
                      <div className="bg-gradient-to-r from-purple-100 to-blue-100 px-3 py-1 rounded-full">
                        <span className="text-sm font-semibold text-purple-700 capitalize">
                          {item.type}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600 mb-6">{item.description}</p>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {Object.entries(item.metrics).map(([key, value]) => (
                        <div key={key} className="bg-gray-50 p-3 rounded-lg text-center">
                          <div className="text-lg font-bold text-purple-600">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={item.url}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 text-center block"
                    >
                      Explore Content
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularContent.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{item.image}</span>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-700 capitalize">
                      {item.type}
                    </span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 p-2 rounded text-center">
                      <div className="text-sm font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={item.url}
                  className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center block text-sm"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics Summary */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Content Impact Summary</h3>
            <p className="text-lg opacity-90">Comprehensive coverage of AI transformation topics</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500%+</div>
              <div className="text-sm opacity-90">Average ROI Featured</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$2.8B+</div>
              <div className="text-sm opacity-90">Total Savings Highlighted</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">6</div>
              <div className="text-sm opacity-90">Content Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99%+</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Get personalized guidance and start your AI transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              href="/resources"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all"
            >
              Browse All Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;