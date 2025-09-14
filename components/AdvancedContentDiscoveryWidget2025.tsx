"use client";
'use client';

import React{ useStateuseEffect } from 'react';
import { 
  Search
  Filter
  Grid
  List
  Star
  Clock
  TrendingUp
  ArrowRight,
  Brain,
  Zap,
  Rocket,
  Code,
  Image,
  Video,
  Music,
  FileText,
  BarChart3,
  MessageSquare,
  Globe,
  Users,
  Shield,
  Target
} from 'lucide-react';
import Link from 'next/link';

export default function AdvancedContentDiscoveryWidget2025() {
  const [searchQuerysetSearchQuery] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [viewModesetViewMode] = useState('grid');
  const [sortBysetSortBy] = useState('trending');
  const [isExpandedsetIsExpanded] = useState(false);

  const categories = [
    { id: 'all'name: 'All Content'icon: Globecount: 150 },
    { id: 'ai-innovation'name: 'AI Innovation'icon: Braincount: 45 },
    { id: 'ai-tools'name: 'AI Tools'icon: Zapcount: 38 },
    { id: 'predictions'name: 'Future Predictions'icon: Rocketcount: 25 },
    { id: 'code'name: 'Code & Development'icon: Codecount: 20 },
    { id: 'visual'name: 'Visual Content'icon: Imagecount: 15 },
    { id: 'video'name: 'Video & Media'icon: Videocount: 12 },
    { id: 'audio'name: 'Audio & Music'icon: Musicount: 8 },
    { id: 'writing'name: 'Content Writing'icon: FileTextcount: 18 },
    { id: 'analytics'name: 'Data & Analytics'icon: BarChart3count: 14 },
    { id: 'communication'name: 'Communication'icon: MessageSquarecount: 10 },
    { id: 'security'name: 'Security & Ethics'icon: Shieldcount: 6 }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI Innovation Showcase 2025',
      description: 'Revolutionary AI breakthroughs and interactive demonstrations',
      category: 'ai-innovation',
      type: 'showcase',
      rating: 4.9,
      views: '125K',
      date: '2025-01-15',
      tags: ['AI'Innovation'Breakthrough'Interactive'],
      image: '/api/placeholder/400/250',
      link: '/ai-innovation-showcase-2025',
      featured: true
    },
    {
      id: 2,
      title: 'Ultimate AI Tools Collection',
      description: 'Complete toolkit of AI-powered solutions for every industry',
      category: 'ai-tools',
      type: 'tools',
      rating: 4.8,
      views: '98K',
      date: '2025-01-14',
      tags: ['Tools'Productivity'Automation'AI'],
      image: '/api/placeholder/400/250',
      link: '/ai-tools-ultimate-showcase-2025',
      featured: true
    },
    {
      id: 3,
      title: '2030 Future Predictions',
      description: 'Comprehensive technology forecasts and breakthrough predictions',
      category: 'predictions',
      type: 'research',
      rating: 4.7,
      views: '87K',
      date: '2025-01-13',
      tags: ['Future'Predictions'Technology'Research'],
      image: '/api/placeholder/400/250',
      link: '/ai-2030-future-predictions-ultimate',
      featured: true
    },
    {
      id: 4,
      title: 'Neural Code Generator',
      description: 'Generate high-quality code using advanced neural networks',
      category: 'code',
      type: 'tool',
      rating: 4.9,
      views: '76K',
      date: '2025-01-12',
      tags: ['Code'AI'Development'Automation'],
      image: '/api/placeholder/400/250',
      link: '/tools/neural-code-generator',
      featured: false
    },
    {
      id: 5,
      title: 'Quantum Image Creator',
      description: 'Create stunning images using quantum-enhanced AI algorithms',
      category: 'visual',
      type: 'tool',
      rating: 4.8,
      views: '65K',
      date: '2025-01-11',
      tags: ['Image'AI'Art'Quantum'],
      image: '/api/placeholder/400/250',
      link: '/tools/quantum-image-creator',
      featured: false
    },
    {
      id: 6,
      title: 'Voice Synthesis Studio',
      description: 'Generate natural-sounding speech in multiple languages',
      category: 'audio',
      type: 'tool',
      rating: 4.7,
      views: '54K',
      date: '2025-01-10',
      tags: ['Voice'AI'Audio'Synthesis'],
      image: '/api/placeholder/400/250',
      link: '/tools/voice-synthesis-studio',
      featured: false
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedContent = [...filteredContent].sort((ab) => {
    switch (sortBy) {
      case 'trending':
        return parseInt(b.views.replace('K'')) - parseInt(a.views.replace('K''));
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'featured':
        return b.featured - a.featured;
      default:
        return 0;
    }
  });

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-white/10 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Content Discovery</h2>
            <p className="text-gray-400">Explore our comprehensive collection of AI content and tools</p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
          >
            <Filter className="w-5 h-5" />
          </button>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search contentoolsand resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id} className="bg-slate-800">
                  {category.name} ({category.count})
                </option>
              ))}
            </select>

            {/* Sort Filter */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="trending" className="bg-slate-800">Trending</option>
              <option value="rating" className="bg-slate-800">Highest Rated</option>
              <option value="newest" className="bg-slate-800">Newest</option>
              <option value="featured" className="bg-slate-800">Featured</option>
            </select>

            {/* View Mode */}
            <div className="flex bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid/List */}
      <div className="p-6">
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedContent.map((item) => (
              <div key={item.id} className="group">
                <Link href={item.link}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden hover:transform hover:scale-105">
                    {/* Image */}
                    <div className="relative h-48 bg-gradient-to-br from-purple-600 to-blue-600 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4">
                        {item.featured && (
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div className="flex items-center gap-1 text-white">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-semibold">{item.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-blue-400 bg-blue-400/20 px-2 py-1 rounded-full">
                          {categories.find(cat => cat.id === item.category)?.name}
                        </span>
                        <span className="text-xs text-gray-400">{item.type}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            {item.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {new Date(item.date).toLocaleDateString()}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedContent.map((item) => (
              <div key={item.id} className="group">
                <Link href={item.link}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 p-6 hover:bg-white/10">
                    <div className="flex items-center gap-6">
                      {/* Image */}
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex-shrink-0 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        {item.featured && (
                          <div className="absolute top-2 left-2">
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-2 py-1 rounded text-xs font-bold">
                              Featured
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-400">{item.rating}</span>
                          </div>
                        </div>

                        <p className="text-gray-400 mb-3">{item.description}</p>

                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="bg-blue-400/20 text-blue-400 px-2 py-1 rounded">
                            {categories.find(cat => cat.id === item.category)?.name}
                          </span>
                          <span className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            {item.views} views
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {new Date(item.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 mx-auto">
            Load More Content
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}