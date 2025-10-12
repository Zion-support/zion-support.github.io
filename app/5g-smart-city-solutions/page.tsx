import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Wifi, ArrowRight, CheckCircle, Zap, Brain, Smartphone, Globe, Shield, BarChart3, Star, Sparkles, Building, Users, Target, Cpu } from 'lucide-react'
import Layout from '../layout'

export default function FiveGSmartCitySolutions() {
  const features = [
    {
      icon: <Wifi className="w-6 h-6 text-cyan-400" />,
      title: 'Ultra-Fast Connectivity',
      description: '5G networks providing 10x faster speeds and ultra-low latency for smart city applications'
    },
    {
      title: 'Smart Infrastructure',
      description: 'Intelligent traffic management, energy optimization, and environmental monitoring systems'
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Machine learning algorithms analyze city data to optimize services and improve quality of life'
    },
    {
      title: 'Citizen Engagement',
      description: 'Digital platforms connecting citizens with city services and enabling participatory governance'
    }
  ]

  const smartCityModules = [
    {
      category: 'Transportation',
      items: ['Smart Traffic Lights', 'Autonomous Vehicle Support', 'Public Transit Optimization', 'Parking Management', 'Traffic Analytics', 'Emergency Response']
    },
    {
      category: 'Energy & Environment',
      items: ['Smart Grid Management', 'Air Quality Monitoring', 'Waste Management', 'Water Systems', 'Renewable Energy', 'Carbon Footprint Tracking']
    },
    {
      category: 'Public Safety',
      items: ['Video Surveillance', 'Emergency Alerts', 'Crime Prevention', 'Disaster Response', 'Crowd Management', 'Health Monitoring']
    },
    {
      category: 'Digital Services',
      items: ['Citizen Portal', 'Mobile Apps', 'Digital Payments', 'Service Requests', 'Open Data Platform', 'E-Government']
    }
  ]

  const pricingPlans = [
    {
      name: 'Pilot Program',
      price: '$50,000',
      period: 'one-time',
      description: 'Perfect for small cities starting their smart city journey',
      features: [
        'Basic 5G infrastructure',
        'Core smart modules',
        'Citizen engagement platform',
        '6-month implementation',
        'Training and support'
      ],
      popular: false
    },
    {
      name: 'Smart City Pro',
      price: '$250,000',
      period: 'one-time',
      description: 'Comprehensive solution for medium-sized cities',
      features: [
        'Full 5G network deployment',
        'Complete smart city suite',
        'Advanced AI analytics',
        '12-month implementation',
        'Dedicated support team',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Mega City',
      price: 'Custom',
      period: 'pricing',
      description: 'Enterprise solution for large metropolitan areas',
      features: [
        'City-wide 5G coverage',
        'Custom smart city modules',
        'White-label platform',
        'Multi-year implementation',
        '24/7 support team',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Mayor Sarah Johnson',
      company: 'Tech Valley City',
      content: '5G Smart City Solutions transformed our city. Traffic congestion reduced by 30% and citizen satisfaction increased significantly.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Metro Planning Department',
      content: 'The AI-powered analytics help us make data-driven decisions. Our energy efficiency improved by 25% in the first year.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Urban Development Corp',
      content: 'Citizen engagement platform is incredible. Residents can now access city services 24/7 through their smartphones.',
      rating: 5
    }
  ]

  return (
    <Layout
      title="5G Smart City Solutions - Future-Ready Urban Infrastructure | Zion Tech Group"
      description="Transform your city with 5G-powered smart infrastructure. AI analytics, citizen engagement, and sustainable solutions. Get your free smart city assessment today."
      keywords="5G smart city, urban infrastructure, smart transportation, citizen engagement, sustainable cities, IoT solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                <Wifi className="w-4 h-4 mr-2" />
                5G-Powered Smart Cities
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                5G Smart City Solutions
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your city into a smart, sustainable, and connected urban environment with our 
                5G-powered infrastructure solutions and AI-driven analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="#demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Smart City Capabilities
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Comprehensive solutions for modern urban challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Smart City Modules */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Complete Smart City Suite
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Modular solutions that scale with your city's needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {smartCityModules.map((module, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-4">{module.category}</h3>
                  <ul className="space-y-2">
                    {module.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Smart City Investment Plans
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Transform your city with our comprehensive 5G smart city solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-blue-400/40 scale-105 shadow-2xl shadow-blue-500/20' 
                    : 'border-blue-500/20 hover:border-blue-400/40'
                }`}>
                  {plan.popular && (
                    <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                        : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-gray-300">
                See how cities worldwide are transforming with our solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Build the Future of Your City
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join the smart city revolution with 5G-powered infrastructure and AI-driven solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Free Smart City Assessment
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}