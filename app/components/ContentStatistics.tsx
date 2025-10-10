'use client';

import React from 'react';
import { Users, TrendingUp, Award, Clock, Star, Zap, Shield, Brain, Globe, Database, Smartphone, Lock, Settings, Target, BarChart, Code, Cloud } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Happy Customers',
      description: 'Businesses trust our solutions worldwide',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service guarantee',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      value: '4.9/5',
      label: 'Rating',
      description: 'Highly rated by clients',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support',
      description: 'Always here to help',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Star,
      value: '500+',
      label: 'Projects',
      description: 'Successfully completed',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      value: '50+',
      label: 'Countries',
      description: 'Global presence',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const achievements = [
    {
      icon: Brain,
      title: 'AI Innovation',
      description: 'Leading AI solutions provider',
      value: '100+ AI Models'
    },
    {
      icon: Cloud,
      title: 'Cloud Expertise',
      description: 'Certified cloud partners',
      value: '3 Major Platforms'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security',
      value: 'Zero Breaches'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored solutions',
      value: '1000+ Apps Built'
    }
  ];

  return (
    <div className="bg-slate-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're proud of the results we've achieved for our clients and the trust they've placed in us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="cyber-card hologram-card p-8 text-center hover:scale-105 transition-all duration-300 group">
              <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-cyan-400 font-semibold text-lg mb-2">{stat.label}</div>
              <div className="text-gray-300">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="cyber-card hologram-card p-12 border border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Key Achievements
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our track record speaks for itself. Here are some of our key achievements and milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-300 mb-3">{achievement.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{achievement.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="cyber-card hologram-card p-8 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let us help you achieve similar results. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button">
                Get Free Consultation
              </button>
              <button className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
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