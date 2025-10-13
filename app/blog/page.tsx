import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Search, Filter } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const BlogPage = () => {
  const categories = [
    { name: 'All', count: 12, active: true },
    { name: 'AI & Machine Learning', count: 4, active: false },
    { name: 'Web Development', count: 3, active: false },
    { name: 'Cybersecurity', count: 2, active: false },
    { name: 'Cloud Computing', count: 2, active: false },
    { name: 'Business', count: 1, active: false }
  ];

  const featuredPost = {
    id: 1,
    title: 'The Future of AI in Business: How Machine Learning is Transforming Industries',
    excerpt: 'Discover how artificial intelligence and machine learning are revolutionizing business operations, from predictive analytics to automated decision-making processes.',
    author: 'Dr. Sarah Chen',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'AI & Machine Learning',
    image: '/api/placeholder/800/400',
    featured: true
  };

  const posts = [
    {
      id: 2,
      title: 'Building Scalable Web Applications with Modern JavaScript Frameworks',
      excerpt: 'Learn the best practices for creating scalable, maintainable web applications using React, Vue, and Angular.',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Web Development',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Small and Medium Businesses',
      excerpt: 'Essential security measures every business should implement to protect against cyber threats and data breaches.',
      author: 'Emily Watson',
      date: '2024-01-10',
      readTime: '5 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies: Moving Your Business to the Cloud',
      excerpt: 'A comprehensive guide to planning and executing a successful cloud migration for your organization.',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'The Role of Data Analytics in Business Decision Making',
      excerpt: 'How data-driven insights are helping businesses make better decisions and improve their bottom line.',
      author: 'Lisa Johnson',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Business',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Implementing DevOps Practices for Faster Software Delivery',
      excerpt: 'Learn how DevOps methodologies can accelerate your software development and deployment processes.',
      author: 'Alex Thompson',
      date: '2024-01-03',
      readTime: '6 min read',
      category: 'Web Development',
      image: '/api/placeholder/400/250'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights & Industry News</title>
        <meta
          name="description"
          content="Stay updated with the latest technology trends, AI insights, web development tips, and cybersecurity best practices from Zion Tech Group experts."
        />
        <meta
          name="keywords"
          content="technology blog, AI insights, web development, cybersecurity, cloud computing, business technology, tech news"
        />
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
              Stay ahead of the curve with insights from our technology experts. 
              Discover the latest trends in AI, web development, cybersecurity, and more.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      category.active
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
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
        {featuredPost && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="ml-3 text-cyan-400 text-sm font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
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
                      <Link
                        to={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Featured Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium mt-4 group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest technology insights and industry news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;