import React from 'react';
import { CheckCircle, TrendingUp, Target, BarChart, Users, Zap } from 'lucide-react';

const AIMarketingPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'AI-Powered Targeting',
      description: 'Advanced audience segmentation and targeting using machine learning algorithms',
      benefits: ['300% better targeting accuracy', '50% higher conversion rates', 'Real-time audience insights']
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Forecast campaign performance and optimize marketing spend automatically',
      benefits: ['40% improvement in ROI', '60% reduction in wasted ad spend', 'Predictive campaign optimization']
    },
    {
      icon: Users,
      title: 'Customer Journey AI',
      description: 'Map and optimize customer journeys with AI-driven personalization',
      benefits: ['200% increase in engagement', '35% higher customer lifetime value', 'Automated journey optimization']
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'Automatically adjust campaigns in real-time based on performance data',
      benefits: ['80% faster optimization', '45% improvement in performance', '24/7 automated management']
    }
  ];

  const services = [
    {
      name: 'AI Content Generation',
      price: '$1,200/month',
      description: 'Automated content creation for all marketing channels',
      features: ['Blog posts', 'Social media content', 'Email campaigns', 'Ad copy', 'Product descriptions']
    },
    {
      name: 'AI Email Marketing',
      price: '$800/month',
      description: 'Intelligent email campaigns with personalization',
      features: ['Automated sequences', 'Personalization', 'A/B testing', 'Send time optimization', 'Performance analytics']
    },
    {
      name: 'AI Social Media Management',
      price: '$1,000/month',
      description: 'Automated social media posting and engagement',
      features: ['Content scheduling', 'Hashtag optimization', 'Engagement automation', 'Performance tracking', 'Trend analysis']
    },
    {
      name: 'AI Ad Campaign Management',
      price: '$1,500/month',
      description: 'Automated ad creation and optimization across platforms',
      features: ['Multi-platform ads', 'Bid optimization', 'Audience targeting', 'Creative testing', 'Performance monitoring']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI-Powered Marketing Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your marketing with artificial intelligence. Automate campaigns, personalize experiences, and maximize ROI with our cutting-edge AI marketing platform.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-gray-300">Better Targeting</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
              <div className="text-gray-300">Higher Conversions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-300">ROI Improvement</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Automation</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            AI Marketing Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            AI Marketing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <div className="text-2xl font-bold text-green-600 mb-4">{service.price}</div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Data Analysis</h3>
              <p className="text-gray-300">We analyze your customer data and marketing history to understand your audience and performance patterns.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Model Training</h3>
              <p className="text-gray-300">Our AI models are trained on your specific data to create personalized marketing strategies and content.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Automated Execution</h3>
              <p className="text-gray-300">AI automatically executes campaigns, optimizes performance, and adjusts strategies in real-time.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Revolutionize Your Marketing?
          </h2>
          <p className="text-purple-100 mb-6">
            Get started with AI-powered marketing and see results in just 30 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Start Your AI Marketing Journey
            </a>
            <a
              href="/demo"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMarketingPage;