'use client';

import React from 'react';
import { Users, TrendingUp, Star, Shield } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Happy Customers',
      description: 'Businesses trust our solutions'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service guarantee'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Rating',
      description: 'Highly rated by clients'
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Secure',
      description: 'Enterprise-grade security'
    }
  ];

  return (
    <div className="py-16 px-4 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Our Impact in Numbers</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we're making a difference for businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-cyan-400 mb-2">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;