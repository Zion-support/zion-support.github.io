'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Cpu, Wifi, Database, Shield, Globe, Users, Clock, Star, Zap, Network } from 'lucide-react'
import { Link } from 'react-router-dom'

const IOTEdgeComputingPage: React.FC = () => {
  const services = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: 'Edge Computing Infrastructure',
      description: 'Deploy and manage edge computing infrastructure for real-time data processing and analysis.'
    },
    {
      icon: <Wifi className="w-8 h-8 text-green-500" />,
      title: 'IoT Device Management',
      description: 'Comprehensive IoT device management and monitoring solutions for connected devices.'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Processing & Analytics',
      description: 'Real-time data processing and analytics at the edge for immediate insights and actions.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Edge Security',
      description: 'Advanced security solutions for edge computing environments and IoT devices.'
    },
    {
      icon: <Network className="w-8 h-8 text-orange-500" />,
      title: 'Network Optimization',
      description: 'Optimize network performance and connectivity for edge computing applications.'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Cloud Integration',
      description: 'Seamless integration between edge computing and cloud platforms for hybrid solutions.'
    }
  ]

  const benefits = [
    'Real-time data processing',
    'Reduced latency',
    'Improved reliability',
    'Cost-effective solutions',
    'Scalable infrastructure',
    'Enhanced security',
    'Expert technical support',
    'Custom edge solutions'
  ]

  const useCases = [
    'Smart Manufacturing',
    'Autonomous Vehicles',
    'Smart Cities',
    'Healthcare Monitoring',
    'Retail Analytics',
    'Industrial IoT',
    'Environmental Monitoring',
    'Predictive Maintenance'
  ]

  return (
    <>
      <Helmet>
        <title>IoT Edge Computing - Zion Tech Group | Edge Computing Solutions</title>
        <meta name="description" content="IoT edge computing services by Zion Tech Group. Edge infrastructure, device management, and real-time data processing solutions." />
        <meta name="keywords" content="IoT edge computing, edge infrastructure, device management, real-time processing, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                IoT Edge Computing
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Transform your business with IoT edge computing solutions. 
                Process data at the edge for real-time insights and improved performance.
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Edge Computing Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive IoT edge computing solutions for modern businesses
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

        {/* Use Cases Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Use Cases</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Perfect for various IoT and edge computing applications
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-3" />
                  <p className="text-gray-300">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Edge Computing Solutions?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                We provide comprehensive edge computing solutions that drive business success
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
                  Ready to Implement Edge Computing?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Transform your business with IoT edge computing solutions. 
                  Get real-time insights and improved performance with our expert services.
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

export default IOTEdgeComputingPage