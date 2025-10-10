'use client';
import React, { useState, useEffect } from 'react';
import { Brain, Cloud, Shield, Zap, BarChart, Target } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      icon: Brain,
      color: 'from-cyan-500 to-blue-600',
      benefits: ['Real-time insights', 'Predictive analytics', 'Custom dashboards']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      icon: Cloud,
      color: 'from-green-500 to-blue-600',
      benefits: ['Auto-scaling', '99.9% uptime', 'Advanced security']
    },
    {
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems.',
      icon: Zap,
      color: 'from-purple-500 to-pink-600',
      benefits: ['Process automation', 'Workflow optimization', 'Smart decisions']
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      benefits: ['Threat detection', 'Real-time monitoring', 'Automated response']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Feature Showcase */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              {features[currentFeature].title}
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              {features[currentFeature].description}
            </p>
            <div className="space-y-2">
              {features[currentFeature].benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-cyan-400">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className={`w-80 h-80 bg-gradient-to-br ${features[currentFeature].color} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20"></div>
              {React.createElement(features[currentFeature].icon, { className: "w-32 h-32 text-white/90 relative z-10" })}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Navigation */}
      <div className="flex justify-center space-x-2 mb-8">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentFeature(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentFeature ? 'bg-cyan-500' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Benefits Section */}
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BarChart className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Data-Driven</h4>
            <p className="text-gray-300 text-sm">Make informed decisions with real-time analytics</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Focused</h4>
            <p className="text-gray-300 text-sm">Targeted solutions for your specific business needs</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Fast</h4>
            <p className="text-gray-300 text-sm">Quick implementation and rapid results</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
