'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Cloud, Server, Database, Zap, Shield, Globe, BarChart, Settings } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AICloudInfrastructurePage() {
  const features = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Multi-Cloud Management',
      description: 'Seamlessly manage AWS, Azure, and Google Cloud from a single platform.',
      benefits: ['Unified Dashboard', 'Cost Optimization', 'Resource Monitoring', 'Automated Scaling']
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'AI-Powered Optimization',
      description: 'Machine learning algorithms optimize your cloud resources for performance and cost.',
      benefits: ['Auto-scaling', 'Load Balancing', 'Resource Right-sizing', 'Predictive Scaling']
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Database Services',
      description: 'Managed database solutions with automated backups, monitoring, and scaling.',
      benefits: ['MySQL/PostgreSQL', 'NoSQL Databases', 'Data Migration', 'Backup & Recovery']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Enterprise Security',
      description: 'Comprehensive security with encryption, access controls, and compliance.',
      benefits: ['Identity Management', 'Data Encryption', 'Network Security', 'Compliance Ready']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'High Performance',
      description: 'Optimized infrastructure for maximum performance and reliability.',
      benefits: ['99.9% Uptime SLA', 'Global CDN', 'Edge Computing', 'Performance Monitoring']
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Global Deployment',
      description: 'Deploy applications worldwide with edge computing and global infrastructure.',
      benefits: ['Multi-region Setup', 'Edge Locations', 'Global Load Balancing', 'Low Latency']
    }
  ]

  const services = [
    {
      name: 'Cloud Migration',
      price: 'From $5,000',
      description: 'Complete migration to cloud infrastructure',
      features: ['Assessment & Planning', 'Data Migration', 'Application Migration', 'Testing & Optimization']
    },
    {
      name: 'Managed Cloud',
      price: '$2,500',
      period: '/month',
      description: 'Fully managed cloud infrastructure',
      features: ['24/7 Monitoring', 'Automated Backups', 'Security Management', 'Performance Optimization']
    },
    {
      name: 'Hybrid Cloud',
      price: 'Custom',
      description: 'Hybrid cloud solutions for enterprise',
      features: ['On-premise Integration', 'Cloud Bursting', 'Data Synchronization', 'Unified Management']
    }
  ]

  const cloudProviders = [
    'Amazon Web Services (AWS)',
    'Microsoft Azure',
    'Google Cloud Platform',
    'IBM Cloud',
    'Oracle Cloud',
    'Alibaba Cloud'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI Cloud Infrastructure Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cloud infrastructure solutions with multi-cloud management, automated optimization, and enterprise-grade security. Scale your business with intelligent cloud technology." />
        <meta name="keywords" content="cloud infrastructure, AI cloud, multi-cloud, cloud migration, managed cloud, hybrid cloud" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl">
                  <Cloud className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Cloud Infrastructure</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with intelligent cloud infrastructure that scales, optimizes, and secures your applications automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Cloud Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#demo"
                  className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Intelligent Cloud Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered cloud infrastructure provides intelligent automation, optimization, and management for modern businesses.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Supported Cloud Providers</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with all major cloud providers to give you the flexibility and choice you need.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-white font-semibold text-sm">{provider}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cloud Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud services to meet all your infrastructure needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{service.price}</span>
                      {service.period && <span className="text-gray-300 ml-1">{service.period}</span>}
                    </div>
                    <p className="text-gray-300 mt-2">{service.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Scale with AI Cloud?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Transform your infrastructure with intelligent cloud solutions that grow with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Cloud className="w-5 h-5 mr-2" />
                  Get Cloud Assessment
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}