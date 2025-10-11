'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BookOpen, Play, ArrowRight, Clock, Users, Star } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: 'Getting Started with AI',
      description: 'Learn the fundamentals of artificial intelligence and machine learning from scratch.',
      level: 'Beginner',
      duration: '2 hours',
      category: 'AI/ML',
      rating: 4.8,
      students: 1250
    },
    {
      title: 'Cloud Architecture Fundamentals',
      description: 'Master cloud computing concepts and design scalable, reliable systems.',
      level: 'Intermediate',
      duration: '3 hours',
      category: 'Cloud',
      rating: 4.9,
      students: 980
    },
    {
      title: 'Web Development with React',
      description: 'Build modern web applications using React and modern development practices.',
      level: 'Beginner',
      duration: '4 hours',
      category: 'Web Dev',
      rating: 4.7,
      students: 2100
    },
    {
      title: 'Cybersecurity Best Practices',
      description: 'Protect your applications and data with industry-standard security measures.',
      level: 'Intermediate',
      duration: '2.5 hours',
      category: 'Security',
      rating: 4.8,
      students: 750
    },
    {
      title: 'Database Design & Optimization',
      description: 'Design efficient databases and optimize performance for large-scale applications.',
      level: 'Advanced',
      duration: '3.5 hours',
      category: 'Database',
      rating: 4.9,
      students: 650
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automate your development workflow with modern DevOps practices and tools.',
      level: 'Intermediate',
      duration: '3 hours',
      category: 'DevOps',
      rating: 4.6,
      students: 890
    }
  ]

  const categories = ['All', 'AI/ML', 'Cloud', 'Web Dev', 'Security', 'Database', 'DevOps']

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn Technology Skills</title>
        <meta name="description" content="Comprehensive tutorials on AI, cloud computing, web development, cybersecurity, and more. Learn from industry experts and advance your tech skills." />
        <meta name="keywords" content="tutorials, learning, AI, cloud computing, web development, cybersecurity, database, DevOps, tech skills" />
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
              Master the latest technologies with our comprehensive tutorials. From AI to cloud computing, learn from industry experts and advance your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Learning
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Browse All Tutorials
              </button>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full font-semibold transition-all duration-300 bg-white/10 text-gray-300 hover:bg-white/20"
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
                  <h3 className="text-xl font-bold text-white mb-4">{tutorial.title}</h3>
                  <p className="text-gray-300 mb-6">{tutorial.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">{tutorial.category}</span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm text-gray-300">{tutorial.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {tutorial.duration}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      {tutorial.students} students
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:scale-105">
                    <Play className="w-4 h-4 inline mr-2" />
                    Start Learning
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Learn?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your learning journey with our comprehensive tutorials and expert guidance.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              <ArrowRight className="w-5 h-5 inline mr-2" />
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