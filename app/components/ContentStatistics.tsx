'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Brain, BarChart, Target, TrendingUp, Users, Globe, Database, Settings, Shield, Zap } from 'lucide-react';

interface Statistic {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  suffix?: string;
  description?: string;
}

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    countries: 0,
    data: 0,
    security: 0,
    performance: 0
  });

  const statistics: Statistic[] = [
    {
      icon: Users,
      label: "Happy Clients",
      value: counters.clients,
      suffix: "+",
      description: "Satisfied customers worldwide"
    },
    {
      icon: Target,
      label: "Projects Completed",
      value: counters.projects,
      suffix: "+",
      description: "Successful project deliveries"
    },
    {
      icon: Globe,
      label: "Countries Served",
      value: counters.countries,
      suffix: "+",
      description: "Global presence and reach"
    },
    {
      icon: Database,
      label: "Data Processed",
      value: counters.data,
      suffix: "TB",
      description: "Big data analytics and processing"
    },
    {
      icon: Shield,
      label: "Security Score",
      value: counters.security,
      suffix: "%",
      description: "Enterprise-grade security"
    },
    {
      icon: Zap,
      label: "Performance Boost",
      value: counters.performance,
      suffix: "%",
      description: "Average performance improvement"
    }
  ];

  const animateCounter = (targetValue: number, duration: number = 2000) => {
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = targetValue / steps;
    
    let currentValue = 0;
    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(interval);
      }
      setCounters(prev => ({
        ...prev,
        clients: Math.round(currentValue * 0.8),
        projects: Math.round(currentValue * 1.2),
        countries: Math.round(currentValue * 0.3),
        data: Math.round(currentValue * 2.5),
        security: Math.round(currentValue * 0.99),
        performance: Math.round(currentValue * 0.85)
      }));
    }, stepDuration);
  };

  useEffect(() => {
    animateCounter(1000);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the scale and impact of our technology solutions across industries and continents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <stat.icon className="h-8 w-8 text-blue-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-lg font-semibold text-gray-200 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto">
            View Detailed Analytics
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;