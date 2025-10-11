'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Shield, Eye, Lock, AlertTriangle, Activity, Database, Globe, Zap } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AICybersecuritySuitePage() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms that detect and prevent cyber threats in real-time.',
      benefits: ['Zero-day Attack Prevention', 'Behavioral Analysis', 'Anomaly Detection', 'Predictive Security']
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-500" />,
      title: '24/7 Security Monitoring',
      description: 'Continuous monitoring of your entire infrastructure with instant threat response.',
      benefits: ['Real-time Alerts', 'Automated Response', 'Threat Intelligence', 'Incident Management']
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Advanced Encryption',
      description: 'Military-grade encryption for data at rest and in transit across all platforms.',
      benefits: ['AES-256 Encryption', 'End-to-End Security', 'Key Management', 'Compliance Ready']
    },
    {
      icon: <Activity className="w-8 h-8 text-purple-500" />,
      title: 'Network Security',
      description: 'Comprehensive network protection with firewall, intrusion detection, and traffic analysis.',
      benefits: ['Next-Gen Firewall', 'Intrusion Prevention', 'DDoS Protection', 'Traffic Analysis']
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Protection',
      description: 'Safeguard sensitive data with advanced classification, DLP, and backup solutions.',
      benefits: ['Data Classification', 'Data Loss Prevention', 'Secure Backup', 'Data Recovery']
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Cloud Security',
      description: 'Comprehensive cloud security for AWS, Azure, and Google Cloud platforms.',
      benefits: ['Multi-Cloud Support', 'Cloud Access Security', 'Container Security', 'Serverless Protection']
    }
  ]

  const securityServices = [
    {
      name: 'Security Assessment',
      price: '$2,500',
      description: 'Comprehensive security audit and vulnerability assessment',
      features: ['Penetration Testing', 'Vulnerability Scan', 'Security Report', 'Remediation Plan']
    },
    {
      name: 'Managed Security',
      price: '$5,000',
      period: '/month',
      description: '24/7 managed security services with AI monitoring',
      features: ['24/7 Monitoring', 'Incident Response', 'Security Updates', 'Monthly Reports']
    },
    {
      name: 'Enterprise Suite',
      price: 'Custom',
      description: 'Complete cybersecurity solution for large organizations',
      features: ['Custom Implementation', 'Dedicated Team', 'Advanced Features', 'Priority Support']
    }
  ]

  const compliance = [
    'SOC 2 Type II',
    'ISO 27001',
    'GDPR Compliance',
    'HIPAA Ready',
    'PCI DSS',
    'NIST Framework'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Helmet>
        <title>AI Cybersecurity Suite - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions with threat detection, 24/7 monitoring, and enterprise-grade protection. Secure your business with cutting-edge security technology." />
        <meta name="keywords" content="cybersecurity, AI security, threat detection, network security, data protection, compliance" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Cybersecurity Suite</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your business with advanced AI-powered cybersecurity solutions that detect, prevent, and respond to threats in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Security Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#demo"
                  className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Security Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered cybersecurity suite provides complete protection across all attack vectors and compliance requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Compliance & Certifications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet industry standards and regulatory requirements with our compliance-ready security solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {compliance.map((cert, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-white font-semibold">{cert}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Security Service Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security solution that fits your business needs and budget.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {securityServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{service.price}</span>
                      {service.period && <span className="text-gray-300 ml-1">{service.period}</span>}
                    </div>
                    <p className="text-gray-300 mt-2">{service.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Secure Your Business Today</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Don't wait for a security breach. Get comprehensive protection with our AI-powered cybersecurity suite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Get Security Assessment
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}