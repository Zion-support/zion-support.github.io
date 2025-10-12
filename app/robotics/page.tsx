'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Bot, Cpu, Zap, Target, BarChart3, Users, Clock, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const RoboticsPage: React.FC = () => {
  const services = [
    {
      icon: <Bot className="w-8 h-8 text-blue-500" />,
      title: 'Robotic Process Automation',
      description: 'Automate repetitive tasks with intelligent robotic solutions for improved efficiency.'
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      title: 'AI-Powered Robotics',
      description: 'Advanced robotics systems powered by artificial intelligence and machine learning.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Industrial Automation',
      description: 'Comprehensive industrial automation solutions for manufacturing and production.'
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: 'Precision Robotics',
      description: 'High-precision robotic systems for delicate and complex operations.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
      title: 'Analytics & Monitoring',
      description: 'Real-time monitoring and analytics for robotic systems performance optimization.'
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: 'Human-Robot Collaboration',
      description: 'Safe and efficient human-robot collaboration systems for enhanced productivity.'
    }
  ]

  const benefits = [
    'Increased operational efficiency',
    'Reduced human error and risk',
    '24/7 continuous operation',
    'Improved precision and accuracy',
    'Cost reduction and ROI improvement',
    'Scalable and flexible solutions'
  ]

  const applications = [
    'Manufacturing', 'Healthcare', 'Logistics', 'Agriculture', 'Construction', 'Retail', 'Security', 'Research'
  ]

  return (
    <>
      <Helmet>
        <title>Robotics Solutions | Zion Tech Group</title>
        <meta name="description" content="Advanced robotics solutions including RPA, AI-powered robotics, and industrial automation. Transform your operations with intelligent robotic systems." />
        <meta name="keywords" content="robotics, RPA, industrial automation, AI robotics, robotic systems, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Robotics
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced robotics solutions to automate processes, improve efficiency, and transform your operations. 
              From RPA to industrial automation, we deliver intelligent robotic systems.
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

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Robotics Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive robotics solutions designed to automate processes and improve efficiency.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
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
                  Why Choose Our Robotics Solutions?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our robotics solutions combine cutting-edge technology with practical applications to deliver 
                  real business value. Automate processes, improve efficiency, and reduce costs.
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
                <h3 className="text-2xl font-bold text-white mb-6">Applications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-center">
                      <Bot className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{application}</span>
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
                  Ready to Automate Your Operations?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let our robotics experts help you implement intelligent automation solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Explore AI Services
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

export default RoboticsPage