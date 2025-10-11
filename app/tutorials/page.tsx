import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BookOpen, Play, ArrowRight, Clock, Users, Star } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

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
      title: 'Building Your First AI Application',
      description: 'Hands-on tutorial on creating a simple AI application from scratch.',
      level: 'Intermediate',
      duration: '4 hours',
      rating: 4.9,
      students: 890,
      category: 'AI & ML'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Setup',
      description: 'Complete guide to setting up and managing cloud infrastructure.',
      level: 'Beginner',
      duration: '3 hours',
      rating: 4.7,
      students: 2100,
      category: 'Cloud Computing'
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity measures for modern applications and systems.',
      level: 'Intermediate',
      duration: '5 hours',
      rating: 4.8,
      students: 1650,
      category: 'Security'
    },
    {
      id: 5,
      title: 'Data Analytics with Python',
      description: 'Learn data analysis and visualization using Python and popular libraries.',
      level: 'Intermediate',
      duration: '6 hours',
      rating: 4.9,
      students: 3200,
      category: 'Data Science'
    },
    {
      id: 6,
      title: 'Advanced AI Model Deployment',
      description: 'Deploy and scale AI models in production environments.',
      level: 'Advanced',
      duration: '8 hours',
      rating: 4.9,
      students: 750,
      category: 'AI & ML'
    },
    {
      id: 7,
      title: 'Web Development with React',
      description: 'Build modern web applications using React and best practices.',
      level: 'Beginner',
      duration: '10 hours',
      rating: 4.8,
      students: 4500,
      category: 'Web Development'
    },
    {
      id: 8,
      title: 'Database Design and Optimization',
      description: 'Design efficient databases and optimize query performance.',
      level: 'Intermediate',
      duration: '4 hours',
      rating: 4.7,
      students: 1800,
      category: 'Database'
    },
    {
      id: 9,
      title: 'DevOps and CI/CD Pipeline',
      description: 'Implement DevOps practices and continuous integration/deployment.',
      level: 'Advanced',
      duration: '7 hours',
      rating: 4.9,
      students: 1200,
      category: 'DevOps'
    }
  ]

  const categories = [
    'All',
    'AI & ML',
    'Cloud Computing',
    'Security',
    'Data Science',
    'Web Development',
    'Database',
    'DevOps'
  ]

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn AI & IT Skills</title>
        <meta name="description" content="Comprehensive tutorials and courses on AI, machine learning, cloud computing, and IT skills. Learn from industry experts." />
        <meta name="keywords" content="AI tutorials, machine learning courses, IT training, cloud computing, cybersecurity, data science" />
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
                Master the latest AI and IT skills with our comprehensive tutorials and hands-on courses designed by industry experts.
              </p>
            </div>
          </div>
        </section>

        {/* Tutorials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Tutorials
              </h2>
              <p className="text-xl text-gray-300">
                Learn from the best with our curated selection of high-quality tutorials
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          tutorial.level === 'Beginner' ? 'bg-green-500 text-white' :
                          tutorial.level === 'Intermediate' ? 'bg-yellow-500 text-white' :
                          'bg-red-500 text-white'
                        }`}>
                          {tutorial.level}
                        </span>
                      </div>
                    </div>
                    <span className="text-cyan-400 font-semibold text-sm">{tutorial.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {tutorial.duration}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {tutorial.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {tutorial.students}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center group">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of students who are already advancing their careers with our comprehensive tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center">
                Browse All Tutorials
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Contact Instructor
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