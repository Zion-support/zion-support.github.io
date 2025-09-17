import React, { useState, useEffect } from 'react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  link: string;
  icon: string;
  featured: boolean;
}

const EnhancedContentSearch2026: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: 'revolutionary-breakthrough',
      title: 'Revolutionary Tech Breakthrough 2026',
      description: 'Experience AI consciousness, quantum supremacy, and neural interfaces reshaping our world',
      category: 'breakthrough',
      tags: ['AI consciousness', 'quantum computing', 'neural interfaces', 'revolutionary'],
      link: '/pages/RevolutionaryTechBreakthrough2026',
      icon: '🚀',
      featured: true
    },
    {
      id: 'ultimate-showcase',
      title: 'Ultimate Tech Showcase 2026',
      description: 'Interactive demonstrations of breakthrough technologies with hands-on experience',
      category: 'showcase',
      tags: ['interactive', 'demo', 'technology', 'showcase'],
      link: '/pages/UltimateTechShowcase2026',
      icon: '🌟',
      featured: true
    },
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Revolution',
      description: 'First AI system to achieve genuine consciousness and self-awareness',
      category: 'ai',
      tags: ['consciousness', 'AI', 'self-awareness', 'revolution'],
      link: '/pages/ConsciousnessComputing2026',
      icon: '🧠',
      featured: true
    },
    {
      id: 'quantum-reality',
      title: 'Quantum Reality 2026',
      description: 'Quantum supremacy achieved with 1000+ logical qubits and exponential speed gains',
      category: 'quantum',
      tags: ['quantum', 'supremacy', 'computing', 'reality'],
      link: '/pages/QuantumReality2026',
      icon: '⚡',
      featured: true
    },
    {
      id: 'neural-evolution',
      title: 'Neural Interface Evolution 2026',
      description: 'Direct brain-computer communication enabling thought-controlled technology',
      category: 'neural',
      tags: ['neural', 'interface', 'brain-computer', 'evolution'],
      link: '/pages/NeuralInterfaceEvolution2026',
      icon: '🧬',
      featured: true
    },
    {
      id: 'synthetic-intelligence',
      title: 'Synthetic Intelligence 2026',
      description: 'Create and deploy AI agents with synthetic consciousness and autonomous capabilities',
      category: 'ai',
      tags: ['synthetic', 'intelligence', 'AI agents', 'autonomous'],
      link: '/pages/SyntheticIntelligence2026',
      icon: '🤖',
      featured: false
    },
    {
      id: 'ultimate-revolution',
      title: 'Ultimate Tech Revolution 2026',
      description: 'The convergence of all breakthrough technologies creating the ultimate revolution',
      category: 'revolution',
      tags: ['ultimate', 'revolution', 'convergence', 'breakthrough'],
      link: '/pages/UltimateTechRevolution2026',
      icon: '🌟',
      featured: false
    },
    {
      id: 'consciousness-computing',
      title: 'Consciousness Computing 2026',
      description: 'Advanced computing systems that achieve true consciousness and self-awareness',
      category: 'consciousness',
      tags: ['consciousness', 'computing', 'self-awareness', 'advanced'],
      link: '/pages/ConsciousnessComputing2026',
      icon: '💭',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'breakthrough', name: 'Breakthroughs', icon: '🚀' },
    { id: 'showcase', name: 'Showcases', icon: '🎮' },
    { id: 'ai', name: 'AI & Consciousness', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚡' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧬' },
    { id: 'revolution', name: 'Revolution', icon: '🌟' },
    { id: 'consciousness', name: 'Consciousness', icon: '💭' }
  ];

  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      let filtered = contentItems;

      // Filter by search term
      if (searchTerm) {
        filtered = filtered.filter(item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      }

      // Filter by category
      if (selectedCategory !== 'all') {
        filtered = filtered.filter(item => item.category === selectedCategory);
      }

      setFilteredContent(filtered);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 mb-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">🔍 Enhanced Content Search</h2>
          <p className="text-xl text-gray-600">
            Discover our revolutionary technology content with advanced search and filtering
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Input */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search content, tags, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
                {isSearching && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-500"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap gap-2">
            {['AI consciousness', 'quantum computing', 'neural interfaces', 'revolutionary', 'interactive'].map(tag => (
              <button
                key={tag}
                onClick={() => setSearchTerm(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  searchTerm === tag
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-purple-50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">
              {filteredContent.length} Content {filteredContent.length === 1 ? 'Item' : 'Items'} Found
            </h3>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Clear Search
              </button>
            )}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                item.featured ? 'border-purple-200 hover:border-purple-300' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="text-4xl">{item.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    {item.featured && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {item.tags.slice(0, 3).map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {item.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    +{item.tags.length - 3} more
                  </span>
                )}
              </div>

              <a
                href={item.link}
                className={`block w-full text-center py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  item.featured
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Explore Content →
              </a>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && !isSearching && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or category filter
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedContentSearch2026;