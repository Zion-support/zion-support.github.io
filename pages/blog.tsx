import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import Layout from '../components/Layout';

const blogPosts = [
  {
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
    title: "Micro SaaS: The New Era of Software",
    excerpt: "How micro SaaS solutions are revolutionizing the software industry.",
    author: "Mike Johnson",
    date: "2024-01-10",
    category: "Micro SaaS",
    readTime: "4 min read",
    image: "/api/placeholder/600/300",
    tags: ["Micro SaaS", "Software", "Business"]
  },
  {
    id: 3,
    title: "Cloud Migration Best Practices",
    excerpt: "Essential strategies for successful cloud migration projects.",
    author: "Lisa Wang",
    date: "2024-01-05",
    category: "Cloud Computing",
    readTime: "6 min read",
    image: "/api/placeholder/600/300",
    tags: ["Cloud", "Migration", "Best Practices"]
  }
];

export default function Blog() {
  return (
    <Layout
      title="Blog - Zion Tech Group"
      description="Latest insights and trends in technology, AI, and business"
      keywords="blog, technology news, AI trends, business insights, tech articles"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Blog
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Latest insights and trends in technology, AI, and business
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Blog Image</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm ml-2">{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
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
          </div>
        </section>
      </div>
    </Layout>
  );
}