'use client';
import React from 'react';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      value: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered AI and IT solutions'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      value: '300%',
      label: 'Average ROI',
      description: 'Return on investment for our clients'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      value: '99%',
      label: 'Client Satisfaction',
      description: 'Happy clients worldwide'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      value: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock technical support'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Our Impact</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and client success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-300 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;