'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star,
  CreditCard,
  TrendingUp,
  Shield,
  BarChart3,
  Smartphone,
  Camera,
  FileText,
  DollarSign,
  PieChart,
  Receipt,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export default function AIExpenseTrackerPage() {
  const features = [
    {
      icon: <CreditCard className="w-6 h-6 text-green-500" />,
      title: 'AI Auto-Categorization',
      description: 'Intelligent expense categorization using machine learning to automatically sort and classify your expenses.',
      benefits: ['95% accuracy rate', 'Saves 2+ hours weekly', 'Reduces manual data entry']
    },
    {
      icon: <Camera className="w-6 h-6 text-blue-500" />,
      title: 'Receipt Scanning',
      description: 'OCR technology extracts data from receipts and invoices automatically, supporting 50+ languages.',
      benefits: ['Instant data extraction', 'Multi-language support', 'Cloud storage integration']
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      title: 'Financial Analytics',
      description: 'Comprehensive financial insights with spending trends, budget analysis, and predictive forecasting.',
      benefits: ['Visual spending insights', 'Budget optimization', 'Financial forecasting']
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: 'Bank-Level Security',
      description: 'Enterprise-grade security with 256-bit encryption, multi-factor authentication, and compliance standards.',
      benefits: ['Bank-level encryption', 'SOC 2 compliance', 'Regular security audits']
    },
    {
      icon: <DollarSign className="w-6 h-6 text-orange-500" />,
      title: 'Multi-Currency Support',
      description: 'Handle expenses in multiple currencies with real-time exchange rates and automatic conversion.',
      benefits: ['Real-time exchange rates', 'Global expense tracking', 'Currency conversion']
    },
    {
      icon: <PieChart className="w-6 h-6 text-pink-500" />,
      title: 'Budget Management',
      description: 'Smart budget creation and monitoring with AI-powered recommendations and spending alerts.',
      benefits: ['Smart budget alerts', 'Spending recommendations', 'Goal tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Unlimited expense tracking',
        'AI categorization',
        'Receipt scanning (50/month)',
        'Basic analytics',
        'Mobile app access',
        'Email support',
        '1 bank account'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$39',
      period: '/month',
      description: 'Ideal for small businesses and teams',
      features: [
        'Everything in Personal',
        'Team collaboration (up to 10 users)',
        'Advanced analytics & reporting',
        'Receipt scanning (500/month)',
        'API access',
        'Priority support',
        'Up to 5 bank accounts',
        'Custom categories'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$79',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Everything in Business',
        'Unlimited users',
        'Advanced security features',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 phone support',
        'Unlimited bank accounts',
        'Custom reporting',
        'White-label options'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'Freelance Consultant',
      role: 'Independent Contractor',
      content: 'The AI categorization is incredibly accurate. I used to spend hours categorizing expenses manually, now it does it automatically.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Martinez',
      company: 'Small Business Solutions',
      role: 'CFO',
      content: 'The receipt scanning feature has been a game-changer for our team. We can now process expenses 10x faster than before.',
      rating: 5,
      avatar: 'LM'
    },
    {
      name: 'Robert Johnson',
      company: 'Global Ventures Inc.',
      role: 'Finance Director',
      content: 'The multi-currency support and advanced analytics have helped us better understand our global spending patterns.',
      rating: 5,
      avatar: 'RJ'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Expense Tracker - Zion Tech Group | Intelligent Expense Management</title>
        <meta name="description" content="Smart expense tracking with AI-powered categorization, receipt scanning, and financial analytics. Streamline your expense management with Zion Tech Group's AI Expense Tracker." />
        <meta name="keywords" content="AI expense tracker, expense management, receipt scanning, financial analytics, budget tracking, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Expense Tracker - Zion Tech Group" />
        <meta property="og:description" content="Smart expense tracking with AI-powered categorization, receipt scanning, and financial analytics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-expense-tracker" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Expense Tracker - Zion Tech Group" />
        <meta name="twitter:description" content="Smart expense tracking with AI-powered categorization, receipt scanning, and financial analytics." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center justify-center mb-6">
                <CreditCard className="w-16 h-16 text-green-500 mr-4" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  AI Expense Tracker
                </h1>
              </div>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Transform your expense management with AI-powered categorization, receipt scanning, and intelligent financial insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Watch Demo
                </Link>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">95%</div>
                <div className="text-gray-300 text-xs sm:text-sm">AI Accuracy</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">2hrs</div>
                <div className="text-gray-300 text-xs sm:text-sm">Time Saved Weekly</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">50+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Languages Supported</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">5K+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Happy Users</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Smart Expense Management</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Everything you need to track, categorize, and analyze your expenses intelligently
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Choose Your Plan</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Flexible pricing options for individuals, businesses, and enterprises
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${plan.popular ? 'ring-2 ring-green-500/50' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
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
                Join thousands of users who have simplified their expense management
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
                    <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
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
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Simplify Your Expenses?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Start your free trial today and experience the power of AI-driven expense management.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start Your Free Trial
                  </Link>
                  <Link 
                    to="/demo" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Schedule a Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Get in Touch</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Ready to get started? Contact our team for a personalized consultation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div className="text-center">
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div className="text-center">
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white">+1 (302) 464-0950</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <div className="text-center">
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}