import React from 'react';
import Layout from '../src/components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2025",
      excerpt: "Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.",
      author: "Dr. Sarah Chen",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Remote Work Environments",
      excerpt: "Learn essential security measures to protect your business data when working with distributed teams.",
      author: "Michael Rodriguez",
      date: "2025-01-12",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide for Enterprises",
      excerpt: "Discover proven strategies for migrating your infrastructure to the cloud while minimizing risks and downtime.",
      author: "Jennifer Liu",
      date: "2025-01-10",
      readTime: "10 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Micro SaaS: Building Profitable Niche Software Solutions",
      excerpt: "How to identify opportunities and build successful micro SaaS products that serve specific market needs.",
      author: "David Park",
      date: "2025-01-08",
      readTime: "7 min read",
      category: "SaaS Development",
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Data Analytics in Healthcare: Improving Patient Outcomes",
      excerpt: "Explore how data analytics is transforming healthcare delivery and improving patient care quality.",
      author: "Dr. Maria Garcia",
      date: "2025-01-05",
      readTime: "9 min read",
      category: "Healthcare Technology",
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Digital Transformation in Financial Services",
      excerpt: "How traditional banks and financial institutions are adapting to digital-first customer expectations.",
      author: "Robert Kim",
      date: "2025-01-03",
      readTime: "5 min read",
      category: "Financial Technology",
      image: "/api/placeholder/600/400"
    }
  ];

  const categories = [
    "All Posts",
    "AI & Machine Learning",
    "Cybersecurity",
    "Cloud Computing",
    "SaaS Development",
    "Healthcare Technology",
    "Financial Technology"
  ];

  return (
    <Layout 
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights on AI, technology, and digital transformation from our expert team."
      keywords="technology blog, AI insights, cybersecurity, cloud computing, digital transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technology Insights & 
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Industry News
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Stay ahead with expert insights on AI, cybersecurity, cloud computing, and digital transformation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full transition-all duration-200 ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
              {blogPosts.filter(post => post.featured).map((post) => (
                <div key={post.id} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h3>
                      <p className="text-lg text-gray-600 mb-6">{post.excerpt}</p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="relative">
                      <div className="w-full h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                        <span className="text-white text-lg font-semibold">Featured Image</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.filter(post => !post.featured).map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <span className="text-white font-semibold">Article Image</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Tag className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-600 text-sm font-semibold">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 mb-4">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl text-blue-200 mb-8">
                Get the latest technology insights and industry news delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;