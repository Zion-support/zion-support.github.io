import React, { useState, useMemo } from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Search, Filter, Calendar, Clock, ArrowRight, TrendingUp, BookOpen } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { latestInsights, type InsightArticle } from '../content/insights';

export default function Blog(): React.JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'date' | 'title' | 'readTime'>('date');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(latestInsights.map(insight => insight.category)));
    return ['All', ...cats];
  }, []);

  // Filter and sort insights
  const filteredInsights = useMemo(() => {
    let filtered = latestInsights.filter(insight => {
      const matchesSearch = insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           insight.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           insight.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || insight.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // Sort insights
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'readTime':
          return a.readMinutes - b.readMinutes;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  // Get featured articles (most recent)
  const featuredArticles = latestInsights.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Blog & Insights - Zion Tech Group | AI, Cloud & Tech Leadership</title>
        <meta
          name="description"
          content="Latest insights on AI, cloud computing, cybersecurity, and digital transformation. Expert analysis and practical guides from Zion Tech Group."
        />
        <meta
          name="keywords"
          content="AI blog, cloud computing insights, cybersecurity articles, tech leadership, digital transformation, MLOps, DevOps"
        />
        <meta property="og:title" content="Blog & Insights - Zion Tech Group" />
        <meta
          property="og:description"
          content="Latest insights on AI, cloud computing, and tech leadership"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog & Insights - Zion Tech Group" />
        <meta
          name="twitter:description"
          content="Latest insights on AI, cloud computing, and tech leadership"
        />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8 border border-zion-cyan/30">
              <BookOpen className="w-4 h-4 mr-2" />
              Latest from our experts
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent">
                Blog & Insights
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Expert insights on AI, cloud computing, cybersecurity, and digital transformation. 
              Stay ahead with practical guides and cutting-edge analysis.
            </p>
          </div>

          {/* Featured Articles */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white flex items-center">
                <TrendingUp className="w-8 h-8 mr-3 text-zion-cyan" />
                Featured Articles
              </h2>
              <Link to="/insights" className="text-zion-cyan hover:underline flex items-center">
                View all insights
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <article key={article.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs uppercase tracking-wider text-zion-cyan bg-zion-cyan/20 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-zion-slate-light flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readMinutes} min
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {article.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zion-slate flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                      <button className="text-zion-cyan hover:text-white transition-colors group">
                        Read more
                        <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or categories..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-64">
                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent appearance-none cursor-pointer"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-gray-800 text-white">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Sort */}
              <div className="lg:w-48">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'date' | 'title' | 'readTime')}
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="date" className="bg-gray-800 text-white">Latest First</option>
                  <option value="title" className="bg-gray-800 text-white">Alphabetical</option>
                  <option value="readTime" className="bg-gray-800 text-white">Reading Time</option>
                </select>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredInsights.map((article) => (
              <article key={article.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider text-zion-cyan bg-zion-cyan/20 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-zion-slate-light flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readMinutes} min
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed text-sm line-clamp-3">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zion-slate flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                    <button className="text-zion-cyan hover:text-white transition-colors text-sm group">
                      Read more
                      <ArrowRight className="w-3 h-3 ml-1 inline group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI, cloud computing, and cybersecurity delivered to your inbox. 
              Join 10,000+ tech leaders who trust our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-zion-blue-light px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}