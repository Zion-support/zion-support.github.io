import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Building, Wifi, BarChart3, Shield, Users, Zap, Globe } from 'lucide-react'

export default function SmartCityInfrastructurePage() {
  const features = [
    {
      icon: <Building className="w-8 h-8 text-blue-500" />,
      title: 'Smart Building Management',
      description: 'Intelligent building systems for energy efficiency, security, and automated facility management.'
    },
    {
      icon: <Wifi className="w-8 h-8 text-green-500" />,
      title: 'IoT Network Infrastructure',
      description: 'Comprehensive IoT connectivity solutions for city-wide sensor networks and data collection.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Data Analytics Platform',
      description: 'Advanced analytics and AI-powered insights for urban planning and decision-making.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Framework',
      description: 'Robust security measures to protect critical city infrastructure and citizen data.'
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: 'Citizen Engagement Platform',
      description: 'Digital platforms for citizen services, feedback, and community engagement.'
    },
    {
      icon: <Zap className="w-8 h-8 text-indigo-500" />,
      title: 'Energy Management',
      description: 'Smart grid solutions and renewable energy integration for sustainable urban development.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Pilot Program',
      price: '$50,000',
      period: 'one-time',
      description: 'Small-scale smart city pilot implementation',
      features: [
        'Single district implementation',
        'Basic IoT sensors',
        'Data collection platform',
        'Basic analytics',
        '6-month support',
        'Performance monitoring',
        'Citizen feedback system'
      ],
      popular: false
    },
    {
      name: 'City-Wide Implementation',
      price: '$500,000',
      period: 'one-time',
      description: 'Complete smart city infrastructure deployment',
      features: [
        'Full city coverage',
        'Advanced IoT network',
        'AI-powered analytics',
        'Citizen engagement platform',
        '2-year support',
        'Real-time monitoring',
        'Scalable architecture',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise Solution',
      price: 'Contact Us',
      period: '',
      description: 'Custom smart city solutions for large metropolitan areas',
      features: [
        'Multi-city deployment',
        'Custom development',
        'Advanced AI systems',
        'Dedicated support team',
        'Ongoing maintenance',
        'Performance optimization',
        'Compliance management',
        'White-label options'
      ],
      popular: false
    }
  ]

  const smartCityServices = [
    'Traffic Management Systems',
    'Environmental Monitoring',
    'Public Safety Solutions',
    'Waste Management',
    'Water Quality Monitoring',
    'Air Quality Control',
    'Parking Management',
    'Emergency Response'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Smart City Infrastructure - Zion Tech Group | Urban Technology Solutions</title>
        <meta name="description" content="Transform your city with smart infrastructure solutions. IoT networks, data analytics, and citizen engagement platforms for modern urban development." />
        <meta name="keywords" content="smart city, urban infrastructure, IoT solutions, city analytics, smart buildings, citizen engagement" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Smart City Infrastructure
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your city with cutting-edge smart infrastructure solutions. 
              Enhance citizen services, optimize resource management, and create sustainable urban environments.
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
                View Case Studies
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
              Smart City Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions for modern urban infrastructure
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

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart City Implementation Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the smart city solution that fits your urban development goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500 bg-gradient-to-br from-purple-500/20 to-blue-500/20' 
                  : 'border-white/20 hover:border-white/40'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.name === 'Enterprise Solution' ? 'Contact Us' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Smart City Services
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive solutions for all aspects of smart city development
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {smartCityServices.map((service, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
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
              Ready to Build Your Smart City?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your urban environment with our comprehensive smart city infrastructure solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/it-services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All IT Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}