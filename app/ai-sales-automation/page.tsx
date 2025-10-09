'use client';
import React from 'react';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { TrendingUp, Target, Users, BarChart, Zap, Brain, Phone, Mail, CheckCircle, Star, ArrowRight, DollarSign, Clock, Shield, Building, ShoppingCart, Cloud, Home } from 'lucide-react';
=======
import { CheckCircle, Star, TrendingUp, Users, Target, BarChart3 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4856
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
      title: 'Sales Pipeline Management',
      description: 'Intelligent pipeline management that optimizes deals and predicts closing probabilities.',
      benefits: ['Deal Tracking', 'Probability Prediction', 'Pipeline Optimization', 'Performance Analytics']
    },
    {
      icon: TrendingUp,
      title: 'Revenue Forecasting',
      description: 'Advanced forecasting models that predict revenue with high accuracy using AI algorithms.',
      benefits: ['Accurate Predictions', 'Trend Analysis', 'Risk Assessment', 'Scenario Planning']
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics dashboard that provides insights into sales performance and opportunities.',
      benefits: ['Real-time Metrics', 'Performance Tracking', 'ROI Analysis', 'Team Insights']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$399/month',
      description: 'Perfect for small sales teams',
      features: ['Up to 5 users', 'Basic lead scoring', 'Pipeline management', 'Email support']
    },
    {
      name: 'Professional',
      price: '$799/month',
      description: 'Ideal for growing sales teams',
      features: ['Up to 25 users', 'Advanced AI features', 'Revenue forecasting', 'Priority support', 'API access']
    },
    {
      name: 'Enterprise',
      price: '$1,599/month',
      description: 'For large sales organizations',
      features: ['Unlimited users', 'Custom AI training', 'Advanced analytics', '24/7 support', 'Dedicated account manager']
    }
  ];
<<<<<<< HEAD
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
      description: 'Automated onboarding sequences and personalized engagement to convert free trial users into paying customers.',
      icon: Cloud
    },
    {
      title: 'Real Estate Lead Nurturing',
      description: 'AI-powered lead nurturing for real estate agents with automated follow-ups, market updates, and personalized property recommendations.',
      icon: Home
    }
  ];
  return (
    <>
      <SEOOptimizer
        title="AI Sales Automation Platform - Zion Tech Group"
        description="Revolutionary AI sales automation that increases revenue by 300% and saves 80% of sales time. Lead scoring, automated outreach, and CRM integration."
        keywords={['AI sales automation', 'lead scoring', 'sales CRM', 'automated outreach', 'sales analytics']}
        canonicalUrl="https://ziontechgroup.com/ai-sales-automation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Sales Automation Platform
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Boost sales by 300% with intelligent automation
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI-powered sales automation platform combines intelligent lead scoring, automated outreach, 
                and advanced analytics to help sales teams close more deals in less time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Demo</span>
                </a>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
=======

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Sales Automation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Automate and optimize your sales process with AI-powered lead scoring, 
              pipeline management, and revenue forecasting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center space-x-2"
              >
                <Target className="w-4 h-4" />
                <span>Get Started</span>
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Learn More
              </a>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4856
            </div>
          </section>
          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
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
<<<<<<< HEAD
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
=======

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4856
          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Pricing Plans
            </h2>
<<<<<<< HEAD
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
=======
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 ${index === 1 ? 'ring-2 ring-cyan-400' : ''}`}>
                  {index === 1 && (
                    <div className="text-center mb-4">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4856
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
<<<<<<< HEAD
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
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
=======
          <section className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 cyber-card">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Automate Your Sales?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact us today to learn how AI sales automation can boost your revenue and efficiency.
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
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4856
  );
};

export default AISalesAutomationPage;
