'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Brain, BarChart, Target, TrendingUp, Users, Globe, Database, Settings, Shield, Zap } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    years: 0,
    countries: 0,
    uptime: 0
  });

  const targetCounters = {
    clients: 1000,
    projects: 500,
    satisfaction: 99,
    years: 10,
    countries: 25,
    uptime: 99.9
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    
    const interval = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev };
        let allComplete = true;
        
        Object.keys(targetCounters).forEach(key => {
          const target = targetCounters[key as keyof typeof targetCounters];
          const current = prev[key as keyof typeof prev];
          const increment = target / steps;
          
          if (current < target) {
            newCounters[key as keyof typeof newCounters] = Math.min(
              current + increment,
              target
            );
            allComplete = false;
          }
        });
        
        if (allComplete) {
          clearInterval(interval);
        }
        
        return newCounters;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const statistics = [
    {
      icon: Users,
      label: "Happy Clients",
      value: Math.round(counters.clients),
      suffix: "+",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart,
      label: "Projects Completed",
      value: Math.round(counters.projects),
      suffix: "+",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      label: "Client Satisfaction",
      value: Math.round(counters.satisfaction),
      suffix: "%",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      label: "Years Experience",
      value: Math.round(counters.years),
      suffix: "+",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      label: "Countries Served",
      value: Math.round(counters.countries),
      suffix: "+",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      label: "Uptime Guarantee",
      value: counters.uptime.toFixed(1),
      suffix: "%",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped businesses across the globe achieve their digital transformation goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-6">
              Let us help you achieve similar results with our proven expertise and innovative solutions.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;