import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Cloud, Shield, Code, Database, Users, Clock, Server, Globe, Zap, BarChart3, Settings, Phone } from 'lucide-react'

export default function ITServicesPage() {
  const itServices = [
    {
      name: 'Cloud Migration',
      path: '/cloud-migration',
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero-downtime guarantee.',
      price: 'Starting at $2,500',
      features: ['Multi-cloud strategy', 'Zero-downtime migration', 'Security & compliance', 'Cost optimization'],
      popular: true
    },
    {
      name: 'Cybersecurity',
      path: '/cybersecurity',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      description: 'Comprehensive cybersecurity solutions with 24/7 monitoring and threat detection.',
      price: 'Starting at $199/month',
      features: ['Threat detection', 'Security audits', 'Compliance management', 'Incident response'],
      popular: true
    },
    {
      name: 'Mobile Development',
      path: '/mobile-development',
      icon: <Phone className="w-8 h-8 text-green-500" />,
      description: 'Native and cross-platform mobile apps for iOS and Android with modern technologies.',
      price: 'Starting at $5,000',
      features: ['iOS & Android apps', 'Cross-platform development', 'UI/UX design', 'App store deployment'],
      popular: false
    },
    {
      name: 'API Development',
      path: '/api-development',
      icon: <Code className="w-8 h-8 text-purple-500" />,
      description: 'RESTful and GraphQL APIs with comprehensive documentation and testing.',
      price: 'Starting at $3,500',
      features: ['REST & GraphQL APIs', 'API documentation', 'Testing & validation', 'Performance optimization'],
      popular: false
    },
    {
      name: 'Database Management',
      path: '/database-management',
      icon: <Database className="w-8 h-8 text-orange-500" />,
      description: 'Database design, optimization, and management for improved performance and reliability.',
      price: 'Starting at $1,500/month',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening'],
      popular: false
    },
    {
      name: 'System Integration',
      path: '/system-integration',
      icon: <Settings className="w-8 h-8 text-indigo-500" />,
      description: 'Connect and integrate disparate systems for seamless data flow and automation.',
      price: 'Starting at $4,000',
      features: ['System integration', 'Data synchronization', 'Workflow automation', 'Custom connectors'],
      popular: false
    },
    {
      name: 'IT Consulting',
      path: '/it-consulting',
      icon: <Users className="w-8 h-8 text-pink-500" />,
      description: 'Strategic IT consulting to align technology with business objectives and goals.',
      price: 'Starting at $150/hour',
      features: ['Technology strategy', 'Digital transformation', 'Process optimization', 'Vendor selection'],
      popular: false
    },
    {
      name: 'Network Infrastructure',
      path: '/network-infrastructure',
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      description: 'Design and implement robust network infrastructure for optimal performance and security.',
      price: 'Starting at $2,000',
      features: ['Network design', 'Security implementation', 'Performance monitoring', 'Disaster recovery'],
      popular: false
    }
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'Rapid Deployment',
      description: 'Quick implementation with minimal disruption to your business operations.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance to industry standards and regulations.'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions.'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support for your IT infrastructure.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '100+', label: 'Happy Clients' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, mobile development, and system integration. Transform your business with our expert IT solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, mobile development, API development, system integration, IT consulting" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT solutions designed to modernize your infrastructure, 
              enhance security, and drive business growth with cutting-edge technology.
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
                View All Demos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive collection of IT solutions and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                service.popular ? 'border-purple-500 bg-white/15' : 'border-white/20'
              }`}>
                {service.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-lg font-semibold text-purple-400 mb-4">{service.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Learn More
                </Link>
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
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide enterprise-grade IT solutions that deliver real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start your free consultation today and discover how our IT services can revolutionize your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}