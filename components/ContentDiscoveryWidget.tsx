import React, { useState } from 'react';
import { Search, Filter, ArrowRight, Star, Clock, Users, TrendingUp, Brain, Target, Award, Zap, Globe } from 'lucide-react';

const ContentDiscoveryWidget = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: "AI 2025-2026 Ultimate Showcase",
      description: "Revolutionary AI technologies and breakthroughs for 2025-2026",
      category: "showcase",
      type: "Technology Showcase",
      link: "/ai-2025-2026-ultimate-showcase",
      views: "15.2k",
      rating: 4.9,
      duration: "10 min read",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      trending: true
    },
    {
      id: 2,
      title: "Interactive Learning Hub",
      description: "Master AI through hands-on tutorials and comprehensive courses",
      category: "learning",
      type: "Learning Platform",
      link: "/ai-interactive-learning-hub",
      views: "8.7k",
      rating: 4.8,
      duration: "Interactive",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      trending: false
    },
    {
      id: 3,
      title: "AI Success Stories 2025",
      description: "Real case studies showing extraordinary business results",
      category: "case-studies",
      type: "Case Studies",
      link: "/ai-success-stories-2025",
      views: "12.3k",
      rating: 4.9,
      duration: "15 min read",
      icon: Award,
      color: "from-green-500 to-emerald-500",
      trending: true
    },
    {
      id: 4,
      title: "Quantum AI Revolution",
      description: "Explore the intersection of quantum computing and AI",
      category: "showcase",
      type: "Technology Deep Dive",
      link: "/quantum-ai-revolution",
      views: "6.1k",
      rating: 4.7,
      duration: "12 min read",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      trending: false
    },
    {
      id: 5,
      title: "AI Implementation Guide",
      description: "Step-by-step guide to implementing AI in your organization",
      category: "learning",
      type: "Implementation Guide",
      link: "/ai-implementation-guide",
      views: "9.8k",
      rating: 4.6,
      duration: "20 min read",
      icon: Globe,
      color: "from-indigo-500 to-purple-500",
      trending: false
    },
    {
      id: 6,
      title: "Enterprise AI Transformation",
      description: "How Fortune 500 companies are transforming with AI",
      category: "case-studies",
      type: "Enterprise Case Study",
      link: "/enterprise-ai-transformation",
      views: "7.4k",
      rating: 4.8,
      duration: "18 min read",
      icon: TrendingUp,
      color: "from-red-500 to-pink-500",
      trending: true
    }
  ];

  const categories = [
    { value: 'all', label: 'All Content', count: contentItems.length },
    { value: 'showcase', label: 'Technology Showcase', count: contentItems.filter(item => item.category === 'showcase').length },
    { value: 'learning', label: 'Learning & Tutorials', count: contentItems.filter(item => item.category === 'learning').length },
    { value: 'case-studies', label: 'Case Studies', count: contentItems.filter(item => item.category === 'case-studies').length }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Discover AI Content</h3>
        <p className="text-gray-300">Find the perfect content for your AI journey</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.value
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {filteredContent.map((item) => (
          <div key={item.id} className="group bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-sm text-purple-300 font-medium">{item.type}</p>
                  </div>
                  {item.trending && (
                    <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded-full text-xs font-semibold flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{item.views}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      <span>{item.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                  
                  <a
                    href={item.link}
                    className="inline-flex items-center px-3 py-1.5 bg-purple-500 text-white text-sm font-semibold rounded-lg hover:bg-purple-600 transition-all duration-300 group-hover:scale-105"
                  >
                    View
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredContent.length === 0 && (
        <div className="text-center py-8">
          <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-400">No content found matching your criteria</p>
        </div>
      )}

      <div className="mt-6 text-center">
        <a
          href="/content-showcase"
          className="inline-flex items-center px-6 py-3 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
        >
          View All Content
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default ContentDiscoveryWidget;