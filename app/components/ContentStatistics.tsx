'use client';
import React from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Projects Delivered',
      description: 'Successfully completed projects across various industries'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Reliable service with minimal downtime'
    },
    {
      icon: Award,
      value: '5★',
      label: 'Client Rating',
      description: 'Highly rated by our satisfied clients'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock technical support'
    }
    ];

  return (
    <div className="bg-slate-800/30 rounded-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Our Track Record</h2>
        <p className="text-gray-300">
          Numbers that speak for our commitment to excellence
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <stat.icon className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-lg font-semibold text-cyan-400 mb-1">{stat.label}</div>
            <div className="text-sm text-gray-400">{stat.description}</div>
          </div>
              ))}
      </div>
    </div>
  );
};

export default ContentStatistics;