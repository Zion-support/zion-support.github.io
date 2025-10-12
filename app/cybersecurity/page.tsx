import React from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, CheckCircle, Star, Zap, Globe, Database, Cpu, Network } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CybersecurityPage() {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Advanced Threat Detection',
      description: 'AI-powered threat detection and response with real-time monitoring and automated incident response.',
      features: ['Real-time Monitoring', 'AI Threat Analysis', 'Automated Response', '24/7 SOC Support'],
      price: 'Starting at $299/month',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Data Encryption & Protection',
      description: 'Comprehensive data protection with end-to-end encryption and secure key management.',
      features: ['End-to-End Encryption', 'Key Management', 'Data Loss Prevention', 'Compliance Reporting'],
      price: 'Starting at $199/month',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Security Monitoring & Analytics',
      description: 'Continuous security monitoring with advanced analytics and threat intelligence.',
      features: ['SIEM Platform', 'Threat Intelligence', 'Behavioral Analytics', 'Custom Dashboards'],
      price: 'Starting at $399/month',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Incident Response & Recovery',
      description: 'Rapid incident response and business continuity planning with 24/7 support.',
      features: ['Incident Response Plan', 'Forensic Analysis', 'Business Continuity', 'Recovery Services'],
      price: 'Starting at $499/month',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30'
    }
  ]

  const complianceFrameworks = [
    'SOC 2 Type II',
    'ISO 27001',
    'PCI DSS',
    'HIPAA',
    'GDPR',
    'NIST Cybersecurity Framework',
    'CIS Controls',
    'COBIT'
  ]

  const stats = [
    { number: '99.9%', label: 'Threat Detection Rate' },
    { number: '24/7', label: 'Security Monitoring' },
    { number: '< 5min', label: 'Response Time' },
    { number: '100%', label: 'Compliance Coverage' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <SEOHead 
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Protect your business with enterprise-grade cybersecurity solutions. Comprehensive security measures to safeguard your data and systems."
        keywords="cybersecurity, security solutions, threat protection, compliance, data security, Zion Tech Group"
      />
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">Cybersecurity</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your business with enterprise-grade cybersecurity solutions. Comprehensive security measures 
            to safeguard your data, systems, and reputation.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border ${service.borderColor} hover:bg-white/20 transition-all duration-300`}>
                <div className={`flex items-center justify-center w-12 h-12 ${service.bgColor} rounded-lg mb-4`}>
                  <div className={service.color}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-bold text-white mb-4">{service.price}</div>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-red-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We help you meet and maintain compliance with industry standards and regulations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <p className="text-gray-300">{framework}</p>
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
                Ready to Secure Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Don't wait for a security breach. Protect your business with our comprehensive cybersecurity solutions.
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