import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Wifi, Zap, Globe, Smartphone, Cpu, Database } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FiveGImplementationPage() {
  const services = [
    {
      icon: <Wifi className="w-8 h-8 text-blue-500" />,
      title: '5G Network Setup',
      description: 'Deploy ultra-fast 5G networks with cutting-edge infrastructure and optimization.',
      features: ['Ultra-Fast Speeds - 10+ Gbps', 'Low Latency - 1ms', 'Massive IoT Support', 'Edge Computing'],
      price: 'Starting at $50,000',
      link: '/5g-network-setup'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-500" />,
      title: 'IoT Integration',
      description: 'Connect millions of devices with 5G-powered IoT solutions and management.',
      features: ['Device Management', 'Real-time Monitoring', 'Data Analytics', 'Security Protocols'],
      price: '$25,000',
      link: '/iot-integration'
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: 'Edge Computing',
      description: 'Deploy edge computing solutions to reduce latency and improve performance.',
      features: ['Edge Servers', 'Data Processing', 'Real-time Analytics', 'Cloud Integration'],
      price: '$30,000',
      link: '/edge-computing'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Smart City Solutions',
      description: 'Transform cities with 5G-powered smart infrastructure and services.',
      features: ['Traffic Management', 'Public Safety', 'Environmental Monitoring', 'Citizen Services'],
      price: '$100,000+',
      link: '/smart-city-solutions'
    }
  ]

  const stats = [
    { number: '10+', label: 'Gbps Speeds' },
    { number: '1ms', label: 'Latency' },
    { number: '1M+', label: 'Devices/km²' },
    { number: '99.9%', label: 'Reliability' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Next-generation 5G implementation services including network setup, IoT integration, edge computing, and smart city solutions. Ultra-fast connectivity for the future." />
        <meta name="keywords" content="5G implementation, 5G network, IoT, edge computing, smart city, ultra-fast connectivity" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              5G Implementation Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Next-generation connectivity solutions to power your digital transformation with ultra-fast speeds and ultra-low latency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get 5G Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Explore AI Services
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our 5G Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive 5G solutions designed to transform your connectivity and enable new possibilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">{service.price}</span>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready for the 5G Revolution?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how 5G implementation can transform your business and unlock new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start 5G Implementation
                </Link>
                <Link 
                  to="/it-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
