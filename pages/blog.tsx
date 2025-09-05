import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business: 2025 Trends",
    excerpt: "Explore the latest AI trends that are transforming businesses across industries.",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    category: "AI & Technology",
    readTime: "5 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 2,
    title: "Micro SaaS: The Next Big Thing in Software",
    excerpt: "Discover how micro SaaS solutions are revolutionizing software delivery.",
    author: "Michael Rodriguez",
    date: "2024-01-10",
    category: "SaaS",
    readTime: "7 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for 2024",
    excerpt: "Essential security measures every business should implement.",
    author: "Emily Watson",
    date: "2024-01-05",
    category: "Security",
    readTime: "6 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 4,
    title: "Cloud Migration Strategies",
    excerpt: "A complete guide to successful cloud migration.",
    author: "David Kim",
    date: "2023-12-28",
    category: "Cloud Computing",
    readTime: "8 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 5,
    title: "Data Analytics in Digital Transformation",
    excerpt: "How data analytics is driving business transformation.",
    author: "Sarah Johnson",
    date: "2023-12-20",
    category: "Analytics",
    readTime: "6 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 6,
    title: "Building Resilient IT Infrastructure",
    excerpt: "Key considerations for remote work infrastructure.",
    author: "Michael Chen",
    date: "2023-12-15",
    category: "Infrastructure",
    readTime: "5 min read",
    image: "/api/placeholder/600/300"
  }
];

const categories = [
  { name: "AI & Machine Learning", count: 12 },
  { name: "Cloud Computing", count: 8 },
  { name: "Cybersecurity", count: 6 },
  { name: "SaaS Development", count: 10 },
  { name: "Digital Transformation", count: 7 },
  { name: "IT Infrastructure", count: 5 }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Insights, trends, and best practices in AI, cloud computing, cybersecurity, and technology solutions." />
        <meta name="keywords" content="technology blog, AI insights, cloud computing, cybersecurity, SaaS development, digital transformation" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology Insights & Trends
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Stay updated with the latest insights, trends, and best practices in technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Load More Posts
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-gray-700">{category.name}</span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Subscribe to get the latest insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}