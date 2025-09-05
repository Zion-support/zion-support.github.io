import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
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
    title: "Micro SaaS: Building Scalable Solutions",
    excerpt: "Learn how to build and scale micro SaaS applications for modern businesses.",
    author: "Michael Rodriguez",
    date: "2024-01-10",
    category: "SaaS Development",
    readTime: "7 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for SMBs",
    excerpt: "Essential security measures every small business should implement.",
    author: "Emily Johnson",
    date: "2024-01-05",
    category: "Cybersecurity",
    readTime: "6 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 4,
    title: "Cloud Migration Strategies",
    excerpt: "A complete guide to successfully migrating your infrastructure to the cloud.",
    author: "David Kim",
    date: "2023-12-28",
    category: "Cloud Computing",
    readTime: "8 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 5,
    title: "Data Analytics in Digital Transformation",
    excerpt: "How data analytics is driving successful digital transformation initiatives.",
    author: "Lisa Wang",
    date: "2023-12-20",
    category: "Data Analytics",
    readTime: "6 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 6,
    title: "The Rise of Edge Computing",
    excerpt: "Understanding edge computing and its impact on modern applications.",
    author: "James Wilson",
    date: "2023-12-15",
    category: "Edge Computing",
    readTime: "5 min read",
    image: "/api/placeholder/600/300"
  }
];

export default function BlogPage() {
  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Latest insights on AI, technology, and business innovation from Zion Tech Group experts."
      keywords="blog, AI insights, technology news, business innovation, tech trends"
    >
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
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Blog
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stay updated with the latest insights on AI, technology, and business innovation from our expert team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">Featured Image</span>
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
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
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
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Load More Posts
              </button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </MainLayout>
  );
}
