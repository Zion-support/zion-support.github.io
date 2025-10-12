import React from 'react'
<<<<<<< HEAD


import { ArrowRight } from 'lucide-react'
=======
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Wifi, Zap, Users, BarChart3, Clock, Shield, Network, Radio, Globe } from 'lucide-react'
>>>>>>> cursor/website-audit-and-update-with-deployment-a621

export default function FiveGNetworkInfrastructurePage() {
  const features = [
    {
      icon: <Wifi className="w-8 h-8 text-blue-500" />,
      title: '5G Core Network',
      description: 'Deploy advanced 5G core network infrastructure with cloud-native architecture and network slicing capabilities.'
    },
    {
      icon: <Radio className="w-8 h-8 text-green-500" />,
      title: 'RAN Infrastructure',
      description: 'Implement 5G Radio Access Network (RAN) with massive MIMO and beamforming technologies.'
    },
    {
      icon: <Network className="w-8 h-8 text-purple-500" />,
      title: 'Network Slicing',
      description: 'Create dedicated network slices for different services and applications with guaranteed performance.'
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: 'Security & Compliance',
      description: 'Comprehensive security framework for 5G networks with end-to-end encryption and threat protection.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: 'Network Management',
      description: 'Advanced network management and orchestration with AI-powered optimization and monitoring.'
    },
    {
      icon: <Globe className="w-8 h-8 text-yellow-500" />,
      title: 'Edge Computing',
      description: 'Deploy edge computing infrastructure to reduce latency and enable real-time applications.'
    }
  ]

  const applications = [
    'Smart cities',
    'Industrial IoT',
    'Autonomous vehicles',
    'Remote healthcare',
    'Augmented reality',
    'Virtual reality',
    'Smart manufacturing',
    'Connected agriculture'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Network Infrastructure - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Professional 5g network infrastructure services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">5G Network Infrastructure</h1>
        <p className="text-lg text-gray-300 mb-8">Professional 5g network infrastructure services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
=======
        <meta name="description" content="Advanced 5G network infrastructure solutions with core network, RAN, network slicing, and edge computing capabilities." />
        <meta name="keywords" content="5G infrastructure, 5G core network, RAN, network slicing, edge computing, 5G deployment" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              5G Network Infrastructure
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build next-generation 5G network infrastructure with our comprehensive solutions. 
              From core network to edge computing, we deliver complete 5G capabilities.
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
              5G Infrastructure Components
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete 5G network infrastructure solutions for modern connectivity needs.
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
                5G Applications
              </h2>
              <p className="text-xl text-gray-300">
                Enable next-generation applications with our 5G infrastructure solutions
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
              Ready to Deploy 5G Infrastructure?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your network with our advanced 5G infrastructure solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Consultation
              </Link>
              <Link
                to="/5g-implementation"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All 5G Services
              </Link>
            </div>
          </div>
        </div>
      </section>
>>>>>>> cursor/website-audit-and-update-with-deployment-a621
    </div>
  )
}