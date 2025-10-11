'use client';
import React from 'react';
import { Helmet  } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, BarChart, CheckCircle, TrendingUp, Shield, Zap, Database, Activity } from 'lucide-react';

const AiBlockchainAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze blockchain data patterns and trends.',
      benefits: ['Pattern recognition', 'Anomaly detection', 'Predictive modeling', 'Smart insights']
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Live blockchain data analysis with instant insights and visualizations.',
      benefits: ['Live dashboards', 'Real-time metrics', 'Instant alerts', 'Dynamic charts']
    },
    {
      icon: Database,
      title: 'Data Processing',
      description: 'High-performance data processing for massive blockchain datasets.',
      benefits: ['Big data handling', 'Fast processing', 'Data integrity', 'Scalable architecture']
    },
    {
      icon: Activity,
      title: 'Transaction Monitoring',
      description: 'Comprehensive monitoring of blockchain transactions and network activity.',
      benefits: ['Transaction tracking', 'Network analysis', 'Security monitoring', 'Compliance reporting']
    }
  ];

  const benefits = [
    'Real-time blockchain data analysis',
    'AI-driven insights and predictions',
    'Comprehensive transaction monitoring',
    'Advanced security threat detection',
    'Scalable data processing architecture',
    'Custom analytics dashboards'
  ];

  return (
    <>
      <Helmet>
        <title>AI Blockchain Analytics | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered blockchain analytics solutions for comprehensive data analysis and insights." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              AI Blockchain Analytics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the power of blockchain data with AI-driven analytics and intelligent insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <CheckCircle className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Advanced Features</h2>
              <p className="text-xl text-gray-300">Comprehensive blockchain analytics powered by AI</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Blockchain Analytics?</h2>
              <p className="text-xl text-gray-300">Transform your blockchain data into actionable insights</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Analyze Your Blockchain Data?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start leveraging AI-powered analytics to gain deeper insights into your blockchain operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <CheckCircle className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AiBlockchainAnalyticsPage;