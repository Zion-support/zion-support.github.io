'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Users, TrendingUp, Globe, Award, CheckCircle, Star, Zap, Shield } from 'lucide-react';

interface Statistic {
  id: string;
  value: number;
  label: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState<Record<string, number>>({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const statistics: Statistic[] = [
    {
      id: 'clients',
      value: 500,
      label: 'Happy Clients',
      description: 'Businesses transformed with our solutions',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'projects',
      value: 1000,
      label: 'Projects Completed',
      description: 'Successful implementations across industries',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'uptime',
      value: 99.9,
      label: 'Uptime Guarantee',
      description: 'Reliable service you can count on',
      icon: Shield,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'satisfaction',
      value: 98,
      label: 'Client Satisfaction',
      description: 'Based on customer feedback surveys',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'growth',
      value: 300,
      label: 'Average Growth',
      description: 'Business growth achieved by our clients',
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'countries',
      value: 25,
      label: 'Countries Served',
      description: 'Global presence and local expertise',
      icon: Globe,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const targetCounters = statistics.reduce((acc, stat) => {
    acc[stat.id] = stat.value;
    return acc;
  }, {} as Record<string, number>);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const startCounters = () => {
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
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 16);
    });
  };

  return (
    <div ref={sectionRef} className="py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See the measurable results we've delivered for businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statistics.map((stat) => (
            <div
              key={stat.id}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {counters[stat.id] || 0}
                {stat.id === 'uptime' || stat.id === 'satisfaction' ? '%' : stat.id === 'growth' ? '%' : '+'}
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-gray-300 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
            <p className="text-gray-300">Round-the-clock technical assistance</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Industry Awards</h3>
            <p className="text-gray-300">Recognized for excellence and innovation</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Security First</h3>
            <p className="text-gray-300">Enterprise-grade security standards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;