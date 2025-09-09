

}

export default function KnowledgeBase() {
  const categories = [
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Comprehensive guides on AI development, ML models, and neural networks',
      articleCount: 45,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security best practices, threat detection, and protection strategies',
      articleCount: 38,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Cloud architecture, deployment, and management guides',
      articleCount: 32,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Data processing, visualization, and business intelligence',
      articleCount: 28,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Network,
      title: 'IoT & Edge Computing',
      description: 'Connected devices, edge processing, and IoT architecture',
      articleCount: 25,
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: Brain,
      title: 'Quantum Computing',
      description: 'Quantum algorithms, cryptography, and quantum applications',
      articleCount: 18,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const popularArticles = [
    {
      title: 'Getting Started with AI Development',
      excerpt: 'Learn the fundamentals of artificial intelligence and machine learning development',
      category: 'AI & Machine Learning',
      readTime: '8 min read',
      views: '2.4k',
      rating: 4.8,
      date: '2 days ago'
    },
    {
      title: 'Cybersecurity Best Practices for 2025',
      excerpt: 'Essential security measures to protect your systems and data',
      category: 'Cybersecurity',
      readTime: '12 min read',
      views: '1.9k',
      rating: 4.7,
      date: '1 week ago'
    },
    {
      title: 'Cloud Migration Strategy Guide',
      excerpt: 'Step-by-step approach to migrating your infrastructure to the cloud',
      category: 'Cloud Computing',
      readTime: '15 min read',
      views: '1.6k',
      rating: 4.6,
      date: '2 weeks ago'
    },
    {
      title: 'Data Visualization Techniques',
      excerpt: 'Create compelling charts and graphs to communicate insights effectively',
      category: 'Data Analytics',
      readTime: '10 min read',
      views: '1.3k',
      rating: 4.5,
      date: '3 weeks ago'
    }
  ];

  const recentUpdates = [
    {
      title: 'New AI Model Deployment Guide',
      type: 'Guide',
      date: 'Today',
      category: 'AI & Machine Learning'
    },
    {
      title: 'Updated Security Protocols',
      type: 'Update',
      date: 'Yesterday',
      category: 'Cybersecurity'
    },
    {
      title: 'Cloud Cost Optimization Tips',
      type: 'Article',
      date: '3 days ago',
      category: 'Cloud Computing'
    },
    {
      title: 'IoT Security Best Practices',
      type: 'Guide',
      date: '1 week ago',
      category: 'IoT & Edge Computing'
    }
  ];

  const searchSuggestions = [
    'AI development',
    'Cybersecurity',
    'Cloud migration',
    'Data analytics',
    'Machine learning',
    'Threat detection',
    'API security',
    'DevOps practices'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-green-900/20"></div>
        <div className="container-responsive relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Knowledge Base
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Find Answers to
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                {' '}Everything
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Access our comprehensive knowledge base with guides, tutorials, and 
              best practices for all your technology needs.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search knowledge base..."
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300">
                Search
              </button>
            </div>

            {/* Search Suggestions */}
            <div className="flex flex-wrap justify-center gap-2">
              {searchSuggestions.map((suggestion, index) => (
                <button
                  key={suggestion}
                  className="px-3 py-1 bg-slate-800/50 border border-slate-600/50 text-gray-300 hover:bg-slate-700/50 hover:border-slate-500/50 rounded-full text-sm transition-all duration-300"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our knowledge base organized by technology areas and topics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70 cursor-pointer"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} w-fit mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{category.articleCount} articles</span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Popular Articles
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Most read and highly-rated articles from our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{article.views}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{article.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{article.date}</span>
                  <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Updates Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Recent Updates
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Stay up to date with the latest additions and improvements to our knowledge base.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentUpdates.map((update, index) => (
              <motion.div
                key={update.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="mb-3">
                  <span className="inline-block px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full mb-2">
                    {update.type}
                  </span>
                  <h4 className="text-sm font-medium text-white mb-2 line-clamp-2">
                    {update.title}
                  </h4>
                </div>
                <div className="text-xs text-gray-400 space-y-1">
                  <div>{update.category}</div>
                  <div>{update.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Our support team is here to help. Get in touch for personalized assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Contact Support
                <MessageSquare className="w-5 h-5" />
              </Link>
              <Link
                to="/support"
                className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500/30 text-blue-300 hover:bg-blue-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                Support Center
                <Users className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
