import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import Layout from '../components/Layout';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business: Trends and Predictions for 2024",
    excerpt: "Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.",
    content: "Artificial Intelligence continues to revolutionize business operations across industries. From predictive analytics to automated customer service, AI is becoming an essential tool for competitive advantage...",
    author: "Zion Tech Group",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "AI",
    tags: ["AI", "Business", "Technology", "Innovation"],
    image: "/blog/ai-business-trends.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Micro SaaS: The Next Big Thing in Software Development",
    excerpt: "Discover how micro SaaS solutions are changing the software industry and creating new opportunities for developers and businesses.",
    content: "Micro SaaS represents a new paradigm in software development, focusing on specific, targeted solutions rather than comprehensive platforms...",
    author: "Zion Tech Group",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "SaaS",
    tags: ["SaaS", "Software Development", "Startups", "Technology"],
    image: "/blog/micro-saas-trends.jpg",
    featured: false
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for Modern Businesses",
    excerpt: "Learn essential cybersecurity strategies to protect your business from evolving digital threats and ensure data security.",
    content: "In today's digital landscape, cybersecurity is not just an IT concern but a business imperative. With cyber threats becoming more sophisticated...",
    author: "Zion Tech Group",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Security",
    tags: ["Cybersecurity", "Business", "Security", "IT"],
    image: "/blog/cybersecurity-best-practices.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Cloud Migration Strategies: A Complete Guide",
    excerpt: "Navigate the complexities of cloud migration with our comprehensive guide covering planning, execution, and optimization.",
    content: "Cloud migration is a critical step in digital transformation, but it requires careful planning and execution to ensure success...",
    author: "Zion Tech Group",
    date: "2024-01-01",
    readTime: "8 min read",
    category: "Cloud",
    tags: ["Cloud Computing", "Migration", "Digital Transformation", "IT"],
    image: "/blog/cloud-migration-guide.jpg",
    featured: false
  },
  {
    id: 5,
    title: "The Rise of Edge Computing: What It Means for Your Business",
    excerpt: "Understand how edge computing is transforming data processing and what it means for your business operations.",
    content: "Edge computing is revolutionizing how we process and analyze data, bringing computation closer to where it's needed...",
    author: "Zion Tech Group",
    date: "2023-12-28",
    readTime: "6 min read",
    category: "Technology",
    tags: ["Edge Computing", "Technology", "Data Processing", "Innovation"],
    image: "/blog/edge-computing-rise.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Digital Transformation: A Roadmap for Success",
    excerpt: "Get a step-by-step guide to digital transformation that will help your business thrive in the digital age.",
    content: "Digital transformation is more than just adopting new technologies; it's about fundamentally changing how your business operates...",
    author: "Zion Tech Group",
    date: "2023-12-25",
    readTime: "9 min read",
    category: "Digital Transformation",
    tags: ["Digital Transformation", "Business Strategy", "Technology", "Innovation"],
    image: "/blog/digital-transformation-roadmap.jpg",
    featured: false
  }
];

const categories = [
  "All",
  "AI",
  "SaaS",
  "Security",
  "Cloud",
  "Technology",
  "Digital Transformation"
];

export default function BlogPage() {
  return (
    <Layout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights on AI, technology, and digital transformation from our expert team."
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stay ahead with the latest insights on AI, technology, and digital transformation from our expert team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Categories Filter */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4 mb-12"
              >
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      category === 'All'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>

              {/* Featured Post */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Tag className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-600 font-medium">Featured</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {blogPosts[0].title}
                      </h3>
                      <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{blogPosts[0].author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{blogPosts[0].date}</span>
                          </div>
                        </div>
                        <Link
                          href={`/blog/${blogPosts[0].id}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Blog Posts Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {blogPosts.slice(1).map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-600 font-medium text-sm">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-4 group-hover:translate-x-1 transition-transform"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </motion.div>

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white"
              >
                <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="text-xl text-blue-100 mb-6">
                  Get the latest insights delivered to your inbox
                </p>
                <div className="max-w-md mx-auto flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}