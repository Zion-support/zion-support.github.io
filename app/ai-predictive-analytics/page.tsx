import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, Bot, Zap, ArrowRight, CheckCircle, Star, Users, Shield, Lightbulb, BarChart3, Target, Brain } from 'lucide-react';

const AiPredictiveAnalyticsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Predictive Analytics | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered predictive analytics. Forecast trends, predict outcomes, and make data-driven decisions with machine learning." />
        <meta name="keywords" content="AI predictive analytics, forecasting, machine learning, predictive modeling, data science" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
                <Brain className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">Predictive Intelligence</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Predictive
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Analytics
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Unlock the future with AI-powered predictive analytics that forecasts trends, 
                predicts outcomes, and enables data-driven decision making.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Predictive Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered predictive analytics platform provides comprehensive forecasting capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Bot className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Machine Learning Models</h3>
                <p className="text-gray-300 mb-4">
                  Advanced ML algorithms that learn from historical data to predict future outcomes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Time series forecasting
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Classification models
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Regression analysis
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Real-time Predictions</h3>
                <p className="text-gray-300 mb-4">
                  Generate predictions in real-time as new data becomes available.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                    Live data processing
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                    Instant updates
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                    Adaptive learning
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Scenario Planning</h3>
                <p className="text-gray-300 mb-4">
                  Model different scenarios and their potential outcomes for better decision making.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    What-if analysis
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Risk assessment
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Optimization strategies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Predict the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join forward-thinking businesses that have transformed their decision-making 
              with our AI-powered predictive analytics platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiPredictiveAnalyticsPage;