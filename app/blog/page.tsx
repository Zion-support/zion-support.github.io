'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital age.',
      author: 'Kleber Santos',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI',
      image: '🤖',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration without disrupting your business operations.',
      author: 'Tech Team',
      date: '2024-01-12',
      readTime: '8 min read',
      category: 'Cloud',
      image: '☁️',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity in 2024: Protecting Your Digital Assets',
      excerpt: 'Discover the latest cybersecurity threats and how to protect your business from evolving digital risks.',
      author: 'Security Team',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Security',
      image: '🔒',
      featured: false
    },
    {
      id: 4,
      title: 'Micro SAAS Solutions: The Future of Business Software',
      excerpt: 'How micro SAAS solutions are revolutionizing the way businesses approach software and automation.',
      author: 'Product Team',
      date: '2024-01-08',
      readTime: '4 min read',
      category: 'SAAS',
      image: '⚡',
      featured: false
    },
    {
      id: 5,
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'Master the art of data analytics and learn how to extract valuable insights from your business data.',
      author: 'Analytics Team',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Analytics',
      image: '📊',
      featured: false
    },
    {
      id: 6,
      title: 'Mobile App Development: Native vs Cross-Platform',
      excerpt: 'Compare native and cross-platform mobile development approaches to choose the best strategy for your project.',
      author: 'Mobile Team',
      date: '2024-01-03',
      readTime: '6 min read',
      category: 'Mobile',
      image: '📱',
      featured: false
    }
  ];

  const categories = ['All', 'AI', 'Cloud', 'Security', 'SAAS', 'Analytics', 'Mobile'];

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends. Expert articles from Zion Tech Group." />
        <meta name="keywords" content="AI blog, IT insights, technology trends, business automation, cloud computing" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Latest insights on AI and IT solutions" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-enhanced">
                Tech Blog
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest insights on AI, IT solutions, and technology trends 
                from our team of experts.
              </p>
            </div>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="cyber-card-enhanced holographic-card-enhanced p-8 border border-cyan-400/30">
              <div className="max-w-2xl mx-auto">
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        category === 'All' || searchQuery === '' || category.toLowerCase() === searchQuery.toLowerCase()
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                          : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                      }`}
                      onClick={() => setSearchQuery(category === 'All' ? '' : category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Featured Post */}
          {featuredPost && !searchQuery && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 neon-text-enhanced">Featured Article</h2>
              <div className="cyber-card-enhanced holographic-card-enhanced p-8 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="text-6xl text-center lg:text-left">{featuredPost.image}</div>
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-400 text-sm">Featured</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {featuredPost.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Blog Posts Grid */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8 neon-text-enhanced">
              {searchQuery ? `Search Results (${filteredPosts.length})` : 'Latest Articles'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchQuery ? filteredPosts : regularPosts).map((post) => (
                <article
                  key={post.id}
                  className="cyber-card-enhanced holographic-card-enhanced p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-4 text-center">{post.image}</div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <button className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mt-16">
            <div className="cyber-card-enhanced holographic-card-enhanced p-8 border border-cyan-400/30 text-center">
              <h2 className="text-2xl font-bold text-white mb-4 neon-text-enhanced">
                Stay Updated
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest AI and IT insights delivered to your inbox.
              </p>
              <div className="flex max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-r-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BlogPage;