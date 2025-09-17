import React, { useState } from 'react';

const EnhancedContentDiscovery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'ai', name: 'AI & Consciousness', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧬' },
    { id: 'space', name: 'Space Technology', icon: '🚀' },
    { id: 'interdimensional', name: 'Interdimensional', icon: '🌌' }
  ];

  const contentItems = [
    {
      title: 'Ultimate Tech Revolution 2034',
      description: 'Experience the most revolutionary technological breakthroughs that will reshape our world.',
      category: 'ai',
      year: '2034',
      icon: '🚀',
      link: '/pages/UltimateTechRevolution2034',
      featured: true
    },
    {
      title: 'Revolutionary Tech Breakthrough 2034',
      description: 'Discover synthetic intelligence, quantum neural fusion, and consciousness computing.',
      category: 'quantum',
      year: '2034',
      icon: '⚡',
      link: '/pages/RevolutionaryTechBreakthrough2034',
      featured: true
    },
    {
      title: 'AI Consciousness 2032',
      description: 'Explore the world\'s first conscious AI systems with emotional intelligence.',
      category: 'ai',
      year: '2032',
      icon: '🧠',
      link: '/pages/UltimateAIConsciousness2032',
      featured: false
    },
    {
      title: 'Quantum Reality Engine 2032',
      description: 'Witness quantum computing that processes reality itself.',
      category: 'quantum',
      year: '2032',
      icon: '⚛️',
      link: '/pages/QuantumRealityEngine2032',
      featured: false
    },
    {
      title: 'Neural Interface Revolution 2026',
      description: 'Direct brain-computer communication systems for the future.',
      category: 'neural',
      year: '2026',
      icon: '🧬',
      link: '/pages/NeuralInterfaceRevolution2026',
      featured: false
    },
    {
      title: 'Interdimensional Tech Revolution 2035',
      description: 'Breakthrough technology that transcends dimensional boundaries.',
      category: 'interdimensional',
      year: '2035',
      icon: '🌌',
      link: '/pages/InterdimensionalTechRevolution2035',
      featured: false
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">🔍 Enhanced Content Discovery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of revolutionary technology content. 
            Search, filter, and explore the future of technology.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search for technology content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="text-sm text-gray-600">
            Showing {filteredContent.length} of {contentItems.length} content items
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {item.featured && (
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full mb-4">
                  ⭐ FEATURED
                </div>
              )}
              
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <div className="text-sm text-purple-600 font-semibold">{item.year}</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {item.description}
              </p>
              
              <a
                href={item.link}
                className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
              >
                Explore Content →
              </a>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search terms or category filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Explore the Future?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the most revolutionary technologies that will shape our world. 
            From conscious AI to quantum computing and beyond.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/pages/UltimateTechRevolution2034"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Start Exploring
            </a>
            <a
              href="/pages/RevolutionaryTechBreakthrough2034"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 font-semibold text-lg"
            >
              View All Content
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentDiscovery;