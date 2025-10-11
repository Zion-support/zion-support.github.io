'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Brain, BarChart, Target, TrendingUp, Zap, Eye, Users, ArrowRight, Star, Clock, DollarSign } from 'lucide-react';

const AiAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your data to provide actionable insights and predictions.',
      benefits: ['Predictive analytics', 'Pattern recognition', 'Anomaly detection', 'Smart recommendations']
    },
    {
      icon: BarChart,
      title: 'Real-time Dashboards',
      description: 'Comprehensive analytics dashboards with real-time data visualization and monitoring.',
      benefits: ['Live data updates', 'Custom dashboards', 'Interactive charts', 'Mobile responsive']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI-powered insights to optimize your business performance and identify growth opportunities.',
      benefits: ['Performance metrics', 'Trend analysis', 'Growth forecasting', 'ROI tracking']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision using advanced analytics and segmentation.',
      benefits: ['Goal tracking', 'Audience segmentation', 'Campaign optimization', 'Success metrics']
    }
  ];

  const analyticsTypes = [
    {
      icon: Users,
      title: 'Customer Analytics',
      description: 'Understand your customers better with detailed behavioral and demographic insights.',
      features: ['Customer segmentation', 'Behavior analysis', 'Churn prediction', 'Lifetime value']
    },
    {
      icon: DollarSign,
      title: 'Revenue Analytics',
      description: 'Track and optimize your revenue streams with comprehensive financial analytics.',
      features: ['Revenue tracking', 'Profit analysis', 'Cost optimization', 'Financial forecasting']
    },
    {
      icon: Eye,
      title: 'Marketing Analytics',
      description: 'Measure and optimize your marketing campaigns with detailed performance metrics.',
      features: ['Campaign performance', 'Attribution modeling', 'Conversion tracking', 'ROI analysis']
    },
    {
      icon: Zap,
      title: 'Operational Analytics',
      description: 'Monitor and optimize your business operations with real-time operational insights.',
      features: ['Process optimization', 'Efficiency metrics', 'Resource utilization', 'Performance monitoring']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Enhanced security and compliance',
    'Seamless integration with existing systems',
    '24/7 monitoring and support'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with analytics',
      features: [
        'Basic dashboards',
        '5 data sources',
        'Email support',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses with complex analytics needs',
      features: [
        'Advanced dashboards',
        'Unlimited data sources',
        'Priority support',
        'Real-time analytics',
        'Custom reports'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with extensive analytics requirements',
      features: [
        'Custom dashboards',
        'API access',
        'Dedicated support',
        'Custom integrations',
        'Advanced AI features'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics | Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics platform. Real-time dashboards, predictive analytics, and intelligent reporting." />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, predictive analytics, real-time dashboards" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Analytics Platform
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our advanced AI-powered analytics platform. Make data-driven decisions with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  View Demo
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
                Powerful AI Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Leverage cutting-edge AI technology to unlock insights from your data and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-400">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Types Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Analytics Types
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Comprehensive analytics solutions for every aspect of your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {analyticsTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center">
                  <type.icon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-1">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Analytics?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the power of AI-driven analytics and transform your business with data-driven insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Choose the plan that fits your analytics needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    plan.popular
                      ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Start your free trial today and discover how AI analytics can revolutionize your business decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AiAnalyticsPage;