import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, ExternalLink, FileText, TrendingUp, Globe, Users, Award } from 'lucide-react';

export default function News() {
  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group's AI Solutions Drive 40% Efficiency Gains for Manufacturing Clients",
      date: "2024-01-20",
      summary: "New case study reveals how our AI-powered predictive maintenance solutions are transforming manufacturing operations across multiple industries.",
      category: "Case Study",
      readTime: "5 min read",
      featured: true,
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Cybersecurity Threats Increase 300% in 2023 - How AI is Fighting Back",
      date: "2024-01-18",
      summary: "Our cybersecurity experts analyze the latest threat landscape and explain how AI-powered security solutions are becoming essential for business protection.",
      category: "Security",
      readTime: "7 min read",
      featured: true,
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "5G Implementation Guide: What Businesses Need to Know",
      date: "2024-01-15",
      summary: "Comprehensive guide covering 5G implementation strategies, benefits, and considerations for businesses looking to leverage next-generation connectivity.",
      category: "5G Technology",
      readTime: "8 min read",
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Micro SAAS Market Grows 150% as Businesses Seek Specialized Solutions",
      date: "2024-01-12",
      summary: "Industry analysis shows growing demand for specialized software solutions, with Zion Tech Group leading the market in AI-powered micro SAAS offerings.",
      category: "Industry News",
      readTime: "6 min read",
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Customer Success Story: How TechStart Inc. Scaled with AI Analytics",
      date: "2024-01-10",
      summary: "Learn how a growing startup used our AI analytics platform to scale from 10 to 1000+ employees while maintaining operational efficiency.",
      category: "Success Story",
      readTime: "4 min read",
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "The Future of Work: AI-Powered Productivity Tools",
      date: "2024-01-08",
      summary: "Exploring how AI is reshaping the workplace and the tools that are driving productivity gains for remote and hybrid teams.",
      category: "Future of Work",
      readTime: "9 min read",
      featured: false,
      image: "/api/placeholder/600/400"
    }
  ];

  const categories = ["All", "Case Study", "Security", "5G Technology", "Industry News", "Success Story", "Future of Work"];

  const featuredNews = newsArticles.filter(article => article.featured);

  const stats = [
    { number: "100+", label: "Articles Published", icon: <FileText className="w-6 h-6" /> },
    { number: "50K+", label: "Monthly Readers", icon: <Users className="w-6 h-6" /> },
    { number: "95%", label: "Reader Satisfaction", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Content Updates", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>News - Zion Tech Group | Latest Updates & Insights</title>
        <meta
          name="description"
          content="Stay informed with the latest news, insights, and updates from Zion Tech Group. Industry trends, case studies, and technology insights."
        />
        <meta
          name="keywords"
          content="news, updates, insights, AI news, technology trends, cybersecurity news, 5G technology, Zion Tech Group news"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Latest
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}News
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest insights, trends, and developments in AI, 
              cybersecurity, and technology from our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#featured-news"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Read Featured Articles
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/blog"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-cyan-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section id="featured-news" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Articles
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and impactful articles
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((article) => (
                <div
                  key={article.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative"
                >
                  <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl text-cyan-400">📰</div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(article.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <span className="text-sm text-gray-400">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {article.summary}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to={`/news/${article.id}`}
                        className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All News */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  All Articles
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Browse our complete collection of news articles and insights
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category === "All"
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="space-y-8">
              {newsArticles.map((article) => (
                <div
                  key={article.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          {article.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(article.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <span className="text-sm text-gray-400">{article.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to={`/news/${article.id}`}
                      className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Share
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest news, insights, and updates 
                delivered directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}