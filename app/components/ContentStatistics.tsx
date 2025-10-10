'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock, Star, BarChart3, Target } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    clients: 0,
    uptime: 0,
    satisfaction: 0
  });

  const stats = [
    {
      value: 500,
      label: 'Projects Completed',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      value: 99.9,
      label: 'Uptime Guarantee',
      icon: Clock,
      color: 'from-green-500 to-emerald-500',
      suffix: '%'
    },
    {
      value: 150,
      label: 'Happy Clients',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      value: 5,
      label: 'Client Rating',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      suffix: '★'
    }
  ];

  const achievements = [
    {
      title: 'AI Innovation Award 2024',
      description: 'Recognized for breakthrough AI solutions',
      icon: Award,
      year: '2024'
    },
    {
      title: 'Best Cloud Provider',
      description: 'Leading cloud infrastructure services',
      icon: Globe,
      year: '2023'
    },
    {
      title: 'Security Excellence',
      description: 'Top-rated cybersecurity solutions',
      icon: Shield,
      year: '2023'
    }
  ];

  const performanceMetrics = [
    {
      metric: 'Response Time',
      value: '< 100ms',
      improvement: '+40%',
      icon: Zap
    },
    {
      metric: 'System Reliability',
      value: '99.9%',
      improvement: '+15%',
      icon: BarChart3
    },
    {
      metric: 'Customer Satisfaction',
      value: '98%',
      improvement: '+25%',
      icon: TrendingUp
    }
  ];

  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setAnimatedStats({
          projects: Math.floor(500 * progress),
          clients: Math.floor(150 * progress),
          uptime: Math.floor(99.9 * progress),
          satisfaction: Math.floor(98 * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setAnimatedStats({
            projects: 500,
            clients: 150,
            uptime: 99.9,
            satisfaction: 98
          });
        }
      }, stepDuration);
    };

    animateNumbers();
  }, []);

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Our Impact in Numbers</h2>
        <p className="text-gray-300">Measurable results that speak for themselves</p>
      </div>

      {/* Main Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
              <stat.icon className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">
              {stat.value}{stat.suffix || '+'}
            </div>
            <div className="text-gray-300 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {performanceMetrics.map((metric, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <metric.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{metric.metric}</h3>
                  <div className="text-2xl font-bold text-cyan-400">{metric.value}</div>
                </div>
              </div>
              <div className="text-green-400 text-sm font-medium">
                {metric.improvement}
              </div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${Math.min(100, 70 + index * 10)}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <achievement.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold">{achievement.title}</h3>
                  <span className="text-cyan-400 text-sm font-medium">{achievement.year}</span>
                </div>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Success Story?</h3>
          <p className="text-blue-100 mb-6">Let's work together to achieve similar results for your business</p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2 group">
            <span>Get Started Today</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;