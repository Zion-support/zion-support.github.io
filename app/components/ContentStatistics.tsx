'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Zap, Shield } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    uptime: 0,
    satisfaction: 0
  });

  const statistics = [
    {
      icon: TrendingUp,
      value: counters.projects,
      label: 'Projects Completed',
      suffix: '+',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Users,
      value: counters.clients,
      label: 'Happy Clients',
      suffix: '+',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      value: counters.uptime,
      label: 'Uptime',
      suffix: '%',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      value: counters.satisfaction,
      label: 'Client Satisfaction',
      suffix: '%',
      color: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    const animateCounter = (key: keyof typeof counters, target: number, duration: number) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 16);
      
      timers.push(timer);
    };

    // Animate counters with different durations
    animateCounter('projects', 500, 2000);
    animateCounter('clients', 200, 2500);
    animateCounter('uptime', 99, 3000);
    animateCounter('satisfaction', 98, 3500);

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've transformed businesses and delivered exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-300 text-lg">
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