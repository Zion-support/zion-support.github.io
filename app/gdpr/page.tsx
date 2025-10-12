'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Shield, Lock, Eye, AlertTriangle, Users, Clock, Star, Target, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const GDPRPage: React.FC = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'GDPR Compliance Assessment',
      description: 'Comprehensive assessment of your current data protection practices and GDPR compliance status',
      features: [
        'Data audit and mapping',
        'Privacy impact assessments',
        'Compliance gap analysis',
        'Risk assessment',
        'Remediation planning',
        'Compliance reporting'
      ],
      pricing: 'Starting at $5,000',
      popular: true
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Data Protection Implementation',
      description: 'Implementation of GDPR-compliant data protection measures and privacy controls',
      features: [
        'Privacy by design',
        'Data minimization',
        'Consent management',
        'Data subject rights',
        'Privacy policies',
        'Data retention policies'
      ],
      pricing: 'Starting at $8,000',
      popular: true
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: 'Privacy Monitoring & Auditing',
      description: 'Ongoing monitoring and auditing of data protection practices to ensure continued compliance',
      features: [
        'Regular compliance audits',
        'Privacy monitoring',
        'Incident management',
        'Training programs',
        'Documentation management',
        'Regulatory updates'
      ],
      pricing: 'Starting at $2,500/month',
      popular: false
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Data Subject Rights Management',
      description: 'Implementation and management of data subject rights under GDPR',
      features: [
        'Right to access',
        'Right to rectification',
        'Right to erasure',
        'Right to portability',
        'Right to object',
        'Consent withdrawal'
      ],
      pricing: 'Starting at $3,000',
      popular: false
    }
  ]

  const stats = [
    { number: '100%', label: 'GDPR Compliance' },
    { number: '50+', label: 'Companies Helped' },
    { number: '24/7', label: 'Support Available' },
    { number: '€0', label: 'Fines Incurred' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>GDPR Compliance - Zion Tech Group | Data Protection Solutions</title>
        <meta name="description" content="Comprehensive GDPR compliance services including assessment, implementation, monitoring, and data subject rights management. Ensure your business meets all GDPR requirements." />
        <meta name="keywords" content="GDPR compliance, data protection, privacy, GDPR implementation, data subject rights, privacy by design, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <Shield className="inline-block w-16 h-16 mr-4 text-blue-400" />
            GDPR Compliance
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive GDPR compliance services to ensure your business meets all data protection requirements. 
            Protect your customers' privacy and avoid costly fines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Compliance Assessment
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

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our GDPR Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive GDPR compliance services designed to protect your business and ensure full regulatory compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-semibold">{service.pricing}</span>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ensure GDPR Compliance Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't risk costly fines. Let our GDPR experts help you achieve full compliance and protect your customers' data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Compliance Assessment
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
      </section>

      <Footer />
    </div>
  )
}

export default GDPRPage