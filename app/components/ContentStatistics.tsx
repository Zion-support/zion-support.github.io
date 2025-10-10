'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Zap, DollarSign, Clock, Shield, Globe } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const statistics = [
    {
      icon: <Users className="w-8 h-8" />,
      value: '1000+',
      label: 'Happy Clients',
      description: 'Businesses transformed with our solutions',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: '500%',
      label: 'Average ROI',
      description: 'Return on investment for our clients',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: '50+',
      label: 'Awards Won',
      description: 'Industry recognition and achievements',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      value: '95%',
      label: 'Process Automation',
      description: 'Business processes automated with AI',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: '$50M+',
      label: 'Cost Savings',
      description: 'Total savings delivered to clients',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock technical support',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      value: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Reliable service availability',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: '25+',
      label: 'Countries Served',
      description: 'Global reach and presence',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Measurable results that demonstrate our commitment to delivering exceptional value to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className={`cyber-card hologram-card p-8 text-center hover:scale-105 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                {stat.icon}
              </div>
              
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              
              <div className="text-lg font-semibold text-cyan-400 mb-2">
                {stat.label}
              </div>
              
              <div className="text-sm text-gray-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="cyber-card hologram-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-300 mb-6">
              Our solutions are trusted by Fortune 500 companies, startups, and enterprises worldwide. 
              We're committed to delivering measurable results and exceptional value.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">5 Years</div>
                <div className="text-gray-300">Average Partnership</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;