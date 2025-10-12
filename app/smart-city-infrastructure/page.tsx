'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Building, Wifi, Cpu, Database, TrafficCone, Lightbulb } from 'lucide-react'

const SmartCityInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: Building,
      title: 'Smart Buildings',
      description: 'Intelligent building management systems with IoT integration for energy efficiency and automation'
    },
    {
      icon: Wifi,
      title: 'IoT Networks',
      description: 'Comprehensive IoT infrastructure for city-wide connectivity and data collection'
    },
    {
      icon: Cpu,
      title: 'Data Analytics',
      description: 'Advanced analytics platform for real-time city data processing and insights'
    },
    {
      icon: Database,
      title: 'Digital Infrastructure',
      description: 'Robust digital infrastructure supporting smart city operations and services'
    }
  ]

  const benefits = [
    'Improve energy efficiency and sustainability',
    'Enhance citizen services and quality of life',
    'Optimize traffic flow and transportation',
    'Reduce operational costs and resource waste',
    'Enable data-driven decision making',
    'Increase public safety and security',
    'Support economic growth and innovation',
    'Create more livable and resilient cities'
  ]

  const services = [
    {
      title: 'Smart Transportation',
      description: 'Intelligent traffic management and public transportation systems',
      features: ['Traffic optimization', 'Smart parking', 'Public transit tracking', 'Route planning']
    },
    {
      title: 'Environmental Monitoring',
      description: 'Real-time environmental monitoring and air quality management',
      features: ['Air quality sensors', 'Noise monitoring', 'Weather tracking', 'Pollution alerts']
    },
    {
      title: 'Smart Utilities',
      description: 'Intelligent utility management for water, electricity, and waste',
      features: ['Smart grids', 'Water management', 'Waste optimization', 'Energy efficiency']
    },
    {
      title: 'Public Safety',
      description: 'Advanced public safety systems and emergency response',
      features: ['Surveillance systems', 'Emergency alerts', 'Crime prevention', 'Disaster response']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Smart City Infrastructure | Zion Tech Group</title>
        <meta name="description" content="Advanced smart city infrastructure solutions by Zion Tech Group. IoT networks, data analytics, and digital transformation for modern cities." />
        <meta name="keywords" content="smart city, infrastructure, IoT, data analytics, digital transformation, urban planning, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Smart City
              </span>
              <br />
              <span className="text-white">Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your city with our advanced smart infrastructure solutions. 
              IoT networks, data analytics, and digital transformation for modern urban environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Smart City Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our smart city infrastructure delivers comprehensive solutions for modern urban challenges and citizen needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Smart City Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive smart city solutions tailored to your city's unique needs and challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transform Your City
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our smart city solutions deliver measurable improvements in efficiency, sustainability, and quality of life for urban communities.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/10">
              <div className="text-center">
                <Lightbulb className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Ready to Go Smart?</h3>
                <p className="text-gray-300 mb-6">
                  Contact our smart city experts to discuss your infrastructure needs and discover how our solutions can transform your urban environment.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Smart City?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join leading cities already using our smart infrastructure solutions to improve efficiency, sustainability, and citizen satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
              Start Your Smart City Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SmartCityInfrastructurePage