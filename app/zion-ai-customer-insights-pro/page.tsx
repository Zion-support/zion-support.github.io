'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, BarChart, Brain, Target, Zap, Shield, Globe, Database, Smartphone, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart, Award, Clock, Settings, Calendar, CheckSquare, Lock, TrendingUp as TrendingUpIcon, Cpu, Target as TargetIcon, Globe as GlobeIcon, Database as DatabaseIcon, Smartphone as SmartphoneIcon, Lock as LockIcon, TrendingUp as TrendingUpIcon2, Settings as SettingsIcon, Calendar as CalendarIcon, CheckSquare as CheckSquareIcon, FileText as FileTextIcon, MessageCircle as MessageCircleIcon, Heart as HeartIcon, DollarSign as DollarSignIcon, Box as BoxIcon, Monitor as MonitorIcon, Link as LinkIcon2, Server as ServerIcon, Package as PackageIcon, Mic as MicIcon, Workflow as WorkflowIcon, Eye as EyeIcon, Wifi as WifiIcon, MessageSquare as MessageSquareIcon, CheckCircle as CheckCircleIcon, ShoppingCart as ShoppingCartIcon } from 'lucide-react';

const ZionAiCustomerInsightsProPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Customer Segmentation',
      description: 'Automatically segment customers based on behavior, preferences, and value using advanced machine learning algorithms.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Predict customer lifetime value, churn probability, and purchase likelihood with 95% accuracy.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Target,
      title: 'Personalized Recommendations',
      description: 'Generate personalized product recommendations and marketing campaigns for each customer segment.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Insights',
      description: 'Get instant insights into customer behavior, satisfaction scores, and engagement metrics.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 customers',
        'Basic segmentation',
        'Email support',
        'Standard analytics',
        'API access'
      ],
      color: 'from-gray-500 to-gray-600',
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 customers',
        'Advanced AI segmentation',
        'Predictive analytics',
        'Priority support',
        'Custom integrations',
        'Real-time dashboards'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited customers',
        'Custom AI models',
        'Advanced analytics',
        '24/7 dedicated support',
        'White-label options',
        'Custom development'
      ],
      color: 'from-cyan-500 to-blue-500',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Personalization',
      description: 'Increase conversion rates by 35% with personalized product recommendations and targeted marketing campaigns.',
      icon: ShoppingCart,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'SaaS Customer Success',
      description: 'Reduce churn by 40% by identifying at-risk customers and implementing proactive retention strategies.',
      icon: Users,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Financial Services',
      description: 'Improve loan approval rates by 25% with AI-powered credit risk assessment and customer profiling.',
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Healthcare Analytics',
      description: 'Enhance patient outcomes with predictive health analytics and personalized treatment recommendations.',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Customer Insights Pro - Advanced Customer Analytics Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your customer data into actionable insights with Zion AI Customer Insights Pro. Advanced AI-powered analytics, segmentation, and predictive modeling for better business decisions." />
        <meta name="keywords" content="customer analytics, AI insights, customer segmentation, predictive analytics, customer lifetime value, churn prediction, personalization" />
        <meta property="og:title" content="Zion AI Customer Insights Pro - Advanced Customer Analytics Platform" />
        <meta property="og:description" content="Transform your customer data into actionable insights with AI-powered analytics and predictive modeling." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-customer-insights-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion AI Customer Insights Pro
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Advanced Customer Analytics Platform
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your customer data into actionable insights with AI-powered analytics, 
                predictive modeling, and personalized recommendations that drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI-Driven Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge artificial intelligence to unlock deep insights from your customer data.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
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
                Flexible pricing options to fit your business needs and scale with your growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gray-800 rounded-xl p-8 ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how businesses across industries are using Zion AI Customer Insights Pro to drive growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-lg mb-4`}>
                      <useCase.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Customer Analytics?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses using Zion AI Customer Insights Pro to make data-driven decisions and grow their revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAiCustomerInsightsProPage;