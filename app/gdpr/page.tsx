import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Lock, Eye, Database, Users, FileText, AlertTriangle } from 'lucide-react'

const GDPRPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: 'Data Protection by Design',
      description: 'Built-in privacy protection from the ground up with GDPR compliance at every level.'
    },
    {
      icon: <Lock className="w-8 h-8 text-emerald-400" />,
      title: 'Advanced Encryption',
      description: 'End-to-end encryption and secure data storage to protect personal information.'
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-400" />,
      title: 'Privacy Controls',
      description: 'Granular privacy settings and user consent management for complete control.'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-400" />,
      title: 'Data Minimization',
      description: 'Collect only necessary data and implement automatic data retention policies.'
    }
  ]

  const benefits = [
    'Full GDPR compliance implementation',
    'Automated data protection assessments',
    'Privacy impact analysis tools',
    'Consent management system',
    'Data subject rights automation',
    'Breach notification system',
    'Privacy policy generator',
    'Compliance monitoring dashboard'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>GDPR Compliance Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive GDPR compliance solutions with advanced data protection, privacy controls, and automated compliance monitoring." />
        <link rel="canonical" href="https://ziontechgroup.com/gdpr" />
      </Helmet>
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>GDPR Compliance</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            GDPR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">Compliance</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive GDPR compliance solutions with advanced data protection, 
            privacy controls, and automated compliance monitoring for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2">
              <span>Get Compliance Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for complete GDPR compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">GDPR Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive compliance solutions for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Ensure GDPR Compliance?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's help you implement comprehensive GDPR compliance solutions for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Compliance Assessment
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Our Experts
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GDPRPage