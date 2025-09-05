import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Play, 
  Download, 
  Clock, 
  User,
  CheckCircle,
  ArrowRight,
  FileText,
  Video,
  Code,
  Settings,
  Lightbulb
} from 'lucide-react';
import Layout from '../components/Layout';

const guideCategories = [
  {
    icon: Code,
    title: 'Development Guides',
    description: 'Step-by-step guides for developers and technical teams',
    color: 'blue',
    guides: [
      {
        title: 'Getting Started with AI APIs',
        description: 'Learn how to integrate our AI services into your applications',
        duration: '15 min read',
        type: 'Tutorial',
        difficulty: 'Beginner'
      },
      {
        title: 'Micro SaaS Development Best Practices',
        description: 'Essential practices for building scalable micro SaaS applications',
        duration: '25 min read',
        type: 'Guide',
        difficulty: 'Intermediate'
      },
      {
        title: 'Cloud Migration Checklist',
        description: 'Complete checklist for migrating your infrastructure to the cloud',
        duration: '20 min read',
        type: 'Checklist',
        difficulty: 'Advanced'
      }
    ]
  },
  {
    icon: Settings,
    title: 'Implementation Guides',
    description: 'Practical guides for implementing our solutions',
    color: 'green',
    guides: [
      {
        title: 'Setting Up Your First AI Model',
        description: 'Complete walkthrough for deploying your first AI model',
        duration: '30 min read',
        type: 'Tutorial',
        difficulty: 'Beginner'
      },
      {
        title: 'DevOps Pipeline Configuration',
        description: 'Configure CI/CD pipelines for your development workflow',
        duration: '35 min read',
        type: 'Guide',
        difficulty: 'Intermediate'
      },
      {
        title: 'Security Hardening Checklist',
        description: 'Essential security measures for protecting your applications',
        duration: '20 min read',
        type: 'Checklist',
        difficulty: 'Advanced'
      }
    ]
  },
  {
    icon: Lightbulb,
    title: 'Best Practices',
    description: 'Industry best practices and optimization tips',
    color: 'purple',
    guides: [
      {
        title: 'AI Model Performance Optimization',
        description: 'Techniques for improving AI model accuracy and speed',
        duration: '25 min read',
        type: 'Guide',
        difficulty: 'Intermediate'
      },
      {
        title: 'Cost Optimization Strategies',
        description: 'Reduce cloud costs while maintaining performance',
        duration: '18 min read',
        type: 'Guide',
        difficulty: 'Beginner'
      },
      {
        title: 'Data Privacy Compliance',
        description: 'Ensure your applications meet privacy regulations',
        duration: '22 min read',
        type: 'Guide',
        difficulty: 'Advanced'
      }
    ]
  }
];

const featuredGuides = [
  {
    title: 'Complete AI Integration Guide',
    description: 'Everything you need to know about integrating AI into your business processes',
    duration: '45 min read',
    type: 'Comprehensive Guide',
    difficulty: 'Intermediate',
    featured: true
  },
  {
    title: 'Micro SaaS Architecture Patterns',
    description: 'Proven architecture patterns for building successful micro SaaS applications',
    duration: '40 min read',
    type: 'Architecture Guide',
    difficulty: 'Advanced',
    featured: true
  },
  {
    title: 'Cloud Security Fundamentals',
    description: 'Essential security concepts and practices for cloud environments',
    duration: '35 min read',
    type: 'Security Guide',
    difficulty: 'Intermediate',
    featured: true
  }
];

const resourceTypes = [
  { icon: FileText, name: 'PDF Guides', count: '25+' },
  { icon: Video, name: 'Video Tutorials', count: '50+' },
  { icon: Code, name: 'Code Examples', count: '100+' },
  { icon: BookOpen, name: 'Documentation', count: '200+' }
];

export default function GuidesPage() {
  return (
    <Layout
      title="Guides & Documentation - Zion Tech Group"
      description="Comprehensive guides, tutorials, and documentation to help you get the most out of our AI and technology solutions."
      keywords="guides, tutorials, documentation, AI guides, development guides, best practices"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6">
                Guides & Documentation
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Comprehensive guides, tutorials, and documentation to help you 
                get the most out of our AI and technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#guides"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Browse Guides
                </a>
                <a
                  href="/docs"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Documentation
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Resource Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Learning Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Access hundreds of guides, tutorials, and documentation to accelerate your learning.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {resourceTypes.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {resource.count}
                  </div>
                  <div className="text-gray-600">
                    {resource.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Guides
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Start with these popular guides to get up and running quickly.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredGuides.map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                      {guide.type}
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                      {guide.difficulty}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {guide.duration}
                    </div>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                    >
                      Read Guide
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Guide Categories */}
        <section id="guides" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find guides organized by topic and skill level to match your needs.
              </p>
            </motion.div>

            <div className="space-y-12">
              {guideCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-6">
                    <div className={`bg-${category.color}-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4`}>
                      <category.icon className={`w-6 h-6 text-${category.color}-600`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {category.title}
                      </h3>
                      <p className="text-gray-600">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {category.guides.map((guide, guideIndex) => (
                      <motion.div
                        key={guideIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * guideIndex }}
                        className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                            {guide.type}
                          </span>
                          <span className={`bg-${category.color}-100 text-${category.color}-800 text-xs font-medium px-2 py-1 rounded-full`}>
                            {guide.difficulty}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {guide.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          {guide.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {guide.duration}
                          </div>
                          <a
                            href="#"
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                          >
                            Read
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </a>
                        </div>
                      </motion.div>
                    ))}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Need Help Getting Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our team of experts is here to help you succeed. Get personalized 
                guidance and support for your projects.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <span>Get Expert Help</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/support"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Contact Support
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}