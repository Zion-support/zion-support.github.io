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
      suffix: '+',
      icon: Award,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      description: 'Successful AI and IT implementations'
    },
    {
      id: 'clients',
      label: 'Happy Clients',
      value: 200,
      suffix: '+',
      icon: Users,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      description: 'Satisfied customers worldwide'
    },
    {
      id: 'uptime',
      label: 'Uptime Guarantee',
      value: 99.9,
      suffix: '%',
      icon: Shield,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      description: 'Reliable service delivery'
    },
    {
      id: 'satisfaction',
      label: 'Client Satisfaction',
      value: 98,
      suffix: '%',
      icon: Star,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      description: 'Customer satisfaction rate'
    },
    {
      id: 'countries',
      label: 'Countries Served',
      value: 25,
      suffix: '+',
      icon: Globe,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      description: 'Global presence and reach'
    },
    {
      id: 'years',
      label: 'Years Experience',
      value: 10,
      suffix: '+',
      icon: Clock,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      description: 'Industry expertise and knowledge'
    }
  ];
)
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
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      stats.forEach((stat) => {
        let currentStep = 0;
        const increment = stat.value / steps;

        const timer = setInterval(() => {
          currentStep++;
          setCounts((prev) => ({
            ...prev,
            [stat.id]: Math.min(Math.floor(increment * currentStep), stat.value)
          }));

          if (currentStep >= steps) {
            clearInterval(timer);
            setCounts((prev) => ({
              ...prev,
              [stat.id]: stat.value
            }));
          }
        }, stepDuration);
      });
    }
  }, [isVisible, stats]);

  return (
    <section id="statistics-section" className="py-16" aria-labelledby="statistics-heading">
      <div className="container mx-auto px-4">
        <h2 id="statistics-heading" className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">Our Impact<p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">Numbers that speak for themselves. We've been delivering exceptional results for our clients across the globe.<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">{stats.map((stat) => (</div>
            <div
              key={stat.id}
              className={`${stat.bgColor} rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cyber-card`}
            >
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-full ${stat.bgColor} ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>{stat.id === 'uptime' || stat.id === 'satisfaction'
                  ? `${counts[stat.id as keyof typeof counts]}${stat.suffix}`
                  : `${counts[stat.id as keyof typeof counts]}${stat.suffix}`</div>
                }</div>
              <h3 className="text-lg font-semibold text-white mb-2"> className="text-gray-400 text-sm"</h3>
            <p className="text-gray-400 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Additional achievements */}
        <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 cyber-card">
          <h3 className="text-2xl font-bold text-white text-center mb-8 neon-text">Industry Recognition</h3>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🏆<h4 className="font-semibold text-white mb-1">Best AI Company 2024<p className="text-gray-400 text-sm">Tech Innovation Awards</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-2">⭐<h4 className="font-semibold text-white mb-1">5-Star Rating<p className="text-gray-400 text-sm">Client Reviews</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-2">🔒<h4 className="font-semibold text-white mb-1">ISO 27001 Certified<p className="text-gray-400 text-sm">Security Standards</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-2">🚀<h4 className="font-semibold text-white mb-1">Fastest Growing<p className="text-gray-400 text-sm">AI Solutions Provider</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;