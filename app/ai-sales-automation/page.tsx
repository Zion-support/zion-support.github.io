'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { TrendingUp, Target, Users, BarChart, Zap, Brain, Phone, Mail, CheckCircle, Star, ArrowRight, DollarSign, Clock, Shield, Building, ShoppingCart, Cloud, Home } from 'lucide-react';

const AISalesAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Lead Scoring & Qualification',
      description: 'AI-powered lead scoring that automatically identifies and prioritizes high-value prospects.',
      benefits: ['Automated Scoring', 'Behavioral Analysis', 'Predictive Modeling', 'Priority Ranking']
    },
    {
      icon: Users,
      title: 'Customer Segmentation',
      description: 'Intelligent customer segmentation based on behavior, preferences, and purchase history.',
      benefits: ['Dynamic Segmentation', 'Behavioral Insights', 'Personalization', 'Targeted Campaigns']
    },
    {
      icon: BarChart,
      title: 'Sales Forecasting',
      description: 'Advanced predictive analytics for accurate sales forecasting and pipeline management.',
      benefits: ['Predictive Analytics', 'Pipeline Insights', 'Revenue Forecasting', 'Risk Assessment']
    },
    {
      icon: Zap,
      title: 'Automated Follow-ups',
      description: 'Smart follow-up sequences that adapt based on customer interactions and responses.',
      benefits: ['Smart Sequences', 'Response Adaptation', 'Timing Optimization', 'Personalization']
    },
    {
      icon: Brain,
      title: 'AI Sales Assistant',
      description: 'Intelligent sales assistant that provides recommendations and insights during customer interactions.',
      benefits: ['Real-time Insights', 'Recommendation Engine', 'Conversation Analysis', 'Performance Tips']
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Enterprise-grade security with compliance features for regulated industries.',
      benefits: ['Data Encryption', 'Compliance Tools', 'Audit Trails', 'Access Controls']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$999/month',
      description: 'Perfect for small sales teams',
      features: ['Up to 1,000 leads/month', 'Basic automation', 'Email support', 'Standard integrations'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,999/month',
      description: 'For growing sales organizations',
      features: ['Up to 10,000 leads/month', 'Advanced AI features', 'Phone support', 'Custom integrations', 'Advanced analytics'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$3,999/month',
      description: 'For large sales organizations',
      features: ['Unlimited leads', 'Custom AI training', '24/7 support', 'Dedicated account manager', 'White-label options'],
      popular: false
    }
  ];

  const stats = [
    { number: '300%', label: 'Increase in Sales' },
    { number: '80%', label: 'Time Savings' },
    { number: '95%', label: 'Lead Accuracy' },
    { number: '50+', label: 'CRM Integrations' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <SEOOptimizer
        title="AI Sales Automation - Zion Tech Group"
        description="Revolutionary AI-powered sales automation solutions with lead scoring, customer segmentation, and intelligent follow-ups. Transform your sales process with cutting-edge AI technology."
        keywords={['AI sales automation', 'lead scoring', 'customer segmentation', 'sales forecasting', 'sales AI', 'sales intelligence']}
        canonicalUrl="https://ziontechgroup.com/ai-sales-automation"
      />
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text glitch">
            AI Sales Automation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize your sales process with AI-powered automation that identifies, qualifies, and nurtures leads automatically.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card energy-pulse">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful Sales AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300 energy-pulse">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                  className="cyber-button w-full text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 cyber-card">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Automate Your Sales?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact us today to learn how AI sales automation can transform your sales process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AISalesAutomationPage;