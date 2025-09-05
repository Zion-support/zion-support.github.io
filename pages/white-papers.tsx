import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Calendar, 
  User,
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Zap,
  Globe,
  Database
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const whitePapers = [
  {
    title: 'The Future of AI in Business: A Comprehensive Guide',
    description: 'Explore how artificial intelligence is transforming business operations and what it means for your organization.',
    category: 'AI & Machine Learning',
    icon: Brain,
    date: '2024-01-15',
    author: 'Dr. Sarah Johnson',
    downloadCount: '2,847',
    pages: 45,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    title: 'Cloud Migration Best Practices: A Strategic Approach',
    description: 'Learn the essential strategies and best practices for successful cloud migration projects.',
    category: 'Cloud Computing',
    icon: Cloud,
    date: '2024-01-10',
    author: 'Michael Chen',
    downloadCount: '1,923',
    pages: 32,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'Cybersecurity in the Digital Age: Protecting Your Assets',
    description: 'Comprehensive guide to modern cybersecurity threats and defense strategies.',
    category: 'Security',
    icon: Shield,
    date: '2024-01-05',
    author: 'Alex Rodriguez',
    downloadCount: '3,156',
    pages: 38,
    color: 'from-red-500 to-pink-600'
  },
  {
    title: 'Data Analytics for Business Intelligence',
    description: 'How to leverage data analytics to drive informed business decisions and growth.',
    category: 'Data & Analytics',
    icon: BarChart3,
    date: '2023-12-28',
    author: 'Dr. Emily Watson',
    downloadCount: '2,134',
    pages: 41,
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Digital Transformation: A Roadmap for Success',
    description: 'Step-by-step guide to planning and executing successful digital transformation initiatives.',
    category: 'Digital Transformation',
    icon: Zap,
    date: '2023-12-20',
    author: 'David Kim',
    downloadCount: '2,789',
    pages: 36,
    color: 'from-orange-500 to-amber-600'
  },
  {
    title: 'The Future of Work: Remote Collaboration Technologies',
    description: 'Exploring the technologies and strategies that enable effective remote work.',
    category: 'Workplace Technology',
    icon: Globe,
    date: '2023-12-15',
    author: 'Lisa Thompson',
    downloadCount: '1,876',
    pages: 29,
    color: 'from-indigo-500 to-purple-600'
  },
  {
    title: 'Blockchain Technology: Beyond Cryptocurrency',
    description: 'Understanding blockchain applications in business and enterprise solutions.',
    category: 'Blockchain',
    icon: Database,
    date: '2023-12-10',
    author: 'Robert Martinez',
    downloadCount: '1,654',
    pages: 34,
    color: 'from-teal-500 to-cyan-600'
  },
  {
    title: 'IoT Security: Protecting Connected Devices',
    description: 'Comprehensive security strategies for Internet of Things implementations.',
    category: 'IoT & Security',
    icon: Shield,
    date: '2023-12-05',
    author: 'Jennifer Lee',
    downloadCount: '1,432',
    pages: 27,
    color: 'from-pink-500 to-rose-600'
  }
];

const categories = [
  'All',
  'AI & Machine Learning',
  'Cloud Computing',
  'Security',
  'Data & Analytics',
  'Digital Transformation',
  'Workplace Technology',
  'Blockchain',
  'IoT & Security'
];

export default function WhitePapersPage() {
  return (
    <MainLayout 
      title="White Papers - Zion Tech Group"
      description="Access our comprehensive collection of white papers covering AI, cloud computing, cybersecurity, and digital transformation."
      keywords="white papers, research papers, technology insights, AI research, cloud computing, cybersecurity"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <FileText className="w-12 h-12 text-indigo-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  White Papers
                  <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    & Research
                  </span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Access our comprehensive collection of white papers and research documents 
                covering the latest trends in technology and business innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Request Custom Research
                </Link>
                <Link href="/newsletter" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">
                  Subscribe to Updates
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-700 transition-all duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* White Papers Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Featured White Papers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In-depth research and analysis on the latest technology trends and business strategies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whitePapers.map((paper, index) => (
                <motion.div
                  key={paper.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className={`h-2 bg-gradient-to-r ${paper.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 bg-gradient-to-r ${paper.color} rounded-lg flex items-center justify-center mr-3`}>
                        <paper.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        {paper.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
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
                        <span>{new Date(paper.date).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">{paper.pages}</span> pages
                      </div>
                      <div className="text-sm text-gray-500">
                        <Download className="w-4 h-4 inline mr-1" />
                        <span className="font-medium">{paper.downloadCount}</span> downloads
                      </div>
                    </div>

                    <button className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 font-medium group">
                      <Download className="w-4 h-4 mr-2" />
                      Download White Paper
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Need Custom Research?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Our research team can create custom white papers and analysis 
                tailored to your specific industry and business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Request Custom Research
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">
                  Learn About Our Research
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}