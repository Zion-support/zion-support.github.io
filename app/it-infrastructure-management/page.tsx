'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Server, Shield, Zap, Users, Database, Globe, Settings, Monitor } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function ITInfrastructureManagementPage() {
  const features = [
    {
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: 'Server Management',
      description: 'Complete server lifecycle management with monitoring, maintenance, and optimization.',
      benefits: ['24/7 Monitoring', 'Automated Backups', 'Performance Tuning', 'Security Updates']
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Network Security',
      description: 'Comprehensive network security with firewall management and threat protection.',
      benefits: ['Firewall Configuration', 'Intrusion Detection', 'VPN Management', 'Security Audits']
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Database Administration',
      description: 'Expert database management with optimization, backup, and recovery services.',
      benefits: ['Performance Optimization', 'Backup & Recovery', 'Security Hardening', 'Capacity Planning']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with minimal downtime and maximum efficiency.',
      benefits: ['Migration Planning', 'Data Transfer', 'Application Migration', 'Post-Migration Support']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'User Management',
      description: 'Comprehensive user account management with access controls and permissions.',
      benefits: ['Account Provisioning', 'Access Control', 'Password Management', 'Compliance Reporting']
    },
    {
      icon: <Monitor className="w-8 h-8 text-cyan-500" />,
      title: 'Monitoring & Alerting',
      description: 'Proactive monitoring with real-time alerts and performance optimization.',
      benefits: ['Real-time Monitoring', 'Automated Alerts', 'Performance Metrics', 'Incident Response']
    }
  ]

  const services = [
    {
      name: 'Infrastructure Assessment',
      price: '$2,000',
      description: 'Comprehensive evaluation of your current IT infrastructure',
      features: ['Current State Analysis', 'Gap Assessment', 'Recommendations', 'Implementation Plan']
    },
    {
      name: 'Managed Services',
      price: '$3,500',
      period: '/month',
      description: 'Complete IT infrastructure management and support',
      features: ['24/7 Monitoring', 'Proactive Maintenance', 'Security Management', 'Performance Optimization']
    },
    {
      name: 'Cloud Migration',
      price: 'From $10,000',
      description: 'Full migration to cloud infrastructure',
      features: ['Migration Planning', 'Data Transfer', 'Application Migration', 'Testing & Validation']
    }
  ]

  const technologies = [
    'Windows Server',
    'Linux/Unix',
    'VMware',
    'Hyper-V',
    'AWS',
    'Azure',
    'Google Cloud',
    'Docker',
    'Kubernetes',
    'Ansible'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>IT Infrastructure Management - Zion Tech Group</title>
        <meta name="description" content="Professional IT infrastructure management services including server management, network security, cloud migration, and 24/7 monitoring. Optimize your IT operations." />
        <meta name="keywords" content="IT infrastructure, server management, network security, cloud migration, IT support, infrastructure monitoring" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl">
                  <Server className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Infrastructure Management</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Optimize your IT infrastructure with our comprehensive management services. From server administration to cloud migration, we keep your systems running smoothly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Infrastructure Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#demo"
                  className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive IT Management</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IT infrastructure management services cover all aspects of your technology environment.
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

        {/* Technologies Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technologies We Support</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with all major technologies and platforms to provide comprehensive IT support.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-white font-semibold text-sm">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">IT Management Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the service level that best fits your IT infrastructure needs.
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
                  <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300">
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
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Optimize Your IT Infrastructure</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let our experts manage your IT infrastructure so you can focus on your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Server className="w-5 h-5 mr-2" />
                  Get Assessment
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