import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Star, TrendingUp, Clock, ArrowRight, Brain, Atom, Bot, Zap, Globe, Shield } from 'lucide-react';

export default function InteractiveContentDiscovery2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentItems = [
    {
      id: 1,
      title: 'AI Innovation Showcase 2025-2026',
      description: 'Revolutionary AI technologies including quantum AI fusion, neural interfaces, and autonomous business systems.',
      category: 'ai',
      type: 'showcase',
      url: '/ai-innovation-showcase-2025-2026',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-800/50 to-pink-800/50',
      borderColor: 'border-purple-500/20',
      textColor: 'text-purple-400',
      trending: true,
      new: true
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough',
      description: 'Next-generation quantum processors, quantum AI fusion, and unbreakable quantum cryptography systems.',
      category: 'quantum',
      type: 'breakthrough',
      url: '/quantum-computing-breakthrough-2025-2026',
      icon: Atom,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-800/50 to-blue-800/50',
      borderColor: 'border-cyan-500/20',
      textColor: 'text-cyan-400',
      trending: true,
      new: true
    },
    {
      id: 3,
      title: 'Advanced Automation Solutions',
      description: 'Intelligent automation solutions that work 24/7, learn continuously, and deliver unprecedented efficiency.',
      category: 'automation',
      type: 'solutions',
      url: '/advanced-automation-solutions-2025-2026',
      icon: Bot,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-800/50 to-teal-800/50',
      borderColor: 'border-emerald-500/20',
      textColor: 'text-emerald-400',
      trending: true,
      new: true
    },
    {
      id: 4,
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces enabling seamless interaction between human consciousness and AI systems.',
      category: 'ai',
      type: 'innovation',
      url: '/neural-interface-revolution-2026',
      icon: Zap,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-800/50 to-indigo-800/50',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-400',
      trending: false,
      new: false
    },
    {
      id: 5,
      title: 'Autonomous Business Systems',
      description: 'Self-managing business operations powered by advanced AI that can make decisions and optimize processes.',
      category: 'automation',
      type: 'systems',
      url: '/autonomous-business-systems-2025',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-800/50 to-emerald-800/50',
      borderColor: 'border-green-500/20',
      textColor: 'text-green-400',
      trending: false,
      new: false
    },
    {
      id: 6,
      title: 'Advanced Security AI',
      description: 'Next-generation cybersecurity powered by AI that can predict, prevent, and respond to threats in real-time.',
      category: 'security',
      type: 'security',
      url: '/advanced-security-ai-2025',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      bgColor: 'from-red-800/50 to-orange-800/50',
      borderColor: 'border-red-500/20',
      textColor: 'text-red-400',
      trending: false,
      new: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', icon: Filter },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'automation', name: 'Automation', icon: Bot },
    { id: 'security', name: 'Security', icon: Shield }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of cutting-edge technology content, innovations, and breakthrough solutions.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, innovations, and solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`bg-gradient-to-br ${item.bgColor} backdrop-blur-sm rounded-2xl p-6 border ${item.borderColor} hover:border-opacity-40 transition-all duration-300 group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex gap-2">
                    {item.trending && (
                      <div className="flex items-center px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-xs font-medium text-white">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </div>
                    )}
                    {item.new && (
                      <div className="flex items-center px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-xs font-medium text-white">
                        <Star className="w-3 h-3 mr-1" />
                        New
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-opacity-90 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full bg-white/10 ${item.textColor}`}>
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </span>
                  
                  <Link
                    href={item.url}
                    className={`inline-flex items-center ${item.textColor} hover:text-opacity-80 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300`}
                  >
                    Explore
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/content-library"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            View All Content
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}