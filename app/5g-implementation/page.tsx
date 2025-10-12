import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Wifi, Smartphone, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FiveGImplementationPage() {
  const services = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: '5G Network Design',
      description: 'Complete 5G network architecture and infrastructure design.',
      features: ['Network planning', 'Site surveys', 'Coverage optimization', 'Capacity planning']
    },
    {
      icon: <Wifi className="w-8 h-8 text-green-500" />,
      title: '5G Infrastructure',
      description: 'Deployment of 5G base stations and core network components.',
      features: ['Base station installation', 'Core network setup', 'Backhaul solutions', 'Edge computing']
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      title: '5G Applications',
      description: 'Development of 5G-enabled applications and services.',
      features: ['IoT solutions', 'AR/VR applications', 'Real-time analytics', 'Mobile apps']
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: '5G Testing',
      description: 'Comprehensive testing and optimization of 5G networks.',
      features: ['Performance testing', 'Coverage analysis', 'Speed optimization', 'Quality assurance']
    }
  ]

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Ultra-Fast Speeds',
      description: 'Experience speeds up to 100x faster than 4G'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Low Latency',
      description: 'Near real-time communication with minimal delay'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Massive Connectivity',
      description: 'Support for millions of connected devices'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Enhanced Reliability',
      description: 'More stable and reliable network connections'
    }
  ]

  return (
    <>
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Complete 5G network implementation services including design, deployment, testing, and optimization for businesses." />
        <meta name="keywords" content="5G implementation, 5G network, 5G services, network deployment, 5G infrastructure" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                5G Implementation
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with next-generation 5G technology. 
                We provide complete 5G network design, deployment, and optimization services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-24 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our 5G Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive 5G solutions designed to meet your specific business requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose 5G?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover the advantages of 5G technology for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Implement 5G?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let our experts help you design and deploy a 5G network that transforms your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                Start Your 5G Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}