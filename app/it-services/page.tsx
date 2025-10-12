import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Database, CheckCircle, ArrowRight, Shield, Cloud, Smartphone, Server } from 'lucide-react'

export default function ITServicesPage() {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with minimal downtime.',
      price: 'Starting at $2,500',
      features: ['AWS/Azure/GCP Migration', 'Data Migration', 'Security Setup', 'Performance Optimization']
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from threats.',
      price: '$1,500/month',
      features: ['Security Audits', 'Firewall Setup', 'Monitoring Systems', 'Incident Response']
    },
    {
      icon: <Smartphone className="w-8 h-8 text-yellow-400" />,
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms.',
      price: 'Starting at $5,000',
      features: ['Native Apps', 'Cross-Platform', 'UI/UX Design', 'App Store Deployment']
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable business insights.',
      price: '$2,000/month',
      features: ['Data Visualization', 'Predictive Analytics', 'Custom Dashboards', 'Real-time Reporting']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, mobile development, and data analytics." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, mobile development, data analytics, Zion Tech Group" />
      </Helmet>
      
      <div className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              IT <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto">
              Complete IT infrastructure services to support your business growth and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">
                  {service.description}
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]"></div>
              
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  Ready to Upgrade Your IT Infrastructure?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Let's discuss how our IT services can help you achieve your business goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
