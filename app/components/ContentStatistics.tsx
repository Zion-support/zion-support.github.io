import React from 'react';
import { Users, Award, TrendingUp, Clock } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      number: '50+',
      label: 'Successful Projects',
      icon: Award,
      color: 'text-cyan-400'
    },
    {
      number: '100+',
      label: 'Happy Clients',
      icon: Users,
      color: 'text-purple-400'
    },
    {
      number: '300%',
      label: 'Average ROI',
      icon: TrendingUp,
      color: 'text-green-400'
    },
    {
      number: '99.9%',
      label: 'Uptime Guarantee',
      icon: Clock,
      color: 'text-yellow-400'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-xl text-gray-300">Numbers that speak to our success</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center cyber-card p-6">
              <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;
