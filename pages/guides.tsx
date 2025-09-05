import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Clock, Users, ArrowRight, CheckCircle, BookOpen, Code, Database, Cloud, Shield } from 'lucide-react';
import Layout from '../components/layout/Layout';

const guides = [
  {
    title: 'Complete Guide to Web Development',
    description: 'A comprehensive guide covering HTML, CSS, JavaScript, and modern frameworks',
    category: 'Web Development',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    readTime: '45 min',
    difficulty: 'Beginner',
    sections: 12,
    downloads: 2500
  },
  {
    title: 'Cloud Architecture Best Practices',
    description: 'Learn how to design scalable and secure cloud architectures',
    category: 'Cloud Computing',
    icon: Cloud,
    color: 'from-green-500 to-emerald-500',
    readTime: '30 min',
    difficulty: 'Intermediate',
    sections: 8,
    downloads: 1800
  },
  {
    title: 'Database Design and Optimization',
    description: 'Master database design principles and performance optimization',
    category: 'Database',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    readTime: '35 min',
    difficulty: 'Intermediate',
    sections: 10,
    downloads: 1200
  },
  {
    title: 'Security Implementation Guide',
    description: 'Essential security practices for modern applications',
    category: 'Security',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    readTime: '25 min',
    difficulty: 'Advanced',
    sections: 6,
    downloads: 2100
  },
  {
    title: 'API Development Handbook',
    description: 'Complete guide to building robust and scalable APIs',
    category: 'API Development',
    icon: Code,
    color: 'from-indigo-500 to-purple-500',
    readTime: '40 min',
    difficulty: 'Intermediate',
    sections: 14,
    downloads: 1900
  },
  {
    title: 'DevOps Implementation Guide',
    description: 'Step-by-step guide to implementing DevOps practices',
    category: 'DevOps',
    icon: Cloud,
    color: 'from-teal-500 to-blue-500',
    readTime: '50 min',
    difficulty: 'Advanced',
    sections: 16,
    downloads: 1600
  }
];

const categories = [
  { name: 'All', count: 24, active: true },
  { name: 'Web Development', count: 6, active: false },
  { name: 'Cloud Computing', count: 5, active: false },
  { name: 'Database', count: 4, active: false },
  { name: 'Security', count: 3, active: false },
  { name: 'API Development', count: 3, active: false },
  { name: 'DevOps', count: 3, active: false }
];

const popularGuides = [
  { title: 'Getting Started with React', downloads: 3200, category: 'Web Development' },
  { title: 'AWS Security Best Practices', downloads: 2800, category: 'Cloud Computing' },
  { title: 'SQL Performance Optimization', downloads: 2600, category: 'Database' },
  { title: 'RESTful API Design', downloads: 2400, category: 'API Development' }
];

export default function GuidesPage() {
  return (
    <Layout
      title="Guides - Zion Tech Group"
      description="Comprehensive guides covering web development, cloud computing, database design, security, and more. Step-by-step instructions for developers."
      keywords="guides, documentation, web development, cloud computing, database, security, API development, DevOps"
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
                <FileText className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Guides</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Comprehensive guides and best practices for modern development
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#guides"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Browse Guides
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold transition-colors"
                >
                  Request Guide
                </Link>
              </div>
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

        {/* Popular Guides */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Popular Guides
              </h2>
              <p className="text-xl text-gray-600">
                Most downloaded and highly rated guides
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularGuides.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      {guide.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {guide.downloads}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{guide.title}</h3>
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm"
                  >
                    Download Guide
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section id="guides" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Guides</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive guides covering the latest technologies and best practices
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className={`h-48 bg-gradient-to-br ${guide.color} flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <guide.icon className="w-16 h-16 mx-auto mb-4" />
                      <div className="text-lg font-bold">{guide.category}</div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        {guide.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' :
                        guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                        {guide.difficulty}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                    <p className="text-gray-600 mb-4">{guide.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {guide.readTime}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {guide.sections} sections
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {guide.downloads} downloads
                      </div>
                    </div>

                    <Link
                      href="#"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                    >
                      Download Guide
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Need a Custom Guide?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Can't find what you're looking for? We can create custom guides tailored to your specific needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Request Custom Guide
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/docs"
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-colors"
                >
                  View Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}