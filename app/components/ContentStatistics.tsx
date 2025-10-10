'use client';

import React from 'react';
import { TrendingUp, Users, Award, Globe } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: Award,
      value: '500+',
      label: 'Projects Completed',
      description: 'Successful implementations'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service delivery'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Countries',
      description: 'Global presence and reach'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Trusted by <span className="text-cyan-400">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our track record speaks for itself. See why thousands of businesses trust us with their technology needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-xl font-semibold text-cyan-400 mb-2">{stat.label}</div>
              <div className="text-gray-300">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;