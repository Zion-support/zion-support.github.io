import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight, Star, Clock, TrendingUp, Brain, Zap, Rocket, Star as StarIcon } from 'lucide-react';

const UltimateContentDiscovery2026: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Content', icon: Search },
    { id: 'ai', name: 'AI Breakthroughs', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Zap },
    { id: 'automation', name: 'Automation', icon: Rocket },
    { id: 'space', name: 'Space Technology', icon: StarIcon },
    { id: 'neural', name: 'Neural Interfaces', icon: TrendingUp }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI 2026 Ultimate Implementation Guide",
      description: "Complete roadmap for implementing AI solutions in your organization",
      category: "ai",
      readTime: "45 min",
      rating: 4.9,
      trending: true,
      featured: true,
      tags: ["AI", "Implementation", "Guide", "2026"]
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs: What's Next",
      description: "Latest quantum computing developments and their business implications",
      category: "quantum",
      readTime: "20 min",
      rating: 4.8,
      trending: true,
      featured: false,
      tags: ["Quantum", "Computing", "Breakthroughs", "Future"]
    },
    {
      id: 3,
      title: "Autonomous Business Systems: The Complete Guide",
      description: "Build self-managing business systems with AI and automation",
      category: "automation",
      readTime: "30 min",
      rating: 4.9,
      trending: false,
      featured: true,
      tags: ["Automation", "Business", "AI", "Systems"]
    },
    {
      id: 4,
      title: "Space Technology Solutions for Earth",
      description: "How space technology is solving problems on Earth",
      category: "space",
      readTime: "25 min",
      rating: 4.7,
      trending: true,
      featured: false,
      tags: ["Space", "Technology", "Innovation", "Earth"]
    },
    {
      id: 5,
      title: "Neural Interface Development Kit",
      description: "Build brain-computer interfaces with our comprehensive SDK",
      category: "neural",
      readTime: "35 min",
      rating: 4.8,
      trending: false,
      featured: true,
      tags: ["Neural", "Interface", "Development", "BCI"]
    },
    {
      id: 6,
      title: "Quantum Machine Learning: A New Paradigm",
      description: "How quantum computing is revolutionizing machine learning",
      category: "quantum",
      readTime: "18 min",
      rating: 4.6,
      trending: true,
      featured: false,
      tags: ["Quantum", "ML", "AI", "Computing"]
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ultimate Content Discovery
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Engine 2026
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most relevant and impactful content tailored to your needs. 
            Our AI-powered discovery engine helps you find exactly what you're looking for.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search content, topics, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-80">
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id} className="bg-gray-800 text-white">
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 group">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {item.featured && (
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                        Featured
                      </span>
                    )}
                    {item.trending && (
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                        Trending
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-white/20 text-gray-300 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {item.rating}k views
                    </div>
                  </div>
                  <Link
                    to={`/content/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">No content found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search terms or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h3>
            <p className="text-lg mb-6 opacity-90">
              Our content library is constantly growing. Request specific content or get personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Request Content
              </Link>
              <Link
                to="/newsletter"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Recommendations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentDiscovery2026;