'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Star, Users, Zap, Globe, Settings, BarChart3 } from 'lucide-react';

const CybersecuritySuitePage: React.FC = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Advanced Threat Detection',
      description: 'AI-powered threat detection and response system',
      features: [
        'Real-time monitoring',
        'Behavioral analysis',
        'Automated response',
        '24/7 surveillance'
      ],
      price: '$299/month'
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Data Encryption & Protection',
      description: 'End-to-end encryption for all your sensitive data',
      features: [
        'AES-256 encryption',
        'Key management',
        'Data loss prevention',
        'Compliance reporting'
      ],
      price: '$199/month'
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: 'Security Monitoring',
      description: 'Comprehensive security monitoring and alerting',
      features: [
        'Network monitoring',
        'Log analysis',
        'Incident response',
        'Security dashboards'
      ],
      price: '$249/month'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: 'Vulnerability Assessment',
      description: 'Regular security assessments and penetration testing',
      features: [
        'Automated scanning',
        'Manual testing',
        'Risk assessment',
        'Remediation guidance'
      ],
      price: '$399/month'
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential Security',
      price: '$499/month',
      description: 'Basic cybersecurity for small businesses',
      features: [
        'Basic threat detection',
        'Email security',
        'Firewall management',
        'Monthly security reports',
        'Email support',
        'Up to 25 users'
      ],
      popular: false
    },
    {
      name: 'Professional Security',
      price: '$999/month',
      description: 'Comprehensive security for growing businesses',
      features: [
        'Advanced threat detection',
        'Data encryption',
        'Security monitoring',
        'Vulnerability assessments',
        'Priority support',
        'Up to 100 users',
        'Compliance tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise Security',
      price: '$2,499/month',
      description: 'Complete security suite for large organizations',
      features: [
        'Full security suite',
        'Custom security policies',
        '24/7 dedicated support',
        'Advanced compliance',
        'White-label options',
        'Unlimited users',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: 'Comprehensive Protection',
      description: 'Multi-layered security approach covering all attack vectors'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Real-time Response',
      description: 'Instant threat detection and automated response capabilities'
    },
    {
      icon: <Globe className="w-6 h-6 text-green-400" />,
      title: 'Global Coverage',
      description: 'Protect your assets worldwide with our global security network'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: 'Advanced Analytics',
      description: 'Detailed security insights and threat intelligence'
    }
  ];

  const stats = [
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      value: '99.9%',
      label: 'Threat Detection Rate',
      description: 'Industry-leading accuracy'
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      value: '< 1min',
      label: 'Response Time',
      description: 'Average threat response'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      value: '1000+',
      label: 'Protected Organizations',
      description: 'Trust our security'
    },
    {
      icon: <Globe className="w-6 h-6 text-yellow-400" />,
      value: '24/7',
      label: 'Monitoring',
      description: 'Continuous protection'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Suite - Zion Tech Group | Enterprise Security Solutions</title>
        <meta name="description" content="Comprehensive cybersecurity suite with advanced threat detection, data protection, and security monitoring for enterprise organizations." />
        <meta name="keywords" content="cybersecurity, threat detection, data protection, security monitoring, enterprise security, compliance" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Enterprise Security
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Suite</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Comprehensive cybersecurity solutions designed to protect your organization from evolving threats. Advanced threat detection, data protection, and security monitoring in one integrated suite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Get Security Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Security Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cybersecurity suite provides complete protection across all aspects of your digital infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-red-400 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 text-center">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                    <button className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Cybersecurity Suite?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide enterprise-grade security solutions with unmatched expertise and support.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-300 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Flexible Security Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security level that matches your organization's needs and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    plan.popular
                      ? 'border-red-400 shadow-2xl shadow-red-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-red-400 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-purple-500 text-white hover:from-red-600 hover:to-purple-600 transform hover:scale-105'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Secure Your Organization Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for a security breach. Protect your organization with our comprehensive cybersecurity suite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Get Security Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Contact Security Expert
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CybersecuritySuitePage;
