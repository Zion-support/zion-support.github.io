'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Shield, Lock, Eye, AlertTriangle, Users, BarChart3, Cloud, Database, Zap, Globe } from 'lucide-react'

const EnterpriseSecurityPage: React.FC = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Advanced Threat Detection',
      description: 'AI-powered threat detection and response with real-time monitoring.',
      features: ['Real-time Monitoring', 'AI Threat Analysis', 'Automated Response', '24/7 SOC Support'],
      price: 'Starting at $399/month'
    },
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: 'Identity & Access Management',
      description: 'Comprehensive identity management and access control solutions.',
      features: ['Single Sign-On', 'Multi-Factor Authentication', 'Privileged Access Management', 'Identity Governance'],
      price: 'Starting at $299/month'
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response services.',
      features: ['SIEM Implementation', 'Log Analysis', 'Incident Response', 'Forensic Analysis'],
      price: 'Starting at $499/month'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Security',
      description: 'Secure your cloud infrastructure with enterprise-grade security.',
      features: ['Cloud Security Assessment', 'Data Encryption', 'Access Controls', 'Compliance Management'],
      price: 'Starting at $349/month'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Protection',
      description: 'Comprehensive data protection and privacy solutions.',
      features: ['Data Classification', 'Encryption at Rest', 'Data Loss Prevention', 'Privacy Compliance'],
      price: 'Starting at $249/month'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Security Automation',
      description: 'Automate security processes and improve response times.',
      features: ['Security Orchestration', 'Automated Remediation', 'Workflow Automation', 'Policy Enforcement'],
      price: 'Starting at $199/month'
    }
  ]

  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Enhanced Protection',
      description: 'Protect your enterprise with multi-layered security solutions'
    },
    {
      icon: <Eye className="w-6 h-6 text-blue-500" />,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring and threat detection around the clock'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Expert Team',
      description: 'Access to certified security professionals and specialists'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
      title: 'Compliance Ready',
      description: 'Meet regulatory requirements and industry standards'
    }
  ]

  const compliance = [
    'SOC 2', 'ISO 27001', 'GDPR', 'HIPAA', 'PCI DSS', 'NIST', 'CIS Controls', 'FedRAMP'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Enterprise Security - Zion Tech Group"
        description="Comprehensive enterprise security solutions including threat detection, identity management, and compliance. Protect your business with advanced security measures."
        keywords="enterprise security, cybersecurity, threat detection, identity management, compliance, data protection, Zion Tech Group"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enterprise <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Security</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your enterprise with comprehensive security solutions. From threat detection to compliance management, 
            we provide advanced security measures to safeguard your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="/contact" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Get Security Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Enterprise Security?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our enterprise security solutions provide comprehensive protection for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{benefit.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect your enterprise from evolving threats.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{service.price}</span>
                  <a 
                    href="/contact" 
                    className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We help you meet and maintain compliance with industry standards and regulations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {compliance.map((standard, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <p className="text-gray-300 text-sm font-medium">{standard}</p>
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
                Ready to Secure Your Enterprise?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our enterprise security solutions can protect your business from cyber threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Get Security Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Security Pricing
                </a>
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
