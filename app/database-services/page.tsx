'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Database, Server, Cloud, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'

const DatabaseServicesPage: React.FC = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: 'Database Design & Architecture',
      description: 'Expert database design and architecture services to optimize performance and scalability.'
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'Database Migration',
      description: 'Seamless migration of your databases to modern platforms with zero downtime.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Database Solutions',
      description: 'Scalable cloud database solutions with automatic backups and disaster recovery.'
    },
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: 'Database Security',
      description: 'Comprehensive security measures to protect your sensitive data and ensure compliance.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Performance Optimization',
      description: 'Database tuning and optimization to improve query performance and reduce costs.'
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: 'Backup & Recovery',
      description: 'Reliable backup and disaster recovery solutions to protect your critical data.'
    }
  ]

  const benefits = [
    'Improved database performance by up to 300%',
    'Reduced operational costs by 40%',
    'Enhanced data security and compliance',
    'Scalable solutions that grow with your business',
    '24/7 monitoring and support',
    'Expert database administration',
    'Automated backup and recovery',
    'Real-time performance monitoring'
  ]

  const services = [
    {
      name: 'Database Design',
      description: 'Custom database design tailored to your business requirements',
      price: 'Starting at $2,500'
    },
    {
      name: 'Database Migration',
      description: 'Seamless migration to modern database platforms',
      price: 'Starting at $5,000'
    },
    {
      name: 'Performance Tuning',
      description: 'Optimize database performance for better efficiency',
      price: 'Starting at $1,500'
    },
    {
      name: 'Security Audit',
      description: 'Comprehensive security assessment and hardening',
      price: 'Starting at $3,000'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Database Services - Zion Tech Group | Expert Database Solutions</title>
        <meta name="description" content="Professional database services including design, migration, optimization, and security. Expert database solutions for your business needs." />
        <meta name="keywords" content="database services, database design, database migration, database optimization, database security, Zion Tech Group" />
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
                  Database Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Expert database solutions to optimize performance, ensure security, and scale your data infrastructure 
                with cutting-edge technology and industry best practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  Schedule Consultation
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
                Comprehensive Database Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From design to optimization, we provide end-to-end database services to meet your business needs.
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
                Why Choose Our Database Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of working with our database experts.
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
                    <Database className="w-6 h-6 text-blue-400 mr-3" />
                    <span className="text-gray-300">MySQL, PostgreSQL, MongoDB</span>
                  </div>
                  <div className="flex items-center">
                    <Cloud className="w-6 h-6 text-purple-400 mr-3" />
                    <span className="text-gray-300">AWS, Azure, Google Cloud</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-gray-300">Security & Compliance</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                    <span className="text-gray-300">Performance Optimization</span>
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
                Our Database Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of database services.
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

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Database?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our database experts help you build a robust, secure, and scalable data infrastructure.
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

export default DatabaseServicesPage