'use client';
import React from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
      description: 'Companies worldwide trust our solutions'
    },
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Average ROI',
      description: 'Typical return on investment for our clients'
    },
    {
      icon: Award,
      value: '99%',
      label: 'Success Rate',
      description: 'Project completion and client satisfaction'
    },
    {
      icon: Clock,
      value: '30 Days',
      label: 'Results Guarantee',
      description: 'See measurable results within 30 days'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl border border-cyan-500/20 mb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proven Results
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our track record speaks for itself. Here's what we've achieved for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-cyan-400 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
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