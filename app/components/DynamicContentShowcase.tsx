'use client';
import React, { useState, useEffect } from 'react';
import { Cloud, Zap, Shield, Brain, Star, CheckCircle } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence that learns and adapts to your business needs',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'Automated Decision Making']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business',
      benefits: ['Auto-scaling', 'High Availability', 'Disaster Recovery', 'Cost Optimization']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security measures to protect your data and systems',
      benefits: ['Threat Detection', 'Data Encryption', 'Access Control', 'Compliance Management']
    },
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description: 'Instant insights and monitoring to drive better business decisions',
      benefits: ['Live Dashboards', 'Custom Reports', 'Alert Systems', 'Performance Metrics']
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  const currentFeature = features[currentIndex];

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose <span className="text-cyan-400">Zion Tech Group</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver cutting-edge solutions that transform businesses and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <currentFeature.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{currentFeature.title}</h3>
                <p className="text-gray-300">{currentFeature.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              {currentFeature.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`p-6 rounded-xl border transition-all duration-300 ${
                    index === currentIndex
                      ? 'border-cyan-500/50 bg-cyan-500/10'
                      : 'border-white/10 bg-white/5 hover:border-cyan-500/30'
                  }`}
                >
                  <feature.icon className={`w-8 h-8 mb-3 ${
                    index === currentIndex ? 'text-cyan-400' : 'text-gray-400'
                  }`} />
                  <h4 className={`font-semibold mb-2 ${
                    index === currentIndex ? 'text-white' : 'text-gray-300'
                  }`}>
                    {feature.title}
                  </h4>
                  <p className={`text-sm ${
                    index === currentIndex ? 'text-gray-300' : 'text-gray-400'
                  }`}>
                    {feature.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">5★</div>
              <div className="text-gray-300">Client Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;