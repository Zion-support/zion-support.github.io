import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Filter, Sparkles, ArrowRight, Brain, Zap, Globe, Atom } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  icon: React.ReactNode;
  featured: boolean;
  tags: string[];
}

export default function UltimateContentDiscoveryWidget2026() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-2026-breakthrough',
      title: 'AI 2026 Breakthrough Revolution',
      description: 'Revolutionary AI technologies including synthetic consciousness and quantum neural networks.',
      category: 'ai',
      url: '/ai-2026-breakthrough-revolution',
      icon: <Brain className="h-6 w-6" />,
      featured: true,
      tags: ['AI', 'Breakthrough', 'Revolution', '2026']
    },
    {
      id: 'quantum-2026-ultimate',
      title: 'Quantum Computing 2026 Ultimate',
      description: 'Ultimate quantum computing solutions that solve impossible problems with unprecedented speed.',
      category: 'quantum',
      url: '/quantum-computing-2026-ultimate',
      icon: <Atom className="h-6 w-6" />,
      featured: true,
      tags: ['Quantum', 'Computing', 'Ultimate', '2026']
    },
    {
      id: 'neural-interface-2026',
      title: 'Neural Interface Revolution 2026',
      description: 'Direct brain-computer interfaces enabling thought-based control and data exchange.',
      category: 'ai',
      url: '/neural-interface-revolution-2026',
      icon: <Zap className="h-6 w-6" />,
      featured: false,
      tags: ['Neural', 'Interface', 'Brain', 'Control']
    },
    {
      id: 'quantum-neural-fusion',
      title: 'Quantum Neural Fusion 2030',
      description: 'The convergence of quantum computing and neural networks for unprecedented AI capabilities.',
      category: 'quantum',
      url: '/quantum-neural-fusion-2030',
      icon: <Globe className="h-6 w-6" />,
      featured: true,
      tags: ['Quantum', 'Neural', 'Fusion', '2030']
    },
    {
      id: 'ai-2030-transcendent',
      title: 'AI 2030 Transcendent Intelligence',
      description: 'The next evolution of AI with transcendent intelligence capabilities beyond human comprehension.',
      category: 'ai',
      url: '/ai-2030-transcendent-intelligence',
      icon: <Sparkles className="h-6 w-6" />,
      featured: false,
      tags: ['AI', 'Transcendent', 'Intelligence', '2030']
    },
    {
      id: 'quantum-security-2026',
      title: 'Quantum Security 2026',
      description: 'Unbreakable quantum encryption and security protocols for ultimate data protection.',
      category: 'quantum',
      url: '/quantum-security-2026',
      icon: <Atom className="h-6 w-6" />,
      featured: false,
      tags: ['Quantum', 'Security', 'Encryption', '2026']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', icon: <Sparkles className="h-4 w-4" /> },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="h-4 w-4" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="h-4 w-4" /> },
    { id: 'neural', name: 'Neural Interfaces', icon: <Zap className="h-4 w-4" /> }
  ];

  useEffect(() => {
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
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ultimate Content Discovery
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              2026 Edition
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive collection of cutting-edge AI and quantum computing content. 
            Find exactly what you're looking for with our intelligent discovery system.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search content, technologies, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
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
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 ${
                item.featured ? 'ring-2 ring-cyan-400/50' : ''
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="flex items-center mb-4">
                  <Sparkles className="h-4 w-4 text-cyan-400 mr-2" />
                  <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded-full">
                    FEATURED
                  </span>
                </div>
              )}

              {/* Icon and Title */}
              <div className="flex items-center mb-4">
                <div className="text-cyan-400 mr-3">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-white/20 text-gray-300 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link
                href={item.url}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
              >
                Explore Content
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No Content Found</h3>
            <p className="text-gray-300">
              Try adjusting your search terms or category filters to find what you're looking for.
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                {contentItems.length}+
              </div>
              <div className="text-gray-300">Content Items</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {contentItems.filter(item => item.featured).length}
              </div>
              <div className="text-gray-300">Featured Content</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-2">
                {categories.length - 1}
              </div>
              <div className="text-gray-300">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}