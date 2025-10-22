'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, PieChart, Eye } from 'lucide-react';

const AIDataVisualizationPage: React.FC = () => {
  const _features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive data visualizations with real-time updates and customizable charts.',
      benefits: ['Real-time data', 'Customizable charts', 'Interactive elements', 'Export capabilities']
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: 'Advanced Analytics',
      description: 'Leverage AI-powered analytics to uncover insights and trends in your data automatically.',
      benefits: ['AI-powered insights', 'Trend analysis', 'Predictive modeling', 'Pattern recognition']
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Visual Intelligence',
      description: 'Transform complex data into intuitive visual representations that anyone can understand.',
      benefits: ['Intuitive design', 'Complex data simplification', 'Visual storytelling', 'User-friendly interface']
    }
  ];

  const _pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      features: ['Basic visualizations', '5 data sources', 'Standard support'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      features: ['Advanced analytics', 'Unlimited data sources', 'Priority support', 'Custom dashboards'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: ['Full AI capabilities', 'White-label solution', 'Dedicated support', 'Custom integrations'],
      popular: false
    }
  ];

  const _testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Data Analyst',
      company: 'TechCorp',
      content: 'The AI data visualization tools have revolutionized how we present data to stakeholders.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Business Intelligence Manager',
      company: 'DataFlow Inc',
      content: 'Incredible insights and beautiful visualizations. Our team productivity increased by 300%.',
      rating: 5
    }
  ];

  const _stats = [
    { label: 'Data Sources Supported', value: '50+' },
    { label: 'Visualization Types', value: '25+' },
    { label: 'Processing Speed', value: '10x Faster' },
    { label: 'Customer Satisfaction', value: '98%' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Data Visualization - Zion Tech Group</title>
        <meta name="description" content="Transform your data into stunning visualizations with our AI-powered data visualization platform." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Data Visualization
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform complex data into stunning, interactive visualizations with our advanced AI-powered platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {_features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Visualize Your Data?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Start creating stunning data visualizations today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
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

export default AIDataVisualizationPage;