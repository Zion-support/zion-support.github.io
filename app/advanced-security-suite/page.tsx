import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, ArrowRight, CheckCircle, Zap, Brain, Smartphone, Globe, Lock, BarChart3, Star, Sparkles, AlertTriangle, Users, Target, Eye } from 'lucide-react'
import Layout from '../layout'

export default function AdvancedSecuritySuite() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: '360° Protection',
      description: 'Comprehensive security coverage across all endpoints, networks, and cloud infrastructure'
    },
    {
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent sophisticated cyber attacks'
    },
    {
      title: 'Real-time Monitoring',
      description: '24/7 security monitoring with instant threat response and automated remediation'
    },
    {
      title: 'Compliance Ready',
      description: 'Meet GDPR, HIPAA, SOX, and other regulatory requirements with built-in compliance tools'
    }
  ]

  const securityModules = [
    {
      category: 'Endpoint Security',
      items: ['Antivirus & Anti-malware', 'Device Encryption', 'USB Protection', 'Application Control', 'Patch Management', 'Mobile Security']
    },
    {
      category: 'Network Security',
      items: ['Firewall Management', 'Intrusion Detection', 'VPN Solutions', 'Network Segmentation', 'DDoS Protection', 'Traffic Analysis']
    },
    {
      category: 'Cloud Security',
      items: ['Cloud Access Control', 'Data Loss Prevention', 'Cloud Monitoring', 'Identity Management', 'API Security', 'Container Security']
    },
    {
      category: 'Threat Intelligence',
      items: ['Threat Hunting', 'Vulnerability Scanning', 'Penetration Testing', 'Security Analytics', 'Incident Response', 'Forensics']
    }
  ]

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 25 endpoints',
        'Basic threat protection',
        'Email security',
        '24/7 monitoring',
        'Standard support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 100 endpoints',
        'Advanced AI protection',
        'Full security suite',
        'Priority support',
        'Compliance tools',
        'Custom policies'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited endpoints',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Full compliance suite',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Robert Chen',
      company: 'Financial Services Corp',
      content: 'Advanced Security Suite protected us from 3 major cyber attacks this year. The AI detection is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'Healthcare Plus',
      content: 'HIPAA compliance was seamless with this suite. Our auditors were impressed with the security measures.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Tech Manufacturing Inc',
      content: 'The 24/7 monitoring gives us peace of mind. We sleep better knowing our systems are protected.',
      rating: 5
    }
  ]

  return (
    <Layout
      title="Advanced Security Suite - Enterprise Cybersecurity | Zion Tech Group"
      description="Comprehensive cybersecurity solution with AI threat detection, 24/7 monitoring, and compliance tools. Protect your business from advanced cyber threats. Get your free security assessment today."
      keywords="cybersecurity, threat detection, security monitoring, compliance, enterprise security, AI security"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Enterprise Cybersecurity
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Advanced Security Suite
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Protect your business with our comprehensive cybersecurity solution. AI-powered threat detection, 
                24/7 monitoring, and compliance tools to keep your data and systems secure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="#demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Comprehensive Security Features
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Advanced protection against the latest cyber threats
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Modules */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Complete Security Coverage
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Protect every aspect of your digital infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityModules.map((module, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-4">{module.category}</h3>
                  <ul className="space-y-2">
                    {module.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Flexible Security Plans
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the security level that fits your organization
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-red-400/40 scale-105 shadow-2xl shadow-red-500/20' 
                    : 'border-red-500/20 hover:border-red-400/40'
                }`}>
                  {plan.popular && (
                    <div className="inline-flex items-center px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-sm font-medium mb-4">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white hover:from-red-600 hover:to-purple-700'
                        : 'border-2 border-red-400 text-red-400 hover:bg-red-400/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-gray-300">
                See how our security suite protects organizations worldwide
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-2xl p-8 border border-red-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Secure Your Business Today
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Don't wait for a cyber attack. Get comprehensive protection with Advanced Security Suite
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Free Security Assessment
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}