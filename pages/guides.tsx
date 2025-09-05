import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  ArrowRight,
  FileText,
  Clock,
  User,
  Star,
  CheckCircle,
  Download,
  ExternalLink,
  Search,
  Filter,
  Globe,
  Settings,
  Shield,
  Zap,
  Code,
  Database
} from 'lucide-react';
import Layout from '../components/Layout';

const guideCategories = [
  {
    name: 'Getting Started',
    description: 'Essential guides for new users',
    icon: BookOpen,
    color: 'from-blue-600 to-purple-600',
    guides: [
      {
        title: 'Quick Start Guide',
        description: 'Get up and running in 5 minutes',
        readTime: '5 min',
        difficulty: 'Beginner',
        rating: 4.8
      },
      {
        title: 'Account Setup',
        description: 'Configure your account and preferences',
        readTime: '3 min',
        difficulty: 'Beginner',
        rating: 4.9
      },
      {
        title: 'First Project',
        description: 'Create your first AI-powered project',
        readTime: '10 min',
        difficulty: 'Beginner',
        rating: 4.7
      }
    ]
  },
  {
    name: 'AI Services',
    description: 'Learn to use our AI capabilities',
    icon: Zap,
    color: 'from-green-600 to-blue-600',
    guides: [
      {
        title: 'AI Integration Basics',
        description: 'Integrate AI services into your applications',
        readTime: '15 min',
        difficulty: 'Intermediate',
        rating: 4.6
      },
      {
        title: 'Natural Language Processing',
        description: 'Build NLP applications with our APIs',
        readTime: '20 min',
        difficulty: 'Intermediate',
        rating: 4.5
      },
      {
        title: 'Computer Vision',
        description: 'Implement image recognition and analysis',
        readTime: '25 min',
        difficulty: 'Advanced',
        rating: 4.8
      }
    ]
  },
  {
    name: 'Cloud Services',
    description: 'Master cloud infrastructure and deployment',
    icon: Database,
    color: 'from-purple-600 to-pink-600',
    guides: [
      {
        title: 'Cloud Migration',
        description: 'Migrate your applications to the cloud',
        readTime: '30 min',
        difficulty: 'Advanced',
        rating: 4.7
      },
      {
        title: 'Auto-scaling Setup',
        description: 'Configure automatic scaling for your services',
        readTime: '20 min',
        difficulty: 'Intermediate',
        rating: 4.6
      },
      {
        title: 'Monitoring & Logging',
        description: 'Set up comprehensive monitoring',
        readTime: '15 min',
        difficulty: 'Intermediate',
        rating: 4.8
      }
    ]
  },
  {
    name: 'Security',
    description: 'Secure your applications and data',
    icon: Shield,
    color: 'from-red-600 to-orange-600',
    guides: [
      {
        title: 'Authentication Setup',
        description: 'Implement secure user authentication',
        readTime: '20 min',
        difficulty: 'Intermediate',
        rating: 4.9
      },
      {
        title: 'Data Encryption',
        description: 'Encrypt sensitive data at rest and in transit',
        readTime: '25 min',
        difficulty: 'Advanced',
        rating: 4.7
      },
      {
        title: 'Security Best Practices',
        description: 'Follow industry security standards',
        readTime: '15 min',
        difficulty: 'Intermediate',
        rating: 4.8
      }
    ]
  }
];

const featuredGuides = [
  {
    title: 'Complete AI Integration Guide',
    description: 'A comprehensive guide to integrating AI services into your applications with real-world examples.',
    category: 'AI Services',
    readTime: '45 min',
    difficulty: 'Advanced',
    rating: 4.9,
    author: 'Sarah Johnson',
    date: '2024-01-15',
    image: '/images/guides/ai-integration.jpg'
  },
  {
    title: 'Cloud Migration Checklist',
    description: 'Step-by-step checklist for migrating your infrastructure to the cloud without downtime.',
    category: 'Cloud Services',
    readTime: '30 min',
    difficulty: 'Intermediate',
    rating: 4.8,
    author: 'Michael Chen',
    date: '2024-01-10',
    image: '/images/guides/cloud-migration.jpg'
  },
  {
    title: 'Security Audit Guide',
    description: 'How to conduct a comprehensive security audit of your applications and infrastructure.',
    category: 'Security',
    readTime: '35 min',
    difficulty: 'Advanced',
    rating: 4.7,
    author: 'Emily Rodriguez',
    date: '2024-01-08',
    image: '/images/guides/security-audit.jpg'
  }
];

const difficultyColors = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
  'Advanced': 'bg-red-100 text-red-800'
};

export default function Guides() {
  return (
    <Layout
      title="Guides & Tutorials - Zion Tech Group"
      description="Comprehensive guides and tutorials to help you master our AI and cloud services. From beginner to advanced topics."
      keywords="guides, tutorials, documentation, AI guides, cloud guides, learning resources"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Guides & Tutorials
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Master our platform with comprehensive guides, tutorials, and best practices 
              from beginner to advanced levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#guide-categories"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Browse Guides
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#featured-guides"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-100 font-semibold rounded-lg hover:border-blue-300 hover:text-white transition-all duration-200"
              >
                Featured Content
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guide Categories */}
      <section id="guide-categories" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Guide Categories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Explore our organized collection of guides and tutorials by category.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guideCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <div className="space-y-3">
                  {category.guides.map((guide, guideIndex) => (
                    <div key={guideIndex} className="border-l-4 border-blue-200 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-1">{guide.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{guide.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{guide.readTime}</span>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full ${difficultyColors[guide.difficulty]}`}>
                            {guide.difficulty}
                          </span>
                          <div className="flex items-center">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="ml-1">{guide.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section id="featured-guides" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Guides
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Our most popular and comprehensive guides to help you succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGuides.map((guide, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-blue-600" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                      {guide.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {guide.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{guide.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm text-gray-600">{guide.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${difficultyColors[guide.difficulty]}`}>
                      {guide.difficulty}
                    </span>
                    <Link
                      href={`/guides/${guide.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read Guide
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find the Right Guide
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Search and filter our guides to find exactly what you need.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search guides..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-4">
                  <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Categories</option>
                    <option>Getting Started</option>
                    <option>AI Services</option>
                    <option>Cloud Services</option>
                    <option>Security</option>
                  </select>
                  <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Levels</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors">
                  Most Popular
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                  Recently Updated
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                  Quick Reads
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                  Video Guides
                </button>
              </div>
            </div>
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
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our team is here to help. Contact us for personalized guidance or request a specific guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Browse Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}