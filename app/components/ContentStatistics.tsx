'use client';
import React from 'react';
import { Users, TrendingUp, Shield, Zap, Star, CheckCircle, ArrowRight } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      value: '50,000+',
      label: 'Active Users',
      description: 'Growing community of satisfied customers'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      value: '300%',
      label: 'Average ROI',
      description: 'Measurable business impact'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      value: '99.9%',
      label: 'Uptime SLA',
      description: 'Enterprise-grade reliability'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      value: '24/7',
      label: 'Support',
      description: 'Always available assistance'
    }
  ];

  const achievements = [
    'Fortune 500 clients trust our solutions',
    'Award-winning AI technology platform',
    'ISO 27001 certified security standards',
    'SOC 2 Type II compliance achieved',
    'Microsoft Azure Gold Partner',
    'AWS Advanced Consulting Partner'
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 neon-text">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI and IT solutions are powering digital transformation across industries worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="quantum-card p-8 text-center energy-pulse">
              <div className="flex justify-center mb-6">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2 neon-text">{stat.value}</div>
              <div className="text-xl font-semibold text-cyan-400 mb-2">{stat.label}</div>
              <div className="text-gray-300 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="holographic-stream p-12 rounded-3xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-6 neon-text">
              Industry Recognition
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence has earned us recognition from leading industry organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-300 font-medium">{achievement}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/case-studies"
              className="cyber-button inline-flex items-center space-x-2"
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;