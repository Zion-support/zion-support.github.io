'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BookOpen, Play, ArrowRight, Clock, Users, Star } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: 'Getting Started with AI Development',
      description: 'Learn the fundamentals of AI development and machine learning concepts.',
      level: 'Beginner',
      duration: '2 hours',
      rating: 4.8,
      students: 1250
    },
    {
      title: 'Building Chatbots with Natural Language Processing',
      description: 'Create intelligent chatbots using advanced NLP techniques and frameworks.',
      level: 'Intermediate',
      duration: '4 hours',
      rating: 4.9,
      students: 890
    },
    {
      title: 'Computer Vision and Image Recognition',
      description: 'Master computer vision techniques for image analysis and object detection.',
      level: 'Advanced',
      duration: '6 hours',
      rating: 4.7,
      students: 650
    },
    {
      title: 'Cloud Infrastructure and DevOps',
      description: 'Deploy and manage applications in the cloud with modern DevOps practices.',
      level: 'Intermediate',
      duration: '5 hours',
      rating: 4.8,
      students: 1100
    },
    {
      title: 'Data Analytics and Business Intelligence',
      description: 'Transform data into actionable insights with advanced analytics tools.',
      level: 'Intermediate',
      duration: '3 hours',
      rating: 4.6,
      students: 750
    },
    {
      title: 'Cybersecurity Best Practices',
      description: 'Protect your applications and data with comprehensive security measures.',
      level: 'Advanced',
      duration: '4 hours',
      rating: 4.9,
      students: 920
    }
  ]

  const categories = [
    'All',
    'AI & Machine Learning',
    'Web Development',
    'Cloud & DevOps',
    'Data Analytics',
    'Cybersecurity',
    'Mobile Development'
  ]

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn Technology Skills</title>
        <meta name="description" content="Master new technology skills with our comprehensive tutorials. From AI development to cloud infrastructure, learn from industry experts." />
        <meta name="keywords" content="tutorials, learning, AI development, web development, cloud computing, data analytics, cybersecurity" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Learn <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technology</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master new technology skills with our comprehensive tutorials. 
              From AI development to cloud infrastructure, learn from industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Start Learning
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Browse Categories
              </button>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
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
              {tutorials.map((tutorial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
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
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{tutorial.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {tutorial.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {tutorial.students}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-300 text-sm">{tutorial.rating}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                    <Play className="w-4 h-4 mr-2" />
                    Start Learning
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
              Ready to Learn?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your learning journey with our comprehensive tutorials and expert guidance.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default TutorialsPage