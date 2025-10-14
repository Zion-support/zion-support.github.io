'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon,
  CpuChipIcon,
  EyeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CloudIcon,
  UserGroupIcon,
  LockClosedIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export default function AICybersecurityMonitorPro() {
  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect threats in real-time with 99.9% accuracy.'
    },
    {
      icon: EyeIcon,
      title: '24/7 Monitoring',
      description: 'Continuous surveillance of your network, endpoints, and cloud infrastructure.'
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Instant Alerts',
      description: 'Get immediate notifications when threats are detected with detailed incident reports.'
    },
    {
      icon: ChartBarIcon,
      title: 'Security Analytics',
      description: 'Comprehensive dashboards and reports to track your security posture and trends.'
    }
  ];

  const threatTypes = [
    {
      name: 'Malware Detection',
      description: 'AI-powered detection of known and unknown malware variants',
      icon: '🦠',
      coverage: '99.8%'
    },
    {
      name: 'Phishing Prevention',
      description: 'Advanced email and web filtering to prevent phishing attacks',
      icon: '🎣',
      coverage: '99.5%'
    },
    {
      name: 'DDoS Protection',
      description: 'Real-time mitigation of distributed denial-of-service attacks',
      icon: '⚡',
      coverage: '99.9%'
    },
    {
      name: 'Insider Threats',
      description: 'Behavioral analysis to detect malicious insider activities',
      icon: '👤',
      coverage: '95.2%'
    },
    {
      name: 'Zero-Day Exploits',
      description: 'AI detection of previously unknown vulnerabilities and exploits',
      icon: '🔍',
      coverage: '92.1%'
    },
    {
      name: 'Data Exfiltration',
      description: 'Monitor and prevent unauthorized data access and theft',
      icon: '📊',
      coverage: '98.7%'
    }
  ];

  const pricingTiers = [
    {
      name: 'Essential',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 50 endpoints',
        'Basic threat detection',
        'Email support',
        'Standard reporting',
        '1GB log storage',
        'Basic compliance reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 500 endpoints',
        'Advanced AI detection',
        '24/7 phone support',
        'Custom dashboards',
        '10GB log storage',
        'Advanced compliance',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited endpoints',
        'Premium AI models',
        'Dedicated security team',
        'White-label solution',
        'Unlimited storage',
        'Full compliance suite',
        'Custom AI training',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const benefits = [
    'Reduce security incidents by 85%',
    'Detect threats 10x faster than traditional methods',
    'Comply with GDPR, HIPAA, and SOC 2 standards',
    'Save 60% on security operations costs',
    'Protect against 99.9% of known threats',
    'Get detailed forensic analysis of security events'
  ];

  const complianceStandards = [
    'GDPR Compliance',
    'HIPAA Compliance',
    'SOC 2 Type II',
    'ISO 27001',
    'PCI DSS',
    'NIST Framework'
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Monitor Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity monitoring platform with real-time threat detection, 24/7 surveillance, and enterprise-grade security protection." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, malware protection, network security, compliance" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text neon-text">
              AI Cybersecurity Monitor Pro
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered cybersecurity protection with real-time threat detection
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Protect your business with 99.9% threat detection accuracy and 24/7 AI-powered monitoring
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Security Assessment
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive protection powered by cutting-edge AI technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{feature.title}</h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Types Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Comprehensive Threat Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect against all types of cyber threats with our AI-powered detection
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threatTypes.map((threat, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                <div className="text-4xl mb-4">{threat.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{threat.name}</h3>
                <p className="text-gray-300 mb-4">
                  {threat.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Detection Rate:</span>
                  <span className="text-green-400 font-bold text-lg">{threat.coverage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet industry standards and regulatory requirements with built-in compliance features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform floating">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{standard}</h3>
                <p className="text-gray-300">
                  Fully compliant with {standard} requirements
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven results that protect your business and reduce security risks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors">
                <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Security Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security level that fits your organization's needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover-lift ${
                tier.popular 
                  ? 'border-purple-500 scale-105' 
                  : 'border-slate-600 hover:border-purple-500'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                      : 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of organizations already protected by our AI cybersecurity platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Security Assessment
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}