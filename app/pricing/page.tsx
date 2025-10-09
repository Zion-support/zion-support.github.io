'use client';
import React, { useState } from 'react';
import { CheckCircle, Star, Zap, Brain, Cloud, Shield, Code, BarChart, Users, ArrowRight, Phone, Mail, MapPin, Clock, DollarSign, TrendingUp, Target, MessageSquare, Eye, Cpu, Lock, FileText, Search, Bot, Calculator, Calendar, Compass, Navigation, PieChart, Activity, Award, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Video, Gamepad2, ShoppingCart, CreditCard, Truck, Link, HardDrive, FileCheck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EnhancedSEOOptimizer from '../components/EnhancedSEOOptimizer';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const microSaasPlans = [
    {
      name: 'Starter',
      price: { monthly: 79, yearly: 790 },
      description: 'Perfect for small businesses getting started with AI',
      features: [
        '1 AI Project Manager',
        'Basic Analytics Dashboard',
        'Email Support',
        '5GB Storage',
        'Up to 10 users',
        'Basic AI Tools'
      ],
      limitations: [
        'Limited AI models',
        'Basic reporting',
        'Standard support'
      ],
      popular: false,
      icon: Zap,
      color: 'text-blue-400'
    },
    {
      name: 'Professional',
      price: { monthly: 149, yearly: 1490 },
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        '3 AI Project Managers',
        'Advanced Analytics Dashboard',
        'Priority Support',
        '50GB Storage',
        'Up to 50 users',
        'All AI Tools',
        'Custom Integrations',
        'Advanced Reporting'
      ],
      limitations: [
        'Limited custom models',
        'Standard SLA'
      ],
      popular: true,
      icon: Star,
      color: 'text-purple-400'
    },
    {
      name: 'Enterprise',
      price: { monthly: 299, yearly: 2990 },
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited AI Project Managers',
        'Custom Analytics Dashboard',
        '24/7 Dedicated Support',
        'Unlimited Storage',
        'Unlimited Users',
        'All AI Tools + Custom',
        'White-label Solutions',
        'Custom AI Models',
        'Dedicated Account Manager',
        'SLA Guarantee'
      ],
      limitations: [],
      popular: false,
      icon: Crown,
      color: 'text-cyan-400'
    }
  ];

  const aiServicePlans = [
    {
      name: 'AI Development',
      price: { monthly: 1000, yearly: 10000 },
      description: 'Custom AI solutions and machine learning models',
      features: [
        'Custom ML Model Development',
        'Data Pipeline Setup',
        'Model Training & Optimization',
        'API Integration',
        'Performance Monitoring',
        'Monthly Model Updates',
        'Technical Support'
      ],
      icon: Brain,
      color: 'text-purple-400'
    },
    {
      name: 'AI Automation',
      price: { monthly: 1500, yearly: 15000 },
      description: 'Intelligent process automation and workflow optimization',
      features: [
        'Process Analysis & Design',
        'Workflow Automation',
        'Exception Handling',
        'Integration with Existing Systems',
        'Performance Analytics',
        'Continuous Optimization',
        '24/7 Monitoring'
      ],
      icon: Zap,
      color: 'text-yellow-400'
    },
    {
      name: 'AI Analytics',
      price: { monthly: 1200, yearly: 12000 },
      description: 'Advanced data analytics and business intelligence',
      features: [
        'Data Visualization Dashboards',
        'Predictive Analytics',
        'Real-time Reporting',
        'Custom KPI Tracking',
        'Data Integration',
        'Advanced Analytics Tools',
        'Business Intelligence'
      ],
      icon: BarChart,
      color: 'text-green-400'
    }
  ];

  const itServicePlans = [
    {
      name: 'Cloud Services',
      price: { monthly: 800, yearly: 8000 },
      description: 'Cloud migration, setup, and management',
      features: [
        'Cloud Infrastructure Setup',
        'Migration Services',
        'Cost Optimization',
        'Security Configuration',
        '24/7 Monitoring',
        'Backup & Recovery',
        'Performance Optimization'
      ],
      icon: Cloud,
      color: 'text-blue-400'
    },
    {
      name: 'Cybersecurity',
      price: { monthly: 1200, yearly: 12000 },
      description: 'Advanced security solutions and monitoring',
      features: [
        'Threat Detection & Prevention',
        'Vulnerability Assessment',
        'Security Monitoring',
        'Incident Response',
        'Compliance Management',
        'Security Training',
        'Penetration Testing'
      ],
      icon: Shield,
      color: 'text-red-400'
    },
    {
      name: 'DevOps & CI/CD',
      price: { monthly: 1000, yearly: 10000 },
      description: 'Development workflow automation and deployment',
      features: [
        'CI/CD Pipeline Setup',
        'Automated Testing',
        'Container Orchestration',
        'Infrastructure as Code',
        'Monitoring & Alerting',
        'GitOps Implementation',
        'Performance Optimization'
      ],
      icon: Settings,
      color: 'text-cyan-400'
    }
  ];

  const addOns = [
    {
      name: 'Additional Storage',
      price: { monthly: 10, yearly: 100 },
      description: 'Extra storage space for your data and files',
      icon: HardDrive
    },
    {
      name: 'Priority Support',
      price: { monthly: 50, yearly: 500 },
      description: 'Faster response times and dedicated support',
      icon: Users
    },
    {
      name: 'Custom Integrations',
      price: { monthly: 200, yearly: 2000 },
      description: 'Custom API integrations with your existing systems',
      icon: Link
    },
    {
      name: 'Training & Onboarding',
      price: { monthly: 100, yearly: 1000 },
      description: 'Comprehensive training for your team',
      icon: GraduationCap
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'Do you offer custom pricing for large enterprises?',
      answer: 'Absolutely! We offer custom pricing and solutions for enterprise clients with specific requirements. Contact our sales team to discuss your needs.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you when you\'re approaching your limits and help you upgrade to a higher plan. We never cut off service without warning.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all our plans. If you\'re not satisfied, we\'ll provide a full refund.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any of our plans. You only pay the monthly or yearly subscription fee.'
    },
    {
      question: 'What support do you provide?',
      answer: 'All plans include email support. Professional and Enterprise plans include priority support, and Enterprise includes 24/7 dedicated support.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEOOptimizer
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for AI and IT solutions. Choose from our flexible plans starting at $79/month. No hidden fees, no long-term contracts."
        keywords={['pricing', 'AI pricing', 'IT services pricing', 'enterprise pricing', 'subscription plans', 'cost effective', 'transparent pricing']}
        canonicalUrl="https://ziontechgroup.com/pricing"
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, no long-term contracts. Upgrade or downgrade anytime.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly <span className="text-green-400 text-sm">(Save 20%)</span>
            </span>
          </div>
        </section>

        {/* Micro SAAS Plans */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Micro SAAS Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <plan.icon className={`w-12 h-12 ${plan.color} mx-auto mb-4`} />
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                    </span>
                    <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="/contact" className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'cyber-button' 
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* AI Service Plans */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            AI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiServicePlans.map((plan, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <plan.icon className={`w-12 h-12 ${plan.color} mx-auto mb-4`} />
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                    </span>
                    <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="/contact" className="w-full block text-center py-3 px-6 rounded-lg font-semibold border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Contact Sales
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* IT Service Plans */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itServicePlans.map((plan, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <plan.icon className={`w-12 h-12 ${plan.color} mx-auto mb-4`} />
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                    </span>
                    <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="/contact" className="w-full block text-center py-3 px-6 rounded-lg font-semibold border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Contact Sales
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Add-ons */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Add-ons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <addon.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{addon.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">
                  ${billingCycle === 'monthly' ? addon.price.monthly : addon.price.yearly}
                  <span className="text-gray-400 text-sm">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                </div>
                <a href="/contact" className="text-cyan-400 hover:text-white transition-colors text-sm">
                  Add to Plan
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact our team to discuss your specific needs and get a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                Contact Sales
              </a>
              <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;