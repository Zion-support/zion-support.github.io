'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Code, Cloud, Shield, Database, Server, Wifi, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function ITServicesPage() {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Services',
      description: 'Migrate to the cloud and optimize your infrastructure with our comprehensive cloud solutions.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Cost Optimization', 'Security Management'],
      href: '/cloud-services'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity',
      description: 'Protect your business with enterprise-grade security solutions and threat monitoring.',
      features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response'],
      href: '/cybersecurity'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Management',
      description: 'Organize, secure, and optimize your data with advanced database and analytics solutions.',
      features: ['Database Design', 'Data Migration', 'Backup Solutions', 'Performance Tuning'],
      href: '/data-analytics'
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'Custom Development',
      description: 'Build tailored software solutions that meet your specific business requirements.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
      href: '/custom-development'
    },
    {
      icon: <Server className="w-8 h-8 text-red-500" />,
      title: 'Infrastructure',
      description: 'Design and maintain robust IT infrastructure that supports your business growth.',
      features: ['Network Design', 'Server Management', 'Monitoring Solutions', 'Disaster Recovery'],
      href: '/it-infrastructure'
    },
    {
      icon: <Wifi className="w-8 h-8 text-cyan-500" />,
      title: '5G Implementation',
      description: 'Deploy next-generation 5G networks for ultra-fast connectivity and IoT integration.',
      features: ['5G Network Design', 'IoT Integration', 'Edge Computing', 'Performance Optimization'],
      href: '/5g-implementation'
    }
  ]

  const benefits = [
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring',
      icon: <Shield className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Scalable Solutions',
      description: 'Infrastructure that grows with your business',
      icon: <Cloud className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Effective',
      description: 'Optimize your IT spending with efficient solutions',
      icon: <Database className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Future Ready',
      description: 'Stay ahead with cutting-edge technology',
      icon: <Code className="w-6 h-6 text-orange-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, custom development, and infrastructure management." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, custom development, infrastructure, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions to modernize your infrastructure, enhance security, 
              and drive digital transformation across your organization.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IT solutions are designed to deliver reliability, security, and performance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can transform your technology stack and drive efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
