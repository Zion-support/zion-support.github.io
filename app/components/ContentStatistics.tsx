'use client';

import React from 'react';
import { TrendingUp, Users, Award, Zap, Shield, Globe, Star, CheckCircle } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: Award,
      value: '50+',
      label: 'Awards Won',
      description: 'Industry recognition and accolades'
    },
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Success Rate',
      description: 'Project completion success rate'
    },
    {
      icon: Globe,
      value: '25+',
      label: 'Countries',
      description: 'Global presence and reach'
    }
  ];

  const achievements = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Average response time under 100ms',
      value: '< 100ms'
    },
    {
      icon: Shield,
      title: 'Secure',
      description: 'Zero security breaches in 5 years',
      value: '100%'
    },
    {
      icon: Star,
      title: 'Reliable',
      description: '99.9% uptime guarantee',
      value: '99.9%'
    },
    {
      icon: CheckCircle,
      title: 'Quality',
      description: 'ISO 9001 certified processes',
      value: 'ISO 9001'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak for themselves. We're proud of what we've accomplished and excited about what's next.
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-4">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-xl font-semibold text-cyan-400 mb-2">{stat.label}</div>
              <div className="text-gray-300 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-4">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
              <p className="text-gray-300 mb-3">{achievement.description}</p>
              <div className="text-2xl font-bold text-cyan-400">{achievement.value}</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Success Story?</h3>
            <p className="text-gray-300 mb-6">
              Let's work together to achieve your business goals with our proven solutions.
            </p>
            <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;
