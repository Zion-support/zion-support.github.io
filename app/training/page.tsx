'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, BookOpen, Users, Award, Target, Clock, Globe, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const TrainingPage: React.FC = () => {
  const programs = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      title: 'Technical Training',
      description: 'Comprehensive technical training programs for developers and IT professionals.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Team Workshops',
      description: 'Interactive workshops designed to enhance team collaboration and productivity.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: 'Certification Programs',
      description: 'Industry-recognized certification programs to validate your skills and knowledge.'
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: 'Custom Training',
      description: 'Tailored training programs designed specifically for your organization\'s needs.'
    },
    {
      icon: <Clock className="w-8 h-8 text-cyan-500" />,
      title: 'Online Learning',
      description: 'Flexible online learning options with self-paced courses and live sessions.'
    },
    {
      icon: <Globe className="w-8 h-8 text-red-500" />,
      title: 'Global Training',
      description: 'Worldwide training delivery with multilingual support and cultural adaptation.'
    }
  ]

  const benefits = [
    'Enhanced technical skills and knowledge',
    'Improved team productivity and collaboration',
    'Industry-recognized certifications',
    'Flexible learning options',
    'Expert instructors and mentors',
    'Ongoing support and resources'
  ]

  const topics = [
    'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Data Analytics', 
    'Software Development', 'DevOps', 'Project Management', 'Leadership Skills'
  ]

  return (
    <>
      <Helmet>
        <title>Training Programs | Zion Tech Group</title>
        <meta name="description" content="Comprehensive training programs for technical and professional development. Enhance your skills with our expert-led courses and certifications." />
        <meta name="keywords" content="training programs, technical training, professional development, certifications, workshops, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Training
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Programs
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Enhance your skills and advance your career with our comprehensive training programs. 
              Expert-led courses, certifications, and hands-on learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Get Started
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
        </section>

        {/* Programs Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Training Programs
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive training solutions designed to enhance your skills and advance your career.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {program.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{program.title}</h3>
                  </div>
                  <p className="text-gray-300">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Choose Our Training Programs?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our training programs are designed by industry experts and delivered by experienced instructors. 
                  We provide hands-on learning experiences that prepare you for real-world challenges.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Training Topics</h3>
                <div className="grid grid-cols-2 gap-4">
                  {topics.map((topic, index) => (
                    <div key={index} className="flex items-center">
                      <BookOpen className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{topic}</span>
                    </div>
                  ))}
                </div>
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
                  Ready to Advance Your Skills?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Join our training programs and take your career to the next level with expert-led courses and certifications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Enroll Now
                  </Link>
                  <Link 
                    to="/it-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Explore IT Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default TrainingPage