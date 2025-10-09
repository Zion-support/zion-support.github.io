'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Shield, Eye, Lock, AlertTriangle, Zap, Brain, Target, Clock, Users, BarChart } from 'lucide-react';

const AICybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms that identify and respond to cyber threats in real-time'
    },
    {
      icon: Shield,
      title: 'Automated Security Response',
      description: 'Intelligent systems that automatically contain and mitigate security incidents without human intervention'
    },
    {
      icon: Eye,
      title: 'Behavioral Analytics',
      description: 'Monitor user and system behavior patterns to detect anomalies and potential security breaches'
    },
    {
      icon: Lock,
      title: 'Zero-Trust Architecture',
      description: 'Implement comprehensive zero-trust security models with AI-enhanced verification and access control'
    },
    {
      icon: AlertTriangle,
      title: 'Predictive Security',
      description: 'Predict and prevent security incidents before they occur using advanced threat intelligence'
    },
    {
      icon: BarChart,
      title: 'Security Analytics',
      description: 'Comprehensive security dashboards and reporting with actionable insights and recommendations'
    }
  ];

  const benefits = [
    'Reduce security incidents by up to 95%',
    'Decrease response time to threats by 90%',
    'Automate 80% of security operations',
    'Improve compliance monitoring by 100%',
    'Reduce false positives by 70%',
    'Enable 24/7 security monitoring'
  ];

  const services = [
    {
      title: 'Threat Intelligence & Analysis',
      description: 'AI-powered threat hunting and intelligence gathering to stay ahead of emerging cyber threats',
      icon: '🔍',
      features: ['Real-time threat monitoring', 'Malware analysis', 'Threat intelligence feeds', 'Attack pattern recognition']
    },
    {
      title: 'Automated Incident Response',
      description: 'Intelligent incident response systems that automatically detect, contain, and remediate security incidents',
      icon: '⚡',
      features: ['Automated containment', 'Forensic analysis', 'Evidence collection', 'Recovery procedures']
    },
    {
      title: 'Vulnerability Management',
      description: 'AI-driven vulnerability assessment and patch management to maintain optimal security posture',
      icon: '🛡️',
      features: ['Automated scanning', 'Risk prioritization', 'Patch management', 'Compliance tracking']
    },
    {
      title: 'Security Operations Center (SOC)',
      description: 'AI-enhanced SOC services with 24/7 monitoring, analysis, and response capabilities',
      icon: '🏢',
      features: ['24/7 monitoring', 'Expert analysts', 'Incident escalation', 'Custom dashboards']
    },
    {
      title: 'Compliance & Governance',
      description: 'Automated compliance monitoring and reporting for various regulatory frameworks',
      icon: '📋',
      features: ['GDPR compliance', 'HIPAA monitoring', 'SOX compliance', 'Custom frameworks']
    },
    {
      title: 'Security Training & Awareness',
      description: 'AI-powered security awareness training and phishing simulation programs',
      icon: '🎓',
      features: ['Phishing simulations', 'Security training', 'Risk assessment', 'Progress tracking']
    }
  ];

  const complianceFrameworks = [
    'GDPR', 'HIPAA', 'SOX', 'PCI DSS', 'ISO 27001', 'NIST', 'CIS Controls', 'SOC 2'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
            <div className="flex space-x-8">
              <Link href="/" className="text-white hover:text-red-400 transition-colors">Home</Link>
              <Link href="/services" className="text-white hover:text-red-400 transition-colors">Services</Link>
              <Link href="/contact" className="text-white hover:text-red-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Cybersecurity
          </h1>
          <p className="text-xl md:text-2xl text-red-400 mb-8">
            Advanced AI-Powered Security Solutions
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
            Protect your business with cutting-edge AI cybersecurity solutions. Our intelligent security systems 
            provide real-time threat detection, automated response, and comprehensive protection against 
            evolving cyber threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all"
            >
              📞 Call: (302) 464-0950
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all"
            >
              Get Security Assessment
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-red-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Security Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Security Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-red-900/50 to-orange-900/50 rounded-lg p-6 hover:from-red-800/50 hover:to-orange-800/50 transition-all">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Compliance & Standards
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <p className="text-lg text-gray-300 text-center mb-8">
              Our AI cybersecurity solutions help you maintain compliance with major regulatory frameworks and industry standards.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-center py-3 px-4 rounded-lg font-semibold">
                  {framework}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Security Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Essential</h3>
              <div className="text-4xl font-bold text-red-400 mb-6">$799<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic threat detection
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email security
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Vulnerability scanning
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic reporting
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full text-center bg-gradient-to-r from-red-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all"
              >
                Get Started
              </a>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-lg p-8 transform scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-white mb-6">$1,499<span className="text-lg text-gray-200">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Advanced AI threat detection
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Automated incident response
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  24/7 monitoring
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Compliance reporting
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Priority support
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full text-center bg-white text-red-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-red-400 mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom AI models
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated SOC team
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-premise deployment
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom compliance
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-glove service
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full text-center bg-gradient-to-r from-red-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-lg p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't wait for a security breach. Protect your business with our advanced AI cybersecurity solutions. 
            Get a comprehensive security assessment and see how we can strengthen your defenses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all"
            >
              📞 Call: (302) 464-0950
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all"
            >
              Get Security Assessment
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AICybersecurityPage;