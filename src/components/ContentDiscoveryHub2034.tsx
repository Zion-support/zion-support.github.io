import React, { useState, useEffect } from 'react';

const ContentDiscoveryHub2034: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'ai', name: 'Conscious AI', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'interdimensional', name: 'Interdimensional Tech', icon: '🌌' },
    { id: 'medical', name: 'Medical Revolution', icon: '🏥' },
    { id: 'space', name: 'Space Exploration', icon: '🚀' },
    { id: 'services', name: 'Services', icon: '🛠️' }
  ];

  const years = [
    { id: 'all', name: 'All Years' },
    { id: '2025', name: '2025' },
    { id: '2026', name: '2026' },
    { id: '2027', name: '2027' },
    { id: '2028', name: '2028' },
    { id: '2029', name: '2029' },
    { id: '2030', name: '2030' },
    { id: '2034', name: '2034' }
  ];

  const contentItems = [
    {
      id: 1,
      title: "Ultimate Tech Breakthrough 2034",
      description: "Conscious AI, Quantum Consciousness, Interdimensional Computing",
      category: "ai",
      year: "2034",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechBreakthrough2034",
      featured: true,
      tags: ["conscious AI", "quantum consciousness", "interdimensional computing", "breakthrough"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Showcase 2034",
      description: "Interactive demos and immersive technology experiences",
      category: "quantum",
      year: "2034",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2034",
      featured: true,
      tags: ["interactive", "demos", "showcase", "technology"]
    },
    {
      id: 3,
      title: "Comprehensive Services 2034",
      description: "Transform your world with revolutionary services",
      category: "services",
      year: "2034",
      icon: "🔮",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/ComprehensiveServices2034",
      featured: true,
      tags: ["services", "transformation", "revolutionary", "comprehensive"]
    },
    {
      id: 4,
      title: "AI Revolution 2025",
      description: "Discover how artificial intelligence is reshaping industries",
      category: "ai",
      year: "2025",
      icon: "🤖",
      color: "from-blue-600 to-indigo-600",
      link: "/pages/AIRevolution2025",
      featured: false,
      tags: ["AI", "revolution", "industries", "transformation"]
    },
    {
      id: 5,
      title: "Quantum Computing Breakthrough",
      description: "Experience the future of computing with quantum technology",
      category: "quantum",
      year: "2025",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingBreakthrough",
      featured: false,
      tags: ["quantum", "computing", "breakthrough", "technology"]
    },
    {
      id: 6,
      title: "Neural Interface Future",
      description: "Bridge the gap between mind and machine",
      category: "ai",
      year: "2025",
      icon: "🧬",
      color: "from-green-600 to-emerald-600",
      link: "/pages/NeuralInterfaceFuture",
      featured: false,
      tags: ["neural", "interface", "mind", "machine"]
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || item.year === selectedYear;
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  const featuredContent = filteredContent.filter(item => item.featured);
  const regularContent = filteredContent.filter(item => !item.featured);

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🔍 CONTENT DISCOVERY • JANUARY 2034
          </div>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Content Discovery Hub 2034
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our comprehensive collection of revolutionary technology content and services
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Search */}
            <div>
              <label className="block text-lg font-semibold mb-3">🔍 Search Content</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for technology, services, or topics..."
                className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-lg font-semibold mb-3">📂 Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id} className="bg-gray-800">
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div>
              <label className="block text-lg font-semibold mb-3">📅 Year</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {years.map(year => (
                  <option key={year.id} value={year.id} className="bg-gray-800">
                    {year.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="text-lg opacity-90">
              Found {filteredContent.length} content items
              {searchTerm && ` matching "${searchTerm}"`}
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
              {selectedYear !== 'all' && ` from ${selectedYear}`}
            </p>
          </div>
        </div>

        {/* Featured Content */}
        {featuredContent.length > 0 && (
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-center mb-12">⭐ Featured Content</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredContent.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="text-6xl mb-6 text-center group-hover:animate-bounce">{item.icon}</div>
                  <h4 className="text-2xl font-bold mb-4 text-center">{item.title}</h4>
                  <p className="text-lg opacity-90 mb-6 text-center">{item.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className={`bg-gradient-to-r ${item.color} text-white py-3 rounded-lg text-center font-semibold group-hover:shadow-lg transition-all duration-300`}>
                    Explore Now →
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Regular Content */}
        {regularContent.length > 0 && (
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-center mb-12">📚 All Content</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularContent.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="group bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="text-4xl mb-4 text-center group-hover:animate-pulse">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-3 text-center">{item.title}</h4>
                  <p className="text-base opacity-90 mb-4 text-center">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      {categories.find(c => c.id === item.category)?.name}
                    </span>
                    <span className="text-sm opacity-70">{item.year}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-16">
            <div className="text-8xl mb-8">🔍</div>
            <h3 className="text-3xl font-bold mb-4">No Content Found</h3>
            <p className="text-xl opacity-90 mb-8">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedYear('all');
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Quick Access */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12">
          <h3 className="text-4xl font-bold text-center mb-8">🚀 Quick Access</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <a href="/pages/UltimateTechBreakthrough2034" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🧠</div>
              <div className="font-bold">Ultimate Breakthrough</div>
            </a>
            <a href="/pages/RevolutionaryTechShowcase2034" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">⚡</div>
              <div className="font-bold">Interactive Showcase</div>
            </a>
            <a href="/pages/ComprehensiveServices2034" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🔮</div>
              <div className="font-bold">Services</div>
            </a>
            <a href="/contact" className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">📞</div>
              <div className="font-bold">Contact Us</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDiscoveryHub2034;