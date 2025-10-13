import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import SEOOptimizer from '../components/SEOOptimizer';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', count: 12 },
    { id: 'ai', name: 'AI & Machine Learning', count: 5 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 3 },
    { id: 'cloud', name: 'Cloud Computing', count: 2 },
    { id: 'development', name: 'Development', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they\'re transforming business operations across industries.',
      content: 'Artificial Intelligence continues to revolutionize how businesses operate...',
      author: 'Dr. Sarah Chen',
      authorRole: 'AI Research Director',
      date: '2024-01-15',
      category: 'ai',
      readTime: '8 min read',
      image: '/blog/ai-future-2024.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Remote Work',
      excerpt: 'Essential security measures to protect your business in the era of remote work.',
      content: 'With remote work becoming the new norm, cybersecurity has never been more critical...',
      author: 'Michael Rodriguez',
      authorRole: 'Cybersecurity Expert',
      date: '2024-01-10',
      category: 'cybersecurity',
      readTime: '6 min read',
      image: '/blog/cybersecurity-remote.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Migration Strategies: A Complete Guide',
      excerpt: 'Step-by-step guide to successfully migrating your infrastructure to the cloud.',
      content: 'Cloud migration is a complex process that requires careful planning...',
      author: 'Emily Watson',
      authorRole: 'Cloud Solutions Architect',
      date: '2024-01-05',
      category: 'cloud',
      readTime: '10 min read',
      image: '/blog/cloud-migration.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Building Scalable Web Applications with Modern Frameworks',
      excerpt: 'Learn how to build web applications that can handle millions of users.',
      content: 'Scalability is crucial for modern web applications...',
      author: 'David Kim',
      authorRole: 'Senior Developer',
      date: '2024-01-01',
      category: 'development',
      readTime: '12 min read',
      image: '/blog/scalable-web-apps.jpg',
      featured: false
    }
  ];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights and News</title>
        <meta
          name="description"
          content="Stay updated with the latest technology trends, AI insights, cybersecurity tips, and cloud computing strategies from Zion Tech Group experts."
        />
        <meta
          name="keywords"
          content="technology blog, AI insights, cybersecurity tips, cloud computing, web development, tech news"
        />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>
      <SEOOptimizer
        title="Blog - Zion Tech Group | Technology Insights and News"
        description="Stay updated with the latest technology trends, AI insights, cybersecurity tips, and cloud computing strategies from Zion Tech Group experts."
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {" "}Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead with the latest technology trends, expert insights, and industry best practices from our team of specialists.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {filteredPosts.length > 0 && filteredPosts[0].featured && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured Article
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {filteredPosts[0].title}
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  {filteredPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-gray-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>{filteredPosts[0].author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(filteredPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <span>{filteredPosts[0].readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${filteredPosts[0].id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="mb-4">
                    <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{post.readTime}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest technology insights delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;