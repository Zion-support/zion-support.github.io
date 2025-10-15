import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Sparkles,
  Brain,
  Cloud,
  Wifi,
  Shield,
  TrendingUp,
  Clock,
  Tag
} from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Analytics Platform',
      excerpt: 'Our new AI-powered analytics platform is transforming how businesses make data-driven decisions with real-time insights and predictive capabilities.',
      category: 'AI Services',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/api/placeholder/600/400',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-600',
      featured: true
    },
    {
      id: 2,
      title: '5G Implementation Success: Smart City Traffic Management',
      excerpt: 'We successfully implemented a comprehensive 5G network for MetroCity, resulting in 40% reduction in traffic congestion and improved emergency response times.',
      category: '5G Solutions',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '7 min read',
      image: '/api/placeholder/600/400',
      icon: <Wifi className="w-6 h-6" />,
      color: 'from-green-500 to-teal-600',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Framework Protects Financial Institution',
      excerpt: 'Our advanced cybersecurity implementation helped FinanceSecure Bank achieve 95% reduction in security incidents and full compliance with financial regulations.',
      category: 'Cybersecurity',
      author: 'David Rodriguez',
      date: '2024-01-08',
      readTime: '6 min read',
      image: '/api/placeholder/600/400',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-500 to-orange-600',
      featured: false
    },
    {
      id: 4,
      title: 'Cloud Migration Reduces Healthcare Costs by 60%',
      excerpt: 'HealthFirst Medical achieved significant cost savings and improved performance through our comprehensive cloud migration strategy.',
      category: 'IT Services',
      author: 'Emily Watson',
      date: '2024-01-05',
      readTime: '4 min read',
      image: '/api/placeholder/600/400',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600',
      featured: false
    },
    {
      id: 5,
      title: 'AI-Powered E-commerce Platform Increases Conversions by 300%',
      excerpt: 'TechCorp Inc. saw remarkable results with our AI-driven personalization and recommendation engine, transforming their online shopping experience.',
      category: 'AI Services',
      author: 'Alex Thompson',
      date: '2024-01-03',
      readTime: '8 min read',
      image: '/api/placeholder/600/400',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-600',
      featured: false
    },
    {
      id: 6,
      title: 'Micro SAAS Platform Reaches 500+ Active Users',
      excerpt: 'Our project management micro SAAS solution for StartupHub has achieved significant growth with 99.9% uptime and scalable architecture.',
      category: 'Micro SAAS',
      author: 'Lisa Park',
      date: '2024-01-01',
      readTime: '5 min read',
      image: '/api/placeholder/600/400',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-600',
      featured: false
    }
  ];

  const categories = ['All', 'AI Services', 'IT Services', '5G Solutions', 'Cybersecurity', 'Micro SAAS'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Latest News & Updates
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                News & Updates
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Stay updated with the latest news, insights, and success stories from Zion Tech Group.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Featured Article
              </span>
            </h2>
            
            {(() => {
              const featured = newsArticles.find(article => article.featured);
              if (!featured) return null;
              
              return (
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-500">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-r ${featured.color} rounded-xl flex items-center justify-center`}>
                          <div className="text-white">{featured.icon}</div>
                        </div>
                        <div>
                          <div className="text-cyan-400 text-sm font-semibold">{featured.category}</div>
                          <div className="text-gray-400 text-sm">Featured Article</div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                        {featured.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {featured.excerpt}
                      </p>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{featured.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(featured.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{featured.readTime}</span>
                        </div>
                      </div>
                      
                      <Link
                        to={`/news/${featured.id}`}
                        className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                    
                    <div className="lg:w-1/2">
                      <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                        <div className="text-cyan-400 text-6xl">{featured.icon}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Latest News
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with our latest news, insights, and industry updates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article => !article.featured).map((article) => (
              <div key={article.id} className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-6 hover:border-cyan-400/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${article.color} rounded-xl flex items-center justify-center`}>
                    <div className="text-white">{article.icon}</div>
                  </div>
                  <div className="text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
                    {article.category}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                  
                  <Link
                    to={`/news/${article.id}`}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center group/link"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl p-12 border border-cyan-500/20 backdrop-blur-sm max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Stay Updated
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest news, insights, and updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-cyan-500/20"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;