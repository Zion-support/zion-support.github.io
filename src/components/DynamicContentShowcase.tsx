import React from 'react';
import { Brain, Zap, Shield, Cloud, BarChart, Users } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced machine learning and artificial intelligence capabilities',
      stats: '95% Accuracy'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-second response times',
      stats: '< 100ms'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption',
      stats: '99.9% Uptime'
    },
    {
      icon: Cloud,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling cloud infrastructure that grows with your business',
      stats: '10x Scale'
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Live insights and analytics for data-driven decisions',
      stats: 'Real-time'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock expert support and monitoring',
      stats: '24/7'
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We combine cutting-edge technology with exceptional service to deliver results that exceed expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-6 text-center hover:bg-slate-700 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <div className="text-cyan-400 font-bold text-lg">{feature.stats}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;