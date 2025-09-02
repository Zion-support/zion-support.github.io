import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const BlogPage: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends shaping the business landscape in 2024, from generative AI to autonomous systems.',
      content: 'Artificial Intelligence continues to revolutionize how businesses operate, with 2024 bringing unprecedented advancements in generative AI, machine learning, and autonomous systems...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: '/blog/ai-trends-2024.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Barriers in 2024',
      excerpt: 'How quantum computing is moving from research labs to real-world applications, transforming industries.',
      content: 'Quantum computing has reached a pivotal moment in 2024, with practical applications emerging across finance, healthcare, and logistics...',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Quantum Computing',
      image: '/blog/quantum-computing-2024.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Building Scalable Micro SaaS Applications',
      excerpt: 'Best practices for developing and scaling micro SaaS applications that solve specific business problems.',
      content: 'Micro SaaS applications are revolutionizing how businesses approach software solutions, offering focused, cost-effective alternatives to large enterprise systems...',
      author: 'Emily Watson',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Development',
      image: '/blog/micro-saas-guide.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Understanding the evolving cybersecurity landscape and how AI is both a threat and a solution.',
      content: 'As AI becomes more prevalent, cybersecurity professionals face new challenges and opportunities in protecting digital assets...',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Cybersecurity',
      image: '/blog/ai-cybersecurity.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Cloud-Native Architecture: Design Patterns for 2024',
      excerpt: 'Modern cloud-native design patterns and best practices for building resilient, scalable applications.',
      content: 'Cloud-native architecture continues to evolve, with new patterns and practices emerging to address the challenges of modern application development...',
      author: 'Alex Thompson',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Cloud Computing',
      image: '/blog/cloud-native-patterns.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: Bringing AI to the Edge',
      excerpt: 'How edge computing is enabling real-time AI processing and transforming industries from manufacturing to healthcare.',
      content: 'Edge computing is revolutionizing how we deploy and use AI, bringing processing power closer to where data is generated...',
      author: 'Lisa Park',
      date: '2024-01-03',
      readTime: '6 min read',
      category: 'Edge Computing',
      image: '/blog/edge-computing-ai.jpg',
      featured: false
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Quantum Computing',
    'Development',
    'Cybersecurity',
    'Cloud Computing',
    'Edge Computing'
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Insights, trends, and best practices in technology, AI, and digital transformation from our expert team."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Technology Insights & Trends
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay ahead of the curve with expert insights on AI, quantum computing, cloud architecture, and the latest technology trends.
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Article</h2>
            </motion.div>

            <motion.article
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredPost.category}
                    </span>
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.id}`} className="group">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
                <div className="bg-gray-200 rounded-lg h-64 md:h-80 flex items-center justify-center">
                  <span className="text-gray-500">Featured Image</span>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights and trends in technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-600 text-sm font-semibold">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`} className="group">
                    <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest technology insights, trends, and exclusive content.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogPage;