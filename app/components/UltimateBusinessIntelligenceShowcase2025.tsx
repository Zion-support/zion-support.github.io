import React, { useState } from 'react';
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
      icon: '🧠',
      stats: {
        'Prediction Accuracy': '95%+',
        'Data Sources': '1000+',
        'Processing Power': '10x faster'
      },
      benefits: [
        'Predictive maintenance scheduling',
        'Customer behavior analysis',
        'Market trend forecasting',
        'Risk assessment automation'
      ]
    },
    {
      id: 'enterprise-automation',
      title: 'Enterprise Automation Suite',
      description: 'Automate complex business processes with intelligent workflows that adapt and optimize continuously.',
      icon: '⚡',
      stats: {
        'Automation Rate': '95%',
        'Time Saved': '80%',
        'Error Reduction': '99%'
      },
      benefits: [
        'Workflow automation',
        'Document processing',
        'Customer service automation',
        'Compliance monitoring'
      ]
    },
    {
      id: 'advanced-visualization',
      title: 'Advanced Data Visualization',
      description: 'Transform complex data into intuitive, interactive dashboards and reports that drive actionable insights.',
      icon: '📈',
      stats: {
        'Dashboard Types': '50+',
        'Real-time Updates': 'Yes',
        'Customization': '100%'
      },
      benefits: [
        'Interactive dashboards',
        'Custom report generation',
        'Mobile-responsive design',
        'Collaborative analytics'
      ]
    }
  ];

  const handleClose = () => {
    setIsVisible(false);
  };

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
            Revolutionary AI Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience the future of business intelligence with our cutting-edge AI-powered platform 
            that transforms data into actionable insights and drives unprecedented growth.
          </p>
        </div>

        {/* Main Content */}
        <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-12">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            aria-label="Close showcase"
          >
            <span className="text-2xl">×</span>
          </button>

          {/* Feature Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{feature.icon}</span>
                {feature.title}
              </button>
            ))}
          </div>

          {/* Feature Content */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-6xl">{currentFeature.icon}</span>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {currentFeature.title}
                </h3>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {currentFeature.description}
                </p>
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

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {currentFeature.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/solutions/business-intelligence"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Explore Solution
                <span className="ml-2">→</span>
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Request Demo
                <span className="ml-2">→</span>
              </Link>
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
