'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, BookOpen, Users, Award, Clock, Play, GraduationCap, Target, Star } from 'lucide-react'

const TrainingPage: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Industry-leading training programs covering the latest technologies and best practices'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from certified professionals with years of real-world experience'
    },
    {
      icon: Award,
      title: 'Certification Programs',
      description: 'Earn recognized certifications that validate your skills and knowledge'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Choose from various training formats including online, in-person, and hybrid options'
    }
  ]

  const benefits = [
    'Stay current with latest technologies',
    'Improve job performance and productivity',
    'Advance your career opportunities',
    'Gain industry-recognized certifications',
    'Learn from experienced professionals',
    'Access to ongoing support and resources',
    'Hands-on practical experience',
    'Networking opportunities with peers'
  ]

  const programs = [
    {
      title: 'AI & Machine Learning',
      description: 'Comprehensive training in artificial intelligence, machine learning, and data science',
      duration: '12 weeks',
      level: 'Intermediate',
      features: ['Python programming', 'TensorFlow & PyTorch', 'Data analysis', 'Model deployment']
    },
    {
      title: 'Cloud Computing',
      description: 'Master cloud platforms including AWS, Azure, and Google Cloud',
      duration: '8 weeks',
      level: 'Beginner',
      features: ['AWS certification', 'Azure fundamentals', 'DevOps practices', 'Security best practices']
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced cybersecurity training and ethical hacking certification',
      duration: '16 weeks',
      level: 'Advanced',
      features: ['Penetration testing', 'Security analysis', 'Incident response', 'Compliance frameworks']
    },
    {
      title: 'Web Development',
      description: 'Full-stack web development with modern frameworks and tools',
      duration: '10 weeks',
      level: 'Beginner',
      features: ['React & Node.js', 'Database design', 'API development', 'Deployment strategies']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Training Programs | Zion Tech Group</title>
        <meta name="description" content="Professional training programs by Zion Tech Group. Learn AI, cloud computing, cybersecurity, and web development from industry experts." />
        <meta name="keywords" content="training programs, professional development, AI training, cloud computing, cybersecurity, web development, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Professional
              </span>
              <br />
              <span className="text-white">Training Programs</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advance your career with our comprehensive training programs. 
              Learn from industry experts and gain the skills needed for today's technology landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                Browse Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Training Programs?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our training programs are designed by industry experts to provide practical, hands-on learning experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
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
              Our Training Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive training programs designed to advance your career in technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white">{program.title}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">{program.level}</span>
                    <span className="text-gray-400 text-sm">{program.duration}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advance Your Career with Training
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our training programs deliver measurable improvements in skills, knowledge, and career opportunities for professionals.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/10">
              <div className="text-center">
                <GraduationCap className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Ready to Learn?</h3>
                <p className="text-gray-300 mb-6">
                  Contact our training experts to discuss your learning goals and discover the perfect program for your career advancement.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who have advanced their careers with our comprehensive training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
              Start Learning Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              View All Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TrainingPage