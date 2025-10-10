'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    team: 0
  });

  const stats = [
    {
      icon: Award,
      label: 'Projects Completed',
      value: counts.projects,
      suffix: '+',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      label: 'Happy Clients',
      value: counts.clients,
      suffix: '+',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      label: 'Years Experience',
      value: counts.years,
      suffix: '+',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: TrendingUp,
      label: 'Team Members',
      value: counts.team,
      suffix: '+',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const targetValues = {
    projects: 500,
    clients: 1000,
    years: 5,
    team: 50
  };

  useEffect(() => {
    const timers = Object.keys(targetValues).map(key => {
      const target = targetValues[key as keyof typeof targetValues];
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = target / steps;
      const stepDuration = duration / steps;

      return setInterval(() => {
        setCounts(prev => {
          const current = prev[key as keyof typeof prev];
          if (current < target) {
            return {
              ...prev,
              [key]: Math.min(current + increment, target)
            };
          }
          return prev;
        });
      }, stepDuration);
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped businesses grow and succeed with our innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {Math.floor(stat.value)}{stat.suffix}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;