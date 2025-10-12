import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Bot, Zap, Users, BarChart3, Clock, Shield, Cpu, Globe, Settings } from 'lucide-react'

export default function RoboticsPage() {
  const features = [
    {
      icon: <Bot className="w-8 h-8 text-blue-500" />,
      title: 'Industrial Robotics',
      description: 'Advanced industrial robotics solutions for manufacturing, assembly, and automation processes.'
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      title: 'AI-Powered Robotics',
      description: 'Intelligent robotics systems powered by artificial intelligence and machine learning.'
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-500" />,
      title: 'Custom Robotics',
      description: 'Custom-designed robotics solutions tailored to your specific business requirements.'
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: 'Safety Systems',
      description: 'Comprehensive safety systems and protocols for safe human-robot collaboration.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and analytics for robotics performance and optimization.'
    },
    {
      icon: <Globe className="w-8 h-8 text-yellow-500" />,
      title: 'Remote Operations',
      description: 'Remote monitoring and control of robotics systems from anywhere in the world.'
    }
  ]

  const applications = [
    'Manufacturing automation',
    'Warehouse logistics',
    'Quality inspection',
    'Material handling',
    'Assembly operations',
    'Packaging systems',
    'Service robotics',
    'Research and development'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Robotics Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced robotics solutions including industrial automation, AI-powered robots, and custom robotics systems." />
        <meta name="keywords" content="robotics, industrial automation, AI robots, custom robotics, manufacturing automation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Robotics
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Advanced robotics solutions for industrial automation and intelligent systems. 
              Transform your operations with cutting-edge robotics technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Request Demo
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
              Robotics Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive robotics solutions for modern industrial and commercial applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Robotics Applications
              </h2>
              <p className="text-xl text-gray-300">
                Our robotics solutions power various industrial and commercial applications
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Automate with Robotics?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your operations with our advanced robotics solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Consultation
              </Link>
              <Link
                to="/it-services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}