import { Helmet } from 'react-helmet-async';

import { ArrowRight } from 'lucide-react';

export default function SmartCityInfrastructurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Smart City Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Professional smart city infrastructure services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Smart City Infrastructure</h1>
        <p className="text-lg text-gray-300 mb-8">Professional smart city infrastructure services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  )
}
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Building, Wifi, Cpu, Database, Globe, Shield, BarChart3, Users } from 'lucide-react';

  const features = [
    {
      icon: <Building className="w-8 h-8 text-blue-500" />,
      title: 'Smart Buildings',
      description: 'Intelligent building management systems with automated controls and energy optimization.',
    },
    {
      icon: <Wifi className="w-8 h-8 text-green-500" />,
      title: 'IoT Networks',
      description: 'Comprehensive IoT infrastructure for connected devices and real-time data collection.',
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics',
      description: 'Advanced AI analytics for urban planning, traffic management, and resource optimization.',
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Management',
      description: 'Centralized data management systems for city-wide information and decision making.',
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security Systems',
      description: 'Comprehensive security and surveillance systems for public safety and crime prevention.',
    },
    {
      icon: <Globe className="w-8 h-8 text-yellow-500" />,
      title: 'Environmental Monitoring',
      description: 'Real-time environmental monitoring and sustainability solutions for smart cities.',
    }
  ]

  const applications = [
    'Traffic management',
    'Energy optimization',
    'Waste management',
    'Public safety',
    'Environmental monitoring',
    'Smart lighting',
    'Water management',
    'Urban planning'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Smart City Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Advanced smart city infrastructure solutions including IoT networks, AI analytics, and intelligent urban systems." />
        <meta name="keywords" content="smart city, IoT infrastructure, urban technology, smart buildings, city analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Smart City
              </span>
              <br />
              <span className="text-white">Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build the future with smart city infrastructure solutions.
              IoT networks, AI analytics, and intelligent urban systems for modern cities.
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
                City Consultation
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
              Smart City Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive smart city infrastructure for modern urban environments.
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
                Smart City Applications
              </h2>
              <p className="text-xl text-gray-300">
                Our smart city solutions power various urban applications
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
              Ready to Build Smart Cities?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your city with our advanced smart city infrastructure solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get City Consultation
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
