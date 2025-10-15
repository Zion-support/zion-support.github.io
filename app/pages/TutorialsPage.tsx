import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Play, Clock, Users, Star, BookOpen, Download } from 'lucide-react'

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: 'Getting Started with AI Analytics',
      description: 'Learn the basics of our AI analytics platform and how to set up your first dashboard.',
      duration: '45 minutes',
      level: 'Beginner',
      category: 'AI Solutions',
      rating: 4.8,
      students: 1250,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      title: '5G Network Configuration',
      description: 'Step-by-step guide to configuring 5G networks for optimal performance.',
      duration: '1 hour 30 minutes',
      level: 'Intermediate',
      category: '5G Technology',
      rating: 4.9,
      students: 890,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      title: 'Cloud Migration Best Practices',
      description: 'Master the art of migrating your infrastructure to the cloud safely and efficiently.',
      duration: '2 hours',
      level: 'Advanced',
      category: 'Cloud Computing',
      rating: 4.7,
      students: 2100,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity practices to protect your business from threats.',
      duration: '1 hour 15 minutes',
      level: 'Beginner',
      category: 'Cybersecurity',
      rating: 4.6,
      students: 3200,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      title: 'DevOps Automation with AI',
      description: 'Automate your DevOps processes using AI-powered tools and techniques.',
      duration: '1 hour 45 minutes',
      level: 'Intermediate',
      category: 'DevOps',
      rating: 4.8,
      students: 1560,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      title: 'Advanced Machine Learning',
      description: 'Deep dive into advanced machine learning concepts and implementations.',
      duration: '3 hours',
      level: 'Expert',
      category: 'AI Solutions',
      rating: 4.9,
      students: 750,
      thumbnail: '/api/placeholder/400/250'
    }
  ]

  const categories = ['All', 'AI Solutions', '5G Technology', 'Cloud Computing', 'Cybersecurity', 'DevOps']
  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced', 'Expert']

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn from our comprehensive tutorials on AI, 5G, cloud computing, and cybersecurity. Expert-led courses for all skill levels." />
        <meta name="keywords" content="tutorials, courses, learning, AI tutorials, 5G tutorials, cloud tutorials, cybersecurity tutorials" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Learning Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master the latest technologies with our comprehensive tutorials and courses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Browse All Tutorials
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Get Certified
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-300 font-medium mr-2">Categories:</span>
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                      category === 'All'
                        ? 'bg-cyan-600 text-white'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-cyan-600 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-300 font-medium mr-2">Levels:</span>
                {levels.map((level, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                      level === 'All Levels'
                        ? 'bg-cyan-600 text-white'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-cyan-600 hover:text-white'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tutorials Grid */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-6xl text-cyan-400/50">🎓</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {tutorial.category}
                      </span>
                      <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {tutorial.level}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {tutorial.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
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
                        <span className="text-yellow-400">{tutorial.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                        <Play className="w-4 h-4" />
                        <span>Start Tutorial</span>
                      </button>
                      <button className="px-4 py-2 border border-slate-600 text-gray-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join thousands of professionals who are advancing their skills with our tutorials
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Browse All Tutorials
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Get Certified
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TutorialsPage