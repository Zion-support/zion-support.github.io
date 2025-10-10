'use client';
import React from 'react';
import { Calendar, User, ArrowRight, Search, Tag, Clock } from 'lucide-react';

const BlogPage: React.FC = () => {
  const featuredPost = {
    title: 'The Future of AI in Business: Trends and Predictions for 2024',
    excerpt: 'Discover how artificial intelligence is reshaping the business landscape and what trends to watch in the coming year.',
    author: 'Kleber Santos',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'AI & Technology',
    image: '/blog/ai-future-2024.jpg',
    slug: 'future-ai-business-2024'
  };

  const blogPosts = [
    {
      title: 'How to Implement AI Analytics in Your Business',
      excerpt: 'A step-by-step guide to integrating AI-powered analytics into your existing business processes.',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'AI & Analytics',
      image: '/blog/ai-analytics-implementation.jpg',
      slug: 'implement-ai-analytics'
    },
    {
      title: 'Cloud Migration Best Practices for Enterprise',
      excerpt: 'Learn the essential strategies for a successful cloud migration that minimizes risk and maximizes benefits.',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Cloud Computing',
      image: '/blog/cloud-migration-guide.jpg',
      slug: 'cloud-migration-best-practices'
    },
    {
      title: 'Cybersecurity Trends: Protecting Your Digital Assets',
      excerpt: 'Stay ahead of cyber threats with the latest security trends and best practices for 2024.',
      author: 'David Wilson',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Cybersecurity',
      image: '/blog/cybersecurity-trends-2024.jpg',
      slug: 'cybersecurity-trends-2024'
    },
    {
      title: 'Building Scalable Microservices Architecture',
      excerpt: 'A comprehensive guide to designing and implementing microservices that can grow with your business.',
      author: 'Lisa Rodriguez',
      date: '2024-01-05',
      readTime: '12 min read',
      category: 'Software Development',
      image: '/blog/microservices-architecture.jpg',
      slug: 'scalable-microservices-architecture'
    },
    {
      title: 'Data-Driven Decision Making: A Complete Guide',
      excerpt: 'Transform your business with data-driven insights and learn how to make better decisions faster.',
      author: 'James Thompson',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Data Analytics',
      image: '/blog/data-driven-decisions.jpg',
      slug: 'data-driven-decision-making'
    },
    {
      title: 'The Rise of Edge Computing in AI Applications',
      excerpt: 'Explore how edge computing is revolutionizing AI deployment and what it means for your business.',
      author: 'Emily Davis',
      date: '2024-01-01',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/blog/edge-computing-ai.jpg',
      slug: 'edge-computing-ai-applications'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Technology',
    'Cloud Computing',
    'Cybersecurity',
    'Data Analytics',
    'Software Development',
    'Business Strategy'
  ];

  const tags = [
    'Artificial Intelligence',
    'Machine Learning',
    'Cloud Migration',
    'Cybersecurity',
    'Data Analytics',
    'Microservices',
    'DevOps',
    'Digital Transformation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Stay updated with the latest insights, trends, and best practices in AI, IT, and digital transformation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Categories */}
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        index === 0
                          ? 'bg-cyan-500 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-cyan-500 hover:text-white transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Get the latest articles and insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-sm"
                  />
                  <button className="w-full cyber-button py-2 text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <div className="cyber-card p-8 mb-8 group hover:scale-105 transition-transform">
              <div className="flex items-center space-x-2 text-cyan-400 text-sm font-medium mb-4">
                <Star className="w-4 h-4" />
                <span>Featured Article</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                  {featuredPost.category}
                </span>
              </div>
              <a
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="cyber-card p-6 group hover:scale-105 transition-transform">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="cyber-button px-8 py-3 inline-flex items-center space-x-2 group">
                <span>Load More Articles</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;