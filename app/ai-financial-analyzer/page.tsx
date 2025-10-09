'use client';
import React from 'react';
import { DollarSign, Target, BarChart, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const AIFinancialAnalyzerPage: React.FC = () => {
  const financialServices = [
    {
      title: 'Portfolio Analysis',
      description: 'AI-powered portfolio analysis that provides deep insights into investment performance and risk assessment.',
      features: ['Risk Assessment', 'Performance Analytics', 'Asset Allocation', 'Rebalancing Recommendations', 'Market Analysis'],
      benefits: ['Better returns', 'Risk management', 'Optimized allocation', 'Informed decisions']
    },
    {
      title: 'Predictive Analytics',
      description: 'Advanced forecasting models that predict market trends, stock prices, and economic indicators.',
      features: ['Market Forecasting', 'Price Prediction', 'Trend Analysis', 'Economic Indicators', 'Scenario Planning'],
      benefits:['Competitive advantage', 'Better timing', 'Risk mitigation', 'Profit optimization']
    },
    {
      title: 'Fraud Detection',
      description: 'Real-time fraud detection using machine learning to identify suspicious transactions and activities.',
      features: ['Real-time Monitoring', 'Pattern Recognition', 'Anomaly Detection', 'Risk Scoring', 'Alert System'],
      benefits:['Loss prevention', 'Security enhancement', 'Compliance', 'Customer protection']
    },
    {
      title: 'Credit Scoring',
      description: 'Advanced credit scoring models that provide more accurate risk assessment for lending decisions.',
      features: ['Alternative Data', 'Machine Learning Models', 'Real-time Scoring', 'Risk Segmentation', 'Compliance'],
      benefits:['Better risk assessment', 'Faster decisions', 'Reduced defaults', 'Improved profitability']
    },
    {
      title: 'Trading Algorithms',
      description: 'Automated trading algorithms that execute trades based on market conditions and predefined strategies.',
      features: ['Algorithm Development', 'Backtesting', 'Risk Management', 'Execution Optimization', 'Performance Monitoring'],
      benefits:['Automated trading', 'Emotion-free decisions', '24/7 operation', 'Consistent performance']
    },
    {
      title: 'Regulatory Compliance',
      description: 'AI-powered compliance monitoring and reporting to ensure adherence to financial regulations.',
      features: ['Regulation Monitoring', 'Automated Reporting', 'Risk Assessment', 'Audit Support', 'Documentation'],
      benefits:['Compliance assurance', 'Reduced penalties', 'Automated reporting', 'Risk mitigation']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="AI Financial Analyzer - Advanced Financial AI Solutions | Zion Tech Group"
        description="Expert AI financial analysis services including portfolio analysis, predictive analytics, fraud detection, and trading algorithms. Transform your financial operations with AI."
        keywords={['AI financial analyzer', 'portfolio analysis', 'predictive analytics', 'fraud detection', 'trading algorithms', 'financial AI']}
        canonicalUrl="https://ziontechgroup.com/ai-financial-analyzer"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Financial Analyzer
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered financial analysis and decision-making solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Our AI financial analyzer leverages cutting-edge machine learning and data science to provide 
              intelligent insights, predictive analytics, and automated decision-making for financial institutions.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {financialServices.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-emerald-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <ArrowRight className="w-3 h-3 text-emerald-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Financial Metrics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">AI Financial Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">25%</div>
                <div className="text-gray-300">Average ROI Improvement</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Fraud Detection Accuracy</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
                <div className="text-gray-300">Faster Decision Making</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">40%</div>
                <div className="text-gray-300">Risk Reduction</div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Financial AI Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold text-white mb-3">Banking</h3>
                <p className="text-gray-300 text-sm">
                  Credit scoring, fraud detection, and automated loan processing for banks and financial institutions.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-white mb-3">Investment Management</h3>
                <p className="text-gray-300 text-sm">
                  Portfolio optimization, risk management, and automated trading for investment firms.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-xl font-bold text-white mb-3">Payment Processing</h3>
                <p className="text-gray-300 text-sm">
                  Real-time fraud detection and risk assessment for payment processors and fintech companies.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-white mb-3">Corporate Finance</h3>
                <p className="text-gray-300 text-sm">
                  Financial forecasting, cash flow optimization, and investment analysis for corporations.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-white mb-3">Insurance</h3>
                <p className="text-gray-300 text-sm">
                  Risk assessment, claims processing, and fraud detection for insurance companies.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-3">RegTech</h3>
                <p className="text-gray-300 text-sm">
                  Regulatory compliance monitoring and automated reporting for financial institutions.
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Financial Operations?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss how AI can revolutionize your financial analysis and decision-making processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your Financial AI Project
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIFinancialAnalyzerPage;