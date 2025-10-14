'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { BookOpen, Play, Clock, Users, Star } from 'lucide-react'

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Introduction to AI and Machine Learning',
      description: 'Learn the fundamentals of artificial intelligence and machine learning concepts.',
      level: 'Beginner',
      duration: '2 hours',
      rating: 4.8,
      students: 1250,
      category: 'AI & ML'
    },
    {
      id: 2,
      title: 'Cloud Computing Fundamentals',
      description: 'Master the basics of cloud computing platforms and services.',
      level: 'Intermediate',
      duration: '3 hours',
      rating: 4.9,
      students: 980,
      category: 'Cloud'
    },
    {
      id: 3,
      title: 'Web Development with React',
      description: 'Build modern web applications using React and TypeScript.',
      level: 'Intermediate',
      duration: '4 hours',
      rating: 4.7,
      students: 2100,
      category: 'Web Dev'
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices',
      description: 'Learn essential cybersecurity measures to protect your business.',
      level: 'Advanced',
      duration: '2.5 hours',
      rating: 4.9,
      students: 750,
      category: 'Security'
    },
    {
      id: 5,
      title: 'Database Design and Optimization',
      description: 'Design efficient databases and optimize performance.',
      level: 'Intermediate',
      duration: '3.5 hours',
      rating: 4.6,
      students: 890,
      category: 'Database'
    },
    {
      id: 6,
      title: 'DevOps and CI/CD Pipelines',
      description: 'Implement DevOps practices and continuous integration/deployment.',
      level: 'Advanced',
      duration: '5 hours',
      rating: 4.8,
      students: 650,
      category: 'DevOps'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn Technology Skills</title>
        <meta name="description" content="Comprehensive tutorials on AI, cloud computing, web development, cybersecurity, and more. Learn from industry experts." />
        <meta name="keywords" content="tutorials, online courses, AI learning, cloud computing, web development, cybersecurity, technology education" />
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
                Master the latest technologies with our comprehensive tutorials and hands-on learning experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Tutorials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {tutorial.level}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{tutorial.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{tutorial.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
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
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-white text-sm">{tutorial.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-semibold">{tutorial.category}</span>
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center transition-colors">
                      <Play className="w-4 h-4 mr-2" />
                      Start
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Learning Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">AI & Machine Learning</h3>
                <p className="text-gray-300 mb-6">Complete path from basics to advanced AI implementation.</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Introduction to AI</li>
                  <li>• Machine Learning Fundamentals</li>
                  <li>• Deep Learning</li>
                  <li>• AI Implementation</li>
                </ul>
                <button className="mt-6 text-cyan-400 hover:text-cyan-300 font-medium">
                  Start Learning Path →
                </button>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Computing</h3>
                <p className="text-gray-300 mb-6">Master cloud platforms and services for modern applications.</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Cloud Fundamentals</li>
                  <li>• AWS Services</li>
                  <li>• Azure Platform</li>
                  <li>• Cloud Security</li>
                </ul>
                <button className="mt-6 text-cyan-400 hover:text-cyan-300 font-medium">
                  Start Learning Path →
                </button>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Full-Stack Development</h3>
                <p className="text-gray-300 mb-6">Build complete web applications from frontend to backend.</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Frontend Development</li>
                  <li>• Backend Development</li>
                  <li>• Database Design</li>
                  <li>• Deployment</li>
                </ul>
                <button className="mt-6 text-cyan-400 hover:text-cyan-300 font-medium">
                  Start Learning Path →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of learners who are advancing their careers with our comprehensive technology tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Browse All Tutorials
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Get Learning Plan
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default Page;
