'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms that adapt and learn from your data',
      benefits: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Deep Learning']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment with local support and compliance',
      benefits: ['Multi-region Deployment', 'Local Support', 'Compliance Ready', 'Scalable Infrastructure']
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Enterprise-grade solutions with 99.9% uptime guarantee',
      benefits: ['High Availability', 'Enterprise Security', '24/7 Support', 'SLA Guarantee']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dynamic Content Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our cutting-edge solutions through interactive demonstrations and real-world examples.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-500 ${
                  index === currentFeature
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-400/50'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                    index === currentFeature
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600'
                      : 'bg-white/10'
                  }`}>
                    <feature.icon className={`${index === currentFeature ? 'text-white' : 'text-gray-400'}`} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 ${
                      index === currentFeature ? 'text-white' : 'text-gray-300'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`mb-4 ${
                      index === currentFeature ? 'text-gray-200' : 'text-gray-400'
                    }`}>
                      {feature.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm">
                          <CheckCircle className={`mr-2 flex-shrink-0 ${
                            index === currentFeature ? 'text-green-400' : 'text-gray-500'
                          }`} size={16} />
                          <span className={index === currentFeature ? 'text-gray-300' : 'text-gray-500'}>
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Brain className="text-white" size={64} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {features[currentFeature].title}
              </h3>
              <p className="text-gray-200 mb-6">
                {features[currentFeature].description}
              </p>
              <a
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
