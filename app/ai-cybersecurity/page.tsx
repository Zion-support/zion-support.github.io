'use client';
import React from 'react';
import { CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Shield, Lock, Eye, Zap, Brain, BarChart, Users, CheckCircle, Phone, Mail, ArrowRight, AlertTriangle, Database, Globe, Settings } from 'lucide-react';

const AICybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced AI algorithms that detect and prevent cyber threats in real-time, including zero-day attacks and advanced persistent threats.',
      benefits: ['Real-time detection', 'Zero-day protection', '99.9% accuracy']
    },
    {
      icon: Shield,
      title: 'Automated Response',
      description: 'Intelligent automated response system that instantly contains threats, isolates affected systems, and initiates recovery procedures.',
      benefits: ['Instant containment', 'Auto-recovery', 'Minimal downtime']
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 monitoring of your entire infrastructure with AI-powered analysis of network traffic, user behavior, and system activities.',
      benefits: ['24/7 surveillance', 'Behavioral analysis', 'Anomaly detection']
    },
    {
      icon: BarChart,
      title: 'Security Analytics',
      description: 'Comprehensive security analytics and reporting with threat intelligence, risk assessment, and compliance monitoring.',
      benefits: ['Threat intelligence', 'Risk scoring', 'Compliance reports']
    },
    {
      icon: Zap,
      title: 'Vulnerability Management',
      description: 'Automated vulnerability scanning, prioritization, and patching with AI-powered risk assessment and remediation guidance.',
      benefits: ['Auto-scanning', 'Risk prioritization', 'Patch management']
    },
    {
      icon: Lock,
      title: 'Zero Trust Architecture',
      description: 'Implement zero trust security model with identity verification, device trust, and least privilege access controls.',
      benefits: ['Identity verification', 'Device trust', 'Least privilege']
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$799',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 50 endpoints',
        'Basic threat detection',
        'Email security',
        '24/7 monitoring',
        'Email support',
        'Basic reporting',
        'Standard compliance'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,999',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 500 endpoints',
        'Advanced AI detection',
        'All security modules',
        'Real-time response',
        'Priority support',
        'Advanced analytics',
        'Custom compliance',
        'Incident response'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited endpoints',
        'Custom AI models',
        'Full security suite',
        'Dedicated SOC team',
        'Dedicated support',
        'Custom development',
        'Advanced compliance',
        'Penetration testing',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Threat Detection' },
    { number: '24/7', label: 'Monitoring' },
    { number: '60%', label: 'Faster Response' },
    { number: '100%', label: 'Compliance' }
  ];

  const threats = [
    {
      title: 'Ransomware Protection',
      description: 'Advanced AI detection and prevention of ransomware attacks with automated backup and recovery systems.',
      icon: Shield
    },
    {
      title: 'Phishing Detection',
      description: 'AI-powered email security that detects and blocks sophisticated phishing attempts and social engineering attacks.',
      icon: Eye
    },
    {
      title: 'Insider Threat Detection',
      description: 'Behavioral analysis to identify and prevent insider threats, data exfiltration, and unauthorized access.',
      icon: Users
    },
    {
      title: 'Network Security',
      description: 'Comprehensive network monitoring and protection with AI-powered intrusion detection and prevention systems.',
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Cybersecurity Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
              Protect your business with advanced AI-powered cybersecurity solutions and 24/7 monitoring
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                ✉️ Get Security Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">99.5%</div>
              <div className="text-gray-600">Threat Detection Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Security Monitoring</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-gray-600">Faster Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">$2M+</div>
              <div className="text-gray-600">Average Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Security Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI-powered cybersecurity services for complete protection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-red-600">{service.price}</span>
                  <span className="text-sm text-gray-500 ml-2">Market: {service.marketPrice}</span>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <p key={benefitIndex} className="text-sm text-green-600">✓ {benefit}</p>
                  ))}
                </div>
                
                <a 
                  href="/contact"
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center"
    <>
      <SEOOptimizer
        title="AI Cybersecurity Solutions - Zion Tech Group"
        description="Advanced AI-powered cybersecurity with 99.9% threat detection, 24/7 monitoring, and automated response. Protect your business from evolving cyber threats."
        keywords={['AI cybersecurity', 'threat detection', 'security monitoring', 'cyber protection', 'AI security']}
        canonicalUrl="https://ziontechgroup.com/ai-cybersecurity"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Cybersecurity Solutions
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Protect your business with AI-powered security
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI-powered cybersecurity platform provides advanced threat detection, 
                automated response, and 24/7 monitoring to protect your business from evolving cyber threats.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Security Audit</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Advanced Security Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Threats Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Protect Against All Threats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {threats.map((threat, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <threat.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{threat.title}</h3>
                  <p className="text-gray-300">{threat.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+13024640950"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Protected
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 3,000+ companies already protected by our AI cybersecurity platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Security Audit</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AICybersecurityPage;