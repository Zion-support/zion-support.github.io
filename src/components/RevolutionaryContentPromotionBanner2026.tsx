import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Users, Clock, Play, BookOpen, Zap, Brain, Target, Globe } from 'lucide-react';

const RevolutionaryContentPromotionBanner2026 = () => {
  const featuredArticles = [
    {
      title: "AI Consciousness Breakthrough 2026",
      category: "AI Research",
      readTime: "8 min read",
      views: "125K",
      rating: 4.9,
      featured: true
    },
    {
      title: "Quantum Business Automation Guide",
      category: "Business Automation",
      readTime: "12 min read",
      views: "98K",
      rating: 4.8,
      featured: true
    },
    {
      title: "Neural Interface Implementation",
      category: "Neural Technology",
      readTime: "15 min read",
      views: "156K",
      rating: 4.9,
      featured: true
    }
  ];

  const categories = [
    { name: "AI Consciousness", icon: Brain, count: 45, color: "from-blue-500 to-cyan-500" },
    { name: "Quantum Computing", icon: Zap, count: 32, color: "from-purple-500 to-pink-500" },
    { name: "Neural Technology", icon: Target, count: 28, color: "from-green-500 to-emerald-500" },
    { name: "Business Automation", icon: Globe, count: 67, color: "from-orange-500 to-red-500" }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/tech-grid.svg')] opacity-5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-cyan-500/10 rounded-full animate-pulse delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-3 mb-6">
            <Zap className="h-5 w-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Revolutionary Content Available Now</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Revolutionary Content
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Promotion 2026
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover groundbreaking insights, breakthrough technologies, and revolutionary innovations 
            that are reshaping the future of business and society.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Articles */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Featured Articles</h2>
            {featuredArticles.map((article, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    {article.featured && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-medium">{article.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {article.views} views
                    </span>
                  </div>
                  <Link 
                    to={`/article/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Categories Sidebar */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Content Categories</h2>
            {categories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4 mb-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{category.name}</h3>
                    <p className="text-gray-400 text-sm">{category.count} articles</p>
                  </div>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                    style={{ width: `${Math.min((category.count / 70) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 text-center border border-white/20">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Explore Revolutionary Content?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators, researchers, and business leaders who are already 
            discovering the future through our comprehensive content library.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              to="/ai-2026-ultimate-content-hub"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen className="h-5 w-5" />
              Explore Content Hub
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              to="/next-gen-innovation-showcase-2026"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              <Play className="h-5 w-5" />
              View Innovations
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-green-400" />
              <span>2M+ Monthly Readers</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-blue-400" />
              <span>500+ Published Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-purple-400" />
              <span>Updated Daily</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RevolutionaryContentPromotionBanner2026;
