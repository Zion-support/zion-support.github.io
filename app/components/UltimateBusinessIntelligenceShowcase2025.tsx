import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligenceShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const features = [
    {
      id: 'real-time-analytics',
      title: 'Real-Time Analytics Engine',
      description: 'Process millions of data points in real-time with our advanced streaming analytics platform.',
      metrics: {
        'Data Points/sec': '10M+',
        'Latency': '< 50ms',
        'Uptime': '99.99%',
        'Accuracy': '99.7%'
      },
      icon: '📊',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-predictions',
      title: 'AI-Powered Predictions',
      description: 'Leverage machine learning models to predict trends, behaviors, and outcomes with unprecedented accuracy.',
      metrics: {
        'Prediction Accuracy': '94.2%',
        'Model Updates': 'Real-time',
        'Data Sources': '500+',
        'Processing Speed': '10x faster'
      },
      icon: '🤖',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'automated-insights',
      title: 'Automated Insights Generation',
      description: 'Generate actionable insights automatically from your data without manual analysis.',
      metrics: {
        'Insights Generated': '1000+/day',
        'Time Saved': '85%',
        'Coverage': '100%',
        'Relevance Score': '96%'
      },
      icon: '💡',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'custom-dashboards',
      title: 'Custom Dashboard Builder',
      description: 'Create stunning, interactive dashboards tailored to your specific business needs.',
      metrics: {
        'Dashboard Types': '50+',
        'Customization': 'Unlimited',
        'Export Formats': '15+',
        'User Satisfaction': '98%'
      },
      icon: '📈',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const caseStudies = [
    {
      company: 'Fortune 500 Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Complex supply chain optimization',
      solution: 'AI-powered demand forecasting',
      results: {
        'Cost Reduction': '35%',
        'Efficiency Gain': '280%',
        'ROI': '2,400%',
        'Implementation Time': '3 months'
      }
    },
    {
      company: 'Global Retail Chain',
      industry: 'Retail',
      challenge: 'Inventory management across 500+ stores',
      solution: 'Real-time inventory analytics',
      results: {
        'Stock Accuracy': '99.2%',
        'Waste Reduction': '60%',
        'Revenue Increase': '25%',
        'Customer Satisfaction': '95%'
      }
    },
    {
      company: 'Financial Services Leader',
      industry: 'Finance',
      challenge: 'Risk assessment and fraud detection',
      solution: 'Advanced ML risk models',
      results: {
        'Fraud Detection': '99.8%',
        'False Positives': '-85%',
        'Processing Time': '-90%',
        'Cost Savings': '50%'
      }
    }
  ];

  if (!isVisible) return null;

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-900 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-3xl">🚀</span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text text-2xl font-bold">
              ULTIMATE BUSINESS INTELLIGENCE SHOWCASE 2025
            </span>
            <span className="text-3xl">⚡</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Revolutionary AI-Powered
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Business Intelligence Platform
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of enterprise analytics with our cutting-edge AI platform that transforms 
            raw data into actionable insights, driving unprecedented business growth and efficiency.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Features', 'Case Studies', 'Technology'].map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === 0 && (
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={feature.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-2xl`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(feature.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-4 bg-white/5 rounded-lg">
                        <div className="text-2xl font-bold text-blue-400">{value}</div>
                        <div className="text-sm text-gray-400">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 1 && (
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{study.company}</h3>
                      <p className="text-gray-400 mb-4">{study.industry}</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Results:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(study.results).map(([key, value]) => (
                          <div key={key} className="text-center p-4 bg-white/5 rounded-lg">
                            <div className="text-xl font-bold text-green-400">{value}</div>
                            <div className="text-sm text-gray-400">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 2 && (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  🧠
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Machine Learning</h3>
                <p className="text-gray-300 mb-6">Advanced ML algorithms for predictive analytics and automated insights generation.</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Deep Learning Models</div>
                  <div>• Real-time Training</div>
                  <div>• AutoML Capabilities</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Real-time Processing</h3>
                <p className="text-gray-300 mb-6">Stream processing engine for instant data analysis and decision making.</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Apache Kafka Integration</div>
                  <div>• Sub-second Latency</div>
                  <div>• Auto-scaling</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  🔒
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300 mb-6">Bank-grade security with end-to-end encryption and compliance.</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• SOC 2 Type II</div>
                  <div>• GDPR Compliant</div>
                  <div>• Zero-trust Architecture</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business Intelligence?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of enterprises already using our AI-powered analytics platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/demo"
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Close this showcase
          </button>
        </div>
      </div>
    </section>
  );
};

export default UltimateBusinessIntelligenceShowcase2025;