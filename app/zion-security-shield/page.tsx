import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, CheckCircle, Star, Cloud, Users, Clock, DollarSign, Code, Database, Mail, Settings, AlertTriangle, Lock, Eye, Zap, Globe, Smartphone, Activity } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const ZionSecurityShield = () => {
  const features = [
    'AI-Powered Threat Detection',
    'Real-time Security Monitoring',
    'Automated Incident Response',
    'Advanced Firewall Protection',
    'Intrusion Detection System',
    'Malware & Virus Scanning',
    'DDoS Attack Prevention',
    'SSL Certificate Management',
    'Vulnerability Assessment',
    'Security Compliance Reports',
    '24/7 Security Operations Center',
    'Multi-factor Authentication'
  ];

  const pricingTiers = [
    {
      name: 'Essential',
      price: '$49',
      period: '/month',
      description: 'Basic security for small businesses',
      features: [
        'Basic firewall protection',
        'Malware scanning',
        'SSL certificates',
        'Email support',
        'Monthly security reports',
        'Up to 5 websites'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Advanced security for growing companies',
      features: [
        'AI threat detection',
        'Real-time monitoring',
        'Automated response',
        'Priority support',
        'Weekly security reports',
        'Up to 25 websites',
        'DDoS protection',
        'Vulnerability scanning'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'Complete security for large organizations',
      features: [
        'Advanced AI protection',
        '24/7 SOC monitoring',
        'Custom security policies',
        'Dedicated support',
        'Unlimited websites',
        'Compliance reporting',
        'Penetration testing',
        'Security training'
      ],
      popular: false
    }
  ];

  const securityFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent sophisticated cyber threats in real-time.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Real-time Monitoring',
      description: '24/7 monitoring of your systems with instant alerts and automated response capabilities.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Data Encryption',
      description: 'End-to-end encryption for all data transmission and storage with military-grade security.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Vulnerability Scanning',
      description: 'Regular automated scans to identify and patch security vulnerabilities before they can be exploited.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Incident Response',
      description: 'Automated incident response with immediate threat containment and recovery procedures.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global CDN Protection',
      description: 'Worldwide content delivery network with built-in security features and DDoS protection.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const complianceStandards = [
    'SOC 2 Type II',
    'ISO 27001',
    'GDPR Compliant',
    'HIPAA Ready',
    'PCI DSS Level 1',
    'NIST Framework'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="Zion Security Shield - Advanced Cybersecurity Protection | Zion Tech Group"
        description="Protect your business with Zion Security Shield. AI-powered threat detection, real-time monitoring, and automated incident response. Starting at $49/month."
        keywords="cybersecurity, threat detection, security monitoring, firewall protection, DDoS protection, vulnerability scanning, compliance"
        canonical="https://ziontechgroup.com/zion-security-shield"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
            <Shield className="w-4 h-4 text-red-400 mr-2" />
            <span className="text-red-400 text-sm font-medium">Enterprise-Grade Security</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
              Zion Security Shield
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Advanced AI-powered cybersecurity protection that keeps your business safe from evolving threats. 
            Real-time monitoring, automated response, and enterprise-grade security features.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
            >
              Get Protected Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Security Demo
              <Shield className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Security Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Threat Block Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">SOC Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">&lt;1min</div>
              <div className="text-gray-300 text-sm">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-300 text-sm">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive protection against all types of cyber threats with AI-powered detection and response.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 text-center"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Security Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to protect your business from cyber threats and ensure compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white font-medium group-hover:text-red-300 transition-colors">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Compliance Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet regulatory requirements with our compliance-ready security solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {complianceStandards.map((standard, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 text-center"
              >
                <div className="text-white font-semibold group-hover:text-red-300 transition-colors">
                  {standard}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Plans for Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security level that matches your business needs. All plans include 30-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  tier.popular 
                    ? 'border-red-500/50 shadow-red-500/20' 
                    : 'border-white/20 hover:border-red-500/30'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-red-400">{tier.price}</span>
                    <span className="text-gray-300 ml-1">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    tier.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700 shadow-lg hover:shadow-red-500/25'
                      : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
                  }`}
                >
                  Get Protected
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-orange-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Don't Wait for a Security Breach
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Protect your business today with enterprise-grade security. Join thousands of companies 
            that trust Zion Security Shield to keep their data and systems safe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View All Plans
              <Shield className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionSecurityShield;