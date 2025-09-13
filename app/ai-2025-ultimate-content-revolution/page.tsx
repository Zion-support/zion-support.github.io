import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import { ArrowRight, Star, Clock, Users, TrendingUp, ExternalLink, Download, Share2 } from 'lucide-react';

const AI2025UltimateContentRevolutionPage: React.FC = () => {
  const contentCategories = [
    {
      id: 1,
      title: "AI Breakthroughs & Research",
      description: "Latest advances in artificial intelligence, machine learning, and neural networks",
      count: 150,
      color: "from-blue-500 to-purple-500",
      icon: "🧠"
    },
    {
      id: 2,
      title: "Quantum Computing Revolution",
      description: "Quantum algorithms, quantum supremacy, and quantum-enhanced applications",
      count: 75,
      color: "from-purple-500 to-pink-500",
      icon: "⚛️"
    },
    {
      id: 3,
      title: "Autonomous Systems",
      description: "Self-managing AI systems, robotics, and intelligent automation",
      count: 120,
      color: "from-green-500 to-teal-500",
      icon: "🤖"
    },
    {
      id: 4,
      title: "Edge Computing & IoT",
      description: "Real-time processing, edge AI, and Internet of Things innovations",
      count: 90,
      color: "from-orange-500 to-red-500",
      icon: "🌐"
    },
    {
      id: 5,
      title: "Ethics & Governance",
      description: "Responsible AI, bias mitigation, and ethical technology development",
      count: 60,
      color: "from-indigo-500 to-blue-500",
      icon: "⚖️"
    },
    {
      id: 6,
      title: "Future Predictions",
      description: "AI trends, technology forecasts, and future innovation predictions",
      count: 85,
      color: "from-cyan-500 to-blue-500",
      icon: "🔮"
    }
  ];

  const featuredContent = [
    {
      id: 1,
      title: "Neural Synthesis: The Next Frontier of AI",
      description: "Explore how advanced neural networks are achieving human-level understanding and generation capabilities.",
      author: "Dr. Sarah Chen",
      readTime: "25 min",
      views: "45.2K",
      rating: 4.9,
      category: "AI Research",
      featured: true,
      image: "/api/placeholder/600/300"
    },
    {
      id: 2,
      title: "Quantum Supremacy in Business Applications",
      description: "How quantum computing is solving previously impossible optimization problems in real-world scenarios.",
      author: "Prof. Michael Rodriguez",
      readTime: "30 min",
      views: "38.7K",
      rating: 4.8,
      category: "Quantum Computing",
      featured: true,
      image: "/api/placeholder/600/300"
    },
    {
      id: 3,
      title: "Autonomous AI Systems: Implementation Guide",
      description: "Complete guide to building self-managing AI systems that adapt and optimize without human intervention.",
      author: "Alex Thompson",
      readTime: "35 min",
      views: "52.1K",
      rating: 4.9,
      category: "Automation",
      featured: true,
      image: "/api/placeholder/600/300"
    }
  ];

  const latestContent = [
    {
      id: 1,
      title: "Edge AI: Deploying Models at Scale",
      description: "Strategies for deploying AI models at the edge for maximum performance and minimal latency.",
      readTime: "20 min",
      views: "12.3K",
      rating: 4.7,
      category: "Edge Computing",
      published: "2 hours ago"
    },
    {
      id: 2,
      title: "AI Ethics Framework 2025",
      description: "Comprehensive framework for developing ethical AI systems in enterprise environments.",
      readTime: "18 min",
      views: "8.9K",
      rating: 4.8,
      category: "Ethics",
      published: "5 hours ago"
    },
    {
      id: 3,
      title: "Multimodal AI: Beyond Text and Images",
      description: "Building AI systems that understand and process multiple data types simultaneously.",
      readTime: "28 min",
      views: "15.6K",
      rating: 4.9,
      category: "AI Research",
      published: "1 day ago"
    },
    {
      id: 4,
      title: "Quantum Machine Learning Algorithms",
      description: "Advanced quantum algorithms for machine learning and optimization problems.",
      readTime: "32 min",
      views: "9.4K",
      rating: 4.6,
      category: "Quantum Computing",
      published: "2 days ago"
    }
  ];

  return (
    <ErrorBoundary>
      <SEO 
        title="AI 2025 Ultimate Content Revolution - Zion Tech Group"
        description="Discover the most comprehensive collection of AI breakthroughs, quantum computing innovations, and revolutionary technology solutions for 2025 and beyond."
        keywords="AI 2025, quantum computing, neural synthesis, autonomous systems, edge computing, AI ethics, future predictions"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI 2025 Ultimate Content Revolution
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                The most comprehensive collection of AI insights, breakthrough technologies, 
                and revolutionary solutions that will transform your business in 2025 and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="#content" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Explore Content
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/newsletter" 
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Subscribe for Updates
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content Categories */}
        <section id="content" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Content Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of AI and technology content organized by category
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentCategories.map((category) => (
                <div key={category.id} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <div className={`h-32 bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <span className="text-6xl">{category.icon}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-semibold">
                        {category.count} Articles
                      </span>
                      <Link 
                        to={`/category/${category.id}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Content
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and impactful articles that are shaping the future of AI and technology
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredContent.map((content) => (
                <div key={content.id} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-500/80 text-white text-sm font-medium rounded-full">
                        {content.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center space-x-2 text-white/80">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{content.readTime}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {content.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {content.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{content.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span>{content.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">By {content.author}</span>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Latest Content
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay up-to-date with the newest articles and insights from our expert team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {latestContent.map((content) => (
                <div key={content.id} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm font-medium rounded-full">
                      {content.category}
                    </span>
                    <span className="text-sm text-gray-400">{content.published}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {content.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{content.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{content.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{content.rating}</span>
                      </div>
                    </div>
                    <Link 
                      to={`/article/${content.id}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/case-studies" 
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default AI2025UltimateContentRevolutionPage;