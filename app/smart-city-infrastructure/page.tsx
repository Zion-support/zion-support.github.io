'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Building, Wifi, Cpu, Database, Globe, Zap, Shield, Users, BarChart3, Cloud, Target } from 'lucide-react'

const SmartCityInfrastructurePage: React.FC = () => {
  const solutions = [
    {
      icon: <Building className="w-8 h-8 text-blue-500" />,
      title: 'Smart Buildings',
      description: 'Intelligent building management systems for energy efficiency and automation.',
      features: ['Energy Management', 'HVAC Control', 'Security Systems', 'Occupancy Monitoring'],
      price: 'Starting at $299/hour'
    },
    {
      icon: <Wifi className="w-8 h-8 text-green-500" />,
      title: 'IoT Networks',
      description: 'Comprehensive IoT infrastructure for smart city connectivity.',
      features: ['Sensor Networks', 'Data Collection', 'Real-time Monitoring', 'Edge Computing'],
      price: 'Starting at $399/hour'
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics',
      description: 'AI-powered analytics for smart city data processing and insights.',
      features: ['Predictive Analytics', 'Traffic Optimization', 'Resource Management', 'Decision Support'],
      price: 'Starting at $499/hour'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Management',
      description: 'Centralized data management and processing for smart city operations.',
      features: ['Data Integration', 'Real-time Processing', 'Data Visualization', 'API Management'],
      price: 'Starting at $349/hour'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Digital Services',
      description: 'Digital citizen services and e-government solutions.',
      features: ['Online Services', 'Mobile Apps', 'Digital Payments', 'Citizen Engagement'],
      price: 'Starting at $249/hour'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Energy Management',
      description: 'Smart energy systems for sustainable city operations.',
      features: ['Renewable Energy', 'Grid Management', 'Energy Storage', 'Demand Response'],
      price: 'Starting at $199/hour'
    }
  ]

  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-green-500" />,
      title: 'Improved Efficiency',
      description: 'Optimize city operations and reduce resource consumption by up to 40%'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: 'Better Citizen Experience',
      description: 'Enhance quality of life with smart city services and amenities'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Enhanced Security',
      description: 'Improve public safety with intelligent monitoring and response systems'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions with real-time data and analytics'
    }
  ]

  const applications = [
    'Traffic Management', 'Public Safety', 'Energy Systems', 'Waste Management', 'Water Systems', 'Healthcare', 'Education', 'Transportation'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Smart City Infrastructure - Zion Tech Group"
        description="Transform your city with smart infrastructure solutions including IoT networks, AI analytics, and digital services. Build sustainable and efficient smart cities."
        keywords="smart city, smart infrastructure, IoT, city management, digital transformation, sustainable cities, Zion Tech Group"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Smart City <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Infrastructure</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your city with intelligent infrastructure solutions. From IoT networks to AI analytics, 
            we help build sustainable and efficient smart cities for the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#solutions" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="/contact" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Smart City Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Smart city solutions improve efficiency, sustainability, and quality of life for citizens.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{benefit.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Smart City Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive smart city infrastructure solutions designed for modern urban environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {solution.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{solution.price}</span>
                  <a 
                    href="/contact" 
                    className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart City Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our smart city solutions are applied across various urban systems and services.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {applications.map((application, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <p className="text-gray-300 text-sm font-medium">{application}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Build a Smart City?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our smart city infrastructure solutions can transform your urban environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SmartCityInfrastructurePage
