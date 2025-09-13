import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Filter, TrendingUp, Clock, Users, Star, ExternalLink } from 'lucide-react';

const AI2025ContentHub: React.FC = () => {
  const contentCategories = [
    {
      id: 'neural-networks',
      title: 'Neural Networks',
      description: 'Advanced neural architecture and implementation guides',
      count: 32,
      color: 'from-blue-500 to-cyan-500',
      icon: '🧠'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Quantum-AI fusion and breakthrough technologies',
      count: 28,
      color: 'from-purple-500 to-pink-500',
      icon: '⚛️'
    },
    {
      id: 'automation',
      title: 'Automation',
      description: 'Autonomous systems and business automation',
      count: 45,
      color: 'from-green-500 to-emerald-500',
      icon: '🤖'
    },
    {
      id: 'content-creation',
      title: 'Content Creation',
      description: 'AI-powered content generation and optimization',
      count: 23,
      color: 'from-orange-500 to-red-500',
      icon: '✍️'
    },
    {
      id: 'business-strategy',
      title: 'Business Strategy',
      description: 'AI implementation and ROI optimization',
      count: 18,
      color: 'from-indigo-500 to-purple-500',
      icon: '📈'
    },
    {
      id: 'future-tech',
      title: 'Future Tech',
      description: 'Predictions and emerging technologies',
      count: 10,
      color: 'from-pink-500 to-rose-500',
      icon: '🔮'
    }
  ];

  const featuredContent = [
    {
      id: 1,
      title: "AI 2025 Neural Architecture Revolution",
      description: "Complete guide to implementing next-generation neural networks with 10,000x performance improvements.",
      category: "Neural Networks",
      readTime: "15 min read",
      views: "12.5k",
      rating: 4.9,
      featured: true,
      trending: true,
      href: "/blog/ai-2025-neural-architecture-revolution"
    },
    {
      id: 2,
      title: "Autonomous Business Systems 2025",
      description: "Complete blueprint for building self-managing business systems with 99.9% accuracy.",
      category: "Automation",
      readTime: "25 min read",
      views: "15.2k",
      rating: 4.9,
      featured: true,
      trending: true,
      href: "/case-studies/autonomous-business-systems-2025"
    },
    {
      id: 3,
      title: "Quantum-AI Fusion Implementation",
      description: "Breakthrough techniques for combining quantum computing with AI for unprecedented processing power.",
      category: "Quantum Computing",
      readTime: "20 min read",
      views: "8.7k",
      rating: 4.8,
      featured: true,
      trending: false,
      href: "/quantum-ai-fusion-implementation"
    },
    {
      id: 4,
      title: "AI-Powered Content Generation Mastery",
      description: "Advanced techniques for creating high-quality content at scale with AI assistance.",
      category: "Content Creation",
      readTime: "18 min read",
      views: "9.3k",
      rating: 4.7,
      featured: false,
      trending: false,
      href: "/ai-content-generation-mastery"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              AI 2025 Content Hub
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Discover the most comprehensive collection of AI breakthrough content, 
              implementation guides, and revolutionary insights.
            </p>
            
            {/* Search bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search content, guides, case studies..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/ai-2025-ultimate-breakthrough-revolution"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                Explore Breakthrough Content
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our content organized by technology and application areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentCategories.map((category) => (
              <Link
                key={category.id}
                to={`/content/${category.id}`}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-semibold">
                      {category.count} articles
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Content
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and impactful content pieces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredContent.map((content) => (
              <div 
                key={content.id} 
                className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {content.featured && (
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                          Featured
                        </span>
                      )}
                      {content.trending && (
                        <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold rounded-full flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 mr-1" />
                      {content.rating}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-gray-300 mb-6 line-clamp-3">
                    {content.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {content.readTime}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {content.views}
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">
                      {content.category}
                    </span>
                  </div>

                  <Link 
                    to={content.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get started with our AI solutions and join thousands of companies 
              achieving unprecedented results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
              <Link 
                to="/case-studies"
                className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold text-lg rounded-xl transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AI2025ContentHub;