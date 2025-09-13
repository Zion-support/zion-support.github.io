import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Star, 
  Clock, 
  ArrowRight,
  Brain,
  Users,
  Zap,
  BarChart3,
  Shield,
  Globe
} from 'lucide-react';

const ComprehensiveContentDiscovery2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Content', icon: Search },
    { id: 'insights', name: 'AI Insights', icon: Brain },
    { id: 'success', name: 'Success Stories', icon: Users },
    { id: 'tech', name: 'Technology', icon: Zap },
    { id: 'trends', name: 'Trends', icon: TrendingUp },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'global', name: 'Global', icon: Globe }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Market Analysis: 400% Growth in Enterprise Adoption",
      category: "insights",
      type: "Article",
      readTime: "8 min read",
      rating: 4.9,
      views: "12.5K",
      published: "2 hours ago",
      excerpt: "Comprehensive analysis of AI adoption trends showing unprecedented growth in enterprise implementations...",
      tags: ["AI 2025", "Market Analysis", "Enterprise", "Growth"],
      featured: true
    },
    {
      id: 2,
      title: "TechCorp Global: 2,800% ROI with AI Quality Control",
      category: "success",
      type: "Case Study",
      readTime: "12 min read",
      rating: 5.0,
      views: "8.7K",
      published: "4 hours ago",
      excerpt: "How TechCorp Global achieved 95% reduction in defect rates using our AI-powered quality control system...",
      tags: ["Case Study", "Manufacturing", "ROI", "Quality Control"],
      featured: true
    },
    {
      id: 3,
      title: "Quantum Computing Breakthrough: 99.9% Accuracy Achieved",
      category: "tech",
      type: "Technical Deep Dive",
      readTime: "15 min read",
      rating: 4.8,
      views: "15.2K",
      published: "6 hours ago",
      excerpt: "Revolutionary error-corrected quantum computers achieve unprecedented accuracy in real-world applications...",
      tags: ["Quantum Computing", "Breakthrough", "Accuracy", "Technology"],
      featured: false
    },
    {
      id: 4,
      title: "AI Security Trends 2025: Zero-Trust Architecture Implementation",
      category: "security",
      type: "Security Report",
      readTime: "10 min read",
      rating: 4.7,
      views: "6.3K",
      published: "8 hours ago",
      excerpt: "Latest security trends and best practices for protecting AI systems from emerging threats...",
      tags: ["Security", "Zero-Trust", "AI Protection", "Trends"],
      featured: false
    },
    {
      id: 5,
      title: "Global AI Implementation: Success Stories from 50+ Countries",
      category: "global",
      type: "Global Report",
      readTime: "20 min read",
      rating: 4.9,
      views: "22.1K",
      published: "1 day ago",
      excerpt: "Comprehensive global analysis of AI implementation success stories across different regions and industries...",
      tags: ["Global", "Implementation", "Success Stories", "International"],
      featured: true
    },
    {
      id: 6,
      title: "Edge AI Processing: Real-time Decision Making at Scale",
      category: "tech",
      type: "Technology Guide",
      readTime: "14 min read",
      rating: 4.6,
      views: "9.8K",
      published: "1 day ago",
      excerpt: "Complete guide to implementing edge AI processing for real-time decision making and reduced latency...",
      tags: ["Edge AI", "Real-time", "Processing", "Guide"],
      featured: false
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredContent = contentItems.filter(item => item.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Amazing Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI insights, success stories, technology guides, and industry reports
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search content, tags, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/20 text-gray-300 hover:bg-white/30'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Content */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Featured Content</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredContent.map((item) => (
                <div key={item.id} className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm">{item.rating}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{item.readTime}</span>
                    <span>{item.views} views</span>
                    <span>{item.published}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`/content/${item.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-white transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content Grid */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">
            {selectedCategory === 'all' ? 'All Content' : categories.find(c => c.id === selectedCategory)?.name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((item) => (
              <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.type}
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm">{item.rating}</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readTime}
                  </span>
                  <span>{item.views} views</span>
                  <span>{item.published}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/content/${item.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-white transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
            Load More Content
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveContentDiscovery2025;