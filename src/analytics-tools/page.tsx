import React from 'react';
import Head from "next/head";
import { Phone, Target, Mail, CheckCircle, Helmet } from 'lucide-react';

const AnalyticsToolsPage: React.FC = () => {
  const analyticsTools = [
    {
      title: 'AI Business Intelligence',
      price: '$399/month',
      description: 'Advanced business intelligence with AI-powered insights and predictive analytics.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization', 'ROI tracking', 'Performance forecasting'],
      icon: '📊',
      benefits: ['Make data-driven decisions', 'Identify growth opportunities', 'Optimize business processes'],
      marketPrice: '$800-2,000/month'
    },
    {
      title: 'AI Customer Analytics',
      price: '$299/month',
      description: 'Deep customer insights and behavior analysis powered by machine learning.',
      features: ['Customer segmentation', 'Behavior tracking', 'Churn prediction', 'Lifetime value analysis', 'Personalization engine'],
      icon: '👥',
      benefits: ['Increase customer retention', 'Improve customer experience', 'Boost conversion rates'],
      marketPrice: '$600-1,500/month'
    },
    {
      title: 'AI Marketing Analytics',
      price: '$199/month',
      description: 'Comprehensive marketing analytics with AI-powered campaign optimization.',
      features: ['Campaign performance tracking', 'ROI analysis', 'Attribution modeling', 'A/B testing', 'Conversion optimization'],
      icon: '📈',
      benefits: ['Maximize marketing ROI', 'Optimize ad spend', 'Improve campaign performance'],
      marketPrice: '$400-1,200/month'
    }
  ];

  const features = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Real-time Analytics',
      description: 'Get instant insights with real-time data processing and visualization.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms provide actionable business insights.'
    },
    {
      icon: <Helmet className="w-8 h-8 text-purple-600" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with full data encryption and compliance standards.'
    }
  ];

  return (
    <>
      <Head>
        <title>Analytics Tools - Zion Tech Group</title>
        <meta name="description" content="Advanced analytics tools powered by AI for data-driven business decisions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Analytics Tools
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our advanced AI-powered analytics platform. 
                Make smarter decisions, faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
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
                Analytics Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive analytics tools designed for modern businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {analyticsTools.map((tool, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{tool.title}</h3>
                  <p className="text-gray-600 mb-6">{tool.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl font-bold text-blue-600">{tool.price}</span>
                      <span className="text-sm text-gray-500 line-through">{tool.marketPrice}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {tool.features.map((feature, idx) => (
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
                      {tool.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
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
                Why Choose Our Analytics Tools
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
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of businesses using our analytics tools to make better decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AnalyticsToolsPage;