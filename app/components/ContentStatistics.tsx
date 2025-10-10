'use client';
import React from 'react';
import { Users, TrendingUp, Shield, Zap, Clock, Globe, Award, Target } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered',
      color: 'text-cyan-400'
    },
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Average ROI',
      description: 'For our clients',
      color: 'text-green-400'
    },
    {
      icon: Shield,
      value: '99.9%',
      label: 'Uptime',
      description: 'Service reliability',
      color: 'text-purple-400'
    },
    {
      icon: Zap,
      value: '24/7',
      label: 'Support',
      description: 'Always available',
      color: 'text-orange-400'
    },
    {
      icon: Clock,
      value: '2-4',
      label: 'Weeks',
      description: 'Average delivery time',
      color: 'text-blue-400'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Countries',
      description: 'Global presence',
      color: 'text-pink-400'
    },
    {
      icon: Award,
      value: '100%',
      label: 'Client Satisfaction',
      description: 'Based on reviews',
      color: 'text-yellow-400'
    },
    {
      icon: Target,
      value: '95%',
      label: 'Process Automation',
      description: 'Efficiency achieved',
      color: 'text-red-400'
    }
  ];

  return (
    <section className="py-16 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Measurable results that speak to our commitment to excellence and client success.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-${stat.color.split('-')[1]}-500/10 to-${stat.color.split('-')[1]}-600/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-gray-400 text-xs">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;