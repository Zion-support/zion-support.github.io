'use client';
import React from 'react';
import { Users, Award, TrendingUp, Zap } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: Award,
      value: '50+',
      label: 'Awards Won',
      description: 'Industry recognition'
    },
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Average ROI',
      description: 'Return on investment'
    },
    {
      icon: Zap,
      value: '24/7',
      label: 'Support',
      description: 'Round-the-clock assistance'
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven track record speaks for itself
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-cyan-400 text-sm font-medium mb-1">{stat.label}</div>
              <div className="text-gray-500 text-xs">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;