'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

interface Statistic {
  id: string;
  value: string;
  label: string;
  icon: React.ComponentType<any>;
  color: string;
}

const ContentStatistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const statistics: Statistic[] = [
    {
      id: '1',
      value: '500+',
      label: 'Projects Completed',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: '2',
      value: '150+',
      label: 'Happy Clients',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: '3',
      value: '99%',
      label: 'Success Rate',
      icon: Award,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: '4',
      value: '24/7',
      label: 'Support Available',
      icon: Zap,
      color: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped businesses transform their operations with our AI and IT solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={stat.id}
              className={`text-center group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-gray-300 text-lg group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;
