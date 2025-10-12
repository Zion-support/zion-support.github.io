import React from 'react';
import { TrendingUp, Users, Award, Globe } from 'lucide-react';

export default function ContentStatistics() {
  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      value: '99.9%',
      label: 'Uptime Guarantee'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      value: '10,000+',
      label: 'Happy Clients'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      value: '50+',
      label: 'Awards Won'
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      value: '100+',
      label: 'Countries Served'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="flex justify-center mb-2">
            {stat.icon}
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            {stat.value}
          </div>
          <div className="text-gray-400 text-sm">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}