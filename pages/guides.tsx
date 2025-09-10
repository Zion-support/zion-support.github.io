import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  BookOpen, 
  Clock, 
  User, 
  Star, 
  ArrowRight, 
  Download,
  Code,
  Database,
  Cloud,
  Shield,
  Brain,
  Network,
  Zap,
  Target,
  CheckCircle
} from 'lucide-react';

const GuidesPage = () => {
  const guides = [
    {
      id: 'ai-implementation-guide',
      title: 'Complete AI Implementation Guide',
      description: 'Step-by-step guide to implementing AI solutions in your business, from planning to deployment.',
      category: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-blue-500 to-purple-500',
      readTime: '45 min',
      difficulty: 'Intermediate',
      author: 'Dr. Sarah Johnson',
      rating: 4.9,
      downloads: 1250,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'cloud-migration-handbook',
      title: 'Cloud Migration Handbook',
      description: 'Comprehensive guide to migrating your infrastructure to the cloud with best practices and strategies.',
      category: 'Cloud Computing',
      icon: Cloud,
      color: 'from-green-500 to-blue-500',
      readTime: '60 min',
      difficulty: 'Advanced',
      author: 'Michael Chen',
      rating: 4.8,
      downloads: 980,
      lastUpdated: '2024-01-10'
    },
    {
      id: 'cybersecurity-basics',
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity practices and strategies to protect your business from threats.',
      category: 'Security',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      readTime: '30 min',
      difficulty: 'Beginner',
      author: 'David Kim',
      rating: 4.7,
      downloads: 2100,
      lastUpdated: '2024-01-08'
    },
    {
      id: 'micro-saas-development',
      title: 'Micro SAAS Development Guide',
      description: 'Build and scale micro SAAS applications with modern development practices and tools.',
      category: 'Development',
      icon: Code,
      color: 'from-yellow-500 to-orange-500',
      readTime: '90 min',
      difficulty: 'Advanced',
      author: 'Emily Rodriguez',
      rating: 4.9,
      downloads: 750,
      lastUpdated: '2024-01-12'
    },
    {
      id: 'data-analytics-mastery',
      title: 'Data Analytics Mastery',
      description: 'Master data analytics and business intelligence to drive data-driven decisions.',
      category: 'Data & Analytics',
      icon: Database,
      color: 'from-purple-500 to-indigo-500',
      readTime: '75 min',
      difficulty: 'Intermediate',
      author: 'Alex Thompson',
      rating: 4.6,
      downloads: 1100,
      lastUpdated: '2024-01-05'
    },
    {
      id: 'devops-automation',
      title: 'DevOps Automation Guide',
      description: 'Automate your development and deployment processes with modern DevOps practices.',
      category: 'DevOps',
      icon: Network,
      color: 'from-teal-500 to-cyan-500',
      readTime: '50 min',
      difficulty: 'Intermediate',
      author: 'Sarah Wilson',
      rating: 4.8,
      downloads: 850,
      lastUpdated: '2024-01-03'
    }
  ];

  const categories = [
    { name: 'All', count: guides.length },
    { name: 'AI & Machine Learning', count: guides.filter(g => g.category === 'AI & Machine Learning').length },
    { name: 'Cloud Computing', count: guides.filter(g => g.category === 'Cloud Computing').length },
    { name: 'Security', count: guides.filter(g => g.category === 'Security').length },
    { name: 'Development', count: guides.filter(g => g.category === 'Development').length },
    { name: 'Data & Analytics', count: guides.filter(g => g.category === 'Data & Analytics').length },
    { name: 'DevOps', count: guides.filter(g => g.category === 'DevOps').length }
  ];

  const difficultyColors = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-yellow-100 text-yellow-800',
    'Advanced': 'bg-red-100 text-red-800'
  };

  return (
    <Layout 
      title="Guides & Resources - Zion Tech Group" 
      description="Comprehensive guides and resources for AI, IT, and technology implementation. Learn from our experts."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Guides & Resources
                </h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                  Learn from our experts with comprehensive guides, tutorials, and resources 
                  covering AI, IT, cloud computing, and more.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="flex items-center px-6 py-3 rounded-lg transition-colors bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white"
                >
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-gray-200 text-xs rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${guide.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${guide.color} rounded-lg flex items-center justify-center mr-4`}>
                        <guide.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{guide.title}</h3>
                        <p className="text-sm text-gray-500">{guide.category}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {guide.readTime}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {guide.author}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{guide.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${difficultyColors[guide.difficulty]}`}>
                        {guide.difficulty}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Download className="h-4 w-4 mr-1" />
                        {guide.downloads} downloads
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Updated {guide.lastUpdated}
                      </span>
                      <Link 
                        href={`/guides/${guide.id}`}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        Read Guide
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Custom Guidance?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our experts are ready to provide personalized guidance and support for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Expert Help
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/services" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GuidesPage;