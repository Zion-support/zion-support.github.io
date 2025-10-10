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

  const statistics = [
    {
      icon: Users,
      value: counters.clients,
      label: 'Happy Clients',
      suffix: '+',
      color: 'text-cyan-400'
    },
    {
      icon: Award,
      value: counters.projects,
      label: 'Projects Completed',
      suffix: '+',
      color: 'text-purple-400'
    },
    {
      icon: TrendingUp,
      value: counters.satisfaction,
      label: 'Client Satisfaction',
      suffix: '%',
      color: 'text-green-400'
    },
    {
      icon: Clock,
      value: counters.years,
      label: 'Years Experience',
      suffix: '+',
      color: 'text-yellow-400'
    }
  ];

  const achievements = [
    {
      icon: Brain,
      title: 'AI Innovation',
      description: 'Leading the industry in AI-powered solutions',
      metric: '50+ AI Models'
    },
    {
      icon: Shield,
      title: 'Security Excellence',
      description: 'Zero security breaches in 10 years',
      metric: '100% Secure'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across 25+ countries',
      metric: '25+ Countries'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: '99.9% uptime guarantee',
      metric: '99.9% Uptime'
    }
  ];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    Object.keys(targetCounters).forEach((key) => {
      const target = targetCounters[key as keyof typeof targetCounters];
      const timer = setInterval(() => {
        setCounters(prev => {
          const current = prev[key as keyof typeof prev];
          if (current < target) {
            const increment = Math.ceil(target / 100);
            return {
              ...prev,
              [key]: Math.min(current + increment, target)
            };
          }
          return prev;
        });
      }, 50);
      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Statistics Counter */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering exceptional results through innovative technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Key Achievements</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Recognized excellence in technology innovation and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300 mb-4">{achievement.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{achievement.metric}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContentStatistics;