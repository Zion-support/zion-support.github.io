'use client';
import React from 'react';
import { Brain, TrendingUp, BarChart, Target, Zap, Users, Clock, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIPredictiveAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced Machine Learning Models',
      description: 'State-of-the-art ML algorithms that predict future trends with 95% accuracy.'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Forecasting',
      description: 'Get instant predictions and forecasts based on live data streams.'
    },
    {
      icon: BarChart,
      title: 'Comprehensive Data Analysis',
      description: 'Deep insights from complex datasets using advanced statistical methods.'
    },
    {
      icon: Target,
      title: 'Predictive Modeling',
      description: 'Build custom models tailored to your specific business needs and goals.'
    }
  ];

  const benefits = [
    '95% prediction accuracy',
    'Real-time data processing',
    'Custom model development',
    'Automated insights generation',
    'Scalable across all data sources',
    'ROI within 2 months'
  ];

  const useCases = [
    {
      title: 'Sales Forecasting',
      description: 'Predict sales trends and optimize inventory management with AI-powered forecasting.',
      icon: TrendingUp
    },
    {
      title: 'Customer Behavior Analysis',
      description: 'Understand customer patterns and predict future buying behavior.',
      icon: Users
    },
    {
      title: 'Risk Assessment',
      description: 'Identify potential risks and opportunities before they impact your business.',
      icon: Target
    },
    {
      title: 'Market Trend Analysis',
      description: 'Stay ahead of market changes with predictive market intelligence.',
      icon: BarChart
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Predictive Analytics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of AI to predict future trends, optimize decisions, and stay ahead of the competition. 
              Our advanced predictive analytics deliver 95% accuracy in forecasting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                Get Predictive Insights
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Predictive Capabilities</h2>
            <p className="text-xl text-gray-300">Cutting-edge AI technology for accurate predictions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Predictive Analytics?</h2>
            <p className="text-xl text-gray-300">Proven results that drive business success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Predictive Analytics Applications</h2>
            <p className="text-xl text-gray-300">Transform your business with data-driven predictions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-8">
                <useCase.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 text-lg">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Predict the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start making data-driven decisions with our advanced AI predictive analytics platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              Start Predicting Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIPredictiveAnalyticsPage;