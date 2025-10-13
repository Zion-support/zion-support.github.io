'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock, BarChart, Star } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    years: 0,
    savings: 0,
    uptime: 0
  });

  const targetCounters = {
    clients: 500,
    projects: 1000,
    satisfaction: 99,
    years: 10,
    savings: 50,
    uptime: 99
  };

  const statistics = [
    {
      icon: Users,
      value: counters.clients,
      label: 'Happy Clients',
      suffix: '+',
      color: 'text-cyan-400',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: Award,
      value: counters.projects,
      label: 'Projects Completed',
      suffix: '+',
      color: 'text-purple-400',
      description: 'Successful implementations'
    },
    {
      icon: TrendingUp,
      value: counters.satisfaction,
      label: 'Client Satisfaction',
      suffix: '%',
      color: 'text-green-400',
      description: 'Customer satisfaction rate'
    },
    {
      icon: Clock,
      value: counters.years,
      label: 'Years Experience',
      suffix: '+',
      color: 'text-yellow-400',
      description: 'Industry expertise'
    },
    {
      icon: BarChart,
      value: counters.savings,
      label: 'Million Saved',
      suffix: 'M+',
      color: 'text-pink-400',
      description: 'Client cost savings'
    },
    {
      icon: Shield,
      value: counters.uptime,
      label: 'Uptime Guarantee',
      suffix: '%',
      color: 'text-blue-400',
      description: 'Service reliability'
    }
  ];

  const achievements = [
    {
      title: 'Industry Recognition',
      description: 'Awarded "Best AI Solutions Provider" by Tech Industry Association',
      icon: Star
    },
    {
      title: 'Global Expansion',
      description: 'Successfully expanded to 25+ countries with local support teams',
      icon: Globe
    },
    {
      title: 'Innovation Leader',
      description: 'Pioneered 15+ breakthrough technologies in AI and cloud computing',
      icon: Brain
    },
    {
      title: 'Client Success',
      description: 'Helped clients achieve average 300% ROI within first year',
      icon: TrendingUp
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
        {/* Achievements Section */} <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 md: p-12">,</div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Why We're Different</h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">Our commitment to excellence and innovation sets us apart in the industry.</p>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,</div>
            {achievements.map((achievement, index) => (
              <div key={index}className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-full">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                  <p className="text-gray-300">{achievement.description</p>}</p>
                </div>
  );
});

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Statistics */}
        <div className="cyber-card hologram-card p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="cyber-card hologram-card p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center neon-text">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="cyber-card hologram-card p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Performance Metrics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Response Time</span>
                <span className="text-cyan-400 font-semibold">&lt; 100ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Processing Speed</span>
                <span className="text-green-400 font-semibold">10x Faster</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Data Accuracy</span>
                <span className="text-purple-400 font-semibold">99.9%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">System Reliability</span>
                <span className="text-yellow-400 font-semibold">99.99%</span>
              </div>
            </div>
          </div>

          <div className="cyber-card hologram-card p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Client Success</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Average ROI</span>
                <span className="text-green-400 font-semibold">300%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Cost Reduction</span>
                <span className="text-cyan-400 font-semibold">40%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Efficiency Gain</span>
                <span className="text-purple-400 font-semibold">250%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Time Savings</span>
                <span className="text-yellow-400 font-semibold">60%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
export default ContentStatisticsPage;
