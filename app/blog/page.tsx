'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, BookOpen, Users, Clock, Star, Zap, Globe, Database, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations.',
      date: '2024-01-15',
      category: 'AI & Technology'
    },
    {
      title: 'Cybersecurity Best Practices',
      excerpt: 'Essential security measures every business should implement to protect their data.',
      date: '2024-01-10',
      category: 'Security'
    },
    {
      title: 'Cloud Migration Strategies',
      excerpt: 'A comprehensive guide to successfully migrating your business to the cloud.',
      date: '2024-01-05',
      category: 'Cloud Computing'
    },
    {
      title: 'Digital Transformation Trends',
      excerpt: 'Latest trends in digital transformation and how they impact your business.',
      date: '2024-01-01',
      category: 'Digital Transformation'
    }
  ]

  const categories = [
    'AI & Technology',
    'Security',
    'Cloud Computing',
    'Digital Transformation',
    'Business Intelligence',
    'Mobile Development',
    'Data Analytics',
    'IoT Solutions'
  ]

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights & News</title>
        <meta name="description" content="Stay updated with the latest technology insights, industry news, and expert advice from Zion Tech Group." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity, cloud computing, digital transformation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Technology Blog
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Stay updated with the latest technology insights, industry news, 
                and expert advice from our team of technology professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Latest Articles</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Insights and expertise from our technology team
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <Link 
                      to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Categories</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Explore our content by category
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-3" />
                  <p className="text-gray-300">{category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Stay Updated with Our Latest Insights
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Subscribe to our newsletter and never miss the latest technology insights and industry updates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Subscribe Now
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogPage