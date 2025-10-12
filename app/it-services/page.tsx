'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Code, CheckCircle, Server, Shield, Database, Cloud, Smartphone } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function ITServicesPage() {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business requirements.',
      features: ['Web applications', 'Mobile apps', 'Desktop software', 'API development']
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, management, and optimization.',
      features: ['Server setup', 'Network configuration', 'Performance monitoring', 'Maintenance']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions.',
      features: ['Security audits', 'Threat protection', 'Compliance management', 'Incident response']
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Management',
      description: 'Efficient data storage, processing, and analytics solutions.',
      features: ['Database design', 'Data migration', 'Backup solutions', 'Data analytics']
    },
    {
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services.',
      features: ['Cloud migration', 'Infrastructure setup', 'Cost optimization', 'Managed services']
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications.',
      features: ['iOS development', 'Android development', 'Cross-platform apps', 'App maintenance']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Complete IT services including custom development, infrastructure management, cybersecurity, and cloud solutions." />
        <meta name="keywords" content="IT services, software development, infrastructure, cybersecurity, cloud computing" />
      </Helmet>
      
      <Navigation />
      
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">IT Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete IT solutions to power your business. From development to infrastructure, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our IT Solutions</h2>
            <p className="text-xl text-gray-300">Comprehensive IT services for modern businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
