import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';
import Link from 'next/link';

const Blog: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2025',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate, from automation to predictive analytics.',
      author: 'Sarah Johnson',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: '/blog/ai-business-future.jpg',
      href: '/blog/ai-business-trends-2025'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration that minimize risks and maximize benefits.',
      author: 'Michael Chen',
      date: '2025-01-12',
      readTime: '12 min read',
      category: 'Cloud Computing',
      image: '/blog/cloud-migration-guide.jpg',
      href: '/blog/cloud-migration-best-practices'
    },
    {
      id: 3,
      title: 'Microservices Architecture: When and How to Implement',
      excerpt: 'Discover the benefits and challenges of microservices architecture and when it makes sense for your organization.',
      author: 'David Rodriguez',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'Software Architecture',
      image: '/blog/microservices-architecture.jpg',
      href: '/blog/microservices-architecture-guide'
    },
    {
      id: 4,
      title: 'Cybersecurity in 2025: Emerging Threats and Defense Strategies',
      excerpt: 'Stay ahead of the latest cybersecurity threats and learn about the most effective defense strategies for modern businesses.',
      author: 'Lisa Wang',
      date: '2025-01-08',
      readTime: '9 min read',
      category: 'Cybersecurity',
      image: '/blog/cybersecurity-2025.jpg',
      href: '/blog/cybersecurity-emerging-threats-2025'
    },
    {
      id: 5,
      title: 'Building Scalable Mobile Applications: Best Practices',
      excerpt: 'Learn the key principles and technologies for creating mobile apps that can scale with your business growth.',
      author: 'Alex Thompson',
      date: '2025-01-05',
      readTime: '7 min read',
      category: 'Mobile Development',
      image: '/blog/scalable-mobile-apps.jpg',
      href: '/blog/scalable-mobile-applications'
    },
    {
      id: 6,
      title: 'Data Analytics and Business Intelligence: Driving Decisions',
      excerpt: 'Explore how modern data analytics and BI tools are transforming business decision-making processes.',
      author: 'Emma Davis',
      date: '2025-01-03',
      readTime: '11 min read',
      category: 'Data Analytics',
      image: '/blog/data-analytics-bi.jpg',
      href: '/blog/data-analytics-business-intelligence'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Cloud Computing',
    'Software Architecture',
    'Cybersecurity',
    'Mobile Development',
    'Data Analytics'
  ];

  const featuredPost = blogPosts[0];

  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and best practices in technology from our expert team at Zion Tech Group."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Stay updated with the latest insights, trends, and best practices in technology from our expert team.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Featured Image</h3>
                    <p className="text-blue-100">AI Business Trends</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <Tag className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-blue-600 font-semibold">{featuredPost.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    <span className="text-sm">{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{featuredPost.readTime}</span>
                  </div>
                </div>
                <Link
                  href={featuredPost.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h4 className="text-lg font-bold mb-1">Blog Image</h4>
                    <p className="text-blue-100 text-sm">{post.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Tag className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-blue-600 font-semibold text-sm">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link
                    href={post.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
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
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest technology insights, trends, and best practices delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;