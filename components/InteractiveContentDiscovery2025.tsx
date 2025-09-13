import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Filter, TrendingUp, Clock, Star, Users, Zap, Brain, Target } from 'lucide-react';

const InteractiveContentDiscovery2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: Brain, count: 1250 },
    { id: 'ai-breakthroughs', name: 'AI Breakthroughs', icon: Zap, count: 320 },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Target, count: 180 },
    { id: 'automation', name: 'Automation', icon: TrendingUp, count: 250 },
    { id: 'success-stories', name: 'Success Stories', icon: Star, count: 200 },
    { id: 'tutorials', name: 'Tutorials', icon: Clock, count: 300 }
  ];

  const trendingContent = [
    {
      id: 1,
      title: "Revolutionary Neural Architecture 2025: 10,000x Faster Processing",
      category: "AI Breakthroughs",
      readTime: "8 min read",
      views: "2.3M",
      likes: "45K",
      trending: true,
      image: "/images/neural-architecture-trending.jpg",
      tags: ["Neural Networks", "Quantum AI", "Breakthrough", "2025"],
      publishedDate: "2025-01-15",
      author: "Dr. Sarah Chen"
    },
    {
      id: 2,
      title: "Quantum Supremacy Achieved: Real-World Applications",
      category: "Quantum Computing",
      readTime: "12 min read",
      views: "4.2M",
      likes: "89K",
      trending: true,
      image: "/images/quantum-supremacy-trending.jpg",
      tags: ["Quantum Supremacy", "Optimization", "Real-World", "2025"],
      publishedDate: "2025-01-15",
      author: "Dr. Quantum Chen"
    },
    {
      id: 3,
      title: "Intelligent Process Automation: 95% Cost Reduction",
      category: "Automation",
      readTime: "10 min read",
      views: "3.2M",
      likes: "67K",
      trending: true,
      image: "/images/process-automation-trending.jpg",
      tags: ["Process Automation", "AI Learning", "Cost Reduction", "2025"],
      publishedDate: "2025-01-15",
      author: "Dr. Sarah Automation"
    },
    {
      id: 4,
      title: "Fortune 500 Saves $2.3B with AI Automation",
      category: "Success Stories",
      readTime: "8 min read",
      views: "5.2M",
      likes: "124K",
      trending: true,
      image: "/images/manufacturing-success-trending.jpg",
      tags: ["Manufacturing", "Cost Savings", "AI Automation", "Fortune 500"],
      publishedDate: "2025-01-15",
      author: "Dr. Sarah Success"
    },
    {
      id: 5,
      title: "Complete AI Implementation Guide 2025",
      category: "Tutorials",
      readTime: "15 min read",
      views: "1.8M",
      likes: "38K",
      trending: true,
      image: "/images/ai-implementation-guide-trending.jpg",
      tags: ["Implementation", "Guide", "AI Setup", "2025"],
      publishedDate: "2025-01-14",
      author: "Marcus Rodriguez"
    },
    {
      id: 6,
      title: "Error-Corrected Quantum Computers Deployed",
      category: "Quantum Computing",
      readTime: "15 min read",
      views: "3.8M",
      likes: "76K",
      trending: true,
      image: "/images/error-corrected-quantum-trending.jpg",
      tags: ["Error Correction", "Fault Tolerance", "Commercial", "2025"],
      publishedDate: "2025-01-14",
      author: "Dr. Elena Quantum"
    }
  ];

  const recommendedContent = [
    {
      id: 7,
      title: "AI-Powered Predictive Maintenance: 99.7% Accuracy",
      category: "Automation",
      readTime: "11 min read",
      views: "2.1M",
      likes: "43K",
      image: "/images/predictive-maintenance-recommended.jpg",
      tags: ["Predictive Maintenance", "Equipment AI", "Downtime Reduction", "2025"],
      publishedDate: "2025-01-12",
      author: "James Wilson",
      reason: "Based on your interest in automation"
    },
    {
      id: 8,
      title: "Natural Language Understanding Revolution",
      category: "AI Breakthroughs",
      readTime: "9 min read",
      views: "2.7M",
      likes: "52K",
      image: "/images/nlp-revolution-recommended.jpg",
      tags: ["NLP", "Language Understanding", "AI Communication", "2025"],
      publishedDate: "2025-01-11",
      author: "Dr. Aisha Patel",
      reason: "Popular in AI breakthroughs"
    },
    {
      id: 9,
      title: "Healthcare Network Reduces Wait Times by 85%",
      category: "Success Stories",
      readTime: "10 min read",
      views: "4.8M",
      likes: "98K",
      image: "/images/healthcare-success-recommended.jpg",
      tags: ["Healthcare", "Patient Care", "AI Optimization", "Wait Times"],
      publishedDate: "2025-01-14",
      author: "Dr. Marcus Health",
      reason: "Similar to your reading history"
    }
  ];

  const filteredContent = trendingContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-600 text-white text-sm font-semibold mb-6">
            <Search className="w-4 h-4 mr-2" />
            Interactive Content Discovery 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Amazing Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our vast library of AI breakthroughs, quantum computing solutions, 
            automation guides, and success stories with intelligent content discovery.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search content, tags, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              {/* Category Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {contentCategories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-gray-800">
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Filter */}
              <div className="lg:w-48">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="trending" className="bg-gray-800">Trending</option>
                  <option value="latest" className="bg-gray-800">Latest</option>
                  <option value="popular" className="bg-gray-800">Most Popular</option>
                  <option value="recommended" className="bg-gray-800">Recommended</option>
                </select>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {contentCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-indigo-500 to-pink-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Trending Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <TrendingUp className="w-6 h-6 mr-3 text-yellow-400" />
            Trending Now
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((item) => (
              <div key={item.id} className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-pink-600 text-white text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                  {item.trending && (
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center px-2 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">{item.readTime}</span>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <span className="text-sm font-semibold">{item.likes}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 mb-3 text-sm">
                    By {item.author} • {item.publishedDate}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-white/10 text-white text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-gray-400 text-xs">
                      {item.views} views
                    </div>
                    <Link 
                      to={`/content/${item.id}`}
                      className="inline-flex items-center text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Star className="w-6 h-6 mr-3 text-purple-400" />
            Recommended for You
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedContent.map((item) => (
              <div key={item.id} className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">{item.readTime}</span>
                    <div className="text-purple-400 text-xs font-semibold">
                      {item.reason}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 mb-3 text-sm">
                    By {item.author} • {item.publishedDate}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-white/10 text-white text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-gray-400 text-xs">
                      {item.views} views
                    </div>
                    <Link 
                      to={`/content/${item.id}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600/20 to-pink-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our AI-powered content discovery learns from your preferences to surface 
              the most relevant content. Try different search terms or explore our categories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/content-library"
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-pink-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-pink-700 transition-all duration-300"
              >
                Browse All Content
              </Link>
              <Link 
                to="/content-request"
                className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Request Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery2025;