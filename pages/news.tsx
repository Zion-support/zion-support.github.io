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
  Search,
  Filter,
  TrendingUp,
  Globe,
  Zap,
  Award
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const newsArticles = [
  {
    id: 1,
    title: "Zion Tech Group Launches AI-Powered Customer Service Platform",
    excerpt: "New platform uses advanced machine learning to provide 24/7 customer support with 95% accuracy.",
    content: "Zion Tech Group today announced the launch of its revolutionary AI-powered customer service platform, designed to transform how businesses handle customer inquiries and support requests. The platform leverages cutting-edge machine learning algorithms to provide instant, accurate responses to customer questions, reducing response times by 80% and improving customer satisfaction scores by 95%.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Product Launch",
    tags: ["AI", "Customer Service", "Machine Learning"],
    image: "/images/news/ai-platform.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Company Expands to European Markets with New Office in London",
    excerpt: "Strategic expansion brings Zion Tech Group's innovative solutions to European enterprises.",
    content: "Zion Tech Group has announced the opening of its new European headquarters in London, marking a significant milestone in the company's global expansion strategy. The new office will serve as a hub for European operations, bringing the company's cutting-edge technology solutions to enterprises across the continent.",
    author: "Michael Chen",
    date: "2024-01-10",
    category: "Company News",
    tags: ["Expansion", "Europe", "Global Growth"],
    image: "/images/news/london-office.jpg",
    featured: false
  },
  {
    id: 3,
    title: "Zion Tech Group Recognized as Top AI Company by TechCrunch",
    excerpt: "Industry recognition highlights our leadership in artificial intelligence and machine learning solutions.",
    content: "Zion Tech Group has been named one of the top AI companies by TechCrunch, recognizing our innovative approach to artificial intelligence and machine learning. The recognition comes after a year of significant growth and breakthrough developments in our AI-powered solutions.",
    author: "Emily Rodriguez",
    date: "2024-01-05",
    category: "Awards",
    tags: ["Awards", "AI", "Recognition"],
    image: "/images/news/techcrunch-award.jpg",
    featured: true
  },
  {
    id: 4,
    title: "New Partnership with Microsoft Azure Accelerates Cloud Solutions",
    excerpt: "Strategic partnership enables faster deployment of cloud-based enterprise solutions.",
    content: "Zion Tech Group has announced a strategic partnership with Microsoft Azure, enabling faster deployment and scaling of cloud-based enterprise solutions. This partnership will allow our clients to leverage Azure's robust cloud infrastructure while benefiting from our specialized technology expertise.",
    author: "David Kim",
    date: "2024-01-01",
    category: "Partnerships",
    tags: ["Partnership", "Microsoft", "Cloud"],
    image: "/images/news/azure-partnership.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Zion Tech Group Achieves SOC 2 Type II Compliance",
    excerpt: "Security certification demonstrates our commitment to protecting client data and maintaining highest security standards.",
    content: "Zion Tech Group has successfully achieved SOC 2 Type II compliance, demonstrating our unwavering commitment to data security and privacy. This certification validates our comprehensive security controls and processes, ensuring that our clients' sensitive data is protected at the highest level.",
    author: "Lisa Wang",
    date: "2023-12-28",
    category: "Security",
    tags: ["Security", "Compliance", "SOC 2"],
    image: "/images/news/soc2-compliance.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Company Raises $50M Series B Funding Round",
    excerpt: "New funding will accelerate product development and expand market reach.",
    content: "Zion Tech Group has successfully closed a $50 million Series B funding round led by prominent venture capital firms. The funding will be used to accelerate product development, expand our engineering team, and increase our market presence across key verticals.",
    author: "Robert Taylor",
    date: "2023-12-20",
    category: "Funding",
    tags: ["Funding", "Investment", "Growth"],
    image: "/images/news/series-b-funding.jpg",
    featured: true
  }
];

const categories = [
  { name: "All", count: 24, active: true },
  { name: "Product Launch", count: 8, active: false },
  { name: "Company News", count: 6, active: false },
  { name: "Awards", count: 4, active: false },
  { name: "Partnerships", count: 3, active: false },
  { name: "Security", count: 2, active: false },
  { name: "Funding", count: 1, active: false }
];

const featuredNews = newsArticles.filter(article => article.featured);

export default function NewsPage() {
  return (
    <MainLayout 
      title="News & Updates - Zion Tech Group"
      description="Stay updated with the latest news, announcements, and developments from Zion Tech Group. Product launches, partnerships, awards, and company updates."
      keywords="news, updates, announcements, product launches, company news, partnerships, awards"
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
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Newspaper className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  News & Updates
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stay informed with the latest news, announcements, and developments 
                from Zion Tech Group.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search news and updates..."
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Subscribe to Updates
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    category.active
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Featured News
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Highlighting our most important announcements and developments.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((article, index) => (
                <motion.article
                  key={article.id}
                  className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <Newspaper className="w-16 h-16 text-white opacity-50" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      <Link
                        href={`/news/${article.id}`}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {article.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All News */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                All News & Updates
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Complete archive of our news, announcements, and company updates.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-40 bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center">
                    <Newspaper className="w-12 h-12 text-white opacity-50" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <User className="w-3 h-3 mr-1" />
                        {article.author}
                      </div>
                      <Link
                        href={`/news/${article.id}`}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center group"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Load More Articles
              </button>
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
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Subscribe to our newsletter and never miss important updates, product launches, and company news.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-6 py-3 bg-white text-blue-600 rounded-r-lg hover:bg-gray-100 transition-colors font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}