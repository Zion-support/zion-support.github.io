'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Brain, Cloud, Shield, Database, Code, Smartphone, Cpu, Server, Wifi, BarChart3, Users, Clock, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      link: '/ai-services'
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud migration, cybersecurity, DevOps, and infrastructure management.',
      link: '/it-services'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'Micro SAAS Solutions',
      description: 'AI-powered micro applications designed to streamline business operations and boost productivity.',
      link: '/micro-saas-services'
    },
    {
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure and migration services to help your business grow and scale efficiently.',
      link: '/cloud-services'
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving cyber threats and vulnerabilities.',
      link: '/cybersecurity'
    },
    {
      icon: <Database className="w-8 h-8 text-pink-500" />,
      title: 'Database Services',
      description: 'Expert database design, optimization, and management services for optimal performance and reliability.',
      link: '/database-services'
    }
  ]

  const features = [
    '24/7 Expert Support',
    'Cutting-edge Technology',
    'Scalable Solutions',
    'Proven Track Record',
    'Custom Development',
    'Security First Approach'
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions for Modern Businesses</title>
        <meta name="description" content="Leading provider of AI and IT solutions. We help businesses transform with cutting-edge technology including AI services, cloud computing, cybersecurity, and more." />
        <meta name="keywords" content="AI services, IT solutions, cloud computing, cybersecurity, software development, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Transform Your Business with
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI & IT Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                We help businesses leverage cutting-edge technology to drive growth, 
                improve efficiency, and stay ahead of the competition.
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
                  to="/about" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive technology solutions for modern businesses
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="text-purple-400 hover:text-purple-300 transition-colors text-sm sm:text-base font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                We deliver exceptional results with our proven approach
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center p-3 sm:p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 sm:mr-4 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-2">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                  Let's discuss how our AI and IT solutions can help your business 
                  achieve its goals and stay competitive in today's market.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
                  >
                    Get Free Consultation
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default HomePage