import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, Clock, Search } from 'lucide-react';
'use client';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends shaping the business landscape and how companies can leverage these technologies for competitive advantage.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: '/images/blog/ai-future.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Security Best Practices: Protecting Your Digital Assets',
      excerpt: 'Learn essential cloud security strategies to safeguard your data and infrastructure in an increasingly connected world.',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/images/blog/cloud-security.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Building Scalable Web Applications with Modern Technologies',
      excerpt: 'Discover the latest frameworks and tools for creating robust, scalable web applications that can handle millions of users.',
      author: 'Alex Thompson',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Web Development',
      image: '/images/blog/web-development.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'DevOps Transformation: From Chaos to Continuous Delivery',
      excerpt: 'How to successfully implement DevOps practices to improve your development workflow and deployment processes.',
      author: 'Jennifer Liu',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'DevOps',
      image: '/images/blog/devops.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Data Analytics: Turning Raw Data into Business Insights',
      excerpt: 'Learn how to extract meaningful insights from your data using advanced analytics techniques and visualization tools.',
      author: 'David Park',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Data Analytics',
      image: '/images/blog/data-analytics.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: Bringing Processing Closer to Users',
      excerpt: 'Explore how edge computing is revolutionizing the way we process data and deliver services to end users.',
      author: 'Maria Garcia',
      date: '2024-01-03',
      readTime: '5 min read',
      category: 'Infrastructure',
      image: '/images/blog/edge-computing.jpg',
      featured: false
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Cybersecurity', 'Web Development', 'DevOps', 'Data Analytics', 'Infrastructure'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Insights, tutorials, and industry news from Zion Tech Group. Stay updated with the latest in AI, IT, and technology." />
        <meta name="keywords" content="blog, AI insights, IT news, technology trends, tutorials, industry analysis" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Tech Blog
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Insights, tutorials, and industry news from our team of experts. 
            Stay ahead of the curve with the latest in AI, IT, and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Subscribe to Updates
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-lg font-medium transition-all duration-300 bg-white/10 text-gray-300 hover:bg-white/20"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{post.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-400">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
                <div className="h-64 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Tag className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-400">Featured Image</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <Tag className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-400 text-sm">Article Image</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-semibold rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-400 text-sm">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                
                <Link
                  to={`/blog/${post.id}`}
                  className="mt-4 inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter and never miss the latest insights, tutorials, and industry news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;