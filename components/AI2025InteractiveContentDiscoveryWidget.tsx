import React, { useState } from 'react';
import Link from 'next/link';

const AI2025InteractiveContentDiscoveryWidget = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentCategories = [
    { id: 'all', label: 'All Content', icon: '🌟', color: 'from-purple-500 to-pink-500' },
    { id: 'breakthroughs', label: 'Breakthroughs', icon: '🚀', color: 'from-red-500 to-orange-500' },
    { id: 'case-studies', label: 'Case Studies', icon: '🏆', color: 'from-green-500 to-emerald-500' },
    { id: 'guides', label: 'Implementation Guides', icon: '📚', color: 'from-blue-500 to-cyan-500' },
    { id: 'tools', label: 'AI Tools', icon: '🛠️', color: 'from-indigo-500 to-purple-500' },
    { id: 'webinars', label: 'Webinars', icon: '🔥', color: 'from-yellow-500 to-orange-500' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Neural Quantum Fusion Breakthrough',
      description: 'Revolutionary AI combining quantum computing with neural networks for unprecedented processing power',
      category: 'breakthroughs',
      roi: '15,000%',
      difficulty: 'Advanced',
      readTime: '8 min',
      featured: true,
      url: '/blog/ai-2025-neural-quantum-fusion-breakthrough'
    },
    {
      id: 2,
      title: 'Fortune 500 Quantum AI Transformation Success',
      description: 'How a Fortune 500 company achieved 15,000% ROI using our quantum AI solutions',
      category: 'case-studies',
      roi: '15,000%',
      difficulty: 'Expert',
      readTime: '12 min',
      featured: true,
      url: '/case-studies/ai-2025-fortune-500-quantum-transformation'
    },
    {
      id: 3,
      title: 'Ultimate AI Implementation Master Guide 2025',
      description: 'Complete step-by-step guide to implementing revolutionary AI in your organization',
      category: 'guides',
      roi: '∞',
      difficulty: 'All Levels',
      readTime: '45 min',
      featured: true,
      url: '/resources/ai-2025-ultimate-implementation-master-guide'
    },
    {
      id: 4,
      title: 'AI 2025 ROI Calculator - Quantum Edition',
      description: 'Calculate your potential ROI with our advanced quantum AI ROI calculator',
      category: 'tools',
      roi: '∞',
      difficulty: 'Beginner',
      readTime: '5 min',
      featured: false,
      url: '/tools/ai-2025-quantum-roi-calculator'
    },
    {
      id: 5,
      title: 'Revolutionary Breakthroughs Webinar Series',
      description: 'Live webinar series featuring the latest AI breakthroughs and their applications',
      category: 'webinars',
      roi: '∞',
      difficulty: 'All Levels',
      readTime: '60 min',
      featured: true,
      url: '/webinars/ai-2025-revolutionary-breakthroughs'
    },
    {
      id: 6,
      title: 'Quantum Consciousness AI Implementation',
      description: 'Step-by-step guide to implementing quantum consciousness AI in your systems',
      category: 'guides',
      roi: '∞',
      difficulty: 'Expert',
      readTime: '20 min',
      featured: false,
      url: '/resources/quantum-consciousness-ai-implementation-guide'
    },
    {
      id: 7,
      title: 'Reality Manipulation AI Case Study',
      description: 'How a tech giant used reality manipulation AI to achieve infinite ROI',
      category: 'case-studies',
      roi: '∞',
      difficulty: 'Advanced',
      readTime: '15 min',
      featured: true,
      url: '/case-studies/ai-2025-reality-manipulation-success'
    },
    {
      id: 8,
      title: 'Time-Space AI Prediction Tool',
      description: 'Advanced tool for predicting and optimizing future outcomes using time-space AI',
      category: 'tools',
      roi: '∞',
      difficulty: 'Advanced',
      readTime: '10 min',
      featured: false,
      url: '/tools/ai-2025-time-space-prediction-tool'
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'All Levels': return 'bg-blue-100 text-blue-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            🔍 Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover the most revolutionary AI content tailored to your needs
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search for AI breakthroughs, guides, tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {contentCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.icon} {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 ${
                item.featured ? 'ring-2 ring-yellow-500/50' : ''
              }`}
            >
              {item.featured && (
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                    ⭐ FEATURED
                  </span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    🚀 BREAKTHROUGH
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-3 text-white hover:text-yellow-300 transition-colors">
                <Link href={item.url}>{item.title}</Link>
              </h3>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(item.difficulty)}`}>
                  {item.difficulty}
                </span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                  {item.readTime}
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                  {item.roi} ROI
                </span>
              </div>
              
              <Link
                href={item.url}
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
              >
                Explore Now →
              </Link>
            </div>
          ))}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-300">No content found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search terms or category filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center bg-gradient-to-r from-purple-800/50 to-pink-800/50 rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-3xl font-bold mb-4 text-yellow-300">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-6">
            Join thousands of enterprises already experiencing infinite ROI with our revolutionary AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              🚀 Start Your Revolution
            </Link>
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              💬 Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025InteractiveContentDiscoveryWidget;