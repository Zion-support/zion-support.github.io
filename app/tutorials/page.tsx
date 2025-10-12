import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Play, Code, Database, Cloud, Brain, Shield, Users, Zap, CheckCircle, Star, Clock, Award } from 'lucide-react'

export default function TutorialsPage() {
  const tutorialCategories = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Learn how to implement AI solutions and machine learning models',
      tutorials: [
        { title: 'Getting Started with AI', duration: '15 min', level: 'Beginner' },
        { title: 'Building Your First Chatbot', duration: '30 min', level: 'Intermediate' },
        { title: 'Advanced ML Model Training', duration: '45 min', level: 'Advanced' }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Master cloud infrastructure and deployment strategies',
      tutorials: [
        { title: 'Cloud Migration Basics', duration: '20 min', level: 'Beginner' },
        { title: 'Container Orchestration', duration: '35 min', level: 'Intermediate' },
        { title: 'Serverless Architecture', duration: '40 min', level: 'Advanced' }
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your applications and data with security best practices',
      tutorials: [
        { title: 'Security Fundamentals', duration: '25 min', level: 'Beginner' },
        { title: 'Threat Detection & Response', duration: '30 min', level: 'Intermediate' },
        { title: 'Advanced Penetration Testing', duration: '50 min', level: 'Advanced' }
      ]
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights and reports',
      tutorials: [
        { title: 'Data Visualization Basics', duration: '20 min', level: 'Beginner' },
        { title: 'Real-time Analytics', duration: '30 min', level: 'Intermediate' },
        { title: 'Big Data Processing', duration: '45 min', level: 'Advanced' }
      ]
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Modern development practices and tools',
      tutorials: [
        { title: 'React Best Practices', duration: '25 min', level: 'Intermediate' },
        { title: 'API Design Patterns', duration: '30 min', level: 'Intermediate' },
        { title: 'Microservices Architecture', duration: '40 min', level: 'Advanced' }
      ]
    },
    {
      icon: Users,
      title: 'Business Intelligence',
      description: 'Drive business decisions with data-driven insights',
      tutorials: [
        { title: 'KPI Dashboard Creation', duration: '20 min', level: 'Beginner' },
        { title: 'Predictive Analytics', duration: '35 min', level: 'Intermediate' },
        { title: 'Advanced Reporting', duration: '40 min', level: 'Advanced' }
      ]
    }
  ];

  const featuredTutorials = [
    {
      title: 'Complete AI Implementation Guide',
      description: 'Step-by-step guide to implementing AI in your business',
      duration: '2 hours',
      level: 'Intermediate',
      rating: 4.9,
      students: 1250,
      thumbnail: '🎯'
    },
    {
      title: 'Cloud Security Masterclass',
      description: 'Comprehensive security strategies for cloud environments',
      duration: '1.5 hours',
      level: 'Advanced',
      rating: 4.8,
      students: 890,
      thumbnail: '🔒'
    },
    {
      title: 'Data Analytics from Zero to Hero',
      description: 'Complete data analytics journey for beginners',
      duration: '3 hours',
      level: 'Beginner',
      rating: 4.9,
      students: 2100,
      thumbnail: '📊'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Tutorials & Learning Resources - Zion Tech Group</title>
        <meta name="description" content="Learn cutting-edge technologies with our comprehensive tutorials. AI, cloud computing, cybersecurity, data analytics, and more." />
        <meta name="keywords" content="tutorials, learning, AI, cloud computing, cybersecurity, data analytics, programming, business intelligence" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Technology</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master cutting-edge technologies with our comprehensive tutorials, guides, and hands-on learning resources. 
              From AI and cloud computing to cybersecurity and data analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Learning
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
              >
                Get Personalized Learning Plan
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Tutorials */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Tutorials</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and highly-rated learning resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTutorials.map((tutorial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="text-6xl mb-4">{tutorial.thumbnail}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">{tutorial.title}</h3>
                <p className="text-gray-300 mb-6">{tutorial.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {tutorial.duration}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    {tutorial.rating}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">{tutorial.level}</span>
                  <span>{tutorial.students} students</span>
                </div>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Tutorial
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tutorial Categories */}
      <div className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Learning Categories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive collection of tutorials organized by technology and skill level
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorialCategories.map((category, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <div className="space-y-3">
                  {category.tutorials.map((tutorial, tutorialIndex) => (
                    <div key={tutorialIndex} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
                      <div>
                        <div className="text-white font-medium">{tutorial.title}</div>
                        <div className="text-sm text-gray-400">{tutorial.duration}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">{tutorial.level}</span>
                        <Play className="w-4 h-4 text-cyan-400" />
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  View All Tutorials
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Paths */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Structured Learning Paths</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Follow our curated learning paths to master specific technologies from beginner to expert level
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">AI & Machine Learning Path</h3>
                  <p className="text-gray-400">From basics to advanced AI implementation</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  <span>AI Fundamentals (5 tutorials)</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  <span>Machine Learning Basics (8 tutorials)</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  <span>Advanced AI Applications (12 tutorials)</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  <span>AI Project Implementation (6 tutorials)</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Cloud Computing Path</h3>
                  <p className="text-gray-400">Master cloud infrastructure and deployment</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                  <span>Cloud Fundamentals (6 tutorials)</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                  <span>Infrastructure as Code (10 tutorials)</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                  <span>Container Orchestration (8 tutorials)</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                  <span>Advanced Cloud Security (7 tutorials)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who have transformed their careers with our comprehensive learning resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/consultation"
              className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
            >
              Free Learning Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}