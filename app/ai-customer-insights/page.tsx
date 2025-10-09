'use client';
import React, { useState, useEffect } from 'react';
import { Users, TrendingUp, Brain, BarChart, CheckCircle, Star, ArrowRight, Eye, Target, Mail, Phone, MapPin, Globe, Zap, PieChart, AlertCircle, Heart, MessageSquare, ThumbsUp, Award } from 'lucide-react';

const AICustomerInsightsPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Customer Analysis',
      description: 'Deep learning algorithms analyze customer behavior, preferences, and sentiment to provide actionable insights.',
      benefits: ['Real-time customer sentiment analysis', 'Behavioral pattern recognition', 'Predictive customer modeling']
    },
    {
      icon: Target,
      title: 'Personalization Engine',
      description: 'AI-powered personalization that delivers tailored experiences and recommendations for each customer.',
      benefits: ['95% improvement in engagement', 'Dynamic content personalization', 'Smart product recommendations']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Advanced machine learning models predict customer lifetime value, churn risk, and purchase likelihood.',
      benefits: ['Churn prediction with 89% accuracy', 'LTV forecasting', 'Purchase probability scoring']
    },
    {
      icon: BarChart,
      title: 'Advanced Reporting',
      description: 'Comprehensive dashboards and reports that transform raw data into actionable business intelligence.',
      benefits: ['Real-time dashboards', 'Custom report generation', 'Automated insights delivery']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10K customers',
        'Basic AI insights',
        'Standard reporting',
        'Email support',
        'Mobile dashboard',
        'Basic personalization'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 100K customers',
        'Advanced AI analysis',
        'Custom dashboards',
        'Priority support',
        'API integration',
        'Advanced personalization',
        'Predictive analytics',
        'Multi-user access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited customers',
        'Enterprise AI features',
        'Custom integrations',
        'Dedicated support',
        'Advanced security',
        'Custom development',
        'SSO integration',
        'White-label options'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      role: 'CMO',
      company: 'RetailMax',
      content: 'AI Customer Insights helped us increase customer retention by 40% and boost revenue by 25% in just 6 months.',
      rating: 5
    },
    {
      name: 'Carlos Rodriguez',
      role: 'VP of Sales',
      company: 'TechSolutions',
      content: 'The predictive analytics are incredibly accurate. We can now identify high-value customers before they even know it.',
      rating: 5
    },
    {
      name: 'Amanda Foster',
      role: 'Customer Success Manager',
      company: 'SaaS Pro',
      content: 'Finally, we understand our customers like never before. The insights are actionable and game-changing.',
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
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-400/20 rounded-full px-4 py-2 mb-6">
            <Users className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-medium">AI Customer Insights</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Deep Customer Intelligence
          </h1>
          <p className="text-xl text-purple-400 mb-8 font-medium">
            AI-Powered Customer Analytics & Personalization
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Unlock the full potential of your customer data with AI that understands behavior, 
            predicts needs, and delivers personalized experiences that drive growth.
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
              <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-300">Increase in Retention</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">89%</div>
              <div className="text-gray-300">Churn Prediction Accuracy</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-pink-400 mb-2">25%</div>
              <div className="text-gray-300">Revenue Boost</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16" id="features">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Advanced Customer Intelligence
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
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
            Flexible Pricing Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-purple-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
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
            Success Stories
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
        <section className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Transform Your Customer Experience
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join industry leaders using AI to understand and engage customers like never before
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

export default AICustomerInsightsPage;