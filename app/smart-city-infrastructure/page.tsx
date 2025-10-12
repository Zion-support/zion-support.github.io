import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Building, Wifi, Cpu, Database, Shield, Brain, Globe, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SmartCityInfrastructurePage() {
  const features = [
    {
      icon: <Building className="w-8 h-8 text-blue-500" />,
      title: 'Smart Buildings',
      description: 'Intelligent building management systems with IoT sensors and automated controls.'
    },
    {
      icon: <Wifi className="w-8 h-8 text-green-500" />,
      title: 'Connected Infrastructure',
      description: 'Seamless connectivity across all city systems and services.'
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics',
      description: 'Advanced analytics and machine learning for data-driven city management.'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Management',
      description: 'Centralized data collection and processing for informed decision making.'
    }
  ]

  const solutions = [
    'Traffic Management Systems',
    'Smart Lighting Networks',
    'Environmental Monitoring',
    'Public Safety Systems',
    'Energy Management',
    'Waste Management',
    'Water Management',
    'Transportation Systems'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Smart City Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Transform your city with smart infrastructure solutions including IoT, AI analytics, and connected systems." />
        <meta name="keywords" content="smart city, infrastructure, IoT, connected systems, urban planning, city management" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Smart City Infrastructure
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your city with intelligent infrastructure solutions powered by IoT, 
              AI analytics, and connected systems for sustainable urban development.
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
                View Demo
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
              Smart Infrastructure Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive smart city infrastructure designed for the future.
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

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Smart City Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions for modern urban challenges
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-2xl mb-2">🏙️</div>
                <h3 className="text-white font-semibold text-sm">{solution}</h3>
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
              Ready to Build the Future?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your city with our smart infrastructure solutions and create a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Started
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