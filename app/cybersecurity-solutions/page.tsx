'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Shield, Lock, Eye, AlertTriangle, Users, Settings, Zap, Target } from 'lucide-react'

const CybersecuritySolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Comprehensive network protection with advanced firewalls and intrusion detection.',
      features: ['Next-gen firewalls', 'Intrusion detection', 'Network monitoring', 'Traffic analysis']
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Encrypt and protect your sensitive data with enterprise-grade security.',
      features: ['Data encryption', 'Access controls', 'Data loss prevention', 'Backup security']
    },
    {
      icon: Eye,
      title: 'Threat Monitoring',
      description: '24/7 threat monitoring and analysis with AI-powered detection.',
      features: ['Real-time monitoring', 'Threat intelligence', 'Incident response', 'Forensic analysis']
    },
    {
      icon: Users,
      title: 'Identity Management',
      description: 'Secure identity and access management with multi-factor authentication.',
      features: ['Single sign-on', 'Multi-factor auth', 'Role-based access', 'Identity verification']
    }
  ]

  const benefits = [
    'Protect against 99.9% of known threats',
    'Reduce security incidents by 90%',
    'Comply with industry regulations',
    '24/7 security monitoring',
    'Automated threat response',
    'Comprehensive security coverage'
  ]

  const complianceStandards = [
    { name: 'GDPR', description: 'General Data Protection Regulation compliance' },
    { name: 'SOC 2', description: 'Service Organization Control 2 certification' },
    { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
    { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' },
    { name: 'ISO 27001', description: 'Information Security Management System' },
    { name: 'NIST', description: 'National Institute of Standards and Technology' }
  ]

  const securityStats = [
    { label: 'Threats Blocked', value: '1M+', icon: Shield },
    { label: 'Response Time', value: '< 30s', icon: Zap },
    { label: 'Uptime', value: '99.9%', icon: Target },
    { label: 'Compliance', value: '100%', icon: Lock }
  ]

  return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group | Advanced Security Protection</title>
        <meta name="description" content="Comprehensive cybersecurity solutions to protect your business. Network security, data protection, threat monitoring, and compliance management." />
        <meta name="keywords" content="cybersecurity solutions, network security, data protection, threat monitoring, security compliance, cyber protection" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cybersecurity <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions to protect your business from evolving threats. Network security, data protection, and compliance management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Get Security Assessment
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Security Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                      <p className="text-gray-300 mb-4">{solution.description}</p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Cybersecurity Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Compliance & Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-500 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{standard.name}</h3>
                  <p className="text-gray-300 text-sm">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Security Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {securityStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our comprehensive cybersecurity solutions and protect your business from evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Security Team
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default CybersecuritySolutionsPage