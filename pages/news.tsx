import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Newspaper, Calendar, User, ArrowRight, ExternalLink, Tag } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const newsArticles = [
  {
    title: 'Zion Tech Group Launches New AI-Powered Analytics Platform',
    excerpt: 'Our latest AI solution helps businesses make data-driven decisions with advanced machine learning capabilities.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Product Launch',
    readTime: '5 min read',
    image: '/images/news/ai-analytics.jpg',
    featured: true
  },
  {
    title: 'Company Expands to European Market with New Office in London',
    excerpt: 'We\'re excited to announce our expansion into Europe with a new office in London to better serve our international clients.',
    author: 'Michael Chen',
    date: '2024-01-10',
    category: 'Company News',
    readTime: '3 min read',
    image: '/images/news/london-office.jpg',
    featured: false
  },
  {
    title: 'Zion Tech Group Achieves SOC 2 Type II Compliance',
    excerpt: 'We\'ve successfully completed our SOC 2 Type II audit, demonstrating our commitment to security and compliance.',
    author: 'David Rodriguez',
    date: '2024-01-05',
    category: 'Security',
    readTime: '4 min read',
    image: '/images/news/soc2-compliance.jpg',
    featured: false
  },
  {
    title: 'New Partnership with Microsoft Azure for Enhanced Cloud Services',
    excerpt: 'We\'re partnering with Microsoft Azure to provide our clients with enhanced cloud infrastructure and services.',
    author: 'Lisa Wang',
    date: '2023-12-28',
    category: 'Partnership',
    readTime: '6 min read',
    image: '/images/news/azure-partnership.jpg',
    featured: false
  },
  {
    title: 'Zion Tech Group Named Top 50 AI Company by TechCrunch',
    excerpt: 'We\'re honored to be recognized as one of the top 50 AI companies by TechCrunch for our innovative solutions.',
    author: 'James Wilson',
    date: '2023-12-20',
    category: 'Awards',
    readTime: '3 min read',
    image: '/images/news/techcrunch-award.jpg',
    featured: false
  },
  {
    title: 'Q4 2023 Financial Results: Record Growth and Expansion',
    excerpt: 'We\'re pleased to share our Q4 2023 financial results, showing record growth and continued expansion.',
    author: 'Jennifer Lee',
    date: '2023-12-15',
    category: 'Financial',
    readTime: '7 min read',
    image: '/images/news/q4-results.jpg',
    featured: false
  }
];

const categories = [
  { name: 'All', count: 24, active: true },
  { name: 'Product Launch', count: 6, active: false },
  { name: 'Company News', count: 8, active: false },
  { name: 'Partnership', count: 4, active: false },
  { name: 'Awards', count: 3, active: false },
  { name: 'Security', count: 2, active: false },
  { name: 'Financial', count: 1, active: false }
];

export default function NewsPage() {
  return (
    <MainLayout
      title="News & Updates - Zion Tech Group"
      description="Stay updated with the latest news, announcements, and updates from Zion Tech Group. Product launches, company news, and industry insights."
      keywords="news, updates, announcements, company news, product launches, industry news, technology updates"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <Newspaper className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Updates</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Stay informed with the latest news, announcements, and updates from Zion Tech Group
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <button
                  key={category.name}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${
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
        </section>

        {/* Featured Article */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
              {newsArticles
                .filter(article => article.featured)
                .map((article, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="text-4xl font-bold mb-2">AI</div>
                            <div className="text-sm opacity-90">Analytics Platform</div>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/2 p-8">
                        <div className="flex items-center mb-4">
                          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            {article.category}
                          </span>
                          <span className="ml-4 text-sm text-gray-500">{article.readTime}</span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h3>
                        <p className="text-gray-600 mb-6 text-lg">{article.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="w-4 h-4 mr-2" />
                            {article.author}
                            <Calendar className="w-4 h-4 ml-4 mr-2" />
                            {new Date(article.date).toLocaleDateString()}
                          </div>
                          <Link
                            href="#"
                            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                          >
                            Read More
                            <ArrowRight className="ml-1 w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">News</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with our latest announcements, product launches, and company news
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles
                .filter(article => !article.featured)
                .map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-2xl font-bold mb-1">{article.category}</div>
                        <div className="text-sm opacity-90">News Article</div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                        <span className="ml-4 text-sm text-gray-500">{article.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>

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

                      <Link
                        href="#"
                        className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                      >
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
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
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Subscribe to our newsletter to receive the latest news, updates, and insights directly in your inbox
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}