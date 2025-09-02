import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: NextPage = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'AI & Technology',
      readTime: '5 min read',
      image: '/blog/ai-future-business.jpg',
      slug: 'future-ai-business-2024'
    },
    {
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successfully migrating your business to the cloud.',
      author: 'Michael Chen',
      date: '2024-01-10',
      category: 'Cloud Computing',
      readTime: '8 min read',
      image: '/blog/cloud-migration-guide.jpg',
      slug: 'cloud-migration-best-practices'
    },
    {
      title: 'Micro SaaS: Building Profitable Niche Software Solutions',
      excerpt: 'Discover how to create and scale micro SaaS products that solve specific business problems.',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      category: 'SaaS Development',
      readTime: '6 min read',
      image: '/blog/micro-saas-building.jpg',
      slug: 'micro-saas-profitable-solutions'
    },
    {
      title: 'Cybersecurity Essentials for Small Businesses',
      excerpt: 'Protect your business with these essential cybersecurity measures and best practices.',
      author: 'David Kim',
      date: '2024-01-01',
      category: 'Cybersecurity',
      readTime: '7 min read',
      image: '/blog/cybersecurity-small-business.jpg',
      slug: 'cybersecurity-essentials-small-business'
    },
    {
      title: 'Digital Transformation: Where to Start',
      excerpt: 'A practical guide to beginning your digital transformation journey with the right strategy.',
      author: 'Lisa Thompson',
      date: '2023-12-28',
      category: 'Digital Transformation',
      readTime: '9 min read',
      image: '/blog/digital-transformation-start.jpg',
      slug: 'digital-transformation-where-to-start'
    },
    {
      title: 'The ROI of AI Implementation: Measuring Success',
      excerpt: 'Learn how to measure and maximize the return on investment from your AI initiatives.',
      author: 'Robert Martinez',
      date: '2023-12-20',
      category: 'AI & Analytics',
      readTime: '6 min read',
      image: '/blog/ai-roi-measurement.jpg',
      slug: 'ai-implementation-roi-measuring-success'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Technology',
    'Cloud Computing',
    'SaaS Development',
    'Cybersecurity',
    'Digital Transformation',
    'AI & Analytics'
  ];

  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and best practices in technology and business transformation."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Stay ahead of the curve with insights, trends, and best practices from our technology experts.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest insights and updates from our team.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-r-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;