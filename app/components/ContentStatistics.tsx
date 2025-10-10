'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Shield, Zap, Star, Globe, Award, Target } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [animatedStats, setAnimatedStats] = useState({
    clients: 0,
    projects: 0,
    uptime: 0,
    satisfaction: 0
  });

  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Target,
      value: 1000,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successful implementations',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      value: 99.9,
      suffix: '%',
      label: 'Uptime',
      description: 'Reliable service delivery',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Star,
      value: 4.9,
      suffix: '/5',
      label: 'Client Rating',
      description: 'Average customer satisfaction',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Industry Leader',
      description: 'Recognized as top AI solutions provider',
      year: '2024'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients in 25+ countries',
      year: '2024'
    },
    {
      icon: TrendingUp,
      title: 'Rapid Growth',
      description: '300% growth in the last 2 years',
      year: '2024'
    },
    {
      icon: Zap,
      title: 'Innovation Award',
      description: 'Best AI innovation in enterprise solutions',
      year: '2023'
    }
  ];

  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setAnimatedStats({
          clients: Math.floor(500 * progress),
          projects: Math.floor(1000 * progress),
          uptime: Math.floor(99.9 * progress * 10) / 10,
          satisfaction: Math.floor(4.9 * progress * 10) / 10
        });

        if (step >= steps) {
          clearInterval(timer);
          setAnimatedStats({
            clients: 500,
            projects: 1000,
            uptime: 99.9,
            satisfaction: 4.9
          });
        }
      }, stepDuration);
    };

    // Start animation after a short delay
    const timer = setTimeout(animateNumbers, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Statistics */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real clients. These numbers represent our commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="quantum-card hologram-card p-8 text-center hover:scale-105 transition-all duration-300 card-hover-lift group">
              <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value === 500 && animatedStats.clients}
                {stat.value === 1000 && animatedStats.projects}
                {stat.value === 99.9 && animatedStats.uptime}
                {stat.value === 4.9 && animatedStats.satisfaction}
                <span className="text-cyan-400">{stat.suffix}</span>
              </div>
              
              <div className="text-xl font-semibold text-cyan-400 mb-2">
                {stat.label}
              </div>
              
              <div className="text-gray-300 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="cyber-card hologram-card p-8 border border-cyan-500/20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">
              Recent Achievements
            </h3>
            <p className="text-gray-300">
              Recognition and milestones that showcase our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/30 transition-colors duration-300">
                  <achievement.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {achievement.title}
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  {achievement.description}
                </p>
                <div className="text-cyan-400 text-xs font-semibold">
                  {achievement.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="cyber-card hologram-card p-8 max-w-4xl mx-auto border border-cyan-500/20">
            <h3 className="text-3xl font-bold text-white mb-4 neon-text">
              Join Our Success Story
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of our growing community of successful businesses. 
              Let us help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services/enhanced"
                className="cyber-button inline-flex items-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                Explore Our Services
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;