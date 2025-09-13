import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight, Star, Clock, TrendingUp, Users, Zap } from 'lucide-react';

const InteractiveContentDiscovery2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTrend, setSelectedTrend] = useState('all');
  const [filteredContent, setFilteredContent] = useState([]);

  const categories = [
    { id: 'all', name: 'All Content', icon: '📚' },
    { id: 'ai-breakthroughs', name: 'AI Breakthroughs', icon: '🧠' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'automation', name: 'Automation', icon: '🤖' },
    { id: 'case-studies', name: 'Case Studies', icon: '📊' },
    { id: 'tutorials', name: 'Tutorials', icon: '🎓' },
    { id: 'webinars', name: 'Webinars', icon: '🎥' },
    { id: 'tools', name: 'Tools', icon: '🛠️' }
  ];

  const trends = [
    { id: 'all', name: 'All Trends' },
    { id: 'trending', name: 'Trending Now' },
    { id: 'latest', name: 'Latest' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'featured', name: 'Featured' }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Neural Synthesis Breakthrough",
      description: "Revolutionary neural network architecture achieving 99.9% accuracy in complex decision-making processes.",
      category: "ai-breakthroughs",
      trend: "trending",
      type: "Article",
      readTime: "8 min read",
      views: "12.5K",
      rating: 4.9,
      tags: ["AI", "Neural Networks", "Machine Learning"],
      image: "/images/neural-synthesis.jpg",
      publishedDate: "2025-01-15",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Implementation Guide",
      description: "Complete guide to implementing quantum computing solutions for enterprise applications.",
      category: "quantum-computing",
      trend: "latest",
      type: "Guide",
      readTime: "15 min read",
      views: "8.2K",
      rating: 4.8,
      tags: ["Quantum Computing", "Implementation", "Enterprise"],
      image: "/images/quantum-guide.jpg",
      publishedDate: "2025-01-14",
      featured: false
    },
    {
      id: 3,
      title: "Automation Success: TechCorp Case Study",
      description: "How TechCorp achieved 2,800% ROI with our AI automation solutions.",
      category: "case-studies",
      trend: "popular",
      type: "Case Study",
      readTime: "12 min read",
      views: "15.3K",
      rating: 4.9,
      tags: ["Case Study", "ROI", "Automation"],
      image: "/images/techcorp-case.jpg",
      publishedDate: "2025-01-13",
      featured: true
    },
    {
      id: 4,
      title: "Advanced Automation Workshop",
      description: "Live workshop on implementing advanced automation solutions in your organization.",
      category: "webinars",
      trend: "trending",
      type: "Webinar",
      readTime: "60 min",
      views: "5.7K",
      rating: 4.7,
      tags: ["Workshop", "Automation", "Live"],
      image: "/images/automation-workshop.jpg",
      publishedDate: "2025-01-16",
      featured: false
    },
    {
      id: 5,
      title: "AI Tools Showcase 2025",
      description: "Comprehensive collection of cutting-edge AI tools and their applications.",
      category: "tools",
      trend: "featured",
      type: "Tool Collection",
      readTime: "20 min read",
      views: "22.1K",
      rating: 4.8,
      tags: ["Tools", "AI", "Applications"],
      image: "/images/ai-tools.jpg",
      publishedDate: "2025-01-12",
      featured: true
    },
    {
      id: 6,
      title: "Quantum Security Protocols Tutorial",
      description: "Step-by-step tutorial on implementing quantum security protocols for data protection.",
      category: "tutorials",
      trend: "latest",
      type: "Tutorial",
      readTime: "25 min read",
      views: "6.8K",
      rating: 4.6,
      tags: ["Tutorial", "Security", "Quantum"],
      image: "/images/quantum-security.jpg",
      publishedDate: "2025-01-11",
      featured: false
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

    if (selectedTrend !== 'all') {
      filtered = filtered.filter(item => item.trend === selectedTrend);
    }

    setFilteredContent(filtered);
  }, [searchTerm, selectedCategory, selectedTrend]);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'trending': return <TrendingUp className="w-4 h-4" />;
      case 'latest': return <Clock className="w-4 h-4" />;
      case 'popular': return <Users className="w-4 h-4" />;
      case 'featured': return <Star className="w-4 h-4" />;
      default: return <Zap className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our comprehensive library of AI breakthroughs, case studies, tutorials, and tools. 
            Find exactly what you need to transform your business.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search content, tags, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-12 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            {/* Trend Filter */}
            <div className="flex flex-wrap gap-2">
              {trends.map((trend) => (
                <button
                  key={trend.id}
                  onClick={() => setSelectedTrend(trend.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                    selectedTrend === trend.id
                      ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {getTrendIcon(trend.id)}
                  {trend.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div key={item.id} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="relative mb-4">
                <div className="w-full h-48 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
                {item.featured && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Featured
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.type}
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag, index) => (
                  <span key={index} className="bg-white/10 text-white px-2 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {item.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {item.views}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  {item.rating}
                </div>
              </div>

              <Link 
                to={`/content/${item.id}`}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Read More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No Content Found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search terms or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedTrend('all');
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

        <div className="text-center">
          <Link 
            to="/content-library"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center gap-3 mx-auto w-fit"
          >
            Explore Full Content Library
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery2025;