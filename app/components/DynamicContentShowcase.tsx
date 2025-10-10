'use client';
import React from 'react';
import { CheckCircle, Brain, Shield, Globe } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence for your business'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business from threats'
    },
    {
      icon: Globe,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure'
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Choose Our Solutions?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our solutions deliver unmatched performance, security, and scalability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
