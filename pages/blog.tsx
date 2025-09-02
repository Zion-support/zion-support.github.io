import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { BookOpen, Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';
import Link from 'next/link';

const Blog: NextPage = () => {
  const blogPosts = [
    {
      id: 'ai-trends-2025',
      title: 'AI Trends to Watch in 2025: The Future of Technology',
      excerpt: 'Explore the most significant AI trends that will shape the technology landscape in 2025, from generative AI to autonomous systems.',
      author: 'Sarah Johnson',
      date: '2025-01-25',
      readTime: '8 min read',
      category: 'Artificial Intelligence',
      image: '/blog/ai-trends-2025.jpg',
      featured: true
    },
    {
      id: 'cloud-migration-guide',
      title: 'Complete Guide to Cloud Migration: Best Practices and Strategies',
      excerpt: 'Learn the essential steps and best practices for successfully migrating your business to the cloud.',
      author: 'Michael Chen',
      date: '2025-01-22',
      readTime: '12 min read',
      category: 'Cloud Computing',
      image: '/blog/cloud-migration.jpg',
      featured: false
    },
    {
      id: 'cybersecurity-essentials',
      title: 'Essential Cybersecurity Measures for Small Businesses',
      excerpt: 'Protect your business with these fundamental cybersecurity practices that every small business should implement.',
      author: 'David Rodriguez',
      date: '2025-01-20',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/blog/cybersecurity.jpg',
      featured: false
    },
    {
      id: 'micro-saas-success',
      title: 'Building a Successful Micro SaaS: Lessons from the Field',
      excerpt: 'Discover the key strategies and lessons learned from building and scaling micro SaaS applications.',
      author: 'Emily Watson',
      date: '2025-01-18',
      readTime: '10 min read',
      category: 'SaaS Development',
      image: '/blog/micro-saas.jpg',
      featured: false
    },
    {
      id: 'iot-implementation',
      title: 'IoT Implementation: From Concept to Production',
      excerpt: 'A comprehensive guide to implementing IoT solutions in your business, covering planning, development, and deployment.',
      author: 'Alex Thompson',
      date: '2025-01-15',
      readTime: '15 min read',
      category: 'IoT Solutions',
      image: '/blog/iot-implementation.jpg',
      featured: false
    },
    {
      id: 'data-analytics-insights',
      title: 'Turning Data into Business Insights: Analytics Best Practices',
      excerpt: 'Learn how to transform raw data into actionable business insights that drive decision-making and growth.',
      author: 'Lisa Park',
      date: '2025-01-12',
      readTime: '9 min read',
      category: 'Data Analytics',
      image: '/blog/data-analytics.jpg',
      featured: false
    }
  ];

  const categories = [
    'All Posts',
    'Artificial Intelligence',
    'Cloud Computing',
    'Cybersecurity',
    'SaaS Development',
    'IoT Solutions',
    'Data Analytics'
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and best practices in technology from Zion Tech Group's expert team."
      keywords="blog, technology insights, AI trends, cloud computing, cybersecurity, SaaS development, IoT, data analytics"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <BookOpen className="w-16 h-16 mx-auto text-blue-400 mb-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Insights, trends, and best practices from our team of technology experts.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2 rounded-lg mb-8">
                  <div className="bg-white text-gray-900 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Tag className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-blue-600 font-semibold">Featured Post</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuredPost.title}</h2>
                    <p className="text-xl text-gray-600 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      <Link 
                        href={`/blog/${featuredPost.id}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    category === 'All Posts'
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

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-white opacity-50" />
                    </div>
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
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                        <Link 
                          href={`/blog/${post.id}`}
                          className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
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
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter and never miss the latest technology insights and updates.
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
      </div>
    </MainLayout>
  );
};

export default Blog;