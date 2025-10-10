'use client';
import React from 'react';
import { Brain, Zap, Shield, Target } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence that transforms your business operations'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-second response times and real-time processing'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards'
    },
    {
      icon: Target,
      title: 'Precision Results',
      description: '99.9% accuracy with advanced algorithms and machine learning models'
    }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us?</h2>
        <p className="text-gray-300">Experience the difference with our advanced technology solutions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
              <feature.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicContentShowcase;