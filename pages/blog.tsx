import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Tag,
  Clock,
  Eye
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business",
      excerpt: "Exploring how artificial intelligence is transforming industries and creating new opportunities for growth.",
      author: "Zion Tech Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Cloud Migration Best Practices",
      excerpt: "A comprehensive guide to successfully migrating your infrastructure to the cloud.",
      author: "Zion Tech Team",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Micro SaaS: The New Business Model",
      excerpt: "How micro SaaS companies are disrupting traditional software markets.",
      author: "Zion Tech Team",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Business Strategy",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = ["All", "AI & Technology", "Cloud Computing", "Business Strategy", "Development"];

  return (
    <MainLayout>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights, trends, and innovations in technology from Zion Tech Group." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              Technology Insights & News
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Stay updated with the latest trends, insights, and innovations in technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Categories */}
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Posts */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Image Placeholder</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
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
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
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
                </motion.article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}