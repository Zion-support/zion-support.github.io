'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Shield, Lock, Eye, AlertTriangle, Users, Clock, Star, Zap, Globe, Database } from 'lucide-react'
import { Link } from 'react-router-dom'

const EnterpriseSecurityPage: React.FC = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Advanced Threat Protection',
      description: 'Comprehensive threat protection with AI-powered detection and automated response systems.'
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-500" />,
      title: 'Identity & Access Management',
      description: 'Secure identity management with multi-factor authentication and role-based access controls.'
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: 'Security Monitoring',
      description: '24/7 security monitoring with real-time threat detection and incident response.'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-orange-500" />,
      title: 'Risk Assessment',
      description: 'Comprehensive security risk assessments and vulnerability management services.'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Protection',
      description: 'Advanced data protection with encryption, backup, and disaster recovery solutions.'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: 'Security Training',
      description: 'Employee security training and awareness programs to strengthen your security posture.'
    }
  ]

  const complianceFrameworks = [
    'SOC 2 Type II',
    'ISO 27001',
    'PCI DSS',
    'HIPAA',
    'GDPR',
    'NIST Framework',
    'CIS Controls',
    'FedRAMP'
  ]

  const benefits = [
    'Enterprise-grade security',
    '24/7 monitoring and support',
    'Compliance with regulations',
    'Advanced threat detection',
    'Expert security team',
    'Custom security solutions',
    'Regular security assessments',
    'Ongoing security training'
  ]

  return (
    <>
      <Helmet>
        <title>Enterprise Security - Zion Tech Group | Advanced Enterprise Security Solutions</title>
        <meta name="description" content="Comprehensive enterprise security services by Zion Tech Group. Advanced threat protection, identity management, and security monitoring for large organizations." />
        <meta name="keywords" content="enterprise security, threat protection, identity management, security monitoring, compliance, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Enterprise Security
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Protect your enterprise with advanced security solutions designed for large organizations. 
                Comprehensive security services to safeguard your critical assets and data.
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
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Security Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive enterprise security solutions for large organizations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Compliance & Standards</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                We help you meet enterprise security standards and compliance requirements
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-3" />
                  <p className="text-gray-300">{framework}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Enterprise Security?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                We provide comprehensive security solutions that protect your enterprise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(4).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
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
                  Ready to Secure Your Enterprise?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Protect your enterprise with our comprehensive security solutions. 
                  Get expert security services that keep your organization safe and compliant.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Security Assessment
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
    </>
  )
}

export default EnterpriseSecurityPage