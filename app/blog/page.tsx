import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

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
      date: '2024-01-15',
      category: 'ai',
      readTime: '8 min read',
      image: '/images/blog/ai-trends-2024.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'Essential security measures every small business should implement to protect their data and systems.',
      content: 'Small businesses are increasingly targeted by cybercriminals...',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      category: 'cybersecurity',
      readTime: '6 min read',
      image: '/images/blog/cybersecurity-small-business.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Migration Strategies: A Complete Guide',
      excerpt: 'Learn the best practices for migrating your infrastructure to the cloud successfully.',
      content: 'Cloud migration is a complex process that requires careful planning...',
      author: 'Emily Watson',
      date: '2024-01-10',
      category: 'cloud',
      readTime: '10 min read',
      image: '/images/blog/cloud-migration-guide.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Building Scalable Web Applications with Modern Technologies',
      excerpt: 'Discover the latest technologies and frameworks for building robust, scalable web applications.',
      content: 'Modern web applications need to handle increasing user loads...',
      author: 'David Kim',
      date: '2024-01-08',
      category: 'development',
      readTime: '12 min read',
      image: '/images/blog/scalable-web-apps.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'AI-Powered Customer Insights: Transforming Business Intelligence',
      excerpt: 'How AI is revolutionizing customer analytics and helping businesses make data-driven decisions.',
      content: 'Customer insights are crucial for business success...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-05',
      category: 'ai',
      readTime: '7 min read',
      image: '/images/blog/ai-customer-insights.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Zero Trust Security Model: Implementation Guide',
      excerpt: 'Implementing zero trust security architecture to protect your organization from modern threats.',
      content: 'Zero trust security is becoming the standard for modern organizations...',
      author: 'Michael Rodriguez',
      date: '2024-01-03',
      category: 'cybersecurity',
      readTime: '9 min read',
      image: '/images/blog/zero-trust-security.jpg',
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
          content="Stay updated with the latest technology trends, AI insights, cybersecurity tips, and industry news from Zion Tech Group experts."
        />
        <meta
          name="keywords"
          content="technology blog, AI insights, cybersecurity tips, cloud computing, web development, tech news"
        />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Technology Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest technology trends, AI insights, cybersecurity tips, 
              and industry news from our expert team.
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
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                        : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {filteredPosts.find(post => post.featured) && (
          <section className="pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
              {(() => {
                const featuredPost = filteredPosts.find(post => post.featured);
                return featuredPost ? (
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                          <span className="text-cyan-400 text-sm">{featuredPost.category}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                        <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            {featuredPost.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {new Date(featuredPost.date).toLocaleDateString()}
                          </div>
                          <span>{featuredPost.readTime}</span>
                        </div>
                        <Link
                          to={`/blog/${featuredPost.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl h-64 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white font-bold text-xl">ZT</span>
                          </div>
                          <p className="text-gray-300">Featured Article</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null;
              })()}
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">
              {selectedCategory === 'all' ? 'All Articles' : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg h-48 flex items-center justify-center mb-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold">ZT</span>
                      </div>
                      <p className="text-gray-300 text-sm">Article Image</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-cyan-400 text-sm font-medium capitalize">{post.category}</span>
                    {post.featured && (
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-300">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and never miss the latest technology trends and insights.
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