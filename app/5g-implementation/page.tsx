'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Wifi, Zap, Globe, Cpu, Smartphone, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const FiveGImplementationPage: React.FC = () => {
  const fiveGServices = [
    {
      icon: <Wifi className="w-12 h-12 text-blue-500" />,
      title: '5G Network Infrastructure',
      description: 'Complete 5G network design, deployment, and optimization for maximum coverage and performance.',
      features: [
        'Network planning and design',
        'Tower and antenna installation',
        'Core network deployment',
        'Performance optimization',
        'Coverage analysis'
      ],
      pricing: 'Starting at $50,000',
      popular: true,
      link: '/5g-network-infrastructure'
    },
    {
      icon: <Zap className="w-12 h-12 text-green-500" />,
      title: '5G IoT Solutions',
      description: 'Comprehensive IoT solutions leveraging 5G connectivity for smart cities, industrial automation, and connected devices.',
      features: [
        'IoT device integration',
        'Real-time data processing',
        'Edge computing deployment',
        'Sensor network management',
        'Data analytics platform',
        'Remote monitoring'
      ],
      pricing: '$25,000/month',
      popular: false,
      link: '/5g-iot-solutions'
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-500" />,
      title: '5G Edge Computing',
      description: 'Edge computing solutions that bring processing power closer to data sources for ultra-low latency applications.',
      features: [
        'Edge server deployment',
        'Distributed computing',
        'Real-time processing',
        'Content delivery optimization',
        'Edge AI integration',
        'Latency optimization'
      ],
      pricing: '$15,000/month',
      popular: false,
      link: '/5g-edge-computing'
    },
    {
      icon: <Cpu className="w-12 h-12 text-orange-500" />,
      title: '5G Private Networks',
      description: 'Dedicated 5G private networks for enterprises, campuses, and industrial facilities with enhanced security and control.',
      features: [
        'Private 5G core',
        'Dedicated spectrum',
        'Enhanced security',
        'Custom network policies',
        'Enterprise integration',
        '24/7 monitoring'
      ],
      pricing: '$35,000/month',
      popular: false,
      link: '/5g-private-networks'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: '5G Mobile Applications',
      description: 'Next-generation mobile applications optimized for 5G networks with AR/VR, real-time streaming, and immersive experiences.',
      features: [
        'AR/VR applications',
        'Real-time streaming',
        'Immersive gaming',
        'Video conferencing',
        'Cloud gaming',
        'Mobile optimization'
      ],
      pricing: '$20,000',
      popular: false,
      link: '/5g-mobile-apps'
    }
  ]

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Ultra-Fast Speeds',
      description: 'Experience speeds up to 10 Gbps with 5G technology, enabling new possibilities for data-intensive applications.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Low Latency',
      description: 'Achieve ultra-low latency of 1ms or less, perfect for real-time applications and critical communications.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Massive Connectivity',
      description: 'Support for up to 1 million devices per square kilometer, enabling the Internet of Things revolution.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Enhanced Reliability',
      description: '99.999% reliability with advanced error correction and network redundancy for mission-critical applications.'
    }
  ]

  const useCases = [
    {
      title: 'Smart Cities',
      description: 'Traffic management, environmental monitoring, and public safety systems powered by 5G connectivity.',
      icon: <Globe className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Industrial IoT',
      description: 'Manufacturing automation, predictive maintenance, and real-time quality control in industrial environments.',
      icon: <Cpu className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Healthcare',
      description: 'Remote surgery, telemedicine, and real-time patient monitoring with ultra-reliable 5G networks.',
      icon: <Smartphone className="w-8 h-8 text-red-500" />
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Vehicle-to-everything (V2X) communication, real-time navigation, and autonomous driving capabilities.',
      icon: <Zap className="w-8 h-8 text-purple-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with 5G implementation services. Ultra-fast speeds, low latency, and massive connectivity for next-generation applications." />
        <meta name="keywords" content="5G implementation, 5G services, 5G network, IoT solutions, edge computing, private networks" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              5G Implementation
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with 5G technology. Ultra-fast speeds, ultra-low latency, 
              and massive connectivity for next-generation applications and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5G Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why 5G Matters</h2>
            <p className="text-xl text-gray-600">The key advantages of 5G technology for your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our 5G Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive 5G solutions designed to meet your specific business requirements and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fiveGServices.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                  service.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <span className="text-2xl font-bold text-gray-900">
                    {service.pricing}
                  </span>
                </div>

                <Link
                  to={service.link}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5G Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how 5G technology can transform various industries and applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Implement 5G?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our 5G experts help you design, deploy, and optimize your 5G infrastructure for maximum performance and ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your 5G Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FiveGImplementationPage