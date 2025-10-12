'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Shield, Lock, Eye, FileText, Users, Globe, Database, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const GDPRPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Data Protection Impact Assessment',
      description: 'Comprehensive DPIA to identify and mitigate privacy risks in your data processing activities.',
      benefits: ['Risk identification', 'Compliance mapping', 'Mitigation strategies', 'Documentation']
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Data Encryption & Security',
      description: 'Implement robust encryption and security measures to protect personal data.',
      benefits: ['End-to-end encryption', 'Key management', 'Access controls', 'Security monitoring']
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: 'Privacy by Design',
      description: 'Integrate privacy considerations into your systems and processes from the ground up.',
      benefits: ['Privacy-first architecture', 'Data minimization', 'Purpose limitation', 'Transparency']
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      title: 'Compliance Documentation',
      description: 'Comprehensive documentation to demonstrate GDPR compliance and accountability.',
      benefits: ['Privacy policies', 'Data processing records', 'Consent management', 'Audit trails']
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: 'Data Subject Rights',
      description: 'Implement systems to handle data subject requests and rights under GDPR.',
      benefits: ['Right to access', 'Right to rectification', 'Right to erasure', 'Data portability']
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      title: 'Data Governance',
      description: 'Establish comprehensive data governance frameworks for ongoing compliance.',
      benefits: ['Data classification', 'Retention policies', 'Data mapping', 'Regular audits']
    }
  ]

  const complianceAreas = [
    'Data Processing Lawfulness',
    'Consent Management',
    'Data Subject Rights',
    'Data Breach Notification',
    'Privacy Impact Assessment',
    'Data Protection Officer',
    'Cross-Border Transfers',
    'Record Keeping'
  ]

  const pricingPlans = [
    {
      name: 'Basic Compliance',
      price: '$1,999/month',
      description: 'Essential GDPR compliance for small businesses',
      features: [
        'Basic privacy policy',
        'Consent management',
        'Data subject rights handling',
        'Email support',
        'Basic documentation'
      ],
      popular: false
    },
    {
      name: 'Professional Compliance',
      price: '$4,999/month',
      description: 'Comprehensive compliance for growing businesses',
      features: [
        'Full privacy framework',
        'Advanced consent management',
        'Automated data subject rights',
        'Priority support',
        'Comprehensive documentation',
        'Regular audits',
        'Training programs'
      ],
      popular: true
    },
    {
      name: 'Enterprise Compliance',
      price: 'Custom',
      description: 'Full-scale compliance for large organizations',
      features: [
        'Custom privacy framework',
        'Enterprise consent management',
        'Full automation',
        '24/7 dedicated support',
        'Complete documentation',
        'Continuous monitoring',
        'Custom training',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '100%', label: 'GDPR Compliance' },
    { number: '€20M', label: 'Max Fine Avoidance' },
    { number: '72hrs', label: 'Breach Notification' },
    { number: '24/7', label: 'Compliance Monitoring' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>GDPR Compliance - Zion Tech Group</title>
        <meta name="description" content="Comprehensive GDPR compliance solutions to protect personal data and ensure regulatory compliance. Expert privacy and data protection services." />
        <meta name="keywords" content="GDPR compliance, data protection, privacy, personal data, regulatory compliance, data security, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              GDPR
            </span>
            <br />
            <span className="text-white">Compliance</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive GDPR compliance solutions to protect personal data and ensure regulatory compliance. 
            Expert privacy and data protection services for your business.
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
      <section className="py-16 px-4">
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

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              GDPR Compliance Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive GDPR compliance solutions designed to protect personal data and ensure regulatory compliance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Areas Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We cover all aspects of GDPR compliance to ensure your business meets all regulatory requirements.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {complianceAreas.map((area, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <p className="text-gray-300">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your GDPR compliance needs. All plans include our core services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-white/20'
              } hover:border-purple-500 transition-all duration-300 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
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
                Don't risk non-compliance. Let our GDPR experts help you protect personal data and meet regulatory requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Compliance Assessment
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default GDPRPage