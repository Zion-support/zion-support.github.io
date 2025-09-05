import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Calendar, 
  User,
  ArrowRight,
  CheckCircle,
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Settings,
  Globe
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const whitePapers = [
  {
    title: 'The Future of AI in Business: A Comprehensive Guide',
    description: 'Explore how artificial intelligence is transforming business operations and creating new opportunities for growth and innovation.',
    category: 'AI & Machine Learning',
    icon: Brain,
    publishDate: '2024-01-15',
    author: 'Dr. Sarah Johnson',
    downloadCount: '2,847',
    pages: 24,
    color: 'from-blue-500 to-purple-500'
  },
  {
    title: 'Cloud Migration Best Practices: A Strategic Approach',
    description: 'Learn the essential strategies and best practices for successful cloud migration and digital transformation.',
    category: 'Cloud Computing',
    icon: Cloud,
    publishDate: '2024-01-10',
    author: 'Michael Chen',
    downloadCount: '1,923',
    pages: 18,
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Cybersecurity in the Digital Age: Protecting Your Business',
    description: 'Comprehensive guide to modern cybersecurity threats and the strategies to protect your organization.',
    category: 'Cybersecurity',
    icon: Shield,
    publishDate: '2024-01-05',
    author: 'Alex Rodriguez',
    downloadCount: '3,156',
    pages: 32,
    color: 'from-red-500 to-pink-500'
  },
  {
    title: 'Data Analytics for Business Intelligence: A Complete Framework',
    description: 'Discover how to leverage data analytics to drive business intelligence and make data-driven decisions.',
    category: 'Data Analytics',
    icon: BarChart3,
    publishDate: '2023-12-28',
    author: 'Dr. Emily Watson',
    downloadCount: '2,341',
    pages: 28,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Digital Transformation: A Roadmap for Success',
    description: 'Step-by-step guide to planning and executing successful digital transformation initiatives.',
    category: 'Digital Transformation',
    icon: Settings,
    publishDate: '2023-12-20',
    author: 'David Kim',
    downloadCount: '2,678',
    pages: 22,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'The Future of Work: Remote and Hybrid Solutions',
    description: 'Explore the technologies and strategies enabling the future of remote and hybrid work environments.',
    category: 'Workplace Technology',
    icon: Globe,
    publishDate: '2023-12-15',
    author: 'Lisa Thompson',
    downloadCount: '1,892',
    pages: 20,
    color: 'from-orange-500 to-yellow-500'
  }
];

const categories = [
  { name: 'All', count: 6, active: true },
  { name: 'AI & Machine Learning', count: 1, active: false },
  { name: 'Cloud Computing', count: 1, active: false },
  { name: 'Cybersecurity', count: 1, active: false },
  { name: 'Data Analytics', count: 1, active: false },
  { name: 'Digital Transformation', count: 1, active: false },
  { name: 'Workplace Technology', count: 1, active: false }
];

const stats = [
  { number: '15+', label: 'White Papers' },
  { number: '50K+', label: 'Downloads' },
  { number: '95%', label: 'Reader Satisfaction' },
  { number: '24/7', label: 'Access Available' }
];

export default function WhitePapersPage() {
  return (
    <MainLayout
      title="White Papers - Zion Tech Group"
      description="Access our comprehensive collection of white papers covering AI, cloud computing, cybersecurity, data analytics, and digital transformation."
      keywords="white papers, research papers, technology insights, AI research, cloud computing, cybersecurity, data analytics, digital transformation"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <FileText className="w-16 h-16 text-indigo-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  White{' '}
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Papers
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Access our comprehensive collection of research papers and insights covering the latest trends 
                in AI, cloud computing, cybersecurity, and digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#papers" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Browse Papers
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Request Custom Research
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* White Papers Grid */}
        <section id="papers" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Research Papers & Insights
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Download our latest white papers and research reports to stay informed about the latest 
                technology trends and best practices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whitePapers.map((paper, index) => {
                const IconComponent = paper.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${paper.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {paper.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {paper.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{paper.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(paper.publishDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-sm text-gray-500">
                        {paper.pages} pages • {paper.downloadCount} downloads
                      </div>
                    </div>
                    
                    <button className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center group">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Stay Updated with Latest Research
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Subscribe to our newsletter to receive the latest white papers, research insights, 
                  and technology trends directly in your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                    Subscribe
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Custom Research?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our research team can create custom white papers and reports tailored to your specific industry and business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Request Custom Research
                </Link>
                <Link href="/resources" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">
                  View All Resources
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}