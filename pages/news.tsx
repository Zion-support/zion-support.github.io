import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const newsArticles = [
  {
    title: "Zion Tech Group Launches New AI-Powered Analytics Platform",
    excerpt: "Our latest AI analytics platform helps businesses make data-driven decisions with advanced machine learning capabilities.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Product Launch",
    readTime: "5 min read",
    image: "🤖",
    href: "/news/ai-analytics-platform-launch"
  },
  {
    title: "Company Expands to European Markets with New Office in London",
    excerpt: "We're excited to announce our expansion into Europe with a new office in London to better serve our international clients.",
    author: "Michael Chen",
    date: "2024-01-10",
    category: "Company News",
    readTime: "3 min read",
    image: "🌍",
    href: "/news/european-expansion"
  },
  {
    title: "Zion Tech Group Recognized as Top AI Company by TechCrunch",
    excerpt: "We're honored to be recognized as one of the top AI companies by TechCrunch for our innovative solutions and client success.",
    author: "Emily Rodriguez",
    date: "2024-01-05",
    category: "Awards",
    readTime: "4 min read",
    image: "🏆",
    href: "/news/techcrunch-recognition"
  },
  {
    title: "New Partnership with Microsoft Azure for Enhanced Cloud Services",
    excerpt: "We've partnered with Microsoft Azure to provide enhanced cloud infrastructure and AI services to our clients.",
    author: "David Kim",
    date: "2023-12-28",
    category: "Partnerships",
    readTime: "6 min read",
    image: "☁️",
    href: "/news/microsoft-azure-partnership"
  },
  {
    title: "Q4 2023 Financial Results Show Strong Growth",
    excerpt: "Our Q4 2023 results demonstrate strong growth with 150% year-over-year revenue increase and expanded client base.",
    author: "Lisa Wang",
    date: "2023-12-20",
    category: "Financial",
    readTime: "7 min read",
    image: "📈",
    href: "/news/q4-2023-results"
  },
  {
    title: "Holiday Season Support: 24/7 Coverage for All Clients",
    excerpt: "We're providing 24/7 support coverage during the holiday season to ensure uninterrupted service for all our clients.",
    author: "James Wilson",
    date: "2023-12-15",
    category: "Support",
    readTime: "2 min read",
    image: "🎄",
    href: "/news/holiday-support-coverage"
  }
];

const categories = [
  { name: "All", count: 24, active: true },
  { name: "Product Launch", count: 8, active: false },
  { name: "Company News", count: 6, active: false },
  { name: "Awards", count: 3, active: false },
  { name: "Partnerships", count: 4, active: false },
  { name: "Financial", count: 2, active: false },
  { name: "Support", count: 1, active: false }
];

export default function NewsPage() {
  return (
    <MainLayout
      title="News - Zion Tech Group"
      description="Stay updated with the latest news, announcements, and updates from Zion Tech Group."
      keywords="news, announcements, company updates, product launches, partnerships"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Latest{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  News
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stay updated with our latest announcements, product launches, 
                partnerships, and company milestones.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category.active
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* News Articles */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article, index) => (
                <motion.article
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-6">
                    <div className="text-4xl mb-4">{article.image}</div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
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
                    
                    <Link
                      href={article.href}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold text-sm group-hover:text-purple-600 transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter to get the latest news and updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
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