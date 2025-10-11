<<<<<<< HEAD
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Shield, Cloud, Database, Code, Users, Settings, Zap, Brain, BarChart, Target, TrendingUp, Globe, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for your business needs.',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Migration Services', 'DevOps', 'Monitoring'],
      price: 'From $500/month'
    },
    {
      id: 2,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: Shield,
      features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Incident Response'],
      price: 'From $1,000/month'
    },
    {
      id: 3,
      title: 'Database Management',
      description: 'Optimize and maintain your database infrastructure.',
      icon: Database,
      features: ['Performance Tuning', 'Backup & Recovery', 'Migration', 'Monitoring'],
      price: 'From $800/month'
    },
    {
      id: 4,
      title: 'Network Solutions',
      description: 'Design and implement robust network infrastructure.',
      icon: Wifi,
      features: ['Network Design', 'Security Implementation', 'Monitoring', 'Support'],
      price: 'From $600/month'
    },
    {
      id: 5,
      title: 'IT Support',
      description: '24/7 technical support for your business operations.',
      icon: Users,
      features: ['Help Desk', 'Remote Support', 'On-site Service', 'Training'],
      price: 'From $300/month'
    },
    {
      id: 6,
      title: 'System Administration',
      description: 'Comprehensive system management and maintenance.',
      icon: Settings,
      features: ['Server Management', 'User Management', 'Security Updates', 'Monitoring'],
      price: 'From $700/month'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Fast Implementation',
      description: 'Quick deployment and setup of IT solutions'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 support from certified professionals'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business'
=======
'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Cloud, Code, Shield, Database, Users, ArrowRight, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const services = [
    {
      id: 1,
      title: 'Cloud Architecture',
      description: 'Design and implement scalable cloud solutions for modern businesses.',
      category: 'cloud',
      icon: Cloud,
      features: ['AWS, Azure, GCP expertise', 'Scalable infrastructure', 'Cost optimization', 'Security compliance']
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      category: 'development',
      icon: Code,
      features: ['React, Next.js, Vue.js', 'Mobile-first design', 'Performance optimization', 'SEO friendly']
    },
    {
      id: 3,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions.',
      category: 'security',
      icon: Shield,
      features: ['Threat assessment', 'Security monitoring', 'Compliance management', 'Incident response']
    },
    {
      id: 4,
      title: 'Database Design',
      description: 'Optimize data storage and retrieval with custom database solutions.',
      category: 'database',
      icon: Database,
      features: ['SQL & NoSQL databases', 'Data modeling', 'Performance tuning', 'Backup & recovery']
    },
    {
      id: 5,
      title: 'DevOps & CI/CD',
      description: 'Streamline development and deployment with automation tools.',
      category: 'devops',
      icon: Users,
      features: ['CI/CD pipelines', 'Container orchestration', 'Infrastructure as code', 'Monitoring & logging']
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
    }
  ]

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'cloud', name: 'Cloud Services' },
    { id: 'development', name: 'Web Development' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'database', name: 'Database' },
    { id: 'devops', name: 'DevOps' }
  ]

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  )

  return (
    <>
<<<<<<< HEAD
=======
      <Helmet>
        <title>IT Services - Zion Tech Group | Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud architecture, web development, cybersecurity, database design, and DevOps. Modern technology solutions for your business." />
        <meta name="keywords" content="IT services, cloud architecture, web development, cybersecurity, database design, DevOps, technology solutions" />
      </Helmet>
      
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive IT solutions to keep your business running smoothly and securely.
              </p>
=======
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Modern technology solutions to power your business. From cloud architecture to cybersecurity, we provide comprehensive IT services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Portfolio
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300">
                We provide reliable, secure, and scalable IT solutions tailored to your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
=======
        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive IT solutions designed to meet your business requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-cyan-400">{service.price}</div>
                  </div>
                  
                  <button className="w-full cyber-button group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:scale-105">
                    Learn More
                    <ArrowRight className="w-4 h-4 inline ml-2" />
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our IT services can help streamline your operations and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="cyber-button-secondary">
                Schedule Consultation
                <Calendar className="w-5 h-5 ml-2" />
=======
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our IT services can help you build a robust, scalable technology foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Your IT Transformation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Schedule Consultation
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
              </button>
            </div>
          </div>
        </section>
<<<<<<< HEAD
      </div>
      
      <Footer />
    </>
  );
};

export default ITServicesPage;
=======

        <Footer />
      </div>
    </>
  )
}

export default ItServicesPage
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
