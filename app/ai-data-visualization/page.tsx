'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, PieChart, TrendingUp, Eye } from 'lucide-react';

const AIDataVisualizationPage: React.FC = () => {
  const _features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards that automatically update with real-time data and provide deep insights.',
      benefits: ['Real-time updates', 'Interactive charts', 'Custom layouts', 'Mobile responsive']
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: 'AI-Powered Insights',
      description: 'Let AI analyze your data and automatically generate insights, trends, and recommendations.',
      benefits: ['Automatic insights', 'Trend detection', 'Anomaly detection', 'Predictive analytics']
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Advanced Analytics',
      description: 'Perform complex statistical analysis, forecasting, and predictive modeling with built-in AI algorithms.',
      benefits: ['Statistical analysis', 'Forecasting', 'Predictive modeling', 'Machine learning']
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Visual Storytelling',
      description: 'Transform complex data into compelling visual stories that engage and inform your audience.',
      benefits: ['Story templates', 'Auto-narration', 'Export options', 'Presentation mode']
    }
  ];

  const _pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small teams and individual users',
      features: [
        '5 dashboards',
        'Basic charts',
        'Standard data sources',
        'Email support',
        '1 user',
        '1GB data storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses with moderate data needs',
      features: [
        '25 dashboards',
        'Advanced charts',
        'All data sources',
        'Priority support',
        '10 users',
        '10GB data storage',
        'AI insights',
        'Custom branding',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations with complex data requirements',
      features: [
        'Unlimited dashboards',
        'All chart types',
        'All data sources',
        '24/7 phone support',
        'Unlimited users',
        'Unlimited storage',
        'Advanced AI features',
        'White-label options',
        'Full API access',
        'Custom integrations',
        'Dedicated support'
      ],
      popular: false
    }
  ];

  const _testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Data Analyst',
      company: 'Analytics Corp',
      content: 'Zion Tech Group\'s AI data visualization platform has revolutionized how we present data. The AI insights are incredibly accurate and save us hours of analysis.',
      rating: 5
    },
    {
      name: 'Sarah Davis',
      role: 'Marketing Director',
      company: 'Growth Marketing',
      content: 'The interactive dashboards have transformed our reporting. Our clients love the real-time updates and the visual storytelling capabilities.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO',
      company: 'Data Insights Inc.',
      content: 'The predictive analytics feature helped us identify market trends 3 months ahead of our competitors. It\'s been a game-changer for our business.',
      rating: 5
    }
  ];

  const _stats = [
    { number: '85%', label: 'Faster Insights' },
    { number: '60%', label: 'Time Saved' },
    { number: '95%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'Real-time Updates' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Data Visualization - Zion Tech Group</title>
        <meta name="description" content="Transform complex data into actionable insights with AI-powered visualization tools and interactive dashboards." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Data Visualization
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform complex data into clear, actionable insights with AI-powered visualization tools and interactive dashboards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Interactive Dashboards</h3>
              <p className="text-gray-600">Dynamic, interactive dashboards that adapt to your data.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Automated Insights</h3>
              <p className="text-gray-600">AI-generated insights and pattern recognition in your data.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Real-time Analytics</h3>
              <p className="text-gray-600">Live data visualization and real-time monitoring capabilities.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default AIDataVisualizationPage;