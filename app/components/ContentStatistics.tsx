'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Globe, Zap, CheckCircle } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    countries: 0,
    satisfaction: 0
  });

  const targetCounters = {
    projects: 500,
    clients: 1000,
    countries: 50,
    satisfaction: 98
  };

  useEffect(() => {
    const animateCounters = () => {
      Object.keys(targetCounters).forEach((key) => {
        const target = targetCounters[key as keyof typeof targetCounters];
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps

        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, 16);

        return () => clearInterval(timer);
      });
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      value: `${counters.projects}+`,
      label: 'Projects Completed',
      description: 'Successful AI and IT implementations'
    },
    {
      icon: Users,
      value: `${counters.clients}+`,
      label: 'Happy Clients',
      description: 'Businesses transformed worldwide'
    },
    {
      icon: Globe,
      value: `${counters.counters.countries}+`,
      label: 'Countries Served',
      description: 'Global presence and reach'
    },
    {
      icon: CheckCircle,
      value: `${counters.satisfaction}%`,
      label: 'Client Satisfaction',
      description: 'Highly rated by our clients'
    }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
        <p className="text-gray-300 text-lg">Numbers that speak for themselves</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <stat.icon className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
            <div className="text-white font-semibold mb-2">{stat.label}</div>
            <div className="text-gray-400 text-sm">{stat.description}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-2xl font-bold text-white mb-2">$50M+</div>
            <div className="text-gray-300">Cost Savings Generated</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-2xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Uptime Guarantee</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-2xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;