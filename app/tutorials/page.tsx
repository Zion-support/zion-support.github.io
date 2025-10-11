'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { BookOpen, Play, ArrowRight, Clock, Users, Star, CheckCircle } from 'lucide-react'

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI',
      description: 'Learn the fundamentals of artificial intelligence and machine learning concepts.',
      level: 'Beginner',
      duration: '2 hours',
      rating: 4.8,
      students: 1250,
      category: 'AI Fundamentals'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      description: 'Step-by-step guide to migrating your applications to the cloud successfully.',
      level: 'Intermediate',
      duration: '3 hours',
      rating: 4.9,
      students: 890,
      category: 'Cloud Computing'
    },
    {
      id: 3,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity concepts and best practices for protecting your business.',
      level: 'Beginner',
      duration: '2.5 hours',
      rating: 4.7,
      students: 2100,
      category: 'Security'
    },
    {
      id: 4,
      title: 'Advanced AI Implementation',
      description: 'Deep dive into implementing AI solutions in enterprise environments.',
      level: 'Advanced',
      duration: '4 hours',
      rating: 4.9,
      students: 650,
      category: 'AI Implementation'
    },
    {
      id: 5,
      title: 'DevOps and CI/CD',
      description: 'Master DevOps practices and continuous integration/deployment pipelines.',
      level: 'Intermediate',
      duration: '3.5 hours',
      rating: 4.8,
      students: 1100,
      category: 'DevOps'
    },
    {
      id: 6,
      title: 'Data Analytics with AI',
      description: 'Learn to extract insights from data using AI-powered analytics tools.',
      level: 'Intermediate',
      duration: '3 hours',
      rating: 4.6,
      students: 950,
      category: 'Data Analytics'
    }
  ]

  const categories = ['All', 'AI Fundamentals', 'Cloud Computing', 'Security', 'AI Implementation', 'DevOps', 'Data Analytics']

  const stats = [
    { icon: BookOpen, value: '50+', label: 'Tutorials' },
    { icon: Users, value: '10K+', label: 'Students' },
    { icon: Star, value: '4.8/5', label: 'Average Rating' },
    { icon: Clock, value: '100+', label: 'Hours of Content' }
  ]

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn AI & Technology</title>
        <meta name="description" content="Comprehensive tutorials on AI, cloud computing, cybersecurity, and more. Learn from industry experts with hands-on projects." />
        <meta name="keywords" content="tutorials, AI learning, cloud computing, cybersecurity, DevOps, data analytics, technology education" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Learn <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technology</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Master the latest technologies with our comprehensive tutorials and hands-on projects. 
                Learn from industry experts and advance your career.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
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
                  className="px-6 py-3 rounded-full border border-white/20 text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
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
                <div key={tutorial.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-500 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-400 font-medium text-sm">{tutorial.category}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      tutorial.level === 'Beginner' 
                        ? 'bg-green-500/20 text-green-400'
                        : tutorial.level === 'Intermediate'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {tutorial.level}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{tutorial.title}</h3>
                  <p className="text-gray-300 mb-6">{tutorial.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{tutorial.students}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm font-medium">{tutorial.rating}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Start Tutorial</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Learning Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">AI & Machine Learning Path</h3>
                <p className="text-gray-300 mb-6">Complete learning path from AI fundamentals to advanced implementation.</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">AI Fundamentals</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Machine Learning Basics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Deep Learning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">AI Implementation</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Start Learning Path
                </button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Cloud & DevOps Path</h3>
                <p className="text-gray-300 mb-6">Master cloud computing and DevOps practices for modern development.</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Cloud Fundamentals</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">DevOps Practices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Containerization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">CI/CD Pipelines</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Start Learning Path
                </button>
              </div>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <ArrowRight className="w-6 h-6" />
                <span>Get Started</span>
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Browse All Tutorials
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default TutorialsPage