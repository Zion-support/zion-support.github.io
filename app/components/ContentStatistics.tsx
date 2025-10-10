'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Happy Clients',
      description: 'Businesses transformed worldwide',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: TrendingUp,
      number: '99.9%',
      label: 'Uptime',
      description: 'Reliable service delivery',
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: Award,
      number: '25+',
      label: 'Awards',
      description: 'Industry recognition',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      icon: Zap,
      number: '24/7',
      label: 'Support',
      description: 'Always here to help',
      color: 'from-purple-400 to-pink-400'
    }
  ];

  const achievements = [
    {
      title: 'Client Satisfaction',
      percentage: 98,
      description: 'Our clients rate us highly for quality and service'
    },
    {
      title: 'Project Success Rate',
      percentage: 95,
      description: 'Successful project delivery and implementation'
    },
    {
      title: 'Response Time',
      percentage: 100,
      description: 'Average response time under 2 hours'
    },
    {
      title: 'Security Score',
      percentage: 100,
      description: 'Zero security breaches in our history'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started with a vision to transform businesses with AI'
    },
    {
      year: '2021',
      title: 'First 100 Clients',
      description: 'Reached our first major milestone'
    },
    {
      year: '2022',
      title: 'International Expansion',
      description: 'Expanded services to 15+ countries'
    },
    {
      year: '2023',
      title: 'AI Innovation Award',
      description: 'Recognized for breakthrough AI solutions'
    },
    {
      year: '2024',
      title: '500+ Clients',
      description: 'Continued growth and success'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-cyan-400">Impact</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Numbers that speak for themselves. See how we've helped businesses achieve their goals.
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-cyan-400 font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Achievement Bars */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Our Performance Metrics</h3>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{achievement.title}</span>
                  <span className="text-cyan-400 font-bold">{achievement.percentage}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-purple-400 h-3 rounded-full transition-all duration-1000"
                    style={{
                      width: isVisible ? `${achievement.percentage}%` : '0%',
                      transitionDelay: `${(index + 4) * 200}ms`
                    }}
                  />
                </div>
                <p className="text-gray-400 text-sm mt-2">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } transform transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 8) * 100}ms` }}
                >
                  <div className="w-1/2 px-4">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                      <div className="text-cyan-400 font-bold text-lg mb-2">{milestone.year}</div>
                      <h4 className="text-white font-semibold mb-2">{milestone.title}</h4>
                      <p className="text-gray-300 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center relative z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2 px-4">
                    {/* Empty space for alternating layout */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Be part of our growing community of successful businesses. Let's achieve great things together.
            </p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105">
              Start Your Journey
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;