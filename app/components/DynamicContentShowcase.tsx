'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award } from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  benefits: string[];
  stats?: {
    value: string;
    label: string;
  }[];
}

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const features: Feature[] = [
    {
      id: 1,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence that transforms your business operations.',
      icon: Brain,
      benefits: [
        'Machine Learning Integration',
        'Predictive Analytics',
        'Automated Decision Making',
        'Natural Language Processing'
      ],
      stats: [
        { value: '95%', label: 'Accuracy Rate' },
        { value: '3x', label: 'Faster Processing' }
      ]
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      icon: Globe,
      benefits: [
        'Auto-scaling Resources',
        'Global CDN',
        '99.9% Uptime',
        'Enterprise Security'
      ],
      stats: [
        { value: '99.9%', label: 'Uptime SLA' },
        { value: '50+', label: 'Data Centers' }
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity',
      description: 'Advanced security measures to protect your digital assets and data.',
      icon: Shield,
      benefits: [
        'Real-time Threat Detection',
        'Zero-trust Architecture',
        'Compliance Management',
        'Incident Response'
      ],
      stats: [
        { value: '24/7', label: 'Monitoring' },
        { value: '<1min', label: 'Response Time' }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [features.length]);

  const currentFeature = features[currentIndex];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Dynamic Content Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI and technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                <currentFeature.icon className="h-8 w-8 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{currentFeature.title}</h3>
                <p className="text-gray-300">{currentFeature.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              {currentFeature.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            {currentFeature.stats && (
              <div className="grid grid-cols-2 gap-4">
                {currentFeature.stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <currentFeature.icon className="h-16 w-16 text-cyan-400" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{currentFeature.title}</h4>
                <p className="text-gray-300">{currentFeature.description}</p>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-cyan-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
