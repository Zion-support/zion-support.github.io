import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligenceShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const features = [
    {
      id: 'real-time-analytics',
      title: 'Real-Time Analytics Engine',
      description: 'Process millions of data points in real-time with sub-second response times and 99.9% accuracy.',
      icon: '📊',
      stats: {
        'Processing Speed': '1M+ events/sec',
        'Response Time': '<100ms',
        'Accuracy': '99.9%'
      },
      benefits: [
        'Instant decision-making capabilities',
        'Real-time fraud detection',
        'Live performance monitoring',
        'Dynamic resource allocation'
      ]
    },
    {
      id: 'ai-powered-insights',
      title: 'AI-Powered Predictive Insights',
      description: 'Leverage advanced machine learning algorithms to predict trends, identify opportunities, and prevent risks.',
      icon: '🤖',
      stats: {
        'Prediction Accuracy': '97.5%',
        'Data Sources': '500+',
        'Processing Time': '<2 seconds'
      },
      benefits: [
        'Predictive maintenance scheduling',
        'Customer behavior forecasting',
        'Risk assessment automation',
        'Revenue optimization insights'
      ]
    },
    {
      id: 'enterprise-integration',
      title: 'Enterprise Integration Hub',
      description: 'Seamlessly connect with existing systems and data sources for unified business intelligence.',
      icon: '🔗',
      stats: {
        'Integration APIs': '200+',
        'Data Connectors': '50+',
        'Uptime': '99.99%'
      },
      benefits: [
        'One-click system integration',
        'Real-time data synchronization',
        'Custom API development',
        'Legacy system modernization'
      ]
    }
  ];

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-business-intelligence-showcase-2025-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-85f5
  // const handleClose = () => {
  //   setIsVisible(false);
  //   localStorage.setItem('ultimate-business-intelligence-showcase-2025-dismissed', 'true');
  // };
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-3b5f
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-85f5

  if (!isVisible) return null;

  const currentFeature = features[activeTab];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-3xl">🚀</span>
            <span className="text-yellow-400 font-bold text-xl">
              ULTIMATE BUSINESS INTELLIGENCE SHOWCASE 2025
            </span>
            <span className="text-3xl">⚡</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Transform Your Business with AI-Powered Intelligence
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover how our revolutionary business intelligence platform is helping enterprises achieve unprecedented growth and efficiency.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {feature.icon} {feature.title}
            </button>
          ))}
        </div>

        {/* Feature Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{currentFeature.icon}</span>
                <h3 className="text-3xl font-bold text-white">{currentFeature.title}</h3>
              </div>
              <p className="text-lg text-gray-300 mb-8">{currentFeature.description}</p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {Object.entries(currentFeature.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{value}</div>
                    <div className="text-sm text-gray-400">{key}</div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {currentFeature.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center px-6 py-4 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Watch Demo
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {Object.entries(currentFeature.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{value}</div>
                  <div className="text-sm text-gray-300">{key}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            Transform your business with AI-powered intelligence • 24/7 Support • Enterprise Security
          </p>
        </div>
      </div>
    </section>
  );
};

export default UltimateBusinessIntelligenceShowcase2025;
