'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Shield, Lock, Eye, AlertTriangle, Zap, Globe, Database, Cpu, Network } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Advanced Threat Detection',
      description: 'AI-powered threat detection and response with real-time monitoring and automated incident response',
      features: [
        'Real-time threat monitoring',
        'AI-powered threat analysis',
        'Automated incident response',
        '24/7 SOC support',
        'Behavioral analytics',
        'Threat intelligence integration'
      ],
      pricing: 'Starting at $299/month',
      popular: true
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-500" />,
      title: 'Data Encryption & Protection',
      description: 'Comprehensive data protection with end-to-end encryption and secure key management',
      features: [
        'End-to-end encryption',
        'Key management',
        'Data loss prevention',
        'Compliance reporting',
        'Secure backup solutions',
        'Access control management'
      ],
      pricing: 'Starting at $199/month',
      popular: false
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: 'Security Monitoring & Analytics',
      description: 'Continuous security monitoring with advanced analytics and threat intelligence',
      features: [
        'SIEM platform',
        'Threat intelligence',
        'Behavioral analytics',
        'Custom dashboards',
        'Log analysis',
        'Security reporting'
      ],
      pricing: 'Starting at $399/month',
      popular: true
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-orange-500" />,
      title: 'Incident Response & Recovery',
      description: 'Rapid incident response and business continuity planning with 24/7 support',
      features: [
        'Incident response plan',
        'Forensic analysis',
        'Business continuity',
        'Recovery services',
        'Crisis management',
        'Post-incident review'
      ],
      pricing: 'Starting at $499/month',
      popular: false
    }
  ]

  const complianceFrameworks = [
    { name: 'SOC 2 Type II', description: 'Security, availability, and confidentiality controls' },
    { name: 'ISO 27001', description: 'Information security management systems' },
    { name: 'GDPR', description: 'General Data Protection Regulation compliance' },
    { name: 'HIPAA', description: 'Healthcare data protection standards' },
    { name: 'PCI DSS', description: 'Payment card industry data security' },
    { name: 'NIST', description: 'National Institute of Standards and Technology' }
  ]

  const stats = [
    { number: '99.9%', label: 'Threat Detection Rate' },
    { number: '< 5min', label: 'Average Response Time' },
    { number: '24/7', label: 'Security Monitoring' },
    { number: '100+', label: 'Security Experts' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cybersecurity Services - Zion Tech Group | Advanced Security Solutions</title>
        <meta name="description" content="Advanced cybersecurity solutions including threat detection, data protection, security monitoring, and incident response. Protect your business with enterprise-grade security." />
        <meta name="keywords" content="cybersecurity, threat detection, data protection, security monitoring, incident response, compliance, SOC 2, ISO 27001, GDPR" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <Shield className="inline-block w-16 h-16 mr-4 text-red-400" />
            Cybersecurity Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Protect your business with enterprise-grade cybersecurity solutions. 
            Advanced threat detection, data protection, and 24/7 security monitoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
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
              Our Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect your business from evolving threats.
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

      {/* Compliance Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We help you meet industry compliance requirements and security standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">{framework.name}</h3>
                <p className="text-gray-300">{framework.description}</p>
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
              Secure Your Business Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't wait for a security breach. Protect your business with our advanced cybersecurity solutions.
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
      </section>

      <Footer />
    </div>
  )
}

export default CybersecurityPage