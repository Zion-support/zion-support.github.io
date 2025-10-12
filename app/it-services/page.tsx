'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Smartphone, Database, Cpu, Wifi, Server, Users, Globe, Zap, Star, Clock } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const services = [
    {
      id: 'cloud-migration',
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Seamless migration to cloud platforms with zero downtime and optimized performance',
      features: [
        'AWS, Azure, and Google Cloud expertise',
        'Zero-downtime migration strategies',
        'Cost optimization and resource management',
        'Disaster recovery and backup solutions',
        'Multi-cloud and hybrid cloud architectures',
        'Security and compliance implementation',
        'Performance monitoring and optimization',
        '24/7 cloud infrastructure management'
      ],
      pricing: 'Starting at $2,500/month',
      category: 'Cloud Services',
      popular: true
    },
    {
      id: 'infrastructure-management',
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, monitoring, and maintenance services',
      features: [
        'Server setup & configuration',
        'Network monitoring',
        'Performance optimization',
        '24/7 support',
        'Disaster recovery',
        'Hardware maintenance',
        'Software updates',
        'Capacity planning'
      ],
      pricing: 'Starting at $1,999/month',
      category: 'Infrastructure',
      popular: true
    },
    {
      id: 'cybersecurity',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your business from cyber threats',
      features: [
        'Threat detection and prevention',
        'Security audits and assessments',
        'Compliance management',
        'Incident response planning',
        'Security training programs',
        'Vulnerability management',
        'Identity and access management',
        'Data protection and encryption'
      ],
      pricing: 'Starting at $3,999/month',
      category: 'Security',
      popular: true
    },
    {
      id: 'database-management',
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management services',
      features: [
        'Database design and architecture',
        'Performance optimization',
        'Backup and recovery',
        'Data migration',
        'Security implementation',
        'Monitoring and maintenance',
        'Cloud database solutions',
        'Data analytics and reporting'
      ],
      pricing: 'Starting at $1,499/month',
      category: 'Data Management',
      popular: false
    },
    {
      id: 'mobile-development',
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'Mobile App Development',
      description: 'Custom mobile applications for iOS and Android platforms',
      features: [
        'Native and cross-platform development',
        'UI/UX design',
        'App store optimization',
        'Performance optimization',
        'Security implementation',
        'Testing and quality assurance',
        'Maintenance and updates',
        'Analytics integration'
      ],
      pricing: 'Starting at $5,999/project',
      category: 'Development',
      popular: false
    },
    {
      id: 'network-services',
      icon: <Wifi className="w-8 h-8 text-indigo-500" />,
      title: 'Network Services',
      description: 'Complete network design, implementation, and management solutions',
      features: [
        'Network design and planning',
        'Wireless network setup',
        'Network security',
        'Performance monitoring',
        'Troubleshooting and support',
        'Network optimization',
        'VPN and remote access',
        'Network documentation'
      ],
      pricing: 'Starting at $999/month',
      category: 'Infrastructure',
      popular: false
    }
  ]

  const categories = ['All', 'Cloud Services', 'Infrastructure', 'Security', 'Data Management', 'Development']

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, infrastructure management, cybersecurity, and database solutions. Expert IT support for your business." />
        <meta name="keywords" content="IT services, cloud migration, infrastructure management, cybersecurity, database management, IT support, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              IT
            </span>
            <br />
            <span className="text-white">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services to support your business growth. From cloud migration to cybersecurity, 
            we provide expert solutions for all your technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get IT Consultation
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
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
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

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-xs px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-lg font-bold text-white">{service.pricing}</div>
                    <div className="text-sm text-purple-300">{service.category}</div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
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
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let our IT experts help you optimize your technology infrastructure and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get IT Consultation
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Us
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

export default ITServicesPage