'use client';
import React, { useState, useEffect } from 'react';
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms provide real-time insights and predictive analytics for your business.',
      benefits: ['Real-time insights', 'Predictive analytics', 'Automated reporting', 'Data visualization']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      benefits: ['Scalable architecture', 'High availability', 'Cost optimization', 'Global deployment']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards.',
      benefits: ['End-to-end encryption', 'Compliance standards', 'Security audits', '24/7 monitoring']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal business results.',
      benefits: ['Real-time processing', 'Low latency', 'Optimized performance', 'Scalable solutions']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Solutions?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Experience the power of cutting-edge technology with our comprehensive AI and IT solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border transition-all duration-300 cursor-pointer ${
                index === currentFeature
                  ? 'bg-cyan-500/10 border-cyan-400/50'
                  : 'bg-slate-700/30 border-slate-600/30 hover:border-cyan-500/30'
              }`}
              onClick={() => setCurrentFeature(index)}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${
                  index === currentFeature ? 'bg-cyan-500/20' : 'bg-slate-600/30'
                }`}>
                  <feature.icon className={`w-6 h-6 ${
                    index === currentFeature ? 'text-cyan-400' : 'text-gray-400'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold mb-2 ${
                    index === currentFeature ? 'text-cyan-400' : 'text-white'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-700/30 rounded-lg p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              {React.createElement(features[currentFeature].icon, { className: "w-8 h-8 text-cyan-400" })}
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{features[currentFeature].title}</h3>
            <p className="text-gray-300 mb-6">{features[currentFeature].description}</p>
          </div>
          
          <div className="space-y-3">
            {features[currentFeature].benefits.map((benefit, benefitIndex) => (
              <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                {benefit}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
