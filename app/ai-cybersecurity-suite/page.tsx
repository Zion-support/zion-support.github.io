'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, Lock, AlertTriangle, Eye, FileText, Globe, Smartphone, Database, Sparkles, Target, Award, Cpu, HardDrive } from 'lucide-react';

const AICybersecuritySuitePage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms that detect and prevent cyber threats in real-time'
    },
    {
      icon: <Eye className="w-6 h-6 text-blue-400" />,
      title: '24/7 Security Monitoring',
      description: 'Continuous monitoring of your network, systems, and applications with AI-powered analysis'
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-green-400" />,
      title: 'Incident Response',
      description: 'Automated incident response and recovery with AI-guided remediation steps'
    },
    {
      icon: <Lock className="w-6 h-6 text-purple-400" />,
      title: 'Vulnerability Management',
      description: 'AI-powered vulnerability scanning and prioritization with automated patching'
    },
    {
      icon: <FileText className="w-6 h-6 text-orange-400" />,
      title: 'Compliance Management',
      description: 'Automated compliance monitoring and reporting for GDPR, HIPAA, SOC 2, and more'
    },
    {
      icon: <Globe className="w-6 h-6 text-pink-400" />,
      title: 'Global Threat Intelligence',
      description: 'Real-time threat intelligence feeds and AI-powered threat hunting capabilities'
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic threat detection',
        'Email security',
        'Firewall management',
        'Vulnerability scanning',
        '24/7 monitoring',
        'Email support',
        'Up to 50 users'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Everything in Essential',
        'Advanced AI threat detection',
        'Endpoint protection',
        'Network security',
        'Compliance reporting',
        'Priority support',
        'Up to 200 users',
        'Custom security policies'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Custom AI models',
        'Dedicated security team',
        'Advanced threat hunting',
        'Penetration testing',
        'Security training',
        'Unlimited users',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '1,000+', label: 'Protected Organizations' },
    { icon: <Shield className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Threat Detection Rate' },
    { icon: <TrendingUp className="w-8 h-8 text-purple-500" />, value: '85%', label: 'Faster Response Time' },
    { icon: <Award className="w-8 h-8 text-orange-500" />, value: 'Zero', label: 'Successful Breaches' }
  ];

  const securityServices = [
    'Threat Detection & Prevention',
    'Vulnerability Assessment',
    'Penetration Testing',
    'Security Auditing',
    'Incident Response',
    'Compliance Management',
    'Security Training',
    'Risk Assessment',
    'Network Security',
    'Endpoint Protection',
    'Email Security',
    'Cloud Security'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Cybersecurity Suite - Zion Tech Group | Advanced Security Solutions</title>
        <meta name="description" content="Comprehensive AI-powered cybersecurity suite with threat detection, incident response, and compliance management. Starting at $499/month." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, incident response, compliance management, vulnerability assessment" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Advanced AI-Powered Security
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Cybersecurity
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Suite
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Protect your organization with our comprehensive AI-powered cybersecurity suite. 
            Advanced threat detection, automated incident response, and compliance management 
            that keeps your business secure 24/7 with 99.9% threat detection accuracy.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Security Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="border border-cyan-500 text-cyan-400 font-semibold py-4 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
              <span>View Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Security Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete cybersecurity protection powered by AI intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {securityServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-center">
                <span className="text-gray-300 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Powerful Security Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to protect your organization from cyber threats.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Choose Your Security Plan</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with a free security assessment and customized protection plan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular ? 'border-cyan-500 scale-105' : 'border-cyan-500/20 hover:border-cyan-500/40'
              }`}>
                {plan.popular && (
                  <div className="flex justify-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose AI Cybersecurity Suite?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of organizations that trust us with their security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Protection</h3>
              <p className="text-gray-300">Advanced AI algorithms detect and prevent threats before they can cause damage.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Proactive Security</h3>
              <p className="text-gray-300">Stay ahead of threats with predictive security and automated response.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Compliance Ready</h3>
              <p className="text-gray-300">Meet regulatory requirements with automated compliance monitoring and reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free security assessment and discover how AI can protect your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Security Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-500 text-cyan-400 font-semibold py-4 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View All Plans</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecuritySuitePage;