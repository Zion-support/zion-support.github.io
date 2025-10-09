'use client';
import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingDown, Shield, BarChart, CheckCircle, Star, ArrowRight, Brain, Smartphone, Mail, Phone, MapPin, Globe, Zap, Target, PieChart, AlertTriangle, CreditCard, Receipt, Calculator } from 'lucide-react';

const AIExpenseOptimizerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Expense Analysis',
      description: 'Intelligent categorization and analysis of expenses with automated cost optimization recommendations.',
      benefits: ['95% accurate expense categorization', 'Real-time spending insights', 'Automated budget alerts']
    },
    {
      icon: TrendingDown,
      title: 'Cost Reduction',
      description: 'AI-powered recommendations to reduce unnecessary expenses and optimize spending patterns.',
      benefits: ['Average 25% cost reduction', 'Smart vendor negotiations', 'Bulk purchase optimization']
    },
    {
      icon: Shield,
      title: 'Fraud Detection',
      description: 'Advanced AI algorithms detect suspicious transactions and prevent fraudulent expenses.',
      benefits: ['99.7% fraud detection accuracy', 'Real-time alerts', 'Automated blocking']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive financial reporting with predictive analytics and trend analysis.',
      benefits: ['Predictive spending models', 'ROI analysis', 'Custom dashboards']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to $50K monthly expenses',
        'Basic AI categorization',
        'Standard reporting',
        'Email support',
        'Mobile app access',
        'Basic fraud detection'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to $500K monthly expenses',
        'Advanced AI analysis',
        'Custom reporting',
        'Priority support',
        'API integration',
        'Advanced fraud detection',
        'Multi-user access',
        'Custom categories'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited expenses',
        'Enterprise AI features',
        'Custom integrations',
        'Dedicated support',
        'Advanced security',
        'Custom development',
        'SSO integration',
        'Compliance reporting'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Martinez',
      role: 'CFO',
      company: 'FinanceCorp',
      content: 'AI Expense Optimizer saved us $50K in the first quarter alone. The AI recommendations are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Operations Director',
      company: 'TechStart Inc.',
      content: 'The fraud detection caught three suspicious transactions that would have cost us thousands. Amazing tool!',
      rating: 5
    },
    {
      name: 'Robert Kim',
      role: 'CEO',
      company: 'Growth Ventures',
      content: 'Finally, an expense management tool that actually understands our business and provides real value.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </a>
            <a href="/contact" className="cyber-button">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-400/20 rounded-full px-4 py-2 mb-6">
            <DollarSign className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-medium">AI Expense Optimizer</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Smart Expense Management
          </h1>
          <p className="text-xl text-green-400 mb-8 font-medium">
            AI-Powered Cost Optimization & Fraud Detection
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your expense management with AI that categorizes, analyzes, and optimizes 
            your spending automatically. Reduce costs by 25% on average while preventing fraud.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#pricing" className="cyber-button w-full sm:w-auto text-center">
              Start Free Trial
            </a>
            <a href="#demo" className="cyber-button w-full sm:w-auto text-center" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              Watch Demo
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">25%</div>
              <div className="text-gray-300">Average Cost Reduction</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.7%</div>
              <div className="text-gray-300">Fraud Detection Accuracy</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-pink-400 mb-2">95%</div>
              <div className="text-gray-300">Categorization Accuracy</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16" id="features">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Intelligent Expense Management
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16" id="pricing">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Transparent Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-green-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-400 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-cyan-600 text-white hover:from-green-600 hover:to-cyan-700'
                      : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Customer Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-green-600/20 to-cyan-600/20 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Saving Money Today
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of businesses already optimizing their expenses with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="cyber-button">
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-gray-700 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved. | 
            <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-2">kleber@ziontechgroup.com</a> | 
            <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 ml-2">(302) 464-0950</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AIExpenseOptimizerPage;