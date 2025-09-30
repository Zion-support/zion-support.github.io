import React from 'react';

const LatestArticlesShowcase: React.FC = () => {
  const displayArticles = [...featuredArticles.slice(0, 2), ...trendingArticles.slice(0, 1)];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 text-sm font-medium mb-8 border border-blue-500/20">
            <Sparkles className="w-4 h-4 mr-2" />
            📚 LATEST INSIGHTS & ARTICLES
            <Sparkles className="w-4 h-4 ml-2" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fresh Content
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Just Published
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay ahead of the curve with our latest articles on AI automation, quantum computing, 
            edge AI, and cutting-edge technology solutions. Written by our expert team.
          </p>

          {/* New Content Alert */}
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/30 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-purple-500" />
              <span className="text-lg font-bold text-purple-700">🔥 TRENDING NOW</span>
              <TrendingUp className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-gray-700 font-semibold mb-2">
              🚀 Just Published: Platform Engineering Scorecards 2026, AI Cybersecurity Automation, and Edge AI Blueprint 2026
            </p>
            <p className="text-gray-600 text-sm">
              Discover cutting-edge insights on golden paths and SLOs, autonomic incident response, and private real-time edge intelligence.
            </p>
          </div>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Article Image */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                {article.image && (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {article.newBadge && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      NEW
                    </span>
                  )}
                  {article.trending && (
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      TRENDING
                    </span>
                  )}
                  {article.featured && (
                    <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      FEATURED
                    </span>
                  )}
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Category */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs uppercase tracking-wider text-blue-600 font-medium">
                    {article.category}
                  </span>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <span>By {article.author}</span>
                </div>

                {/* CTA */}
                <Link
                  to={`/blog/${article.slug}`}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1 group"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Additional Articles Preview */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              More Fresh Content Available
            </h3>
            <p className="text-gray-600">
              Explore our complete library of articles, guides, and insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Latest Categories</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">AI Platform Engineering</span>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">3 new</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Quantum Computing</span>
                  <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full">2 new</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Edge AI</span>
                  <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">2 new</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Cybersecurity</span>
                  <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded-full">1 new</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Trending Topics</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">AI Automation</span>
                <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">MLOps</span>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">Edge Computing</span>
                <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">Zero Trust</span>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-3 py-1 rounded-full">Platform Engineering</span>
                <span className="bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full">Content AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with Latest Insights
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get exclusive access to our latest articles, industry insights, and expert analysis delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Read All Articles
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/insights"
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                View Insights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArticlesShowcase;