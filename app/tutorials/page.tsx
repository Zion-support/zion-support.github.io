'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { BookOpen, Clock, Users, ArrowRight, Play, Download, Star, CheckCircle } from 'lucide-react'

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: 'Getting Started with AI',
      description: 'Learn the fundamentals of artificial intelligence and machine learning from scratch.',
      level: 'Beginner',
      duration: '2 hours',
      students: 1250,
      rating: 4.8,
      price: 'Free',
      featured: true
    },
    {
      title: 'Advanced Machine Learning',
      description: 'Deep dive into advanced ML algorithms and techniques for real-world applications.',
      level: 'Advanced',
      duration: '4 hours',
      students: 890,
      rating: 4.9,
      price: '$99',
      featured: false
    },
    {
      title: 'Cloud Computing Fundamentals',
      description: 'Master cloud computing concepts and learn to deploy applications on AWS, Azure, and GCP.',
      level: 'Intermediate',
      duration: '3 hours',
      students: 2100,
      rating: 4.7,
      price: '$79',
      featured: true
    },
    {
      title: 'Cybersecurity Best Practices',
      description: 'Learn essential cybersecurity practices to protect your applications and data.',
      level: 'Intermediate',
      duration: '2.5 hours',
      students: 1650,
      rating: 4.8,
      price: '$89',
      featured: false
    },
    {
      title: 'Data Analytics with Python',
      description: 'Comprehensive guide to data analysis using Python and popular libraries.',
      level: 'Intermediate',
      duration: '3.5 hours',
      students: 3200,
      rating: 4.9,
      price: '$69',
      featured: true
    },
    {
      title: 'Mobile App Development',
      description: 'Build cross-platform mobile applications using React Native and Flutter.',
      level: 'Advanced',
      duration: '5 hours',
      students: 1800,
      rating: 4.8,
      price: '$129',
      featured: false
    }
  ]

  const categories = [
    { name: 'All Tutorials', count: 24 },
    { name: 'AI & Machine Learning', count: 8 },
    { name: 'Cloud Computing', count: 6 },
    { name: 'Cybersecurity', count: 4 },
    { name: 'Data Analytics', count: 3 },
    { name: 'Mobile Development', count: 3 }
  ]

  const features = [
    'Expert-led video tutorials',
    'Hands-on coding exercises',
    'Real-world project examples',
    'Certificate of completion',
    'Lifetime access to materials',
    'Community support and forums',
    'Mobile and desktop access',
    'Regular content updates'
  ]

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn Technology Skills</title>
        <meta name="description" content="Master technology skills with our comprehensive tutorials. Learn AI, cloud computing, cybersecurity, and more from industry experts." />
        <meta name="keywords" content="tutorials, online courses, technology training, AI learning, cloud computing, cybersecurity" />
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
              Master the latest technology skills with our comprehensive tutorials and courses. 
              Learn from industry experts and advance your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                Start Learning
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Browse Courses
              </button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Explore Categories
              </h2>
              <p className="text-xl text-gray-300">
                Choose from our wide range of technology topics and skill levels.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center cursor-pointer">
                  <h3 className="text-white font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-400 text-sm">{category.count} tutorials</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Tutorials
              </h2>
              <p className="text-xl text-gray-300">
                Our most popular and highly-rated tutorials.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {tutorial.level}
                        </span>
                      </div>
                    </div>
                    {tutorial.featured && (
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{tutorial.title}</h3>
                  <p className="text-gray-300 mb-6">{tutorial.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tutorial.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {tutorial.students}
                      </span>
                      <span className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-400" />
                        {tutorial.rating}
                      </span>
                    </div>
                    <div className="text-cyan-400 font-bold">{tutorial.price}</div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                    <Play className="w-4 h-4 mr-2" />
                    Start Learning
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Tutorials?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Learn with the best resources and support available.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of students who are already advancing their careers with our tutorials. 
              Start your learning journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center">
                Browse All Tutorials
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Download App
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