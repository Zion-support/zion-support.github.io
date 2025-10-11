
'use client'
import React from 'react';
const ContentPromotionBanner: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance'
    },
    {
      icon: Shield,
      title: 'Secure',
      description: 'Enterprise-grade security'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Professional-grade solutions'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 technical support'
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-600">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why Choose Zion Tech Group?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          We deliver cutting-edge AI and IT solutions that drive real business results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-4">
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
