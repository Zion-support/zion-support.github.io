'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Settings, Database, Smartphone, Globe, Zap, ArrowRight, CheckCircle, Star, Users, Clock } from 'lucide-react';
      price: 'Starting at $200/hour',
      marketPrice: '$300-500/hour',
      benefits: ['Strategic guidance', 'Technology expertise', 'Cost optimization', 'Digital transformation']
    },
    {
      id: 12,
      title: 'Process Automation',
      description: 'Workflow automation solutions to streamline business processes and improve efficiency.',
      icon: Zap,
      category: 'Automation',
      features: [
        'Workflow automation',
        'Process optimization',
        'Integration solutions',
        'Document management',
        'Task automation',
        'Performance monitoring'
      ],
      price: 'Starting at $1,500/month',
      marketPrice: '$2500-8000/month',
      benefits: ['Improved efficiency', 'Reduced errors', 'Cost savings', 'Scalable automation']
    { 
      name: 'Cloud Infrastructure & Migration', 
      href: '/cloud-services', 
      icon: Cloud, 
      description: 'Complete cloud solutions including AWS, Azure, and GCP migration and management',
      price: 'Starting at $2,500/month',
      features: ['Cloud architecture design', 'Migration planning & execution', 'Cost optimization', 'Security compliance', '24/7 monitoring', 'Disaster recovery']
    },
    { 
      name: 'DevOps & CI/CD Pipeline', 
      href: '/devops', 
      icon: Settings, 
      description: 'Automated development workflows and deployment pipelines for faster delivery',
      price: 'Starting at $3,000/month',
      features: ['CI/CD pipeline setup', 'Container orchestration', 'Infrastructure as Code', 'Automated testing', 'Deployment automation', 'Performance monitoring']
    },
    { 
      name: 'Database Management & Optimization', 
      href: '/database', 
      icon: Database, 
      description: 'Comprehensive database services including design, optimization, and maintenance',
      price: 'Starting at $1,800/month',
      features: ['Database design & architecture', 'Performance optimization', 'Backup & recovery', 'Security hardening', 'Migration services', '24/7 support']
    },
    { 
      name: 'Cybersecurity Solutions', 
      href: '/cybersecurity', 
      icon: Shield, 
      description: 'Advanced security solutions to protect your digital assets and ensure compliance',
      price: 'Starting at $4,000/month',
      features: ['Security assessment', 'Threat detection', 'Vulnerability management', 'Compliance auditing', 'Incident response', 'Security training']
    },
    { 
      name: 'Managed IT Services', 
      href: '/managed-it', 
      icon: Settings, 
      description: 'Complete IT management including helpdesk, monitoring, and maintenance',
      price: 'Starting at $2,200/month',
      features: ['24/7 helpdesk support', 'Proactive monitoring', 'Patch management', 'Asset management', 'User training', 'Vendor management']
    },
    { 
      name: 'IT Strategy & Consulting', 
      href: '/it-consulting', 
      icon: Globe, 
      description: 'Strategic IT consulting to align technology with business objectives',
      price: 'Starting at $1,500/month',
      features: ['Technology roadmap', 'Vendor evaluation', 'Cost analysis', 'Digital transformation', 'Change management', 'Training programs']
    },
    { 
      name: 'Data Analytics & Business Intelligence', 
      href: '/data-analytics', 
      icon: Database, 
      description: 'Transform your data into actionable insights with advanced analytics solutions',
      price: 'Starting at $2,800/month',
      features: ['Data warehouse design', 'ETL/ELT processes', 'Dashboard development', 'Predictive analytics', 'Data governance', 'Real-time reporting']
    },
    { 
      name: 'Mobile Application Development', 
      href: '/mobile-development', 
      icon: Smartphone, 
      description: 'Native and cross-platform mobile applications for iOS and Android',
      price: 'Starting at $8,000/project',
      features: ['Native iOS/Android apps', 'Cross-platform development', 'UI/UX design', 'API integration', 'App store deployment', 'Maintenance & updates']
    },
    { 
      name: 'Web Application Development', 
      href: '/web-development', 
      icon: Globe, 
      description: 'Custom web applications and e-commerce solutions built with modern technologies',
      price: 'Starting at $6,000/project',
      features: ['Custom web applications', 'E-commerce solutions', 'API development', 'Responsive design', 'Performance optimization', 'SEO optimization']
    },
    { 
      name: 'Process Automation & RPA', 
      href: '/process-automation', 
      icon: Zap, 
      description: 'Automate repetitive business processes to improve efficiency and reduce costs',
      price: 'Starting at $3,500/month',
      features: ['Process analysis', 'Automation design', 'RPA implementation', 'Workflow optimization', 'Integration services', 'Training & support']
    },
    { 
      name: 'Network Infrastructure & Security', 
      href: '/network-solutions', 
      icon: Globe, 
      description: 'Complete network design, implementation, and security solutions',
      price: 'Starting at $2,000/month',
      features: ['Network design & implementation', 'Firewall configuration', 'VPN setup', 'Wireless solutions', 'Network monitoring', 'Security hardening']
    },
    { 
      name: 'IT Support & Helpdesk', 
      href: '/it-support', 
      icon: Settings, 
      description: 'Comprehensive IT support services for all your technology needs',
      price: 'Starting at $1,200/month',
      features: ['24/7 technical support', 'Remote assistance', 'Hardware maintenance', 'Software installation', 'User training', 'Issue resolution']
      description: 'Custom web applications, e-commerce platforms, and enterprise solutions',
      price: '$5,000 - $100,000',
      features: ['Custom web apps', 'E-commerce platforms', 'API development', 'Performance optimization']
    },
    { 
      name: 'Process Automation', 
      href: '/process-automation', 
      icon: Zap, 
      description: 'Workflow automation, RPA implementation, and business process optimization',
      price: '$2,000 - $25,000',
      features: ['RPA implementation', 'Workflow automation', 'API integrations', 'Process optimization']
    },
    { 
      name: 'Network Infrastructure', 
      href: '/network-infrastructure', 
      icon: Globe, 
      description: 'Network design, implementation, and optimization for enterprise environments',
      price: '$3,000 - $35,000',
      features: ['Network design', 'Wireless solutions', 'VPN setup', 'Network security']
    },
    { 
      name: 'Disaster Recovery & Backup', 
      href: '/disaster-recovery', 
      icon: Shield, 
      description: 'Comprehensive backup solutions and disaster recovery planning',
      price: '$1,000 - $15,000',
      features: ['Backup solutions', 'Disaster recovery planning', 'Business continuity', 'Testing & validation']
    }
  ];

  const categories = ['all', 'Cloud', 'Security', 'DevOps', 'Database', 'Infrastructure', 'Support', 'Development', 'Analytics', 'Networking', 'Consulting', 'Automation'];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })
  const stats = [
    { icon: <Server className="w-8 h-8 text-cyan-500" />, value: '500+', label: 'Servers Managed' },
    { icon: <Shield className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Security Uptime' },
    { icon: <Users className="w-8 h-8 text-purple-500" />, value: '200+', label: 'Clients Served' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '50%', label: 'Cost Reduction' }      price: '$299/hour',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'Cloud', name: 'Cloud' },
    { id: 'Security', name: 'Security' },
    { id: 'Database', name: 'Database' },
    { id: 'Development', name: 'Development' },
    { id: 'Consulting', name: 'Consulting' }    <React.Fragment>    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete IT solutions to modernize your infrastructure, enhance security, and drive business growth. 
              From cloud migration to cybersecurity, we deliver enterprise-grade technology services.
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IT <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to modernize your infrastructure, 
            enhance security, and drive business growth.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our IT Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our IT Services</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                service.popular
                  ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20'
                  : 'border-slate-700 hover:border-slate-600'
              }`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-6">{service.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                  service.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
                }`}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert team help you modernize your IT infrastructure and 
              secure your business for the future.        </section>
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  to={service.href}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors" />
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group hover:bg-slate-800/70"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="text-cyan-400 font-semibold text-lg">{service.price}</div>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-400 text-sm">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <span>Get Quote</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>        </div>
      </section>
    </div>