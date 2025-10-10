'use client';
import React from 'react';
import { TrendingUp, Users, Zap, Shield } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Average ROI',
      description: 'Our clients see significant returns'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
      description: 'Businesses transformed worldwide'
    },
    {
      icon: Zap,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable and consistent performance'
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Secure',
      description: 'Enterprise-grade security'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-lg mx-auto mb-4">
            <stat.icon className="w-6 h-6 text-cyan-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
          <div className="text-lg font-semibold text-cyan-400 mb-2">{stat.label}</div>
          <div className="text-sm text-gray-300">{stat.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ContentStatistics;
