import React from 'react';
<<<<<<< HEAD
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, User, ArrowRight, Tag, Search } from 'lucide-react';
import Link from 'next/link';
=======
<<<<<<< HEAD
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, User, ArrowRight, Search, Filter, Tag } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
=======
<<<<<<< HEAD
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, User, ArrowRight, Search, Tag, Clock } from 'lucide-react';
import Link from 'next/link';
>>>>>>> main
>>>>>>> main

const Blog: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
<<<<<<< HEAD
      title: 'The Future of AI in Business: Trends and Predictions for 2025',
      excerpt: 'Explore the latest AI trends shaping the business landscape and how companies can prepare for the future of artificial intelligence.',
      author: 'Zion Tech Team',
      date: 'January 25, 2025',
      category: 'AI & Technology',
      readTime: '5 min read',
      image: '/blog/ai-future-business.jpg'
    },
    {
      id: 2,
      title: 'Digital Transformation: A Complete Guide for Modern Businesses',
      excerpt: 'Learn how to successfully navigate digital transformation and modernize your business operations for the digital age.',
      author: 'Sarah Johnson',
      date: 'January 22, 2025',
      category: 'Digital Transformation',
      readTime: '8 min read',
      image: '/blog/digital-transformation-guide.jpg'
    },
    {
      id: 3,
      title: 'Cloud Migration Best Practices: Avoiding Common Pitfalls',
      excerpt: 'Discover the essential strategies and best practices for successful cloud migration without disrupting your business operations.',
      author: 'Mike Chen',
      date: 'January 20, 2025',
      category: 'Cloud Computing',
      readTime: '6 min read',
      image: '/blog/cloud-migration-best-practices.jpg'
    },
    {
      id: 4,
      title: 'Cybersecurity in 2025: Protecting Your Business from Emerging Threats',
      excerpt: 'Stay ahead of cyber threats with our comprehensive guide to modern cybersecurity practices and emerging security technologies.',
      author: 'Alex Rodriguez',
      date: 'January 18, 2025',
      category: 'Cybersecurity',
      readTime: '7 min read',
      image: '/blog/cybersecurity-2025.jpg'
    },
    {
      id: 5,
      title: 'Building Scalable Microservices Architecture: A Developer\'s Guide',
      excerpt: 'Learn how to design and implement microservices architecture that can scale with your business growth and technical requirements.',
      author: 'David Kim',
      date: 'January 15, 2025',
      category: 'Software Development',
      readTime: '10 min read',
      image: '/blog/microservices-architecture.jpg'
    },
    {
      id: 6,
      title: 'The Rise of Quantum Computing: What It Means for Your Business',
      excerpt: 'Explore the potential impact of quantum computing on various industries and how businesses can prepare for this revolutionary technology.',
      author: 'Dr. Lisa Wang',
      date: 'January 12, 2025',
      category: 'Quantum Computing',
      readTime: '9 min read',
      image: '/blog/quantum-computing-rise.jpg'
=======
<<<<<<< HEAD
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      readTime: '8 min read',
      image: '/blog/ai-future-business.jpg',
      tags: ['AI', 'Business', 'Technology', 'Innovation']
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successfully migrating your infrastructure to the cloud.',
      author: 'Michael Chen',
      date: '2024-01-12',
      category: 'Cloud Computing',
      readTime: '12 min read',
      image: '/blog/cloud-migration-guide.jpg',
      tags: ['Cloud', 'Migration', 'Infrastructure', 'DevOps']
    },
    {
      id: 3,
      title: 'Building Scalable Microservices Architecture',
      excerpt: 'Discover how to design and implement microservices that can grow with your business needs.',
      author: 'David Rodriguez',
      date: '2024-01-10',
      category: 'Software Development',
      readTime: '10 min read',
      image: '/blog/microservices-architecture.jpg',
      tags: ['Microservices', 'Architecture', 'Scalability', 'Development']
    },
    {
      id: 4,
      title: 'Cybersecurity in 2024: Protecting Your Digital Assets',
      excerpt: 'Stay ahead of emerging threats with our comprehensive guide to modern cybersecurity practices.',
      author: 'Emily Watson',
      date: '2024-01-08',
      category: 'Cybersecurity',
      readTime: '9 min read',
      image: '/blog/cybersecurity-2024.jpg',
      tags: ['Security', 'Cybersecurity', 'Protection', 'Best Practices']
    },
    {
      id: 5,
      title: 'The Rise of Low-Code Development Platforms',
      excerpt: 'How low-code platforms are democratizing software development and accelerating digital transformation.',
      author: 'Alex Thompson',
      date: '2024-01-05',
      category: 'Development Tools',
      readTime: '7 min read',
      image: '/blog/low-code-platforms.jpg',
      tags: ['Low-Code', 'Development', 'Platforms', 'Digital Transformation']
    },
    {
      id: 6,
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'Learn how to leverage data analytics to make informed business decisions and drive growth.',
      author: 'Lisa Park',
      date: '2024-01-03',
      category: 'Data Analytics',
      readTime: '11 min read',
      image: '/blog/data-analytics-insights.jpg',
      tags: ['Analytics', 'Data', 'Insights', 'Business Intelligence']
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Software Development', 'Cybersecurity', 'Development Tools', 'Data Analytics'];
  const featuredPost = blogPosts[0];
=======
      title: "The Future of AI in Business: Trends and Predictions for 2025",
      excerpt: "Explore the latest AI trends that are reshaping industries and discover how businesses can leverage artificial intelligence for competitive advantage.",
      author: "Dr. Sarah Chen",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Artificial Intelligence",
      image: "/blog/ai-future-2025.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Cloud Migration Best Practices: A Complete Guide",
      excerpt: "Learn the essential steps and strategies for successful cloud migration, including planning, execution, and optimization techniques.",
      author: "Michael Rodriguez",
      date: "January 12, 2025",
      readTime: "12 min read",
      category: "Cloud Computing",
      image: "/blog/cloud-migration-guide.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of Remote Work",
      excerpt: "Discover the latest cybersecurity challenges and solutions for protecting remote teams and distributed organizations.",
      author: "Alex Thompson",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "/blog/cybersecurity-remote.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Building Scalable Microservices Architecture",
      excerpt: "A comprehensive guide to designing and implementing microservices that can scale with your business growth.",
      author: "Jennifer Liu",
      date: "January 8, 2025",
      readTime: "10 min read",
      category: "Software Development",
      image: "/blog/microservices-architecture.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Quantum Computing: The Next Frontier in Technology",
      excerpt: "Explore the potential of quantum computing and how it's set to revolutionize industries from finance to healthcare.",
      author: "Dr. Robert Kim",
      date: "January 5, 2025",
      readTime: "15 min read",
      category: "Emerging Technologies",
      image: "/blog/quantum-computing.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Digital Transformation Success Stories",
      excerpt: "Real-world case studies of companies that successfully transformed their operations using cutting-edge technology.",
      author: "Maria Garcia",
      date: "January 3, 2025",
      readTime: "7 min read",
      category: "Digital Transformation",
      image: "/blog/digital-transformation.jpg",
      featured: false
>>>>>>> main
    }
  ];

  const categories = [
<<<<<<< HEAD
    'All Posts',
    'AI & Technology',
    'Digital Transformation',
    'Cloud Computing',
    'Cybersecurity',
    'Software Development',
    'Quantum Computing',
    'Business Strategy'
  ];

  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights on technology, AI, digital transformation, and business innovation from Zion Tech Group experts."
      keywords="technology blog, AI insights, digital transformation, cloud computing, cybersecurity, business technology"
=======
    "All Posts",
    "Artificial Intelligence",
    "Cloud Computing", 
    "Cybersecurity",
    "Software Development",
    "Emerging Technologies",
    "Digital Transformation"
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
=======
>>>>>>> main
>>>>>>> main

export default function BlogPage() {
  return (
<<<<<<< HEAD
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and best practices in technology from Zion Tech Group's expert team."
      keywords="technology blog, AI insights, cloud computing, software development, cybersecurity, tech trends"
>>>>>>> main
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
<<<<<<< HEAD
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Technology Insights
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Stay ahead of the curve with expert insights on the latest technology trends, 
            AI developments, and digital transformation strategies.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
=======
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Blog</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Insights, trends, and best practices from our technology experts
          </motion.p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Categories</option>
                  {categories.slice(1).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 font-medium"
                >
                  {category}
                </button>
              ))}
>>>>>>> main
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Categories Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
=======
      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-900">{featuredPost.author}</p>
                        <p className="text-sm text-gray-500">{featuredPost.date}</p>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
>>>>>>> main
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
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
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter and never miss the latest technology insights and industry updates.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
=======
      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{post.date}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Stay Updated
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Subscribe to our newsletter and never miss the latest insights and updates from our technology experts.
          </motion.p>
          <motion.div 
            className="max-w-md mx-auto flex gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </motion.div>
        </div>
      </section>
    </MainLayout>
=======
<<<<<<< HEAD
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights on technology, AI, cloud computing, cybersecurity, and digital transformation from Zion Tech Group experts."
      keywords="technology blog, AI insights, cloud computing, cybersecurity, software development, digital transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Technology Blog</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
                Insights, trends, and expert perspectives on the latest in technology, 
                AI, cloud computing, and digital transformation.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="lg:w-2/3">
              
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">Featured Image</span>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          {featuredPost.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                      <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            {featuredPost.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {featuredPost.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {featuredPost.readTime}
                          </div>
                        </div>
                        <Link
                          href={`/blog/${featuredPost.id}`}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center"
                        >
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Regular Posts */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
                <div className="space-y-8">
                  {regularPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center">
                        <span className="text-white font-semibold">Article Image</span>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-2" />
                              {post.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              {post.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2" />
                              {post.readTime}
                            </div>
                          </div>
                          <Link
                            href={`/blog/${post.id}`}
                            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                          >
                            Read More
                            <ArrowRight className="ml-1 w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-8 space-y-8">
                
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Tag className="w-5 h-5 mr-2" />
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className={`block py-2 px-3 rounded-lg transition-colors ${
                            index === 0 
                              ? 'bg-blue-100 text-blue-800 font-medium' 
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-md p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                  <p className="mb-4 text-blue-100">
                    Get the latest technology insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['AI', 'Cloud', 'Security', 'DevOps', 'Machine Learning', 'Blockchain', 'IoT', 'Quantum'].map((tag, index) => (
                      <a
                        key={index}
                        href="#"
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
=======
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p className="text-gray-700">Insights and updates coming soon.</p>
    </main>
>>>>>>> main
>>>>>>> main
>>>>>>> main
  );
}

