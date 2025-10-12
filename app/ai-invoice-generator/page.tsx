'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Calculator, 
  CreditCard, 
  Users, 
  Smartphone, 
  Globe,
  ArrowRight,
  Star,
  Calendar,
  Target,
  TrendingUp,
  Brain,
  Lock,
  Download,
  PieChart,
  Bell,
  Zap,
  CheckCircle,
  Mail,
  Send
} from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import NeonButton from '../components/NeonButton';
import FuturisticCard from '../components/FuturisticCard';

export default function AIInvoiceGeneratorPage() {
  const features = [
    {
      title: 'AI-Powered Generation',
      description: 'Automatically generate professional invoices using AI templates and smart data extraction',
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      details: ['Smart templates', 'Auto-population', 'Brand customization', 'Multi-language support']
    },
    {
      title: 'Payment Tracking',
      description: 'Real-time payment tracking with automated reminders and status updates',
      icon: <CreditCard className="w-8 h-8 text-green-400" />,
      details: ['Payment status', 'Auto reminders', 'Payment links', 'Multiple gateways']
    },
    {
      title: 'Tax Calculations',
      description: 'Automated tax calculations with compliance checking for different regions',
      icon: <Calculator className="w-8 h-8 text-blue-400" />,
      details: ['Auto tax calculation', 'Regional compliance', 'Tax reports', 'Audit trails']
    },
    {
      title: 'Client Portal',
      description: 'Dedicated client portal for invoice viewing, payments, and communication',
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      details: ['Client dashboard', 'Invoice history', 'Payment options', 'Communication tools']
    },
    {
      title: 'Mobile App',
      description: 'Create and manage invoices on the go with our mobile application',
      icon: <Smartphone className="w-8 h-8 text-yellow-400" />,
      details: ['Mobile invoicing', 'Photo receipts', 'Offline access', 'Push notifications']
    },
    {
      title: 'Integration Suite',
      description: 'Seamless integration with accounting software and business tools',
      icon: <Globe className="w-8 h-8 text-red-400" />,
      details: ['QuickBooks sync', 'Xero integration', 'API access', 'Webhook support']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$25',
      period: '/month',
      description: 'Perfect for freelancers and small businesses',
      features: [
        'Unlimited invoices',
        'Basic templates',
        'Payment tracking',
        'Mobile app',
        'Email support',
        '5GB storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI features',
        'Client portal',
        'Tax calculations',
        'Custom branding',
        'Priority support',
        '50GB storage',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited everything',
        'Custom integrations',
        'Advanced analytics',
        'White-label options',
        'Dedicated support',
        'Unlimited storage',
        'Multi-currency'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Lee',
      company: 'Freelance Designer',
      content: 'The AI invoice generation saves me hours every week. The templates are beautiful and professional.',
      rating: 5,
      avatar: 'JL'
    },
    {
      name: 'Mark Stevens',
      company: 'Consulting Agency',
      content: 'Payment tracking and client portal features are game-changers. Our cash flow improved significantly.',
      rating: 5,
      avatar: 'MS'
    },
    {
      name: 'Sarah Wilson',
      company: 'E-commerce Store',
      content: 'The tax calculations are spot-on. We never have to worry about compliance issues anymore.',
      rating: 5,
      avatar: 'SW'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Invoice Generator - Automated Invoicing | Zion Tech Group</title>
        <meta name="description" content="Automate your invoicing with AI-powered generation, payment tracking, and tax calculations. Start your free trial today!" />
        <meta name="keywords" content="invoice generator, automated invoicing, payment tracking, tax calculations, business invoicing" />
      </Helmet>
      
      <div className="min-h-screen relative">
        <AnimatedBackground />
        
        {/* Hero Section */}
        <section className="relative pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                <FileText className="w-4 h-4 mr-2" />
                AI-Powered Invoicing
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                AI Invoice Generator
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Automate your invoicing process with AI-powered generation, real-time payment tracking, 
                and automated tax calculations. Get paid faster with professional invoices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton to="/contact" variant="primary" size="lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </NeonButton>
                <NeonButton to="#demo" variant="secondary" size="lg">
                  Watch Demo
                </NeonButton>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">3hrs</div>
                <div className="text-gray-300 text-xs sm:text-sm">Time Saved/Week</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-1 sm:mb-2">40%</div>
                <div className="text-gray-300 text-xs sm:text-sm">Faster Payments</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2">99.9%</div>
                <div className="text-gray-300 text-xs sm:text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-1 sm:mb-2">25k+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Invoices Generated</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Powerful Features</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Everything you need to streamline your invoicing and get paid faster
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  link="#"
                  features={feature.details}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Simple Pricing</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Choose the plan that fits your invoicing needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border ${
                  plan.popular ? 'border-purple-400/50 bg-purple-500/5' : 'border-white/20'
                } hover:bg-white/15 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <NeonButton 
                    to="/contact" 
                    variant={plan.popular ? "primary" : "secondary"} 
                    size="md"
                    className="w-full justify-center"
                  >
                    Get Started
                  </NeonButton>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Users Say</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Join thousands of businesses already streamlining their invoicing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Streamline Your Invoicing?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Start your free 14-day trial today. No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <NeonButton to="/contact" variant="accent" size="lg">
                    Start Free Trial
                  </NeonButton>
                  <NeonButton to="/contact" variant="secondary" size="lg">
                    Contact Sales
                  </NeonButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}