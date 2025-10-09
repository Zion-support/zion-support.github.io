'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { TrendingUp, Target, Users, Zap, Shield, BarChart, Clock, CheckCircle, Star, ArrowRight, Phone, Mail, Building } from 'lucide-react';

const AISalesAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Intelligent Lead Scoring',
      description: 'AI-powered lead scoring that identifies high-value prospects automatically.',
      benefits: ['Behavioral analysis', 'Predictive scoring', 'Real-time updates']
    },
    {
      icon: Zap,
      title: 'Automated Outreach',
      description: 'Personalized email sequences and follow-ups that convert prospects into customers.',
      benefits: ['Personalized content', 'Optimal timing', 'A/B testing']
    },
    {
      icon: BarChart,
      title: 'Sales Analytics',
      description: 'Comprehensive analytics to track performance and optimize your sales process.',
      benefits: ['Real-time dashboards', 'Performance metrics', 'ROI tracking']
    },
    {
      icon: Shield,
      title: 'CRM Integration',
      description: 'Seamless integration with popular CRM systems for unified sales management.',
      benefits: ['Salesforce integration', 'HubSpot support', 'Custom APIs']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small sales teams',
      features: [
        'Up to 1,000 leads/month',
        'Basic automation',
        'Email support',
        'Standard integrations',
        'Basic analytics'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing sales teams',
      features: [
        'Up to 10,000 leads/month',
        'Advanced AI features',
        'Priority support',
        'Advanced integrations',
        'Comprehensive analytics',
        'Custom workflows',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large sales organizations',
      features: [
        'Unlimited leads',
        'Custom AI models',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced security features',
        'White-label options',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: false
    }
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
      icon: TrendingUp
    },
    {
      title: 'Customer Retention',
      description: 'Proactive customer engagement and retention campaigns that reduce churn and increase customer lifetime value.',
      icon: Users
    },
    {
      title: 'Sales Pipeline Management',
      description: 'Automated pipeline tracking, forecasting, and optimization to ensure consistent revenue growth.',
      icon: BarChart
    }
  ];

  const stats = [
    { number: '300%', label: 'Sales Increase' },
    { number: '85%', label: 'Lead Quality' },
    { number: '50%', label: 'Time Saved' },
    { number: '24/7', label: 'Automation' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Sales Automation - Zion Tech Group"
        description="Boost sales by 300% with intelligent lead scoring, automated outreach, and CRM integration. Transform your sales process with AI."
        keywords={['AI sales automation', 'lead scoring', 'sales optimization', 'CRM integration']}
        canonicalUrl="https://ziontechgroup.com/ai-sales-automation"
      />
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Sales Automation
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8">
            Boost sales by 300% with intelligent automation
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Our AI sales automation platform helps you identify high-value prospects, 
            automate outreach, and optimize your entire sales process for maximum results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#demo"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Watch Demo
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Sales Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI sales automation platform combines machine learning, predictive analytics, 
              and intelligent automation to maximize your sales performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Real-World Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI sales automation solutions are transforming businesses across industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="bg-slate-800/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Proven Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-white font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your sales automation needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-400/60 ring-2 ring-cyan-400/20 scale-105' 
                    : 'border-cyan-500/20 hover:border-cyan-400/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Sales?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI sales automation platform 
              to boost their sales performance and revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
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