'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  EyeIcon,
  LockClosedIcon,
  PhoneIcon,
  EnvelopeIcon,
  CpuChipIcon,
  GlobeAltIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline';

const CybersecurityMonitorPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '$29',
      period: '/month',
      description: 'Essential security monitoring for small businesses',
      features: [
        '24/7 threat monitoring',
        'Basic vulnerability scanning',
        'Email alerts',
        'Security dashboard',
        '5 devices monitored',
        'Standard support',
        'Monthly reports',
        'Basic compliance checks'
      ],
      limitations: [
        'Limited integrations',
        'Basic analytics',
        'No mobile monitoring'
      ]
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Comprehensive security suite for growing businesses',
      features: [
        '24/7 threat monitoring',
        'Advanced vulnerability scanning',
        'Automated incident response',
        'Real-time alerts',
        'Compliance reporting',
        'Security training modules',
        'Mobile app monitoring',
        'Custom alerts',
        'Expert support',
        'Unlimited devices',
        'API integrations',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'Enterprise-grade security for large organizations',
      features: [
        'Everything in Professional',
        'Custom security policies',
        'White-label solution',
        'Dedicated security team',
        'Custom integrations',
        'Advanced threat intelligence',
        '24/7 phone support',
        'SLA guarantee',
        'Custom training programs',
        'On-premise deployment',
        'Advanced compliance',
        'Penetration testing'
      ]
    }
  ];

  const features = [
    {
      icon: ShieldCheckIcon,
      title: '24/7 Threat Monitoring',
      description: 'Continuous monitoring of your network, applications, and data for potential security threats.'
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Automated Incident Response',
      description: 'Instant response to security incidents with automated containment and remediation actions.'
    },
    {
      icon: EyeIcon,
      title: 'Vulnerability Scanning',
      description: 'Regular scans to identify and prioritize security vulnerabilities in your infrastructure.'
    },
    {
      icon: DocumentCheckIcon,
      title: 'Compliance Reporting',
      description: 'Automated compliance reports for GDPR, HIPAA, SOX, and other regulatory requirements.'
    },
    {
      icon: LockClosedIcon,
      title: 'Security Training',
      description: 'Interactive security awareness training modules for your team to prevent human errors.'
    },
    {
      icon: ChartBarIcon,
      title: 'Advanced Analytics',
      description: 'Comprehensive security analytics and reporting to track your security posture over time.'
    }
  ];

  const securityThreats = [
    {
      type: 'Malware Detection',
      description: 'Real-time detection and blocking of malware, ransomware, and other malicious software.',
      icon: CpuChipIcon,
      severity: 'High'
    },
    {
      type: 'Phishing Protection',
      description: 'Advanced email security to detect and prevent phishing attacks and social engineering.',
      icon: GlobeAltIcon,
      severity: 'High'
    },
    {
      type: 'Network Intrusion',
      description: 'Monitor network traffic for suspicious activities and unauthorized access attempts.',
      icon: ShieldCheckIcon,
      severity: 'Critical'
    },
    {
      type: 'Data Breach Prevention',
      description: 'Protect sensitive data with encryption, access controls, and data loss prevention.',
      icon: LockClosedIcon,
      severity: 'Critical'
    }
  ];

  const complianceStandards = [
    { name: 'GDPR', description: 'General Data Protection Regulation compliance' },
    { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
    { name: 'SOX', description: 'Sarbanes-Oxley Act compliance' },
    { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' },
    { name: 'ISO 27001', description: 'Information Security Management System' },
    { name: 'NIST', description: 'National Institute of Standards and Technology' }
  ];

  const testimonials = [
    {
      name: 'David Martinez',
      role: 'IT Director',
      company: 'FinanceCorp',
      content: 'Cybersecurity Monitor Suite has significantly improved our security posture. The automated incident response saved us from a major breach.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Security Manager',
      company: 'HealthTech Solutions',
      content: 'The compliance reporting features are excellent. We easily passed our HIPAA audit with the automated reports.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'The 24/7 monitoring gives us peace of mind. We can focus on growing our business knowing our security is protected.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Monitor Suite - Zion Tech Group</title>
        <meta name="description" content="Advanced cybersecurity monitoring and threat detection platform. 24/7 protection, automated incident response, and compliance reporting." />
        <meta name="keywords" content="cybersecurity, threat detection, security monitoring, compliance, incident response, vulnerability scanning" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-slate-900 to-orange-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,146,60,0.1)_0%,transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Cybersecurity Monitor Suite
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Protect your business with advanced cybersecurity monitoring and threat detection. 
                  Get 24/7 protection, automated incident response, and comprehensive compliance reporting.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 font-semibold text-lg group"
                  >
                    Start Free Trial
                    <ArrowRightIcon className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="#demo" 
                    className="border border-red-400 text-red-400 px-8 py-4 rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300 font-semibold text-lg"
                  >
                    Watch Demo
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <ShieldCheckIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Security Dashboard</h3>
                      <p className="text-gray-400">Real-time monitoring</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 text-center">
                        <p className="text-green-400 text-sm">Protected</p>
                        <p className="text-white text-2xl font-bold">24/7</p>
                      </div>
                      <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3 text-center">
                        <p className="text-blue-400 text-sm">Threats Blocked</p>
                        <p className="text-white text-2xl font-bold">1,247</p>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 text-sm">Security Score</span>
                        <span className="text-green-400 font-semibold">95%</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" style={{width: '95%'}}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">Vulnerability Scan</span>
                        <span className="text-green-400">✓ Complete</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">Firewall Status</span>
                        <span className="text-green-400">✓ Active</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">Backup Status</span>
                        <span className="text-green-400">✓ Up to date</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to protect your business from cyber threats
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-red-400 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Threats Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Protection Against All Threats
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our advanced AI-powered system detects and prevents a wide range of cyber threats
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {securityThreats.map((threat, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <threat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{threat.type}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          threat.severity === 'Critical' ? 'bg-red-500/20 text-red-400' :
                          threat.severity === 'High' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {threat.severity}
                        </span>
                      </div>
                      <p className="text-gray-300">{threat.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Compliance Made Easy
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet regulatory requirements with automated compliance reporting and monitoring
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-green-400 transition-all duration-300 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{standard.name}</h3>
                  <p className="text-gray-300 text-sm">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Choose Your Security Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to protect your business at any scale
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`relative bg-slate-800 rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-red-500 shadow-lg shadow-red-500/20' 
                      : 'border-slate-700 hover:border-red-400'
                  } ${selectedPlan === plan.id ? 'ring-2 ring-red-500' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {plan.limitations && plan.limitations.map((limitation, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-500">
                        <span className="w-4 h-4 mr-3 flex-shrink-0">✗</span>
                        {limitation}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700'
                        : 'border border-slate-600 text-gray-300 hover:border-red-400 hover:text-white'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Trusted by Security Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what security experts say about our platform
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for a breach. Start protecting your business with our advanced cybersecurity monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 font-semibold text-lg group"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Need Help with Security?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center space-x-4 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-red-400" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <a href="tel:+13024640950" className="hover:text-white transition-colors">
                    +1-302-464-0950
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-red-400" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CybersecurityMonitorPage;