'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Average ROI Increase',
      description: 'Our clients see significant returns on their AI investments',
      color: 'text-green-400',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
      description: 'Trusted by businesses worldwide',
      color: 'text-blue-400',
    },
    {
      icon: Award,
      value: '50+',
      label: 'Awards Won',
      description: 'Recognition for innovation and excellence',
      color: 'text-yellow-400',
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock assistance for our clients',
      color: 'text-purple-400',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Proven Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our track record speaks for itself. See what we've achieved for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`cyber-card p-6 text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className={`text-4xl font-bold mb-2 ${stat.color} neon-text`}>
                {stat.value}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-300 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">$50M+</div>
            <div className="text-sm text-gray-300">Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">95%</div>
            <div className="text-sm text-gray-300">Process Automation</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">99.9%</div>
            <div className="text-sm text-gray-300">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">15+</div>
            <div className="text-sm text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;
