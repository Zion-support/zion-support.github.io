const blogPosts = [
  {
    id: 'ai-transformation-2025',
    title: 'AI Transformation Trends for 2025',
    excerpt: 'Discover the latest AI trends and how they\'re reshaping business operations across industries.',
    author: 'Zion Tech Team',
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['AI', 'Technology', 'Innovation']
  },
  {
    id: 'micro-saas-success',
    title: 'Building Successful Micro SAAS Solutions',
    excerpt: 'Learn the key strategies for developing and scaling micro SAAS products that solve real business problems.',
    author: 'Kleber Santos',
    date: '2024-01-10',
    readTime: '7 min read',
    tags: ['Micro SAAS', 'Business', 'Strategy']
  },
  {
    id: 'cloud-migration-guide',
    title: 'Complete Guide to Cloud Migration',
    excerpt: 'Everything you need to know about migrating your infrastructure to the cloud successfully.',
    author: 'IT Solutions Team',
    date: '2024-01-05',
    readTime: '8 min read',
    tags: ['Cloud', 'Migration', 'IT Services']
  },
  {
    id: 'cybersecurity-best-practices',
    title: 'Cybersecurity Best Practices for 2025',
    excerpt: 'Essential cybersecurity measures every business should implement to protect their digital assets.',
    author: 'Security Team',
    date: '2024-01-01',
    readTime: '6 min read',
    tags: ['Cybersecurity', 'Security', 'Best Practices']
  }
];

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, technology trends, and business innovation from Zion Tech Group experts." />
        <meta name="keywords" content="blog, AI insights, technology trends, business innovation, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Tech Insights & Innovation
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Stay ahead with the latest insights on AI, technology trends, and business innovation
              </motion.p>
            </div>
=======
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
    featured: true
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
    title: "Cloud Security Best Practices",
    excerpt: "Essential security measures for protecting your cloud infrastructure and data.",
    author: "Jennifer Liu",
    date: "2024-01-10",
    category: "Security",
    readTime: "6 min read",
    image: "/api/placeholder/600/300",
    tags: ["Security", "Cloud", "Best Practices"]
  },
  {
    id: 4,
    title: "Digital Transformation Strategies",
    excerpt: "How to successfully navigate your organization's digital transformation journey.",
    author: "David Park",
    date: "2024-01-08",
    category: "Strategy",
    readTime: "8 min read",
    image: "/api/placeholder/600/300",
    tags: ["Strategy", "Digital Transformation", "Business"]
  },
  {
    id: 5,
    title: "Machine Learning in Production",
    excerpt: "Best practices for deploying and maintaining ML models in production environments.",
    author: "Dr. Sarah Chen",
    date: "2024-01-05",
    category: "AI & Technology",
    readTime: "9 min read",
    image: "/api/placeholder/600/300",
    tags: ["Machine Learning", "Production", "MLOps"]
  },
  {
    id: 6,
    title: "Automation in Real Estate: PropTech Revolution",
    excerpt: "How automation and technology are transforming the real estate industry.",
    author: "Lisa Wang",
    date: "2024-01-03",
    category: "Development",
    readTime: "6 min read",
=======
    image: "/api/placeholder/600/300",
    tags: ["API", "Development", "Design"]
  }]export default function BlogPage() {
  return (
    <Layout
      title="Blog - Zion Tech Group"
      description="Latest insights, trends, and best practices in technology. Stay updated with our expert articles on AI, cloud computing, cybersecurity, and more."
      keywords="technology blog, AI insights, cloud computing, cybersecurity, SaaS development, data analytics, tech trends"
      canonical="https://ziontechgroup.com/blog"
    >
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, technology, and business innovation from Zion Tech Group experts." />
      </Head>
      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <Tag className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-blue-600 font-semibold">{featuredPost.category}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-2" />
                      <span>{featuredPost.author}</span>
                      <Calendar className="w-4 h-4 ml-4 mr-2" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                  </div>
                  <Link 
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center mt-6 text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-2/3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search articles..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="relative">
                    <Filter className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>All Categories</option>
                      {categories.slice(1).map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.filter(post => !post.featured).map((post, index) => (
                  <motion.article 
                    key={post.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <Tag className="w-16 h-16 text-white opacity-50" />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
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

        {/* Newsletter Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
              <p className="text-xl mb-8 text-blue-100">
                Subscribe to our newsletter for the latest tech insights and industry updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                />
                <button className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Subscribe
                </button>
=======
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
<<<<<<< HEAD
                      viewport={{ once: true }}
                    >
                      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
=======
                      viewport={{ once: true }}>
                      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                      </div>                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                            {post.category}
                          </span>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
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
                </div>              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Custom Technology Solutions?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Our expert team is ready to help you implement the latest technology solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}