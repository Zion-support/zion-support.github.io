'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping enterprise operations and driving unprecedented business value.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      readTime: '5 min read',
      image: '/images/blog/ai-enterprise-2024.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing: The Next Frontier in Business Technology',
      excerpt: 'Discover how quantum computing is revolutionizing data processing and what it means for your business.',
      author: 'Michael Chen',
      date: '2024-01-10',
      category: 'Quantum Computing',
      readTime: '7 min read',
      image: '/images/blog/quantum-computing-business.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: Best Practices for 2024',
      excerpt: 'Learn essential cybersecurity strategies to protect your business in an AI-driven world.',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      category: 'Cybersecurity',
      readTime: '6 min read',
      image: '/images/blog/ai-cybersecurity-2024.jpg'
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies: A Complete Guide for Enterprises',
      excerpt: 'Comprehensive guide to migrating your infrastructure to the cloud with minimal disruption.',
      author: 'David Kim',
      date: '2023-12-28',
      category: 'Cloud Computing',
      readTime: '8 min read',
      image: '/images/blog/cloud-migration-guide.jpg'
    },
    {
      id: 5,
      title: 'The ROI of AI Implementation: Real-World Case Studies',
      excerpt: 'Analyze real case studies showing the measurable impact of AI implementation on business outcomes.',
      author: 'Dr. Sarah Johnson',
      date: '2023-12-20',
      category: 'Business Strategy',
      readTime: '6 min read',
      image: '/images/blog/ai-roi-case-studies.jpg'
    },
    {
      id: 6,
      title: 'Edge Computing: Bringing Intelligence Closer to Your Data',
      excerpt: 'Understand how edge computing is transforming data processing and enabling real-time AI applications.',
      author: 'Michael Chen',
      date: '2023-12-15',
      category: 'Edge Computing',
      readTime: '5 min read',
      image: '/images/blog/edge-computing-intelligence.jpg'
    }
  ];

  const categories = [
    'All',
    'AI & Machine Learning',
    'Quantum Computing',
    'Cybersecurity',
    'Cloud Computing',
    'Business Strategy',
    'Edge Computing'
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business innovation from our expert team." />
        <meta name="keywords" content="AI blog, technology insights, business innovation, machine learning, quantum computing" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tech Insights & Innovation
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Stay ahead with expert insights on AI, technology, and business transformation
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold mb-2">AI</div>
                    <div className="text-sm opacity-80">Featured Article</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{post.readTime}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and never miss the latest trends in AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;