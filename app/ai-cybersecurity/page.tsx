'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Brain, BarChart, Target, TrendingUp, CheckCircle, ArrowRight, Zap, Eye, Lock, AlertTriangle, Users, Clock, Star } from 'lucide-react';

const AiCybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms that detect and prevent sophisticated cyber attacks in real-time.',
      benefits: ['Real-time threat detection', 'Behavioral analysis', 'Predictive security', 'Automated response']
    },
    {
      icon: Shield,
      title: 'Comprehensive Protection',
      description: 'Multi-layered security approach that protects all aspects of your digital infrastructure.',
      benefits: ['Network security', 'Endpoint protection', 'Cloud security', 'Data encryption']
    },
    {
      icon: BarChart,
      title: 'Security Analytics',
      description: 'Advanced analytics and reporting to understand your security posture and identify vulnerabilities.',
      benefits: ['Risk assessment', 'Vulnerability scanning', 'Compliance reporting', 'Security metrics']
    },
    {
      icon: Target,
      title: 'Incident Response',
      description: 'Rapid response and recovery services to minimize damage from security incidents.',
      benefits: ['24/7 monitoring', 'Incident response', 'Forensic analysis', 'Recovery planning']
    }
  ];

  const securityServices = [
    {
      icon: Eye,
      title: 'Threat Monitoring',
      description: 'Continuous monitoring of your systems for potential security threats.',
      features: ['24/7 monitoring', 'Real-time alerts', 'Threat intelligence', 'Automated response']
    },
    {
      icon: Lock,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive assessment of your systems to identify security vulnerabilities.',
      features: ['Penetration testing', 'Vulnerability scanning', 'Risk assessment', 'Remediation guidance']
    },
    {
      icon: AlertTriangle,
      title: 'Security Audits',
      description: 'Regular security audits to ensure compliance and identify security gaps.',
      features: ['Compliance audits', 'Security reviews', 'Policy assessment', 'Recommendations']
    },
    {
      icon: Users,
      title: 'Security Training',
      description: 'Educate your team on cybersecurity best practices and threat awareness.',
      features: ['Security awareness', 'Phishing simulation', 'Incident response training', 'Compliance training']
    }
  ];

  const benefits = [
    'Protect against 99.9% of known threats',
    'Reduce security incidents by 80%',
    'Ensure compliance with industry standards',
    '24/7 monitoring and support',
    'Rapid incident response',
    'Cost-effective security solutions',
    'Advanced threat intelligence',
    'Automated security updates'
  ];

  const compliance = [
    'SOC 2 Type II',
    'ISO 27001',
    'PCI DSS',
    'HIPAA',
    'GDPR',
    'NIST Framework'
  ];

  const pricing = [
    {
      name: 'Basic Security',
      price: '$199',
      period: '/month',
      description: 'Essential security for small businesses',
      features: [
        'Basic threat monitoring',
        'Vulnerability scanning',
        'Email support',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional Security',
      price: '$499',
      period: '/month',
      description: 'Comprehensive security for growing businesses',
      features: [
        'Advanced threat detection',
        '24/7 monitoring',
        'Priority support',
        'Compliance assistance',
        'Security training'
      ],
      popular: true
    },
    {
      name: 'Enterprise Security',
      price: '$1,299',
      period: '/month',
      description: 'Full-scale security for large organizations',
      features: [
        'Custom security solutions',
        'Dedicated security team',
        'Advanced threat intelligence',
        'Custom compliance',
        'On-site support'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions to protect your business from cyber threats. Real-time threat detection, automated response, and compliance." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security automation, cyber protection, security compliance" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Cybersecurity Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your business from cyber threats with our advanced AI-powered cybersecurity solutions. Real-time threat detection, automated response, and comprehensive protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300">
                  Get Security Assessment
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Cybersecurity?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Leverage cutting-edge AI technology to protect your business from sophisticated cyber threats.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-400">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Services Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Security Services
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Comprehensive security services to protect your business and ensure compliance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center">
                  <service.icon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits of AI Cybersecurity
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the power of AI-driven cybersecurity for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compliance & Standards
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                We help you meet and maintain compliance with industry standards and regulations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {compliance.map((standard, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center">
                  <div className="text-sm font-semibold text-gray-900">{standard}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the security plan that fits your needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    plan.popular
                      ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Get a free security assessment and discover how we can protect your business from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get Free Assessment
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Contact Security Team
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AiCybersecurityPage;