'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Cloud, CheckCircle, Server, Shield, Database, Zap } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function CloudServicesPage() {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with minimal downtime.',
      features: ['Assessment & planning', 'Data migration', 'Application migration', 'Testing & optimization']
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'Infrastructure Setup',
      description: 'Design and implement scalable cloud infrastructure tailored to your needs.',
      features: ['Architecture design', 'Resource provisioning', 'Security configuration', 'Monitoring setup']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security Solutions',
      description: 'Comprehensive cloud security to protect your data and applications.',
      features: ['Identity management', 'Access controls', 'Encryption', 'Compliance']
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Management',
      description: 'Efficient cloud-based data storage, processing, and analytics.',
      features: ['Database services', 'Data lakes', 'Backup solutions', 'Analytics platforms']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Performance Optimization',
      description: 'Optimize your cloud infrastructure for maximum performance and cost efficiency.',
      features: ['Performance tuning', 'Cost optimization', 'Auto-scaling', 'Monitoring']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Scalable cloud infrastructure and migration services. Transform your business with our cloud solutions." />
        <meta name="keywords" content="cloud services, cloud migration, infrastructure, scalability, cloud computing" />
      </Helmet>
      
      <Navigation />
      
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Cloud Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scalable cloud infrastructure and migration services to power your digital transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Cloud Solutions</h2>
            <p className="text-xl text-gray-300">Comprehensive cloud services for modern businesses</p>
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
