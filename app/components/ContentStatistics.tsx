'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Clock, DollarSign, Shield, Globe, Zap } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Average ROI',
      description: 'Return on investment for our AI solutions',
      color: 'text-green-400'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
      description: 'Enterprises transformed worldwide',
      color: 'text-blue-400'
    },
    {
      icon: Award,
      value: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Reliable service delivery',
      color: 'text-yellow-400'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support',
      description: 'Round-the-clock expert assistance',
      color: 'text-purple-400'
    },
    {
      icon: DollarSign,
      value: '$50M+',
      label: 'Cost Savings',
      description: 'Annual savings for our clients',
      color: 'text-green-400'
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Security',
      description: 'Bank-level data protection',
      color: 'text-red-400'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Countries',
      description: 'Global presence and reach',
      color: 'text-cyan-400'
    },
    {
      icon: Zap,
      value: '95%',
      label: 'Automation',
      description: 'Process automation achieved',
      color: 'text-orange-400'
    }
  ];

  return (
    <div className="py-16 bg-slate-800/30 rounded-2xl mb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proven Results
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our track record speaks for itself. See the measurable impact we've delivered for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-slate-700/50 rounded-lg p-6 text-center hover:bg-slate-700 transition-all duration-300 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 ${stat.color} mx-auto mb-4 rounded-full bg-slate-800/50 flex items-center justify-center`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-white font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6 text-lg">
            Ready to achieve similar results for your business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;