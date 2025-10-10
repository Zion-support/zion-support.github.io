'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  benefits: string[];
  stats: {
    value: string;
    label: string;
  }[];
}

const DynamicContentShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const features: Feature[] = [
    {
      id: 1,
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      icon: Brain,
      benefits: [
        'Real-time data processing',
        'Predictive analytics',
        'Automated reporting',
        'Custom dashboards'
      ],
      stats: [
        { value: '85%', label: 'Accuracy Improvement' },
        { value: '70%', label: 'Faster Insights' },
        { value: '50%', label: 'Cost Reduction' }
      ]
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      icon: Globe,
      benefits: [
        'Auto-scaling capabilities',
        '99.9% uptime guarantee',
        'Advanced security features',
        'Global deployment'
      ],
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '300%', label: 'Scalability' },
        { value: '40%', label: 'Cost Savings' }
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      icon: Shield,
      benefits: [
        'Threat detection',
        'Vulnerability assessment',
        'Compliance management',
        'Incident response'
      ],
      stats: [
        { value: '90%', label: 'Threat Reduction' },
        { value: '100%', label: 'Compliance' },
        { value: '85%', label: 'Faster Response' }
      ]
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPlaying, features.length]);

  const nextFeature = () => {
    setActiveFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setActiveFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentFeature = features[activeFeature];

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Dynamic Content Showcase</h2>
        <p className="text-gray-300">See how our solutions adapt and evolve with your business needs</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Feature Content */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <currentFeature.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{currentFeature.title}</h3>
              <p className="text-gray-300">{currentFeature.description}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Key Benefits:</h4>
            <ul className="space-y-2">
              {currentFeature.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {currentFeature.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center space-x-2 group">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Interactive Demo Area */}
        <div className="relative">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 h-80 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <currentFeature.icon className="w-12 h-12" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{currentFeature.title}</h4>
              <p className="text-gray-300 mb-4">Interactive Demo</p>
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={togglePlayPause}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <div className="text-sm text-gray-400">
                  {activeFeature + 1} of {features.length}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={prevFeature}
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeFeature ? 'bg-cyan-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextFeature}
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;