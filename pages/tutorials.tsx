import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { 
  BookOpen, 
  ArrowRight,
  Play,
  Clock,
  User,
  Star,
  CheckCircle,
  Video,
  FileText,
  Code,
  Settings,
  Globe,
  Zap
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const tutorialCategories = [
  {
    title: "Getting Started",
    description: "Begin your journey with our platform",
    icon: Play,
    color: "blue",
    tutorials: [
      {
        title: "Quick Start Guide",
        description: "Get up and running in 5 minutes",
        duration: "5 min",
        difficulty: "Beginner",
        type: "Video",
        rating: 4.8
      },
      {
        title: "Platform Overview",
        description: "Understanding the main features",
        duration: "10 min",
        difficulty: "Beginner",
        type: "Video",
        rating: 4.7
      },
      {
        title: "First Project Setup",
        description: "Create your first project",
        duration: "15 min",
        difficulty: "Beginner",
        type: "Tutorial",
        rating: 4.9
      }
    ]
  },
  {
    title: "API Integration",
    description: "Learn to integrate with our APIs",
    icon: Code,
    color: "green",
    tutorials: [
      {
        title: "Authentication Setup",
        description: "Set up API authentication",
        duration: "20 min",
        difficulty: "Intermediate",
        type: "Tutorial",
        rating: 4.6
      },
      {
        title: "REST API Basics",
        description: "Making your first API calls",
        duration: "25 min",
        difficulty: "Intermediate",
        type: "Video",
        rating: 4.8
      },
      {
        title: "Webhook Configuration",
        description: "Setting up real-time notifications",
        duration: "30 min",
        difficulty: "Advanced",
        type: "Tutorial",
        rating: 4.7
      }
    ]
  },
  {
    title: "AI Services",
    description: "Master our AI and machine learning features",
    icon: Zap,
    color: "purple",
    tutorials: [
      {
        title: "AI Model Training",
        description: "Train your first AI model",
        duration: "45 min",
        difficulty: "Advanced",
        type: "Video",
        rating: 4.9
      },
      {
        title: "Natural Language Processing",
        description: "Implement NLP solutions",
        duration: "35 min",
        difficulty: "Advanced",
        type: "Tutorial",
        rating: 4.8
      },
      {
        title: "Computer Vision Basics",
        description: "Image recognition and analysis",
        duration: "40 min",
        difficulty: "Advanced",
        type: "Video",
        rating: 4.7
      }
    ]
  },
  {
    title: "Cloud Services",
    description: "Deploy and manage cloud infrastructure",
    icon: Globe,
    color: "orange",
    tutorials: [
      {
        title: "Cloud Deployment",
        description: "Deploy to AWS, Azure, or GCP",
        duration: "30 min",
        difficulty: "Intermediate",
        type: "Tutorial",
        rating: 4.6
      },
      {
        title: "Container Orchestration",
        description: "Using Docker and Kubernetes",
        duration: "50 min",
        difficulty: "Advanced",
        type: "Video",
        rating: 4.8
      },
      {
        title: "Monitoring & Logging",
        description: "Set up monitoring and alerts",
        duration: "25 min",
        difficulty: "Intermediate",
        type: "Tutorial",
        rating: 4.7
      }
    ]
  }
];

const featuredTutorials = [
  {
    title: "Complete Platform Walkthrough",
    description: "A comprehensive guide covering all major features and capabilities",
    duration: "60 min",
    difficulty: "All Levels",
    type: "Video Series",
    rating: 4.9,
    views: 1250,
    featured: true
  },
  {
    title: "Building Your First AI Application",
    description: "Step-by-step guide to creating an AI-powered application",
    duration: "90 min",
    difficulty: "Intermediate",
    type: "Tutorial",
    rating: 4.8,
    views: 980,
    featured: true
  },
  {
    title: "Enterprise Security Best Practices",
    description: "Implementing security measures for enterprise applications",
    duration: "45 min",
    difficulty: "Advanced",
    type: "Video",
    rating: 4.7,
    views: 750,
    featured: true
  }
];

const difficultyLevels = [
  { name: "Beginner", color: "green", description: "No prior experience required" },
  { name: "Intermediate", color: "yellow", description: "Some technical knowledge helpful" },
  { name: "Advanced", color: "red", description: "Strong technical background required" }
];

export default function TutorialsPage() {
  return (
    <MainLayout 
      title="Tutorials - Zion Tech Group"
      description="Step-by-step tutorials and video guides to help you master Zion Tech Group's platform and services."
      keywords="tutorials, video guides, learning, documentation, how-to, step-by-step, training"
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
                Tutorials & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Guides</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Learn to master our platform with step-by-step tutorials, video guides, and hands-on examples. 
                From beginner basics to advanced techniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#tutorials"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Browse Tutorials
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

        {/* Featured Tutorials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Featured Tutorials
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular and highly-rated tutorials to get you started.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredTutorials.map((tutorial, index) => (
                <motion.div
                  key={tutorial.title}
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
                      {tutorial.rating}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{tutorial.views} views</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' :
                      tutorial.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-red-100 text-red-600'
                    }`}>
                      {tutorial.difficulty}
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs font-medium">
                      {tutorial.type}
                    </span>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Start Tutorial
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorial Categories */}
        <section id="tutorials" className="py-20 bg-gray-50">
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
                Find tutorials organized by topic and skill level.
              </p>
            </motion.div>

            <div className="space-y-12">
              {tutorialCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
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
                    {category.tutorials.map((tutorial, tutorialIndex) => (
                      <div key={tutorialIndex} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' :
                            tutorial.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                            'bg-red-100 text-red-600'
                          }`}>
                            {tutorial.difficulty}
                          </span>
                          <div className="flex items-center text-sm text-gray-500">
                            <Star className="w-3 h-3 text-yellow-400 mr-1" />
                            {tutorial.rating}
                          </div>
                        </div>
                        
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {tutorial.title}
                        </h4>
                        
                        <p className="text-gray-600 text-sm mb-3">
                          {tutorial.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{tutorial.duration}</span>
                          </div>
                          <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">
                            {tutorial.type}
                          </span>
                        </div>
                        
                        <button className="w-full text-blue-600 hover:text-blue-700 font-medium text-sm">
                          Start Tutorial →
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Difficulty Levels */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Choose Your Level
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find tutorials that match your experience level.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {difficultyLevels.map((level, index) => (
                <motion.div
                  key={level.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-${level.color}-100 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <CheckCircle className={`w-8 h-8 text-${level.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {level.name}
                  </h3>
                  <p className="text-gray-600">
                    {level.description}
                  </p>
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
                Ready to Learn?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Start with our beginner tutorials or jump into advanced topics. 
                Our comprehensive learning resources will help you master our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#tutorials"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Start Learning
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/support"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Get Help
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
=======

export default function Tutorials() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Leading AI & Technology Solutions" />
        <meta name="keywords" content="technology,AI,cloud,micro SaaS" />
      </Head>
      
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
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tutorials
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              This page is currently under development. Please check back soon for updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Started Today
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16" 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This page is currently under development. Please check back soon for updates.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-cac2
  );
}