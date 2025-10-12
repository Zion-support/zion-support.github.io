import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react'

const TutorialsPage = () => {
  const tutorials = [
    {
      title: 'Getting Started with AI Analytics',
      description: 'Learn how to set up and use our AI analytics platform for your business.',
      duration: '15 min',
      difficulty: 'Beginner',
      category: 'AI Solutions',
      image: '/images/tutorial-1.jpg'
    },
    {
      title: 'Cloud Migration Best Practices',
      description: 'A comprehensive guide to migrating your infrastructure to the cloud.',
      duration: '30 min',
      difficulty: 'Intermediate',
      category: 'Cloud Services',
      image: '/images/tutorial-2.jpg'
    },
    {
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity practices to protect your business.',
      duration: '25 min',
      difficulty: 'Beginner',
      category: 'Cybersecurity',
      image: '/images/tutorial-3.jpg'
    },
    {
      title: 'API Development with Node.js',
      description: 'Build robust APIs using Node.js and modern development practices.',
      duration: '45 min',
      difficulty: 'Advanced',
      category: 'Development',
      image: '/images/tutorial-4.jpg'
    }
  ]

  const categories = ['All', 'AI Solutions', 'Cloud Services', 'Cybersecurity', 'Development', 'DevOps']

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn AI and IT solutions with our comprehensive tutorials. Step-by-step guides for beginners to advanced users." />
      </Helmet>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tutorials
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn AI and IT solutions with our comprehensive tutorials. 
              Step-by-step guides for beginners to advanced users.
            </p>
          </div>

          {/* Categories */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    category === 'All'
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tutorials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800/70 transition-colors">
                <div className="mb-4">
                  <span className="inline-block bg-purple-600 text-white text-sm px-3 py-1 rounded-full mb-4">
                    {tutorial.category}
                  </span>
                  <h2 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {tutorial.title}
                  </h2>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {tutorial.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {tutorial.duration}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    {tutorial.difficulty}
                  </div>
                </div>

                <button className="w-full text-purple-400 hover:text-purple-300 flex items-center justify-center text-sm">
                  Start Tutorial
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Subscribe to our newsletter for the latest tutorials and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TutorialsPage