'use client';
import React from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

interface StatItem {
  icon: React.ComponentType<any>;
  value: string;
  label: string;
  description: string;
}

const ContentStatistics: React.FC = () => {
  const stats: StatItem[] = [
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: Award,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service guarantee'
    },
    {
      icon: TrendingUp,
      value: '150%',
      label: 'Growth',
      description: 'Average client growth rate'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support',
      description: 'Round-the-clock assistance'
    }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
        <p className="text-gray-300 text-lg">
          Numbers that speak for our commitment to excellence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <stat.icon className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
            <div className="text-gray-500 text-xs">{stat.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentStatistics;