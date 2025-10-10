'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    years: 0
  })

  const targetCounters = {
    clients: 500,
    projects: 1000,
    satisfaction: 99,
    years: 10
  }

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
      description: 'Leading the industry with cutting-edge AI solutions'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across 50+ countries'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: '99.9% uptime and lightning-fast response'
    }
  ];

  useEffect(() => {
    const timers = Object.keys(targetCounters).map(key => {
      const target = targetCounters[key as keyof typeof targetCounters]
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      
      return setInterval(() => {
        setCounters(prev => {
          const current = prev[key as keyof typeof prev]
          if (current < target) {
            return {
              ...prev,
              [key]: Math.min(current + increment, target)
            }
          }
          return prev;
        })
      }, 16);
    })

    return () => {
      timers.forEach(timer => clearInterval(timer));
    }
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've transformed businesses worldwide with our AI and IT solutions
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                <div className="text-4xl font-bold text-white mb-2">
                  {Math.floor(stat.value)}{stat.suffix}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;