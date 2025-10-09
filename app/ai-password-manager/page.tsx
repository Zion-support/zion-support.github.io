'use client';
import React from 'react';
import { CheckCircle, Shield, Lock, Key, Eye, EyeOff, Smartphone, Laptop, Globe, Zap, Phone, Mail, MapPin, Star, Award, Users, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIPasswordManagerPage: React.FC = () => {
  const features = [
    'AI-powered password generation with 256-bit encryption',
    'Smart password strength analysis and recommendations',
    'Automatic password rotation and updates',
    'Biometric authentication (fingerprint, face ID)',
    'Cross-platform synchronization across all devices',
    'Dark web monitoring and breach alerts',
    'Secure password sharing with team members',
    'Zero-knowledge architecture for maximum privacy',
    'Advanced threat detection and prevention',
    'Seamless browser integration and auto-fill'
  ];

  const benefits = [
    'Eliminate password-related security breaches by 99.9%',
    'Reduce password reset requests by 85%',
    'Save 2+ hours per week on password management',
    'Ensure compliance with security regulations',
    'Protect against phishing and credential stuffing attacks',
    'Streamline team access management',
    'Generate unique, unbreakable passwords instantly',
    'Monitor and prevent unauthorized access attempts'
  ];

  const useCases = [
    {
      title: 'Enterprise Security',
      description: 'Comprehensive password management for large organizations with advanced compliance features',
      icon: '🏢',
      features: ['SSO integration', 'Role-based access', 'Audit trails', 'Compliance reporting']
    },
    {
      title: 'Small Business',
      description: 'Affordable password security solution for growing businesses',
      icon: '💼',
      features: ['Team sharing', 'Basic reporting', 'Cloud sync', 'Mobile access']
    },
    {
      title: 'Personal Use',
      description: 'Individual password protection with family sharing capabilities',
      icon: '👤',
      features: ['Personal vault', 'Family sharing', 'Device sync', 'Emergency access']
    },
    {
      title: 'Developer Teams',
      description: 'Secure credential management for development and DevOps teams',
      icon: '💻',
      features: ['API key management', 'Environment variables', 'Secret sharing', 'CI/CD integration']
    }
  ];

  const pricing = [
    {
      name: 'Personal',
      price: '$4.99/month',
      description: 'Perfect for individuals and families',
      features: [
        'Unlimited passwords',
        '5 devices',
        'Basic AI features',
        'Dark web monitoring',
        'Email support',
        '2FA authentication'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$12.99/month',
      description: 'Ideal for small to medium businesses',
      features: [
        'Unlimited passwords',
        'Unlimited devices',
        'Advanced AI features',
        'Team management',
        'Priority support',
        'SSO integration',
        'Advanced reporting',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$24.99/month',
      description: 'For large organizations',
      features: [
        'Everything in Business',
        'Custom integrations',
        'Dedicated support',
        'Compliance tools',
        'Advanced analytics',
        'White-label options',
        'SLA guarantee',
        'Custom deployment'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>AI-Powered Security</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Password Manager
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The most advanced AI-powered password manager that keeps your digital life secure. 
            Generate, store, and manage passwords with cutting-edge artificial intelligence and military-grade encryption.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Security Rate</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">256-bit</div>
              <div className="text-gray-300">Encryption</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">2M+</div>
              <div className="text-gray-300">Users Protected</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Advanced AI Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Why Choose Our AI Password Manager?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                  <p className="text-gray-300 text-sm">
                    Advanced AI technology ensures maximum security while providing seamless user experience.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Perfect for Every Use Case
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-green-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400">per month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Password Manager Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                      : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="cyber-card p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Secure Your Digital Life Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join millions of users who trust our AI-powered password manager to keep their accounts safe and secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call: (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Password Manager Inquiry"
                className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Free Trial
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIPasswordManagerPage;
