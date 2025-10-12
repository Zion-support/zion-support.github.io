'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  DollarSign, 
  Clock, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Globe,
  Smartphone,
  BarChart3,
  CreditCard,
  Mail,
  Download,
  Eye,
  Edit3,
  Trash2,
  Plus,
  Search,
  Filter,
  Calendar,
  TrendingUp
} from 'lucide-react';

export default function AISmartInvoicePage() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: 'AI-Powered Invoice Generation',
      description: 'Automatically generate professional invoices using AI templates and smart data extraction'
    },
    {
      icon: <Clock className="w-6 h-6 text-green-500" />,
      title: 'Automated Recurring Billing',
      description: 'Set up recurring invoices with smart scheduling and automatic client notifications'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Secure Payment Processing',
      description: 'Integrated payment gateway with 256-bit encryption and PCI compliance'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
      title: 'Real-time Analytics',
      description: 'Track payment status, overdue invoices, and revenue analytics in real-time'
    },
    {
      icon: <Mail className="w-6 h-6 text-cyan-500" />,
      title: 'Smart Email Automation',
      description: 'Automated follow-ups, payment reminders, and thank you messages'
    },
    {
      icon: <Globe className="w-6 h-6 text-red-500" />,
      title: 'Multi-Currency Support',
      description: 'Support for 150+ currencies with real-time exchange rate updates'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for freelancers and small businesses',
      features: [
        'Up to 50 invoices/month',
        'Basic AI templates',
        'Email notifications',
        'Mobile app access',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 500 invoices/month',
        'Advanced AI features',
        'Recurring billing',
        'Multi-currency support',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited invoices',
        'Full AI suite',
        'White-label solution',
        'Advanced integrations',
        'Custom workflows',
        'Dedicated support',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'Creative Agency Co.',
      content: 'AI Smart Invoice has revolutionized our billing process. We save 10+ hours per week on invoice management.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      company: 'TechStart Inc.',
      content: 'The AI-powered templates are incredibly accurate. Our clients love the professional look and automated reminders.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Johnson',
      company: 'Consulting Pro',
      content: 'The analytics dashboard gives us insights we never had before. Revenue tracking has never been easier.',
      rating: 5,
      avatar: 'EJ'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Smart Invoice - Intelligent Invoice Management | Zion Tech Group</title>
        <meta name="description" content="Transform your invoicing with AI Smart Invoice. Automated invoice generation, smart billing, payment tracking, and real-time analytics. Start free trial today!" />
        <meta name="keywords" content="AI invoice generator, smart billing, automated invoicing, payment tracking, invoice management, AI business tools, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-smart-invoice" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FileText className="w-4 h-4 mr-2" />
                AI-Powered Invoice Management
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Smart Invoice
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your invoicing process with intelligent automation. Generate professional invoices, 
                track payments, and boost your cash flow with AI-powered insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Watch Demo
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                ✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50K+</div>
                <div className="text-gray-400">Invoices Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-400">Payment Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15min</div>
                <div className="text-gray-400">Average Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">$2M+</div>
                <div className="text-gray-400">Revenue Processed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features for Modern Businesses
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to streamline your invoicing and boost your cash flow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border ${
                  plan.popular ? 'border-blue-500/50 ring-2 ring-blue-500/20' : 'border-white/20'
                } hover:bg-white/15 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
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
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                      : 'border-2 border-white text-white hover:bg-white/10'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Loved by Businesses Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See what our customers say about AI Smart Invoice
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Invoicing?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of businesses using AI Smart Invoice to streamline their billing process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Schedule Demo
                </button>
              </div>
              <p className="text-white/80 text-sm mt-6">
                ✓ 14-day free trial • ✓ No setup fees • ✓ 24/7 support
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}