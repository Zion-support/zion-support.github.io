import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, ExternalLink } from 'lucide-react';
const newsArticles = [
  {
    id: 1,
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
    title: "New Office Opening in Silicon Valley",
    excerpt: "Expanding our presence with a new state-of-the-art office in the heart of Silicon Valley's tech ecosystem.",
    author: "Alex Thompson",
    date: "2024-01-12",
    category: "Company News",
    readTime: "3 min read",
    image: "/api/placeholder/600/300",
    featured: false
  },
  {
    id: 5,
    title: "Cybersecurity Solutions Get Major Update",
    excerpt: "Enhanced security features and improved threat detection capabilities in our cybersecurity offerings.",
    author: "David Kim",
    date: "2024-01-10",
    category: "Product Update",
    readTime: "5 min read",
    image: "/api/placeholder/600/300",
    featured: false
  },
  {
    id: 6,
    title: "Zion Tech Group Expands European Operations",
    excerpt: "Growing our international presence with new offices and partnerships across Europe.",
    author: "Emma Wilson",
    date: "2024-01-08",
    category: "Expansion",
    readTime: "4 min read",
    image: "/api/placeholder/600/300",
    featured: false
  }
];
const categories = [
  "All News",
  "Product Launch",
  "Partnership",
  "Awards",
  "Company News",
  "Product Update",
  "Expansion"
];
export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>News & Updates - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news, announcements, and updates from Zion Tech Group." />
      </Head>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-blue-100">
              Stay informed about our latest developments, partnerships, and industry insights
            </p>
          </div>
        </div>
      </section>
      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured News</h2>
            {newsArticles.filter(article => article.featured).map((article) => (
              <motion.article
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-600 font-medium">
                        {article.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    <Link
                      href={`/news/${article.id}`}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      {/* Categories */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => !article.featured).map((article, index) => (
                <motion.article
                  key={article.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-600 font-medium">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                      <Link
                        href={`/news/${article.id}`}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest news and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}