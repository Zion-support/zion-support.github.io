import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Ultimate Breakthrough Announcement",
      description: "Revolutionary AI technology delivering 5,000% ROI through quantum-enhanced neural networks.",
      category: "breakthrough",
      roi: "5,000%",
      type: "announcement",
      url: "/ai-2025-ultimate-breakthrough-announcement",
      featured: true
    },
    {
      id: 2,
      title: "AI 2026 Quantum-Neural Fusion Breakthrough",
      description: "Revolutionary quantum-neural fusion delivering 15,000% ROI through consciousness integration.",
      category: "quantum",
      roi: "15,000%",
      type: "breakthrough",
      url: "/ai-2026-quantum-neural-fusion-breakthrough",
      featured: true
    },
    {
      id: 3,
      title: "AI 2026-2030 Future Predictions",
      description: "Comprehensive predictions for revolutionary AI technology over the next 5 years.",
      category: "predictions",
      roi: "∞",
      type: "forecast",
      url: "/ai-2026-2030-future-predictions-breakthrough",
      featured: true
    },
    {
      id: 4,
      title: "Quantum Computing Breakthrough 2025",
      description: "Revolutionary quantum computing delivering 10,000% ROI through quantum supremacy.",
      category: "quantum",
      roi: "10,000%",
      type: "breakthrough",
      url: "/quantum-computing-breakthrough-2025",
      featured: true
    },
    {
      id: 5,
      title: "AI 2025 Success Stories",
      description: "Real case studies of companies achieving unprecedented ROI with AI technology.",
      category: "case-studies",
      roi: "4,875%",
      type: "success",
      url: "/case-studies/ai-2025-ultimate-breakthrough-success",
      featured: false
    },
    {
      id: 6,
      title: "Enterprise AI Transformation Guide",
      description: "Complete implementation guide for transforming your business with AI technology.",
      category: "resources",
      roi: "2,500%",
      type: "guide",
      url: "/resources/ai-2025-ultimate-implementation-guide",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'breakthrough', name: 'Breakthroughs', icon: '🚀' },
    { id: 'quantum', name: 'Quantum AI', icon: '⚛️' },
    { id: 'predictions', name: 'Predictions', icon: '🔮' },
    { id: 'case-studies', name: 'Success Stories', icon: '🏆' },
    { id: 'resources', name: 'Resources', icon: '📚' }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'announcement': return 'from-red-500 to-pink-500';
      case 'breakthrough': return 'from-cyan-500 to-blue-500';
      case 'forecast': return 'from-purple-500 to-indigo-500';
      case 'success': return 'from-green-500 to-emerald-500';
      case 'guide': return 'from-orange-500 to-yellow-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our revolutionary AI content library. Discover breakthrough technologies, 
            success stories, and implementation guides that can transform your business.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* Search Bar */}
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 ${
                item.featured ? 'ring-2 ring-cyan-400/50' : ''
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-4">
                  <span className="text-cyan-400 text-sm font-semibold">⭐ Featured</span>
                </div>
              )}

              {/* Type Badge */}
              <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${getTypeColor(item.type)} text-white text-sm font-semibold mb-4`}>
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4 text-sm">
                {item.description}
              </p>

              {/* ROI Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-2xl font-bold text-green-400">
                  {item.roi} ROI
                </div>
                <div className="text-sm text-gray-400">
                  {categories.find(cat => cat.id === item.category)?.name}
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href={item.url}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
              >
                Explore Content
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2">No content found</h3>
            <p className="text-gray-400">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-300 mb-6">
              Our AI experts can help you discover the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
              >
                Contact Our Experts
              </Link>
              <Link
                href="/resources"
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}