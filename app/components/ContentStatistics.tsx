'use client';

import React from 'react';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '500+',
      label: 'Projects Completed',
      color: 'text-cyan-400'
    },
    {
      icon: Users,
      value: '200+',
      label: 'Happy Clients',
      color: 'text-green-400'
    },
    {
      icon: Award,
      value: '99.9%',
      label: 'Uptime Guarantee',
      color: 'text-yellow-400'
    },
    {
      icon: Zap,
      value: '24/7',
      label: 'Support Available',
      color: 'text-purple-400'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our proven track record speaks for itself. We've helped hundreds of companies 
            transform their operations with cutting-edge AI and IT solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;
