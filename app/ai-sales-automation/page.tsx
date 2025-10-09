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
      icon: Zap,
      title: 'Automated Follow-ups',
      description: 'Intelligent follow-up sequences that nurture leads and move them through the sales funnel.',
      benefits: ['Smart Sequences', 'Personalized Content', 'Optimal Timing', 'A/B Testing']
    },
    {
      icon: BarChart,
      title: 'Sales Analytics',
      description: 'Comprehensive analytics and reporting to track performance and identify growth opportunities.',
      benefits: ['Real-time Metrics', 'Pipeline Analysis', 'Performance Tracking', 'ROI Measurement']
    },
    {
      icon: Brain,
      title: 'Predictive Insights',
      description: 'AI-powered predictions for sales forecasting, churn prevention, and opportunity identification.',
      benefits: ['Sales Forecasting', 'Churn Prediction', 'Opportunity Scoring', 'Risk Assessment']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$399/month',
      description: 'Perfect for small sales teams',
      features: ['Up to 5 users', 'Basic automation', 'Email support', 'Standard integrations'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799/month',
      description: 'Ideal for growing sales teams',
      features: ['Up to 25 users', 'Advanced automation', 'Priority support', 'Custom integrations', 'Advanced analytics'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,599/month',
      description: 'For large sales organizations',
      features: ['Unlimited users', 'Custom AI training', 'Advanced analytics', '24/7 support', 'Dedicated account manager'],
      popular: false
    }
  ];

  const stats = [
    { number: '300%', label: 'Increase in Sales' },
    { number: '80%', label: 'Time Savings' },
    { number: '95%', label: 'Lead Accuracy' },
    { number: '50+', label: 'CRM Integrations' }
  ];

  const useCases = [
    {
      title: 'B2B Lead Generation',
      description: 'Automatically identify and score high-value B2B prospects using AI-powered analysis of company data, website behavior, and engagement patterns.',
      icon: Building
    },
    {
      title: 'E-commerce Upselling',
      description: 'Intelligent product recommendations and automated follow-up sequences to increase average order value and customer lifetime value.',
      icon: ShoppingCart
    },
    {
      title: 'SaaS Trial Conversion',
      description: 'Automated onboarding sequences and personalized engagement strategies to convert free trial users into paying customers.',
      icon: Cloud
    },
    {
      title: 'Real Estate Sales',
      description: 'Lead qualification, automated property matching, and personalized follow-up sequences for real estate professionals.',
      icon: Home
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Sales Automation Solutions - Zion Tech Group"
        description="Revolutionize your sales process with AI-powered automation, lead scoring, and predictive analytics. Increase sales by 300% and save 80% of your time."
        keywords={['AI sales automation', 'lead scoring', 'sales forecasting', 'CRM automation', 'sales analytics']}
        canonicalUrl="https://ziontechgroup.com/ai-sales-automation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Sales Automation Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your sales process with AI-powered automation, intelligent lead scoring, and predictive analytics that drive revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2 inline" />
                Email Us
              </a>
            </div>
          </section>

          {/* Stats Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Powerful Sales Automation Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Perfect for Every Industry
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <useCase.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
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
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to 3x Your Sales Performance?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 1,000+ sales teams already using our AI automation platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2 inline" />
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AISalesAutomationPage;