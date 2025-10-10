'use client';
import React from 'react';
import { CheckCircle, Shield, Lock, Key, Eye, EyeOff, Smartphone, Laptop, Globe, Phone, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIPasswordManagerPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'AI-Powered Security',
      description: 'Advanced AI algorithms detect and prevent security threats in real-time',
      benefits: ['Threat detection', 'Anomaly monitoring', 'Risk assessment']
    },
    {
      icon: Lock,
      title: 'Zero-Knowledge Architecture',
      description: 'Your passwords are encrypted locally and never stored on our servers',
      benefits: ['End-to-end encryption', 'Local storage', 'Privacy protection']
    },
    {
      icon: Key,
      title: 'Smart Password Generation',
      description: 'AI creates strong, unique passwords based on your security requirements',
      benefits: ['Custom complexity', 'Pattern recognition', 'Auto-updates']
    },
    {
      icon: Eye,
      title: 'Biometric Authentication',
      description: 'Secure access with fingerprint, face ID, and other biometric methods',
      benefits: ['Multi-factor auth', 'Device integration', 'Seamless login']
    }
  ];

  const benefits = [
    'Eliminate password reuse across accounts',
    'Automatically generate strong, unique passwords',
    'Secure password sharing with team members',
    'Monitor for data breaches and compromised accounts',
    'Cross-platform synchronization',
    'Advanced threat protection',
    'Compliance with security standards',
    '24/7 security monitoring'
  ];

  const pricing = [
    {
      plan: 'Personal',
      price: '$4.99',
      period: '/month',
      description: 'Perfect for individuals and families',
      features: [
        'Unlimited passwords',
        '5 devices',
        'Biometric authentication',
        'Password sharing (up to 5 people)',
        'Dark web monitoring',
        '24/7 support'
      ],
      popular: false
    },
    {
      plan: 'Business',
      price: '$7.99',
      period: '/user/month',
      description: 'Ideal for small to medium businesses',
      features: [
        'Everything in Personal',
        'Unlimited devices',
        'Team password sharing',
        'Admin dashboard',
        'SSO integration',
        'Advanced reporting',
        'Priority support'
      ],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Everything in Business',
        'Custom integrations',
        'Dedicated support',
        'Compliance tools',
        'API access',
        'White-label options',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Password Manager - Secure Password Management | Zion Tech Group</title>
        <meta name="description" content="Protect your digital life with our AI-powered password manager. Generate strong passwords, monitor breaches, and secure your accounts with advanced AI security." />
        <meta name="keywords" content="password manager, AI security, password generator, biometric authentication, cybersecurity, password protection" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-password-manager" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Password Manager
              </h1>
              <p className="text-xl text-cyan-400 mb-8">
                Secure your digital life with AI-powered password management
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Protect your accounts with our advanced AI password manager. Generate strong passwords, 
                monitor for breaches, and secure your digital identity with cutting-edge security technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Advanced Security Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-gray-300 mb-4">{feature.description}</p>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Why Choose Our AI Password Manager?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Choose Your Security Plan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricing.map((plan, index) => (
                  <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-300 ml-1">{plan.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href="/contact"
                      className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'cyber-button'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12 text-center cyber-card">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                  Secure Your Digital Life Today
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Don't wait for a security breach. Protect your accounts with our AI-powered password manager.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    Call (302) 464-0950
                  </a>
                </div>
                <div className="mt-8 text-sm opacity-90">
                  <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AIPasswordManagerPage;