import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import { 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter,
  TrendingUp,
  Newspaper,
  MessageSquare,
  Share2,
  Heart,
  Eye,
  ExternalLink
} from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'Zion Tech Group Announces Major AI Breakthrough in Healthcare',
    excerpt: 'Our latest AI model achieves 95% accuracy in early disease detection, revolutionizing patient care and treatment outcomes.',
    content: 'Zion Tech Group has achieved a significant milestone in healthcare AI with the development of a new machine learning model that can detect early signs of disease with 95% accuracy...',
    author: 'Dr. Kleber Santos',
    authorRole: 'CEO & AI Researcher',
    publishedAt: '2024-01-20',
    readTime: '5 min read',
    category: 'Company News',
    tags: ['AI', 'Healthcare', 'Breakthrough', 'Innovation'],
    image: '/images/news/ai-healthcare-breakthrough.jpg',
    featured: true,
    views: 1250,
    likes: 89,
    external: false
  },
  {
    id: 2,
    title: 'Partnership with Microsoft Azure Expands Cloud Capabilities',
    excerpt: 'Strategic partnership brings advanced cloud AI services to our clients, enabling faster deployment and better scalability.',
    content: 'We are excited to announce our expanded partnership with Microsoft Azure, which will provide our clients with access to cutting-edge cloud AI services...',
    author: 'Sarah Chen',
    authorRole: 'CTO',
    publishedAt: '2024-01-18',
    readTime: '4 min read',
    category: 'Partnerships',
    tags: ['Partnership', 'Microsoft', 'Azure', 'Cloud'],
    image: '/images/news/microsoft-partnership.jpg',
    featured: true,
    views: 980,
    likes: 67,
    external: false
  },
  {
    id: 3,
    title: 'Zion Tech Group Recognized as Top AI Company by TechCrunch',
    excerpt: 'Industry recognition highlights our innovation and impact in the AI and technology space.',
    content: 'TechCrunch has named Zion Tech Group as one of the top AI companies to watch in 2024, recognizing our innovative solutions and market impact...',
    author: 'Press Team',
    authorRole: 'Communications',
    publishedAt: '2024-01-15',
    readTime: '3 min read',
    category: 'Awards',
    tags: ['Award', 'Recognition', 'TechCrunch', 'AI'],
    image: '/images/news/techcrunch-recognition.jpg',
    featured: false,
    views: 750,
    likes: 45,
    external: true,
    externalUrl: 'https://techcrunch.com/zion-tech-group-top-ai-company-2024'
  },
  {
    id: 4,
    title: 'New Micro SaaS Platform Launches with 10,000+ Users',
    excerpt: 'Our latest productivity tool has gained rapid adoption, demonstrating the power of focused, user-centric design.',
    content: 'The launch of our new micro SaaS platform has exceeded all expectations, with over 10,000 users signing up in the first month...',
    author: 'Emily Johnson',
    authorRole: 'Head of Product',
    publishedAt: '2024-01-12',
    readTime: '6 min read',
    category: 'Product Launch',
    tags: ['Product Launch', 'Micro SaaS', 'Success', 'Users'],
    image: '/images/news/micro-saas-launch.jpg',
    featured: false,
    views: 650,
    likes: 38,
    external: false
  },
  {
    id: 5,
    title: 'Cybersecurity Solutions Help Prevent $50M in Potential Losses',
    excerpt: 'Our advanced security measures have successfully protected clients from major cyber threats and data breaches.',
    content: 'In the past quarter, our cybersecurity solutions have prevented over $50 million in potential losses for our clients...',
    author: 'David Kim',
    authorRole: 'Head of Security',
    publishedAt: '2024-01-10',
    readTime: '4 min read',
    category: 'Security',
    tags: ['Cybersecurity', 'Protection', 'Success', 'Prevention'],
    image: '/images/news/cybersecurity-success.jpg',
    featured: false,
    views: 720,
    likes: 41,
    external: false
  },
  {
    id: 6,
    title: 'Zion Tech Group Expands to European Market',
    excerpt: 'New office in London opens doors to European clients, bringing our AI and technology solutions to a broader audience.',
    content: 'We are excited to announce the opening of our new European headquarters in London, expanding our global presence...',
    author: 'Press Team',
    authorRole: 'Communications',
    publishedAt: '2024-01-08',
    readTime: '5 min read',
    category: 'Expansion',
    tags: ['Expansion', 'Europe', 'London', 'Global'],
    image: '/images/news/europe-expansion.jpg',
    featured: false,
    views: 580,
    likes: 32,
    external: false
  }
];

const categories = [
  { name: 'All', count: newsArticles.length, active: true },
  { name: 'Company News', count: newsArticles.filter(article => article.category === 'Company News').length, active: false },
  { name: 'Partnerships', count: newsArticles.filter(article => article.category === 'Partnerships').length, active: false },
  { name: 'Awards', count: newsArticles.filter(article => article.category === 'Awards').length, active: false },
  { name: 'Product Launch', count: newsArticles.filter(article => article.category === 'Product Launch').length, active: false },
  { name: 'Security', count: newsArticles.filter(article => article.category === 'Security').length, active: false },
  { name: 'Expansion', count: newsArticles.filter(article => article.category === 'Expansion').length, active: false }
];

const featuredArticles = newsArticles.filter(article => article.featured);
const regularArticles = newsArticles.filter(article => !article.featured);

export default function NewsPage() {
  return (
    <Layout 
      title="News - Zion Tech Group | Latest Updates & Announcements"
      description="Stay updated with the latest news, announcements, and updates from Zion Tech Group. Read about our achievements, partnerships, and industry insights."
      keywords="news, announcements, updates, company news, partnerships, awards, product launches"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                News & Updates
                <span className="block text-blue-400">Stay Informed</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Get the latest news, announcements, and updates from Zion Tech Group. 
                Stay informed about our achievements, partnerships, and industry insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Subscribe to Updates
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search news articles..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter
                </button>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={category.name}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category.active
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Featured News
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most important announcements and breakthrough achievements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <Newspaper className="w-16 h-16 text-gray-400" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">{article.publishedAt}</span>
                      {article.external && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                          External
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                      {article.external ? (
                        <a href={article.externalUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          {article.title}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      ) : (
                        <Link href={`/news/${article.id}`}>{article.title}</Link>
                      )}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Eye className="w-4 h-4 mr-1" />
                          {article.views}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Heart className="w-4 h-4 mr-1" />
                          {article.likes}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      {article.external ? (
                        <a 
                          href={article.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                        >
                          Read Article
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      ) : (
                        <Link 
                          href={`/news/${article.id}`}
                          className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All News */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                All News
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with all our latest news and announcements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
                >
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <Newspaper className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">{article.publishedAt}</span>
                      {article.external && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                          External
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {article.external ? (
                        <a href={article.externalUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          {article.title}
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      ) : (
                        <Link href={`/news/${article.id}`}>{article.title}</Link>
                      )}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {article.readTime}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {article.views}
                        </div>
                      </div>
                      {article.external ? (
                        <a 
                          href={article.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center"
                        >
                          Read Article
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      ) : (
                        <Link 
                          href={`/news/${article.id}`}
                          className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                        >
                          Read More →
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Subscribe to our newsletter and never miss the latest news, updates, and insights from Zion Tech Group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 max-w-md px-6 py-4 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}