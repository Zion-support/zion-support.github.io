'use client';

import React from 'react';
import { Star, Users, TrendingUp, Award, CheckCircle, Target, Rocket, Shield } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service guarantee'
    },
    {
      icon: Award,
      value: '50+',
      label: 'Awards',
      description: 'Industry recognition'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Rating',
      description: 'Customer satisfaction'
    }
  ];

  const achievements = [
    {
      icon: Star,
      title: 'Industry Recognition',
      description: 'Awarded Best AI Solutions Provider 2024',
      value: '25+'
    },
    {
      icon: Target,
      title: 'Success Rate',
      description: 'Projects delivered on time and within budget',
      value: '98%'
    },
    {
      icon: Rocket,
      title: 'Growth Rate',
      description: 'Year-over-year business growth',
      value: '300%'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Zero security breaches',
      value: '100%'
    }
  ];

  const features = [
    'Advanced AI and machine learning capabilities',
    'Scalable cloud infrastructure',
    '24/7 expert support and monitoring',
    'Enterprise-grade security and compliance',
    'Custom solutions tailored to your needs',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Stats */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Impact in Numbers</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped businesses transform their operations with cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
              <div className="text-gray-500 text-xs">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Our Achievements</h3>
            <p className="text-gray-300">Recognition and milestones that showcase our expertise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{achievement.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{achievement.title}</div>
                <div className="text-gray-300 text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;