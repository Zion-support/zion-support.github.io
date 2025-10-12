'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Smartphone, CheckCircle, Zap, Shield, Database, Code } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function MicroSaasServicesPage() {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automation.',
      features: ['Smart prioritization', 'Automated scheduling', 'Progress tracking', 'Team collaboration']
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking and financial insights powered by AI.',
      features: ['Receipt scanning', 'Category automation', 'Budget alerts', 'Financial reports']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-enhanced security features.',
      features: ['Password generation', 'Security monitoring', 'Breach alerts', 'Secure sharing']
    },
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation and management with AI assistance.',
      features: ['Template generation', 'Client management', 'Payment tracking', 'Tax calculations']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI-powered insights and recommendations.',
      features: ['Health metrics', 'Goal tracking', 'AI recommendations', 'Progress reports']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Specialized micro software solutions for modern businesses. AI-powered tools that solve specific problems." />
        <meta name="keywords" content="micro saas, software solutions, AI tools, productivity, automation" />
      </Helmet>
      
      <Navigation />
      
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Micro SaaS Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized micro software solutions that solve specific business problems with AI-powered efficiency.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Micro SaaS Solutions</h2>
            <p className="text-xl text-gray-300">Focused tools that deliver maximum value</p>
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
