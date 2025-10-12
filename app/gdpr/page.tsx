import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Lock, Eye, Database, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

const GDPRPage: React.FC = () => {
  const features = [
    {
      icon: <Lock className="w-8 h-8 text-blue-500" />,
      title: 'Data Protection',
      description: 'Comprehensive data protection measures to ensure GDPR compliance.'
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: 'Privacy Controls',
      description: 'Advanced privacy controls and user consent management.'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Management',
      description: 'Secure data storage and processing with full audit trails.'
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      title: 'Compliance Reporting',
      description: 'Automated compliance reporting and documentation.'
    }
  ]

  const benefits = [
    'Full GDPR compliance implementation',
    'Advanced data protection measures',
    'User consent management system',
    'Automated compliance reporting',
    'Data breach notification system',
    'Privacy impact assessments',
    'Data subject rights management',
    'Regular compliance audits'
  ]

  return (
    <Layout
      title="GDPR Compliance - Zion Tech Group"
      description="Comprehensive GDPR compliance solutions to help your business meet data protection requirements and build customer trust."
      keywords="GDPR compliance, data protection, privacy, GDPR implementation, data security, compliance solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              GDPR
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Compliance
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ensure your business meets GDPR requirements with our comprehensive compliance solutions. 
              Protect your customers' data and build trust with transparent privacy practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our GDPR Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive GDPR compliance solutions that protect your business and your customers' data.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits of GDPR Compliance
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with comprehensive data protection and compliance solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Let our GDPR compliance experts help you implement comprehensive data protection 
                  measures that will ensure your business meets all regulatory requirements.
                </p>
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
                >
                  Contact Our Experts
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Ensure GDPR Compliance?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our GDPR compliance solutions can protect your business and build customer trust.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Started Today
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default GDPRPage