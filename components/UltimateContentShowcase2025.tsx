'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

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
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl">{item.icon}</div>
                  {item.featured && (
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
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

        {/* Statistics Section */}
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Content Impact Statistics</h3>
            <p className="text-xl text-gray-600">Our content has helped thousands of organizations transform their operations</p>
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

        {/* Additional Resources */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Explore More Resources</h3>
            <p className="text-xl opacity-90">Access our complete library of AI resources and tools</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-bold mb-2">AI ROI Calculator</h4>
              <p className="opacity-90 mb-4">Calculate the potential return on investment for your AI initiatives</p>
              <Link 
                href="/tools/ai-transformation-roi-calculator-2025"
                className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200"
              >
                Try Calculator →
              </Link>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-bold mb-2">Implementation Services</h4>
              <p className="opacity-90 mb-4">Get expert guidance for your AI transformation journey</p>
              <Link 
                href="/services/ai-implementation"
                className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="text-xl font-bold mb-2">Training Programs</h4>
              <p className="opacity-90 mb-4">Comprehensive AI training for your team</p>
              <Link 
                href="/services/ai-training"
                className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200"
              >
                View Programs →
              </Link>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse All Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Custom Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;