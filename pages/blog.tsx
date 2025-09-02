import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, User, ArrowRight, Tag, Clock, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const Blog: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2025',
      excerpt: 'Explore the latest AI trends shaping the business landscape and how companies can leverage these technologies for competitive advantage.',
      author: 'Sarah Johnson',
      date: '2025-01-25',
      readTime: '8 min read',
      category: 'AI & Technology',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Barriers to Mainstream Adoption',
      excerpt: 'Understanding the current state of quantum computing and what it means for businesses looking to stay ahead of the curve.',
      author: 'Dr. Michael Chen',
      date: '2025-01-22',
      readTime: '12 min read',
      category: 'Quantum Computing',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 3,
      title: 'Micro SaaS Success Stories: Building Profitable Niche Applications',
      excerpt: 'Learn from successful micro SaaS entrepreneurs and discover the strategies that led to their breakthrough moments.',
      author: 'Alex Rodriguez',
      date: '2025-01-20',
      readTime: '6 min read',
      category: 'Micro SaaS',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'Blockchain Infrastructure: The Foundation of Web3 Innovation',
      excerpt: 'Dive deep into blockchain infrastructure solutions and how they enable the next generation of decentralized applications.',
      author: 'Emma Thompson',
      date: '2025-01-18',
      readTime: '10 min read',
      category: 'Blockchain',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 5,
      title: 'Edge Computing: Bringing Intelligence Closer to the Source',
      excerpt: 'Explore how edge computing is revolutionizing data processing and enabling real-time decision making across industries.',
      author: 'David Park',
      date: '2025-01-15',
      readTime: '7 min read',
      category: 'Edge Computing',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 6,
      title: 'Zero Trust Security: A New Paradigm for Enterprise Protection',
      excerpt: 'Understand the principles of zero trust security and how to implement this approach in your organization.',
      author: 'Lisa Wang',
      date: '2025-01-12',
      readTime: '9 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const categories = [
    'All Posts',
    'AI & Technology',
    'Quantum Computing',
    'Micro SaaS',
    'Blockchain',
    'Edge Computing',
    'Cybersecurity',
    'Industry Insights'
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and innovations in technology. Read our expert articles on AI, quantum computing, blockchain, and more."
      keywords="technology blog, AI insights, quantum computing, blockchain, edge computing, cybersecurity, tech trends"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Technology Insights & Innovation</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on the latest technology trends, 
              innovations, and best practices from our team of industry experts.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 
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
        {featuredPost && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <Tag className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-blue-600 font-medium">{featuredPost.category}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                    <div className="flex items-center text-gray-500 mb-6">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{featuredPost.date}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Featured Image</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our latest insights and expert analysis on emerging technologies and industry trends.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Article Image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Tag className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-blue-600 text-sm font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{post.date}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights and innovations in technology.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Blog;