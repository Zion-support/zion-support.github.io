'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, BookOpen, Code, Clock, Play } from 'lucide-react'

const TutorialsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Development',
      description: 'Learn the fundamentals of AI development and machine learning concepts.',
      category: 'AI/ML',
      duration: '45 min',
      difficulty: 'Beginner',
      rating: 4.8,
      students: 1250,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Setup',
      description: 'Complete guide to setting up scalable cloud infrastructure on AWS.',
      category: 'Cloud',
      duration: '60 min',
      difficulty: 'Intermediate',
      rating: 4.6,
      students: 890,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'React Best Practices',
      description: 'Master React development with modern patterns and best practices.',
      category: 'Web Dev',
      duration: '90 min',
      difficulty: 'Intermediate',
      rating: 4.9,
      students: 2100,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6c82?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity concepts and practices for developers.',
      category: 'Security',
      duration: '75 min',
      difficulty: 'Beginner',
      rating: 4.7,
      students: 1560,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Database Optimization',
      description: 'Learn how to optimize database performance and queries.',
      category: 'Database',
      duration: '50 min',
      difficulty: 'Advanced',
      rating: 4.8,
      students: 720,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'DevOps Pipeline Setup',
      description: 'Build and automate your CI/CD pipeline with modern tools.',
      category: 'DevOps',
      duration: '120 min',
      difficulty: 'Advanced',
      rating: 4.9,
      students: 980,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop',
      featured: false
    }
  ]

  const categories = [
    { name: 'All', icon: BookOpen, count: tutorials.length },
    { name: 'AI/ML', icon: Code, count: tutorials.filter(t => t.category === 'AI/ML').length },
    { name: 'Cloud', icon: Cloud, count: tutorials.filter(t => t.category === 'Cloud').length },
    { name: 'Web Dev', icon: Monitor, count: tutorials.filter(t => t.category === 'Web Dev').length },
    { name: 'Security', icon: Shield, count: tutorials.filter(t => t.category === 'Security').length },
    { name: 'Database', icon: Database, count: tutorials.filter(t => t.category === 'Database').length },
    { name: 'DevOps', icon: Settings, count: tutorials.filter(t => t.category === 'DevOps').length }
  ]

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesCategory = selectedCategory === 'All' || tutorial.category === selectedCategory
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredTutorial = tutorials.find(t => t.featured)

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tutorials
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Learn from our comprehensive collection of tutorials covering AI, cloud computing, web development, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-4 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.name
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tutorial */}
        {featuredTutorial && (
          <section className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Featured Tutorial</h2>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-cyan-500/20">
                <img 
                  src={featuredTutorial.image} 
                  alt={featuredTutorial.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm">
                      {featuredTutorial.category}
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm">{featuredTutorial.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{featuredTutorial.title}</h3>
                  <p className="text-gray-300 mb-4">{featuredTutorial.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredTutorial.duration}
                      </span>
                      <span>{featuredTutorial.difficulty}</span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {featuredTutorial.students} students
                      </span>
                    </div>
                    <button className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors flex items-center">
                      <Play className="w-4 h-4 mr-2" />
                      Start Learning
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tutorials Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">
              {selectedCategory === 'All' ? 'All Tutorials' : `${selectedCategory} Tutorials`} 
              ({filteredTutorials.length})
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <img 
                    src={tutorial.image} 
                    alt={tutorial.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm">
                        {tutorial.category}
                      </span>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm">{tutorial.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{tutorial.title}</h3>
                    <p className="text-gray-300 mb-4">{tutorial.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tutorial.duration}
                      </span>
                      <span>{tutorial.difficulty}</span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {tutorial.students}
                      </span>
                    </div>
                    <button className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors flex items-center justify-center">
                      <Play className="w-4 h-4 mr-2" />
                      Start Tutorial
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Want to Create Your Own Tutorial?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Share your knowledge with our community and help others learn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center">
                Submit Tutorial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-500 text-cyan-500 px-8 py-3 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors">
                Become an Instructor
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default TutorialsPage;