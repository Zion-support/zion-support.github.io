'use client';

import React from 'react';
import { Shield, Eye, AlertTriangle, Lock, Activity, BarChart, Users, Clock, CheckCircle, ArrowRight, Brain, Zap, Target, Globe, Database, Settings, Monitor, AlertCircle, TrendingUp, Award } from 'lucide-react';
import SEOHead from '../../src/components/SEOHead';

const AISecurityOperationsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms that continuously monitor and detect sophisticated cyber threats in real-time.',
      benefits: ['99.9% threat detection accuracy', 'Sub-second response times', 'Zero false positives']
    },
    {
      icon: Eye,
      title: '24/7 Security Monitoring',
      description: 'Round-the-clock surveillance of your entire digital infrastructure with AI-enhanced security analysts.',
      benefits: ['Continuous monitoring', 'Instant threat response', 'Expert security team']
    },
    {
      icon: Shield,
      title: 'Automated Incident Response',
      description: 'Intelligent automation that responds to security incidents faster than humanly possible.',
      benefits: ['Automated containment', 'Instant remediation', 'Reduced response time by 95%']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics & Reporting',
      description: 'Comprehensive security analytics with predictive insights and detailed compliance reporting.',
      benefits: ['Predictive threat analysis', 'Compliance reporting', 'Executive dashboards']
    },
    {
      icon: Lock,
      title: 'Zero Trust Architecture',
      description: 'Implement zero trust security model with AI-driven access controls and continuous verification.',
      benefits: ['Identity verification', 'Least privilege access', 'Continuous monitoring']
    },
    {
      icon: Activity,
      title: 'Behavioral Analysis',
      description: 'AI-powered user and entity behavior analytics to detect anomalous activities and insider threats.',
      benefits: ['User behavior profiling', 'Anomaly detection', 'Insider threat prevention']
    }
  ];

  const services = [
    {
      title: 'Security Operations Center (SOC)',
      description: 'Fully managed 24/7 security operations center with AI-enhanced monitoring and response.',
      price: '$15,000/mo',
      features: ['24/7 monitoring', 'AI threat detection', 'Incident response', 'Compliance reporting']
    },
    {
      title: 'AI Security Analytics',
      description: 'Advanced security analytics platform with machine learning-powered threat intelligence.',
      price: '$8,500/mo',
      features: ['Threat intelligence', 'Behavioral analysis', 'Predictive analytics', 'Custom dashboards']
    },
    {
      title: 'Automated Response Platform',
      description: 'AI-driven automated incident response and threat containment system.',
      price: '$12,000/mo',
      features: ['Automated containment', 'Instant remediation', 'Custom playbooks', 'Integration APIs']
    },
    {
      title: 'Compliance & Audit',
      description: 'Comprehensive compliance monitoring and audit support for various security frameworks.',
      price: '$6,500/mo',
      features: ['SOC 2 compliance', 'ISO 27001', 'GDPR compliance', 'Audit support']
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Threat Detection Accuracy', icon: Target },
    { number: '< 1s', label: 'Response Time', icon: Zap },
    { number: '24/7', label: 'Monitoring Coverage', icon: Clock },
    { number: '500+', label: 'Threats Blocked Daily', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="AI Security Operations Center | Zion Tech Group"
        description="Advanced AI-powered security operations center with 24/7 monitoring, threat detection, and automated incident response. Protect your business with cutting-edge cybersecurity."
        keywords="AI security operations, cybersecurity, threat detection, incident response, SOC, security monitoring, AI security analytics"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              AI Security Operations Center
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Advanced AI-powered security operations center with 24/7 monitoring, 
            intelligent threat detection, and automated incident response. 
            Protect your business with cutting-edge cybersecurity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Get Security Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-red-400 text-red-400 font-semibold py-4 px-8 rounded-xl hover:bg-red-400 hover:text-slate-900 transition-all duration-300">
              View Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-red-400 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Security Features</h2>
            <p className="text-xl text-gray-300">Comprehensive AI-powered security solutions for modern enterprises</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-red-400/20 rounded-xl p-8 hover:border-red-400/40 hover:shadow-lg hover:shadow-red-400/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Security Services</h2>
            <p className="text-xl text-gray-300">Choose the right security solution for your organization</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-red-400/20 rounded-xl p-8 hover:border-red-400/40 hover:shadow-lg hover:shadow-red-400/10 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <div className="text-3xl font-bold text-red-400 mb-6">{service.price}</div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our security experts for a comprehensive security assessment 
            and discover how our AI-powered security operations can protect your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
              Get Security Assessment
            </button>
            <button className="border-2 border-red-400 text-red-400 font-semibold py-4 px-8 rounded-xl hover:bg-red-400 hover:text-slate-900 transition-all duration-300">
              Contact Security Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISecurityOperationsPage;