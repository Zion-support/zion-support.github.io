import React from "react"
import Head from "next/head"
import Link from "next/link"
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Calendar,
  Clock,
  User,
  Tag,
  Search,
  Filter,
  TrendingUp,
  Star,
  Eye,
  MessageSquare,
  Share,
  BookOpen,
  Code,
  Brain,
  Cloud,
  Shield,
  Zap,
  Network,
  Database,
  Settings,
  BarChart3,
  Lock,
  Server,
  Globe,
  CheckCircle,
  Users,
  Award,
  Target,
  FileText,
  Mail,
  Home,
  Mic,
  Satellite,
  Camera,
  Cpu,
  Wifi,
  Monitor,
  Smartphone as Phone,
  Headphones,
  Video,
  Image,
  Music,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Truck,
  Package,
  MapPin,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as LocationIcon
} from 'lucide-react'

// Dynamic imports for better performance
const SEO = dynamic(() => import('../../src/components/seo/SEOHead'), { ssr: false })
const PageTransition = dynamic(() => import('../../src/components/PageTransition'), { ssr: false })

export default function Blog() {
  const title = 'Blog — Zion Tech Group'
  const description = 'Stay updated with the latest insights, trends, and innovations in technology from Zion Tech Group\'s expert team.'

  const categories = ['All', 'Technology', 'AI', 'Development', 'Innovation', 'Blockchain', 'Cloud']

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they\'re transforming business operations across industries.',
      content: 'Artificial Intelligence continues to revolutionize the business landscape...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI',
      tags: ['AI', 'Business', 'Technology', 'Innovation'],
      image: '/images/blog/ai-future.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable Micro SaaS Applications: Best Practices',
      excerpt: 'Learn the essential strategies for creating successful micro SaaS applications that scale.',
      content: 'Micro SaaS applications are becoming increasingly popular...',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Development',
      tags: ['SaaS', 'Development', 'Scalability', 'Best Practices'],
      image: '/images/blog/micro-saas.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity in the Cloud: Protecting Your Digital Assets',
      excerpt: 'Essential cybersecurity strategies for cloud-based applications and infrastructure.',
      content: 'As businesses move to the cloud, security becomes paramount...',
      author: 'Alex Rodriguez',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Technology',
      tags: ['Cybersecurity', 'Cloud', 'Security', 'Infrastructure'],
      image: '/images/blog/cloud-security.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Blockchain Technology: Beyond Cryptocurrency',
      excerpt: 'Discover the real-world applications of blockchain technology in various industries.',
      content: 'Blockchain technology has evolved far beyond its cryptocurrency origins...',
      author: 'Dr. Emily Watson',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Blockchain',
      tags: ['Blockchain', 'Technology', 'Innovation', 'Applications'],
      image: '/images/blog/blockchain-applications.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'DevOps Best Practices for Modern Development Teams',
      excerpt: 'Streamline your development workflow with proven DevOps methodologies.',
      content: 'DevOps has become essential for modern software development...',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Development',
      tags: ['DevOps', 'Development', 'Automation', 'Best Practices'],
      image: '/images/blog/devops-practices.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: Bringing Processing Closer to Users',
      excerpt: 'Understanding edge computing and its impact on application performance and user experience.',
      content: 'Edge computing is revolutionizing how we process and deliver data...',
      author: 'Lisa Thompson',
      date: '2024-01-03',
      readTime: '6 min read',
      category: 'Technology',
      tags: ['Edge Computing', 'Technology', 'Performance', 'Innovation'],
      image: '/images/blog/edge-computing.jpg',
      featured: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO 
        title={title}
        description={description}
        keywords={['blog', 'technology', 'AI', 'development', 'innovation', 'blockchain', 'cloud']}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Technology Blog
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Stay updated with the latest insights, trends, and innovations in technology 
              from Zion Tech Group's expert team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-white border border-gray-300 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h3>
                    <p className="text-gray-600 mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <span className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest technology trends and insights.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}