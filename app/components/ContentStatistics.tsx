'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    years: 0
  });

  const targetCounters = {
    clients: 500,
    projects: 1000,
    satisfaction: 99,
    years: 10
  };

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          clients: Math.floor(targetCounters.clients * progress),
          projects: Math.floor(targetCounters.projects * progress),
          satisfaction: Math.floor(targetCounters.satisfaction * progress),
          years: Math.floor(targetCounters.years * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targetCounters);
        }
      }, stepDuration);
    };

    animateCounters();
  }, []);

  const stats = [
    {
      icon: Users,
      value: counters.clients,
      label: 'Happy Clients',
      description: 'Companies trust us with their technology needs'
    },
    {
      icon: Award,
      value: counters.projects,
      label: 'Projects Completed',
      description: 'Successful implementations across various industries'
    },
    {
      icon: TrendingUp,
      value: counters.satisfaction,
      label: 'Client Satisfaction',
      description: 'Percentage of clients who rate us excellent'
    },
    {
      icon: Clock,
      value: counters.years,
      label: 'Years of Experience',
      description: 'Proven track record in AI and IT solutions'
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped businesses transform with our AI and IT solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="cyber-card hologram-card p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">
                {stat.value}{stat.label === 'Client Satisfaction' ? '%' : '+'}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-gray-300 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;