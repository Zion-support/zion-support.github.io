'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { FileText, DollarSign, Zap, CheckCircle, Phone, Mail, Brain, Shield, Users, Target, BarChart } from 'lucide-react';

const AIInvoiceGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'AI Invoice Generation',
      description: 'Automatically generate professional invoices with AI-powered templates and smart data extraction.',
      benefits: ['Auto-generation', 'Smart templates', 'Brand customization']
    },
    {
      icon: DollarSign,
      title: 'Payment Tracking',
      description: 'Track payments, send reminders, and manage outstanding invoices with automated workflows.',
      benefits: ['Payment tracking', 'Auto-reminders', 'Payment analytics']
    },
    {
      icon: Brain,
      title: 'Smart Data Entry',
      description: 'AI automatically extracts client information and product details to speed up invoice creation.',
      benefits: ['Auto-fill data', 'Smart suggestions', 'Error detection']
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Set up automated invoice generation, sending, and follow-up sequences to streamline billing.',
      benefits: ['Auto-scheduling', 'Follow-up sequences', 'Workflow automation']
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Bank-level security with encryption, audit trails, and compliance with financial regulations.',
      benefits: ['Data encryption', 'Audit logs', 'Compliance ready']
    },
    {
      icon: BarChart,
      title: 'Financial Analytics',
      description: 'Comprehensive financial reporting and analytics to track revenue, expenses, and cash flow.',
      benefits: ['Revenue tracking', 'Expense analysis', 'Cash flow reports']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 100 invoices/month',
        'Basic AI features',
        'Standard templates',
        'Email support',
        'Basic analytics',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 1,000 invoices/month',
        'Advanced AI features',
        'Custom templates',
        'Priority support',
        'Advanced analytics',
        'Payment tracking',
        '5 user accounts',
        'API integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited invoices',
        'Custom AI models',
        'White-label options',
        'Dedicated support',
        'Custom development',
        'Advanced security',
        'Unlimited users',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '90%', label: 'Time Savings' },
    { number: '50%', label: 'Faster Payments' },
    { number: '100%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'AI Processing' }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Invoice Generator - Zion Tech Group"
        description="Automated invoice generation that saves 90% of billing time and increases payment speed by 50%. AI-powered templates and payment tracking."
        keywords={['AI invoice generator', 'automated invoicing', 'payment tracking', 'financial automation', 'billing software']}
        canonicalUrl="https://ziontechgroup.com/ai-invoice-generator"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Invoice Generator
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Save 90% of billing time with AI-powered invoicing
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI-powered invoice generator automates the entire billing process, from creation to payment tracking, 
                helping you get paid faster and reduce administrative overhead.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Demo</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Powerful Invoicing Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+13024640950"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Automate Your Invoicing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 1,200+ businesses already using our AI invoice platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIInvoiceGeneratorPage;