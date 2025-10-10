'use client';
import React, { useState, useEffect } from 'react';
import { Brain, Zap, Shield, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      benefits: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Low Latency']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      benefits: ['End-to-End Encryption', 'Compliance Standards', 'Security Audits', '24/7 Monitoring']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
      benefits: ['Multi-Region Support', 'Local Compliance', 'Global CDN', 'International Support']
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Zion Tech Group</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver cutting-edge AI and IT solutions that drive real business results and transform your operations.
          </p>
        </div>

        {/* Dynamic Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
              {React.createElement(features[currentFeature].icon, { className: "w-10 h-10 text-white" })}
            </div>
            <h3 className="text-3xl font-bold text-white">
              {features[currentFeature].title}
            </h3>
            <p className="text-gray-300 text-lg">
              {features[currentFeature].description}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {features[currentFeature].benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg border transition-all duration-300 cursor-pointer ${
                  index === currentFeature 
                    ? 'bg-cyan-500/20 border-cyan-500/50' 
                    : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800/70'
                }`}
                onClick={() => setCurrentFeature(index)}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
                  {React.createElement(feature.icon, { className: "h-6 w-6 text-white" })}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
                {React.createElement(feature.icon, { className: "h-6 w-6 text-white" })}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;