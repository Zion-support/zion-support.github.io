import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Newspaper, 
  ArrowRight,
  Calendar,
  User,
  Tag,
  ExternalLink,
  TrendingUp,
  Award,
  Globe,
  Zap
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const newsArticles = [
  {
    title: "Zion Tech Group Launches New AI-Powered Solutions Suite",
    excerpt: "We're excited to announce the launch of our comprehensive AI solutions suite, designed to help businesses automate processes and gain competitive advantages.",
    date: "2024-01-15",
    author: "Sarah Johnson",
    category: "Product Launch",
    image: "/images/news/ai-solutions-launch.jpg",
    featured: true
  },
  {
    title: "Company Expands to New Markets in Europe and Asia",
    excerpt: "Zion Tech Group announces strategic expansion into European and Asian markets, bringing our innovative technology solutions to a global audience.",
    date: "2024-01-10",
    author: "Michael Chen",
    category: "Company News",
    image: "/images/news/global-expansion.jpg",
    featured: false
  },
  {
    title: "Partnership with Microsoft Azure Strengthens Cloud Offerings",
    excerpt: "Our new strategic partnership with Microsoft Azure enables us to deliver enhanced cloud solutions and better support for enterprise clients.",
    date: "2024-01-05",
    author: "Emily Rodriguez",
    category: "Partnerships",
    image: "/images/news/microsoft-partnership.jpg",
    featured: false
  },
  {
    title: "Zion Tech Group Receives SOC 2 Type II Certification",
    excerpt: "We're proud to announce that Zion Tech Group has achieved SOC 2 Type II certification, demonstrating our commitment to security and compliance.",
    date: "2023-12-20",
    author: "David Kim",
    category: "Awards & Certifications",
    image: "/images/news/soc2-certification.jpg",
    featured: false
  },
  {
    title: "New Office Opening in Delaware Headquarters",
    excerpt: "Our new state-of-the-art headquarters in Delaware provides expanded capacity for our growing team and enhanced client services.",
    date: "2023-12-15",
    author: "Lisa Wang",
    category: "Company News",
    image: "/images/news/new-office.jpg",
    featured: false
  },
  {
    title: "AI Research Team Publishes Breakthrough in Machine Learning",
    excerpt: "Our AI research team has published groundbreaking research in machine learning optimization, advancing the field of artificial intelligence.",
    date: "2023-12-10",
    author: "Dr. Alex Thompson",
    category: "Research & Development",
    image: "/images/news/ai-research.jpg",
    featured: false
  }
];

const categories = [
  { name: "All News", count: 24, active: true },
  { name: "Product Launch", count: 8, active: false },
  { name: "Company News", count: 6, active: false },
  { name: "Partnerships", count: 4, active: false },
  { name: "Awards & Certifications", count: 3, active: false },
  { name: "Research & Development", count: 3, active: false }
];

const featuredNews = [
  {
    title: "Zion Tech Group Named Top AI Company 2024",
    excerpt: "Industry recognition for our innovative AI solutions and commitment to excellence.",
    date: "2024-01-20",
    category: "Awards & Certifications"
  },
  {
    title: "New Micro SaaS Platform Launches with 1000+ Users",
    excerpt: "Our latest micro SaaS offering has gained rapid adoption in the market.",
    date: "2024-01-18",
    category: "Product Launch"
  },
  {
    title: "Global Expansion Reaches 10 New Countries",
    excerpt: "Successful expansion into new markets across Europe and Asia-Pacific.",
    date: "2024-01-16",
    category: "Company News"
  }
];

export default function NewsPage() {
  return (
    <MainLayout 
      title="News & Updates - Zion Tech Group"
      description="Stay updated with the latest news, announcements, and insights from Zion Tech Group. Company updates, product launches, and industry insights."
      keywords="news, updates, announcements, company news, product launches, partnerships, awards, technology news"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Updates</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Stay informed with the latest news, announcements, and insights from Zion Tech Group. 
                Discover our latest innovations and company milestones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#latest-news"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Read Latest News
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/blog"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  Visit Our Blog
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured News Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Featured News
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Highlights of our most important announcements and achievements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredNews.map((news, index) => (
                <motion.div
                  key={news.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <Award className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-blue-600">
                      {news.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(news.date).toLocaleDateString()}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    category.active
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-blue-50'
                  }`}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section id="latest-news" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Latest News
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                All the latest updates, announcements, and insights from Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {newsArticles.map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                    article.featured ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className={`${article.featured ? 'flex' : 'block'}`}>
                    <div className={`${article.featured ? 'w-1/2' : 'w-full h-48'} bg-gray-200 flex items-center justify-center`}>
                      <Newspaper className="w-12 h-12 text-gray-400" />
                    </div>
                    <div className={`p-6 ${article.featured ? 'w-1/2' : ''}`}>
                      <div className="flex items-center mb-3">
                        <Tag className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-sm font-medium text-blue-600">
                          {article.category}
                        </span>
                        {article.featured && (
                          <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-600 text-xs font-medium rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <h3 className={`font-bold text-gray-900 mb-3 ${
                        article.featured ? 'text-2xl' : 'text-xl'
                      }`}>
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-1" />
                          <span className="mr-4">{article.author}</span>
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <Link
                          href="#"
                          className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                        >
                          Read More
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Load More News
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Subscribe to our newsletter and never miss important updates, product launches, and industry insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
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