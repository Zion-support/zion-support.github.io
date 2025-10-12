'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Cpu, CheckCircle, Zap, Target, Users, Database } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function DigitalTransformationPage() {
  const services = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: 'Process Automation',
      description: 'Automate business processes to increase efficiency and reduce costs.',
      features: ['Workflow automation', 'Document processing', 'Task automation', 'Integration']
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Digital Workforce',
      description: 'Empower your team with digital tools and training.',
      features: ['Digital training', 'Tool implementation', 'Change management', 'Support']
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: 'Customer Experience',
      description: 'Enhance customer experience with digital solutions.',
      features: ['Customer portals', 'Self-service options', 'Personalization', 'Analytics']
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Strategy',
      description: 'Develop comprehensive data strategies for better decision making.',
      features: ['Data collection', 'Analytics setup', 'Reporting tools', 'Insights']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business for the digital age with comprehensive digital transformation services." />
        <meta name="keywords" content="digital transformation, process automation, digital workforce, customer experience" />
      </Helmet>
      
      <Navigation />
      
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Digital Transformation</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business for the digital age with comprehensive digital transformation services.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Digital Solutions</h2>
            <p className="text-xl text-gray-300">Comprehensive digital transformation services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
