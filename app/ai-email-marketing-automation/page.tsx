'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Star, Users, TrendingUp, Clock, DollarSign, Send, Target, BarChart3 } from 'lucide-react';

const AIEmailMarketingAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Creation',
      description: 'Generate compelling email subject lines, content, and CTAs using advanced AI algorithms'
    },
    {
      icon: Target,
      title: 'Smart Segmentation',
      description: 'Automatically segment your audience based on behavior, preferences, and engagement'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'AI-powered insights to predict customer behavior and optimize send times'
    },
    {
      icon: Send,
      title: 'Automated Workflows',
      description: 'Create complex email sequences that trigger based on user actions and preferences'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 contacts',
        'Unlimited emails',
        'AI content generation',
        'Basic automation',
        'Email templates',
        'Analytics dashboard'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50,000 contacts',
        'Advanced AI features',
        'Smart segmentation',
        'A/B testing',
        'Advanced automation',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Custom AI training',
        'Advanced analytics',
        'API access',
        'White-label options',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const benefits = [
    'Increase email open rates by up to 40%',
    'Save 15+ hours per week on email marketing',
    'AI-optimized subject lines and content',
    'Automated lead nurturing sequences',
    'Advanced segmentation and personalization',
    'Real-time performance analytics',
    'A/B testing for continuous optimization',
    'Integration with 100+ popular tools'
  ];

  const automationWorkflows = [
    {
      name: 'Welcome Series',
      description: 'Automatically welcome new subscribers with a 5-email sequence',
      icon: Users
    },
    {
      name: 'Abandoned Cart Recovery',
      description: 'Re-engage customers who left items in their cart',
      icon: ShoppingCart
    },
    {
      name: 'Re-engagement Campaign',
      description: 'Win back inactive subscribers with targeted content',
      icon: RefreshCw
    },
    {
      name: 'Birthday & Anniversary',
      description: 'Send personalized messages on special occasions',
      icon: Gift
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Email Marketing Automation | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered email marketing automation platform. Increase open rates, automate workflows, and grow your business with intelligent email campaigns." />
        <meta name="keywords" content="AI email marketing, email automation, email campaigns, marketing automation, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Email Marketing
              </span>
              <br />
              <span className="text-white">Automation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your email marketing with AI-powered automation. 
              Create, send, and optimize email campaigns that convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Email Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI technology creates personalized, engaging emails that drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Workflows */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pre-Built Automation Workflows
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started quickly with our ready-to-use email automation sequences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationWorkflows.map((workflow, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mb-4">
                  <workflow.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{workflow.name}</h3>
                <p className="text-gray-300">{workflow.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your email marketing needs. All plans include our core AI features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-400 scale-105 shadow-2xl shadow-purple-500/25' 
                  : 'border-white/20 hover:border-white/40'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                    : 'border border-white text-white hover:bg-white hover:text-gray-900'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Email Marketing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses already using our platform to grow their email marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Start your free 14-day trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call: (302) 464-0950
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
            <p className="text-purple-200 text-sm mt-4">
              📍 364 E Main St STE 1008, Middletown, DE 19709
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEmailMarketingAutomationPage;