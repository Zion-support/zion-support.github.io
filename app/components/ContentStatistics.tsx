'use client';

import React, { useState, useEffect } from 'react';
import { Users, TrendingUp, Globe, Award, Star, Zap, Shield, Brain } from 'lucide-react';

interface StatItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  value: number;
  suffix: string;
  description: string;
  color: string;
}

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState<{ [key: string]: number }>({});
  const [isVisible, setIsVisible] = useState(false);

  const stats: StatItem[] = [
    {
      id: '1',
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Happy Customers',
      value: 10000,
      suffix: '+',
      description: 'Businesses trust our solutions',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: '2',
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Success Rate',
      value: 99,
      suffix: '%',
      description: 'Project completion rate',
      color: 'from-green-500 to-blue-600'
    },
    {
      id: '3',
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Countries Served',
      value: 50,
      suffix: '+',
      description: 'Global presence',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: '4',
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: 'Awards Won',
      value: 25,
      suffix: '+',
      description: 'Industry recognition',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: '5',
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'Client Rating',
      value: 49,
      suffix: '/5',
      description: 'Average client satisfaction',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: '6',
      icon: <Zap className="w-8 h-8 text-cyan-500" />,
      title: 'Uptime',
      value: 999,
      suffix: '%',
      description: 'Service reliability',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const targetCounters = stats.reduce((acc, stat) => {
    acc[stat.id] = stat.value;
    return acc;
  }, {} as { [key: string]: number });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('statistics-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateCounters = () => {
      stats.forEach((stat) => {
        const target = targetCounters[stat.id];
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
            [stat.id]: Math.floor(current)
          }));
        }, 16);
      });
    };

    animateCounters();
  }, [isVisible, stats, targetCounters]);

  return (
    <div id="statistics-section" className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped businesses worldwide achieve their goals with our innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {counters[stat.id] || 0}{stat.suffix}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{stat.title}</h3>
              <p className="text-gray-300 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Stats Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">AI Solutions Deployed</h3>
            <p className="text-3xl font-bold text-white mb-2">500+</p>
            <p className="text-gray-300">Advanced AI implementations</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Security Incidents Prevented</h3>
            <p className="text-3xl font-bold text-white mb-2">10,000+</p>
            <p className="text-gray-300">Threats blocked and prevented</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Performance Improvement</h3>
            <p className="text-3xl font-bold text-white mb-2">300%</p>
            <p className="text-gray-300">Average system performance boost</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;
