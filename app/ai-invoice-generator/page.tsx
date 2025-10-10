'use client';
import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, DollarSign, Clock, CheckCircle, Zap, ArrowRight, Phone, MessageSquare, Star, TrendingUp, Settings, Database, Shield, Globe, Receipt, Calculator, Send } from 'lucide-react';

const AIInvoiceGeneratorPage: React.FC = memo(() => {
  const features = [
    {
      icon: FileText,
      title: 'Smart Invoice Creation',
      description: 'AI automatically generates professional invoices from project data, time tracking, and client information',
      color: 'text-blue-400'
    },
    {
      icon: Calculator,
      title: 'Automatic Calculations',
      description: 'Intelligent tax calculations, discounts, and pricing adjustments based on client history and market rates',
      color: 'text-green-400'
    },
    {
      icon: Clock,
      title: 'Time Tracking Integration',
      description: 'Seamlessly integrates with time tracking tools to automatically bill for hours worked',
      color: 'text-purple-400'
    },
    {
      icon: Send,
      title: 'Automated Delivery',
      description: 'AI schedules and sends invoices at optimal times to maximize payment speed',
      color: 'text-orange-400'
    },
    {
      icon: Receipt,
      title: 'Expense Management',
      description: 'Automatically categorizes and includes expenses in invoices with proper documentation',
      color: 'text-cyan-400'
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Ensures all invoices meet legal requirements and industry standards with built-in compliance checks',
      color: 'text-red-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Solo',
      price: '$19',
      period: '/month',
      description: 'Perfect for freelancers and solo entrepreneurs',
      features: [
        'Up to 50 invoices/month',
        'Basic AI features',
        'Email support',
        'Standard templates',
        'PDF export'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$49',
      period: '/month',
      description: 'Ideal for small to medium businesses',
      features: [
        'Unlimited invoices',
        'Advanced AI features',
        'Priority support',
        'Custom templates',
        'Multi-currency support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Everything in Business',
        'Custom AI models',
        'Advanced integrations',
        'Dedicated support',
        'Custom reporting',
        'White-label options'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: '75%',
      label: 'Time Savings',
      description: 'Reduce invoice creation time from hours to minutes'
    },
    {
      metric: '40%',
      label: 'Faster Payments',
      description: 'AI-optimized delivery increases payment speed'
    },
    {
      metric: '95%',
      label: 'Accuracy Rate',
      description: 'Eliminate human errors in calculations and data entry'
    },
    {
      metric: '60%',
      label: 'Reduced Overhead',
      description: 'Automate repetitive billing tasks and follow-ups'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>AI Invoice Generator - Automated Billing & Invoicing | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered invoice generator with smart calculations, automated delivery, and compliance checks. Save 75% time on billing tasks." />
        <meta name="keywords" content="AI invoice generator, automated billing, invoice automation, smart invoicing, billing software" />
        <meta property="og:title" content="AI Invoice Generator - Automated Billing & Invoicing" />
        <meta property="og:description" content="Revolutionary AI-powered invoice generator with smart calculations and automated delivery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-invoice-generator" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            <span>AI Invoice Generation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Invoice Generator
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your billing process with AI-powered invoice generation. Create professional invoices 
            in minutes, not hours. Save 75% time and get paid 40% faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Free Demo
            </a>
          </div>
        </section>

        {/* Benefits Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-green-500/20 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{benefit.metric}</div>
                <div className="text-white font-semibold mb-2">{benefit.label}</div>
                <div className="text-sm text-gray-400">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Intelligent Invoice Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI invoice generator handles every aspect of your billing process automatically
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300">
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
            <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business size and billing needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/30 p-8 rounded-lg border transition-all duration-300 ${
                plan.popular 
                  ? 'border-green-500/50 scale-105' 
                  : 'border-gray-700 hover:border-green-500/30'
              }`}>
                {plan.popular && (
                  <div className="bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
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
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
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
        <section className="text-center bg-gradient-to-r from-green-600/20 to-blue-600/20 p-12 rounded-lg border border-green-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Revolutionize Your Billing?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our AI invoice generator to streamline their billing process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
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

AIInvoiceGeneratorPage.displayName = 'AIInvoiceGeneratorPage';

export default AIInvoiceGeneratorPage;