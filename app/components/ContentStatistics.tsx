'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Clock, Star, Zap, Shield, Globe, Brain, Cloud, Target, BarChart } from 'lucide-react';

interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  trend?: {
    value: number;
    direction: 'up' | 'down' | 'neutral';
  };
}

const ContentStatistics: React.FC = () => {
  const [animatedStats, setAnimatedStats] = useState<Record<number, number>>({});
  const [isVisible, setIsVisible] = useState(false);

  const stats: StatItem[] = [
    {
      id: 1,
      value: "300%",
      label: "Average ROI",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-green-400",
      bgColor: "bg-gradient-to-br from-green-500/20 to-emerald-600/20",
      trend: { value: 15, direction: 'up' }
    },
    {
      id: 2,
      value: "500+",
      label: "Successful Projects",
      icon: <Award className="w-8 h-8" />,
      color: "text-yellow-400",
      bgColor: "bg-gradient-to-br from-yellow-500/20 to-orange-600/20",
      trend: { value: 25, direction: 'up' }
    },
    {
      id: 3,
      value: "10,000+",
      label: "Happy Clients",
      icon: <Users className="w-8 h-8" />,
      color: "text-blue-400",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-600/20",
      trend: { value: 30, direction: 'up' }
    },
    {
      id: 4,
      value: "99.9%",
      label: "Uptime Guarantee",
      icon: <Shield className="w-8 h-8" />,
      color: "text-purple-400",
      bgColor: "bg-gradient-to-br from-purple-500/20 to-pink-600/20",
      trend: { value: 0.1, direction: 'up' }
    },
    {
      id: 5,
      value: "50+",
      label: "AI Services",
      icon: <Brain className="w-8 h-8" />,
      color: "text-cyan-400",
      bgColor: "bg-gradient-to-br from-cyan-500/20 to-blue-600/20",
      trend: { value: 20, direction: 'up' }
    },
    {
      id: 6,
      value: "24/7",
      label: "Support Available",
      icon: <Clock className="w-8 h-8" />,
      color: "text-pink-400",
      bgColor: "bg-gradient-to-br from-pink-500/20 to-rose-600/20",
      trend: { value: 0, direction: 'neutral' }
    },
    {
      id: 7,
      value: "95%",
      label: "Process Automation",
      icon: <Zap className="w-8 h-8" />,
      color: "text-orange-400",
      bgColor: "bg-gradient-to-br from-orange-500/20 to-red-600/20",
      trend: { value: 10, direction: 'up' }
    },
    {
      id: 8,
      value: "150+",
      label: "Countries Served",
      icon: <Globe className="w-8 h-8" />,
      color: "text-teal-400",
      bgColor: "bg-gradient-to-br from-teal-500/20 to-green-600/20",
      trend: { value: 5, direction: 'up' }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
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
      stats.forEach((stat, index) => {
        const numericValue = parseFloat(stat.value.replace(/[^\d.]/g, ''));
        if (!isNaN(numericValue)) {
          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = numericValue / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              current = numericValue;
              clearInterval(timer);
            }

            setAnimatedStats(prev => ({
              ...prev,
              [stat.id]: current
            }));
          }, duration / steps);

          return () => clearInterval(timer);
        }
      });
    }
  }, [isVisible, stats]);

  const formatValue = (value: number, originalValue: string): string => {
    if (originalValue.includes('%')) {
      return `${Math.round(value)}%`;
    }
    if (originalValue.includes('+')) {
      return `${Math.round(value).toLocaleString()}+`;
    }
    if (originalValue.includes('/')) {
      return originalValue; // Don't animate time values
    }
    return Math.round(value).toLocaleString();
  };

  return (
    <section id="statistics-section" className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            See how we've helped businesses worldwide achieve unprecedented growth and efficiency
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`${stat.bgColor} rounded-2xl p-6 cyber-card transition-all duration-300 hover:scale-105 group`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color} bg-white/10`}>
                  {stat.icon}
                </div>
                {stat.trend && (
                  <div className={`flex items-center space-x-1 ${
                    stat.trend.direction === 'up' ? 'text-green-400' : 
                    stat.trend.direction === 'down' ? 'text-red-400' : 'text-gray-400'
                  }`}>
                    <TrendingUp className={`w-4 h-4 ${
                      stat.trend.direction === 'down' ? 'rotate-180' : ''
                    }`} />
                    <span className="text-sm font-medium">
                      {stat.trend.value}%
                    </span>
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <div className={`text-3xl font-bold ${stat.color} neon-pulse`}>
                  {isVisible ? formatValue(animatedStats[stat.id] || 0, stat.value) : '0'}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Metrics */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 cyber-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
              <div className="text-gray-300 font-medium">Annual Savings Generated</div>
              <div className="text-sm text-gray-400 mt-1">For our enterprise clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">70%</div>
              <div className="text-gray-300 font-medium">Average Cost Reduction</div>
              <div className="text-sm text-gray-400 mt-1">Through AI automation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-gray-300 font-medium">Efficiency Improvement</div>
              <div className="text-sm text-gray-400 mt-1">In business processes</div>
            </div>
          </div>
        </div>

        {/* Testimonial Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-2xl font-bold text-white mb-1">4.9/5</div>
            <div className="text-gray-400 text-sm">Average Client Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">48hrs</div>
            <div className="text-gray-400 text-sm">Average Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">100%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">5+</div>
            <div className="text-gray-400 text-sm">Years of Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;