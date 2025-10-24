'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, Users, Target, BarChart, Brain, TrendingUp } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [stats, setStats] = useState({
    clients: "0",
    projects: "0",
    satisfaction: "0",
    experience: "0",
  });

  useEffect(() => {
    const targetStats = {
      clients: "500",
      projects: "1000",
      satisfaction: "99",
      experience: "5",
    };

    const animateValue = (key: keyof typeof targetStats, start: number, end: number, duration: number) => {
      const startTimestamp = performance.now();
      const step = (timestamp: number) => {
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        setStats(prev => ({ ...prev, [key]: current.toString() }));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    const timer = setTimeout(() => {
      animateValue('clients', 0, 500, 2000);
      animateValue('projects', 0, 1000, 2000);
      animateValue('satisfaction', 0, 99, 2000);
      animateValue('experience', 0, 5, 2000);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const statistics = [
    {
      icon: <Users className="h-8 w-8" />,
      value: stats.clients,
      label: "Happy Clients",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Target className="h-8 w-8" />,
      value: stats.projects,
      label: "Projects Completed",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: `${stats.satisfaction}%`,
      label: "Client Satisfaction",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: `${stats.experience}+`,
      label: "Years Experience",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering exceptional results through innovative AI solutions and technology services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
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