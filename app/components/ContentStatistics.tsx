import React from 'react';
import { TrendingUp, Users, Zap, Shield } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '$50M+',
      label: 'Annual Savings Delivered',
      color: 'text-green-400'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Enterprise Clients',
      color: 'text-blue-400'
    },
    {
      icon: Zap,
      value: '95%',
      label: 'Process Automation',
      color: 'text-yellow-400'
    },
    {
      icon: Shield,
      value: '99.9%',
      label: 'Uptime Guarantee',
      color: 'text-purple-400'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Proven Results
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
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
