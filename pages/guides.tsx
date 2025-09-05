import React from 'react';
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
  Zap
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const guideCategories = [
  {
    title: "Getting Started",
    description: "Essential guides to help you get up and running quickly",
    icon: BookOpen,
    color: "blue",
    guides: [
      {
        title: "Platform Setup Guide",
        description: "Complete setup instructions for new users",
        duration: "15 min",
        difficulty: "Beginner",
        type: "Guide",
        rating: 4.8,
        downloads: 1250
      },
      {
        title: "First Project Walkthrough",
        description: "Step-by-step guide to creating your first project",
        duration: "20 min",
        difficulty: "Beginner",
        type: "Tutorial",
        rating: 4.9,
        downloads: 980
      },
      {
        title: "Account Configuration",
        description: "Setting up your account and preferences",
        duration: "10 min",
        difficulty: "Beginner",
        type: "Guide",
        rating: 4.7,
        downloads: 750
      }
    ]
  },
  {
    title: "API & Integration",
    description: "Comprehensive guides for API usage and integrations",
    icon: Settings,
    color: "green",
    guides: [
      {
        title: "API Authentication Guide",
        description: "Complete guide to API authentication methods",
        duration: "25 min",
        difficulty: "Intermediate",
        type: "Guide",
        rating: 4.6,
        downloads: 850
      },
      {
        title: "Webhook Implementation",
        description: "Setting up and managing webhooks",
        duration: "30 min",
        difficulty: "Intermediate",
        type: "Tutorial",
        rating: 4.8,
        downloads: 650
      },
      {
        title: "SDK Integration Guide",
        description: "Using our official SDKs in your applications",
        duration: "35 min",
        difficulty: "Advanced",
        type: "Guide",
        rating: 4.7,
        downloads: 420
      }
    ]
  },
  {
    title: "Security & Compliance",
    description: "Security best practices and compliance guidelines",
    icon: Shield,
    color: "red",
    guides: [
      {
        title: "Security Best Practices",
        description: "Essential security measures for your applications",
        duration: "40 min",
        difficulty: "Advanced",
        type: "Guide",
        rating: 4.9,
        downloads: 680
      },
      {
        title: "Data Privacy Compliance",
        description: "GDPR, CCPA, and other privacy regulations",
        duration: "45 min",
        difficulty: "Advanced",
        type: "Guide",
        rating: 4.8,
        downloads: 520
      },
      {
        title: "Access Control Setup",
        description: "Implementing proper access controls",
        duration: "30 min",
        difficulty: "Intermediate",
        type: "Tutorial",
        rating: 4.7,
        downloads: 380
      }
    ]
  },
  {
    title: "Deployment & Operations",
    description: "Deployment guides and operational best practices",
    icon: Globe,
    color: "purple",
    guides: [
      {
        title: "Production Deployment",
        description: "Deploying applications to production environments",
        duration: "50 min",
        difficulty: "Advanced",
        type: "Guide",
        rating: 4.8,
        downloads: 720
      },
      {
        title: "Monitoring & Alerting",
        description: "Setting up comprehensive monitoring",
        duration: "35 min",
        difficulty: "Intermediate",
        type: "Tutorial",
        rating: 4.6,
        downloads: 450
      },
      {
        title: "Scaling Applications",
        description: "Best practices for scaling your applications",
        duration: "40 min",
        difficulty: "Advanced",
        type: "Guide",
        rating: 4.7,
        downloads: 380
      }
    ]
  }
];

const featuredGuides = [
  {
    title: "Complete Platform Guide",
    description: "The definitive guide to using all platform features",
    duration: "120 min",
    difficulty: "All Levels",
    type: "Comprehensive Guide",
    rating: 4.9,
    downloads: 2500,
    featured: true
  },
  {
    title: "Enterprise Implementation",
    description: "Best practices for enterprise deployments",
    duration: "90 min",
    difficulty: "Advanced",
    type: "Guide",
    rating: 4.8,
    downloads: 1200,
    featured: true
  },
  {
    title: "Troubleshooting Handbook",
    description: "Common issues and their solutions",
    duration: "60 min",
    difficulty: "All Levels",
    type: "Reference Guide",
    rating: 4.7,
    downloads: 1800,
    featured: true
  }
];

const searchFilters = [
  "All Guides",
  "Getting Started",
  "API & Integration",
  "Security & Compliance",
  "Deployment & Operations"
];

export default function GuidesPage() {
  return (
    <MainLayout 
      title="Guides - Zion Tech Group"
      description="Comprehensive guides and documentation to help you master Zion Tech Group's platform and services."
      keywords="guides, documentation, how-to, tutorials, best practices, implementation guides"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                User <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Guides</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive guides and documentation to help you master our platform. 
                From basic setup to advanced implementation strategies.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search guides..."
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#guides"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Browse Guides
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/docs"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  View Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Guides */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Featured Guides
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular and comprehensive guides to get you started.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredGuides.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded text-sm font-medium">
                      Featured
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {guide.rating}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {guide.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {guide.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{guide.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      <span>{guide.downloads} downloads</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' :
                      guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                      guide.difficulty === 'All Levels' ? 'bg-blue-100 text-blue-600' :
                      'bg-red-100 text-red-600'
                    }`}>
                      {guide.difficulty}
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs font-medium">
                      {guide.type}
                    </span>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download Guide
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {searchFilters.map((filter, index) => (
                <motion.button
                  key={filter}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    filter === 'All Guides'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-blue-50'
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Guide Categories */}
        <section id="guides" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find guides organized by topic and complexity level.
              </p>
            </motion.div>

            <div className="space-y-12">
              {guideCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-gray-50 rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-${category.color}-100 rounded-lg flex items-center justify-center mr-4`}>
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.guides.map((guide, guideIndex) => (
                      <div key={guideIndex} className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' :
                            guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                            'bg-red-100 text-red-600'
                          }`}>
                            {guide.difficulty}
                          </span>
                          <div className="flex items-center text-sm text-gray-500">
                            <Star className="w-3 h-3 text-yellow-400 mr-1" />
                            {guide.rating}
                          </div>
                        </div>
                        
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {guide.title}
                        </h4>
                        
                        <p className="text-gray-600 text-sm mb-3">
                          {guide.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{guide.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Download className="w-3 h-3 mr-1" />
                            <span>{guide.downloads}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">
                            {guide.type}
                          </span>
                          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center">
                            Download
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </button>
                        </div>
                      </div>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Need More Help?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you with any questions or custom guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/support"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Contact Support
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Request Custom Guide
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}