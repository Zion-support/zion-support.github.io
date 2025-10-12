import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Discover how artificial intelligence is revolutionizing business operations and what trends to watch in 2024.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/api/placeholder/600/300',
      featured: true
    },
    {
      id: 2,
      title: '5G Implementation: Transforming Industries with Ultra-Fast Connectivity',
      excerpt: 'Learn how 5G technology is enabling new possibilities across various industries and what it means for your business.',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '7 min read',
      category: '5G & Connectivity',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Small and Medium Businesses',
      excerpt: 'Essential cybersecurity strategies to protect your business from evolving threats in the digital landscape.',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 4,
      title: 'Cloud Migration: A Step-by-Step Guide for Enterprise Success',
      excerpt: 'Comprehensive guide to migrating your business to the cloud with minimal disruption and maximum benefits.',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '8 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 5,
      title: 'Digital Transformation: How to Modernize Your Business Operations',
      excerpt: 'Key strategies for successfully transforming your business operations in the digital age.',
      author: 'Lisa Wang',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Digital Transformation',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 6,
      title: 'Micro SaaS Solutions: The Future of Business Software',
      excerpt: 'Explore how micro SaaS solutions are changing the way businesses approach software and automation.',
      author: 'Alex Thompson',
      date: '2024-01-03',
      readTime: '5 min read',
      category: 'Micro SaaS',
      image: '/api/placeholder/600/300',
      featured: false
    }
  ];

  const categories = ['All', 'AI & Technology', '5G & Connectivity', 'Cybersecurity', 'Cloud Computing', 'Digital Transformation', 'Micro SaaS'];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights and Industry News</title>
        <meta name="description" content="Stay updated with the latest technology trends, AI insights, and industry news from Zion Tech Group's expert team." />
        <meta name="keywords" content="technology blog, AI news, cybersecurity insights, cloud computing, 5G technology, digital transformation" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Stay updated with the latest technology trends and industry insights." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Technology Blog
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Stay updated with the latest technology trends, AI insights, and industry news from our expert team.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
              {blogPosts.filter(post => post.featured).map((post) => (
                <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center mb-4">
                        <Tag className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-blue-600 font-medium text-sm">{post.category}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-2" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{post.date}</span>
                        </div>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Tag className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-blue-600 font-medium text-sm">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest technology trends, AI insights, and industry news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
