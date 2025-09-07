import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FileText,
  Download,
  Calendar,
  User,
  Tag,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Brain,
  Atom,
  Globe,
  Shield,
  Zap,
  Eye,
  Clock,
  Award,
} from 'lucide-react'
import UltraAdvancedFuturisticBackground from './ui/UltraAdvancedFuturisticBackground'
const reports = [
  {
    id: 1,
    title: 'AI Adoption in Fortune 500 Companies: ROI Analysis & Best Practices',
    excerpt: 'In-depth study of artificial intelligence implementation success stories, return on investment metrics, and strategic recommendations.',
    date: '2024-01-10',
    author: 'AI Research Division',
    category: 'Business Intelligence',
    tags: ['AI', 'ROI', 'Fortune 500', 'Best Practices'],
    pages: 38,
    downloads: 892,
    views: 3456,
    featured: true,
    color: 'from-purple-500 to-pink-500',
    icon: <Brain className="w-8 h-8" />
  },
  {
    id: 2,
    title: 'Cybersecurity Threats in the Age of AI: 2024 Threat Landscape',
    excerpt: 'Analysis of emerging cybersecurity challenges, AI-powered threats, and defense strategies for modern organizations.',
    date: '2024-01-08',
    author: 'Cybersecurity Research Team',
    category: 'Security',
    tags: ['Cybersecurity', 'AI Threats', 'Threat Landscape', 'Defense'],
    pages: 52,
    downloads: 1567,
    views: 6789,
    featured: false,
    color: 'from-red-500 to-orange-500',
    icon: <Shield className="w-8 h-8" />
  },
  {
    id: 3,
    title: 'Global Tech Investment Trends: Venture Capital & Innovation Funding',
    excerpt: 'Comprehensive overview of technology investment patterns, emerging sectors, and funding opportunities worldwide.',
    date: '2024-01-05',
    author: 'Investment Research Team',
    category: 'Finance',
    tags: ['Investment', 'Venture Capital', 'Tech Trends', 'Funding'],
    pages: 45,
    downloads: 1234,
    views: 4567,
    featured: false,
    color: 'from-blue-500 to-cyan-500',
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    id: 4,
    title: 'Sustainable Technology: Green Computing & Environmental Impact',
    excerpt: 'Analysis of sustainable technology practices, environmental impact assessment, and green computing solutions.',
    date: '2024-01-03',
    author: 'Sustainability Research Team',
    category: 'Environment',
    tags: ['Sustainability', 'Green Computing', 'Environment', 'Tech'],
    pages: 41,
    downloads: 987,
    views: 3456,
    featured: false,
    color: 'from-green-500 to-emerald-500',
    icon: <Globe className="w-8 h-8" />

]
const categories = [
  { name: 'All', count: reports.length, active: true, href: '#' },
  { name: 'Business Intelligence', count: 1, active: false, href: '#' },
  { name: 'Security', count: 1, active: false, href: '#' },
  { name: 'Finance', count: 1, active: false, href: '#' },
  { name: 'Environment', count: 1, active: false, href: '#' }
]
const formatNumber = (num: number) => {
  return new Intl.NumberFormat('en-US').format(num)
}
const formatDate = (date: string) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(date))
}
export default function ReportsPage() {
  return (
    <>
      <Head>
        <title>Research Reports | Zion Tech Group</title>
        <meta name="description" content="Access our comprehensive research, industry analysis, and technology insights that drive innovation and strategic decision-making." />
      </Head>
      <UltraAdvancedFuturisticBackground />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Research Reports
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Access our comprehensive research, industry analysis, and technology insights that drive innovation and strategic decision-making.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>{reports.length} Reports Available</span>
              </span>
              <span className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>{formatNumber(reports.reduce((sum, r) => sum + r.downloads, 0))} Downloads</span>
              </span>
              <span className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>{formatNumber(reports.reduce((sum, r) => sum + r.views, 0))} Views</span>
              </span>
            </motion.div>
          </div>
        </section>

        {/* Featured Report */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Report
              </h2>
            </motion.div>

            {reports.filter(report => report.featured).map((report, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-12 hover:border-cyan-400/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8">
                  <div className={`w-24 h-24 bg-gradient-to-br ${report.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}>
                    {report.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {report.category}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(report.date)}</span>
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{report.title}</h3>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6">{report.excerpt}</p>

                    <div className="flex flex-wrap items-center gap-6 mb-6">
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{report.author}</span>
                      </span>
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{report.pages} pages</span>
                      </span>
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{formatNumber(report.downloads)} downloads</span>
                      </span>
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{formatNumber(report.views)} views</span>
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {report.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2">
                        <Download className="w-5 h-5" />
                        <span>Download Full Report</span>
                      </button>
                      <button className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center space-x-2">
                        <Eye className="w-5 h-5" />
                        <span>Preview Report</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* All Reports */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                All Reports
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive research across different technology domains
              </p>
            </motion.div>

            {/* Category Pills */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    category.active
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </motion.div>

            {/* Reports Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reports.filter(report => !report.featured).map((report, index) => (
                <motion.article
                  key={index}
                  className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:shadow-xl hover:shadow-cyan-500/30"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${report.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                    {report.icon}
                  </div>
                  <div className="mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {report.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{report.title}</h3>
                  <p className="text-gray-300 mb-4">{report.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(report.date)}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>{formatNumber(report.downloads)}</span>
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Need Custom Research?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our research team can conduct custom studies and analysis tailored to your specific industry needs and challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2"
                >
                  <span>Request Custom Research</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center space-x-2"
                >
                  <span>View All Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
