'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Wifi, Cpu, Cloud, Shield, Zap, Target, BarChart3, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const IOTEdgeComputingPage: React.FC = () => {
  const services = [
    {
      icon: <Wifi className="w-8 h-8 text-blue-500" />,
      title: 'IoT Device Management',
      description: 'Comprehensive IoT device management and monitoring solutions for connected devices.'
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      title: 'Edge Computing Infrastructure',
      description: 'Deploy and manage edge computing infrastructure for real-time data processing.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Integration',
      description: 'Seamless integration between edge devices and cloud platforms for hybrid solutions.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security solutions for IoT and edge computing environments.'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Real-time Analytics',
      description: 'Process and analyze data at the edge for instant insights and decision making.'
    },
    {
      icon: <Target className="w-8 h-8 text-cyan-500" />,
      title: 'Custom Solutions',
      description: 'Tailored IoT and edge computing solutions for specific industry requirements.'
    }
  ]

  const benefits = [
    'Reduced latency and improved performance',
    'Enhanced data security and privacy',
    'Lower bandwidth and storage costs',
    'Real-time processing and analytics',
    'Improved reliability and uptime',
    'Scalable and flexible solutions'
  ]

  const industries = [
    'Manufacturing', 'Healthcare', 'Retail', 'Transportation', 'Energy', 'Agriculture'
  ]

  return (
    <>
      <Helmet>
        <title>IoT & Edge Computing | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IoT and edge computing solutions. Connect devices, process data at the edge, and build scalable IoT ecosystems." />
        <meta name="keywords" content="IoT, edge computing, connected devices, real-time processing, IoT solutions, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IoT & Edge
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Computing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect devices, process data at the edge, and build scalable IoT ecosystems. 
              Transform your business with intelligent connected solutions.
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
                IoT & Edge Computing Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions to connect, manage, and process data from IoT devices at the edge.
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
                  Why Choose IoT & Edge Computing?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  IoT and edge computing enable real-time processing, reduced latency, and improved efficiency. 
                  Transform your business with intelligent connected solutions.
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
                <h3 className="text-2xl font-bold text-white mb-6">Industries We Serve</h3>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center">
                      <Wifi className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{industry}</span>
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
                  Ready to Build Your IoT Ecosystem?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let our IoT and edge computing experts help you build intelligent connected solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Schedule Consultation
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

export default IOTEdgeComputingPage