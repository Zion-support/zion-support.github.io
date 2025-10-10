'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DollarSign, TrendingUp, Shield, BarChart, Users, CheckCircle, ArrowRight, Star, Clock, Zap, Brain, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiFinancialServicesPage: React.FC = () => {
  const services = [
    {
      icon: DollarSign,
      title: 'AI Financial Forecasting',
      description: 'Predict market trends and financial outcomes with advanced AI algorithms',
      features: ['Market prediction', 'Risk assessment', 'Portfolio optimization', 'Real-time analysis']
    },
    {
      icon: TrendingUp,
      title: 'AI Trading Algorithms',
      description: 'Automated trading systems powered by machine learning',
      features: ['Algorithmic trading', 'Market analysis', 'Risk management', 'Performance optimization']
    },
    {
      icon: Shield,
      title: 'AI Fraud Detection',
      description: 'Advanced fraud prevention and detection systems',
      features: ['Real-time monitoring', 'Pattern recognition', 'Anomaly detection', 'Automated alerts']
    },
    {
      icon: BarChart,
      title: 'AI Financial Analytics',
      description: 'Comprehensive financial data analysis and insights',
      features: ['Data visualization', 'Trend analysis', 'Performance metrics', 'Custom reports']
    }
  ];

  const benefits = [
    'Reduce financial risks by 85%',
    'Increase trading accuracy by 60%',
    'Automate 90% of financial processes',
    'Real-time fraud detection',
    '24/7 market monitoring',
    'Custom financial models'
  ];

  const useCases = [
    {
      title: 'Investment Management',
      description: 'AI-powered portfolio optimization and risk management',
      icon: Target
    },
    {
      title: 'Banking Operations',
      description: 'Automated loan processing and credit scoring',
      icon: Users
    },
    {
      title: 'Insurance Claims',
      description: 'Intelligent claims processing and fraud detection',
      icon: Shield
    },
    {
      title: 'Trading Platforms',
      description: 'High-frequency trading and market analysis',
      icon: Zap
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI financial services including fraud detection, trading algorithms, financial forecasting, and analytics solutions." />
        <meta name="keywords" content="AI financial services, fraud detection, trading algorithms, financial forecasting, fintech AI" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Financial Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your financial operations with cutting-edge AI solutions. 
                From fraud detection to algorithmic trading, we provide comprehensive financial AI services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/demo"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Request Demo
                </a>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="bg-slate-800/50 rounded-lg p-8 mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Our AI Financial Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <useCase.icon className="w-8 h-8 text-cyan-400 mr-3" />
                      <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                    </div>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Transform Your Financial Operations?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Let our AI financial experts help you implement cutting-edge solutions 
                  that will revolutionize your financial processes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AiFinancialServicesPage;