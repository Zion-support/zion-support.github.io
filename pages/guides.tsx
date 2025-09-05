import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, ArrowRight, CheckCircle, Code, Database, Cloud, Shield } from 'lucide-react';
import Layout from '../components/Layout';

const guides = [
  {
    id: 1,
    title: 'Complete Guide to Web Development',
    description: 'A comprehensive guide covering HTML, CSS, JavaScript, and modern frameworks',
    category: 'Web Development',
    duration: '8 hours',
    difficulty: 'Beginner',
    icon: Code,
    features: ['HTML5 Fundamentals', 'CSS3 Styling', 'JavaScript Basics', 'React Introduction']
  },
  {
    id: 2,
    title: 'Cloud Migration Best Practices',
    description: 'Learn how to successfully migrate your applications to the cloud',
    category: 'Cloud Computing',
    duration: '6 hours',
    difficulty: 'Intermediate',
    icon: Cloud,
    features: ['Migration Planning', 'Security Considerations', 'Cost Optimization', 'Performance Tuning']
  },
  {
    id: 3,
    title: 'AI and Machine Learning Fundamentals',
    description: 'Introduction to AI concepts and practical machine learning applications',
    category: 'Artificial Intelligence',
    duration: '10 hours',
    difficulty: 'Intermediate',
    icon: Database,
    features: ['ML Algorithms', 'Data Preprocessing', 'Model Training', 'Deployment Strategies']
  },
  {
    id: 4,
    title: 'Cybersecurity Essentials',
    description: 'Essential cybersecurity practices for protecting your digital assets',
    category: 'Security',
    duration: '5 hours',
    difficulty: 'Beginner',
    icon: Shield,
    features: ['Threat Assessment', 'Security Policies', 'Incident Response', 'Compliance']
  }
];

export default function GuidesPage() {
  return (
    <Layout
      title="Guides & Tutorials - Zion Tech Group"
      description="Comprehensive guides and tutorials to help you master modern technology and development practices."
      keywords="guides, tutorials, learning, web development, cloud, AI, cybersecurity"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Guides & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Tutorials</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Master modern technology with our comprehensive guides and step-by-step tutorials.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Learning Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our collection of expert-curated guides covering the latest technologies and best practices.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <guide.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {guide.category}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {guide.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {guide.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {guide.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {guide.difficulty}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-gray-900 text-sm">What you'll learn:</h4>
                      <ul className="space-y-1">
                        {guide.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center group">
                      Start Learning
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of developers who are already learning with our comprehensive guides and tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Browse All Guides
                </button>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Get Custom Training
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}