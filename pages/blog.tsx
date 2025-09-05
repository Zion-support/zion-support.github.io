import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Tag,
  Search,
  Filter
} from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Business: Trends for 2024',
    excerpt: 'Discover the latest AI trends that are reshaping how businesses operate and compete in the digital age.',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    category: 'AI & Technology',
    readTime: '5 min read',
    image: '/images/blog/ai-trends-2024.jpg'
  },
  {
    id: 2,
    title: 'Micro SaaS: Building Scalable Solutions for Modern Businesses',
    excerpt: 'Learn how micro SaaS platforms are revolutionizing the way small and medium businesses access enterprise-grade tools.',
    author: 'Michael Chen',
    date: '2024-01-10',
    category: 'Micro SaaS',
    readTime: '7 min read',
    image: '/images/blog/micro-saas-guide.jpg'
  },
  {
    id: 3,
    title: 'Cloud Security Best Practices for Enterprise Applications',
    excerpt: 'Essential security measures every enterprise should implement in their cloud infrastructure.',
    author: 'Alex Rodriguez',
    date: '2024-01-05',
    category: 'Security',
    readTime: '6 min read',
    image: '/images/blog/cloud-security.jpg'
  }
];

const BlogPage = () => {
  return (
    <Layout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights on AI, technology, and business innovation from our expert team."
      keywords="blog, AI insights, technology trends, business innovation, micro SaaS"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Blog</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Insights, trends, and expert perspectives on AI, technology, and business innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                      <div className="text-4xl text-blue-600">📝</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
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
};

export default BlogPage;