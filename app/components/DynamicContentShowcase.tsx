'use client';
import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms for predictive insights and data-driven decisions'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Optimized infrastructure delivering sub-second response times and 99.9% uptime'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, compliance standards, and 24/7 security monitoring'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Multi-region deployment with automatic scaling and worldwide support'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Why Choose Our Solutions?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the key features and benefits that make our AI and IT solutions the preferred choice for businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Key Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;