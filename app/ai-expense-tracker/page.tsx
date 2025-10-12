import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Shield, Database, Smartphone, CreditCard, FileText, Calendar, BarChart3, Users, Settings, Globe, Lock, Code2, MessageSquare, Target, TrendingUp, Sparkles, Rocket, Clock, DollarSign, PieChart, Mail, Phone, MapPin, Receipt, Camera, Banknote, TrendingDown, Wallet, Calculator, PieChart as PieChartIcon, AlertCircle, CheckCircle2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AIExpenseTrackerPage() {
  const features = [
    {
      icon: <Camera className="w-8 h-8 text-cyan-400" />,
      title: 'Receipt Scanning',
      description: 'AI-powered receipt scanning that automatically extracts expense data, amounts, and categories.',
      benefits: ['OCR Technology', 'Auto Data Extraction', 'Multi-format Support', 'Batch Processing']
    },
    {
      icon: <Brain className="w-8 h-8 text-emerald-400" />,
      title: 'Auto Categorization',
      description: 'Intelligent expense categorization using machine learning to learn your spending patterns.',
      benefits: ['Smart Learning', 'Custom Categories', 'Pattern Recognition', 'One-click Approval']
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-yellow-400" />,
      title: 'Budget Alerts',
      description: 'Proactive budget monitoring with smart alerts and spending limit notifications.',
      benefits: ['Real-time Alerts', 'Custom Limits', 'Spending Trends', 'Predictive Warnings']
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: 'Tax Reports',
      description: 'Automated tax report generation with compliance-ready formats for easy filing.',
      benefits: ['Tax Categories', 'Export Formats', 'Compliance Ready', 'Audit Trail']
    },
    {
      icon: <Globe className="w-8 h-8 text-pink-400" />,
      title: 'Multi-Currency',
      description: 'Support for multiple currencies with real-time exchange rates and automatic conversion.',
      benefits: ['Real-time Rates', 'Auto Conversion', 'Currency History', 'Global Support']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-400" />,
      title: 'Financial Insights',
      description: 'Comprehensive analytics and insights to help you understand your spending patterns.',
      benefits: ['Spending Analysis', 'Trend Reports', 'Category Breakdown', 'Forecasting']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$15',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Unlimited receipts',
        'AI categorization',
        'Basic reporting',
        'Mobile app access',
        'Email support',
        '1 bank account'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$29',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Everything in Personal',
        'Team collaboration',
        'Advanced reporting',
        'Multi-currency support',
        'API access',
        'Priority support',
        '5 bank accounts'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$59',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Business',
        'Custom integrations',
        'Advanced security',
        'Dedicated support',
        'Custom reporting',
        'Unlimited accounts',
        'On-premise option'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'FinanceFlow',
      role: 'CFO',
      content: 'AI Expense Tracker made our financial management effortless. The receipt scanning and categorization is incredibly accurate.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Maria Rodriguez',
      company: 'StartupCo',
      role: 'Founder',
      content: 'The budget alerts have saved us thousands of dollars. We can now track every expense in real-time.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'James Wilson',
      company: 'Consulting Firm',
      role: 'Partner',
      content: 'The tax reports are a game-changer. What used to take days now takes minutes with perfect accuracy.',
      rating: 5,
      avatar: 'JW'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Expense Tracker - Zion Tech Group | Smart Financial Management</title>
        <meta name="description" content="Transform your expense management with AI Expense Tracker. Automated receipt scanning, categorization, and reporting. Start your free trial today!" />
        <meta name="keywords" content="AI expense tracker, receipt scanning, financial management, budget tracking, expense categorization, tax reports" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 mb-6">
              <DollarSign className="w-4 h-4 text-emerald-400 mr-2" />
              <span className="text-emerald-300 text-sm font-medium">AI-Powered Finance</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Expense <span className="bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Tracker</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
              Automated expense tracking with AI-powered receipt scanning, intelligent categorization, and comprehensive financial insights. 
              Take control of your finances with smart technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="#pricing" 
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                View Pricing
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>✨ 14-day free trial • No credit card required • Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Smart <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Everything you need to manage expenses intelligently and efficiently
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-emerald-400/50 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-emerald-500/20 transform group-hover:scale-105">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/20 to-green-500/20 inline-block">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-emerald-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple <span className="bg-gradient-to-r from-emerald-400 to-green-400 text-transparent bg-clip-text">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl transform hover:scale-105 ${
                plan.popular 
                  ? 'border-emerald-400/50 shadow-emerald-500/20' 
                  : 'border-white/20 hover:border-emerald-400/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-emerald-400">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700 hover:shadow-lg hover:shadow-emerald-500/25'
                      : 'border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white'
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Users Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Join thousands of users who have simplified their expense management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    <p className="text-emerald-400 text-xs">{testimonial.role}</p>
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
            <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-cyan-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.3),transparent_50%)]"></div>
              
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready to Simplify Your Finances?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4">
                  Start your free 14-day trial today and experience the power of AI-driven expense management. 
                  No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    Contact Sales
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>📞 Call: <a href="tel:+13024640950" className="font-semibold hover:text-white transition-colors">+1 302 464 0950</a></p>
                  <p>📧 Email: <a href="mailto:kleber@ziontechgroup.com" className="font-semibold hover:text-white transition-colors">kleber@ziontechgroup.com</a></p>
                  <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}