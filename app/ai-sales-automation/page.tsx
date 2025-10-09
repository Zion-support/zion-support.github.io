'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, CheckCircle, ArrowRight, Star, Users, Target, Zap, Brain, BarChart, Clock, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AISalesAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Lead Scoring',
      description: 'AI-powered lead scoring to identify high-value prospects automatically'
    },
    {
      icon: Target,
      title: 'Automated Follow-ups',
      description: 'Intelligent follow-up sequences based on prospect behavior and engagement'
    },
    {
      icon: BarChart,
      title: 'Sales Forecasting',
      description: 'Predictive analytics for accurate sales forecasting and pipeline management'
    },
    {
      icon: Users,
      title: 'CRM Integration',
      description: 'Seamless integration with popular CRM systems for unified sales management'
    },
    {
      icon: Clock,
      title: 'Real-Time Insights',
      description: 'Live sales analytics and performance monitoring with instant alerts'
    },
    {
      icon: Globe,
      title: 'Multi-Channel Support',
      description: 'Automate sales across email, phone, social media, and other channels'
    }
  ];

  const benefits = [
    '35% increase in qualified leads',
    '50% improvement in conversion rates',
    '25% boost in revenue growth',
    '60% reduction in sales cycle time',
    '80% improvement in lead qualification',
    '90% better sales forecasting accuracy'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small sales teams and startups',
      features: [
        'Up to 1,000 leads',
        'Basic lead scoring',
        'Standard analytics',
        'Email support',
        'CRM integration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing sales teams and businesses',
      features: [
        'Up to 10,000 leads',
        'Advanced lead scoring',
        'Detailed analytics',
        'Priority support',
        'Multi-channel automation',
        'Sales forecasting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large sales organizations and enterprises',
      features: [
        'Unlimited leads',
        'Custom AI models',
        'White-label options',
        '24/7 dedicated support',
        'API access',
        'Advanced integrations'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Most Popular AI Solution</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="AI Sales Automation">
              AI Sales Automation
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
              Boost Sales with AI-Powered Automation
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your sales process with AI-powered lead scoring, automated follow-ups, 
              and predictive analytics. Increase revenue by 25% and conversion rates by 50%.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                Start Free Trial
              </button>
              <Link 
                to="/contact" 
                className="flex items-center justify-center space-x-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Everything you need to automate and optimize your sales process with AI
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16" aria-labelledby="benefits-heading">
          <div className="cyber-card p-8">
            <h2 id="benefits-heading" className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Proven Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Simple Pricing
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Choose the plan that fits your sales automation needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'cyber-button' 
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Sales Process?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of sales teams already using AI Sales Automation to boost their performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
              Start Free Trial
            </button>
            <Link 
              to="/contact" 
              className="flex items-center justify-center space-x-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <span>Contact Sales</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AISalesAutomationPage;