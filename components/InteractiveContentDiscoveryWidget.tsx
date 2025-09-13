import React, { useState } from 'react';
import { Search, Filter, ArrowRight, Star, Clock, TrendingUp, Brain, Atom, Zap } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'ai' | 'quantum' | 'automation';
  featured: boolean;
  new: boolean;
  trending: boolean;
  icon: React.ReactNode;
  gradient: string;
  borderColor: string;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-innovation',
    title: 'AI Innovation Showcase 2025',
    description: 'Revolutionary AI breakthroughs, quantum AI fusion, and next-generation neural interfaces.',
    category: 'Artificial Intelligence',
    type: 'ai',
    featured: true,
    new: false,
    trending: true,
    icon: <Brain className="h-6 w-6" />,
    gradient: 'from-blue-500 to-purple-600',
    borderColor: 'border-blue-500/20'
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing Breakthrough 2025',
    description: 'Groundbreaking quantum computing solutions and quantum neural networks.',
    category: 'Quantum Computing',
    type: 'quantum',
    featured: false,
    new: true,
    trending: true,
    icon: <Atom className="h-6 w-6" />,
    gradient: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-500/20'
  },
  {
    id: 'automation-solutions',
    title: 'Advanced Automation Solutions 2025',
    description: 'Intelligent workflows, autonomous operations, and AI-powered automation.',
    category: 'Automation',
    type: 'automation',
    featured: false,
    new: false,
    trending: false,
    icon: <Zap className="h-6 w-6" />,
    gradient: 'from-cyan-500 to-teal-600',
    borderColor: 'border-cyan-500/20'
  }
];

export default function InteractiveContentDiscoveryWidget() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredItems = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesType = selectedType === 'all' || item.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const categories = ['all', ...Array.from(new Set(contentItems.map(item => item.category)))];
  const types = ['all', 'ai', 'quantum', 'automation'];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Amazing
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Content
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive library of AI innovations, quantum breakthroughs, 
            and automation solutions. Find exactly what you're looking for.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent appearance-none"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent appearance-none"
              >
                {types.map(type => (
                  <option key={type} value={type} className="bg-slate-800 text-white">
                    {type === 'all' ? 'All Types' : type.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${item.gradient}/20 backdrop-blur-sm rounded-2xl p-8 border ${item.borderColor} hover:border-opacity-40 transition-all duration-300 group cursor-pointer`}
            >
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${item.gradient} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <div className="flex items-center space-x-2">
                    {item.featured && (
                      <span className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Star className="h-3 w-3 mr-1 fill-current" />
                        Featured
                      </span>
                    )}
                    {item.new && (
                      <span className="bg-green-500 text-green-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        New
                      </span>
                    )}
                    {item.trending && (
                      <span className="bg-red-500 text-red-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">{item.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{item.category}</span>
                <div className="flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                  Explore <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">No Content Found</h3>
            <p className="text-gray-300 mb-6">Try adjusting your search terms or filters to find what you're looking for.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedType('all');
              }}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-gray-300 mb-6">Let us know what content you'd like to see, and we'll create it for you.</p>
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
            Request Content
          </button>
        </div>
      </div>
    </div>
  );
}