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

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const timers = Object.keys(targetCounters).map((key) => {
      const target = targetCounters[key as keyof typeof targetCounters];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timers[0]);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-300">See how we've helped businesses transform with our AI and IT solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {statistics.map((stat, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="cyber-card hologram-card p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Why Our Clients Choose Us</h3>
              <p className="text-gray-300">We deliver exceptional results through innovative technology and expert implementation</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">AI Innovation</h4>
                <p className="text-gray-300 text-sm">Cutting-edge AI solutions that drive real business value</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Fast Delivery</h4>
                <p className="text-gray-300 text-sm">Rapid deployment and implementation of solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Enterprise Security</h4>
                <p className="text-gray-300 text-sm">Bank-level security and compliance standards</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Global Support</h4>
                <p className="text-gray-300 text-sm">Worldwide deployment with local support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;