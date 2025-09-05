import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Tag, 
  Clock, 
  Eye, 
  Share2, 
  BookOpen,
  Phone,
  Mail
} from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Cloud Security Best Practices for Enterprise Applications',
    excerpt: 'Essential security measures every enterprise should implement in their cloud infrastructure.',
    content: 'Cloud security is paramount in today\'s digital landscape...',
    author: 'Michael Chen',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Security',
    image: '/blog/cloud-security.jpg',
    tags: ['Security', 'Cloud', 'Enterprise', 'Best Practices']
  },
  {
    id: 2,
    title: 'Quantum Computing: The Next Frontier in Technology',
    excerpt: 'Understanding quantum computing and its potential impact on various industries.',
    content: 'Quantum computing represents a fundamental shift in computational power...',
    author: 'Sarah Johnson',
    date: '2024-01-03',
    readTime: '8 min read',
    category: 'Technology',
    image: '/blog/quantum-computing.jpg',
    tags: ['Quantum Computing', 'Technology', 'Innovation', 'Future']
  },
  {
    id: 3,
    title: 'AI-Powered Micro SaaS: Building Scalable Solutions',
    excerpt: 'How to leverage AI to create successful micro SaaS applications that scale.',
    content: 'Micro SaaS applications are revolutionizing how businesses operate...',
    author: 'David Rodriguez',
    date: '2024-01-01',
    readTime: '5 min read',
    category: 'AI',
    image: '/blog/ai-micro-saas.jpg',
    tags: ['AI', 'Micro SaaS', 'Scalability', 'Business']
  }
];

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights, trends, and best practices in AI, IT, and Micro SaaS from Zion Tech Group experts." />
        <meta name="keywords" content="tech blog, AI insights, IT best practices, micro saas, technology trends" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Blog
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Insights, trends, and best practices in AI, IT, and Micro SaaS
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm ml-2">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                <Mail className="mr-2 w-5 h-5" />
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}