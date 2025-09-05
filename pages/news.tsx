import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  ExternalLink,
  Clock,
  TrendingUp,
  Award,
  Users,
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,
  BarChart3,
  Target,
  CheckCircle,
  Star,
  MessageSquare,
  FileText,
  BookOpen,
  Building,
  Heart,
  DollarSign,
  Settings,
  Code,
  Network,
  Lock,
  Eye,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Layout from '../components/Layout';

const newsCategories = [
  { name: 'Company News', count: 12, color: 'bg-blue-100 text-blue-800' },
  { name: 'Product Updates', count: 8, color: 'bg-green-100 text-green-800' },
  { name: 'Industry Insights', count: 15, color: 'bg-purple-100 text-purple-800' },
  { name: 'Partnerships', count: 6, color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Awards', count: 4, color: 'bg-red-100 text-red-800' },
  { name: 'Events', count: 10, color: 'bg-indigo-100 text-indigo-800' }
];

const featuredNews = [
  {
    id: 1,
    title: 'Zion Tech Group Launches Revolutionary AI-Powered Analytics Platform',
    excerpt: 'Our new AI analytics platform transforms how businesses process and understand their data, delivering insights 10x faster than traditional methods.',
    category: 'Product Updates',
    author: 'Sarah Johnson',
    date: '2025-01-15',
    readTime: '5 min read',
    image: '/api/placeholder/600/400',
    featured: true,
    tags: ['AI', 'Analytics', 'Product Launch']
  },
  {
    id: 2,
    title: 'Partnership with Microsoft Azure Expands Cloud Solutions Portfolio',
    excerpt: 'Strategic partnership enables us to offer enhanced cloud migration services and enterprise-grade security solutions.',
    category: 'Partnerships',
    author: 'Michael Chen',
    date: '2025-01-12',
    readTime: '3 min read',
    image: '/api/placeholder/600/400',
    featured: true,
    tags: ['Partnership', 'Cloud', 'Microsoft']
  },
  {
    id: 3,
    title: 'Zion Tech Group Wins "Best AI Solutions Provider" Award',
    excerpt: 'Recognition from Tech Industry Awards for our innovative AI services and exceptional client satisfaction rates.',
    category: 'Awards',
    author: 'Emily Rodriguez',
    date: '2025-01-10',
    readTime: '4 min read',
    image: '/api/placeholder/600/400',
    featured: true,
    tags: ['Award', 'Recognition', 'AI']
  }
];

const recentNews = [
  {
    id: 4,
    title: 'New Micro SaaS Solutions for Small Businesses',
    excerpt: 'Affordable, scalable solutions designed specifically for small and medium enterprises.',
    category: 'Product Updates',
    author: 'David Kim',
    date: '2025-01-08',
    readTime: '3 min read',
    tags: ['Micro SaaS', 'SMB', 'Product']
  },
  {
    id: 5,
    title: 'Cybersecurity Trends for 2025: What Businesses Need to Know',
    excerpt: 'Expert analysis of emerging cybersecurity threats and how to protect your organization.',
    category: 'Industry Insights',
    author: 'Lisa Wang',
    date: '2025-01-05',
    readTime: '6 min read',
    tags: ['Cybersecurity', 'Trends', 'Security']
  },
  {
    id: 6,
    title: 'Zion Tech Group Expands Team with 25 New Hires',
    excerpt: 'Growing our team to meet increasing demand for AI and IT services across all industries.',
    category: 'Company News',
    author: 'James Wilson',
    date: '2025-01-03',
    readTime: '2 min read',
    tags: ['Hiring', 'Growth', 'Team']
  },
  {
    id: 7,
    title: 'Upcoming Webinar: AI Implementation Best Practices',
    excerpt: 'Join our experts for a comprehensive guide to implementing AI solutions in your organization.',
    category: 'Events',
    author: 'Maria Garcia',
    date: '2025-01-01',
    readTime: '1 min read',
    tags: ['Webinar', 'AI', 'Education']
  }
];

const stats = [
  { number: '150+', label: 'News Articles' },
  { number: '50+', label: 'Industry Awards' },
  { number: '25+', label: 'Product Launches' },
  { number: '100+', label: 'Partnerships' }
=======
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
=======
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Search, Tag, Clock, ExternalLink } from 'lucide-react';
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229

const newsArticles = [
  {
    id: 1,
<<<<<<< HEAD
    title: "Zion Tech Group Launches Revolutionary AI Platform",
    excerpt: "Our new AI platform combines machine learning and natural language processing to deliver unprecedented business insights.",
    content: "Zion Tech Group has announced the launch of its revolutionary AI platform that combines advanced machine learning algorithms with natural language processing capabilities. This platform is designed to help businesses of all sizes leverage artificial intelligence to gain unprecedented insights into their operations, customer behavior, and market trends.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "AI & Technology",
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    id: 2,
    title: "New Micro SAAS Solutions Now Available",
    excerpt: "We've expanded our micro SAAS portfolio with 20+ new solutions designed for modern businesses.",
    content: "Zion Tech Group has expanded its micro SAAS portfolio with over 20 new solutions designed specifically for modern businesses. These solutions cover everything from project management and customer relationship management to advanced analytics and automation tools.",
    author: "Michael Chen",
    date: "2024-01-10",
    category: "Product Updates",
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for 2024",
    excerpt: "Learn about the latest cybersecurity trends and best practices to protect your business in 2024.",
    content: "As we enter 2024, cybersecurity remains a top priority for businesses worldwide. This article explores the latest cybersecurity trends, emerging threats, and best practices that organizations should implement to protect their digital assets and maintain customer trust.",
    author: "David Rodriguez",
    date: "2024-01-05",
    category: "Security",
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    id: 4,
    title: "Cloud Migration Success Stories",
    excerpt: "Discover how our clients have successfully migrated to the cloud and transformed their operations.",
    content: "Cloud migration has become a critical component of digital transformation for businesses across all industries. This article showcases several success stories from our clients who have successfully migrated their operations to the cloud, highlighting the benefits they've achieved and the challenges they've overcome.",
    author: "Emily Watson",
    date: "2024-01-01",
    category: "Case Studies",
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    id: 5,
    title: "The Future of IT Services",
    excerpt: "Exploring emerging trends and technologies that will shape the future of IT services.",
    content: "The IT services industry is constantly evolving, driven by technological advancements and changing business needs. This article explores the emerging trends and technologies that are expected to shape the future of IT services, including artificial intelligence, edge computing, and quantum computing.",
    author: "Alex Thompson",
    date: "2023-12-28",
    category: "Industry Insights",
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    id: 6,
    title: "Digital Transformation: A Complete Guide",
    excerpt: "A comprehensive guide to digital transformation and how it can benefit your business.",
    content: "Digital transformation is more than just adopting new technologies; it's about fundamentally changing how your business operates and delivers value to customers. This comprehensive guide covers everything you need to know about digital transformation, from planning and implementation to measuring success.",
    author: "Lisa Park",
    date: "2023-12-20",
    category: "Guides",
    image: "/api/placeholder/600/400",
    featured: false
=======
    title: 'Zion Tech Group Announces Major AI Breakthrough in Healthcare Analytics',
    excerpt: 'Our latest AI platform has achieved 95% accuracy in medical diagnosis, revolutionizing patient care and treatment outcomes.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Company News',
    readTime: '3 min read',
    image: '/api/placeholder/600/400',
    featured: true,
    tags: ['AI', 'Healthcare', 'Innovation', 'Technology']
  },
  {
    id: 2,
    title: 'New Partnership with Microsoft Azure Expands Cloud Capabilities',
    excerpt: 'Strategic partnership enables enhanced cloud solutions and improved scalability for enterprise clients.',
    author: 'Michael Chen',
    date: '2024-01-12',
    category: 'Partnerships',
    readTime: '2 min read',
    image: '/api/placeholder/600/400',
    featured: false,
    tags: ['Partnership', 'Cloud', 'Microsoft', 'Enterprise']
  },
  {
    id: 3,
    title: 'Cybersecurity Threats on the Rise: How to Protect Your Business',
    excerpt: 'Expert analysis of the latest cybersecurity trends and practical steps to safeguard your digital assets.',
    author: 'David Rodriguez',
    date: '2024-01-10',
    category: 'Industry Insights',
    readTime: '5 min read',
    image: '/api/placeholder/600/400',
    featured: false,
    tags: ['Cybersecurity', 'Security', 'Business', 'Protection']
  },
  {
    id: 4,
    title: 'Zion Tech Group Wins "Best AI Solution Provider" Award',
    excerpt: 'Recognition for our innovative AI solutions and commitment to driving digital transformation across industries.',
    author: 'Emily Watson',
    date: '2024-01-08',
    category: 'Awards',
    readTime: '2 min read',
    image: '/api/placeholder/600/400',
    featured: false,
    tags: ['Award', 'AI', 'Recognition', 'Excellence']
  },
  {
    id: 5,
    title: 'The Future of Edge Computing: Trends and Opportunities',
    excerpt: 'Comprehensive analysis of edge computing trends and how businesses can leverage this technology for competitive advantage.',
    author: 'Alex Thompson',
    date: '2024-01-05',
    category: 'Technology Trends',
    readTime: '6 min read',
    image: '/api/placeholder/600/400',
    featured: false,
    tags: ['Edge Computing', 'Technology', 'Trends', 'Innovation']
  },
  {
    id: 6,
    title: 'Zion Tech Group Expands Team with 50 New Hires',
    excerpt: 'Major expansion brings top talent to support growing demand for technology solutions and services.',
    author: 'Lisa Park',
    date: '2024-01-03',
    category: 'Company News',
    readTime: '3 min read',
    image: '/api/placeholder/600/400',
    featured: false,
    tags: ['Hiring', 'Growth', 'Team', 'Expansion']
  },
  {
    id: 7,
    title: 'Digital Transformation: Lessons from Industry Leaders',
    excerpt: 'Key insights from successful digital transformation initiatives across various industries and sectors.',
    author: 'John Smith',
    date: '2024-01-01',
    category: 'Industry Insights',
    readTime: '7 min read',
    image: '/api/placeholder/600/400',
    featured: false,
    tags: ['Digital Transformation', 'Leadership', 'Success', 'Strategy']
  },
  {
    id: 8,
    title: 'New Data Privacy Regulations: What Businesses Need to Know',
    excerpt: 'Updated guidance on compliance with new data privacy laws and best practices for protecting customer information.',
    author: 'Maria Garcia',
    date: '2023-12-28',
    category: 'Compliance',
    readTime: '4 min read',
    image: '/api/placeholder/600/400',
    featured: false,
    tags: ['Privacy', 'Compliance', 'Regulations', 'Data Protection']
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
  }
];

const categories = [
  'All',
<<<<<<< HEAD
  'AI & Technology',
  'Product Updates',
  'Security',
  'Case Studies',
  'Industry Insights',
  'Guides'
=======
  'Company News',
  'Partnerships',
  'Industry Insights',
  'Awards',
  'Technology Trends',
  'Compliance',
  'Product Updates'
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
];

const featuredArticle = newsArticles.find(article => article.featured);
const regularArticles = newsArticles.filter(article => !article.featured);

export default function NewsPage() {
<<<<<<< HEAD
  return (
    <Layout
      title="News & Updates - Zion Tech Group"
      description="Stay updated with the latest news, product launches, partnerships, and industry insights from Zion Tech Group."
      keywords="news, updates, company news, product launches, partnerships, industry insights, technology news"
      canonical="https://ziontechgroup.com/news"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
=======
<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <Layout
      title="News & Updates - Zion Tech Group"
      description="Stay updated with the latest news, insights, and updates from Zion Tech Group."
      keywords="news, updates, technology, AI, cybersecurity, digital transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
=======
  return (
    <MainLayout
      title="News - Zion Tech Group"
      description="Stay updated with the latest news, announcements, and insights from Zion Tech Group and the technology industry."
      keywords="news, announcements, technology news, company updates, industry insights"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                News & Updates
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay informed with the latest developments, product launches, and industry insights
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
<<<<<<< HEAD
                News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Updates</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay informed with the latest news, insights, and updates from Zion Tech Group.
=======
                Latest News
                <span className="block text-yellow-400">& Updates</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Stay informed with the latest news, announcements, and insights from Zion Tech Group.
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
=======
<<<<<<< HEAD
        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search news articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Clear Filters
                </button>
              </div>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">News Categories</h2>
              <p className="text-lg text-gray-600">Browse news by category</p>
=======
        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Featured Articles
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our most important and impactful news articles and updates.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {featuredArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                      </div>
                      
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
=======
        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Story</h2>
                <div className="w-20 h-1 bg-blue-600"></div>
              </div>
              
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {featuredArticle.category}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {featuredArticle.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(featuredArticle.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {featuredArticle.readTime}
                        </div>
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {featuredArticle.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={`/news/${featuredArticle.id}`}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.article>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {newsCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${category.color}`}>
                    {category.name}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{category.count}</div>
                  <div className="text-sm text-gray-500">articles</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Featured News */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured News</h2>
              <p className="text-xl text-gray-600">Latest and most important updates</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredNews.map((article, index) => (
                <motion.article
                  key={article.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <a
                      href={`/news/${article.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mt-4"
                    >
                      Read More <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
=======
<<<<<<< HEAD
        {/* All Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                All Articles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse our complete collection of news articles, insights, and updates.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
        {/* Filter Section */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category === 'All'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Recent News */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent News</h2>
              <p className="text-xl text-gray-600">All the latest updates and announcements</p>
            </div>
            
            <div className="space-y-6">
              {recentNews.map((article, index) => (
                <motion.article
                  key={article.id}
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full mr-3">
                          {article.category}
                        </span>
                        <span className="text-sm text-gray-500">{article.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {article.tags.map((tag, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        <span className="mr-4">{article.author}</span>
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <a
                      href={`/news/${article.id}`}
                      className="ml-4 text-blue-600 hover:text-blue-800"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a
                href="/news/archive"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                View All News <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest news, product updates, and industry insights
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
=======
        {/* News Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">All News</h2>
              <div className="w-20 h-1 bg-blue-600"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
              {regularArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
=======
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {article.readTime}
                      </div>
                      <Link
                        href={`/news/${article.id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest news, insights, and updates directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Subscribe Now
                </button>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
          </div>
        </section>
      </div>
    </Layout>
<<<<<<< HEAD
=======
=======
        {/* Newsletter Signup */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest news and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
  );
}