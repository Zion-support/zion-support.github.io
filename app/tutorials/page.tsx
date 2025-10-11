import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { BookOpen, Play, Clock, Users, Star } from 'lucide-react'

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Automation',
      description: 'Learn the fundamentals of AI automation and how to implement it in your business processes.',
      level: 'Beginner',
      duration: '45 min',
      rating: 4.8,
      students: 1200,
      category: 'AI & Automation'
    },
    {
      id: 2,
      title: 'Advanced Machine Learning Techniques',
      description: 'Deep dive into advanced ML algorithms and their practical applications in enterprise environments.',
      level: 'Advanced',
      duration: '2 hours',
      rating: 4.9,
      students: 800,
      category: 'Machine Learning'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Best Practices',
      description: 'Master cloud architecture patterns and learn how to build scalable, secure cloud solutions.',
      level: 'Intermediate',
      duration: '1.5 hours',
      rating: 4.7,
      students: 1500,
      category: 'Cloud Computing'
    },
    {
      id: 4,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity concepts and practices to protect your organization from threats.',
      level: 'Beginner',
      duration: '1 hour',
      rating: 4.6,
      students: 2000,
      category: 'Security'
    },
    {
      id: 5,
      title: 'Data Analytics with Python',
      description: 'Learn data analysis techniques using Python and popular libraries like Pandas and NumPy.',
      level: 'Intermediate',
      duration: '3 hours',
      rating: 4.8,
      students: 1800,
      category: 'Data Science'
    },
    {
      id: 6,
      title: 'DevOps and CI/CD Pipeline',
      description: 'Build efficient development workflows with modern DevOps practices and automation tools.',
      level: 'Intermediate',
      duration: '2.5 hours',
      rating: 4.9,
      students: 1100,
      category: 'DevOps'
    }
  ]

  const categories = ['All', 'AI & Automation', 'Machine Learning', 'Cloud Computing', 'Security', 'Data Science', 'DevOps']

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
              Master the latest technologies and best practices with our comprehensive tutorial collection.
            </p>
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
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
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {tutorial.duration}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    {tutorial.students}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-white font-semibold">{tutorial.rating}</span>
                  </div>
                  <span className="text-cyan-400 text-sm font-medium">{tutorial.category}</span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-4 h-4 mr-2" />
                  Start Tutorial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Learning Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <p className="text-gray-300">Tutorials Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10K+</div>
              <p className="text-gray-300">Students Enrolled</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">4.8</div>
              <p className="text-gray-300">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <p className="text-gray-300">Completion Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who are advancing their careers with our expert-led tutorials.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg">
            Browse All Tutorials
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TutorialsPage