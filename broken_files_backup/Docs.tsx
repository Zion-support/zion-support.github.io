import React from 'react';
<<<<<<< HEAD:src/components/unused/Docs.tsx
import { Link } from 'react-router-dom';

=======
import { motion } from 'framer-motion';
import {
  BookOpenIcon,
  CodeBracketIcon,
  CommandLineIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/Docs.tsx
const Docs: React.FC = () => {
  const docCategories = [
    {
      title: "Getting Started",
      description: "Quick start guides and basic setup instructions",
      articles: [
        { title: "Installation Guide", description: "Step-by-step installation instructions", readTime: "5 min", difficulty: "Beginner" },
        { title: "First Steps", description: "Create your first project and basic configuration", readTime: "10 min", difficulty: "Beginner" },
        { title: "Quick Start Tutorial", description: "Build your first AI model in minutes", readTime: "15 min", difficulty: "Beginner" }
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Comprehensive guides for AI development and ML workflows",
      articles: [
        { title: "Model Training", description: "Train custom AI models with your data", readTime: "20 min", difficulty: "Intermediate" },
        { title: "Data Preparation", description: "Prepare and format data for training", readTime: "12 min", difficulty: "Intermediate" },
        { title: "Hyperparameter Tuning", description: "Optimize model performance", readTime: "18 min", difficulty: "Advanced" },
        { title: "Model Deployment", description: "Deploy models to production", readTime: "25 min", difficulty: "Advanced" }
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation with examples",
      articles: [
        { title: "Authentication", description: "API keys and authentication methods", readTime: "8 min", difficulty: "Beginner" },
        { title: "Endpoints", description: "All available API endpoints", readTime: "30 min", difficulty: "Intermediate" },
        { title: "Rate Limits", description: "Understanding API rate limits", readTime: "5 min", difficulty: "Beginner" },
        { title: "Error Handling", description: "Common errors and solutions", readTime: "10 min", difficulty: "Intermediate" }
      ]
    },
    {
      title: "Security & Compliance",
      description: "Security best practices and compliance guidelines",
      articles: [
        { title: "Data Security", description: "Protect your data and models", readTime: "15 min", difficulty: "Intermediate" },
        { title: "Access Control", description: "Manage user permissions and roles", readTime: "12 min", difficulty: "Intermediate" },
        { title: "SOC2 Compliance", description: "Meet compliance requirements", readTime: "20 min", difficulty: "Advanced" },
        { title: "Audit Logging", description: "Track and monitor system access", readTime: "10 min", difficulty: "Intermediate" }
      ]
    }
  ];
<<<<<<< HEAD:src/components/unused/Docs.tsx

  const popularDocs = [
=======
  const apiReference = [
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/Docs.tsx
    {
      title: "Building Your First AI Model",
      category: "AI & Machine Learning",
      readTime: "15 min",
      views: "2.1k",
      lastUpdated: "2 days ago"
    },
    {
      title: "API Integration Best Practices",
      category: "API Reference",
      readTime: "12 min",
      views: "1.8k",
      lastUpdated: "1 week ago"
    },
    {
      title: "Security Configuration Guide",
      category: "Security & Compliance",
      readTime: "18 min",
      views: "1.5k",
      lastUpdated: "3 days ago"
    },
    {
<<<<<<< HEAD:src/components/unused/Docs.tsx
      title: "Performance Optimization Tips",
      category: "AI & Machine Learning",
      readTime: "22 min",
      views: "1.3k",
      lastUpdated: "5 days ago"
=======
      name: 'Analytics API',
      description: 'Business intelligence and analytics endpoints',
      version: 'v1.8',
      status: 'Stable'
    }
  ];
  const tutorials = [
    {
      title: 'Building Your First AI Chatbot',
      description: 'Create a conversational AI chatbot using our platform',
      category: 'AI Development',
      duration: '45 min',
      level: 'Beginner'
    },
    {
      title: 'Implementing Quantum Algorithms',
      description: 'Learn to use quantum computing capabilities in your applications',
      category: 'Quantum Computing',
      duration: '60 min',
      level: 'Advanced'
    },
    {
      title: 'Cybersecurity Implementation',
      description: 'Secure your applications with our cybersecurity solutions',
      category: 'Security',
      duration: '30 min',
      level: 'Intermediate'
    },
    {
      title: 'Data Pipeline Automation',
      description: 'Automate data workflows and ETL processes',
      category: 'Data Engineering',
      duration: '40 min',
      level: 'Intermediate'
    }
  ];
  const sdkLibraries = [
    {
      name: 'Python SDK',
      description: 'Official Python client library for our APIs',
      version: '2.1.0',
      downloads: '15.2k',
      language: 'Python'
    },
    {
      name: 'JavaScript SDK',
      description: 'Node.js and browser-compatible JavaScript library',
      version: '1.8.3',
      downloads: '23.7k',
      language: 'JavaScript'
    },
    {
      name: 'Java SDK',
      description: 'Enterprise-grade Java client library',
      version: '2.0.1',
      downloads: '8.9k',
      language: 'Java'
    },
    {
      name: 'Go SDK',
      description: 'High-performance Go client library',
      version: '1.5.2',
      downloads: '5.4k',
      language: 'Go'
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/Docs.tsx
    }
  ];
  return (
<<<<<<< HEAD:src/components/unused/Docs.tsx
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Documentation
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Center
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive documentation, guides, and references to help you 
              build, deploy, and manage AI solutions with Zion Tech Group
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation, guides, or examples..."
                className="w-full pl-6 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                Search
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Documentation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive guides, API references, and tutorials to help you integrate
            and build with Zion Tech Group's cutting-edge solutions.
          </motion.p>
        </div>
      </div>
      {/* Search Bar */}
      <div className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
            />
          </motion.div>
        </div>
      </div>
      {/* Quick Start Guides */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Quick Start Guides
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickStartGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <guide.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      guide.difficulty === 'Beginner'
                        ? 'bg-green-500/20 text-green-400'
                        : guide.difficulty === 'Intermediate'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {guide.difficulty}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-200">
                  {guide.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {guide.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{guide.time}</span>
                </div>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Start Learning</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* API Reference */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            API Reference
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apiReference.map((api, index) => (
              <motion.div
                key={api.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{api.name}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    api.status === 'Stable'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {api.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {api.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>Version: {api.version}</span>
                </div>
                <button className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>View API Docs</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Tutorials */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Step-by-Step Tutorials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tutorials.map((tutorial, index) => (
              <motion.div
                key={tutorial.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    tutorial.level === 'Beginner'
                      ? 'bg-green-500/20 text-green-400'
                      : tutorial.level === 'Intermediate'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {tutorial.level}
                  </span>
                  <span className="text-sm text-gray-400">{tutorial.duration}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {tutorial.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {tutorial.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                    {tutorial.category}
                  </span>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                    <span>Start Tutorial</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* SDK Libraries */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            SDK Libraries
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sdkLibraries.map((sdk, index) => (
              <motion.div
                key={sdk.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CodeBracketIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{sdk.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {sdk.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-xs text-gray-400">
                    <span className="text-purple-400">Version:</span> {sdk.version}
                  </div>
                  <div className="text-xs text-gray-400">
                    <span className="text-purple-400">Downloads:</span> {sdk.downloads}
                  </div>
                  <div className="text-xs text-gray-400">
                    <span className="text-purple-400">Language:</span> {sdk.language}
                  </div>
                </div>
                <button className="w-full px-3 py-2 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 text-sm">
                  View Documentation
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Additional Resources */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <BookOpenIcon className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                Need More Help?
              </h2>
            </div>
            <p className="text-gray-300 mb-8 text-lg">
              Can't find what you're looking for? Our comprehensive documentation
              covers everything from basic concepts to advanced implementations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Browse Full Docs
              </button>
              <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300">
                Contact Support
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/Docs.tsx
              </button>
            </div>
          </div>
          
          {/* Documentation Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Browse Documentation</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {docCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <div className="space-y-4">
                    {category.articles.map((article, idx) => (
                      <div key={idx} className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-white font-medium">{article.title}</h4>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                            article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                            'bg-red-500/20 text-red-300 border border-red-500/30'
                          }`}>
                            {article.difficulty}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-2">{article.description}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{article.readTime} read</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Popular Documentation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularDocs.map((doc, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                      {doc.category}
                    </span>
                    <span className="text-xs text-gray-500">{doc.lastUpdated}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">{doc.title}</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{doc.readTime}</span>
                      <span>{doc.views} views</span>
                    </div>
                    <span className="text-blue-400 text-sm">Read Guide →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/tutorials"
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Video Tutorials</h3>
                <p className="text-gray-300 text-sm">Step-by-step video guides for visual learners</p>
              </Link>
              
              <Link
                to="/help-center"
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❓</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Help Center</h3>
                <p className="text-gray-300 text-sm">Find answers to common questions and issues</p>
              </Link>
              
              <Link
                to="/support"
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🆘</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Technical Support</h3>
                <p className="text-gray-300 text-sm">Get help from our expert support team</p>
              </Link>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Need More Help?</h3>
              <p className="text-gray-300 mb-6">
                Can't find what you're looking for? Our documentation team is constantly 
                updating and improving our guides. Let us know what you need!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Request Documentation
                </Link>
                <Link
                  to="/support"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Docs;