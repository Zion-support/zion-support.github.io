import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Play, 
  Clock, 
  Star,
  ArrowRight,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const tutorials = [
  {
    title: 'Getting Started with Our Platform',
    description: 'Learn the basics of using our platform in this comprehensive tutorial',
    duration: '15 min',
    difficulty: 'Beginner',
    rating: 4.8,
    type: 'Video',
    thumbnail: '/images/tutorials/getting-started.jpg'
  },
  {
    title: 'API Integration Guide',
    description: 'Step-by-step guide to integrating with our REST API',
    duration: '25 min',
    difficulty: 'Intermediate',
    rating: 4.9,
    type: 'Tutorial',
    thumbnail: '/images/tutorials/api-integration.jpg'
  },
  {
    title: 'AI Services Setup',
    description: 'Configure and deploy AI services for your application',
    duration: '30 min',
    difficulty: 'Advanced',
    rating: 4.7,
    type: 'Video',
    thumbnail: '/images/tutorials/ai-services.jpg'
  },
  {
    title: 'Security Best Practices',
    description: 'Implement security measures and best practices',
    duration: '20 min',
    difficulty: 'Intermediate',
    rating: 4.9,
    type: 'Guide',
    thumbnail: '/images/tutorials/security.jpg'
  },
  {
    title: 'Deployment Strategies',
    description: 'Learn different deployment strategies for your applications',
    duration: '35 min',
    difficulty: 'Advanced',
    rating: 4.6,
    type: 'Video',
    thumbnail: '/images/tutorials/deployment.jpg'
  },
  {
    title: 'Troubleshooting Common Issues',
    description: 'Solutions to common problems and error handling',
    duration: '18 min',
    difficulty: 'Beginner',
    rating: 4.5,
    type: 'Guide',
    thumbnail: '/images/tutorials/troubleshooting.jpg'
  }
];

const categories = [
  { name: 'Getting Started', count: 5, color: 'bg-green-100 text-green-800' },
  { name: 'API Reference', count: 8, color: 'bg-blue-100 text-blue-800' },
  { name: 'AI Services', count: 6, color: 'bg-purple-100 text-purple-800' },
  { name: 'Security', count: 4, color: 'bg-red-100 text-red-800' },
  { name: 'Deployment', count: 3, color: 'bg-orange-100 text-orange-800' },
  { name: 'Troubleshooting', count: 7, color: 'bg-yellow-100 text-yellow-800' }
];

export default function TutorialsPage() {
  return (
    <MainLayout
      title="Tutorials - Zion Tech Group"
      description="Step-by-step tutorials and guides to help you get the most out of our platform. Learn from beginner to advanced topics."
      keywords="tutorials, guides, learning, how-to, step-by-step, video tutorials"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Learn with{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Tutorials
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
                Step-by-step tutorials and guides to help you master our platform. 
                From beginner basics to advanced techniques.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <Link href="#tutorials">
                  <span className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Browse Tutorials
                  </span>
                </Link>
                <Link href="/docs">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
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

        {/* Tutorials Grid */}
        <section id="tutorials" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Featured Tutorials
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn from our comprehensive collection of tutorials designed 
                to help you succeed with our platform.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial, index) => (
                <motion.div
                  key={tutorial.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="aspect-video bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tutorial.type === 'Video' ? 'bg-red-100 text-red-800' :
                        tutorial.type === 'Tutorial' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {tutorial.type}
                      </span>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        {tutorial.rating}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {tutorial.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tutorial.duration}
                      </div>
                      <span className={`px-2 py-1 rounded text-xs ${
                        tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        tutorial.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {tutorial.difficulty}
                      </span>
                    </div>
                    
                    <Link
                      href="/docs"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Start Tutorial
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
                Join thousands of developers who are already using our platform 
                to build amazing applications.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact">
                  <span className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Get Started
                  </span>
                </Link>
                <Link href="/support">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Get Help
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