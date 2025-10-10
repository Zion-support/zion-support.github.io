'use client';
import React, { useState, useEffect } from 'react';
import { 
  DollarSign, 
  Receipt, 
  PieChart, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Brain,
  Zap,
  Smartphone,
  CreditCard,
  Target,
  BarChart,
  Award,
  Shield,
  Globe,
  Calendar,
  AlertCircle,
  Download,
  Upload
} from 'lucide-react';

const AIExpenseTrackerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Receipt Scanning',
      description: 'Automatically extract expense data from receipts using advanced OCR and machine learning technology.',
      benefits: ['Instant receipt processing', '99.9% accuracy', 'Multi-language support', 'Automatic categorization']
    },
    {
      icon: Zap,
      title: 'Smart Categorization',
      description: 'AI automatically categorizes your expenses and learns from your spending patterns over time.',
      benefits: ['Auto categorization', 'Learning algorithms', 'Custom categories', 'Pattern recognition']
    },
    {
      icon: PieChart,
      title: 'Advanced Analytics',
      description: 'Get detailed insights into your spending habits with beautiful charts and predictive analytics.',
      benefits: ['Spending insights', 'Trend analysis', 'Budget forecasting', 'Visual reports']
    },
    {
      icon: Target,
      title: 'Smart Budgeting',
      description: 'AI-powered budget recommendations based on your income, goals, and spending patterns.',
      benefits: ['Personalized budgets', 'Goal tracking', 'Spending alerts', 'Savings optimization']
    },
    {
      icon: Shield,
      title: 'Bank Integration',
      description: 'Securely connect your bank accounts and credit cards for automatic transaction import.',
      benefits: ['Bank-level security', 'Real-time sync', 'Multi-account support', 'Encrypted connections']
    },
    {
      icon: Globe,
      title: 'Multi-Currency Support',
      description: 'Track expenses in multiple currencies with real-time exchange rate updates.',
      benefits: ['Real-time rates', 'Multi-currency', 'Travel expenses', 'Global reporting']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$9.99',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Unlimited receipts',
        'Basic analytics',
        '1 bank account',
        'Mobile app',
        'Email support',
        'Basic reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$19.99',
      period: '/month',
      description: 'Ideal for small businesses and professionals',
      features: [
        'Everything in Personal',
        'Advanced analytics',
        'Up to 5 bank accounts',
        'Team collaboration',
        'Priority support',
        'Advanced reports',
        'Tax preparation'
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
        'Unlimited bank accounts',
        'Multi-user access',
        'API integration',
        'Custom reporting',
        'Dedicated support',
        'Compliance tools'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Personal Finance',
      description: 'Track personal expenses, create budgets, and achieve your financial goals.',
      icon: DollarSign,
      examples: ['Monthly budgeting', 'Savings tracking', 'Debt management', 'Investment planning']
    },
    {
      title: 'Small Business',
      description: 'Manage business expenses, track tax deductions, and maintain financial records.',
      icon: Receipt,
      examples: ['Expense reports', 'Tax preparation', 'Profit tracking', 'Vendor management']
    },
    {
      title: 'Freelancers',
      description: 'Track project expenses, manage client billing, and optimize your income.',
      icon: TrendingUp,
      examples: ['Project tracking', 'Client billing', 'Tax deductions', 'Income optimization']
    },
    {
      title: 'Travelers',
      description: 'Track travel expenses, manage per diems, and handle multi-currency transactions.',
      icon: Globe,
      examples: ['Travel expenses', 'Per diem tracking', 'Currency conversion', 'Receipt management']
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      role: 'Freelance Designer',
      content: 'AI Expense Tracker has completely transformed how I manage my business finances. The receipt scanning is incredibly accurate and saves me hours every week.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      role: 'Small Business Owner',
      content: 'The AI categorization is spot-on. It automatically categorizes my expenses better than I could do manually, and the insights help me make better financial decisions.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Marketing Manager',
      content: 'As someone who travels frequently for work, the multi-currency support and travel expense tracking features are invaluable. Highly recommended!',
      rating: 5
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-600 text-white">
                <DollarSign className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Expense Tracker Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The smartest way to track, analyze, and optimize your expenses. Let AI handle the tedious work while you focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/30 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Intelligent Expense Management
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of expense tracking with AI-powered automation and smart insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-600 text-white w-fit mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Need
            </h2>
            <p className="text-xl text-gray-300">
              Whether you're managing personal finances or running a business, we have the right solution for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-600 text-white w-fit mx-auto mb-4">
                  <useCase.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {useCase.description}
                </p>
                <ul className="space-y-2 text-left">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300">
            Start with a free trial and upgrade as your needs grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-emerald-400 ring-2 ring-emerald-400/50' 
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="inline-block bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-emerald-500 to-blue-600 text-white hover:from-emerald-600 hover:to-blue-700'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}>
                Start Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Thousands of Users
            </h2>
            <p className="text-xl text-gray-300">
              See what our users are saying about AI Expense Tracker Pro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Take Control of Your Finances Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join thousands of users who have transformed their financial management with AI Expense Tracker Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border border-white/30 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Contact Sales
            </button>
          </div>
          <p className="text-emerald-100 text-sm mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIExpenseTrackerPage;