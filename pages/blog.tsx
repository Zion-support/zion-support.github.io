import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Search, Filter, Tag } from 'lucide-react';

const Blog: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends for 2025',
      excerpt: 'Explore the latest AI trends that are transforming businesses and how Zion Tech Group is leading the way in AI implementation.',
      author: 'Dr. Sarah Johnson',
      date: '2025-01-25',
      category: 'AI & Machine Learning',
      readTime: '5 min read',
      image: '/blog/ai-trends-2025.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration with real-world examples and expert insights.',
      author: 'Michael Chen',
      date: '2025-01-22',
      category: 'Cloud Computing',
      readTime: '8 min read',
      image: '/blog/cloud-migration-guide.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Building Scalable Microservices Architecture',
      excerpt: 'Discover how to design and implement microservices that can scale with your business growth and technical requirements.',
      author: 'Alex Rodriguez',
      date: '2025-01-20',
      category: 'Software Development',
      readTime: '6 min read',
      image: '/blog/microservices-architecture.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity in the Age of Remote Work',
      excerpt: 'Essential security measures and best practices for protecting your organization in today\'s distributed work environment.',
      author: 'Emily Watson',
      date: '2025-01-18',
      category: 'Cybersecurity',
      readTime: '7 min read',
      image: '/blog/cybersecurity-remote-work.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Digital Transformation: Success Stories from 2024',
      excerpt: 'Real-world case studies of successful digital transformations and the key factors that led to their success.',
      author: 'David Kim',
      date: '2025-01-15',
      category: 'Digital Transformation',
      readTime: '9 min read',
      image: '/blog/digital-transformation-cases.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: What You Need to Know',
      excerpt: 'Understanding edge computing technology and its impact on modern applications and infrastructure.',
      author: 'Lisa Thompson',
      date: '2025-01-12',
      category: 'Technology Trends',
      readTime: '4 min read',
      image: '/blog/edge-computing-rise.jpg',
      featured: false
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Cloud Computing',
    'Software Development',
    'Cybersecurity',
    'Digital Transformation',
    'Technology Trends'
  ];

  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and best practices in technology from Zion Tech Group's expert team."
      keywords="technology blog, AI insights, cloud computing, software development, cybersecurity, digital transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Technology Insights & News</h1>
              <p className="text-xl text-gray-200 mb-8">
                Stay ahead with the latest trends, insights, and best practices in technology from our expert team.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Categories Filter */}
              <div className="mb-12">
                <div className="flex flex-wrap gap-2 justify-center">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        index === 0
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Featured Post */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-6xl mb-4">🤖</div>
                          <p className="text-lg">AI Technology</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center mb-4">
                        <Tag className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-blue-600 font-medium">{blogPosts[0].category}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {blogPosts[0].author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(blogPosts[0].date).toLocaleDateString()}
                          </div>
                          <span>{blogPosts[0].readTime}</span>
                        </div>
                        <Link
                          href={`/blog/${blogPosts[0].id}`}
                          className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(1).map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-4xl mb-2">📝</div>
                        <p className="text-sm">Blog Post</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <Tag className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-blue-600 text-sm font-medium">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <Link
                          href={`/blog/${post.id}`}
                          className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Subscribe to our newsletter and never miss the latest insights, trends, and updates from the world of technology.
                </p>
                <div className="max-w-md mx-auto flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 placeholder-gray-500 focus:outline-none"
                  />
                  <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-r-lg hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Blog;