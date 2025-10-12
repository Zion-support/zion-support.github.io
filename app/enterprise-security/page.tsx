'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Shield, Lock, Eye, AlertTriangle, Database, Users, Globe, Brain, Zap, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const EnterpriseSecurityPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Advanced Threat Protection',
      description: 'Comprehensive threat detection and prevention systems for enterprise environments.',
      benefits: ['Real-time monitoring', 'AI threat analysis', 'Automated response', '24/7 SOC support']
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Data Encryption & Protection',
      description: 'End-to-end encryption and data protection for sensitive enterprise information.',
      benefits: ['Data encryption', 'Key management', 'Access control', 'Compliance reporting']
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: 'Security Monitoring & Analytics',
      description: 'Continuous security monitoring with advanced analytics and threat intelligence.',
      benefits: ['SIEM platform', 'Behavioral analytics', 'Threat intelligence', 'Custom dashboards']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Identity & Access Management',
      description: 'Comprehensive IAM solutions for secure user authentication and authorization.',
      benefits: ['Single sign-on', 'Multi-factor authentication', 'Role-based access', 'User provisioning']
    },
    {
      icon: <Database className="w-8 h-8 text-red-500" />,
      title: 'Data Loss Prevention',
      description: 'Prevent unauthorized data access and ensure data integrity across your organization.',
      benefits: ['Data classification', 'Policy enforcement', 'Incident response', 'Audit trails']
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-indigo-500" />,
      title: 'Incident Response',
      description: 'Rapid incident response and recovery services for security breaches.',
      benefits: ['Incident response plan', 'Forensic analysis', 'Recovery services', 'Business continuity']
    }
  ]

  const securityAreas = [
    'Network Security',
    'Endpoint Protection',
    'Cloud Security',
    'Application Security',
    'Data Security',
    'Identity Management',
    'Compliance Management',
    'Security Training'
  ]

  const pricingPlans = [
    {
      name: 'Basic Security',
      price: '$2,999/month',
      description: 'Essential security for small enterprises',
      features: [
        'Basic threat protection',
        'Standard monitoring',
        'Email support',
        'Basic compliance',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Professional Security',
      price: '$7,999/month',
      description: 'Advanced security for growing enterprises',
      features: [
        'Advanced threat protection',
        'Real-time monitoring',
        'Priority support',
        'Full compliance',
        'Security training',
        'Custom policies',
        'Incident response'
      ],
      popular: true
    },
    {
      name: 'Enterprise Security',
      price: 'Custom',
      description: 'Comprehensive security for large organizations',
      features: [
        'Full security suite',
        '24/7 monitoring',
        '24/7 dedicated support',
        'Custom compliance',
        'Custom training',
        'Custom solutions',
        'Full integration',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '99.9%', label: 'Threat Detection' },
    { number: '24/7', label: 'Security Monitoring' },
    { number: '< 5min', label: 'Response Time' },
    { number: '100%', label: 'Compliance Coverage' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Helmet>
        <title>Enterprise Security - Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise security solutions including threat protection, data encryption, monitoring, and compliance management." />
        <meta name="keywords" content="enterprise security, cybersecurity, threat protection, data encryption, security monitoring, compliance, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
              Enterprise
            </span>
            <br />
            <span className="text-white">Security</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your enterprise with comprehensive security solutions. Advanced threat protection, 
            data encryption, and compliance management for large-scale organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flex items-center"
            >
              Get Security Assessment
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
              Enterprise Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect your enterprise from evolving threats.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg mb-4">
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

      {/* Security Areas Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive security coverage across all areas of your enterprise infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {securityAreas.map((area, index) => (
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
              Choose the plan that fits your enterprise security needs. All plans include our core security features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular ? 'border-red-500 ring-2 ring-red-500/20' : 'border-white/20'
              } hover:border-red-500 transition-all duration-300 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white hover:from-red-600 hover:to-purple-700'
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
            <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Secure Your Enterprise?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Don't wait for a security breach. Protect your enterprise with our comprehensive security solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Security Assessment
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

export default EnterpriseSecurityPage