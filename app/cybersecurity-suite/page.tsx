'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Shield, Brain, Target, BarChart, Users, CheckCircle, Phone, Mail, ArrowRight, Settings, Zap, Globe, Lock } from 'lucide-react';

const CybersecuritySuitePage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Threat Detection',
      description: 'Advanced threat detection and prevention using AI and machine learning.',
      benefits: ['Real-time monitoring', 'Behavioral analysis', 'Automated response']
    },
    {
      icon: Brain,
      title: 'AI Security',
      description: 'AI-powered security solutions that learn and adapt to new threats.',
      benefits: ['Machine learning', 'Pattern recognition', 'Predictive security']
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Comprehensive data encryption and protection across all systems.',
      benefits: ['End-to-end encryption', 'Data classification', 'Access controls']
    },
    {
      icon: Target,
      title: 'Vulnerability Management',
      description: 'Continuous vulnerability assessment and remediation.',
      benefits: ['Automated scanning', 'Risk prioritization', 'Patch management']
    },
    {
      icon: BarChart,
      title: 'Security Analytics',
      description: 'Advanced security analytics and reporting for compliance.',
      benefits: ['Real-time dashboards', 'Compliance reporting', 'Incident analysis']
    },
    {
      icon: Users,
      title: 'Identity Management',
      description: 'Comprehensive identity and access management solutions.',
      benefits: ['Multi-factor auth', 'Single sign-on', 'Privileged access']
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$799',
      period: '/month',
      description: 'Basic security suite',
      features: [
        'Basic threat detection',
        'Firewall protection',
        'Email security',
        'Vulnerability scanning',
        'Email support',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,999',
      period: '/month',
      description: 'Advanced security suite',
      features: [
        'Advanced threat detection',
        'AI-powered security',
        'All security features',
        'Priority support',
        'Real-time monitoring',
        'Compliance reporting',
        'Incident response'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'Complete security suite',
      features: [
        'Full security suite',
        'Custom security rules',
        'Dedicated security team',
        '24/7 support',
        'Custom integrations',
        'SLA guarantee',
        'White-label options'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Threat Detection' },
    { number: '24/7', label: 'Monitoring' },
    { number: '15+', label: 'Security Layers' },
    { number: '100%', label: 'Compliance' }
  ];

  const compliance = [
    {
      title: 'SOC 2 Type II',
      description: 'Comprehensive security controls and compliance reporting.',
      icon: Shield
    },
    {
      title: 'GDPR Compliance',
      description: 'Data protection and privacy compliance for EU regulations.',
      icon: Lock
    },
    {
      title: 'HIPAA Compliance',
      description: 'Healthcare data protection and compliance requirements.',
      icon: Users
    },
    {
      title: 'ISO 27001',
      description: 'International standard for information security management.',
      icon: Globe
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Cybersecurity Suite - Zion Tech Group"
        description="Comprehensive cybersecurity suite with 99.9% threat detection, 24/7 monitoring, and 100% compliance. Advanced AI security, data protection, and incident response."
        keywords={['cybersecurity suite', 'threat detection', 'data protection', 'security compliance', 'AI security']}
        canonicalUrl="https://ziontechgroup.com/cybersecurity-suite"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Cybersecurity Suite
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Complete security protection with 99.9% threat detection
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our comprehensive cybersecurity suite provides enterprise-grade protection 
                with AI-powered threat detection, data encryption, and compliance management.
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
                  <span>Get Free Security Audit</span>
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
              Security Features
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

          {/* Compliance Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Compliance & Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {compliance.map((item, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <item.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Security Packages
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
                    Get Started
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
                Get comprehensive cybersecurity protection today
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
                  <span>Get Free Security Audit</span>
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

export default CybersecuritySuitePage;