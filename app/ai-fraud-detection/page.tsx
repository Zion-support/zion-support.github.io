import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Bot, Zap, ArrowRight, CheckCircle, Star, Users, TrendingUp, Lightbulb, BarChart3, Target, AlertTriangle } from 'lucide-react';

const AiFraudDetectionPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Fraud Detection | Zion Tech Group</title>
        <meta name="description" content="Protect your business with AI-powered fraud detection. Real-time monitoring, pattern recognition, and automated threat prevention." />
        <meta name="keywords" content="AI fraud detection, fraud prevention, security AI, threat detection, automated security" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
                <Shield className="w-5 h-5 text-red-400 mr-2" />
                <span className="text-red-400 font-medium">AI-Powered Security</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Fraud
                <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Detection
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Protect your business with advanced AI-powered fraud detection that identifies 
                threats in real-time and prevents financial losses.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border border-red-500/30 text-red-400 rounded-xl font-semibold hover:bg-red-500/10 transition-all duration-300">
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
                Advanced Fraud Detection Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered fraud detection system provides comprehensive protection
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Bot className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Real-time Monitoring</h3>
                <p className="text-gray-300 mb-4">
                  Continuous monitoring of transactions and activities to detect fraud as it happens.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    Instant alerts
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    Pattern recognition
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    Anomaly detection
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Machine Learning Models</h3>
                <p className="text-gray-300 mb-4">
                  Advanced ML algorithms that learn from patterns and improve detection accuracy over time.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Behavioral analysis
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Risk scoring
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Adaptive learning
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Comprehensive Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Detailed insights into fraud patterns and prevention effectiveness.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                    Threat intelligence
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                    Performance metrics
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                    Reporting dashboard
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
              Ready to Protect Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that trust our AI-powered fraud detection 
              to keep their operations secure and profitable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-red-500/30 text-red-400 rounded-xl font-semibold hover:bg-red-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiFraudDetectionPage;