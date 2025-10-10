'use client';
import React, { useState, useEffect } from 'react';
import { Users, Award, Clock, Star, Shield, Globe } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    uptime: 0,
    satisfaction: 0,
    countries: 0,
    years: 0
  });

  const stats = [
    {
      id: 'projects',
      label: 'Projects Completed',
      value: 500,
      icon: Award,
      color: 'text-cyan-400',
      suffix: '+'
    },
    {
      id: 'clients',
      label: 'Happy Clients',
      value: 200,
      icon: Users,
      color: 'text-purple-400',
      suffix: '+'
    },
    {
      id: 'uptime',
      label: 'Uptime Guarantee',
      value: 99.9,
      icon: Clock,
      color: 'text-green-400',
      suffix: '%'
    },
    {
      id: 'satisfaction',
      label: 'Client Satisfaction',
      value: 98,
      icon: Star,
      color: 'text-yellow-400',
      suffix: '%'
    },
    {
      id: 'countries',
      label: 'Countries Served',
      value: 25,
      icon: Globe,
      color: 'text-blue-400',
      suffix: '+'
    },
    {
      id: 'years',
      label: 'Years Experience',
      value: 15,
      icon: Shield,
      color: 'text-red-400',
      suffix: '+'
    }
  ];

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

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat) => {
      const targetValue = stat.value;
      const increment = targetValue / steps;
      let currentValue = 0;

      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          currentValue = targetValue;
          clearInterval(timer);
        }

        setCounts((prev) => ({
          ...prev,
          [stat.id]: Math.floor(currentValue)
        }));
      }, stepDuration);
    });
  }, [isVisible, stats]);

  return (
    <div id="statistics-section" className="w-full max-w-6xl mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our Impact in Numbers
        </h2>
        <p className="text-gray-300 text-lg">
          Delivering exceptional results for businesses worldwide
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {stats.map((stat) => (
          <div key={stat.id} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
            <div className={`text-3xl font-bold ${stat.color} mb-2`}>
              {counts[stat.id as keyof typeof counts]}{stat.suffix}
            </div>
            <div className="text-gray-300 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentStatistics;