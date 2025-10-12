'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, Database, Server, Shield, Zap, Users, Clock, Star, TrendingUp, Globe, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'

const DatabaseServicesPage: React.FC = () => {
  const features = [
    {
      icon: <Database className="w-6 h-6 text-blue-500" />,
      title: 'Database Design & Architecture',
      description: 'Expert database design and architecture services for optimal performance and scalability.'
    },
    {
      icon: <Server className="w-6 h-6 text-green-500" />,
      title: 'Database Migration',
      description: 'Seamless migration between database platforms with zero data loss and minimal downtime.'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Security & Compliance',
      description: 'Implement robust security measures and ensure compliance with data protection regulations.'
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: 'Performance Optimization',
      description: 'Optimize database performance for faster queries and improved application responsiveness.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$299',
      period: '/month',
      description: 'Perfect for small applications',
      features: [
        'Up to 5 databases',
        'Basic monitoring',
        'Email support',
        'Standard backup',
        'Performance tuning'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 20 databases',
        'Advanced monitoring',
        'Priority support',
        'Automated backups',
        'Performance optimization',
        'Security scanning',
        '24/7 monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'quote',
      description: 'For large organizations',
      features: [
        'Unlimited databases',
        'Custom solutions',
        'Dedicated DBA',
        'Advanced security',
        'SLA guarantee',
        'Custom integrations',
        'White-label support'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: '50% Performance Improvement',
      description: 'Optimized databases deliver significantly faster query performance and better user experience.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: '99.9% Uptime',
      description: 'Reliable database infrastructure ensures maximum availability for your applications.'
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring and proactive maintenance prevent issues before they impact your business.'
    }
  ];

  const databaseTypes = [
    { name: 'MySQL', icon: '🐬', color: 'from-orange-500 to-orange-700' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-600 to-blue-800' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-700' },
    { name: 'Redis', icon: '🔴', color: 'from-red-500 to-red-700' },
    { name: 'Oracle', icon: '🔶', color: 'from-red-600 to-red-800' },
    { name: 'SQL Server', icon: '🪟', color: 'from-blue-500 to-blue-700' },
    { name: 'Cassandra', icon: '🌊', color: 'from-blue-400 to-blue-600' },
    { name: 'Elasticsearch', icon: '🔍', color: 'from-yellow-500 to-yellow-700' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Database Services - Expert Database Management | Zion Tech Group"
        description="Professional database services including design, migration, optimization, and management. Expert DBA support for MySQL, PostgreSQL, MongoDB, and more."
        keywords="database services, database management, DBA services, database migration, database optimization, MySQL, PostgreSQL, MongoDB"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Database
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert database services to optimize performance, ensure security, and maintain 
            the reliability of your critical data infrastructure.
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
              to="/demo" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Database Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From design to optimization, we provide end-to-end database solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Database Types Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Database Types Supported
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert support for all major database platforms and technologies.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {databaseTypes.map((db, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="text-3xl mb-2">{db.icon}</div>
                <div className="text-white font-medium">{db.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Database Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven expertise and results that drive real business value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the database service plan that fits your infrastructure needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500' : 'border-white/20'} hover:bg-white/20 transition-all duration-300 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700' 
                      : 'border border-white text-white hover:bg-white hover:text-gray-900'
                  }`}
                >
                  Get Started
                </Link>
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
                Ready to Optimize Your Database?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Get a free database assessment and discover how we can improve your performance. 
                No obligation required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <Link 
                  to="/demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DatabaseServicesPage