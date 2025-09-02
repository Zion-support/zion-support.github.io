import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
<<<<<<< HEAD
import { Calendar, User, ArrowRight, Tag, Search } from 'lucide-react';
import Link from 'next/link';
=======
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3

const Blog: NextPage = () => {
  const blogPosts = [
    {
<<<<<<< HEAD
      id: 'ai-transformation-2024',
      title: 'The Future of AI in Business Transformation',
      excerpt: 'Explore how artificial intelligence is reshaping industries and driving digital transformation across businesses of all sizes.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      readTime: '5 min read',
      image: '/blog/ai-transformation.jpg',
      featured: true
    },
    {
      id: 'cloud-migration-best-practices',
      title: 'Best Practices for Cloud Migration in 2024',
      excerpt: 'Learn the essential strategies and considerations for successful cloud migration projects.',
      author: 'Michael Chen',
      date: '2024-01-12',
      category: 'Cloud Computing',
      readTime: '7 min read',
      image: '/blog/cloud-migration.jpg',
      featured: false
    },
    {
      id: 'cybersecurity-trends',
      title: 'Cybersecurity Trends to Watch in 2024',
      excerpt: 'Stay ahead of emerging cybersecurity threats and learn about the latest security technologies.',
      author: 'David Rodriguez',
      date: '2024-01-10',
      category: 'Cybersecurity',
      readTime: '6 min read',
      image: '/blog/cybersecurity.jpg',
      featured: false
    },
    {
      id: 'microservices-architecture',
      title: 'Building Scalable Microservices Architecture',
      excerpt: 'A comprehensive guide to designing and implementing microservices for modern applications.',
      author: 'Emily Watson',
      date: '2024-01-08',
      category: 'Software Development',
      readTime: '8 min read',
      image: '/blog/microservices.jpg',
      featured: false
    },
    {
      id: 'data-analytics-insights',
      title: 'Leveraging Data Analytics for Business Growth',
      excerpt: 'Discover how data analytics can drive informed decision-making and business growth.',
      author: 'Alex Thompson',
      date: '2024-01-05',
      category: 'Data Analytics',
      readTime: '6 min read',
      image: '/blog/data-analytics.jpg',
      featured: false
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile App Development: Native vs Cross-Platform',
      excerpt: 'Compare native and cross-platform development approaches for mobile applications.',
      author: 'Lisa Park',
      date: '2024-01-03',
      category: 'Mobile Development',
      readTime: '5 min read',
      image: '/blog/mobile-development.jpg',
      featured: false
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Software Development', 'Data Analytics', 'Mobile Development'];
=======
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
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3

  return (
    <MainLayout
      title="Blog - Zion Tech Group"
<<<<<<< HEAD
      description="Stay updated with the latest insights, trends, and best practices in technology from our expert team."
=======
      description="Stay updated with the latest insights, trends, and best practices in technology and business transformation."
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
<<<<<<< HEAD
            Stay updated with the latest insights, trends, and best practices in technology 
            from our expert team.
=======
            Stay ahead of the curve with insights, trends, and best practices from our technology experts.
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3
          </p>
        </div>
      </section>

<<<<<<< HEAD
      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-600 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{post.excerpt}</p>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <span className="text-gray-500">Featured Image</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our latest insights and expert opinions on technology trends and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 text-sm">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 text-sm">{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mt-4"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
=======
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
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3
                  </Link>
                </div>
              </article>
            ))}
          </div>
<<<<<<< HEAD
=======

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Load More Posts
            </button>
          </div>
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3
        </div>
      </section>

      {/* Newsletter Signup */}
<<<<<<< HEAD
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest insights and updates.
=======
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest insights and updates from our team.
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
<<<<<<< HEAD
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
=======
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-r-lg font-semibold transition-colors">
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;