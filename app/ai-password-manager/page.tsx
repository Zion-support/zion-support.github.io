'use client';
import React from 'react';
<<<<<<< HEAD
import { Shield, Lock, Eye, Key, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
=======
import { Shield, Lock, Key, Eye, CheckCircle, Star, Users, TrendingUp, Clock, Phone, Mail, MapPin } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIPasswordManagerPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
<<<<<<< HEAD
      title: 'AI-Powered Security',
      description: 'Advanced AI algorithms detect and prevent security threats in real-time',
      benefits: ['Threat detection', 'Real-time monitoring', 'Automated responses']
    },
    {
      icon: Lock,
      title: 'Zero-Knowledge Architecture',
      description: 'Your passwords are encrypted and only you can access them',
      benefits: ['End-to-end encryption', 'Zero-knowledge design', 'Privacy protection']
    },
    {
      icon: Eye,
      title: 'Password Health Monitoring',
      description: 'Continuous monitoring and analysis of your password security',
      benefits: ['Weak password detection', 'Breach monitoring', 'Security scoring']
    },
    {
      icon: Key,
      title: 'Auto-Generate & Fill',
      description: 'Intelligent password generation and automatic form filling',
      benefits: ['Smart generation', 'Auto-fill forms', 'Cross-platform sync']
=======
      title: 'Advanced Encryption',
      description: 'Military-grade AES-256 encryption for maximum security',
      benefits: ['End-to-end encryption', 'Zero-knowledge architecture', 'Secure key management']
    },
    {
      icon: Lock,
      title: 'AI-Powered Security',
      description: 'Intelligent threat detection and password analysis',
      benefits: ['Breach monitoring', 'Weak password detection', 'Security recommendations']
    },
    {
      icon: Key,
      title: 'Smart Password Generation',
      description: 'AI-generated strong passwords with customizable criteria',
      benefits: ['Complex password creation', 'Custom length & complexity', 'Pattern-based generation']
    },
    {
      icon: Eye,
      title: 'Secure Sharing',
      description: 'Safe password sharing with granular access controls',
      benefits: ['Time-limited access', 'Permission-based sharing', 'Audit trails']
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
    }
  ];

  const benefits = [
<<<<<<< HEAD
    {
      title: 'Enhanced Security',
      description: 'Protect your accounts with military-grade encryption and AI-powered threat detection',
      percentage: '99.9%'
    },
    {
      title: 'Time Savings',
      description: 'Save hours every week with automatic password generation and form filling',
      percentage: '80%'
    },
    {
      title: 'Peace of Mind',
      description: 'Never worry about password breaches or weak credentials again',
      percentage: '100%'
    }
=======
    'Eliminate password reuse across accounts',
    'Automatically detect compromised passwords',
    'Generate unique, strong passwords instantly',
    'Secure sharing with team members',
    'Cross-platform synchronization',
    'Advanced threat protection',
    'Compliance with security standards',
    '24/7 security monitoring'
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$4.99',
      period: '/month',
<<<<<<< HEAD
      description: 'Perfect for individuals and families',
      features: [
        'Unlimited passwords',
        'Cross-device sync',
        'Password health monitoring',
        'Secure sharing',
=======
      description: 'Perfect for individuals',
      features: [
        'Unlimited passwords',
        'Cross-device sync',
        'Secure sharing (5 people)',
        'Basic security monitoring',
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
        '24/7 support'
      ],
      popular: false
    },
    {
<<<<<<< HEAD
      name: 'Business',
      price: '$9.99',
      period: '/month',
      description: 'Ideal for small to medium businesses',
      features: [
        'Everything in Personal',
        'Team management',
        'Admin dashboard',
        'SSO integration',
        'Priority support',
        'Custom policies'
=======
      name: 'Family',
      price: '$7.99',
      period: '/month',
      description: 'Ideal for families',
      features: [
        'Everything in Personal',
        'Up to 6 family members',
        'Advanced sharing controls',
        'Family security dashboard',
        'Priority support'
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
      ],
      popular: true
    },
    {
<<<<<<< HEAD
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations',
      features: [
        'Everything in Business',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated support',
        'Compliance tools',
        'White-label options'
=======
      name: 'Business',
      price: '$12.99',
      period: '/user/month',
      description: 'For teams and businesses',
      features: [
        'Everything in Family',
        'Unlimited team members',
        'Admin controls',
        'SSO integration',
        'Advanced analytics',
        'Dedicated support'
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
        <title>AI Password Manager - Secure Password Management | Zion Tech Group</title>
        <meta name="description" content="Secure your digital life with our AI-powered password manager. Military-grade encryption, automatic generation, and intelligent security monitoring." />
        <meta name="keywords" content="password manager, AI security, password protection, digital security, encryption" />
=======
        <title>AI Password Manager - Zion Tech Group</title>
        <meta name="description" content="Secure AI-powered password management with advanced encryption and intelligent security features." />
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
      </Helmet>
      
      <Navigation />
      
<<<<<<< HEAD
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">
                AI Password Manager
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Secure your digital life with our AI-powered password manager. Military-grade encryption, 
              intelligent threat detection, and seamless user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
=======
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Password Manager
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Secure your digital life with our advanced AI-powered password manager featuring military-grade encryption and intelligent security features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Watch Demo
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
            </div>
          </section>

<<<<<<< HEAD
          {/* Features Section */}
          <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Advanced Security Features</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI-powered password manager provides enterprise-grade security with an intuitive user experience.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
=======
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered password manager provides enterprise-grade security with intelligent features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Password Manager?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the next generation of password security with AI-powered features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-medium">{benefit}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
              </div>
            </div>
          </section>

<<<<<<< HEAD
          {/* Benefits Section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Password Manager?</h2>
                <p className="text-xl text-gray-300">Proven benefits that protect your digital identity</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 mb-4">{benefit.description}</p>
                    <div className="text-3xl font-bold text-green-400">{benefit.percentage}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 px-4 bg-slate-800/50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
                <p className="text-xl text-gray-300">Choose the plan that fits your security needs</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-green-400 mb-2">
                        {plan.price}
                        <span className="text-lg text-gray-400"> {plan.period}</span>
                      </div>
                      <p className="text-gray-300">{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700' 
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}>
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
=======
      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options for individuals, families, and businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 relative ${plan.popular ? 'ring-2 ring-purple-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Digital Life?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of users who trust our AI-powered password manager for their security needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Secure Your Digital Life Today</h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't wait for a security breach. Protect your accounts with our AI-powered password manager.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center"
                >
                  Start Free Trial
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button-outline px-8 py-4 text-lg font-semibold inline-flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIPasswordManagerPage;