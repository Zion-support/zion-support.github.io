import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, BookOpen, Users, Award, Clock, Brain, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TrainingPage() {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      title: 'Comprehensive Curriculum',
      description: 'Industry-leading training programs covering all aspects of modern technology.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Expert Instructors',
      description: 'Learn from certified professionals with years of industry experience.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: 'Certification Programs',
      description: 'Earn recognized certifications that boost your career prospects.'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: 'Flexible Scheduling',
      description: 'Choose from various training formats to fit your schedule.'
    }
  ]

  const programs = [
    'AI & Machine Learning',
    'Cloud Computing',
    'Cybersecurity',
    'Data Science',
    'Web Development',
    'Mobile Development',
    'DevOps & Automation',
    'Project Management'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Training Programs - Zion Tech Group</title>
        <meta name="description" content="Professional training programs in AI, cloud computing, cybersecurity, and more. Advance your career with expert-led courses." />
        <meta name="keywords" content="training programs, professional development, certification courses, technology training, skill development" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Training Programs
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Advance your career with our comprehensive training programs in AI, cloud computing, 
              cybersecurity, and cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Course Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Training?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry-leading training programs designed for career advancement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Training Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive courses in cutting-edge technologies
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-2xl mb-2">📚</div>
                <h3 className="text-white font-semibold text-sm">{program}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Advance Your Career?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start your training journey today and gain the skills needed for tomorrow's technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Enroll Now
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}