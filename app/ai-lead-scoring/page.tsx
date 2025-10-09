'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Brain, TrendingUp, CheckCircle, DollarSign, Users, Shield, Globe, ArrowRight, Phone, Mail, MapPin, Star, Award, Zap, BarChart, MessageSquare, Eye, Sparkles, Database, Cpu } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AILeadScoringPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Lead Analysis',
      description: 'Advanced machine learning algorithms analyze lead behavior, demographics, and engagement patterns to predict conversion probability',
      benefits: ['95% accuracy in lead scoring', 'Real-time lead analysis', 'Behavioral pattern recognition', 'Predictive conversion modeling']
    },
    {
      icon: Target,
      title: 'Intelligent Lead Prioritization',
      description: 'Automatically prioritize leads based on AI insights, ensuring your sales team focuses on the most promising prospects',
      benefits: ['Automated lead ranking', 'Priority-based workflows', 'Sales team optimization', 'Increased conversion rates']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics & Insights',
      description: 'Comprehensive analytics dashboard with AI-driven insights to optimize your lead generation and sales processes',
      benefits: ['Lead source analysis', 'Conversion funnel insights', 'ROI optimization', 'Performance forecasting']
    },
    {
      icon: Zap,
      title: 'Automated Lead Nurturing',
      description: 'AI-powered automated follow-up sequences and personalized content delivery based on lead behavior and preferences',
      benefits: ['Automated email sequences', 'Personalized content', 'Behavior-triggered actions', 'Multi-channel nurturing']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 leads/month',
        'Basic AI scoring models',
        'Standard analytics dashboard',
        'Email support',
        'Basic integrations',
        'Lead scoring API',
        'Mobile app access',
        '5 team members'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing sales teams and agencies',
      features: [
        'Up to 10,000 leads/month',
        'Advanced AI models',
        'Custom scoring criteria',
        'Priority support',
        'Advanced integrations',
        'Custom analytics',
        'Automated workflows',
        'Unlimited team members',
        'A/B testing tools',
        'Lead enrichment'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with complex sales processes',
      features: [
        'Unlimited leads',
        'Custom AI model training',
        'White-label solution',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced reporting suite',
        'Multi-tenant architecture',
        'Dedicated account manager',
        'On-premise deployment',
        'Custom data sources'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'Salesforce', icon: '☁️', description: 'CRM integration' },
    { name: 'HubSpot', icon: '🎯', description: 'Marketing automation' },
    { name: 'Pipedrive', icon: '📊', description: 'Sales pipeline management' },
    { name: 'Zapier', icon: '⚡', description: 'Workflow automation' },
    { name: 'Mailchimp', icon: '📧', description: 'Email marketing' },
    { name: 'LinkedIn', icon: '💼', description: 'Professional networking' },
    { name: 'Google Analytics', icon: '📈', description: 'Website analytics' },
    { name: 'Facebook Ads', icon: '📱', description: 'Social media advertising' }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      role: 'Sales Director, TechCorp',
      content: 'AI Lead Scoring increased our conversion rate by 45% and helped us identify the highest-value prospects. Our sales team is now 3x more efficient.',
      rating: 5,
      improvement: '45% conversion increase'
    },
    {
      name: 'Michael Torres',
      role: 'Marketing Manager, GrowthCo',
      content: 'The AI insights helped us understand which lead sources generate the highest quality prospects. We optimized our marketing spend and increased ROI by 60%.',
      rating: 5,
      improvement: '60% ROI increase'
    },
    {
      name: 'Sarah Kim',
      role: 'CEO, StartupXYZ',
      content: 'Before AI Lead Scoring, we were wasting time on low-probability leads. Now we focus on the right prospects and close deals 50% faster.',
      rating: 5,
      improvement: '50% faster closing'
    }
  ];

  const useCases = [
    {
      industry: 'B2B Sales',
      description: 'Identify and prioritize high-value prospects for complex B2B sales cycles',
      benefits: ['Account-based scoring', 'Decision maker identification', 'Engagement tracking', 'Pipeline optimization']
    },
    {
      industry: 'E-commerce',
      description: 'Score website visitors and email subscribers to identify purchase-ready customers',
      benefits: ['Behavioral analysis', 'Purchase intent prediction', 'Cart abandonment recovery', 'Personalized recommendations']
    },
    {
      industry: 'SaaS',
      description: 'Score trial users and freemium customers to identify conversion opportunities',
      benefits: ['Usage pattern analysis', 'Feature adoption tracking', 'Churn prediction', 'Upsell opportunities']
    },
    {
      industry: 'Real Estate',
      description: 'Score leads from various sources to identify serious buyers and sellers',
      benefits: ['Property interest analysis', 'Budget qualification', 'Timeline assessment', 'Agent assignment']
    }
  ];

  const scoringFactors = [
    {
      category: 'Demographic Data',
      factors: ['Company size', 'Industry', 'Job title', 'Location', 'Company revenue'],
      weight: '25%'
    },
    {
      category: 'Behavioral Data',
      factors: ['Website visits', 'Page views', 'Time on site', 'Download behavior', 'Email engagement'],
      weight: '35%'
    },
    {
      category: 'Engagement Data',
      factors: ['Email opens', 'Click-through rates', 'Social media interaction', 'Content consumption', 'Event attendance'],
      weight: '25%'
    },
    {
      category: 'Intent Data',
      factors: ['Search keywords', 'Content topics', 'Pricing page visits', 'Contact form submissions', 'Demo requests'],
      weight: '15%'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Lead Scoring - Intelligent Lead Qualification & Sales Optimization | Zion Tech Group"
        description="Transform your sales process with AI-powered lead scoring. Increase conversion rates by 45%, identify high-value prospects, and optimize your sales team's efficiency with intelligent lead qualification."
        keywords={['AI lead scoring', 'lead qualification', 'sales optimization', 'lead intelligence', 'conversion optimization', 'sales automation']}
        canonicalUrl="https://ziontechgroup.com/ai-lead-scoring"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                AI-Powered Lead Intelligence
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
                AI Lead Scoring
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your sales process with intelligent lead scoring. Identify high-value prospects, 
                increase conversion rates by 45%, and optimize your sales team's efficiency with AI-powered insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#pricing"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-cyan-400 mb-2">45%</div>
                <div className="text-gray-300">Conversion Increase</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300">Scoring Accuracy</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-pink-400 mb-2">3x</div>
                <div className="text-gray-300">Sales Efficiency</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
                <div className="text-gray-300">ROI Improvement</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4" id="features">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to revolutionize your lead qualification process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scoring Factors Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Comprehensive Scoring Factors
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI analyzes multiple data points to provide accurate lead scoring
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {scoringFactors.map((category, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{category.category}</h3>
                    <span className="text-cyan-400 font-bold">{category.weight}</span>
                  </div>
                  <ul className="space-y-2">
                    {category.factors.map((factor, factorIndex) => (
                      <li key={factorIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" />
                        {factor}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored lead scoring solutions for different industries and business models
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your existing sales and marketing tools
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">{integration.icon}</div>
                  <div className="text-sm text-white font-medium mb-1">{integration.name}</div>
                  <div className="text-xs text-gray-400">{integration.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4" id="pricing">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your lead volume and business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in AI Lead Scoring ${plan.name} Plan`}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of sales teams already using AI Lead Scoring to optimize their processes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                    </div>
                    <div className="text-green-400 font-semibold text-sm">{testimonial.improvement}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Start your free trial today and experience the power of AI-driven lead scoring
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Lead Scoring Free Trial Request"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-cyan-100">
              <p>Contact: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AILeadScoringPage;