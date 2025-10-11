'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { BookOpen, Play, ArrowRight, Clock, Star } from 'lucide-react'

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: '1',
      title: 'Getting Started with AI',
      description: 'Learn the basics of artificial intelligence and how to implement it in your business.',
      duration: '30 min',
      level: 'Beginner',
      category: 'AI',
      rating: 4.8,
      students: 1250
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Setup',
      description: 'Step-by-step guide to setting up your cloud infrastructure for optimal performance.',
      duration: '45 min',
      level: 'Intermediate',
      category: 'Cloud',
      rating: 4.9,
      students: 890
    },
    {
      id: '3',
      title: 'Cybersecurity Best Practices',
      description: 'Essential security measures to protect your business from cyber threats.',
      duration: '60 min',
      level: 'Advanced',
      category: 'Security',
      rating: 4.7,
      students: 650
    },
    {
      id: '4',
      title: 'Data Analytics Fundamentals',
      description: 'Master the art of data analysis and visualization for better business insights.',
      duration: '40 min',
      level: 'Beginner',
      category: 'Analytics',
      rating: 4.6,
      students: 1100
    },
    {
      id: '5',
      title: 'API Development & Integration',
      description: 'Build and integrate APIs for seamless system communication.',
      duration: '50 min',
      level: 'Intermediate',
      category: 'Development',
      rating: 4.8,
      students: 750
    },
    {
      id: '6',
      title: 'Machine Learning Implementation',
      description: 'Practical guide to implementing machine learning models in production.',
      duration: '75 min',
      level: 'Advanced',
      category: 'AI',
      rating: 4.9,
      students: 420
    }
  ]

  const categories = ['All', 'AI', 'Cloud', 'Security', 'Analytics', 'Development']
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Tutorials</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn how to implement AI and IT solutions with our comprehensive step-by-step guides and hands-on tutorials.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-300 font-medium mr-2">Categories:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-lg font-medium transition-all duration-300 bg-white/10 text-gray-300 hover:bg-cyan-500 hover:text-white"
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-300 font-medium mr-2">Level:</span>
              {levels.map((level) => (
                <button
                  key={level}
                  className="px-4 py-2 rounded-lg font-medium transition-all duration-300 bg-white/10 text-gray-300 hover:bg-cyan-500 hover:text-white"
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400 font-medium text-sm">{tutorial.category}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-gray-300 text-sm">{tutorial.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {tutorial.title}
                </h3>
                <p className="text-gray-300 mb-4">{tutorial.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {tutorial.duration}
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      tutorial.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      tutorial.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {tutorial.level}
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm">{tutorial.students} students</span>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                  <Play className="w-4 h-4 mr-2" />
                  Start Tutorial
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who are already advancing their skills with our tutorials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Browse All Tutorials
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
              Request Custom Tutorial
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TutorialsPage