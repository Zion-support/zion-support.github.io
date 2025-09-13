import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Clock, 
  TrendingUp, 
  ArrowRight,
  Brain,
  Cpu,
  Database,
  Shield,
  Zap,
  Target,
  Rocket,
  BarChart3,
  Users,
  Award,
  CheckCircle
} from 'lucide-react';

const InteractiveContentDiscovery2027: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredContent, setFilteredContent] = useState([]);

  const categories = [
    { id: 'all', name: 'All Content', icon: Grid },
    { id: 'ai-2025', name: 'AI 2025', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Cpu },
    { id: 'automation', name: 'Automation', icon: Zap },
    { id: 'data', name: 'Data Analytics', icon: Database },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'roi', name: 'ROI Solutions', icon: Target },
    { id: 'case-studies', name: 'Case Studies', icon: BarChart3 }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Ultimate Breakthrough Guide",
      description: "Comprehensive guide to the latest AI breakthroughs and implementations",
      category: "ai-2025",
      type: "Guide",
      rating: 4.9,
      readTime: "15 min",
      trending: true,
      featured: true,
      tags: ["AI", "Breakthrough", "2025", "Implementation"],
      image: "/api/placeholder/400/250",
      author: "Zion Tech Group",
      publishDate: "2025-01-15"
    },
    {
      id: 2,
      title: "Quantum Computing Revolution 2025",
      description: "Explore the future of quantum computing and its business applications",
      category: "quantum",
      type: "Article",
      rating: 4.8,
      readTime: "12 min",
      trending: true,
      featured: false,
      tags: ["Quantum", "Computing", "Future", "Technology"],
      image: "/api/placeholder/400/250",
      author: "Dr. Quantum",
      publishDate: "2025-01-14"
    },
    {
      id: 3,
      title: "Automation Solutions ROI Calculator",
      description: "Calculate your potential ROI with our advanced automation solutions",
      category: "roi",
      type: "Tool",
      rating: 4.9,
      readTime: "5 min",
      trending: false,
      featured: true,
      tags: ["ROI", "Calculator", "Automation", "Business"],
      image: "/api/placeholder/400/250",
      author: "Zion Tech Group",
      publishDate: "2025-01-13"
    },
    {
      id: 4,
      title: "Enterprise Security Best Practices",
      description: "Comprehensive security guide for enterprise AI implementations",
      category: "security",
      type: "Guide",
      rating: 4.7,
      readTime: "20 min",
      trending: false,
      featured: false,
      tags: ["Security", "Enterprise", "AI", "Best Practices"],
      image: "/api/placeholder/400/250",
      author: "Security Team",
      publishDate: "2025-01-12"
    },
    {
      id: 5,
      title: "Data Analytics Transformation Case Study",
      description: "How TechCorp achieved 3,200% ROI with our data analytics solutions",
      category: "case-studies",
      type: "Case Study",
      rating: 4.9,
      readTime: "8 min",
      trending: true,
      featured: true,
      tags: ["Case Study", "Data Analytics", "ROI", "Success"],
      image: "/api/placeholder/400/250",
      author: "Case Study Team",
      publishDate: "2025-01-11"
    },
    {
      id: 6,
      title: "Neural Network Implementation Guide",
      description: "Step-by-step guide to implementing neural networks in your business",
      category: "ai-2025",
      type: "Tutorial",
      rating: 4.6,
      readTime: "25 min",
      trending: false,
      featured: false,
      tags: ["Neural Networks", "Implementation", "Tutorial", "AI"],
      image: "/api/placeholder/400/250",
      author: "AI Research Team",
      publishDate: "2025-01-10"
    }
  ];

  useEffect(() => {
    let filtered = contentItems;

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    setFilteredContent(filtered);
  }, [searchTerm, selectedCategory]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Guide': return 'bg-blue-500';
      case 'Article': return 'bg-green-500';
      case 'Tool': return 'bg-purple-500';
      case 'Case Study': return 'bg-orange-500';
      case 'Tutorial': return 'bg-pink-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Interactive Content Discovery 2027
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover, explore, and access the most comprehensive collection of AI content, 
            tools, and resources. Find exactly what you need to transform your business.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, guides, tools, and more..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid/List */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10"
            >
              {viewMode === 'grid' ? (
                <div className="p-6">
                  {/* Image */}
                  <div className="relative mb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                      <Brain className="w-16 h-16 text-blue-400" />
                    </div>
                    {item.featured && (
                      <div className="absolute top-3 left-3 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                        Featured
                      </div>
                    )}
                    {item.trending && (
                      <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(item.type)}`}>
                        {item.type}
                      </span>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">{item.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 text-sm line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {item.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {item.author}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/content/${item.id}`}
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-transform"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="p-6 flex gap-6">
                  {/* Image */}
                  <div className="w-32 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-8 h-8 text-blue-400" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(item.type)}`}>
                        {item.type}
                      </span>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">{item.rating}</span>
                      </div>
                      {item.featured && (
                        <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                          Featured
                        </span>
                      )}
                      {item.trending && (
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Trending
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 text-sm">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {item.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {item.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {item.publishDate}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Link
                      to={`/content/${item.id}`}
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-transform"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No content found</h3>
            <p className="text-gray-400">Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* Load More */}
        {filteredContent.length > 0 && (
          <div className="text-center mt-12">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
              Load More Content
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery2027;