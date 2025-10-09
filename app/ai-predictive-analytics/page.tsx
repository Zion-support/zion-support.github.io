'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { TrendingUp, Brain, Target, BarChart, AlertTriangle, CheckCircle, ArrowRight, Star, Users, Award } from 'lucide-react';

const AIPredictiveAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced Machine Learning Models',
      description: 'State-of-the-art ML algorithms that learn from your data to make accurate predictions.'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Forecasting',
      description: 'Get instant predictions and forecasts based on live data streams and historical patterns.'
    },
    {
      icon: Target,
      title: 'Predictive Insights',
      description: 'Uncover hidden patterns and trends that help you make better business decisions.'
    },
    {
      icon: BarChart,
      title: 'Interactive Dashboards',
      description: 'Visualize predictions and analytics through intuitive, customizable dashboards.'
    }
  ];

  const useCases = [
    {
      title: 'Sales Forecasting',
      description: 'Predict future sales with 95% accuracy using historical data and market trends.',
      accuracy: '95%',
      icon: '📈'
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Identify customers likely to churn and take proactive retention measures.',
      accuracy: '92%',
      icon: '👥'
    },
    {
      title: 'Demand Planning',
      description: 'Forecast product demand to optimize inventory and reduce stockouts.',
      accuracy: '88%',
      icon: '📦'
    },
    {
      title: 'Risk Assessment',
      description: 'Predict and mitigate business risks before they impact your operations.',
      accuracy: '90%',
      icon: '⚠️'
    },
    {
      title: 'Price Optimization',
      description: 'Optimize pricing strategies based on market conditions and demand patterns.',
      accuracy: '87%',
      icon: '💰'
    },
    {
      title: 'Maintenance Prediction',
      description: 'Predict equipment failures and schedule maintenance to prevent downtime.',
      accuracy: '94%',
      icon: '🔧'
    }
  ];

  const benefits = [
    'Increase revenue by up to 25% through better forecasting',
    'Reduce costs by 30% with optimized resource allocation',
    'Improve customer retention by 40% with churn prediction',
    'Minimize risk exposure with early warning systems',
    'Make data-driven decisions with confidence',
    'Stay ahead of market trends and competitors'
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Predictive Analytics
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Harness the power of AI to predict future trends, behaviors, and outcomes. 
                Make smarter decisions with our advanced predictive analytics platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Start Predicting
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  View Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">25%</div>
                <div className="text-gray-300">Revenue Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">30%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Better Retention</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Predictive Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered predictive analytics platform uses cutting-edge machine learning 
                to deliver accurate forecasts and actionable insights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-colors">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Predictive Analytics Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From sales forecasting to risk management, our predictive analytics solutions 
                help businesses across all industries make better decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 hover:bg-slate-900/70 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{useCase.icon}</div>
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {useCase.accuracy} accuracy
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Predictive Analytics?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our AI-powered predictive analytics platform delivers accurate forecasts 
                  and actionable insights that drive real business value.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Prediction Accuracy</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sales Forecasting:</span>
                    <span className="text-green-400 font-semibold">95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Churn Prediction:</span>
                    <span className="text-green-400 font-semibold">92%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Demand Planning:</span>
                    <span className="text-green-400 font-semibold">88%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Risk Assessment:</span>
                    <span className="text-green-400 font-semibold">90%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Start Predicting the Future Today</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join industry leaders who trust our predictive analytics to make better business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIPredictiveAnalyticsPage;