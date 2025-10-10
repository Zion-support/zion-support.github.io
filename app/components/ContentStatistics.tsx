'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock, Star, BarChart3, Target, Rocket } from 'lucide-react';

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
    clients: 10000,
    projects: 5000,
    satisfaction: 99,
    years: 15,
    countries: 50,
    uptime: 99.9
  };

  const stats = [
    {
      icon: Users,
      value: counters.clients,
      suffix: '+',
      label: 'Happy Clients',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      icon: Rocket,
      value: counters.projects,
      suffix: '+',
      label: 'Projects Completed',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    {
      icon: Star,
      value: counters.satisfaction,
      suffix: '%',
      label: 'Client Satisfaction',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10'
    },
    {
      icon: Award,
      value: counters.years,
      suffix: '+',
      label: 'Years Experience',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10'
    },
    {
      icon: Globe,
      value: counters.countries,
      suffix: '+',
      label: 'Countries Served',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10'
    },
    {
      icon: Zap,
      value: counters.uptime,
      suffix: '%',
      label: 'Uptime Guarantee',
      color: 'text-red-400',
      bgColor: 'bg-red-400/10'
    }
  ];

  const achievements = [
    {
      icon: Brain,
      title: 'AI Innovation',
      description: 'Leading the industry in AI-powered solutions',
      metric: '50+ AI Models Deployed'
    },
    {
      icon: Shield,
      title: 'Security Excellence',
      description: 'Zero security breaches in 15 years',
      metric: '100% Security Record'
    },
    {
      icon: BarChart3,
      title: 'Performance',
      description: 'Consistently exceeding client expectations',
      metric: '99% Project Success Rate'
    },
    {
      icon: Target,
      title: 'Client Focus',
      description: 'Dedicated to client success and satisfaction',
      metric: '95% Client Retention'
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      Object.keys(targetCounters).forEach((key) => {
        const target = targetCounters[key as keyof typeof targetCounters];
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, stepDuration);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div id="stats-section" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak for themselves. We've been delivering exceptional results for over a decade.
          </p>
        </div>

        {/* Main Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <achievement.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
              <p className="text-gray-300 mb-4">{achievement.description}</p>
              <div className="text-blue-400 font-semibold text-sm">{achievement.metric}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-6">
              Let us help you achieve similar results with our proven AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;