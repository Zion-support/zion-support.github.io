'use client';
import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Lock, Shield, Eye, CheckCircle, Zap, ArrowRight, Phone, MessageSquare, Star, TrendingUp, Settings, Database, Globe, Key, Fingerprint, AlertTriangle } from 'lucide-react';

const AIPasswordManagerPage: React.FC = memo(() => {
  const features = [
    {
      icon: Lock,
      title: 'AI-Generated Passwords',
      description: 'Create ultra-secure passwords using AI that analyzes patterns and generates unique combinations',
      color: 'text-blue-400'
    },
    {
      icon: Shield,
      title: 'Advanced Encryption',
      description: 'Military-grade encryption with zero-knowledge architecture ensures your passwords are never accessible to anyone',
      color: 'text-green-400'
    },
    {
      icon: Eye,
      title: 'Smart Monitoring',
      description: 'AI continuously monitors for data breaches and automatically alerts you when passwords need to be changed',
      color: 'text-purple-400'
    },
    {
      icon: Fingerprint,
      title: 'Biometric Access',
      description: 'Secure access with fingerprint, face recognition, and other biometric authentication methods',
      color: 'text-orange-400'
    },
    {
      icon: Zap,
      title: 'Auto-Fill & Sync',
      description: 'Intelligent auto-fill across all devices with real-time synchronization and cross-platform compatibility',
      color: 'text-cyan-400'
    },
    {
      icon: AlertTriangle,
      title: 'Security Alerts',
      description: 'Proactive security notifications and recommendations to keep your accounts safe from threats',
      color: 'text-red-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals and families',
      features: [
        'Unlimited passwords',
        '5 devices',
        'Basic AI features',
        'Email support',
        '2FA support'
      ],
      popular: false
    },
    {
      name: 'Family',
      price: '$19',
      period: '/month',
      description: 'Ideal for families and small teams',
      features: [
        'Everything in Personal',
        '10 devices',
        'Advanced AI features',
        'Priority support',
        'Family sharing',
        'Dark web monitoring'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: '$49',
      period: '/month',
      description: 'For businesses and organizations',
      features: [
        'Everything in Family',
        'Unlimited devices',
        'Admin dashboard',
        'Team management',
        'API access',
        'Custom policies'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: '99.9%',
      label: 'Security Rate',
      description: 'Military-grade encryption protects your data'
    },
    {
      metric: '50%',
      label: 'Time Savings',
      description: 'Auto-fill saves time on login processes'
    },
    {
      metric: '95%',
      label: 'Breach Prevention',
      description: 'AI monitoring prevents security breaches'
    },
    {
      metric: '24/7',
      label: 'Protection',
      description: 'Continuous monitoring and threat detection'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Helmet>
        <title>AI Password Manager - Secure Password Management | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered password manager with military-grade encryption, biometric access, and intelligent monitoring. Protect your digital identity with 99.9% security." />
        <meta name="keywords" content="AI password manager, secure passwords, password security, biometric authentication, password encryption" />
        <meta property="og:title" content="AI Password Manager - Secure Password Management" />
        <meta property="og:description" content="Advanced AI-powered password manager with military-grade encryption and biometric access." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-password-manager" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Lock className="w-4 h-4" />
            <span>AI Password Security</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Password Manager
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your digital identity with AI-powered password management. Military-grade encryption, 
            biometric access, and intelligent monitoring keep your accounts 99.9% secure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Free Trial
            </a>
          </div>
        </section>

        {/* Benefits Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-red-500/20 text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">{benefit.metric}</div>
                <div className="text-white font-semibold mb-2">{benefit.label}</div>
                <div className="text-sm text-gray-400">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Advanced Security Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI password manager provides enterprise-level security with intelligent automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-slate-700/50 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Secure Your Digital Life</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that fits your needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/30 p-8 rounded-lg border transition-all duration-300 ${
                plan.popular 
                  ? 'border-red-500/50 scale-105' 
                  : 'border-gray-700 hover:border-red-500/30'
              }`}>
                {plan.popular && (
                  <div className="bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white hover:from-red-700 hover:to-blue-700'
                      : 'border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-red-600/20 to-blue-600/20 p-12 rounded-lg border border-red-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Protect Your Digital Identity Today</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait for a security breach. Secure your passwords with AI-powered protection now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
});

AIPasswordManagerPage.displayName = 'AIPasswordManagerPage';

export default AIPasswordManagerPage;