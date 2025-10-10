'use client';
import React from 'react';
import { BarChart, TrendingUp, Target, Brain, ArrowRight, Phone, Mail, CheckCircle, Zap, Users, DollarSign } from 'lucide-react';
import Link from 'next/link';

const AIPredictiveAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Machine Learning Models',
      description: 'Advanced ML algorithms that learn from your data patterns'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Predictions',
      description: 'Get instant insights and predictions as data flows in'
    },
    {
      icon: Target,
      title: 'Accuracy Optimization',
      description: 'Continuously improve prediction accuracy with feedback loops'
    },
    {
      icon: BarChart,
      title: 'Visual Analytics',
      description: 'Interactive dashboards and visualizations for easy understanding'
    }
  ];

  const useCases = [
    {
      title: 'Sales Forecasting',
      description: 'Predict future sales with 95% accuracy',
      benefits: ['Revenue optimization', 'Inventory planning', 'Resource allocation'],
      icon: DollarSign
    },
    {
      title: 'Customer Behavior',
      description: 'Understand and predict customer actions',
      benefits: ['Churn prevention', 'Upselling opportunities', 'Personalization'],
      icon: Users
    },
    {
      title: 'Risk Assessment',
      description: 'Identify potential risks before they impact your business',
      benefits: ['Fraud detection', 'Credit scoring', 'Operational risks'],
      icon: Target
    },
    {
      title: 'Demand Planning',
      description: 'Forecast demand patterns for better planning',
      benefits: ['Supply optimization', 'Cost reduction', 'Service improvement'],
      icon: TrendingUp
    }
  ];

  const benefits = [
    {
      title: '95% Accuracy',
      description: 'Industry-leading prediction accuracy rates'
    },
    {
      title: 'Real-time Insights',
      description: 'Get predictions instantly as data changes'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce costs by up to 40% through better planning'
    },
    {
      title: 'Competitive Edge',
      description: 'Stay ahead with data-driven decision making'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI <span className="text-cyan-400">Predictive Analytics</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your data into powerful predictions with our advanced AI analytics platform. 
            Make smarter decisions, reduce risks, and optimize performance with 95% accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Brain className="w-5 h-5 mr-2" />
              Get Started
            </Link>
            <Link
              href="/demo"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <BarChart className="w-5 h-5 mr-2" />
              View Demo
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Advanced <span className="text-cyan-400">Analytics</span> Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Real-World <span className="text-cyan-400">Applications</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cyan-400 rounded-lg">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300 mb-6">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-cyan-400">
                          <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our <span className="text-cyan-400">Predictive Analytics</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our <span className="text-cyan-400">Implementation</span> Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Data Collection</h3>
              <p className="text-gray-300">Gather and clean your historical data for analysis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Model Training</h3>
              <p className="text-gray-300">Train AI models on your specific data patterns</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Validation</h3>
              <p className="text-gray-300">Test and validate model accuracy with real data</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Deployment</h3>
              <p className="text-gray-300">Deploy models for real-time predictions and insights</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Predicting the Future Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join industry leaders using our AI predictive analytics to make data-driven decisions and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started Now
            </Link>
            <Link
              href="/consultation"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <Brain className="w-5 h-5 mr-2" />
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPredictiveAnalyticsPage;