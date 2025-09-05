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
  Zap
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const guideCategories = [
  {
    title: "Getting Started",
    description: "Quick start guides and basic setup instructions",
    icon: BookOpen,
    color: "blue",
    guides: [
      { title: "Quick Start Guide", description: "Get up and running in 5 minutes", duration: "5 min", difficulty: "Beginner", rating: 4.8 },
      { title: "Installation Guide", description: "Step-by-step installation instructions", duration: "15 min", difficulty: "Beginner", rating: 4.6 },
      { title: "Configuration", description: "Basic configuration and setup", duration: "10 min", difficulty: "Intermediate", rating: 4.7 }
    ]
  },
  {
    title: "API Integration",
    description: "Step-by-step integration tutorials",
    icon: Settings,
    color: "green",
    guides: [
      { title: "REST API Integration", description: "Integrate using our REST API", duration: "30 min", difficulty: "Intermediate", rating: 4.9 },
      { title: "SDK Integration", description: "Use our official SDKs", duration: "20 min", difficulty: "Beginner", rating: 4.8 },
      { title: "Webhook Setup", description: "Configure webhooks for real-time updates", duration: "25 min", difficulty: "Advanced", rating: 4.7 }
    ]
  },
  {
    title: "User Management",
    description: "User guides and management tutorials",
    icon: User,
    color: "purple",
    guides: [
      { title: "User Dashboard", description: "Navigate and use the main dashboard", duration: "10 min", difficulty: "Beginner", rating: 4.5 },
      { title: "User Permissions", description: "Manage users and permissions", duration: "15 min", difficulty: "Intermediate", rating: 4.6 },
      { title: "Team Collaboration", description: "Set up team collaboration features", duration: "20 min", difficulty: "Intermediate", rating: 4.8 }
    ]
  },
  {
    title: "Security",
    description: "Security best practices and implementation",
    icon: Shield,
    color: "red",
    guides: [
      { title: "Security Setup", description: "Configure security settings", duration: "25 min", difficulty: "Advanced", rating: 4.9 },
      { title: "Authentication", description: "Set up authentication methods", duration: "20 min", difficulty: "Intermediate", rating: 4.7 },
      { title: "Data Protection", description: "Protect sensitive data", duration: "30 min", difficulty: "Advanced", rating: 4.8 }
    ]
  },
  {
    title: "Deployment",
    description: "Deployment guides and best practices",
    icon: Globe,
    color: "indigo",
    guides: [
      { title: "Cloud Deployment", description: "Deploy to AWS, Azure, or GCP", duration: "45 min", difficulty: "Advanced", rating: 4.6 },
      { title: "Docker Deployment", description: "Container-based deployment", duration: "30 min", difficulty: "Intermediate", rating: 4.7 },
      { title: "Production Setup", description: "Production environment configuration", duration: "60 min", difficulty: "Advanced", rating: 4.8 }
    ]
  },
  {
    title: "Troubleshooting",
    description: "Common issues and solutions",
    icon: Zap,
    color: "orange",
    guides: [
      { title: "Common Issues", description: "Frequently encountered problems", duration: "15 min", difficulty: "Beginner", rating: 4.5 },
      { title: "Performance Issues", description: "Troubleshoot performance problems", duration: "25 min", difficulty: "Intermediate", rating: 4.6 },
      { title: "Error Resolution", description: "Resolve common errors", duration: "20 min", difficulty: "Intermediate", rating: 4.7 }
    ]
  }
];

const popularGuides = [
  {
    title: "Quick Start Guide",
    description: "Get up and running in 5 minutes",
    category: "Getting Started",
    duration: "5 min",
    difficulty: "Beginner",
    rating: 4.8,
    views: 1250
  },
  {
    title: "REST API Integration",
    description: "Step-by-step integration tutorial",
    category: "API Integration",
    duration: "30 min",
    difficulty: "Intermediate",
    rating: 4.9,
    views: 980
  },
  {
    title: "Cloud Deployment",
    description: "Deploy to major cloud providers",
    category: "Deployment",
    duration: "45 min",
    difficulty: "Advanced",
    rating: 4.6,
    views: 720
  },
  {
    title: "Security Setup",
    description: "Configure security settings",
    category: "Security",
    duration: "25 min",
    difficulty: "Advanced",
    rating: 4.9,
    views: 650
  }
];

const difficultyColors = {
  Beginner: "bg-green-100 text-green-800",
  Intermediate: "bg-yellow-100 text-yellow-800",
  Advanced: "bg-red-100 text-red-800"
};

export default function Guides() {
  return (
    <MainLayout>
      <div className="min-h-screen">
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
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Guides</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Step-by-step guides to help you master our products and services. 
                From quick start tutorials to advanced deployment strategies.
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
                  href="#getting-started"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Browse Guides
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  Get Help
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Popular Guides */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Popular Guides
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Most viewed and highly rated guides to help you get started quickly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularGuides.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600">
                      {guide.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {guide.rating}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {guide.duration}
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[guide.difficulty]}`}>
                      {guide.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{guide.views} views</span>
                    <Link
                      href="#"
                      className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                    >
                      Read Guide
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Guide Categories */}
        <section id="getting-started" className="py-20 bg-gray-50">
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
                Find the guides you need organized by category and topic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guideCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-${category.color}-100 rounded-lg flex items-center justify-center mr-4`}>
                        <category.icon className={`w-6 h-6 text-${category.color}-600`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {category.guides.map((guide, guideIndex) => (
                        <div key={guideIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm">
                              {guide.title}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {guide.description}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[guide.difficulty]}`}>
                              {guide.difficulty}
                            </span>
                            <Link
                              href="#"
                              className="text-blue-600 hover:text-blue-700"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <Link
                        href="#"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
                      >
                        View All {category.title}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
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
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Contact Support
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/support"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Visit Support Center
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}