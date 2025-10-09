'use client';
import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Star, ArrowRight, Brain, Zap, Users, Clock, DollarSign, Award, Globe, Database, Settings, Smartphone, Mail, Phone, Calendar, FileText, Network, Server } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CybersecuritySuite: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Threat Protection',
      description: 'Multi-layered security defense against malware, ransomware, and advanced persistent threats',
      price: '$99/month',
      features: ['Real-time threat detection', 'Behavioral analysis', 'Machine learning algorithms', 'Zero-day protection']
    },
    {
      icon: Lock,
      title: 'Identity & Access Management',
      description: 'Secure user authentication and authorization with multi-factor authentication',
      price: '$49/month',
      features: ['Single sign-on (SSO)', 'Multi-factor authentication', 'Role-based access control', 'Password management']
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response with SOC team support',
      price: '$199/month',
      features: ['24/7 SOC monitoring', 'Incident response', 'Threat hunting', 'Security alerts']
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Comprehensive network protection with firewalls, VPN, and intrusion detection',
      price: '$79/month',
      features: ['Next-gen firewall', 'VPN solutions', 'Intrusion detection', 'Network segmentation']
    },
    {
      icon: Database,
      title: 'Data Protection',
      description: 'Encrypt and protect sensitive data with advanced encryption and backup solutions',
      price: '$69/month',
      features: ['Data encryption', 'Backup & recovery', 'Data loss prevention', 'Compliance reporting']
    },
    {
      icon: AlertTriangle,
      title: 'Vulnerability Management',
      description: 'Continuous vulnerability scanning and patch management for all systems',
      price: '$59/month',
      features: ['Vulnerability scanning', 'Patch management', 'Risk assessment', 'Compliance monitoring']
    }
  ];

  const pricingTiers = [
    {
      name: 'Essential',
      price: '$199',
      period: '/month',
      description: 'Basic security for small businesses',
      features: [
        'Basic threat protection',
        'Firewall management',
        'Antivirus & antimalware',
        'Email security',
        'Basic monitoring',
        'Email support',
        'Up to 25 users'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Comprehensive security for growing companies',
      features: [
        'Advanced threat protection',
        'Identity & access management',
        'Network security',
        'Data protection',
        '24/7 monitoring',
        'Priority support',
        'Up to 100 users',
        'Compliance reporting',
        'Incident response'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'Complete security suite for large organizations',
      features: [
        'Full security suite',
        'Custom security policies',
        'Dedicated security team',
        'Advanced analytics',
        'White-label options',
        'Custom integrations',
        'Unlimited users',
        'SLA guarantee',
        'Penetration testing'
      ],
      popular: false
    }
  ];

  const compliance = [
    { name: 'SOC 2 Type II', status: 'Certified', icon: Shield },
    { name: 'ISO 27001', status: 'Certified', icon: Lock },
    { name: 'GDPR', status: 'Compliant', icon: Globe },
    { name: 'HIPAA', status: 'Compliant', icon: FileText },
    { name: 'PCI DSS', status: 'Compliant', icon: CreditCard },
    { name: 'NIST', status: 'Aligned', icon: Settings }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      role: 'CISO',
      company: 'Financial Services Corp',
      content: 'The cybersecurity suite has significantly improved our security posture. We\'ve had zero breaches since implementation.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      role: 'IT Director',
      company: 'Healthcare Systems',
      content: 'The 24/7 monitoring gives us peace of mind. The SOC team is incredibly responsive and professional.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Security Manager',
      company: 'E-commerce Platform',
      content: 'The compliance reporting features saved us months of work. We passed our audit with flying colors.',
      rating: 5
    }
  ];

  const securityStats = [
    { number: '99.9%', label: 'Threat Detection Rate' },
    { number: '24/7', label: 'Security Monitoring' },
    { number: '< 5 min', label: 'Incident Response Time' },
    { number: '0', label: 'Successful Breaches' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Enterprise-Grade Security</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Cybersecurity Suite
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with our comprehensive cybersecurity suite. 
              Advanced threat protection, 24/7 monitoring, and compliance management all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-colors">
                View Demo
              </button>
            </div>
          </div>

          {/* Security Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {securityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Security Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to protect your business from cyber threats and ensure compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-colors">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{feature.price}</div>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Compliance & Certifications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet industry standards and regulatory requirements with our certified security solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {compliance.map((item, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center hover:bg-slate-800/70 transition-colors">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-sm text-white font-medium mb-1">{item.name}</div>
                <div className="text-xs text-green-400">{item.status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Security Level</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the security package that matches your business needs and risk profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-slate-800/50 rounded-xl p-8 ${
                tier.popular ? 'ring-2 ring-red-500 scale-105' : ''
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-400 ml-2">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  tier.popular 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations rely on our cybersecurity suite to protect their critical assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Secure Your Business Today</h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait for a breach. Get a free security assessment and protect your business now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
              Get Free Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-colors">
              Schedule Consultation
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Free security assessment • No obligation • Expert recommendations
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CybersecuritySuite;