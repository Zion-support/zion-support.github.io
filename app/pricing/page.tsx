'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, X, Star, Zap, Brain, Cpu, Shield, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const pricingPlans = [
    {
      name: 'Micro SAAS Starter',
      description: 'Perfect for small businesses and startups',
      icon: Zap,
      color: 'text-green-400',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-400',
      popular: false,
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Up to 5 AI tools',
        'Basic analytics',
        'Email support',
        'Standard integrations',
        '1 user account',
        'Basic documentation'
      ],
      limitations: [
        'Limited API calls',
        'No custom branding',
        'Basic reporting only'
      ]
    },
    {
      name: 'Micro SAAS Professional',
      description: 'Ideal for growing businesses',
      icon: Brain,
      color: 'text-blue-400',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-400',
      popular: true,
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Up to 20 AI tools',
        'Advanced analytics',
        'Priority support',
        'All integrations',
        'Up to 10 user accounts',
        'Full documentation',
        'Custom workflows',
        'API access',
        'Advanced reporting'
      ],
      limitations: [
        'Limited custom development',
        'Standard SLA'
      ]
    },
    {
      name: 'Micro SAAS Enterprise',
      description: 'For large organizations',
      icon: Shield,
      color: 'text-purple-400',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-400',
      popular: false,
      monthlyPrice: 599,
      yearlyPrice: 5990,
      features: [
        'Unlimited AI tools',
        'Real-time analytics',
        '24/7 dedicated support',
        'Custom integrations',
        'Unlimited user accounts',
        'Full documentation + training',
        'Custom workflows & automation',
        'Full API access',
        'Advanced reporting & BI',
        'Custom branding',
        'SLA guarantee',
        'Dedicated account manager'
      ],
      limitations: []
    }
  ];

  const aiServicePlans = [
    {
      name: 'AI Consulting',
      price: 2500,
      period: 'month',
      description: 'Strategic AI implementation and consulting',
      features: [
        'AI strategy development',
        'Technology assessment',
        'ROI analysis',
        'Implementation planning',
        'Monthly check-ins',
        'Best practices guidance'
      ]
    },
    {
      name: 'Machine Learning Solutions',
      price: 1500,
      period: 'month',
      description: 'Custom ML models and data pipelines',
      features: [
        'Custom model development',
        'Data pipeline setup',
        'Model monitoring',
        'Performance optimization',
        'A/B testing',
        'Documentation & training'
      ]
    },
    {
      name: 'AI Automation',
      price: 1400,
      period: 'month',
      description: 'Intelligent process automation',
      features: [
        'Process analysis',
        'Workflow design',
        'Automation implementation',
        'Exception handling',
        'Monitoring & maintenance',
        'Performance reporting'
      ]
    }
  ];

  const itServicePlans = [
    {
      name: 'Cloud Services',
      price: 1999,
      period: 'month',
      description: 'Complete cloud infrastructure management',
      features: [
        'Cloud migration',
        'Infrastructure setup',
        'Cost optimization',
        'Security configuration',
        '24/7 monitoring',
        'Disaster recovery'
      ]
    },
    {
      name: 'Cybersecurity',
      price: 1599,
      period: 'month',
      description: 'Advanced security solutions',
      features: [
        'Threat detection',
        'Vulnerability assessment',
        'Security monitoring',
        'Incident response',
        'Compliance management',
        'Security training'
      ]
    },
    {
      name: 'IT Infrastructure',
      price: 999,
      period: 'month',
      description: 'Complete IT infrastructure management',
      features: [
        'Server management',
        'Network setup',
        'Security hardening',
        'Backup solutions',
        'Performance monitoring',
        'Proactive maintenance'
      ]
    }
  ];

  const specializedPlans = [
    {
      name: 'Quantum Computing',
      price: 'Custom',
      period: '',
      description: 'Next-generation quantum solutions',
      features: [
        'Quantum algorithm development',
        'Quantum security implementation',
        'Research & development',
        'Custom solutions',
        'Expert consultation',
        'Future-proof technology'
      ]
    },
    {
      name: 'Autonomous Systems',
      price: 'Custom',
      period: '',
      description: 'Self-managing intelligent systems',
      features: [
        'System design & implementation',
        'Predictive maintenance',
        'Resource optimization',
        'Performance monitoring',
        'Adaptive learning',
        'Continuous improvement'
      ]
    },
    {
      name: 'Blockchain & Web3',
      price: 2999,
      period: 'month',
      description: 'Decentralized solutions and smart contracts',
      features: [
        'Smart contract development',
        'DApp creation',
        'Token economics',
        'DeFi solutions',
        'NFT platforms',
        'DAO implementation'
      ]
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <a href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <a href="/services" className="text-white hover:text-cyan-400 transition-colors">
                  Services
                </a>
                <a href="/about" className="text-white hover:text-cyan-400 transition-colors">
                  About
                </a>
                <a href="/blog" className="text-white hover:text-cyan-400 transition-colors">
                  Blog
                </a>
                <a href="/case-studies" className="text-white hover:text-cyan-400 transition-colors">
                  Case Studies
                </a>
                <a href="/pricing" className="text-cyan-400 font-semibold">
                  Pricing
                </a>
                <a href="/contact" className="text-white hover:text-cyan-400 transition-colors">
                  Contact
                </a>
                
                <div className="flex items-center space-x-4">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="hidden sm:inline">+1 302 464 0950</span>
                  </a>
                  <a href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-8 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our industry-leading support and security.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Save 20%
                </span>
              )}
            </div>
          </section>

          {/* Micro SAAS Pricing */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Micro SAAS Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  } hover:scale-105 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 ${plan.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className={`w-8 h-8 ${plan.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">What's Included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-center space-x-3">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-gray-400">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-white/10 text-white border border-gray-600 hover:bg-white/20'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* AI Services Pricing */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              AI Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {aiServicePlans.map((plan, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">
                        ${plan.price}
                      </span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className="w-full block text-center py-3 px-6 rounded-lg font-semibold bg-white/10 text-white border border-gray-600 hover:bg-white/20 transition-all duration-300"
                  >
                    Contact Us
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* IT Services Pricing */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {itServicePlans.map((plan, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">
                        ${plan.price}
                      </span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className="w-full block text-center py-3 px-6 rounded-lg font-semibold bg-white/10 text-white border border-gray-600 hover:bg-white/20 transition-all duration-300"
                  >
                    Contact Us
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Specialized Solutions Pricing */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Specialized Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {specializedPlans.map((plan, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className="w-full block text-center py-3 px-6 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                  >
                    Get Custom Quote
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Can I change my plan anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Do you offer custom solutions?</h3>
                <p className="text-gray-300">Absolutely! We specialize in custom AI and IT solutions tailored to your specific business needs. Contact us for a personalized quote.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">What support do you provide?</h3>
                <p className="text-gray-300">All plans include comprehensive support. Micro SAAS plans include email support, while higher tiers include priority support and dedicated account managers.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Is there a free trial available?</h3>
                <p className="text-gray-300">Yes, we offer a 14-day free trial for all Micro SAAS plans. No credit card required to get started.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Choose your plan and start transforming your business with AI and IT solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-cyan-400 font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Home</a></li>
                  <li><a href="/about" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">About Us</a></li>
                  <li><a href="/services" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Services</a></li>
                  <li><a href="/contact" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Contact</a></li>
                  <li><a href="/pricing" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Pricing</a></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-cyan-400 font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><a href="/ai-services" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">AI Services</a></li>
                  <li><a href="/it-services" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">IT Services</a></li>
                  <li><a href="/micro-saas" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Micro SAAS</a></li>
                  <li><a href="/specialized" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Specialized Solutions</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-cyan-400 font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="/support" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Support Center</a></li>
                  <li><a href="/docs" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Documentation</a></li>
                  <li><a href="/api-docs" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">API Reference</a></li>
                  <li><a href="/status" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">System Status</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-cyan-400 font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="/privacy" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Terms of Service</a></li>
                  <li><a href="/cookies" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Cookie Policy</a></li>
                  <li><a href="/gdpr" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">GDPR Compliance</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-8 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 text-sm mb-4 md:mb-0">
                  © 2024 Zion Tech Group. All rights reserved.
                </div>
                <div className="flex space-x-6">
                  <a href="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Privacy</a>
                  <a href="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Terms</a>
                  <a href="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Cookies</a>
                  <a href="/gdpr" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">GDPR</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PricingPage;