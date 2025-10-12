'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Lock, FileText, Eye, UserCheck, AlertTriangle, CheckCircle2 } from 'lucide-react'

const GDPRPage: React.FC = () => {
  const features = [
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Comprehensive data protection measures to ensure personal data is secure and compliant'
    },
    {
      icon: FileText,
      title: 'Privacy Policies',
      description: 'Custom privacy policies and terms of service that meet GDPR requirements'
    },
    {
      icon: Eye,
      title: 'Data Transparency',
      description: 'Clear data processing practices and user consent management systems'
    },
    {
      icon: UserCheck,
      title: 'User Rights',
      description: 'Implementation of user rights including access, rectification, and deletion requests'
    }
  ]

  const benefits = [
    'Ensure full GDPR compliance',
    'Protect user privacy and data rights',
    'Avoid costly regulatory fines',
    'Build trust with customers and users',
    'Implement data protection by design',
    'Streamline data processing procedures',
    'Maintain audit trails and documentation',
    'Regular compliance monitoring and updates'
  ]

  const services = [
    {
      title: 'GDPR Assessment',
      description: 'Comprehensive assessment of your current data processing practices and GDPR compliance',
      features: ['Data mapping', 'Risk assessment', 'Gap analysis', 'Compliance roadmap']
    },
    {
      title: 'Privacy Policy Creation',
      description: 'Custom privacy policies and terms of service tailored to your business needs',
      features: ['Legal compliance', 'Clear language', 'Regular updates', 'Multi-language support']
    },
    {
      title: 'Consent Management',
      description: 'Implementation of user consent management systems and cookie policies',
      features: ['Consent tracking', 'Cookie banners', 'Preference centers', 'Withdrawal mechanisms']
    },
    {
      title: 'Data Processing Agreements',
      description: 'Drafting and implementation of data processing agreements with third parties',
      features: ['Vendor agreements', 'Controller-processor contracts', 'Data sharing agreements', 'Compliance monitoring']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>GDPR Compliance Services | Zion Tech Group</title>
        <meta name="description" content="Professional GDPR compliance services by Zion Tech Group. Data protection, privacy policies, consent management, and regulatory compliance solutions." />
        <meta name="keywords" content="GDPR compliance, data protection, privacy policies, consent management, regulatory compliance, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                GDPR
              </span>
              <br />
              <span className="text-white">Compliance</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ensure full GDPR compliance with our comprehensive data protection services. 
              Protect user privacy, avoid fines, and build trust with your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Compliance Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our GDPR Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our GDPR compliance services ensure your business meets all regulatory requirements while protecting user privacy and data rights.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our GDPR Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive GDPR compliance services tailored to your business needs and data processing activities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Achieve Full GDPR Compliance
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our GDPR services deliver comprehensive compliance solutions that protect your business from regulatory risks and build customer trust.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/10">
              <div className="text-center">
                <AlertTriangle className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Need Compliance Help?</h3>
                <p className="text-gray-300 mb-6">
                  Contact our GDPR experts to assess your current compliance status and develop a comprehensive compliance strategy for your business.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Schedule Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Ensure GDPR Compliance?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses already using our GDPR services to protect user data, ensure compliance, and build customer trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
              Start Compliance Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Download GDPR Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GDPRPage