'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Building, Wifi, Cpu, Database, Globe, Shield, Users, Clock, Star, Phone, Mail, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

const SmartCityInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: <Building className="w-8 h-8 text-blue-500" />,
      title: 'Smart Building Management',
      description: 'Intelligent building systems for energy efficiency, security, and occupant comfort.'
    },
    {
      icon: <Wifi className="w-8 h-8 text-green-500" />,
      title: '5G Network Infrastructure',
      description: 'Deploy ultra-fast 5G networks to support smart city applications and IoT devices.'
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: 'Edge Computing Nodes',
      description: 'Distributed edge computing infrastructure for real-time data processing and analytics.'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Integration Platform',
      description: 'Unified data platform to collect, process, and analyze data from multiple city systems.'
    },
    {
      icon: <Globe className="w-8 h-8 text-red-500" />,
      title: 'Environmental Monitoring',
      description: 'Comprehensive environmental monitoring systems for air quality, noise, and sustainability.'
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-500" />,
      title: 'Cybersecurity Framework',
      description: 'Advanced cybersecurity measures to protect smart city infrastructure and citizen data.'
    }
  ]

  const benefits = [
    'Reduce energy consumption by 30%',
    'Improve traffic flow by 40%',
    'Enhance public safety and security',
    'Optimize resource utilization',
    'Improve citizen quality of life',
    'Enable data-driven decision making'
  ]

  const services = [
    {
      name: 'Smart City Planning',
      description: 'Comprehensive planning and design for smart city infrastructure',
      price: 'Starting at $100,000'
    },
    {
      name: 'IoT Network Deployment',
      description: 'Deploy and manage city-wide IoT sensor networks',
      price: 'Starting at $50,000/month'
    },
    {
      name: 'Data Analytics Platform',
      description: 'Implement city-wide data analytics and visualization platform',
      price: 'Starting at $25,000/month'
    },
    {
      name: 'Smart Traffic Management',
      description: 'Intelligent traffic management and optimization systems',
      price: 'Starting at $75,000'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'City of Techville',
      content: 'The smart city infrastructure has transformed our city operations and improved citizen satisfaction.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Metro City Council',
      content: 'Energy savings of 30% and improved traffic flow. The results speak for themselves.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Urban Planning Department',
      content: 'Professional, reliable, and innovative. Zion Tech Group is our go-to technology partner.',
      rating: 5
    }
  ]

  return (
    <>
      <Helmet>
        <title>Smart City Infrastructure - Zion Tech Group | Urban Technology Solutions</title>
        <meta name="description" content="Advanced smart city infrastructure solutions including IoT networks, data analytics, traffic management, and environmental monitoring. Transform your city with cutting-edge technology." />
        <meta name="keywords" content="smart city, urban infrastructure, IoT networks, data analytics, traffic management, environmental monitoring, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Smart City Infrastructure
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your city with advanced smart infrastructure solutions. 
                Deploy IoT networks, data analytics, and intelligent systems to create a more efficient, 
                sustainable, and livable urban environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Smart City Solution
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  Schedule Demo
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
                Comprehensive Smart City Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete smart city infrastructure solutions designed for modern urban environments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Smart City Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of intelligent urban infrastructure and data-driven city management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Our Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Building className="w-6 h-6 text-blue-400 mr-3" />
                    <span className="text-gray-300">Smart Building Systems</span>
                  </div>
                  <div className="flex items-center">
                    <Wifi className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-gray-300">5G Network Infrastructure</span>
                  </div>
                  <div className="flex items-center">
                    <Cpu className="w-6 h-6 text-purple-400 mr-3" />
                    <span className="text-gray-300">Edge Computing Solutions</span>
                  </div>
                  <div className="flex items-center">
                    <Database className="w-6 h-6 text-orange-400 mr-3" />
                    <span className="text-gray-300">Data Integration Platforms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Smart City Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of smart city infrastructure solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <h3 className="text-xl font-semibold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-2xl font-bold text-purple-400 mb-6">{service.price}</div>
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 block text-center"
                  >
                    Get Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our City Partners Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it - hear from cities that trust our smart infrastructure solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Build Your Smart City?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our smart city experts help you transform your urban infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default SmartCityInfrastructurePage