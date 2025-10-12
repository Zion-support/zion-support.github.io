'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Lock, Eye, AlertTriangle, Key, Database, Network, Cpu } from 'lucide-react'

const EnterpriseSecurityPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Threat Protection',
      description: 'Multi-layered security solutions to protect against sophisticated cyber threats and attacks'
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for data at rest and in transit to ensure maximum security'
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and threat detection with real-time alerts and response'
    },
    {
      icon: Key,
      title: 'Access Management',
      description: 'Comprehensive identity and access management with multi-factor authentication'
    }
  ]

  const benefits = [
    'Protect against advanced persistent threats',
    'Ensure regulatory compliance and data privacy',
    'Reduce security risks and vulnerabilities',
    'Implement zero-trust security architecture',
    '24/7 security monitoring and response',
    'Comprehensive security assessments',
    'Employee security training programs',
    'Incident response and recovery planning'
  ]

  const services = [
    {
      title: 'Security Assessment',
      description: 'Comprehensive security audits and vulnerability assessments for your infrastructure',
      features: ['Penetration testing', 'Vulnerability scanning', 'Security audits', 'Compliance checks']
    },
    {
      title: 'Security Implementation',
      description: 'Implementation of enterprise-grade security solutions and best practices',
      features: ['Firewall configuration', 'Intrusion detection', 'Security policies', 'Access controls']
    },
    {
      title: 'Security Monitoring',
      description: 'Continuous monitoring and threat detection with advanced security tools',
      features: ['SIEM implementation', 'Log analysis', 'Threat hunting', 'Incident response']
    },
    {
      title: 'Security Training',
      description: 'Employee security awareness training and security best practices education',
      features: ['Phishing simulation', 'Security workshops', 'Policy training', 'Incident response training']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Enterprise Security Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise security solutions by Zion Tech Group. Advanced threat protection, data encryption, and security monitoring for large organizations." />
        <meta name="keywords" content="enterprise security, cybersecurity, threat protection, data encryption, security monitoring, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Enterprise
              </span>
              <br />
              <span className="text-white">Security Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your organization with comprehensive enterprise security solutions. 
              Advanced threat protection, data encryption, and 24/7 monitoring for maximum security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Security Assessment
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
              Why Choose Our Security Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our enterprise security solutions provide comprehensive protection against evolving cyber threats and ensure regulatory compliance.
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
              Our Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security services tailored to protect your organization from cyber threats and ensure compliance.
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
                Secure Your Enterprise
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our enterprise security solutions deliver measurable improvements in threat protection, compliance, and risk reduction for large organizations.
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
                <h3 className="text-2xl font-semibold text-white mb-4">Security Assessment?</h3>
                <p className="text-gray-300 mb-6">
                  Contact our security experts to assess your current security posture and identify potential vulnerabilities in your infrastructure.
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
            Ready to Secure Your Enterprise?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of enterprises already using our security solutions to protect their critical infrastructure and data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
              Start Security Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              View Security Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EnterpriseSecurityPage