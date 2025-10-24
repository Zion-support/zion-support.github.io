'use client'
import { BarChart, Target, TrendingUp } from 'lucide-react';
import React from 'react';
import { CheckCircle, Star, BarChart, TrendingUp, Target } from 'lucide-react';

const BusinessIntelligencePage: React.FC = () => {
  const biServices = [
    {
      id: 'data-analytics',
      title: 'Advanced Data Analytics',
      description: 'Transform raw data into actionable insights with our comprehensive analytics solutions.',
      features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards', 'Data visualization'],
      benefits: ['Data-driven decisions', 'Improved efficiency', 'Better forecasting', 'Competitive advantage'],
      marketPrice: '$1,200-3,500/month',
      category: 'Data Analytics',
      price: '$799/month',
      icon: '📊'
    },
    {
      id: 'business-intelligence',
      title: 'AI Business Intelligence',
      description: 'Intelligent business intelligence platform with automated reporting and insights.',
      features: ['Automated reporting', 'KPI tracking', 'Performance monitoring', 'Strategic planning'],
      benefits: ['Faster decision making', 'Reduced manual work', 'Better visibility', 'Improved ROI'],
      marketPrice: '$2,000-5,000/month',
      category: 'Business Intelligence',
      price: '$1,299/month',
      icon: '🧠'
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics',
      description: 'Forecast future trends and outcomes with advanced machine learning models.',
      features: ['Trend forecasting', 'Risk assessment', 'Demand planning', 'Scenario modeling'],
      benefits: ['Proactive planning', 'Risk mitigation', 'Better resource allocation', 'Competitive edge'],
      marketPrice: '$1,500-4,000/month',
      category: 'Predictive Analytics',
      price: '$999/month',
      icon: '🔮'
    }
  ];

  const features = [
    {
      icon: <BarChart className="w-8 h-8 text-blue-600" />,
      title: 'Real-time Dashboards',
      description: 'Monitor your business performance with live, interactive dashboards.'
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: 'Goal Tracking',
      description: 'Set and track business goals with automated progress monitoring.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: 'Growth Analytics',
      description: 'Identify growth opportunities with advanced analytics and insights.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Business Intelligence Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business data into actionable insights with our comprehensive 
              business intelligence platform powered by AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Business Intelligence Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive BI solutions designed for modern enterprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Star className="w-5 h-5 text-yellow-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our BI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for data-driven organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business Intelligence?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join leading enterprises using our BI solutions to make smarter decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </button>
            <button className="border border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessIntelligencePage;