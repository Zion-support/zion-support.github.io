'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Globe, Zap } from 'lucide-react';

interface Statistic {
  id: number;
  value: string;
  label: string;
  icon: React.ComponentType<any>;
  color: string;
}

const ContentStatistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const statistics: Statistic[] = [
    {
      id: 1,
      value: '500+',
      label: 'Projects Completed',
      icon: TrendingUp,
      color: 'text-green-400'
    },
    {
      id: 2,
      value: '98%',
      label: 'Client Satisfaction',
      icon: Users,
      color: 'text-blue-400'
    },
    {
      id: 3,
      value: '50+',
      label: 'Countries Served',
      icon: Globe,
      color: 'text-purple-400'
    },
    {
      id: 4,
      value: '24/7',
      label: 'Support Available',
      icon: Zap,
      color: 'text-yellow-400'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Delivering exceptional results for businesses worldwide with our innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={stat.id}
              className={`text-center transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className={`w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-purple-100 text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;