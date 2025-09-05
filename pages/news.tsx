<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
=======
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
>>>>>>> pr-11914
import { Calendar, User, ArrowRight, Tag, ExternalLink } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
<<<<<<< HEAD
    title: 'Zion Tech Group Launches Revolutionary AI Email Responder',
    excerpt: 'Our new AI-powered email responder can generate intelligent, context-aware responses in seconds.',
    content: 'Zion Tech Group is proud to announce the launch of our revolutionary AI Email Responder service...',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Product Launch',
    image: '/news/ai-email-responder.jpg',
    readTime: '5 min read',
    tags: ['AI', 'Email', 'Product Launch', 'Innovation']
  },
  {
    id: 2,
    title: 'Company Expands Cloud Infrastructure Services',
    excerpt: 'New data centers in Europe and Asia to provide faster, more reliable cloud services globally.',
    content: 'To better serve our international clients, Zion Tech Group has expanded its cloud infrastructure...',
    author: 'Michael Chen',
    date: '2024-01-12',
    category: 'Infrastructure',
    image: '/news/cloud-expansion.jpg',
    readTime: '4 min read',
    tags: ['Cloud', 'Infrastructure', 'Global Expansion', 'Technology']
  },
  {
    id: 3,
    title: 'Partnership with Leading Healthcare Provider',
    excerpt: 'Strategic partnership to develop AI-powered healthcare solutions for improved patient care.',
    content: 'Zion Tech Group has entered into a strategic partnership with MedTech Solutions...',
    author: 'Dr. Emily Rodriguez',
    date: '2024-01-10',
    category: 'Partnership',
    image: '/news/healthcare-partnership.jpg',
    readTime: '6 min read',
    tags: ['Healthcare', 'Partnership', 'AI', 'Medical Technology']
  },
  {
    id: 4,
    title: 'New Micro SaaS Platform for Small Businesses',
    excerpt: 'Affordable, scalable SaaS solutions designed specifically for small and medium businesses.',
    content: 'Recognizing the unique needs of small businesses, Zion Tech Group has developed...',
    author: 'David Kim',
    date: '2024-01-08',
    category: 'Product Launch',
    image: '/news/micro-saas.jpg',
    readTime: '7 min read',
    tags: ['SaaS', 'Small Business', 'Product Launch', 'Scalability']
  },
  {
    id: 5,
    title: 'Cybersecurity Best Practices for Remote Work',
    excerpt: 'Essential security measures every remote team should implement to protect sensitive data.',
    content: 'As remote work becomes the new norm, cybersecurity has become more critical than ever...',
    author: 'Alex Thompson',
    date: '2024-01-05',
    category: 'Security',
    image: '/news/cybersecurity-remote.jpg',
    readTime: '8 min read',
    tags: ['Cybersecurity', 'Remote Work', 'Best Practices', 'Security']
  },
  {
    id: 6,
    title: 'AI Ethics and Responsible Development',
    excerpt: 'Our commitment to developing AI technologies that are ethical, transparent, and beneficial to society.',
    content: 'At Zion Tech Group, we believe that AI development must be guided by strong ethical principles...',
    author: 'Dr. Maria Santos',
    date: '2024-01-03',
    category: 'Ethics',
    image: '/news/ai-ethics.jpg',
    readTime: '9 min read',
    tags: ['AI Ethics', 'Responsible AI', 'Technology', 'Society']
=======
    title: "Zion Tech Group Launches Revolutionary AI Platform",
    excerpt: "Our new AI platform revolutionizes how businesses approach artificial intelligence, offering unprecedented capabilities and ease of use.",
    author: "Dr. Sarah Chen",
    date: "2024-01-20",
    category: "Product Launch",
    readTime: "3 min read",
    image: "/api/placeholder/600/300",
    featured: true
  },
  {
    id: 2,
    title: "Partnership with Leading Cloud Provider Announced",
    excerpt: "We're excited to announce our strategic partnership with a major cloud provider to enhance our service offerings.",
    author: "Michael Rodriguez",
    date: "2024-01-18",
    category: "Partnership",
    readTime: "2 min read",
    image: "/api/placeholder/600/300",
    featured: false
  },
  {
    id: 3,
    title: "Zion Tech Group Recognized as Top AI Company",
    excerpt: "Industry recognition for our innovative AI solutions and commitment to excellence in technology services.",
    author: "Jennifer Lee",
    date: "2024-01-15",
    category: "Awards",
    readTime: "4 min read",
    image: "/api/placeholder/600/300",
    featured: false
  },
  {
    id: 4,
    title: "New Micro SaaS Solutions Now Available",
    excerpt: "Discover our latest micro SaaS offerings designed to solve specific business challenges with innovative technology.",
    author: "Alex Thompson",
    date: "2024-01-12",
    category: "Product Launch",
    readTime: "3 min read",
    image: "/api/placeholder/600/300",
    featured: false
  },
  {
    id: 5,
    title: "Cybersecurity Best Practices for 2024",
    excerpt: "Learn about the latest cybersecurity trends and best practices to protect your business from emerging threats.",
    author: "Dr. Maria Garcia",
    date: "2024-01-10",
    category: "Security",
    readTime: "5 min read",
    image: "/api/placeholder/600/300",
    featured: false
  },
  {
    id: 6,
    title: "IT Infrastructure Modernization Guide",
    excerpt: "A comprehensive guide to modernizing your IT infrastructure for better performance and security.",
    author: "David Kim",
    date: "2024-01-08",
    category: "IT Services",
    readTime: "6 min read",
    image: "/api/placeholder/600/300",
    featured: false
>>>>>>> pr-11914
  }
];

const categories = [
<<<<<<< HEAD
  'All',
  'Product Launch',
  'Infrastructure',
  'Partnership',
  'Security',
  'Ethics'
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="News & Updates - Zion Tech Group"
      description="Stay updated with the latest news, announcements, and insights from Zion Tech Group"
      keywords="news, updates, announcements, technology news, AI news, company updates"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
=======
  { name: "All", count: newsArticles.length },
  { name: "Product Launch", count: newsArticles.filter(article => article.category === "Product Launch").length },
  { name: "Partnership", count: newsArticles.filter(article => article.category === "Partnership").length },
  { name: "Awards", count: newsArticles.filter(article => article.category === "Awards").length },
  { name: "Security", count: newsArticles.filter(article => article.category === "Security").length },
  { name: "IT Services", count: newsArticles.filter(article => article.category === "IT Services").length }
];

export default function NewsPage() {
  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <>
      <Head>
        <title>News & Updates - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news, product launches, and industry insights from Zion Tech Group." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
>>>>>>> pr-11914
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                News & Updates
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Stay informed with the latest news, announcements, and insights from Zion Tech Group
=======
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

const featuredNews = [  {
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
];

export default function NewsPage() {
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                News & Updates
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay informed with the latest developments, product launches, and industry insights
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">News & Updates</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Stay informed about our latest developments, product launches, and industry insights.
>>>>>>> pr-11914
=======
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';

const articles = [
  {
    id: 1,
    title: 'Zion Tech Group Launches New AI Platform',
    excerpt: 'Our latest AI platform revolutionizes business automation with advanced machine learning capabilities.',
    date: '2024-01-15',
    readTime: '5 min',
    category: 'Product Updates'
  },
  {
    id: 2,
    title: 'Partnership with Leading Cloud Provider',
    excerpt: 'We announce a strategic partnership to enhance our cloud solutions and expand our service offerings.',
    date: '2024-01-10',
    readTime: '3 min',
    category: 'Partnerships'
  },
  {
    id: 3,
    title: 'Industry Recognition for Innovation',
    excerpt: 'Zion Tech Group receives prestigious award for innovation in digital transformation solutions.',
    date: '2024-01-05',
    readTime: '4 min',
    category: 'Awards'
  }
];

export default function News() {
  return (
    <Layout>
      <Head>
        <title>News & Updates - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news, announcements, and insights from Zion Tech Group." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                News & Updates
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stay updated with the latest news, announcements, and insights from Zion Tech Group.
>>>>>>> pr-11913
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Search and Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
=======
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
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
=======
        {/* Categories */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
>>>>>>> pr-11914
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Featured Article */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredArticles.length > 0 && (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <h2 className="text-2xl font-bold mb-2">Featured Article</h2>
                        <p className="text-lg opacity-90">Latest News</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{filteredArticles[0].date}</span>
                      <span className="mx-2">•</span>
                      <span>{filteredArticles[0].readTime}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {filteredArticles[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg">
                      {filteredArticles[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        <span>{filteredArticles[0].author}</span>
                      </div>
                      <Link
                        href={`/news/${filteredArticles[0].id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            )}
          </div>
        </section>

        {/* News Articles Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.slice(1).map((article, index) => (
=======
        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-600 font-medium">{featuredArticle.category}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuredArticle.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredArticle.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <Link
                  href={`/news/${featuredArticle.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </section>
        )}

        {/* Regular Articles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
>>>>>>> pr-11914
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
<<<<<<< HEAD
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-lg font-bold mb-2">News Article</h3>
                      <p className="text-sm opacity-90">{article.category}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
=======
        {/* Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">News Categories</h2>
              <p className="text-lg text-gray-600">Browse news by category</p>
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
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
<<<<<<< HEAD
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {article.category}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
=======
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
                          {tag}
                        </span>
                      ))}
                    </div>
                    
<<<<<<< HEAD
                    <Link
                      href={`/news/${article.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
=======
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
=======
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                    <span className="text-gray-400">Image Placeholder</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-blue-600" />
                      <span className="text-blue-600 text-sm font-medium">{article.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                      <Link
                        href={`/news/${article.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
>>>>>>> pr-11914
                  </div>
                </motion.article>
              ))}
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
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
                  </div>
                </motion.article>
              ))}
            </div>
            
<<<<<<< HEAD
            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Calendar className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
=======
            <div className="text-center mt-12">
              <a
                href="/news/archive"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                View All News <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
          </div>
        </section>

        {/* Newsletter Signup */}
<<<<<<< HEAD
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
                Subscribe to our newsletter and never miss the latest news and updates from Zion Tech Group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
=======
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
          </div>
        </section>
      </div>
    </Layout>  );
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
=======
        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to get the latest news and updates delivered to your inbox.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Subscribe Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
>>>>>>> pr-11914
=======
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {articles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{article.title}</h2>
                    <p className="text-gray-600 mb-6">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime} read
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
>>>>>>> pr-11913
}