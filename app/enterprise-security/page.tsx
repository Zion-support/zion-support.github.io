'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Shield, Lock, Eye, AlertTriangle, Users, Target, BarChart3, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const EnterpriseSecurityPage: React.FC = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Advanced Threat Protection',
      description: 'Enterprise-grade threat detection and prevention systems with AI-powered analytics.'
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Identity & Access Management',
      description: 'Comprehensive IAM solutions to control and monitor user access across your organization.'
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: 'Security Operations Center',
      description: '24/7 SOC services with real-time monitoring and rapid incident response.'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: 'Risk Assessment',
      description: 'Comprehensive security risk assessments and vulnerability management programs.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Security Training',
      description: 'Enterprise-wide security awareness training and phishing simulation programs.'
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-500" />,
      title: 'Incident Response',
      description: 'Rapid incident response and forensics services to minimize business impact.'
    }
  ]

  const benefits = [
    'Protect against advanced persistent threats',
    'Ensure compliance with enterprise regulations',
    'Minimize security risks and vulnerabilities',
    '24/7 security monitoring and support',
    'Rapid incident response and recovery',
    'Reduced security-related costs and risks'
  ]

  const compliance = [
    'SOX', 'HIPAA', 'PCI DSS', 'ISO 27001', 'NIST', 'GDPR'
  ]

  return (
    <>
      <Helmet>
        <title>Enterprise Security | Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade security solutions for large organizations. Advanced threat protection, compliance management, and security operations center services." />
        <meta name="keywords" content="enterprise security, cybersecurity, threat protection, compliance, security operations, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Enterprise
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Security
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive enterprise security solutions designed for large organizations. 
              Advanced threat protection, compliance management, and security operations center services.
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

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise Security Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security solutions designed to protect large organizations from sophisticated threats.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Enterprise Security Matters
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Large organizations face unique security challenges that require specialized solutions. 
                  Our enterprise security services provide the comprehensive protection you need.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Compliance Standards</h3>
                <div className="grid grid-cols-2 gap-4">
                  {compliance.map((standard, index) => (
                    <div key={index} className="flex items-center">
                      <Shield className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{standard}</span>
                    </div>
                  ))}
                </div>
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
                  Let our enterprise security experts help you implement comprehensive protection for your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Schedule Security Assessment
                  </Link>
                  <Link 
                    to="/cybersecurity" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Explore Security Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default EnterpriseSecurityPage