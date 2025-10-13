'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Bot, Zap, Target, BarChart, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const AIEmailAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Writing',
      description: 'Generate professional emails with advanced AI technology.',
      benefits: ['Smart suggestions', 'Tone optimization', 'Grammar correction', 'Context awareness']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific audiences with personalized content.',
      benefits: ['Audience analysis', 'Personalization', 'Segmentation', 'Behavior tracking']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Track and optimize your email performance.',
      benefits: ['Open rates', 'Click tracking', 'A/B testing', 'ROI analysis']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Scale your email marketing with data-driven insights.',
      benefits: ['Growth strategies', 'Campaign optimization', 'Lead generation', 'Conversion tracking']
    }
  ];

  const benefits = [
    'Smart email recommendations',
    'Automated follow-ups',
    'Personalized content generation',
    'Real-time performance tracking',
    'Advanced analytics dashboard',
    'Integration with popular CRM systems'
  ];

  return (
    <>
      <Helmet>
        <title>AI Email Assistant - Zion Tech Group</title>
        <meta name="description" content="Revolutionize your email marketing with our AI-powered email assistant. Generate, optimize, and track professional emails with advanced artificial intelligence." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Email
              </span>
              <br />
              <span className="text-white">Assistant</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your email marketing with our advanced AI assistant. Generate compelling content, 
              optimize performance, and scale your campaigns with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300">
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
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to create, optimize, and manage your email campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Email Assistant?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of email marketing with our intelligent automation platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1" />
                </div>
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI email assistant to boost their marketing performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIEmailAssistantPage;