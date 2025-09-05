import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business: 2025 Trends",
    excerpt: "Explore the latest AI trends shaping business in 2025 and beyond.",
    content: "Artificial Intelligence continues to revolutionize business operations...",
    author: "Zion Tech Team",
    date: "2024-01-15",
    category: "AI & Machine Learning",
    readTime: "5 min read",
    image: "/images/blog/ai-trends-2025.jpg",
    tags: ["AI", "Business", "Technology", "Innovation"]
  },
  {
    id: 2,
    title: "Micro SaaS: The Future of Software Development",
    excerpt: "Discover how micro SaaS is changing the software development landscape.",
    content: "Micro SaaS applications are becoming increasingly popular...",
    author: "Zion Tech Team",
    date: "2024-01-10",
    category: "Micro SaaS",
    readTime: "7 min read",
    image: "/images/blog/micro-saas-future.jpg",
    tags: ["Micro SaaS", "Software", "Development", "Business"]
  }
];

const categories = [
  { name: "AI & Machine Learning", count: 15 },
  { name: "Micro SaaS", count: 12 },
  { name: "Cloud Computing", count: 8 },
  { name: "SaaS Development", count: 10 },
  { name: "Digital Transformation", count: 7 },
  { name: "IT Infrastructure", count: 5 }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, micro SaaS, and technology trends from Zion Tech Group." />
        <meta name="keywords" content="blog, AI, micro SaaS, technology, insights" />
      </Head>

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
              Stay updated with the latest insights on AI, micro SaaS, and technology trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                    <span className="mx-2">•</span>
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}