'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Zap, CheckCircle, DollarSign, Users, Globe, ArrowRight, Phone, Mail, MapPin, Star, Award, TrendingUp, Brain, Target, BarChart, MessageSquare, Sparkles, Database, Cpu, Server, AlertTriangle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CybersecuritySolutionsPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Advanced Threat Protection',
      description: 'AI-powered threat detection and prevention with real-time monitoring and automated response',
      benefits: ['Real-time threat detection', 'AI-powered analysis', 'Automated response', 'Zero-day protection']
    },
    {
      icon: Lock,
      title: 'Data Encryption & Privacy',
      description: 'End-to-end encryption and privacy protection for all your sensitive data and communications',
      benefits: ['End-to-end encryption', 'Data privacy compliance', 'Secure communications', 'Key management']
    },
    {
      icon: Eye,
      title: '24/7 Security Monitoring',
      description: 'Round-the-clock security monitoring with expert analysis and immediate incident response',
      benefits: ['24/7 SOC monitoring', 'Expert analysis', 'Immediate response', 'Threat intelligence']
    },
    {
      icon: Zap,
      title: 'Compliance & Governance',
      description: 'Comprehensive compliance management for GDPR, HIPAA, SOC 2, and other regulatory requirements',
      benefits: ['Regulatory compliance', 'Audit preparation', 'Policy management', 'Risk assessment']
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$1,999',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic threat monitoring',
        'Firewall management',
        'Email security',
        'Vulnerability scanning',
        'Monthly security reports',
        'Email support',
        'Basic compliance',
        'Incident response'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,999',
      period: '/month',
      description: 'Ideal for growing businesses with complex needs',
      features: [
        'Advanced threat protection',
        'AI-powered monitoring',
        'Multi-layer security',
        'Advanced compliance',
        'Priority support',
        'Security training',
        'Penetration testing',
        'Custom policies',
        'Dedicated security team',
        'Monthly assessments'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$12,999',
      period: '/month',
      description: 'For large organizations with critical security requirements',
      features: [
        'Full security suite',
        'Custom security architecture',
        '24/7 dedicated SOC',
        'Advanced threat hunting',
        'White-glove service',
        'Custom compliance',
        'Security consulting',
        'Incident forensics',
        'Executive reporting',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const securityServices = [
    { name: 'Penetration Testing', icon: '🔍', description: 'Comprehensive security testing' },
    { name: 'Vulnerability Assessment', icon: '🛡️', description: 'System vulnerability analysis' },
    { name: 'Security Auditing', icon: '📋', description: 'Compliance and security audits' },
    { name: 'Incident Response', icon: '🚨', description: '24/7 incident response team' },
    { name: 'Security Training', icon: '🎓', description: 'Employee security awareness' },
    { name: 'Risk Assessment', icon: '⚠️', description: 'Comprehensive risk analysis' },
    { name: 'Compliance Management', icon: '📊', description: 'Regulatory compliance support' },
    { name: 'Security Consulting', icon: '💼', description: 'Strategic security guidance' }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      role: 'CISO, FinancialCorp',
      content: 'Zion Tech Group\'s cybersecurity solutions protected us from 15+ sophisticated attacks in the first month. Their AI-powered detection is incredibly effective.',
      rating: 5,
      protection: '15+ attacks prevented'
    },
    {
      name: 'Michael Torres',
      role: 'IT Director, HealthTech',
      content: 'The compliance management helped us achieve HIPAA certification in record time. Our security posture improved dramatically with their comprehensive approach.',
      rating: 5,
      achievement: 'HIPAA certified'
    },
    {
      name: 'Sarah Kim',
      role: 'CEO, E-commerceCo',
      content: 'After a major data breach, Zion Tech Group helped us rebuild our security infrastructure. We\'ve been breach-free for 18 months and counting.',
      rating: 5,
      result: '18 months breach-free'
    }
  ];

  const complianceFrameworks = [
    {
      framework: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      coverage: '100%'
    },
    {
      framework: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      coverage: '100%'
    },
    {
      framework: 'HIPAA',
      description: 'Healthcare data protection and privacy',
      coverage: '100%'
    },
    {
      framework: 'PCI DSS',
      description: 'Payment card industry data security',
      coverage: '100%'
    }
  ];

  const threatTypes = [
    {
      threat: 'Ransomware',
      description: 'Advanced ransomware protection with AI detection',
      prevention: '99.8%'
    },
    {
      threat: 'Phishing',
      description: 'Email security and phishing prevention',
      prevention: '99.5%'
    },
    {
      threat: 'DDoS Attacks',
      description: 'Distributed denial of service protection',
      prevention: '100%'
    },
    {
      threat: 'Insider Threats',
      description: 'User behavior analytics and monitoring',
      prevention: '95%'
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      description: 'HIPAA-compliant security solutions for healthcare organizations',
      benefits: ['HIPAA compliance', 'Patient data protection', 'Medical device security', 'Audit support']
    },
    {
      industry: 'Finance',
      description: 'Bank-grade security for financial institutions and fintech companies',
      benefits: ['PCI DSS compliance', 'Fraud prevention', 'Transaction security', 'Regulatory compliance']
    },
    {
      industry: 'E-commerce',
      description: 'Comprehensive security for online retailers and marketplaces',
      benefits: ['Payment security', 'Customer data protection', 'Website security', 'API protection']
    },
    {
      industry: 'Government',
      description: 'High-security solutions for government agencies and contractors',
      benefits: ['FedRAMP compliance', 'Classified data protection', 'National security', 'Clearance support']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Cybersecurity Solutions - Enterprise Security & Compliance Services | Zion Tech Group"
        description="Comprehensive cybersecurity solutions with AI-powered threat protection, compliance management, and 24/7 monitoring. Protect your business from 99.8% of threats with our enterprise-grade security services."
        keywords={['cybersecurity', 'security services', 'threat protection', 'compliance', 'SOC 2', 'HIPAA', 'penetration testing', 'security audit']}
        canonicalUrl="https://ziontechgroup.com/cybersecurity-solutions"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Enterprise Cybersecurity Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
                Cybersecurity Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Comprehensive cybersecurity solutions with AI-powered threat protection, compliance management, 
                and 24/7 monitoring. Protect your business from 99.8% of threats with enterprise-grade security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#pricing"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Security Assessment
                </a>
                <a
                  href="#demo"
                  className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Security Report
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-red-400 mb-2">99.8%</div>
                <div className="text-gray-300">Threat Prevention</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Security Monitoring</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
                <div className="text-gray-300">Compliance Coverage</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-green-400 mb-2">15min</div>
                <div className="text-gray-300">Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4" id="features">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Comprehensive Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enterprise-grade security solutions with AI-powered protection and compliance management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-red-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Threat Protection Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Advanced Threat Protection
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI-powered protection against the latest cyber threats
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {threatTypes.map((threat, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{threat.threat}</h3>
                    <span className="text-red-400 font-bold text-lg">{threat.prevention}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{threat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Compliance & Certifications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Full compliance support for major regulatory frameworks
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{framework.framework}</h3>
                    <span className="text-green-400 font-bold text-lg">{framework.coverage}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{framework.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Services Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Security Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security services to protect your organization
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {securityServices.map((service, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <div className="text-sm text-white font-medium mb-1">{service.name}</div>
                  <div className="text-xs text-gray-400">{service.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored security solutions for different industries and compliance requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-red-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-slate-800/50" id="pricing">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Security Service Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security package that fits your organization's needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-red-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-red-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-red-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in Cybersecurity ${plan.name} Package`}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-red-400 text-slate-900 hover:bg-red-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join 500+ organizations already protected by our security solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-red-400 text-sm">{testimonial.role}</div>
                    </div>
                    <div className="text-green-400 font-semibold text-sm">
                      {testimonial.protection || testimonial.achievement || testimonial.result}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Get your free security assessment and discover how to protect your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Free Cybersecurity Assessment Request"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Assessment
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-red-100">
              <p>Contact: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CybersecuritySolutionsPage;