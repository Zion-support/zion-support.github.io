'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Zap, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, DollarSign, Clock, Award, TrendingUp, BarChart, Globe, AlertTriangle, Bug, Database, Network, Key, Scan, Activity, Brain, Target, Users, Settings } from 'lucide-react';

const AICybersecurityAdvancedPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms that detect and prevent sophisticated cyber threats in real-time',
      benefits: ['Zero-day threat detection', 'Behavioral analysis', 'Anomaly detection', 'Predictive security']
    },
    {
      icon: Shield,
      title: 'Automated Response',
      description: 'Intelligent security orchestration that automatically responds to threats and mitigates attacks',
      benefits: ['Instant threat response', 'Automated incident response', 'Self-healing systems', 'Threat containment']
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 AI-powered monitoring of your entire digital infrastructure with real-time threat intelligence',
      benefits: ['Real-time monitoring', 'Threat intelligence feeds', 'Security analytics', 'Compliance tracking']
    },
    {
      icon: Zap,
      title: 'Quantum-Safe Security',
      description: 'Future-proof security solutions using quantum-resistant cryptography and advanced encryption',
      benefits: ['Post-quantum cryptography', 'Quantum key distribution', 'Advanced encryption', 'Future-proof security']
    }
  ];

  const securityServices = [
    {
      title: 'Penetration Testing',
      description: 'Comprehensive security assessments using AI-powered tools and expert analysis',
      icon: Target,
      examples: ['Vulnerability scanning', 'Social engineering tests', 'Network penetration', 'Application security']
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and recovery services for security breaches and cyber attacks',
      icon: AlertTriangle,
      examples: ['Breach investigation', 'Forensic analysis', 'Damage assessment', 'Recovery planning']
    },
    {
      title: 'Compliance Management',
      description: 'Ensure compliance with industry standards and regulations using AI automation',
      icon: CheckCircle,
      examples: ['GDPR compliance', 'HIPAA compliance', 'SOC 2 certification', 'ISO 27001']
    },
    {
      title: 'Security Training',
      description: 'AI-powered security awareness training and phishing simulation programs',
      icon: Users,
      examples: ['Phishing simulations', 'Security awareness', 'Incident response training', 'Compliance training']
    }
  ];

  const pricingTiers = [
    {
      name: 'Security Essentials',
      price: '$1,999',
      period: '/month',
      description: 'Basic AI security monitoring for small businesses',
      features: [
        'AI threat detection',
        'Basic monitoring',
        'Email security',
        'Vulnerability scanning',
        'Standard support',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Security Professional',
      price: '$4,999',
      period: '/month',
      description: 'Advanced AI security for growing businesses',
      features: [
        'Advanced AI threat detection',
        '24/7 monitoring',
        'Automated response',
        'Penetration testing',
        'Incident response',
        'Compliance management',
        'Priority support',
        'Custom security policies'
      ],
      popular: true
    },
    {
      name: 'Security Enterprise',
      price: 'Custom',
      period: '',
      description: 'Comprehensive AI security for large organizations',
      features: [
        'Full AI security suite',
        'Dedicated security team',
        'Custom security solutions',
        'Quantum-safe security',
        '24/7 dedicated support',
        'On-premise deployment',
        'SLA guarantees',
        'White-label options',
        'Security consulting'
      ],
      popular: false
    }
  ];

  const securityStats = [
    {
      metric: '99.9%',
      description: 'Threat Detection Rate',
      icon: Target
    },
    {
      metric: '< 1min',
      description: 'Response Time',
      icon: Zap
    },
    {
      metric: 'Zero',
      description: 'False Positives',
      icon: CheckCircle
    },
    {
      metric: '24/7',
      description: 'Monitoring',
      icon: Eye
    }
  ];

  const complianceStandards = [
    'GDPR', 'HIPAA', 'SOC 2', 'ISO 27001', 'PCI DSS', 'NIST', 'CIS Controls', 'COBIT'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Cybersecurity Advanced - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions with real-time threat detection, automated response, and quantum-safe security. Protect your organization from sophisticated cyber threats." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security automation, incident response, compliance, quantum security, cyber defense" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>AI-Powered Security</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Cybersecurity Advanced
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your organization with cutting-edge AI cybersecurity solutions. Real-time threat detection, automated response, and quantum-safe security for the modern digital world.
          </p>

          {/* Security Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {securityStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <stat.icon className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-red-400 mb-2">{stat.metric}</div>
                <div className="text-gray-300">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Cybersecurity Demo Request"
              className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:from-red-600 hover:to-orange-700 transition-all inline-flex items-center"
            >
              <Shield className="w-5 h-5 mr-2" />
              Request Security Audit
            </a>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-red-500 text-red-400 px-8 py-3 rounded-lg font-medium hover:bg-red-500 hover:text-white transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Advanced AI Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-red-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Comprehensive Security Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <service.icon className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-sm text-gray-400">
                      • {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Compliance & Standards
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 cyber-card">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Industry Compliance Standards</h3>
              <p className="text-gray-300">Our AI cybersecurity solutions help you meet and maintain compliance with major industry standards and regulations.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-white font-semibold">{standard}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Security Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card relative ${tier.popular ? 'ring-2 ring-red-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-red-400">{tier.price}</span>
                    <span className="text-gray-300 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${tier.name} Security Plan`}
                  className={`w-full text-center py-3 rounded-lg font-medium transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Secure Your Organization Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait for a cyber attack. Protect your organization with our advanced AI cybersecurity solutions and stay one step ahead of threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:from-red-600 hover:to-orange-700 transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-red-500 text-red-400 px-8 py-3 rounded-lg font-medium hover:bg-red-500 hover:text-white transition-all inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <p>364 E Main St STE 1008, Middletown, DE 19709</p>
            <p>Mon-Fri: 9AM-6PM EST</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityAdvancedPage;
