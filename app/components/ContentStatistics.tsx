'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, Users, Target, BarChart, Brain, TrendingUp } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [stats, setStats] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    experience: 0,
  });

  useEffect(() => {
    const targetStats = {
      clients: 500,
      projects: 1000,
      satisfaction: 99,
      experience: 10,
    };

    const animateStats = () => {
      setStats(prevStats => ({
        clients: Math.min(prevStats.clients + 10, targetStats.clients),
        projects: Math.min(prevStats.projects + 20, targetStats.projects),
        satisfaction: Math.min(prevStats.satisfaction + 1, targetStats.satisfaction),
        experience: Math.min(prevStats.experience + 1, targetStats.experience),
      }));
    };

    const interval = setInterval(animateStats, 50);
    return () => clearInterval(interval);
  }, []);

  const statistics = [
    {
      icon: Users,
      value: stats.clients,
      label: 'Happy Clients',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      value: stats.projects,
      label: 'Projects Completed',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Award,
      value: stats.satisfaction,
      label: 'Client Satisfaction %',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Brain,
      value: stats.experience,
      label: 'Years of Experience',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-xl text-gray-300">Numbers that speak for themselves</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full mb-4`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value.toLocaleString()}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;