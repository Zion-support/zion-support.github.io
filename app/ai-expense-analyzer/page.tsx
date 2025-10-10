'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { DollarSign, TrendingUp, PieChart, AlertTriangle, CheckCircle, Star, ArrowRight, Brain, Smartphone, Globe, Shield, BarChart, Receipt, CreditCard } from 'lucide-react';

const AIExpenseAnalyzerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Expense Categorization',
      description: 'Automatically categorize expenses with 99.7% accuracy using advanced machine learning algorithms.',
      price: '$39/month'
    },
    {
      icon: TrendingUp,
      title: 'Smart Budgeting',
      description: 'AI-powered budget recommendations based on spending patterns and financial goals.',
      price: '$49/month'
    },
    {
      icon: AlertTriangle,
      title: 'Fraud Detection',
      description: 'Real-time fraud detection and suspicious activity alerts to protect your finances.',
      price: '$29/month'
    },
    {
      icon: PieChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive spending insights with predictive analytics and trend analysis.',
      price: '$59/month'
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'AI expense categorization',
        'Basic budgeting tools',
        'Receipt scanning',
        'Monthly reports',
        'Mobile app access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$79',
      period: '/month',
      description: 'Ideal for small to medium businesses',
      features: [
        'Everything in Personal',
        'Team collaboration',
        'Advanced analytics',
        'Fraud detection',
        'API integrations',
        'Priority support',
        'Up to 10 users'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Business',
        'Custom AI training',
        'Advanced reporting',
        'Compliance tools',
        '24/7 phone support',
        'Unlimited users',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Expense Analyzer - Smart Financial Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered expense management that automatically categorizes, analyzes, and optimizes your spending. Get insights and save money with intelligent financial AI." />
        <meta name="keywords" content="AI expense tracker, financial management, budget optimization, expense categorization, fraud detection" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-expense-analyzer" />
      </Helmet>

      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Expense Analyzer">
              AI Expense Analyzer
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Intelligent Financial Management Revolution
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Transform your financial management with AI-powered expense analysis. Automatically categorize expenses, 
              detect fraud, optimize budgets, and gain deep insights into your spending patterns with cutting-edge artificial intelligence.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-white mb-3">Save 15-30%</h3>
                <p className="text-gray-300">Average savings through AI-optimized spending recommendations</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">99.7% Accuracy</h3>
                <p className="text-gray-300">AI-powered expense categorization with industry-leading precision</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Fraud Protection</h3>
                <p className="text-gray-300">Real-time fraud detection and suspicious activity alerts</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                📧 Start Free Trial
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Advanced AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="quantum-card p-6 energy-pulse">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-lg font-bold text-cyan-400">{feature.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Receipt className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">1. Upload Receipts</h3>
              <p className="text-gray-300">Simply take photos of receipts or connect your bank accounts for automatic expense tracking.</p>
            </div>
            <div className="cyber-card p-8 text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">2. AI Analysis</h3>
              <p className="text-gray-300">Our AI automatically categorizes expenses, detects patterns, and identifies optimization opportunities.</p>
            </div>
            <div className="cyber-card p-8 text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">3. Get Insights</h3>
              <p className="text-gray-300">Receive detailed reports, budget recommendations, and actionable insights to optimize your spending.</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 relative ${
                plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
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
                <a
                  href="tel:+13024640950"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Security Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Bank-Level Security
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: '256-bit SSL Encryption', description: 'Military-grade encryption for all data' },
              { icon: Globe, title: 'SOC 2 Compliant', description: 'Industry-standard security compliance' },
              { icon: CheckCircle, title: 'GDPR Compliant', description: 'Full data protection compliance' },
              { icon: Lock, title: 'Regular Audits', description: 'Quarterly security assessments' }
            ].map((security, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <security.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{security.title}</h3>
                <p className="text-gray-300 text-sm">{security.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'David Kim',
                role: 'CFO, StartupXYZ',
                content: 'AI Expense Analyzer saved us $50K in the first quarter alone. The fraud detection caught suspicious transactions we would have missed.',
                rating: 5
              },
              {
                name: 'Lisa Martinez',
                role: 'Small Business Owner',
                content: 'Finally, an expense tracker that actually understands my business. The AI categorization is incredibly accurate and saves me hours every week.',
                rating: 5
              },
              {
                name: 'Robert Johnson',
                role: 'Financial Advisor',
                content: 'I recommend this to all my clients. The insights and recommendations are spot-on, and the security features give me peace of mind.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="text-white font-bold">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
            Ready to Optimize Your Finances?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of individuals and businesses who have transformed their financial management 
            with AI Expense Analyzer. Start your free 30-day trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              📧 Start Free Trial
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-300 text-sm mb-2">
              📍 364 E Main St STE 1008, Middletown, DE 19709
            </p>
            <p className="text-gray-300 text-sm">
              ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIExpenseAnalyzerPage;