'use client';
import React from 'react';
import { TrendingUp, Users, Shield, Zap, Star, Award } from 'lucide-react';

interface Statistic {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  trend?: string;
}

const ContentStatistics: React.FC = () => {
  const statistics: Statistic[] = [
    {
      id: '1',
      value: '10,000+',
      label: 'Happy Customers',
      description: 'Businesses trust us with their digital transformation',
      icon: <Users className="w-8 h-8" />,
      color: 'text-blue-500',
      trend: '+25% this year'
    },
    {
      id: '2',
      value: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Reliable service you can count on',
      icon: <Shield className="w-8 h-8" />,
      color: 'text-green-500',
      trend: '99.9% average'
    },
    {
      id: '3',
      value: '300%',
      label: 'Performance Boost',
      description: 'Average improvement in efficiency',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'text-purple-500',
      trend: '+50% this quarter'
    },
    {
      id: '4',
      value: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock technical assistance',
      icon: <Zap className="w-8 h-8" />,
      color: 'text-yellow-500',
      trend: 'Always online'
    },
    {
      id: '5',
      value: '4.9/5',
      label: 'Customer Rating',
      description: 'Based on verified customer reviews',
      icon: <Star className="w-8 h-8" />,
      color: 'text-orange-500',
      trend: '+0.2 this month'
    },
    {
      id: '6',
      value: '50+',
      label: 'Awards Won',
      description: 'Industry recognition and accolades',
      icon: <Award className="w-8 h-8" />,
      color: 'text-cyan-500',
      trend: '3 this year'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real businesses that have transformed their operations with our solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statistics.map((stat) => (
            <div key={stat.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="text-center">
                <div className={`${stat.color} mb-4 flex justify-center group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </div>
                
                <div className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </div>
                
                <div className="text-gray-300 text-sm mb-3">
                  {stat.description}
                </div>
                
                {stat.trend && (
                  <div className="text-cyan-400 text-sm font-medium">
                    {stat.trend}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Start your transformation journey today and become part of our growing community of successful businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;
