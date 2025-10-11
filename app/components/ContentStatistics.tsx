'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Globe, Zap, Shield } from 'lucide-react';

interface Statistic {
  icon: React.ComponentType<any>;
  value: string;
  label: string;
  description: string;
  trend?: string;
}

const ContentStatistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const statistics: Statistic[] = [
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
      description: 'Businesses transformed with our solutions',
      trend: '+25% this year'
    },
    {
      icon: Award,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service delivery',
      trend: 'Industry leading'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Countries',
      description: 'Global presence and support',
      trend: 'Expanding worldwide'
    },
    {
      icon: Zap,
      value: '10x',
      label: 'Performance',
      description: 'Faster than traditional solutions',
      trend: 'Consistently improving'
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Security',
      description: 'Zero security breaches',
      trend: 'Proven track record'
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Satisfaction',
      description: 'Client satisfaction rate',
      trend: 'Exceeding expectations'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impact</span> in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the measurable impact we've made for businesses worldwide through our innovative AI and IT solutions.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div 
              key={index} 
              className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 text-center group ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                {stat.value}
              </div>
              
              <div className="text-xl font-semibold text-gray-300 mb-2">
                {stat.label}
              </div>
              
              <div className="text-gray-400 mb-4">
                {stat.description}
              </div>
              
              {stat.trend && (
                <div className="text-sm text-green-400 font-medium">
                  {stat.trend}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Our solutions have been proven across various industries, from startups to Fortune 500 companies.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm">Client Retention</div>
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
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ContentStatistics;