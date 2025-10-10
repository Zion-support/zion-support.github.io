'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Zap, Shield, BarChart, CheckCircle, ArrowRight, Star, Clock, Users, Globe, CreditCard, Mail } from 'lucide-react';

const AIInvoiceGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Smart Invoice Creation',
      description: 'AI-powered invoice generation with automatic data extraction and formatting.',
      benefits: ['Auto-populate fields', 'Smart templates', 'Brand customization', 'Multi-currency support']
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Set up automated invoicing workflows that save time and reduce errors.',
      benefits: ['Recurring invoices', 'Auto-reminders', 'Payment tracking', 'Workflow automation']
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Bank-level security with tax compliance and audit trail features.',
      benefits: ['GDPR compliant', 'Tax calculations', 'Audit trails', 'Data encryption']
    },
    {
      icon: BarChart,
      title: 'Financial Analytics',
      description: 'Comprehensive financial insights and reporting for better business decisions.',
      benefits: ['Revenue tracking', 'Payment analytics', 'Client insights', 'Custom reports']
    },
    {
      icon: CreditCard,
      title: 'Payment Integration',
      description: 'Accept payments directly through invoices with multiple payment methods.',
      benefits: ['Credit card processing', 'Bank transfers', 'Digital wallets', 'Payment links']
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Create invoices in multiple languages for global business operations.',
      benefits: ['20+ languages', 'Currency conversion', 'Local formatting', 'Tax compliance']
    }
  ];

  const templates = [
    {
      name: 'Professional Services',
      description: 'Clean, modern design perfect for consulting and professional services.',
      price: 'Free',
      features: ['Time tracking', 'Expense management', 'Client portal']
    },
    {
      name: 'E-commerce',
      description: 'Product-focused template with inventory integration capabilities.',
      price: 'Free',
      features: ['Product catalog', 'Inventory sync', 'Shipping calculations']
    },
    {
      name: 'Freelancer',
      description: 'Simple, elegant design ideal for freelancers and small businesses.',
      price: 'Free',
      features: ['Project tracking', 'Milestone billing', 'Client communication']
    },
    {
      name: 'Subscription',
      description: 'Recurring billing template with subscription management features.',
      price: 'Free',
      features: ['Recurring billing', 'Subscription tiers', 'Proration handling']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for freelancers',
      features: [
        'Up to 50 invoices/month',
        '5 client accounts',
        'Basic templates',
        'Email support',
        'PDF generation',
        'Payment tracking'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Unlimited invoices',
        'Unlimited clients',
        'All templates',
        'Priority support',
        'API access',
        'Custom branding',
        'Advanced analytics',
        'Recurring billing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For growing companies',
      features: [
        'Everything in Professional',
        'White-label solution',
        'Custom integrations',
        'Dedicated support',
        'Advanced security',
        'Multi-user access',
        'Custom workflows',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: '90%',
      description: 'Time saved on invoice creation',
      icon: Clock
    },
    {
      metric: '50%',
      description: 'Faster payment processing',
      icon: Zap
    },
    {
      metric: '99.9%',
      description: 'Uptime guarantee',
      icon: Shield
    },
    {
      metric: '24/7',
      description: 'Customer support',
      icon: Users
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Invoice Generator - Zion Tech Group | Automated Invoicing Solution</title>
        <meta name="description" content="Automated invoice creation with AI-powered features. Generate professional invoices, track payments, and manage finances with our intelligent invoicing platform." />
        <meta name="keywords" content="invoice generator, automated invoicing, AI invoicing, invoice management, payment tracking, financial software" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Invoice Generator
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create professional invoices in seconds with AI-powered automation. Track payments, manage clients, and streamline your billing process with our intelligent invoicing platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our AI Invoice Generator?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your invoicing process with intelligent automation and professional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{benefit.metric}</div>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, send, and track professional invoices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
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

        {/* Templates Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Professional Templates
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of professionally designed invoice templates
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {templates.map((template, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{template.name}</h3>
                    <p className="text-gray-300 mb-4">{template.description}</p>
                    <div className="text-cyan-400 font-semibold">{template.price}</div>
                  </div>
                  <ul className="space-y-2">
                    {template.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Simple Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
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

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Streamline Your Invoicing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses using our AI invoice generator to save time and get paid faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIInvoiceGeneratorPage;