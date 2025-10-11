'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { BookOpen, Play, ArrowRight, Clock, Star, Users, CheckCircle, Brain, Code, Shield, Cloud, Database, Smartphone, Globe, Zap, Target, Award, TrendingUp, MessageSquare, Phone, Mail, MapPin } from 'lucide-react'

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: '1',
      title: 'Getting Started with AI',
      description: 'Learn the basics of artificial intelligence and how to implement it in your business.',
      duration: '30 min',
      level: 'Beginner',
      category: 'AI',
      featured: true,
      icon: Brain
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Setup',
      description: 'Step-by-step guide to setting up your cloud infrastructure for optimal performance.',
      duration: '45 min',
      level: 'Intermediate',
      category: 'Cloud',
      featured: true,
      icon: Cloud
    },
    {
      id: '3',
      title: 'Cybersecurity Best Practices',
      description: 'Essential security measures to protect your business from cyber threats.',
      duration: '60 min',
      level: 'Advanced',
      category: 'Security',
      featured: false,
      icon: Shield
    },
    {
      id: '4',
      title: 'API Development Fundamentals',
      description: 'Learn how to build robust and secure APIs for your applications.',
      duration: '40 min',
      level: 'Intermediate',
      category: 'Development',
      featured: true,
      icon: Code
    },
    {
      id: '5',
      title: 'Database Optimization',
      description: 'Techniques to optimize your database performance and scalability.',
      duration: '35 min',
      level: 'Intermediate',
      category: 'Database',
      featured: false,
      icon: Database
    },
    {
      id: '6',
      title: 'Mobile App Development',
      description: 'Complete guide to building cross-platform mobile applications.',
      duration: '90 min',
      level: 'Advanced',
      category: 'Mobile',
      featured: true,
      icon: Smartphone
    },
    {
      id: '7',
      title: 'Web Performance Optimization',
      description: 'Learn how to make your websites faster and more efficient.',
      duration: '50 min',
      level: 'Intermediate',
      category: 'Web',
      featured: false,
      icon: Globe
    },
    {
      id: '8',
      title: 'AI Chatbot Implementation',
      description: 'Build and deploy intelligent chatbots for customer service.',
      duration: '70 min',
      level: 'Advanced',
      category: 'AI',
      featured: true,
      icon: MessageSquare
    }
  ]

  const categories = ['All', 'AI', 'Cloud', 'Security', 'Development', 'Database', 'Mobile', 'Web']
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

  const featuredTutorials = tutorials.filter(tutorial => tutorial.featured)
  const regularTutorials = tutorials.filter(tutorial => !tutorial.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain particle-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 glow-cyan">
              <BookOpen className="w-4 h-4 mr-2" />
              Learning Center
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 neon-text-enhanced">
              Master <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Learn how to implement AI and IT solutions with our comprehensive step-by-step guides. 
              From beginner to advanced, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              Featured <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Tutorials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and comprehensive tutorials to get you started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTutorials.map((tutorial, index) => (
              <div key={tutorial.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-500/50 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <tutorial.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {tutorial.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {tutorial.description}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{tutorial.level}</span>
                    </div>
                  </div>
                  <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {tutorial.category}
                  </span>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Play className="w-4 h-4 mr-2" />
                  Start Learning
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Tutorials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              All <span className="bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">Tutorials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete library of tutorials organized by category and difficulty level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularTutorials.map((tutorial, index) => (
              <div key={tutorial.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/50 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <tutorial.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {tutorial.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {tutorial.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {tutorial.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>{tutorial.level}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-sm">
                  <Play className="w-3 h-3 mr-2" />
                  Start Tutorial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
            Ready to Start <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Learning?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who have mastered AI and IT technologies with our comprehensive tutorials.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Browse All Tutorials
            </button>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center glow-cyan"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TutorialsPage