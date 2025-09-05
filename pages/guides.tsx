import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  Clock, 
  Star,
  ArrowRight,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const guides = [
  {
    title: 'Complete Setup Guide',
    description: 'Everything you need to know to get started with our platform',
    readTime: '15 min',
    difficulty: 'Beginner',
    rating: 4.8,
    category: 'Getting Started',
    steps: 12
  },
  {
    title: 'API Authentication Guide',
    description: 'Learn how to authenticate with our API securely',
    readTime: '20 min',
    difficulty: 'Intermediate',
    rating: 4.9,
    category: 'API',
    steps: 8
  },
  {
    title: 'AI Model Integration',
    description: 'Integrate AI models into your applications',
    readTime: '25 min',
    difficulty: 'Advanced',
    rating: 4.7,
    category: 'AI Services',
    steps: 15
  },
  {
    title: 'Security Implementation',
    description: 'Implement security best practices in your applications',
    readTime: '18 min',
    difficulty: 'Intermediate',
    rating: 4.9,
    category: 'Security',
    steps: 10
  },
  {
    title: 'Performance Optimization',
    description: 'Optimize your applications for better performance',
    readTime: '22 min',
    difficulty: 'Advanced',
    rating: 4.6,
    category: 'Performance',
    steps: 14
  },
  {
    title: 'Troubleshooting Guide',
    description: 'Common issues and their solutions',
    readTime: '12 min',
    difficulty: 'Beginner',
    rating: 4.5,
    category: 'Support',
    steps: 6
  }
];

const categories = [
  { name: 'Getting Started', count: 8, color: 'bg-green-100 text-green-800' },
  { name: 'API', count: 12, color: 'bg-blue-100 text-blue-800' },
  { name: 'AI Services', count: 6, color: 'bg-purple-100 text-purple-800' },
  { name: 'Security', count: 5, color: 'bg-red-100 text-red-800' },
  { name: 'Performance', count: 4, color: 'bg-orange-100 text-orange-800' },
  { name: 'Support', count: 7, color: 'bg-yellow-100 text-yellow-800' }
];

export default function GuidesPage() {
  return (
    <MainLayout
      title="Guides - Zion Tech Group"
      description="Comprehensive guides and how-to articles to help you master our platform. Step-by-step instructions for every feature."
      keywords="guides, how-to, documentation, tutorials, step-by-step, instructions"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Comprehensive{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Guides
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
                Step-by-step guides and how-to articles to help you master our platform. 
                Learn everything from basic setup to advanced features.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <Link href="#guides">
                  <span className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Browse Guides
                  </span>
                </Link>
                <Link href="/docs">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    View Documentation
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Browse by Category
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category, index) => (
                  <button
                    key={category.name}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category.color} hover:opacity-80`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section id="guides" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Featured Guides
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive guides covering all aspects of our platform. 
                From basic concepts to advanced implementations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        guide.category === 'Getting Started' ? 'bg-green-100 text-green-800' :
                        guide.category === 'API' ? 'bg-blue-100 text-blue-800' :
                        guide.category === 'AI Services' ? 'bg-purple-100 text-purple-800' :
                        guide.category === 'Security' ? 'bg-red-100 text-red-800' :
                        guide.category === 'Performance' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {guide.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        {guide.rating}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {guide.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {guide.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {guide.readTime}
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        {guide.steps} steps
                      </div>
                      <span className={`px-2 py-1 rounded text-xs ${
                        guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {guide.difficulty}
                      </span>
                    </div>
                    
                    <Link
                      href="/docs"
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Read Guide
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need More Help?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-green-100">
                Can't find what you're looking for? Our support team is here to help 
                you succeed with our platform.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/support">
                  <span className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Contact Support
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Get in Touch
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}