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
          <div className="max-w-7xl mx-auto">
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
            </div>
          </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AISalesAutomationPage;
