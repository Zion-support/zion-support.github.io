'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Camera, 
  Receipt, 
  Calculator, 
  Shield, 
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
  CreditCard,
  PieChart,
  FileText,
  Bell
} from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import NeonButton from '../components/NeonButton';
import FuturisticCard from '../components/FuturisticCard';

export default function AIExpenseTrackerPage() {
  const features = [
    {
      title: 'Receipt Scanning',
      description: 'AI-powered receipt scanning with automatic data extraction and categorization',
      icon: <Camera className="w-8 h-8 text-cyan-400" />,
      details: ['OCR technology', 'Auto categorization', 'Tax code detection', 'Multi-language support']
    },
    {
      title: 'Smart Categorization',
      description: 'Automatically categorize expenses using machine learning algorithms',
      icon: <Brain className="w-8 h-8 text-green-400" />,
      details: ['ML categorization', 'Custom categories', 'Learning patterns', 'Manual override']
    },
    {
      title: 'Tax Preparation',
      description: 'Automated tax preparation with compliance checking and report generation',
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      details: ['Tax code compliance', 'Report generation', 'Deduction optimization', 'Audit support']
    },
    {
      title: 'Budget Management',
      description: 'Intelligent budget tracking with alerts and spending insights',
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      details: ['Budget alerts', 'Spending analysis', 'Goal tracking', 'Forecasting']
    },
    {
      title: 'Multi-Currency',
      description: 'Support for multiple currencies with real-time exchange rate updates',
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      details: ['Real-time rates', 'Multi-currency', 'Conversion tracking', 'Regional compliance']
    },
    {
      title: 'Bank Integration',
      description: 'Secure integration with banks and financial institutions',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      details: ['Bank connections', 'Secure API', 'Real-time sync', 'Transaction matching']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Unlimited receipts',
        'Basic categorization',
        'Tax reports',
        'Mobile app',
        'Email support',
        '5GB storage'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$39',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Team collaboration',
        'Advanced categorization',
        'Multi-currency support',
        'Bank integration',
        'Priority support',
        '50GB storage',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$79',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Custom integrations',
        'Advanced analytics',
        'Dedicated support',
        'Unlimited storage',
        'White-label options',
        'Compliance tools'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'Freelance Consultant',
      content: 'The receipt scanning feature is a game-changer. I save 5 hours per week on expense tracking.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Wang',
      company: 'Small Business Owner',
      content: 'Tax preparation has never been easier. The AI categorization is incredibly accurate.',
      rating: 5,
      avatar: 'LW'
    },
    {
      name: 'James Miller',
      company: 'Finance Manager',
      content: 'The budget management tools helped us reduce unnecessary expenses by 25%.',
      rating: 5,
      avatar: 'JM'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Expense Tracker - Smart Financial Management | Zion Tech Group</title>
        <meta name="description" content="Automate your expense tracking with AI-powered receipt scanning, smart categorization, and tax preparation. Start your free trial today!" />
        <meta name="keywords" content="expense tracking, receipt scanning, tax preparation, financial management, AI categorization" />
      </Helmet>
      
      <div className="min-h-screen relative">
        <AnimatedBackground />
        
        {/* Hero Section */}
        <section className="relative pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4 mr-2" />
                AI-Powered Finance
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                AI Expense Tracker
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Automate your expense tracking with AI-powered receipt scanning, smart categorization, 
                and automated tax preparation. Save 5+ hours per week on financial management.
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
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-1 sm:mb-2">5hrs</div>
                <div className="text-gray-300 text-xs sm:text-sm">Time Saved/Week</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2">95%</div>
                <div className="text-gray-300 text-xs sm:text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">25%</div>
                <div className="text-gray-300 text-xs sm:text-sm">Cost Reduction</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-1 sm:mb-2">30k+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Receipts Processed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Smart Features</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Everything you need to manage your finances intelligently and efficiently
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
                Choose the plan that fits your financial needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border ${
                  plan.popular ? 'border-green-400/50 bg-green-500/5' : 'border-white/20'
                } hover:bg-white/15 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                        <BarChart3 className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
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
                Join thousands of users already saving time on expense tracking
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
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
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
              <div className="bg-gradient-to-r from-green-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Simplify Your Finances?</h2>
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