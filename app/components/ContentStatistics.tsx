'use client';
import React, { useState, useEffect } from 'react';
import { Users, TrendingUp, Shield, Zap } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    uptime: 0,
    satisfaction: 0
  });

  const targetCounters = {
    clients: 500,
    projects: 1000,
    uptime: 99.9,
    satisfaction: 98
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    const animateCounter = (key: keyof typeof targetCounters) => {
      const target = targetCounters[key];
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.round(current * 10) / 10
        }));
      }, duration / steps);

      timers.push(timer);
    };

    // Start animations with slight delays
    Object.keys(targetCounters).forEach((key, index) => {
      setTimeout(() => {
        animateCounter(key as keyof typeof targetCounters);
      }, index * 100);
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  const stats = [
    {
      icon: Users,
      value: `${counters.clients}+`,
      label: 'Happy Clients',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      value: `${counters.projects}+`,
      label: 'Projects Completed',
      color: 'from-green-500 to-blue-600'
    },
    {
      icon: Shield,
      value: `${counters.uptime}%`,
      label: 'Uptime Guarantee',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Zap,
      value: `${counters.satisfaction}%`,
      label: 'Client Satisfaction',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 text-center">
            <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
              <stat.icon className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">
              {stat.value}
            </div>
            <div className="text-gray-300 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentStatistics;
