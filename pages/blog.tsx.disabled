import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      title: 'The Future of AI in Business: Trends and Predictions for 2025',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      author: 'Sarah Johnson',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/api/placeholder/400/250',
      slug: 'future-of-ai-in-business-2025'
    },
    {
      title: 'Micro SaaS: Building Scalable Solutions for Modern Businesses',
      excerpt: 'Learn how micro SaaS architecture can help you build cost-effective, scalable solutions for your business needs.',
      author: 'Michael Chen',
      date: '2025-01-12',
      readTime: '7 min read',
      category: 'SaaS Development',
      image: '/api/placeholder/400/250',
      slug: 'micro-saas-scalable-solutions'
    },
    {
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Discover the essential steps and best practices for successfully migrating your infrastructure to the cloud.',
      author: 'Emily Rodriguez',
      date: '2025-01-10',
      readTime: '8 min read',
      category: 'Cloud Solutions',
      image: '/api/placeholder/400/250',
      slug: 'cloud-migration-best-practices'
    },
    {
      title: 'Cybersecurity in 2025: Protecting Your Digital Assets',
      excerpt: 'Stay ahead of cyber threats with our comprehensive guide to modern cybersecurity practices and tools.',
      author: 'David Kim',
      date: '2025-01-08',
      readTime: '6 min read',
      category: 'Security',
      image: '/api/placeholder/400/250',
      slug: 'cybersecurity-2025-protecting-digital-assets'
    },
    {
      title: 'Digital Transformation: A Step-by-Step Implementation Guide',
      excerpt: 'Learn how to successfully implement digital transformation initiatives in your organization.',
      author: 'Lisa Wang',
      date: '2025-01-05',
      readTime: '9 min read',
      category: 'Digital Transformation',
      image: '/api/placeholder/400/250',
      slug: 'digital-transformation-implementation-guide'
    },
    {
      title: 'Building High-Performance Web Applications with Modern Frameworks',
      excerpt: 'Explore the latest web development frameworks and techniques for building fast, scalable applications.',
      author: 'Alex Thompson',
      date: '2025-01-03',
      readTime: '6 min read',
      category: 'Web Development',
      image: '/api/placeholder/400/250',
      slug: 'high-performance-web-applications'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Technology',
    'SaaS Development',
    'Cloud Solutions',
    'Security',
    'Digital Transformation',
    'Web Development'
  ];

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on technology, AI, cloud solutions, and digital transformation from Zion Tech Group experts." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Technology Insights & News
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed with the latest trends, insights, and best practices in technology, AI, and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
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

        {/* Blog Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Featured Image</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Tag className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
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
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter and never miss the latest insights on technology and digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}