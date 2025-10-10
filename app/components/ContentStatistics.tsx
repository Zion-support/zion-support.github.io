'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, DollarSign, Clock, CheckCircle, Star } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [animatedStats, setAnimatedStats] = useState({
    clients: 0,
    projects: 0,
    savings: 0,
    uptime: 0
  });

  const stats = [
    {
      icon: Users,
      label: 'Happy Clients',
      value: 1000,
      suffix: '+',
      color: 'text-cyan-400',
      description: 'Businesses transformed'
    },
    {
      icon: CheckCircle,
      label: 'Projects Completed',
      value: 500,
      suffix: '+',
      color: 'text-blue-400',
      description: 'Successful implementations'
    },
    {
      icon: DollarSign,
      label: 'Cost Savings',
      value: 50,
      suffix: 'M+',
      color: 'text-green-400',
      description: 'Annual savings generated'
    },
    {
      icon: Clock,
      label: 'Uptime',
      value: 99.9,
      suffix: '%',
      color: 'text-purple-400',
      description: 'System reliability'
    }
  ];

  const achievements = [
    '95% Client Satisfaction Rate',
    '300% Average ROI Increase',
    '24/7 Expert Support',
    'Enterprise-Grade Security',
    'Global Presence in 25+ Countries',
    'ISO 27001 Certified'
  ];

  useEffect(() => {
    const timers = stats.map((stat, index) => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = stat.value / steps;
      const stepDuration = duration / steps;

      return setInterval(() => {
        setAnimatedStats(prev => ({
          ...prev,
          [Object.keys(prev)[index]]: Math.min(
            prev[Object.keys(prev)[index]] + increment,
            stat.value
          )
        }));
      }, stepDuration);
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Impact in Numbers</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped businesses achieve remarkable results with our AI and IT solutions.
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                {Math.floor(animatedStats[Object.keys(animatedStats)[index]])}{stat.suffix}
              </div>
              <div className="text-white font-semibold mb-2">{stat.label}</div>
              <div className="text-gray-300 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300 font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Stats */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <div className="flex items-center justify-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-white font-semibold">4.9/5</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Client Satisfaction</h3>
            <p className="text-gray-300 mb-6">
              Based on 500+ verified reviews from our clients worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                Read Reviews
              </button>
              <button className="border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
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