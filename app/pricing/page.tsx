<<<<<<< HEAD
'use client';
import { CheckCircle, X, Calendar, MessageSquare, ArrowRight, Zap, Brain, Cloud, Shield, Code, BarChart } from 'lucide-react';
=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Phone, ArrowRight, Mail, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174

const PricingPage: React.FC = () => {
<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [billingPeriod, setBillingPeriod] = useState<'month' | 'year'>('month');

  const serviceCategories = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI Services' },
    { id: 'it', name: 'IT Services' },
    { id: 'cloud', name: 'Cloud Solutions' },
    { id: 'security', name: 'Cybersecurity' }
  ];

  const pricingPlans = [
=======
  const plans = [
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
    {
      id: 'starter',
      name: 'Starter',
<<<<<<< HEAD
      price: { monthly: 2999, yearly: 29999 },
      description: 'Perfect for small businesses getting started with AI'
      icon: Zap;
      color: 'text-blue-400'
      bgColor: 'bg-blue-500/10',
      popular: false;
      features: [,
        'AI Content Generation (10,000 words/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        'Standard Security',
        'Up to 5 users',
        'Basic Integrations',
        'Monthly Reports'
      ],
<<<<<<< HEAD
      limitations: [,
        'Limited AI models',
        'No custom training',
        'Basic support only'
      ]
=======
      description: 'Perfect for small businesses getting started',
      price: { month: 999, year: 9999 },
      icon: Target,
      category: 'all',
      features: [
        'Basic AI consultation',
        'IT infrastructure assessment',
        'Email support',
        'Monthly reporting',
        'Basic security audit',
        'Cloud migration planning'
      ],
      popular: false,
      color: 'from-gray-400 to-gray-600'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
=======
      popular: false,
      color: 'from-blue-500 to-cyan-500'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
    },
    {
      id: 'professional',
      name: 'Professional',
<<<<<<< HEAD
      price: { monthly: 7999, yearly: 79999 },
      description: 'Ideal for growing businesses with advanced AI needs'
      icon: Brain;
      color: 'text-purple-400'
      bgColor: 'bg-purple-500/10',
      popular: true;
      features: [,
        'AI Content Generation (50,000 words/month)',
        'Advanced Analytics Dashboard',
        'Priority Support',
<<<<<<< HEAD
        'Enhanced Security',
        'Up to 25 users',
        'Advanced Integrations',
        'Weekly Reports',
        'Custom AI Models',
        'API Access',
        'Training & Onboarding'
      ],
      limitations: [,
        'Limited custom development',
        'Standard SLA',
      ],
=======
      description: 'Ideal for growing businesses',
      price: { month: 2499, year: 24999 },
      icon: Star,
      category: 'all',
      features: [
        'Advanced AI solutions',
        'Full IT management',
        'Priority support',
        'Weekly reporting',
        'Comprehensive security',
        'Cloud optimization',
        'Custom development',
        'Training sessions'
      ],
      popular: true,
      color: 'from-cyan-400 to-blue-500'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
<<<<<<< HEAD
      price: { monthly: 19999, yearly: 199999 },
      description: 'Complete AI solution for large organizations'
      icon: Cloud;
      color: 'text-cyan-400'
      bgColor: 'bg-cyan-500/10'
      popular: false;
      features: [,
        'Unlimited AI Content Generation',
        'Custom Analytics Dashboard',
        '24/7 Dedicated Support',
        'Enterprise Security',
        'Unlimited users',
        'Custom Integrations',
        'Real-time Reports',
        'Custom AI Development',
        'Full API Access',
        'Dedicated Account Manager',
        'Custom Training Programs',
        'SLA Guarantee',
        'White-label Options'
      ],
      limitations: [],
=======
      description: 'For large organizations with complex needs',
      price: { month: 4999, year: 49999 },
      icon: Award,
      category: 'all',
      features: [
        'Custom AI development',
        'Dedicated IT team',
        '24/7 support',
        'Real-time monitoring',
        'Advanced security suite',
        'Multi-cloud strategy',
        'Legacy system integration',
        'Executive consulting',
        'Unlimited training',
        'SLA guarantees'
      ],
      popular: false,
      color: 'from-purple-400 to-pink-500'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
    }
  ];

  const aiServices = [
    {
<<<<<<< HEAD
      name: 'AI Automation Suite',
      description: 'Advanced workflow automation and process optimization',
      price: { monthly: 2000, yearly: 20000 },
      icon: Zap;
    },
    {
      name: 'AI Analytics Pro',
      description: 'Advanced analytics and business intelligence',
      price: { monthly: 1500, yearly: 15000 },
      icon: BarChart;
    },
    {
      name: 'AI Security Suite',
      description: 'Enhanced security and compliance features',
      price: { monthly: 1000, yearly: 10000 },
      icon: Shield;
    },
    {
      name: 'Custom Development',
      description: 'Bespoke AI solutions and integrations',
      price: { monthly: 5000, yearly: 50000 },
      icon: Code;
=======
      name: 'AI Marketing Automation',
      price: { month: 599, year: 5999 },
      description: 'Automate your marketing campaigns with AI',
      features: ['Campaign optimization', 'Customer segmentation', 'Content generation', 'Performance analytics']
    },
    {
      name: 'AI Data Analytics',
      price: { month: 799, year: 7999 },
      description: 'Transform data into actionable insights',
      features: ['Predictive modeling', 'Real-time dashboards', 'Custom reports', 'Data visualization']
    },
    {
      name: 'AI Customer Support',
      price: { month: 499, year: 4999 },
      description: 'AI-powered customer service solutions',
      features: ['Chatbot implementation', 'Ticket routing', 'Sentiment analysis', '24/7 availability']
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
=======
        'Weekly Reports',
        'Up to 25 Users',
        'Enhanced Security',
        'Advanced Analytics',
        'Custom Integrations',
        'Dedicated Account Manager'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom AI Development',
        '24/7 Support',
        'Real-time Reports',
        'Unlimited Users',
        'Enterprise Security',
        'Custom Analytics',
        'Full Integration Support',
        'Dedicated Team',
        'SLA Guarantee'
      ],
      popular: false,
      color: 'from-green-500 to-teal-500'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
    }
  ];

  const itServices = [
    {
      name: 'IT Infrastructure Management',
      price: { month: 1299, year: 12999 },
      description: 'Complete IT infrastructure oversight',
      features: ['Server management', 'Network monitoring', 'Backup solutions', 'Performance optimization']
    },
    {
<<<<<<< HEAD
      question: 'What happens if I exceed my usage limits?',
      answer: 'We\'ll notify you when you\'re approaching your limits. You can either upgrade your plan or purchase additional capacity as needed.',
=======
      name: 'Cloud Migration & Setup',
      price: { month: 1999, year: 19999 },
      description: 'Seamless cloud migration services',
      features: ['AWS/Azure/GCP setup', 'Data migration', 'Security configuration', 'Cost optimization']
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
    },
    {
      name: 'Cybersecurity Suite',
      price: { month: 899, year: 8999 },
      description: 'Comprehensive security solutions',
      features: ['Threat monitoring', 'Vulnerability scanning', 'Incident response', 'Compliance management']
    }
  ];

  const filteredPlans = pricingPlans.filter(plan => 
    selectedCategory === 'all' || plan.category === selectedCategory
  );

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'pricing_phone_number',
      });
    }
  };

<<<<<<< HEAD
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div>
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></section><div className="container mx-auto px-4 relative z-10"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">Pricing Plans</h1><p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">Choose the perfect plan for your business. All plans include our core AI services</p>
              with flexible options to scale as you grow.</p>
=======
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg: py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Pricing Plans;
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Choose the perfect plan for your business. All plans include our core AI services;
              with flexible options to scale as you grow.
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">14-Day Free Trial</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">No Setup Fees</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
                <ArrowRight className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Cancel Anytime</span>
              </div>)
            </div>)
          </div>)
        </div>)
      </section>),
),
      {/* Billing Toggle */}
      <section className="py-8">
<<<<<<< HEAD
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-slate-800/50 rounded-lg p-1 flex">
<<<<<<< HEAD
=======
        <div className="container mx-auto px-4"></section>
          <div className="flex justify-center"></div>
            <div className="bg-slate-800/50 rounded-lg p-1 flex"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              <button
                onClick={() =>setBillingCycle('monthly')}
=======
              <button;
                onClick={() => setBillingCycle('monthly')}
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-cyan-500 text-white'}
                    : 'text-gray-400 hover:text-white'}
                }`}
<<<<<<< HEAD
              ></button>
                Monthly<button
                onClick={() =>setBillingCycle('yearly')}
=======
              >
                Monthly;
              </button>
              <button;
                onClick={() => setBillingCycle('yearly')}
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-cyan-500 text-white'}
                    : 'text-gray-400 hover:text-white'}
                }`}
<<<<<<< HEAD
              ></button>
                Yearly<span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded">Save 17%</span>
=======
              >
                Yearly;
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded">
                  Save 17%
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                </span>
              </button>
=======
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Transparent pricing for AI and IT services. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, AI services pricing, IT services cost, cloud solutions pricing, cybersecurity pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include our commitment to excellence and ongoing support.
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-1 border border-white/20">
                <button
                  onClick={() => setBillingPeriod('month')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                    billingPeriod === 'month'
                      ? 'bg-cyan-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('year')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                    billingPeriod === 'year'
                      ? 'bg-cyan-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Yearly <span className="text-cyan-400 text-sm">(Save 20%)</span>
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
            </div>

<<<<<<< HEAD
      {/* Pricing Plans */}
      <section className="py-20">
<<<<<<< HEAD
        <div className="container mx-auto px-4">
<<<<<<< HEAD
=======
        <div className="container mx-auto px-4"></section>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">{plans.map((plan, index) => {
              const savings = calculateSavings(plan.price.monthly, plan.price.yearly);</div>
              return (<div
=======
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-7xl mx-auto">,
            {plans.map((plan, index) => {
              const savings = calculateSavings(plan.price.monthly, plan.price.yearly);
              return(<div;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                  key={index}
                  className={`relative bg-slate-800/50 rounded-lg p-8 ${}
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}
                  } hover:bg-slate-700/50 transition-all duration-300`}
<<<<<<< HEAD
                >{plan.popular && (</div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</div>
=======
            {/* Pricing Plans */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {filteredPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-400/50 ring-2 ring-cyan-400/20'
                      : 'border-white/20 hover:border-cyan-400/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
                      </div>
                    </div>
=======
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">)
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">)
                        Most Popular;)
                      </div>)
                    </div>)
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                  )}
<<<<<<< HEAD

                  <div className="text-center mb-8"></div>
                    <div className={`w-16 h-16 ${plan.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}></div>
                      <plan.icon className={`w-8 h-8 ${plan.color}`} /></p>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-4"></div>
                      <span className="text-4xl font-bold text-white">${plan.price[billingCycle as keyof typeof plan.price].toLocaleString()}</span><span className="text-gray-400 ml-2">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400 text-sm font-medium">Save ${savings.savings.toLocaleString()} ({savings.percentage}% off)</div>
                      </div>
                    )}
                  </div>

<<<<<<< HEAD
                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-semibold text-white mb-3">What's included: </h4>,
=======
                  <div className="space-y-4 mb-8"></div>
                    <h4 className="text-lg font-semibold text-white mb-3">What's included:</h4>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3"></div>
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-start space-x-3"></div>
                        <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{limitation}</span>
                      </div>
                    ))}
<<<<<<< HEAD
                  <button
                    onClick={() =>setSelectedPlan(plan.name.toLowerCase())}
=======
                  </div>

                  <button;
                    onClick={() => setSelectedPlan(plan.name.toLowerCase())}
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                    className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                      plan.popular;
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover: from-cyan-600 hover:to-purple-700',}
                        : 'bg-slate-700 text-white hover:bg-slate-600'}
                    }`}
                  ></button>
                    {selectedPlan === plan.name.toLowerCase() ? 'Selected' : 'Choose Plan'}</button>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-slate-800/50">
<<<<<<< HEAD
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Add-on Services<p className="text-lg text-gray-300 max-w-3xl mx-auto">Enhance your plan with additional services and features<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{addOns.map((addon, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
=======
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Add-on Services</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Enhance your plan with additional services and features</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{addOns.map((addon, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <addon.icon className="w-6 h-6 text-white" />
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p><div className="text-2xl font-bold text-white mb-4">${addon.price[billingCycle as keyof typeof addon.price].toLocaleString()}</div><span className="text-gray-400 text-sm ml-1">/{billingCycle === 'monthly' ? 'month' : 'year'}</span><button className="w-full bg-slate-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-slate-600 transition-colors">Add to Plan</button>
                </button>
              </div>
=======
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Add-on Services;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Enhance your plan with additional services and features;
            </p>,
          </div>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
            {addOns.map((addon, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover: bg-slate-700/50 transition-all duration-300">,
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">,
                  <addon.icon className="w-6 h-6 text-white" />,
                </div>,
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-white mb-4">
                  ${addon.price[billingCycle as keyof typeof addon.price].toLocaleString()}
                  <span className="text-gray-400 text-sm ml-1">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                <button className="w-full bg-slate-700 text-white py-2 px-4 rounded-lg font-medium hover: bg-slate-600 transition-colors">
                  Add to Plan;
                </button>,
              </div>,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
<<<<<<< HEAD
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Frequently Asked Questions<p className="text-lg text-gray-300 max-w-3xl mx-auto">Common questions about our pricing and plans</p>
=======
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Common questions about our pricing and plans</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            </p>
          </div>
          <div className="max-w-4xl mx-auto"></div>
            <div className="space-y-6">{faqs.map((faq, index) => (</div>
<<<<<<< HEAD
=======
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Frequently Asked Questions;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Common questions about our pricing and plans;
            </p>
          </div>,
          <div className="max-w-4xl mx-auto">,
            <div className="space-y-6">,
              {faqs.map((faq, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}<p className="text-gray-300">{faq.answer}</p>
=======
                <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3><p className="text-gray-300">{faq.answer}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                </div>
=======
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center mb-6`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ${plan.price[billingPeriod].toLocaleString()}
                    </span>
                    <span className="text-gray-300 ml-2">
                      /{billingPeriod === 'month' ? 'month' : 'year'}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
<<<<<<< HEAD
        <div className="container mx-auto px-4 text-center">
<<<<<<< HEAD
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Get Started?<p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Start your 14-day free trial today. No credit card required, cancel anytime.</p>
=======
          <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">,
            Ready to Get Started?,
          </h2>,
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">,
            Start your 14-day free trial today. No credit card required, cancel anytime.
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <a;
=======
        <div className="container mx-auto px-4 text-center"></section>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2><p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Start your 14-day free trial today. No credit card required, cancel anytime.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
<<<<<<< HEAD
              <MessageSquare className="w-5 h-5 mr-2" >Start Free Trial</MessageSquare>
            </MessageSquare>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" >Schedule Demo</Calendar>
            </Calendar>
=======
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Trial;
            </a>
            <a;
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo;
            </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
          </div>
        </div>
      </section>,
    </div>,
=======
        {/* AI Services Pricing */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized AI solutions with transparent pricing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-cyan-400">
                      ${service.price[billingPeriod].toLocaleString()}
                    </span>
                    <span className="text-gray-300 ml-2">
                      /{billingPeriod === 'month' ? 'month' : 'year'}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full border-2 border-cyan-400 text-cyan-400 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional IT services with competitive pricing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-cyan-400">
                      ${service.price[billingPeriod].toLocaleString()}
                    </span>
                    <span className="text-gray-300 ml-2">
                      /{billingPeriod === 'month' ? 'month' : 'year'}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full border-2 border-cyan-400 text-cyan-400 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We offer tailored solutions for unique business requirements. Contact us for a personalized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
=======
        <meta name="description" content="Transparent pricing for our AI and IT solutions. Choose the plan that fits your business needs." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI and IT solutions with no hidden fees.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-400/50 ring-2 ring-cyan-400/20'
                    : 'border-white/20 hover:border-cyan-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Can I change my plan later?
                </h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-300">
                  We accept all major credit cards, bank transfers, and can accommodate enterprise payment terms.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Is there a free trial available?
                </h3>
                <p className="text-gray-300">
                  Yes, we offer a 14-day free trial for all plans. No credit card required to get started.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  What support is included?
                </h3>
                <p className="text-gray-300">
                  All plans include email support. Professional and Enterprise plans include priority support and dedicated account management.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your specific needs and get a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
  );
};

export default PricingPage;