'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  CheckCircle, 
  DollarSign, 
  TrendingUp, 
  BarChart3, 
  Receipt,
  CreditCard,
  Smartphone,
  Shield,
  Zap,
  ArrowRight,
  Star,
  Sparkles,
  PieChart,
  Target,
  Calendar,
  FileText,
  Bell,
  Settings,
  Globe,
  Users
} from 'lucide-react';

export default function AIExpenseTrackerPage() {
  const features = [
    {
      title: 'Smart Receipt Scanning',
      description: 'AI-powered OCR technology automatically extracts data from receipts and invoices',
      icon: <Receipt className="w-6 h-6 text-cyan-400" />,
      benefits: ['99% accuracy', 'Instant data entry', 'Multi-language support']
    },
    {
      title: 'Intelligent Categorization',
      description: 'AI automatically categorizes expenses based on merchant, amount, and context',
      icon: <Target className="w-6 h-6 text-purple-400" />,
      benefits: ['95% auto-categorization', 'Learning algorithms', 'Custom rules']
    },
    {
      title: 'Predictive Budgeting',
      description: 'AI analyzes spending patterns to predict future expenses and suggest budgets',
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      benefits: ['Accurate predictions', 'Smart alerts', 'Budget optimization']
    },
    {
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboards with AI-generated insights and spending trends',
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
      benefits: ['Real-time insights', 'Visual reports', 'Trend analysis']
    },
    {
      title: 'Fraud Detection',
      description: 'AI-powered fraud detection identifies suspicious transactions and anomalies',
      icon: <Shield className="w-6 h-6 text-red-400" />,
      benefits: ['99.9% fraud detection', 'Instant alerts', 'Risk scoring']
    },
    {
      title: 'Tax Optimization',
      description: 'AI identifies tax-deductible expenses and maximizes deductions automatically',
      icon: <FileText className="w-6 h-6 text-yellow-400" />,
      benefits: ['Tax savings', 'Compliance tracking', 'Audit support']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$9.99',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Unlimited receipts',
        'Basic AI categorization',
        'Monthly reports',
        'Mobile app',
        'Email support',
        'Bank integration'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$29.99',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Everything in Personal',
        'Advanced AI features',
        'Team collaboration',
        'Custom categories',
        'API access',
        'Priority support',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99.99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Business',
        'Custom AI training',
        'White-label options',
        'Advanced security',
        'Dedicated support',
        'Custom integrations',
        'Compliance reporting'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'Freelance Designer',
      role: 'Business Owner',
      content: 'AI Expense Tracker has saved me hours every week. The receipt scanning is incredibly accurate and the AI categorization is spot-on.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Kim',
      company: 'StartupCo',
      role: 'CFO',
      content: 'The predictive budgeting feature has helped us stay on track with our finances. We\'ve reduced overspending by 30%.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Thompson',
      company: 'Consulting Firm',
      role: 'Accountant',
      content: 'The tax optimization feature has saved our clients thousands in deductions. It\'s like having a tax expert built-in.',
      rating: 5,
      avatar: 'LT'
    }
  ];

  const integrations = [
    { name: 'QuickBooks', icon: '📊' },
    { name: 'Xero', icon: '💼' },
    { name: 'Sage', icon: '📈' },
    { name: 'Chase Bank', icon: '🏦' },
    { name: 'Wells Fargo', icon: '🏛️' },
    { name: 'Bank of America', icon: '🏢' },
    { name: 'PayPal', icon: '💳' },
    { name: 'Stripe', icon: '💸' }
  ];

  const stats = [
    { number: '50,000+', label: 'Receipts Processed Daily', icon: <Receipt className="w-6 h-6" /> },
    { number: '99%', label: 'OCR Accuracy Rate', icon: <Target className="w-6 h-6" /> },
    { number: '30%', label: 'Average Cost Savings', icon: <DollarSign className="w-6 h-6" /> },
    { number: '95%', label: 'Auto-Categorization Rate', icon: <Brain className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Expense Tracker - Smart Financial Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionize expense tracking with AI-powered receipt scanning, intelligent categorization, and predictive budgeting. Save 30% on business costs." />
        <meta name="keywords" content="AI expense tracking, receipt scanning, budget management, financial analytics, expense categorization" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Expense Tracker - Smart Financial Management" />
        <meta property="og:description" content="Revolutionize expense tracking with AI-powered receipt scanning, intelligent categorization, and predictive budgeting." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-expense-tracker" />
        <meta property="og:image" content="https://ziontechgroup.com/og-ai-expense-tracker.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Expense Tracker - Smart Financial Management" />
        <meta name="twitter:description" content="Revolutionize expense tracking with AI-powered receipt scanning, intelligent categorization, and predictive budgeting." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-ai-expense-tracker.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full mb-6">
                <DollarSign className="w-8 h-8 text-green-400" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AI Expense Tracker
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your financial management with AI-powered receipt scanning, 
                intelligent categorization, and predictive budgeting that saves you 30% on business costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
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
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full mb-4">
                    <stat.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent Financial Management
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Leverage AI to automate and optimize your expense tracking and financial planning
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                How It Works
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Get started in minutes with our simple 3-step process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full mb-6">
                  <Smartphone className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">1. Snap & Upload</h3>
                <p className="text-gray-300">
                  Take a photo of your receipt or upload it directly. Our AI instantly extracts all the important information.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full mb-6">
                  <Brain className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">2. AI Processing</h3>
                <p className="text-gray-300">
                  Our AI automatically categorizes expenses, detects duplicates, and identifies tax-deductible items.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full mb-6">
                  <BarChart3 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">3. Insights & Reports</h3>
                <p className="text-gray-300">
                  Get detailed analytics, budget recommendations, and automated reports to optimize your spending.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your financial management needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-green-500/50 bg-gradient-to-br from-green-500/10 to-cyan-500/10' 
                    : 'border-white/20 hover:bg-white/15'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-green-500 to-cyan-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-cyan-600 text-white hover:from-green-600 hover:to-cyan-700'
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

        {/* Integrations Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Seamless Integrations
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Connect with your existing financial tools and banking systems
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="text-2xl mb-2">{integration.icon}</div>
                  <div className="text-white text-sm font-medium">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Users Say
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of users already saving time and money with AI Expense Tracker
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-green-400 text-sm">{testimonial.company}</div>
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
              <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-green-500/30">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Financial Management?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Start your free 30-day trial today. No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Schedule Demo
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>📞 Questions? Call us: <a href="tel:+13024640950" className="underline hover:text-white">+1 302 464 0950</a></p>
                  <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="underline hover:text-white">kleber@ziontechgroup.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}