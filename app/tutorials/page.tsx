import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Video, Code, Database, Cloud, Shield, Brain, Users, Zap } from 'lucide-react'

export default function TutorialsPage() {
  const tutorials = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Implementation Guide',
      description: 'Complete guide to implementing AI solutions in your business',
      duration: '45 min',
      level: 'Intermediate',
      category: 'AI & Machine Learning'
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: 'Cloud Migration Tutorial',
      description: 'Step-by-step cloud migration process and best practices',
      duration: '60 min',
      level: 'Advanced',
      category: 'Cloud Computing'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity practices for modern businesses',
      duration: '30 min',
      level: 'Beginner',
      category: 'Security'
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: 'API Development Best Practices',
      description: 'Building robust and scalable APIs from scratch',
      duration: '90 min',
      level: 'Advanced',
      category: 'Development'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'Database Optimization',
      description: 'Optimizing database performance and scalability',
      duration: '75 min',
      level: 'Intermediate',
      category: 'Data Management'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'DevOps Automation',
      description: 'Automating deployment and infrastructure management',
      duration: '120 min',
      level: 'Advanced',
      category: 'DevOps'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Tutorials - Learn AI & IT Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive tutorials and guides for AI implementation, cloud migration, cybersecurity, and IT solutions. Learn from industry experts." />
        <meta name="keywords" content="tutorials, AI learning, cloud migration, cybersecurity, IT training, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Learn <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI & IT Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master the latest technologies with our comprehensive tutorials and guides. 
              From AI implementation to cloud migration, we've got you covered.
            </p>
          </div>

          {/* Tutorials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mr-4">
                    {tutorial.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{tutorial.title}</h3>
                    <span className="text-sm text-cyan-400 font-medium">{tutorial.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{tutorial.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {tutorial.duration}
                    </span>
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">
                      {tutorial.level}
                    </span>
                  </div>
                </div>
                
                <Link 
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Learning
                  <ArrowRight className="w-4 h-4 inline ml-2" />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get personalized tutorials and expert guidance for your specific needs.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Custom Training
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}