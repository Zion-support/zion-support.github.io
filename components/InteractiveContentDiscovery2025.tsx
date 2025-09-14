import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscovery2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Content', icon: '🚀' },
    { id: 'ai', name: 'Artificial Intelligence', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧬' },
    { id: 'automation', name: 'Business Automation', icon: '🤖' },
    { id: 'future', name: 'Future Tech', icon: '⚡' }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Ultimate Innovation",
      description: "Revolutionary breakthroughs in artificial intelligence that are reshaping the future of business and technology.",
      href: "/ai-2025-ultimate-innovation",
      image: "🧠",
      category: "ai",
      featured: true,
      tags: ["AI", "Innovation", "Business", "Technology"]
    },
    {
      id: 2,
      title: "Quantum Computing Revolution 2025",
      description: "Harness quantum computing power to solve problems that were previously impossible with classical computing.",
      href: "/quantum-computing-revolution-2025",
      image: "⚛️",
      category: "quantum",
      featured: true,
      tags: ["Quantum", "Computing", "Revolution", "Breakthrough"]
    },
    {
      id: 3,
      title: "Neural Interface Revolution 2025",
      description: "Direct brain-computer interfaces that enable seamless interaction between human consciousness and AI systems.",
      href: "/neural-interface-revolution-2025",
      image: "🧬",
      category: "neural",
      featured: true,
      tags: ["Neural", "Interface", "BCI", "Consciousness"]
    },
    {
      id: 4,
      title: "Autonomous Business Systems",
      description: "Self-managing business processes that adapt, learn, and optimize operations without human intervention.",
      href: "/autonomous-business-systems-2026",
      image: "🤖",
      category: "automation",
      featured: false,
      tags: ["Autonomous", "Business", "Systems", "Automation"]
    },
    {
      id: 5,
      title: "Advanced Neural Architectures",
      description: "Next-generation neural network architectures that process information with unprecedented speed and accuracy.",
      href: "/advanced-neural-architectures-2026",
      image: "⚡",
      category: "ai",
      featured: false,
      tags: ["Neural", "Architecture", "AI", "Performance"]
    },
    {
      id: 6,
      title: "Synthetic Intelligence Solutions",
      description: "Artificial general intelligence systems that can reason, learn, and adapt across multiple domains.",
      href: "/synthetic-intelligence",
      image: "🎯",
      category: "future",
      featured: false,
      tags: ["AGI", "Synthetic", "Intelligence", "Future"]
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6 font-semibold">
            <span className="mr-2">🔍</span>
            INTERACTIVE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of cutting-edge technology content. Use our interactive discovery tools to find exactly what you need.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Search Bar */}
            <div className="mb-8">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search Content
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by title, description, or tags..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400">🔍</span>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Filter by Category
              </label>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Content' : categories.find(c => c.id === selectedCategory)?.name}
            </h3>
            <span className="text-gray-600">
              {filteredContent.length} {filteredContent.length === 1 ? 'item' : 'items'} found
            </span>
          </div>

          {filteredContent.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No content found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContent.map((item) => (
                <div key={item.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="text-4xl">{item.image}</div>
                      <div className="flex-1">
                        {item.featured && (
                          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-2 py-1 rounded-full mb-2">
                            FEATURED
                          </div>
                        )}
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                          {item.title}
                        </h4>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {item.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors group-hover:translate-x-1 transform duration-200"
                    >
                      Explore Content →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our team of experts can help you discover the perfect technology solutions for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Get Personalized Recommendations
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}