'use client';
import React from 'react';import { Brain, Shield, CheckCircle, Star, Target, BarChart3, Brain, Shield, BarChart3, Star } from 'lucide-react';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


export default function AiFinancialAnalyticsProPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your financial data to provide actionable insights',
      benefits: ['Predictive analytics', 'Risk assessment', 'Trend identification', 'Anomaly detection']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: 'Real-time Analytics',
      description: 'Monitor your financial performance in real-time with comprehensive dashboards and reports',
      benefits: ['Live data updates', 'Custom dashboards', 'Interactive charts', 'Export capabilities']
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'Risk Management',
      description: 'Identify and mitigate financial risks with advanced risk assessment and monitoring tools',
      benefits: ['Risk scoring', 'Early warning systems', 'Compliance monitoring', 'Audit trails']
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      title: 'Goal Tracking',
      description: 'Set and track financial goals with intelligent recommendations and progress monitoring',
      benefits: ['Goal setting', 'Progress tracking', 'Smart recommendations', 'Achievement rewards']
    }
  ];

  const analyticsFeatures = [
    {
      category: 'Financial Analysis',
      items: ['Revenue Analysis', 'Cost Analysis', 'Profitability Analysis', 'Cash Flow Analysis', 'Budget Variance', 'Financial Ratios']
    },
    {
      category: 'Predictive Analytics',
      items: ['Revenue Forecasting', 'Expense Prediction', 'Market Analysis', 'Customer Behavior', 'Risk Assessment', 'Trend Analysis']
    },
    {
      category: 'Reporting & Visualization',
      items: ['Custom Reports', 'Interactive Dashboards', 'Data Visualization', 'Export Options', 'Scheduled Reports', 'Real-time Updates']
    },
    {
      category: 'Integration & Security',
      items: ['API Integration', 'Data Security', 'Compliance Tools', 'Audit Logs', 'User Management', 'Backup & Recovery']
    }
  ];

  const pricingPlans = [
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Perfect for growing businesses',
      features: [
        'Up to 10 data sources',
        'Advanced analytics',
        'Custom dashboards',
        'Email support',
        'Basic reporting',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'Ideal for large organizations',
      features: [
        'Unlimited data sources',
        'AI-powered insights',
        'Custom development',
        'Priority support',
        'Advanced security',
        'White-label solution',
        'Dedicated account manager'
      ],
      popular: true
    },
    {
      name: 'Custom',
      price: 'Contact Us',
      period: '',
      description: 'Tailored solutions',
      features: [
        'Custom features',
        'On-premise deployment',
        '24/7 support',
        'Training & consulting',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Chen',
      company: 'CFO, TechCorp',
      content: 'AI Financial Analytics Pro has revolutionized our financial planning. The predictive insights have helped us make better decisions and increase profitability by 25%.',
      rating: 5
    },
    {
      name: 'Sarah Martinez',
      company: 'Finance Director, Global Inc',
      content: 'The real-time analytics and risk management features are exceptional. We can now identify potential issues before they become problems.',
      rating: 5
    },
    {
      name: 'Michael Johnson',
      company: 'CEO, StartupXYZ',
      content: 'This platform has given us the financial intelligence we needed to scale our business. The AI insights are incredibly accurate and actionable.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Analytics Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered financial analytics platform for comprehensive business intelligence and predictive insights." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Financial Analytics <span className="text-blue-600">Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered financial analytics platform for comprehensive business intelligence, 
              predictive insights, and data-driven decision making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/contact" 
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-gray-400 text-sm flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Analytics Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Analytics Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {analyticsFeatures.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Pricing Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}<span className="text-lg text-gray-300">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600' 
                        : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star className="w-5 h-5 text-yellow-400 fill-current" key={i} />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Financial Analytics?</h2>
            <p className="text-lg text-gray-300 mb-8">Contact us to learn more about our AI financial analytics solutions and how we can help your business make data-driven decisions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Contact Us
              </Link>
              <Link 
                to="/services" 
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}