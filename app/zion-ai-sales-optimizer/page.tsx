'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, 
  BarChart, FileText, MessageCircle, Target, CheckSquare, DollarSign, Box, 
  Settings, Heart, Eye, Mic, Workflow, Link as LinkIcon, Wifi, Package, 
  TrendingUp, Calendar, ShoppingCart, Sparkles, Cpu, Globe, Database, 
  Smartphone, Lock, Monitor, Server, Mail, Phone, MapPin, Clock, 
  TrendingDown, Percent, PieChart, Activity, RefreshCw, Zap as ZapIcon
} from 'lucide-react';

const ZionAiSalesOptimizerPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Lead Scoring',
      description: 'Advanced machine learning algorithms analyze customer behavior and engagement patterns to score leads with 95% accuracy.',
      benefits: ['95% lead scoring accuracy', '40% increase in conversion rates', 'Real-time lead prioritization']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: 'Sales Forecasting',
      description: 'Predict future sales performance with AI-driven forecasting models that analyze historical data and market trends.',
      benefits: ['90% forecast accuracy', 'Predict 3-6 months ahead', 'Risk assessment included']
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: 'Personalized Recommendations',
      description: 'AI generates personalized product recommendations and sales strategies for each customer based on their profile and behavior.',
      benefits: ['Personalized approach', 'Higher customer satisfaction', 'Increased average order value']
    },
    {
      icon: <Activity className="w-8 h-8 text-orange-400" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboard with real-time sales metrics, performance indicators, and actionable insights.',
      benefits: ['Real-time monitoring', 'Performance tracking', 'Data-driven decisions']
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-400" />,
      title: 'AI Sales Assistant',
      description: 'Intelligent sales assistant that provides conversation suggestions, objection handling, and follow-up recommendations.',
      benefits: ['Improved sales conversations', 'Better objection handling', 'Consistent follow-ups']
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-indigo-400" />,
      title: 'Automated Workflows',
      description: 'Streamline sales processes with automated workflows for lead nurturing, follow-ups, and customer onboarding.',
      benefits: ['Reduced manual work', 'Consistent processes', 'Higher efficiency']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small sales teams',
      features: [
        'Up to 1,000 leads/month',
        'Basic AI lead scoring',
        'Sales forecasting (1 month)',
        'Email support',
        'Standard analytics dashboard',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing sales teams',
      features: [
        'Up to 5,000 leads/month',
        'Advanced AI lead scoring',
        'Sales forecasting (3 months)',
        'AI sales assistant',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'Team collaboration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large sales organizations',
      features: [
        'Unlimited leads',
        'Premium AI features',
        'Sales forecasting (6 months)',
        'Custom AI models',
        'Dedicated support',
        'Advanced reporting',
        'API access',
        'Custom workflows',
        'White-label options'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '150+', label: 'Sales Teams Using', icon: <Users className="w-6 h-6 text-cyan-400" /> },
    { number: '40%', label: 'Average Sales Increase', icon: <TrendingUp className="w-6 h-6 text-green-400" /> },
    { number: '95%', label: 'Lead Scoring Accuracy', icon: <Target className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'AI Support Available', icon: <Clock className="w-6 h-6 text-blue-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Sales Optimizer - AI-Powered Sales Intelligence Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your sales performance with Zion AI Sales Optimizer. Advanced AI lead scoring, sales forecasting, personalized recommendations, and automated workflows to boost your sales by 40%." />
        <meta name="keywords" content="AI sales optimizer, lead scoring, sales forecasting, sales automation, CRM AI, sales intelligence, sales analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-sales-optimizer" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Zion AI Sales
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Optimizer
                </span>
              </h1>
              <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Transform your sales performance with AI-powered lead scoring, sales forecasting, 
                and personalized recommendations. Boost your sales by up to 40% with intelligent automation.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered Sales Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge artificial intelligence to optimize every aspect of your sales process
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className="flex items-center mb-4">
                      {feature.icon}
                      <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your sales team size and needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border ${
                    plan.popular ? 'border-cyan-500 ring-2 ring-cyan-500/20' : 'border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Sales Performance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of sales teams already using Zion AI Sales Optimizer to boost their performance and close more deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAiSalesOptimizerPage;
