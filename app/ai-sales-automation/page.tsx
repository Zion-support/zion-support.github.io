'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, Users, Target } from 'lucide-react';

const AISalesAutomationPage: React.FC = () => {
  const _features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Lead Scoring & Qualification',
      description: 'Automatically score and qualify leads using AI to identify the most promising prospects and prioritize your sales efforts.',
      benefits: ['Automated lead scoring', 'Smart qualification', 'Priority ranking', 'Conversion optimization']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Customer Segmentation',
      description: 'Intelligently segment your customer base to deliver personalized experiences and targeted marketing campaigns.',
      benefits: ['Dynamic segmentation', 'Behavioral analysis', 'Personalized outreach', 'Campaign optimization']
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Sales Forecasting',
      description: 'Predict sales outcomes with high accuracy using machine learning algorithms and historical data analysis.',
      benefits: ['Accurate predictions', 'Revenue forecasting', 'Risk assessment', 'Performance tracking']
    }
  ];

  const _pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      features: ['Basic automation', 'Lead scoring', 'Email campaigns', 'Standard support'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      features: ['Advanced AI features', 'Custom workflows', 'Analytics dashboard', 'Priority support'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: ['Full AI capabilities', 'Custom integrations', 'Dedicated support', 'White-label solution'],
      popular: false
    }
  ];

  const _testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Sales Director',
      company: 'SalesPro Inc',
      content: 'Our sales team productivity increased by 250% with AI automation. Lead conversion rates are through the roof!',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'VP of Sales',
      company: 'GrowthCorp',
      content: 'The forecasting accuracy is incredible. We can now predict quarterly results with 95% accuracy.',
      rating: 5
    }
  ];

  const _stats = [
    { label: 'Lead Conversion Rate', value: '+180%' },
    { label: 'Sales Productivity', value: '+250%' },
    { label: 'Forecasting Accuracy', value: '95%' },
    { label: 'Customer Satisfaction', value: '98%' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Sales Automation - Zion Tech Group</title>
        <meta name="description" content="Automate your sales process with AI-powered tools for lead scoring, customer segmentation, and sales forecasting." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Sales Automation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Automate your sales process with AI-powered tools that increase conversion rates and boost revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {_features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Automate Your Sales?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Start increasing your sales efficiency today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AISalesAutomationPage;