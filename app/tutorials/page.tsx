'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { BookOpen, Play, ArrowRight, Clock, Users, Star } from 'lucide-react'

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI',
      description: 'Learn the fundamentals of artificial intelligence and machine learning concepts.',
      level: 'Beginner',
      duration: '2 hours',
      category: 'AI Fundamentals',
      rating: 4.8,
      students: 1250
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Setup',
      description: 'Complete guide to setting up and managing cloud infrastructure for your business.',
      level: 'Intermediate',
      duration: '4 hours',
      category: 'Cloud Computing',
      rating: 4.9,
      students: 890
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity practices to protect your business from threats.',
      level: 'Advanced',
      duration: '3 hours',
      category: 'Security',
      rating: 4.7,
      students: 650
    },
    {
      id: 4,
      title: 'Data Analytics with Python',
      description: 'Learn data analysis and visualization using Python and popular libraries.',
      level: 'Intermediate',
      duration: '5 hours',
      category: 'Data Science',
      rating: 4.8,
      students: 1100
    },
    {
      id: 5,
      title: 'API Development',
      description: 'Build robust and scalable APIs using modern development practices.',
      level: 'Advanced',
      duration: '6 hours',
      category: 'Development',
      rating: 4.9,
      students: 750
    },
    {
      id: 6,
      title: 'DevOps Fundamentals',
      description: 'Introduction to DevOps practices and tools for modern software development.',
      level: 'Beginner',
      duration: '3 hours',
      category: 'DevOps',
      rating: 4.6,
      students: 950
    }
  ]

  const categories = ['All', 'AI Fundamentals', 'Cloud Computing', 'Security', 'Data Science', 'Development', 'DevOps']

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Learning <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Center</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master the latest technologies with our comprehensive tutorials and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white/10 text-gray-300 hover:bg-white/20"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {tutorial.level}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{tutorial.title}</h3>
                <p className="text-gray-300 mb-6">{tutorial.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {tutorial.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {tutorial.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    {tutorial.rating}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{tutorial.category}</span>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                    <Play className="w-4 h-4 mr-2" />
                    Start
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Learn?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Start your learning journey with our comprehensive tutorials and expert guidance.
          </p>
          <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started
            <ArrowRight className="w-4 h-4 ml-2 inline" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TutorialsPage