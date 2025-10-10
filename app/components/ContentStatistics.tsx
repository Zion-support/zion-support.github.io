'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Zap, CheckCircle, ArrowRight, Star, Globe, Shield, Brain } from 'lucide-react';

interface Statistic {
  id: string;
  value: string;
  label: string;
  change: string;
  trend: 'up' | 'down' | 'stable';
  icon: React.ComponentType<any>;
  color: string;
}

interface Achievement {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  value: string;
}

const ContentStatistics: React.FC = () => {
  const [animatedStats, setAnimatedStats] = useState<{ [key: string]: number }>({});

  const statistics: Statistic[] = [
    {
      id: 'projects',
      value: '500+',
      label: 'Projects Completed',
      change: '+25%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-green-500'
    },
    {
      id: 'clients',
      value: '200+',
      label: 'Happy Clients',
      change: '+40%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-500'
    },
    {
      id: 'uptime',
      value: '99.9%',
      label: 'Uptime Guarantee',
      change: 'Stable',
      trend: 'stable',
      icon: Shield,
      color: 'text-purple-500'
    },
    {
      id: 'performance',
      value: '3x',
      label: 'Performance Boost',
      change: '+150%',
      trend: 'up',
      icon: Zap,
      color: 'text-orange-500'
    },
    {
      id: 'satisfaction',
      value: '98%',
      label: 'Client Satisfaction',
      change: '+5%',
      trend: 'up',
      icon: Star,
      color: 'text-yellow-500'
    },
    {
      id: 'global',
      value: '50+',
      label: 'Countries Served',
      change: '+10',
      trend: 'up',
      icon: Globe,
      color: 'text-indigo-500'
    }
  ];

  const achievements: Achievement[] = [
    {
      title: 'AI Innovation Award',
      description: 'Recognized for breakthrough AI solutions',
      icon: Brain,
      value: '2024'
    },
    {
      title: 'Security Excellence',
      description: 'Zero security breaches in 5 years',
      icon: Shield,
      value: '5 Years'
    },
    {
      title: 'Client Retention',
      description: '95% of clients stay with us',
      icon: Users,
      value: '95%'
    },
    {
      title: 'Performance Leader',
      description: 'Fastest response times in industry',
      icon: Zap,
      value: '1st Place'
    }
  ];

  // Animate numbers on mount
  useEffect(() => {
    const animateNumbers = () => {
      statistics.forEach((stat) => {
        const numericValue = parseInt(stat.value.replace(/[^\d]/g, ''));
        if (!isNaN(numericValue)) {
          let current = 0;
          const increment = numericValue / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              current = numericValue;
              clearInterval(timer);
            }
            setAnimatedStats(prev => ({
              ...prev,
              [stat.id]: Math.floor(current)
            }));
          }, 30);
        }
      });
    };

    const timer = setTimeout(animateNumbers, 500);
    return () => clearTimeout(timer);
  }, []);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down':
        return <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />;
      default:
        return <div className="h-4 w-4 bg-gray-400 rounded-full" />;
    }
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses transform and achieve their goals through innovative technology solutions.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {statistics.map((stat) => (
            <div key={stat.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gray-100 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-2">
                  {getTrendIcon(stat.trend)}
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 
                    stat.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.id in animatedStats ? 
                  (stat.value.includes('%') ? `${animatedStats[stat.id]}%` : 
                   stat.value.includes('x') ? `${animatedStats[stat.id]}x` :
                   stat.value.includes('+') ? `${animatedStats[stat.id]}+` :
                   stat.value) : 
                  stat.value
                }
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Recognition & Achievements</h3>
            <p className="text-xl text-blue-100">
              Our commitment to excellence has been recognized by industry leaders and our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 mb-4">
                  <achievement.icon className="h-12 w-12 text-white mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">{achievement.value}</div>
                  <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-blue-100 text-sm">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Let's work together to achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;