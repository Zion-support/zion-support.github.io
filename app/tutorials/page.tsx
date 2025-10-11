import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BookOpen, Play, Clock, ArrowRight, Star, Users, CheckCircle } from 'lucide-react'
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
      category: 'AI & ML',
      rating: 4.8,
      students: 1250
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Setup',
      description: 'Complete guide to setting up and managing cloud infrastructure on AWS, Azure, and GCP.',
      level: 'Intermediate',
      duration: '4 hours',
      category: 'Cloud Computing',
      rating: 4.9,
      students: 890
    },
    {
      id: 3,
      title: 'Web Development with React',
      description: 'Build modern web applications using React, TypeScript, and best practices.',
      level: 'Beginner',
      duration: '6 hours',
      category: 'Web Development',
      rating: 4.7,
      students: 2100
    },
    {
      id: 4,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity concepts and practices for protecting your business.',
      level: 'Intermediate',
      duration: '3 hours',
      category: 'Security',
      rating: 4.8,
      students: 750
    },
    {
      id: 5,
      title: 'Data Analytics with Python',
      description: 'Analyze data and create visualizations using Python and popular libraries.',
      level: 'Intermediate',
      duration: '5 hours',
      category: 'Data Analytics',
      rating: 4.9,
      students: 1100
    },
    {
      id: 6,
      title: 'Mobile App Development',
      description: 'Create cross-platform mobile applications using React Native and Flutter.',
      level: 'Advanced',
      duration: '8 hours',
      category: 'Mobile Development',
      rating: 4.6,
      students: 650
    }
  ]

  const categories = ['All', 'AI & ML', 'Cloud Computing', 'Web Development', 'Security', 'Data Analytics', 'Mobile Development']

  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Content',
      description: 'In-depth tutorials covering all aspects of modern technology'
    },
    {
      icon: Play,
      title: 'Video Learning',
      description: 'High-quality video content with hands-on demonstrations'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry experts with years of experience'
    },
    {
      icon: CheckCircle,
      title: 'Certificates',
      description: 'Earn certificates upon completion of courses'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn Technology Skills</title>
        <meta name="description" content="Learn technology skills with our comprehensive tutorials. From AI and machine learning to cloud computing and web development." />
        <meta name="keywords" content="tutorials, learning, AI tutorials, cloud computing, web development, technology education" />
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
                Master the latest technology skills with our comprehensive tutorials and expert guidance. 
                From AI and machine learning to cloud computing and web development.
              </p>
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
              <p className="text-xl text-gray-300">
                Learn from the best with our comprehensive learning platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
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
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
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
                <div key={tutorial.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {tutorial.level}
                      </span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-sm">{tutorial.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{tutorial.title}</h3>
                  <p className="text-gray-300 mb-6">{tutorial.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{tutorial.students} students</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
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
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of students who are already learning with our comprehensive tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Started
              </button>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default TutorialsPage