'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Brain, BarChart, TrendingUp } from 'lucide-react';

const AiMarketingPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Campaigns',
      description: 'Create intelligent marketing campaigns that adapt and optimize in real-time.',
      benefits: ['Smart targeting', 'Automated optimization', 'Real-time insights', 'ROI maximization']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Deep insights into customer behavior and campaign performance.',
      benefits: ['Customer insights', 'Performance tracking', 'Predictive analytics', 'Custom reports']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'AI-driven strategies to accelerate your business growth.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive intelligence', 'Trend prediction']
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Streamline marketing processes with intelligent automation.',
      benefits: ['Process automation', 'Workflow optimization', 'Time savings', 'Efficiency gains']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Marketing Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your marketing with AI-powered campaigns, advanced analytics, and automated workflows for maximum ROI and growth." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Marketing Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Revolutionize your marketing with AI-powered campaigns, advanced analytics, and automated workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful AI Marketing Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our AI marketing platform can transform your business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using our AI marketing platform.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Start Your Free Trial
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AiMarketingPage;