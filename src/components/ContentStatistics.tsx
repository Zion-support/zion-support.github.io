import React from 'react';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: '300%',
      label: 'Average ROI',
      description: 'Our clients see an average return on investment of 300%'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Happy Clients',
      description: 'Over 500 satisfied clients across various industries'
    },
    {
      icon: Award,
      number: '50+',
      label: 'Awards Won',
      description: 'Recognition from leading industry organizations'
    },
    {
      icon: Zap,
      number: '99.9%',
      label: 'Uptime',
      description: 'Reliable service with 99.9% uptime guarantee'
    }
  ];

  return (
    <div className="py-16 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Track Record</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Numbers that speak for themselves - our commitment to excellence shows in every metric.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-gray-300 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;