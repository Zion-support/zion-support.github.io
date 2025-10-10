'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Zap, Shield, Globe, Star, Target } from 'lucide-react';

interface Stat {
  id: number;
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  color: string;
}

const ContentStatistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats: Stat[] = [
    {
      id: 1,
      icon: <Users className="w-8 h-8" />,
      value: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered projects across various industries',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: <Award className="w-8 h-8" />,
      value: '99.9%',
      label: 'Client Satisfaction',
      description: 'Consistently high ratings from our satisfied clients',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      icon: <Zap className="w-8 h-8" />,
      value: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock technical support and assistance',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 4,
      icon: <Shield className="w-8 h-8" />,
      value: '100%',
      label: 'Security Compliance',
      description: 'Full compliance with industry security standards',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 5,
      icon: <Globe className="w-8 h-8" />,
      value: '50+',
      label: 'Countries Served',
      description: 'Global reach with clients across multiple continents',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 6,
      icon: <TrendingUp className="w-8 h-8" />,
      value: '300%',
      label: 'Average ROI',
      description: 'Typical return on investment for our clients',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div id="stats-section" className="py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We measure our success by the success of our clients. Here's what we've achieved together.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white`}>
                {stat.icon}
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              
              <div className="text-xl font-semibold text-cyan-400 mb-3">
                {stat.label}
              </div>
              
              <p className="text-gray-300 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Trusted by Industry Leaders</h3>
            </div>
            <p className="text-lg text-gray-300 mb-6">
              Our clients include Fortune 500 companies, innovative startups, and organizations 
              across various industries who trust us with their most critical technology needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-2 text-cyan-400" />
                <span>Enterprise Solutions</span>
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-2 text-cyan-400" />
                <span>Startup Acceleration</span>
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-2 text-cyan-400" />
                <span>Digital Transformation</span>
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-2 text-cyan-400" />
                <span>Cloud Migration</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContentStatistics;