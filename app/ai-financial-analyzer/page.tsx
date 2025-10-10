import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, BarChart3, Brain, Target, ArrowRight, Shield, Users, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIFinancialAnalyzerPage: React.FC = () => {
  const features = [
    {
      title: 'Financial Analysis',
      description: 'AI-powered financial analysis with advanced algorithms and machine learning.',
      icon: BarChart3,
      benefits: [
        'Risk assessment',
        'Performance analysis',
        'Trend identification',
        'Investment insights'
      ]
    },
    {
      title: 'Predictive Modeling',
      description: 'Advanced predictive modeling for financial forecasting and planning.',
      icon: Brain,
      benefits: [
        'Revenue forecasting',
        'Cost prediction',
        'Market analysis',
        'Scenario planning'
      ]
    },
    {
      title: 'Portfolio Management',
      description: 'Intelligent portfolio management with AI-powered optimization.',
      icon: Target,
      benefits: [
        'Asset allocation',
        'Risk management',
        'Performance tracking',
        'Rebalancing'
      ]
    },
    {
      title: 'Compliance & Security',
      description: 'Enterprise-grade security and compliance for financial operations.',
      icon: Shield,
      benefits: [
        'Data encryption',
        'Access control',
        'Audit trails',
        'Regulatory compliance'
      ]
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  const useCases = [
    {
      title: 'Investment Firms',
      description: 'Comprehensive financial analysis solutions for investment firms and hedge funds.',
      icon: BarChart3
    },
    {
      title: 'Banks & Credit Unions',
      description: 'Advanced financial analysis tools for banks and credit unions.',
      icon: Shield
    },
    {
      title: 'Corporate Finance',
      description: 'Financial analysis and planning solutions for corporate finance teams.',
      icon: Target
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Analyzer - Zion Tech Group</title>
        <meta name="description" content="AI-powered financial analysis solutions that provide insights, predictions, and optimization. Advanced algorithms for better financial decision making." />
        <meta name="keywords" content="AI financial analyzer, financial analysis, investment analysis, portfolio management, financial forecasting" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Financial
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Analyzer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Analyze financial data with AI-powered solutions. Advanced algorithms, predictive modeling, 
              and portfolio management for better financial decision making and investment strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-emerald-400 text-emerald-300 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Financial Analysis Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered financial analyzer provides comprehensive tools for financial analysis.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-emerald-500 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Financial Analysis Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for financial institutions and companies that need advanced financial analysis.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-emerald-500 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4 mx-auto">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Financial Analyzer?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-powered financial analysis that transforms decision making.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Analyze Finances?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading financial institutions who trust our AI Financial Analyzer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Analyzing
                </button>
                <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIFinancialAnalyzerPage;