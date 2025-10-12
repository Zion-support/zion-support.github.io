'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  TrendingUp, 
  PieChart, 
  Receipt, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Shield,
  Globe,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  Brain,
  Cpu,
  BarChart3,
  MessageSquare,
  FileText,
  Camera,
  CreditCard,
  Wallet,
  Target,
  Zap
} from 'lucide-react';

export default function AIExpenseTrackerPage() {
  const features = [
    {
      title: 'AI-Powered Receipt Scanning',
      description: 'Automatically extract expense data from receipts using advanced OCR and AI recognition technology.',
      icon: <Receipt className="w-8 h-8 text-cyan-400" />,
      benefits: ['Instant receipt processing', 'Smart categorization', 'Tax compliance', 'Multi-language support']
    },
    {
      title: 'Intelligent Budget Management',
      description: 'AI-driven budget recommendations and spending insights to help you save money and reach financial goals.',
      icon: <Target className="w-8 h-8 text-purple-400" />,
      benefits: ['Smart budget alerts', 'Spending predictions', 'Goal tracking', 'Personalized recommendations']
    },
    {
      title: 'Real-Time Analytics',
      description: 'Comprehensive financial analytics with visual reports and trend analysis powered by machine learning.',
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      benefits: ['Spending patterns', 'Category analysis', 'Trend forecasting', 'Custom reports']
    },
    {
      title: 'Multi-Currency Support',
      description: 'Track expenses across multiple currencies with automatic conversion and real-time exchange rates.',
      icon: <Globe className="w-8 h-8 text-yellow-400" />,
      benefits: ['150+ currencies', 'Auto conversion', 'Travel expenses', 'International business']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$9.99',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Unlimited expense tracking',
        'AI receipt scanning (50/month)',
        'Basic budget management',
        'Mobile app access',
        'Email support',
        '1 bank account connection',
        'Basic reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$24.99',
      period: '/month',
      description: 'Ideal for small businesses and professionals',
      features: [
        'Everything in Personal',
        'AI receipt scanning (500/month)',
        'Advanced analytics & insights',
        'Multi-currency support',
        'Priority support',
        '5 bank account connections',
        'Tax preparation tools',
        'Team collaboration (up to 3 users)'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: '$49.99',
      period: '/month',
      description: 'For growing businesses and teams',
      features: [
        'Everything in Professional',
        'Unlimited AI receipt scanning',
        'Advanced team management',
        'Custom integrations',
        'Dedicated support',
        'Unlimited bank connections',
        'Advanced reporting & exports',
        'API access',
        'Custom categories & tags'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'Freelance Consultant',
      content: 'AI Expense Tracker has completely transformed how I manage my business expenses. The receipt scanning is incredibly accurate and saves me hours every week.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Martinez',
      company: 'Small Business Owner',
      content: 'The AI insights have helped me identify unnecessary spending patterns and save over $2,000 per month. The budget recommendations are spot-on.',
      rating: 5,
      avatar: 'LM'
    },
    {
      name: 'James Wilson',
      company: 'Traveling Executive',
      content: 'Multi-currency support and travel expense tracking make this perfect for international business. The automatic categorization is brilliant.',
      rating: 5,
      avatar: 'JW'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Expense Tracker - Smart Financial Management & Receipt Scanning | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered expense tracking with receipt scanning, budget management, and financial analytics. Start your free trial today!" />
        <meta name="keywords" content="AI expense tracker, receipt scanning, budget management, financial analytics, expense management, OCR technology" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Expense Tracker - Smart Financial Management & Receipt Scanning" />
        <meta property="og:description" content="Revolutionary AI-powered expense tracking with receipt scanning and intelligent budget management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-expense-tracker" />
        <meta property="og:image" content="https://ziontechgroup.com/og-ai-expense-tracker.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Expense Tracker",
            "description": "AI-powered expense tracking with receipt scanning and financial analytics",
            "url": "https://ziontechgroup.com/ai-expense-tracker",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "9.99",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "9.99",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-cyan-600 rounded-2xl mb-8">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                AI Expense Tracker
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary AI-powered expense management with intelligent receipt scanning, 
                budget optimization, and comprehensive financial analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-green-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="#demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Watch Demo
                </Link>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">25K+</div>
                  <div className="text-gray-300">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">99.5%</div>
                  <div className="text-gray-300">Receipt Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">$2.5M+</div>
                  <div className="text-gray-300">Expenses Tracked</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">4.8/5</div>
                  <div className="text-gray-300">User Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage your finances intelligently with AI-powered automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include a 30-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular ? 'border-green-500/50 ring-2 ring-green-500/20' : 'border-white/20'
                } hover:bg-white/15 transition-all duration-300 relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
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
                  
                  <Link 
                    to="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-green-600 to-cyan-600 text-white hover:from-green-700 hover:to-cyan-700' 
                        : 'border-2 border-white text-white hover:bg-white/10'
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
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">What Our Users Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied users who have transformed their financial management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
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
                  
                  <blockquote className="text-gray-300 italic">
                    "{testimonial.content}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-cyan-600 rounded-3xl p-8 sm:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Financial Management?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Join 25,000+ users who have revolutionized their expense tracking with AI Expense Tracker. 
                  Start your free trial today - no credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="#demo" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Watch Demo
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>✓ 30-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+1 (302) 464-0950</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">364 E Main St STE 1008, Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}