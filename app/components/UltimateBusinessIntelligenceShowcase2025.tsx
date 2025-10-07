<<<<<<< HEAD
'use client';
import React, { useState } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 49ee820968f6910db9b3aa56c9254128dde2e192
import Link from 'next/link';

<<<<<<< HEAD
const UltimateBusinessIntelligenceShowcase2025 = () => {
<<<<<<< HEAD
  const [currentSlide, setCurrentSlide] = useState(0);
  
=======
const UltimateBusinessIntelligenceShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-118c
  const content = [
    {
      id: 'ultimate-business-intelligence-revolution',
      title: 'AI 2025: The Ultimate Business Intelligence Revolution',
      description: 'Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented insights and competitive advantage.',
<<<<<<< HEAD
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough',
=======
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-118c
      type: 'Blog Post',
      category: 'blog',
      metrics: {
        roi: '30,000%',
        savings: '$750B+',
        accuracy: '99.99%',
        speed: '5,000% faster'
=======
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
>>>>>>> 49ee820968f6910db9b3aa56c9254128dde2e192
      },
      benefits: [
        'Instant decision-making capabilities',
        'Real-time fraud detection',
        'Live performance monitoring',
        'Dynamic resource allocation'
      ]
    },
    {
<<<<<<< HEAD
      id: 'fortune-500-business-intelligence-success',
      title: 'Fortune 500 Ultimate Business Intelligence Success',
      description: 'How a $15.2B manufacturing giant achieved unprecedented business intelligence transformation with AI-powered analytics.',
      url: '/case-studies/fortune-500-ultimate-business-intelligence-success',
      type: 'Case Study',
      category: 'case-study',
      metrics: {
        roi: '30,000%',
        savings: '$750B',
        company: '$15.2B',
        timeline: '18 months'
=======
      id: 'ai-powered-insights',
      title: 'AI-Powered Predictive Insights',
      description: 'Leverage advanced machine learning algorithms to predict trends, identify opportunities, and prevent risks.',
      icon: '🤖',
      stats: {
        'Prediction Accuracy': '97.5%',
        'Data Sources': '500+',
        'Processing Time': '<2 seconds'
>>>>>>> 49ee820968f6910db9b3aa56c9254128dde2e192
      },
      benefits: [
        'Predictive maintenance scheduling',
        'Customer behavior forecasting',
        'Risk assessment automation',
        'Revenue optimization insights'
      ]
    },
    {
<<<<<<< HEAD
      id: 'business-intelligence-implementation-guide',
      title: 'AI 2025 Ultimate Business Intelligence Implementation Guide',
      description: 'Complete roadmap to 30,000% ROI through revolutionary AI-powered business intelligence transformation.',
      url: '/resources/ai-2025-ultimate-business-intelligence-implementation-guide',
      type: 'Implementation Guide',
      category: 'resource',
      metrics: {
        roi: '30,000%',
        success: '99.8%',
        timeline: '18 months',
        adoption: '100%'
=======
      id: 'enterprise-integration',
      title: 'Enterprise Integration Hub',
      description: 'Seamlessly connect with existing systems and data sources for unified business intelligence.',
      icon: '🔗',
      stats: {
        'Integration APIs': '200+',
        'Data Connectors': '50+',
        'Uptime': '99.99%'
>>>>>>> 49ee820968f6910db9b3aa56c9254128dde2e192
      },
      benefits: [
        'One-click system integration',
        'Real-time data synchronization',
        'Custom API development',
        'Legacy system modernization'
      ]
    }
  ];

<<<<<<< HEAD
<<<<<<< HEAD
  const currentContent = content[currentSlide];
=======
  const filteredContent = activeTab === 'all' 
    ? content 
    : content.filter(item => item.category === activeTab);

  const tabs = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'blog', label: 'Blog Posts', count: content.filter(item => item.category === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: content.filter(item => item.category === 'case-study').length },
    { id: 'resource', label: 'Resources', count: content.filter(item => item.category === 'resource').length }
  ];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-118c
=======
  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-business-intelligence-showcase-2025-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-business-intelligence-showcase-2025-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentFeature = features[activeTab];
>>>>>>> 49ee820968f6910db9b3aa56c9254128dde2e192

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
<<<<<<< HEAD
<<<<<<< HEAD
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            {currentContent.title}
          </h1>
=======
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Transform Your Business with AI-Powered Intelligence
          </h2>
>>>>>>> 49ee820968f6910db9b3aa56c9254128dde2e192
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

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-400/30">
                <div className="text-center">
                  <div className="text-6xl mb-4">{currentFeature.icon}</div>
                  <h4 className="text-2xl font-bold text-white mb-4">Live Demo</h4>
                  <p className="text-gray-300 mb-6">See our platform in action with real-time data processing and AI insights.</p>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-green-400">
                    <div>Processing: 1,247,892 events/sec</div>
                    <div>Accuracy: 99.9%</div>
                    <div>Response Time: 47ms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            Transform your business with AI-powered intelligence • 24/7 Support • Enterprise Security
          </p>
        </div>
=======

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              That Transforms Enterprises
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the cutting-edge research, case studies, and implementation guides that are reshaping how Fortune 500 companies approach business intelligence.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => (
            <div key={item.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  item.category === 'blog' ? 'bg-blue-500 text-white' :
                  item.category === 'case-study' ? 'bg-green-500 text-white' :
                  'bg-purple-500 text-white'
                }`}>
                  {item.type}
                </span>
                <span className="text-yellow-400 text-sm font-semibold">
                  {item.readingTime}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-bold text-cyan-400">
                      {value}
                    </div>
                    <div className="text-xs text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={item.url}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
              >
                Read Full {item.type}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business Intelligence?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get personalized AI solutions and implementation guidance tailored to your enterprise needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom AI Solutions
              </Link>
              <Link
                href="/blog"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-118c
      </div>
    </section>
  );
};

export default UltimateBusinessIntelligenceShowcase2025;
