import React from 'react';
import type { NextPage } from 'next';
import { Calendar, User, ArrowRight, Search, Tag, Clock } from 'lucide-react';
import Link from 'next/link';

const Blog: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2025",
      excerpt: "Explore the latest AI trends that are reshaping industries and discover how businesses can leverage artificial intelligence for competitive advantage.",
      author: "Dr. Sarah Chen",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      image: "/blog/ai-future.jpg",
      slug: "future-ai-business-2025"
    },
    {
      id: 2,
      title: "Cloud Cost Optimization: A Complete Guide for 2025",
      excerpt: "Learn how to reduce your cloud spending by up to 50% with our comprehensive guide to cloud cost optimization strategies and tools.",
      author: "Michael Rodriguez",
      date: "January 10, 2025",
      readTime: "12 min read",
      category: "Cloud Computing",
      image: "/blog/cloud-optimization.jpg",
      slug: "cloud-cost-optimization-guide-2025"
    },
    {
      id: 3,
      title: "Zero Trust Security: Implementation Best Practices",
      excerpt: "Discover how to implement zero trust security architecture in your organization with our step-by-step guide and best practices.",
      author: "Jennifer Liu",
      date: "January 5, 2025",
      readTime: "10 min read",
      category: "Cybersecurity",
      image: "/blog/zero-trust-security.jpg",
      slug: "zero-trust-security-implementation"
    },
    {
      id: 4,
      title: "Micro SaaS: Building Profitable Software Products",
      excerpt: "Learn how to build and scale micro SaaS products that generate recurring revenue with minimal overhead and maximum impact.",
      author: "Alex Thompson",
      date: "December 28, 2024",
      readTime: "15 min read",
      category: "Software Development",
      image: "/blog/micro-saas.jpg",
      slug: "micro-saas-building-profitable-products"
    },
    {
      id: 5,
      title: "AI-Powered CRM: Transforming Customer Relationships",
      excerpt: "Explore how AI is revolutionizing CRM systems and helping businesses build stronger, more personalized customer relationships.",
      author: "Sarah Johnson",
      date: "December 20, 2024",
      readTime: "9 min read",
      category: "AI & Machine Learning",
      image: "/blog/ai-crm.jpg",
      slug: "ai-powered-crm-transforming-relationships"
    },
    {
      id: 6,
      title: "Project Management in the AI Era",
      excerpt: "Discover how AI is changing project management and learn about the tools and techniques that are reshaping how teams collaborate.",
      author: "David Kim",
      date: "December 15, 2024",
      readTime: "11 min read",
      category: "Development Tools",
      image: "/blog/ai-project-management.jpg",
      slug: "project-management-ai-era"
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Software Development', 'Cybersecurity', 'Development Tools', 'Data Analytics'];
  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Technology Insights & Trends
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Stay ahead of the curve with our latest insights on AI, cloud computing, cybersecurity, and emerging technologies.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Article
            </h2>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Tag className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-blue-600 font-semibold text-sm">{featuredPost.category}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
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
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <span className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer inline-flex items-center">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <span className="text-gray-500">Featured Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
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

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Tag className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-blue-600 font-semibold text-sm">{post.category}</span>
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
                      {post.date}
                    </div>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <span className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center cursor-pointer">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Get the latest technology trends and insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;