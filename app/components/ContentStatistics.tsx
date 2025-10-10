'use client';
import React from 'react';
import { Users, Globe, Award, Clock, CheckCircle, TrendingUp, Star, Zap } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across 50+ countries'
    },
    {
      icon: Award,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service delivery'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support',
      description: 'Round-the-clock assistance'
    },
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Growth',
      description: 'Average client growth rate'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Rating',
      description: 'Customer satisfaction score'
    }
  ];

  const achievements = [
    'ISO 27001 Certified',
    'SOC 2 Type II Compliant',
    'GDPR Compliant',
    'HIPAA Compliant',
    'AWS Advanced Partner',
    'Microsoft Gold Partner'
  ];

  return (
    <div className="py-16 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable results we've delivered for our clients across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-xl font-semibold text-cyan-400 mb-2">{stat.label}</div>
                <div className="text-gray-300 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Certifications & Achievements</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full border border-cyan-500/20">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300 text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;