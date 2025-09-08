import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD
=======
<<<<<<< HEAD
  Calendar, Clock, ArrowRight, Star, Users, 
  Brain, Atom, Shield, Rocket, Globe,
  TrendingUp, Award, Sparkles, ExternalLink
} from 'lucide-react';

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "Zion Tech Group Launches Next-Generation AI Platform",
      excerpt: "Our revolutionary AI platform is now available, featuring advanced machine learning capabilities and autonomous decision-making systems.",
      date: "2024-12-15",
      category: "Product Launch",
      readTime: "3 min read",
      featured: true
    },
    {
      id: 2,
      title: "Expanding Our Cybersecurity Services Portfolio",
      excerpt: "We're excited to announce the expansion of our cybersecurity offerings, including quantum-resistant encryption and advanced threat detection.",
      date: "2024-12-10",
      category: "Service Update",
      readTime: "2 min read"
    },
    {
      id: 3,
      title: "New Partnership with Global Cloud Infrastructure Provider",
      excerpt: "Strategic partnership announcement that will enhance our cloud platform capabilities and expand our global reach.",
      date: "2024-12-05",
      category: "Partnership",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Zion Tech Group Recognized as Top AI Innovator",
      excerpt: "Industry recognition for our contributions to artificial intelligence and machine learning technologies.",
      date: "2024-11-28",
      category: "Awards",
      readTime: "2 min read"
    },
    {
      id: 5,
      title: "Customer Success Story: 300% ROI Improvement",
      excerpt: "How our AI-powered solution helped a Fortune 500 company achieve remarkable efficiency gains and cost savings.",
      date: "2024-11-20",
      category: "Case Study",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Upcoming Webinar: Future of Quantum Computing",
      excerpt: "Join our experts for an in-depth discussion on quantum computing and its implications for business technology.",
      date: "2024-11-15",
      category: "Event",
      readTime: "1 min read"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

<<<<<<< HEAD
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  FileText, Calendar, User, Tag, ArrowRight, 
  TrendingUp, Star, Zap, Brain, Atom, Shield
} from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
    excerpt: 'We are excited to announce the launch of our groundbreaking AI Consciousness Evolution Pro platform, marking a new era in artificial intelligence development.',
    category: 'AI & Technology',
    author: 'Zion Tech Team',
    date: '2025-01-15',
    readTime: '5 min read',
    featured: true,
    image: '/api/placeholder/600/400'
  },
  {
    id: 2,
    title: 'Quantum Computing Breakthrough: New Security Standards',
    excerpt: 'Our quantum internet security platform has achieved unprecedented levels of encryption, setting new industry standards for data protection.',
    category: 'Quantum Computing',
    author: 'Dr. Sarah Chen',
    date: '2025-01-12',
    readTime: '7 min read',
    featured: false,
    image: '/api/placeholder/600/400'
  },
  {
    id: 3,
    title: 'Enterprise IT Solutions: Zero Trust Security Implementation',
    excerpt: 'Learn how our zero trust security platform is helping Fortune 500 companies protect their digital assets in an increasingly complex threat landscape.',
    category: 'Enterprise Security',
    author: 'Michael Rodriguez',
    date: '2025-01-10',
    readTime: '6 min read',
    featured: false,
    image: '/api/placeholder/600/400'
  },
  {
    id: 4,
    title: 'Micro SAAS Revolution: AI-Powered Business Automation',
    excerpt: 'Discover how our micro SAAS solutions are transforming small and medium businesses through intelligent automation and AI-driven insights.',
    category: 'Business Solutions',
    author: 'Lisa Thompson',
    date: '2025-01-08',
    readTime: '4 min read',
    featured: false,
    image: '/api/placeholder/600/400'
  },
  {
    id: 5,
    title: 'Space Mining Platform: The Future of Resource Extraction',
    excerpt: 'Our space mining platform represents the next frontier in autonomous resource extraction, combining quantum computing with advanced robotics.',
    category: 'Space Technology',
    author: 'Dr. James Wilson',
    date: '2025-01-05',
    readTime: '8 min read',
    featured: false,
    image: '/api/placeholder/600/400'
  },
  {
    id: 6,
    title: 'AI Ethics & Governance: Building Responsible AI Systems',
    excerpt: 'Explore our comprehensive framework for developing ethical AI systems that prioritize human values and societal well-being.',
    category: 'AI Ethics',
    author: 'Dr. Emily Zhang',
    date: '2025-01-03',
    readTime: '6 min read',
    featured: false,
    image: '/api/placeholder/600/400'
  }
];

const categories = [
  { name: 'All News', count: 6, active: true },
  { name: 'AI & Technology', count: 2, active: false },
  { name: 'Quantum Computing', count: 1, active: false },
  { name: 'Enterprise Security', count: 1, active: false },
  { name: 'Business Solutions', count: 1, active: false },
  { name: 'Space Technology', count: 1, active: false }
];

export default function News() {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  return (
    <>
      <Head>
        <title>News & Updates - Zion Tech Group</title>
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <meta name="description" content="Stay updated with the latest news, product launches, and industry insights from Zion Tech Group. Discover breakthroughs in AI, quantum computing, and technology innovation." />
        <meta name="keywords" content="news, updates, AI news, quantum computing, technology news, company updates, industry insights" />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
        <meta name="description" content="Stay updated with the latest news, announcements, and insights from Zion Tech Group. AI breakthroughs, quantum computing advances, and technology innovations." />
        <meta name="keywords" content="news, updates, AI technology, quantum computing, enterprise IT, space technology" />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-purple-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Latest Updates
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                News & Updates
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Stay informed about our latest breakthroughs, product launches, and industry insights. 
                Discover how Zion Tech Group is shaping the future of technology.
              </p>
<<<<<<< HEAD
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            >
              <div className="flex items-center justify-center space-x-2 mb-6">
                <FileText className="w-12 h-12 text-blue-400" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  News & Updates
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Stay updated with the latest news, announcements, and insights from Zion Tech Group. 
                Discover breakthroughs in AI, quantum computing, and emerging technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 hover:scale-105"
                >
                  Subscribe to Updates
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 border border-blue-500/40 text-blue-300 rounded-xl font-semibold hover:bg-blue-500/10 transition-all duration-200"
                >
                  Explore Our Services
                </Link>
              </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            </motion.div>
          </div>
        </div>
      </section>

        {/* Featured Article */}
<<<<<<< HEAD
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
=======
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
              
              {newsArticles.filter(article => article.featured).map((article, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full">
                          {article.category}
                        </span>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">{article.title}</h3>
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">{article.excerpt}</p>
                      
                      <Link 
                        href={`/news/${article.slug}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200"
                      >
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                          <Star className="w-12 h-12 text-white" />
                        </div>
                        <p className="text-gray-400 text-sm">Featured Article</p>
<<<<<<< HEAD
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Latest News & Insights
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay informed about the latest developments in technology and innovation
              </p>
            </motion.div>

            {/* Featured Article */}
            {newsArticles.filter(article => article.featured).map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30">
                          {article.category}
                        </span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full border border-green-500/30">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <Link
                        href={`/news/${article.id}`}
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-all duration-200"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="relative h-64 lg:h-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <FileText className="w-24 h-24 text-blue-400/50 mx-auto mb-4" />
                          <p className="text-blue-400/50">Featured Article</p>
                        </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                      </div>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
              ))}
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    category.active
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
<<<<<<< HEAD
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
              </motion.div>
            ))}

            {/* Categories Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      category.active
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All News Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All News</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.filter(item => !item.featured).map((item) => (
              <article key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {item.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                </motion.div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Newsletter Signup */}
        <section className="py-20 relative bg-gradient-to-br from-gray-900/30 to-gray-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
<<<<<<< HEAD
        {/* News Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              viewport={{ once: true }}
=======
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Latest News</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsArticles.filter(article => !article.featured).map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-gray-400 text-xs mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <Link 
                      href={`/news/${article.slug}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
<<<<<<< HEAD
        {/* Newsletter Signup */}
        <section className="py-20 relative bg-gradient-to-br from-gray-900/30 to-gray-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
=======
<<<<<<< HEAD
=======
        {/* Newsletter Signup */}
        <section className="py-20 relative bg-gradient-to-br from-gray-900/30 to-gray-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              viewport={{ once: true }}
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
              viewport={{ once: true }}
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Updated
              </h2>
<<<<<<< HEAD
=======
<<<<<<< HEAD
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest news, product updates, and industry insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
<<<<<<< HEAD
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Subscribe to our newsletter for the latest news, insights, and technology updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 hover:scale-105">
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/about"
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 text-center"
            >
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">About Us</h3>
              <p className="text-gray-600">Learn more about our company, mission, and values</p>
            </Link>
            
            <Link
              to="/services"
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 text-center"
            >
              <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Services</h3>
              <p className="text-gray-600">Explore our comprehensive technology solutions</p>
            </Link>
            
            <Link
              to="/contact"
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 text-center"
            >
              <Globe className="w-12 h-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get in Touch</h3>
              <p className="text-gray-600">Ready to start your next project? Contact us today</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}