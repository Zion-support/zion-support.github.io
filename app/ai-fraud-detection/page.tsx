import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Shield, Brain, Zap, Target, BarChart, TrendingUp, Users, Clock, Star, Mic, Smartphone, Globe } from 'lucide-react';

const AiFraudDetectionPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Real-time Fraud Detection',
      description: 'AI-powered fraud detection that identifies suspicious activities in real-time.',
      benefits: ['Instant alerts', 'Pattern recognition', 'Risk scoring', 'Automated blocking']
    },
    {
      icon: Brain,
      title: 'Machine Learning Models',
      description: 'Advanced ML models that continuously learn and adapt to new fraud patterns.',
      benefits: ['Adaptive learning', 'Pattern evolution', 'False positive reduction', 'Continuous improvement']
    },
    {
      icon: Zap,
      title: 'Automated Response',
      description: 'Automatically respond to fraud attempts with appropriate security measures.',
      benefits: ['Auto-blocking', 'Account suspension', 'Transaction holds', 'Alert notifications']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific fraud patterns with high accuracy and minimal false positives.',
      benefits: ['Pattern matching', 'Behavioral analysis', 'Risk assessment', 'Custom rules']
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Comprehensive fraud analytics and reporting for security insights.',
      benefits: ['Fraud trends', 'Attack patterns', 'Success rates', 'Security metrics']
    },
    {
      icon: TrendingUp,
      title: 'Continuous Monitoring',
      description: '24/7 monitoring of all transactions and activities for fraud prevention.',
      benefits: ['Round-the-clock monitoring', 'Real-time analysis', 'Instant detection', 'Proactive protection']
    }
  ];

  const benefits = [
    '99.9% fraud detection accuracy',
    '60% reduction in false positives',
    'Real-time threat detection',
    'Automated response system',
    'Advanced ML algorithms',
    'Comprehensive security analytics'
  ];

  return (
    <>
      <Helmet>
        <title>AI Fraud Detection - Advanced Security Solutions | Zion Tech Group</title>
        <meta name="description" content="Protect your business with AI-powered fraud detection. Real-time monitoring, machine learning models, and automated security responses." />
        <meta name="keywords" content="AI fraud detection, fraud prevention, security AI, machine learning security, fraud analytics, threat detection" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Fraud
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Detection
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with AI-powered fraud detection. 
              Real-time monitoring, machine learning models, and automated security responses.
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

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Advanced Fraud Detection Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Why Choose AI Fraud Detection?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using AI-powered fraud detection 
              to protect their assets and customers.
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

export default AiFraudDetectionPage;