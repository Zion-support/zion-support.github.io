'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Star, Brain, Smartphone, Globe, Settings, DollarSign, Award, Rocket, TrendingUp, Cpu, Database, Mic, Workflow, Heart, Monitor, Package, Wifi, Printer, Router, Box, Headphones, MessageCircle, CheckSquare, ShoppingCart, Link as LinkIcon, Server, Mail, Phone, MapPin, Search, Zap, Users, Calendar, FileText, BarChart3, Target, MessageSquare } from 'lucide-react';
import Navigation from '../../components/EnhancedNavigation';
import Footer from '../../components/Footer';

const CybersecurityAdvanced: React.FC = () => {
  const features = [
    'Advanced threat detection and response',
    '24/7 security monitoring and analysis',
    'Penetration testing and vulnerability assessments',
    'Security incident response and forensics',
    'Compliance management (SOC2, HIPAA, GDPR)',
    'Security awareness training programs',
    'Endpoint detection and response (EDR)',
    'Network security monitoring',
    'Cloud security implementation',
    'Identity and access management (IAM)',
    'Security orchestration and automation',
    'Threat intelligence and analysis',
    'Security risk assessments',
    'Data loss prevention (DLP)',
    'Email security and phishing protection',
    'Web application security testing',
    'Mobile device security management',
    'Security policy development',
    'Security architecture design',
    'Incident response planning and testing'
  ];

  const benefits = [
    'Reduce security incidents by 90%',
    'Improve compliance posture by 100%',
    'Detect threats 10x faster',
    'Reduce security costs by 30%',
    'Enhance business continuity',
    'Protect sensitive data effectively',
    'Meet regulatory requirements',
    'Improve security awareness',
    'Faster incident response',
    'Peace of mind with 24/7 protection'
  ];

  const pricingTiers = [
    {
      name: 'Security Assessment',
      price: '$5,000',
      period: 'one-time',
      description: 'Comprehensive security evaluation',
      features: [
        'Vulnerability assessment',
        'Penetration testing',
        'Security policy review',
        'Compliance gap analysis',
        'Risk assessment report',
        'Remediation recommendations'
      ],
      popular: false
    },
    {
      name: 'Managed Security',
      price: '$3,500',
      period: '/month',
      description: 'Ongoing security monitoring and management',
      features: [
        '24/7 security monitoring',
        'Threat detection and response',
        'Vulnerability management',
        'Security updates and patches',
        'Incident response',
        'Monthly security reports',
        'Security training',
        'Compliance support'
      ],
      popular: true
    },
    {
      name: 'Security Implementation',
      price: '$25,000',
      period: 'project',
      description: 'Complete security infrastructure setup',
      features: [
        'Security architecture design',
        'Security tool implementation',
        'Policy and procedure development',
        'Staff training and certification',
        'Compliance implementation',
        'Security testing and validation',
        'Documentation and handover',
        '90-day support included'
      ],
      popular: false
    }
  ];

  const securityServices = [
    {
      title: 'Threat Detection & Response',
      description: 'Advanced threat detection with 24/7 monitoring and rapid response capabilities.',
      icon: Shield,
      price: 'Starting at $2,500/month'
    },
    {
      title: 'Penetration Testing',
      description: 'Comprehensive security testing to identify vulnerabilities before attackers do.',
      icon: Eye,
      price: 'Starting at $3,000/test'
    },
    {
      title: 'Compliance Management',
      description: 'Ensure compliance with SOC2, HIPAA, GDPR, and other regulatory requirements.',
      icon: CheckSquare,
      price: 'Starting at $2,000/month'
    },
    {
      title: 'Security Training',
      description: 'Comprehensive security awareness training for your entire organization.',
      icon: Users,
      price: 'Starting at $1,500/session'
    },
    {
      title: 'Incident Response',
      description: 'Rapid response to security incidents with forensic analysis and recovery.',
      icon: AlertTriangle,
      price: 'Starting at $5,000/incident'
    },
    {
      title: 'Security Architecture',
      description: 'Design and implement comprehensive security architecture for your organization.',
      icon: Lock,
      price: 'Starting at $15,000'
    }
  ];

  const complianceFrameworks = [
    { name: 'SOC 2', icon: Shield, description: 'Service organization controls' },
    { name: 'HIPAA', icon: Heart, description: 'Healthcare data protection' },
    { name: 'GDPR', icon: Globe, description: 'European data protection' },
    { name: 'PCI DSS', icon: CreditCard, description: 'Payment card industry' },
    { name: 'ISO 27001', icon: Award, description: 'Information security management' },
    { name: 'NIST', icon: Settings, description: 'Cybersecurity framework' }
  ];

  return (
    <>
      <Helmet>
        <title>Advanced Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity services including threat detection, penetration testing, compliance management, and 24/7 security monitoring. Reduce security incidents by 90%." />
        <meta name="keywords" content="cybersecurity, security services, threat detection, penetration testing, compliance, SOC2, HIPAA, GDPR, security monitoring" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services/cybersecurity-advanced" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
                <Shield className="w-5 h-5 text-red-400" />
                <span className="text-red-400 font-medium">Advanced Cybersecurity</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text-enhanced">
                Advanced Cybersecurity Services
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your business with comprehensive cybersecurity services. We provide 24/7 monitoring, 
                threat detection, and compliance management to reduce security incidents by 90%.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25"
                >
                  Get Security Assessment
                </a>
                <a
                  href="#services"
                  className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  View Services
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>90% reduction in security incidents</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24/7 monitoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Compliance ready</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Frameworks Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Compliance & Standards
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We help you meet all major compliance frameworks and security standards.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {complianceFrameworks.map((framework, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <framework.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{framework.name}</h3>
                    <p className="text-gray-300 text-sm">{framework.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our Security Services
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive cybersecurity services to protect your business from all threats.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {securityServices.map((service, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                        <p className="text-red-400 font-semibold">{service.price}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <a
                      href="/contact"
                      className="text-red-400 hover:text-red-300 font-medium flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Why Choose Our Security Services
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We provide comprehensive security solutions with proven results and expert support.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{feature}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Measurable Results
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See dramatic improvements in your security posture with our comprehensive solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Transparent Pricing
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the security service that fits your needs. All services include expert consultation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <div key={index} className={`relative bg-slate-800/50 rounded-2xl p-8 ${
                    tier.popular ? 'ring-2 ring-red-500 shadow-lg shadow-red-500/25' : ''
                  }`}>
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-gray-400 mb-4">{tier.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-white">{tier.price}</span>
                        <span className="text-gray-400 ml-2">{tier.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href="/contact"
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        tier.popular
                          ? 'bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white'
                          : 'border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-12 border border-red-500/20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Secure Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Get a free security assessment and discover how our cybersecurity services can 
                  protect your business. Contact us today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Get Free Assessment
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
                <div className="mt-6 text-gray-400">
                  <p>Questions? Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-red-400 hover:text-red-300">kleber@ziontechgroup.com</a></p>
                  <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CybersecurityAdvanced;