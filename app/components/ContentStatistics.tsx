'use client';
import React, { useState, useEffect } from 'react';
import { Star, Users, TrendingUp, Award, CheckCircle, Zap, Shield, Globe } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [animatedStats, setAnimatedStats] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    uptime: 0
  });

  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      value: '500+',
      label: 'Projects Completed',
      description: 'Successful AI and IT implementations',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Star,
      value: '99.9%',
      label: 'Client Satisfaction',
      description: 'Based on customer feedback',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service delivery',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Industry Leader',
      description: 'Recognized as a top AI solutions provider',
      year: '2024'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients in 50+ countries',
      year: '2024'
    },
    {
      icon: Zap,
      title: 'Innovation Award',
      description: 'Best AI innovation in enterprise solutions',
      year: '2023'
    },
    {
      icon: CheckCircle,
      title: 'Certified Excellence',
      description: 'ISO 27001 and SOC 2 certified',
      year: '2023'
    }
  ];

  useEffect(() => {
    const animateNumbers = () => {
      const targets = {
        clients: 10000,
        projects: 500,
        satisfaction: 99.9,
        uptime: 99.9
      };

      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedStats({
          clients: Math.floor(targets.clients * progress),
          projects: Math.floor(targets.projects * progress),
          satisfaction: Math.floor(targets.satisfaction * progress * 10) / 10,
          uptime: Math.floor(targets.uptime * progress * 10) / 10
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedStats(targets);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const timer = setTimeout(animateNumbers, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the measurable impact we've made for our clients and the industry.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-300 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Recognition & Achievements</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our commitment to excellence has earned us recognition from industry leaders and satisfied clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  {achievement.description}
                </p>
                <div className="text-purple-400 text-sm font-medium">
                  {achievement.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Be Our Next Success Story?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have transformed their businesses with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
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