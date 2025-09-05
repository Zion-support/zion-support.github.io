import React from "react"
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import MainLayout from '../components/layout/MainLayout'

const blogPosts = [{
    id: 1,
    title: "The Future of AI in Business: 2025 Trends",
    excerpt: "Explore the latest AI trends that are transforming businesses across industries.",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    category: "AI & Technology",
    readTime: "5 min read",
    image: "/api/placeholder/600/300",
    tags: ["AI", "Business", "Technology"]
  },
  {
    id: 2,
    title: "Micro SaaS: Building Scalable Solutions",
    excerpt: "Learn how to build and scale micro SaaS applications for modern businesses.",
    author: "Michael Rodriguez",
    date: "2024-01-12",
    category: "Development",
    readTime: "7 min read",
    image: "/api/placeholder/600/300",
    tags: ["SaaS", "Development", "Scalability"]
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for 2025",
    excerpt: "Essential cybersecurity strategies to protect your business from emerging threats.",
    author: "Alex Thompson",
    date: "2024-01-10",
    category: "Security",
    readTime: "6 min read",
    image: "/api/placeholder/600/300",
    tags: ["Cybersecurity", "Security", "Best Practices"]
  },
  {
    id: 4,
    title: "Cloud Migration Strategies",
    excerpt: "A comprehensive guide to migrating your infrastructure to the cloud.",
    author: "Jennifer Lee",
    date: "2024-01-08",
    category: "Cloud",
    readTime: "8 min read",
    image: "/api/placeholder/600/300",
    tags: ["Cloud", "Migration", "Infrastructure"]
  },
  {
    id: 5,
    title: "API Design Best Practices",
    excerpt: "Learn how to design robust and scalable APIs for modern applications.",
    author: "David Kim",
    date: "2024-01-05",
    category: "Development",
    readTime: "6 min read",
    image: "/api/placeholder/600/300",
    tags: ["API", "Development", "Design"]
  }]

export default function BlogPage() {
  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Latest insights on AI, technology, and business innovation from Zion Tech Group experts."
      keywords="blog, AI insights, technology news, business innovation, tech trends">
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, technology, and business innovation from Zion Tech Group experts." />
      </Head>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Latest Insights & News
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest trends in AI, technology, and business innovation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="space-y-8">
                  {blogPosts.map((post) => (
                    <motion.article
                      key={post.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                              {post.category}
                            </span>
                            <span className="text-gray-500 text-sm">{post.readTime}</span>
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            {post.title}
                          </h2>
                          <p className="text-gray-600 mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-2">
                                <User className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-600">{post.author}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-600">{post.date}</span>
                              </div>
                            </div>
                            <Link
                              href={`/blog/${post.id}`}
                              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                            >
                              Read More
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                              >
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <h4 className="text-sm font-medium text-gray-900 mb-1">{post.title}</h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}