<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
=======
<<<<<<< HEAD
import React from "react"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import Layout from '../components/Layout'
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
<<<<<<< HEAD
import MainLayout from '../components/layout/MainLayout';
=======
import Layout from '../components/layout/Layout';
=======
import { 
  Calendar, 
  User, 
  ArrowRight,
  Tag,
  Clock,
  Eye,
  Share2,
  BookOpen
} from 'lucide-react';
import Layout from '../components/Layout';
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main

const blogPosts = [
  {
    id: 1,
<<<<<<< HEAD
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
    title: "Cloud Migration Best Practices",
    excerpt: "Learn how to successfully migrate your infrastructure to the cloud with minimal downtime.",
    author: "Michael Rodriguez",
    date: "2024-01-10",
    category: "Cloud Computing",
    readTime: "7 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 3,
    title: "Cybersecurity in the Age of AI",
    excerpt: "Understanding the evolving threat landscape and how AI can help protect your business.",
    author: "Alex Thompson",
    date: "2024-01-05",
    category: "Cybersecurity",
    readTime: "6 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 4,
    title: "Micro SaaS: Building Scalable Solutions",
    excerpt: "Discover how micro SaaS solutions can drive business growth and innovation.",
    author: "Jennifer Lee",
    date: "2024-01-01",
    category: "SaaS",
    readTime: "8 min read",
    image: "/api/placeholder/600/300"
  }
=======
    title: 'The Future of AI in Business: Trends and Predictions for 2024',
    excerpt: 'Explore the latest AI trends and how they\'re transforming businesses across industries.',
    content: 'Artificial Intelligence is revolutionizing the way businesses operate...',
    author: 'Dr. Kleber Santos',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'AI & Technology',
    image: '/blog/ai-future.jpg',
    tags: ['AI', 'Business', 'Technology', 'Innovation']
  },
  {
    id: 2,
    title: 'Micro SaaS: Building Scalable Solutions for Modern Businesses',
    excerpt: 'Learn how micro SaaS solutions are changing the landscape of business software.',
    content: 'Micro SaaS represents a new paradigm in software development...',
    author: 'Sarah Johnson',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Micro SaaS',
    image: '/blog/micro-saas.jpg',
    tags: ['Micro SaaS', 'Software', 'Business', 'Scalability']
  },
  {
    id: 3,
<<<<<<< HEAD
    title: "Cybersecurity Best Practices for 2025",
    excerpt: "Essential security measures every business should implement to protect their data.",
    author: "Alex Thompson",
    date: "2024-01-10",
    category: "Security",
    readTime: "6 min read",
    image: "/api/placeholder/600/300",
    tags: ["Security", "Cybersecurity", "Best Practices"]
  },
  {
    id: 4,
    title: "Cloud Migration Strategies",
    excerpt: "A comprehensive guide to migrating your infrastructure to the cloud successfully.",
    author: "Jennifer Lee",
    date: "2024-01-08",
    category: "Cloud Computing",
    readTime: "8 min read",
    image: "/api/placeholder/600/300",
    tags: ["Cloud", "Migration", "Infrastructure"]
  },
  {
    id: 5,
    title: "API Design Principles",
    excerpt: "Best practices for designing robust and scalable APIs that developers love to use.",
    author: "David Park",
    date: "2024-01-05",
    category: "Development",
    readTime: "6 min read",
    image: "/api/placeholder/600/300",
    tags: ["API", "Development", "Design"]
  }
]
=======
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
    id: 4,
    title: 'Quantum Computing: The Next Frontier in Technology',
    excerpt: 'Understanding quantum computing and its potential impact on various industries.',
    content: 'Quantum computing represents a fundamental shift in computational power...',
    author: 'Dr. Kleber Santos',
    date: '2024-01-01',
    readTime: '8 min read',
    category: 'Quantum Computing',
    image: '/blog/quantum-computing.jpg',
    tags: ['Quantum Computing', 'Technology', 'Innovation', 'Future']
  }
];

const categories = [
<<<<<<< HEAD
  { name: "AI & Machine Learning", count: 12 },
  { name: "Cloud Computing", count: 8 },
  { name: "Cybersecurity", count: 6 },
  { name: "SaaS Development", count: 10 },
  { name: "Digital Transformation", count: 7 },
  { name: "IT Infrastructure", count: 5 }
>>>>>>> main
];

const blogCategories = [
=======
<<<<<<< HEAD
>>>>>>> main
  "All Posts",
  "AI & Technology",
  "Cloud Computing",
  "Cybersecurity",
  "SaaS",
  "Digital Transformation"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
  { name: 'All', count: blogPosts.length },
  { name: 'AI & Technology', count: blogPosts.filter(post => post.category === 'AI & Technology').length },
  { name: 'Micro SaaS', count: blogPosts.filter(post => post.category === 'Micro SaaS').length },
  { name: 'Security', count: blogPosts.filter(post => post.category === 'Security').length },
  { name: 'Quantum Computing', count: blogPosts.filter(post => post.category === 'Quantum Computing').length }
>>>>>>> main
>>>>>>> main
>>>>>>> main
];
>>>>>>> main

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights, trends, and technology news from Zion Tech Group experts." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Technology Insights & News
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Stay updated with the latest trends, insights, and innovations in technology
            </p>
=======
<<<<<<< HEAD
    <MainLayout 
=======
<<<<<<< HEAD
    <Layout
>>>>>>> main
      title="Blog - Zion Tech Group"
      description="Latest insights on AI, technology, and business innovation from Zion Tech Group experts."
      keywords="blog, AI insights, technology news, business innovation, tech trends"
    >
      <div className="min-h-screen bg-white">
=======
    <Layout 
      title="Blog - Zion Tech Group"
      description="Latest insights, trends, and technology news from Zion Tech Group experts."
      keywords="technology blog, AI insights, cloud computing, cybersecurity, SaaS development, digital transformation"
    >
      <div className="min-h-screen bg-gray-50">
>>>>>>> main
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Tech Insights & Innovation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Stay ahead with the latest insights on AI, technology trends, and business innovation
=======
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Blog
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Stay updated with the latest insights on AI, technology, and business innovation
>>>>>>> main
              </p>
            </motion.div>
>>>>>>> main
          </div>
        </section>

<<<<<<< HEAD
      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Categories */}
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              {categories.map((category, index) => (
=======
<<<<<<< HEAD
        {/* Blog Posts Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
=======
<<<<<<< HEAD
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
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <User className="w-4 h-4 mr-2" />
                          <span className="mr-4">{post.author}</span>
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>{post.readTime}</span>
                          <Link
                            href={`/blog/${post.id}`}
                            className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
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
=======
        {/* Category Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
>>>>>>> main
                <button
<<<<<<< HEAD
    key={index}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0
=======
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.name
>>>>>>> main
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
>>>>>>> main
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
<<<<<<< HEAD
    key={post.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5 }}
=======
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
>>>>>>> main
>>>>>>> main
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-6">
<<<<<<< HEAD
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
=======
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
<<<<<<< HEAD
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
=======
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
>>>>>>> main
                      </div>
                    </div>
                    
<<<<<<< HEAD
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Link
    href={`/blog/${post.id}`}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
=======
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
>>>>>>> main
                    </div>
                    
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
>>>>>>> main
                  </div>
                </motion.article>
              ))}
            </div>
<<<<<<< HEAD
          </div>
        </section>
      </div>
    </MainLayout>
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> main
            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Load More Posts
              </button>
            </div>
=======
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <BookOpen className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
                <p className="text-gray-600">Try selecting a different category.</p>
              </div>
            )}
>>>>>>> main
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss the latest insights on technology and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Subscribe Now
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> main
  );
}