'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Star, CheckCircle, Shield, Eye, Lock, AlertTriangle, Users, Clock, DollarSign, Zap, Globe, Database } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function CyberSecuritySuitePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  React.useEffect(() => {
    setIsLoaded(true)
  }, [])

  const features = [
    {
      icon: <Eye className="w-6 h-6 text-cyan-400" />,
      title: 'Real-Time Monitoring',
      description: '24/7 threat detection and monitoring across your entire infrastructure.'
    },
    {
      icon: <Lock className="w-6 h-6 text-purple-400" />,
      title: 'Advanced Encryption',
      description: 'Military-grade encryption to protect your sensitive data and communications.'
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-yellow-400" />,
      title: 'Threat Intelligence',
      description: 'AI-powered threat analysis and automated response to security incidents.'
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: 'Access Management',
      description: 'Comprehensive identity and access management with multi-factor authentication.'
    },
    {
      icon: <Database className="w-6 h-6 text-pink-400" />,
      title: 'Compliance Reporting',
      description: 'Automated compliance reporting for GDPR, HIPAA, SOC 2, and other standards.'
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: 'Incident Response',
      description: 'Rapid incident response with automated containment and recovery procedures.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Real-time threat monitoring',
        'Basic encryption',
        'Email support',
        'Up to 50 users',
        'Basic reporting',
        'SSL certificates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and enterprises',
      features: [
        'Advanced threat detection',
        'Military-grade encryption',
        'Priority support',
        'Up to 500 users',
        'Advanced reporting',
        'Compliance tools',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations with complex security needs',
      features: [
        'AI-powered threat intelligence',
        'Zero-trust architecture',
        '24/7 phone support',
        'Unlimited users',
        'Custom reporting',
        'Full compliance suite',
        'Dedicated security team',
        'Custom development'
      ],
      popular: false
    }
  ]

  const securityServices = [
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security scanning and vulnerability identification',
      icon: <Shield className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Penetration Testing',
      description: 'Simulated cyber attacks to test your security defenses',
      icon: <Lock className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Security Training',
      description: 'Employee security awareness and training programs',
      icon: <Users className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and recovery from security incidents',
      icon: <AlertTriangle className="w-8 h-8 text-red-400" />
    }
  ]

  const complianceStandards = [
    'GDPR', 'HIPAA', 'SOC 2', 'ISO 27001', 'PCI DSS', 'NIST', 'CIS Controls', 'COBIT'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>CyberGuard Security Suite - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity monitoring with real-time threat detection and automated response. Starting at $99/month." />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                  <Shield className="w-4 h-4 mr-2" />
                  Enterprise-Grade Security
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                  CyberGuard <span className="bg-gradient-to-r from-cyan-400 via-red-400 to-purple-400 bg-clip-text text-transparent">Security Suite</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Protect your business with comprehensive cybersecurity monitoring, threat detection, and automated response. 
                  <span className="text-cyan-400 font-semibold"> Stay one step ahead of cyber threats.</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="#pricing"
                    className="group bg-gradient-to-r from-red-600 via-purple-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-2xl"
                  >
                    Get Security Assessment
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Demo
                  </a>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                    <div className="text-gray-300">Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">99.9%</div>
                    <div className="text-gray-300">Threat Detection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">&lt; 5min</div>
                    <div className="text-gray-300">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">100%</div>
                    <div className="text-gray-300">Compliance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-red-600 to-cyan-600 bg-clip-text text-transparent">Comprehensive Security</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced cybersecurity features to protect your business from evolving threats.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-red-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-red-100 to-cyan-100 group-hover:from-red-200 group-hover:to-cyan-200 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-red-400 bg-clip-text text-transparent">Security Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our expert security team provides comprehensive protection and compliance solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityServices.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-red-400/50 transition-all duration-300 transform hover:-translate-y-2 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-red-500/20 to-cyan-500/20 group-hover:from-red-500/30 group-hover:to-cyan-500/30 transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Compliance Ready</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet industry standards and regulatory requirements with our compliance-focused security solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center border border-gray-200 hover:border-purple-300">
                  <div className="text-lg font-bold text-gray-900">{standard}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-red-600 to-cyan-600 bg-clip-text text-transparent">Security Pricing</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the security level that matches your business needs and risk profile.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                  plan.popular 
                    ? 'border-red-500 ring-2 ring-red-500/20' 
                    : 'border-gray-200 hover:border-red-300'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-600 to-cyan-600 text-white hover:from-red-700 hover:to-cyan-700 transform hover:scale-105'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Don't wait for a security breach. Get comprehensive protection with CyberGuard Security Suite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Security Assessment
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}