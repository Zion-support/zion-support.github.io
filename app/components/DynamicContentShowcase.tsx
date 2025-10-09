'use client';

import React from 'react';

const DynamicContentShowcase: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Analytics',
      description: 'Real-time insights and predictive analytics for data-driven decisions',
      icon: '📊',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Automated Workflows',
      description: 'Streamline operations with intelligent automation and process optimization',
      icon: '⚙️',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cloud Integration',
      description: 'Seamless integration with leading cloud platforms and services',
      icon: '☁️',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security with advanced threat protection',
      icon: '🔒',
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Why Choose Our Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicContentShowcase;