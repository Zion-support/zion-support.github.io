import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Blog: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: Trends and Predictions for 2025',
      excerpt: 'Explore the latest trends in AI adoption across enterprises and how businesses can prepare for the next wave of AI innovation.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: '/blog/ai-enterprise-trends.jpg',
      slug: 'future-ai-enterprise-trends-2025'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Hype vs Reality',
      excerpt: 'A comprehensive look at quantum computing capabilities, current limitations, and practical applications in business.',
      author: 'Michael Rodriguez',
      date: '2025-01-12',
      readTime: '12 min read',
      category: 'Quantum Computing',
      image: '/blog/quantum-computing-reality.jpg',
      slug: 'quantum-computing-hype-vs-reality'
    },
    {
      id: 3,
      title: 'Building Scalable Micro SaaS Applications: Best Practices',
      excerpt: 'Learn the essential strategies for creating and scaling micro SaaS applications that deliver real value to users.',
      author: 'Emily Watson',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'Micro SaaS',
      image: '/blog/micro-saas-best-practices.jpg',
      slug: 'building-scalable-micro-saas-applications'
    },
    {
      id: 4,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Understanding how AI is changing the cybersecurity landscape and what businesses need to know to stay protected.',
      author: 'David Kim',
      date: '2025-01-08',
      readTime: '9 min read',
      category: 'Cybersecurity',
      image: '/blog/ai-cybersecurity-threats.jpg',
      slug: 'cybersecurity-age-of-ai-threats-solutions'
    },
    {
      id: 5,
      title: 'Digital Transformation: Lessons from Successful Implementations',
      excerpt: 'Real-world case studies and lessons learned from companies that successfully transformed their digital operations.',
      author: 'Lisa Thompson',
      date: '2025-01-05',
      readTime: '11 min read',
      category: 'Digital Transformation',
      image: '/blog/digital-transformation-lessons.jpg',
      slug: 'digital-transformation-successful-implementations'
    },
    {
      id: 6,
      title: 'Edge Computing: Bringing Intelligence Closer to Data Sources',
      excerpt: 'Explore how edge computing is revolutionizing data processing and enabling real-time decision making.',
      author: 'James Wilson',
      date: '2025-01-03',
      readTime: '7 min read',
      category: 'Edge Computing',
      image: '/blog/edge-computing-intelligence.jpg',
      slug: 'edge-computing-intelligence-closer-data'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Quantum Computing',
    'Micro SaaS',
    'Cybersecurity',
    'Digital Transformation',
    'Edge Computing',
    'Cloud Architecture'
  ];

  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and innovations in technology from Zion Tech Group's expert team."
      keywords="technology blog, AI insights, quantum computing, micro SaaS, cybersecurity, digital transformation"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Technology Insights & Innovation
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay ahead of the curve with expert insights on AI, quantum computing, 
            cybersecurity, and the latest technology trends shaping our digital future.
          </motion.p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="text-left w-full px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Newsletter</h3>
                  <p className="text-gray-600 mb-4">
                    Get the latest insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">
                        {post.title.split(' ').slice(0, 3).join(' ')}
                      </span>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-gray-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">{post.author}</p>
                            <p className="text-xs text-gray-500">{post.date}</p>
                          </div>
                        </div>
                        
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Load More Posts
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Latest Tech Insights
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join thousands of professionals who trust our insights to stay ahead in technology.
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;