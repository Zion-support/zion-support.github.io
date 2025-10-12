'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, BookOpen, Users, Award, Clock, Star, Brain, Zap, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const TrainingPage: React.FC = () => {
  const courses = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      title: 'AI & Machine Learning',
      description: 'Comprehensive training in artificial intelligence, machine learning algorithms, and data science.'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'Cloud Computing',
      description: 'Master cloud platforms, deployment strategies, and scalable infrastructure solutions.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Advanced security training covering threat detection, prevention, and incident response.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'Data Analytics',
      description: 'Learn data analysis, visualization, and business intelligence techniques.'
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: 'Web Development',
      description: 'Modern web development with React, Node.js, and full-stack technologies.'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: 'Project Management',
      description: 'Agile methodologies, team leadership, and project delivery best practices.'
    }
  ]

  const benefits = [
    'Expert-led training programs',
    'Hands-on practical experience',
    'Industry-recognized certifications',
    'Flexible learning schedules',
    'Real-world project experience',
    'Career placement assistance',
    'Ongoing support and mentorship',
    'Cutting-edge curriculum'
  ]

  const trainingTypes = [
    'Online Training',
    'In-Person Workshops',
    'Corporate Training',
    'Certification Programs',
    'Bootcamps',
    'Mentorship Programs',
    'Custom Training',
    'Continuing Education'
  ]

  return (
    <>
      <Helmet>
        <title>Training Programs - Zion Tech Group | Professional IT Training</title>
        <meta name="description" content="Professional IT training programs by Zion Tech Group. AI, cloud computing, cybersecurity, and data analytics training with industry experts." />
        <meta name="keywords" content="IT training, professional development, AI training, cloud computing, cybersecurity, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Professional Training
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Advance your career with our comprehensive IT training programs. 
                Learn from industry experts and gain hands-on experience with cutting-edge technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/pricing" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Training Programs</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive training in the latest technologies and methodologies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{course.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{course.title}</h3>
                  <p className="text-gray-300">{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Types Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Training Formats</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Flexible learning options to fit your schedule and needs
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trainingTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-3" />
                  <p className="text-gray-300">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Training?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                We provide exceptional training experiences that advance your career
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(4).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Advance Your Career?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Join thousands of professionals who have advanced their careers with our comprehensive training programs. 
                  Start your journey to success today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Enroll Now
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default TrainingPage