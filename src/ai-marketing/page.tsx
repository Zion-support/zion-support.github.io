import React from 'react';
import { Helmet, Send, Users, Target, Zap, CheckCircle, Mail, BarChart, Brain, Star, TrendingUp } from 'lucide-react';

const AIMarketingPage: React.FC = () => {
  const aiMarketingServices = [
    {
      title: 'AI-Powered Ad Campaign Optimization',
      description: 'Intelligent ad campaign management with real-time optimization, audience targeting, and budget allocation across all platforms.',
      icon: '🎯',
      price: '$299/month',
      features: ['Real-time bid optimization', 'Audience segmentation', 'Cross-platform management', 'Performance analytics', 'A/B testing automation'],
      benefits: ['Increase ROAS by 40%', 'Reduce cost per acquisition by 35%', 'Save 20+ hours/week'],
      marketPrice: '$500-1,500/month'
    },
    {
      title: 'AI Content Generation Suite',
      description: 'Automated content creation for blogs, social media, emails, and ads with brand voice consistency.',
      icon: '✍️',
      price: '$199/month',
      features: ['Blog post generation', 'Social media content', 'Email campaigns', 'Ad copy creation', 'SEO optimization'],
      benefits: ['10x content production', 'Consistent brand voice', 'SEO-optimized content'],
      marketPrice: '$300-800/month'
    },
    {
      title: 'AI Customer Analytics Platform',
      description: 'Advanced customer behavior analysis and predictive modeling for personalized marketing strategies.',
      icon: '📊',
      price: '$399/month',
      features: ['Customer segmentation', 'Predictive analytics', 'Churn prediction', 'Lifetime value analysis', 'Personalization engine'],
      benefits: ['Increase customer retention by 25%', 'Boost conversion rates by 30%', 'Data-driven insights'],
      marketPrice: '$600-1,200/month'
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your data to provide actionable marketing insights.'
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: 'Precision Targeting',
      description: 'Hyper-accurate audience targeting based on AI analysis of customer behavior and preferences.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: 'Performance Optimization',
      description: 'Continuous optimization of campaigns for maximum ROI and conversion rates.'
    },
    {
      icon: <BarChart className="w-8 h-8 text-orange-600" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboards with real-time performance metrics and predictive analytics.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Marketing Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionize your marketing with AI-powered automation, analytics, and optimization. 
              Drive better results with intelligent marketing technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-semibold transition-colors">
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
              AI Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your marketing strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiMarketingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-bold text-purple-600">{service.price}</span>
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

                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
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
              Why Choose Our AI Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for modern marketers who want to stay ahead
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            Ready to Transform Your Marketing with AI?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of marketers using our AI solutions to drive better results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </button>
            <button className="border border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMarketingPage;