'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Bot, Cpu, Shield, Globe, Users, Clock, Star, Zap, Database, Network } from 'lucide-react'
import { Link } from 'react-router-dom'

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
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Industrial Robotics',
      description: 'Robust industrial robotics solutions for manufacturing and production environments.'
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: 'Service Robotics',
      description: 'Service robots for healthcare, hospitality, and customer service applications.'
    },
    {
      icon: <Database className="w-8 h-8 text-cyan-500" />,
      title: 'Robotics Integration',
      description: 'Seamless integration of robotics systems with existing business processes.'
    },
    {
      icon: <Network className="w-8 h-8 text-red-500" />,
      title: 'IoT Robotics',
      description: 'Connected robotics solutions with IoT integration for smart operations.'
    }
  ]

  const benefits = [
    'Increased automation',
    'Improved efficiency',
    'Reduced operational costs',
    'Enhanced precision',
    '24/7 operation capability',
    'Scalable solutions',
    'Expert technical support',
    'Custom robotics development'
  ]

  const applications = [
    'Manufacturing',
    'Healthcare',
    'Logistics',
    'Agriculture',
    'Retail',
    'Security',
    'Customer Service',
    'Research & Development'
  ]

  return (
    <>
      <Helmet>
        <title>Robotics Solutions - Zion Tech Group | Advanced Robotics Services</title>
        <meta name="description" content="Professional robotics solutions by Zion Tech Group. RPA, AI-powered robotics, industrial automation, and service robotics." />
        <meta name="keywords" content="robotics, RPA, industrial automation, service robotics, AI robotics, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Robotics Solutions
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Transform your business with advanced robotics solutions. 
                From process automation to AI-powered robots, we deliver cutting-edge technology.
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
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Robotics Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive robotics solutions for modern businesses
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Applications</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Robotics solutions across various industries
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-3" />
                  <p className="text-gray-300">{application}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Robotics Solutions?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                We provide comprehensive robotics solutions that drive business success
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
                  Ready to Automate with Robotics?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Transform your business with our advanced robotics solutions. 
                  Get intelligent automation that improves efficiency and reduces costs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Free Consultation
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

export default RoboticsPage