'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Receipt, Brain, TrendingUp, CheckCircle, DollarSign, Users, Shield, Globe, ArrowRight, Phone, Mail, MapPin, Star, Award, Zap, BarChart, MessageSquare, Eye, Sparkles, Database, Cpu, CreditCard, PieChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIExpenseTrackerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Receipt Scanning',
      description: 'Automatically extract expense data from receipts using advanced OCR and machine learning technology',
      benefits: ['99% accuracy in data extraction', 'Multi-language support', 'Automatic categorization', 'Real-time processing']
    },
    {
      icon: Zap,
      title: 'Smart Expense Categorization',
      description: 'AI automatically categorizes expenses and learns from your patterns to improve accuracy over time',
      benefits: ['Automatic categorization', 'Learning algorithms', 'Custom categories', 'Rule-based sorting']
    },
    {
      icon: BarChart,
      title: 'Intelligent Budget Management',
      description: 'AI-driven budget insights and spending predictions to help you make smarter financial decisions',
      benefits: ['Spending predictions', 'Budget alerts', 'Trend analysis', 'Financial forecasting']
    },
    {
      icon: Shield,
      title: 'Advanced Security & Compliance',
      description: 'Bank-level security with compliance features for business expense management and tax preparation',
      benefits: ['256-bit encryption', 'SOC 2 compliance', 'Tax report generation', 'Audit trails']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$9.99',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Up to 100 receipts/month',
        'Basic AI categorization',
        'Expense reports',
        'Email support',
        'Mobile app access',
        'Cloud sync',
        'Basic analytics',
        'Tax export (CSV)'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$29.99',
      period: '/month',
      description: 'Ideal for small businesses and consultants',
      features: [
        'Up to 1,000 receipts/month',
        'Advanced AI features',
        'Team collaboration',
        'Priority support',
        'Advanced analytics',
        'Custom categories',
        'API access',
        'Multi-currency support',
        'Receipt approval workflow',
        'Tax report generation'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: '$79.99',
      period: '/month',
      description: 'For growing businesses with complex needs',
      features: [
        'Unlimited receipts',
        'Full AI suite',
        'Unlimited team members',
        '24/7 support',
        'Custom integrations',
        'Advanced reporting',
        'White-label options',
        'Dedicated account manager',
        'On-premise deployment',
        'Custom workflows'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'QuickBooks', icon: '📊', description: 'Accounting integration' },
    { name: 'Xero', icon: '💼', description: 'Cloud accounting' },
    { name: 'Sage', icon: '📈', description: 'Business accounting' },
    { name: 'FreshBooks', icon: '📋', description: 'Small business accounting' },
    { name: 'Expensify', icon: '💰', description: 'Expense management' },
    { name: 'Concur', icon: '✈️', description: 'Travel & expense' },
    { name: 'SAP', icon: '🏢', description: 'Enterprise resource planning' },
    { name: 'Zapier', icon: '⚡', description: 'Workflow automation' }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Freelance Consultant',
      content: 'AI Expense Tracker has revolutionized how I manage my business expenses. I save 5+ hours per week on expense management and never miss a tax deduction.',
      rating: 5,
      savings: '5+ hours/week saved'
    },
    {
      name: 'Lisa Chen',
      role: 'Small Business Owner',
      content: 'The AI categorization is incredibly accurate, and the budget insights helped me reduce unnecessary spending by 30%. Highly recommended for any business owner.',
      rating: 5,
      savings: '30% spending reduction'
    },
    {
      name: 'Mark Rodriguez',
      role: 'Finance Manager',
      content: 'Our team productivity increased by 40% since implementing AI Expense Tracker. The automated workflows and approval process are game-changers.',
      rating: 5,
      savings: '40% productivity increase'
    }
  ];

  const useCases = [
    {
      industry: 'Freelancers',
      description: 'Track business expenses, mileage, and receipts for tax deductions and financial planning',
      benefits: ['Tax deduction tracking', 'Mileage logging', 'Receipt organization', 'Financial insights']
    },
    {
      industry: 'Small Business',
      description: 'Manage team expenses, budgets, and financial reporting with automated workflows',
      benefits: ['Team expense management', 'Budget tracking', 'Approval workflows', 'Financial reporting']
    },
    {
      industry: 'Sales Teams',
      description: 'Track travel expenses, client entertainment, and sales-related costs with detailed reporting',
      benefits: ['Travel expense tracking', 'Client entertainment', 'Sales cost analysis', 'Commission tracking']
    },
    {
      industry: 'Remote Teams',
      description: 'Manage distributed team expenses with cloud-based tracking and approval systems',
      benefits: ['Remote expense tracking', 'Cloud collaboration', 'Approval workflows', 'Global currency support']
    }
  ];

  const aiCapabilities = [
    {
      feature: 'Receipt OCR',
      description: 'Extract text and data from any receipt format with 99% accuracy',
      accuracy: '99%'
    },
    {
      feature: 'Smart Categorization',
      description: 'Automatically categorize expenses based on merchant, amount, and context',
      accuracy: '95%'
    },
    {
      feature: 'Fraud Detection',
      description: 'Identify suspicious transactions and potential duplicate expenses',
      accuracy: '98%'
    },
    {
      feature: 'Spending Predictions',
      description: 'Predict future spending patterns and budget requirements',
      accuracy: '92%'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Expense Tracker - Intelligent Expense Management & Receipt Scanning | Zion Tech Group"
        description="Transform your expense management with AI-powered receipt scanning, smart categorization, and intelligent budget insights. Save 5+ hours per week and reduce spending by 30%."
        keywords={['AI expense tracker', 'receipt scanning', 'expense management', 'budget tracking', 'expense automation', 'AI categorization']}
        canonicalUrl="https://ziontechgroup.com/ai-expense-tracker"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Receipt className="w-4 h-4" />
                AI-Powered Expense Management
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
                AI Expense Tracker
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your expense management with AI-powered receipt scanning, smart categorization, 
                and intelligent budget insights. Save 5+ hours per week and reduce spending by 30%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#pricing"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99%</div>
                <div className="text-gray-300">OCR Accuracy</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-gray-300">Hours Saved/Week</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-pink-400 mb-2">30%</div>
                <div className="text-gray-300">Spending Reduction</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-gray-300">Categorization Accuracy</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4" id="features">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to revolutionize your expense management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI technology delivers unmatched accuracy and intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{capability.feature}</h3>
                    <span className="text-cyan-400 font-bold text-lg">{capability.accuracy}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Perfect for Every Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored expense management solutions for different business types
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your existing accounting and business tools
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">{integration.icon}</div>
                  <div className="text-sm text-white font-medium mb-1">{integration.name}</div>
                  <div className="text-xs text-gray-400">{integration.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4" id="pricing">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your expense management needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
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
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in AI Expense Tracker ${plan.name} Plan`}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
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
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using AI Expense Tracker to streamline their finances
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                    </div>
                    <div className="text-green-400 font-semibold text-sm">{testimonial.savings}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Expense Management?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Start your free trial today and experience the power of AI-driven expense tracking
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Expense Tracker Free Trial Request"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-cyan-100">
              <p>Contact: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIExpenseTrackerPage;