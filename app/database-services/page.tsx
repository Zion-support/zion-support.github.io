'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Database, Zap, Shield, Brain, Globe, Users, Clock, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const DatabaseServicesPage: React.FC = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: 'Database Design & Architecture',
      description: 'Expert database design and architecture services for optimal performance and scalability'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'Performance Optimization',
      description: 'Optimize your database performance with advanced tuning and indexing strategies'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with encryption, access controls, and compliance standards'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered Analytics',
      description: 'Advanced analytics and machine learning integration for data-driven insights'
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime and data integrity'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring, maintenance, and technical support'
    }
  ]

  const services = [
    'Database Design & Architecture',
    'Performance Optimization',
    'Data Migration & Integration',
    'Backup & Recovery Solutions',
    'Security & Compliance',
    'Cloud Database Services',
    'Real-time Analytics',
    'Custom Database Development'
  ]

  const benefits = [
    'Advanced database technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]

  return (
    <>
      <Helmet>
        <title>Database Services - Zion Tech Group | Expert Database Solutions</title>
        <meta name="description" content="Professional database services by Zion Tech Group. Database design, optimization, migration, and management solutions for your business." />
        <meta name="keywords" content="database services, database design, database optimization, data migration, database management, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Database Services
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Expert database solutions designed to optimize performance, ensure security, 
                and scale with your business growth.
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
                  to="/pricing" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Database Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive database solutions tailored to your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Services List Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">What We Offer</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Complete database management and optimization services
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-3" />
                  <p className="text-gray-300">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                We deliver exceptional database solutions that drive business success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(4).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Optimize Your Database?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let our database experts help you build, optimize, and manage your data infrastructure for maximum performance and security.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Free Consultation
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
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

export default DatabaseServicesPage