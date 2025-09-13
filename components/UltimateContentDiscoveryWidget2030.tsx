import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UltimateContentDiscoveryWidget2030: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = {
    all: 'All Content',
    ai: 'AI Predictions',
    quantum: 'Quantum Computing',
    automation: 'Automation Solutions',
    future: 'Future Technologies'
  };

  const contentItems = [
    {
      id: 1,
      title: 'AI 2030-2040 Ultimate Vision',
      description: 'Comprehensive predictions for artificial intelligence development spanning the next decade.',
      category: 'ai',
      year: '2030-2040',
      impact: 'Revolutionary',
      link: '/ai-2030-2040-ultimate-vision',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Neural Revolution 2035',
      description: 'Revolutionary convergence of quantum computing and neural networks.',
      category: 'quantum',
      year: '2035',
      impact: 'Breakthrough',
      link: '/quantum-neural-revolution-2035',
      featured: true
    },
    {
      id: 3,
      title: 'Ultimate Automation Ecosystem 2030',
      description: 'Complete automation ecosystem transforming business and industry.',
      category: 'automation',
      year: '2030',
      impact: 'Transformative',
      link: '/ultimate-automation-ecosystem-2030',
      featured: true
    },
    {
      id: 4,
      title: 'AI 2025-2030 Comprehensive Predictions',
      description: 'Detailed predictions covering AI development from 2025 to 2030.',
      category: 'ai',
      year: '2025-2030',
      impact: 'Comprehensive',
      link: '/ai-2025-2030-predictions',
      featured: false
    },
    {
      id: 5,
      title: 'Quantum Computing Breakthroughs 2025',
      description: 'Latest breakthroughs in quantum computing technology and applications.',
      category: 'quantum',
      year: '2025',
      impact: 'Advanced',
      link: '/quantum-computing-breakthroughs-2025',
      featured: false
    },
    {
      id: 6,
      title: 'Advanced Automation Solutions 2025',
      description: 'Cutting-edge automation solutions for modern businesses.',
      category: 'automation',
      year: '2025',
      impact: 'Advanced',
      link: '/advanced-automation-solutions-2025',
      featured: false
    },
    {
      id: 7,
      title: 'Neural Interface Solutions',
      description: 'Revolutionary neural interface technologies for human-AI interaction.',
      category: 'future',
      year: '2035+',
      impact: 'Futuristic',
      link: '/neural-interface-solutions',
      featured: false
    },
    {
      id: 8,
      title: 'Space Technology Solutions',
      description: 'Advanced space technology solutions for interplanetary exploration.',
      category: 'future',
      year: '2030+',
      impact: 'Interstellar',
      link: '/space-technology-solutions',
      featured: false
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const featuredContent = contentItems.filter(item => item.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ultimate Content Discovery Hub
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive collection of revolutionary AI predictions, quantum computing breakthroughs, 
            and automation solutions that will shape the future of technology and human civilization.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredContent.map((item) => (
              <div key={item.id} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                    {item.year}
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold rounded-full">
                    {item.impact}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.description}</p>
                <Link 
                  to={item.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Explore Content
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Browse by Category</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(contentCategories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <div key={item.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full">
                  {item.year}
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold rounded-full">
                  {item.impact}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.description}</p>
              <Link 
                to={item.link}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Explore Content
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Content Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">{contentItems.length}</div>
              <div className="text-gray-300 text-sm">Total Content Pieces</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">{featuredContent.length}</div>
              <div className="text-gray-300 text-sm">Featured Articles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">4</div>
              <div className="text-gray-300 text-sm">Content Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">15+</div>
              <div className="text-gray-300 text-sm">Years Covered</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Updated with the Latest Content
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive notifications about new revolutionary content, 
              breakthrough predictions, and cutting-edge technology insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/newsletter"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Subscribe Now
              </Link>
              <Link 
                to="/content-library"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20"
              >
                View All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentDiscoveryWidget2030;