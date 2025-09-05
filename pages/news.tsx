import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  ArrowRight,
  Tag,
  User,
  Clock
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const news = [
  {
    title: "Zion Tech Group Launches New AI-Powered Analytics Platform",
    excerpt: "We're excited to announce the launch of our next-generation AI analytics platform that helps businesses make data-driven decisions faster than ever.",
    date: "2024-01-15",
    author: "Sarah Johnson",
    category: "Product Launch",
    image: "🚀",
    readTime: "3 min read"
  },
  {
    title: "Company Expands to European Markets",
    excerpt: "Zion Tech Group announces expansion into European markets with new offices in London and Berlin, bringing our innovative solutions to more businesses worldwide.",
    date: "2024-01-10",
    author: "Michael Chen",
    category: "Company News",
    image: "🌍",
    readTime: "2 min read"
  },
  {
    title: "Partnership with Leading Cloud Provider",
    excerpt: "We're thrilled to announce our strategic partnership with a major cloud provider to deliver enhanced scalability and performance to our clients.",
    date: "2024-01-05",
    author: "Emily Rodriguez",
    category: "Partnership",
    image: "🤝",
    readTime: "4 min read"
  },
  {
    title: "Industry Recognition for Innovation",
    excerpt: "Zion Tech Group receives the 'Innovation in Technology' award at the annual Tech Excellence Awards for our groundbreaking AI solutions.",
    date: "2023-12-28",
    author: "David Kim",
    category: "Awards",
    image: "🏆",
    readTime: "2 min read"
  },
  {
    title: "New Office Opening in Silicon Valley",
    excerpt: "We're expanding our presence in Silicon Valley with a new state-of-the-art office that will serve as our West Coast innovation hub.",
    date: "2023-12-20",
    author: "Lisa Wang",
    category: "Company News",
    image: "🏢",
    readTime: "3 min read"
  },
  {
    title: "Sustainability Initiative Launch",
    excerpt: "Zion Tech Group commits to carbon-neutral operations by 2025 with new sustainability initiatives and green technology investments.",
    date: "2023-12-15",
    author: "Alex Thompson",
    category: "Sustainability",
    image: "🌱",
    readTime: "5 min read"
  }
];

const categories = [
  "All News",
  "Product Launch",
  "Company News", 
  "Partnership",
  "Awards",
  "Sustainability"
];

export default function NewsPage() {
  return (
    <MainLayout
      title="News - Zion Tech Group"
      description="Stay updated with the latest news, announcements, and updates from Zion Tech Group. Read about our innovations, partnerships, and company milestones."
      keywords="news, announcements, company updates, product launches, partnerships, awards"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
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
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
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

        {/* Category Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    category === "All News"
                      ? "bg-violet-600 text-white"
                      : "bg-white text-gray-600 hover:bg-violet-50 hover:text-violet-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((article, index) => (
                <motion.article
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-violet-100 text-violet-800 text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                      <div className="text-3xl">{article.image}</div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                    </div>

                    <Link
                      href="#"
                      className="inline-flex items-center text-violet-600 hover:text-violet-700 font-semibold group-hover:text-violet-700 transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Stay Updated
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Subscribe to our newsletter to get the latest news and updates delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Want to Learn More?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Explore our services and see how we can help transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Explore Services
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}