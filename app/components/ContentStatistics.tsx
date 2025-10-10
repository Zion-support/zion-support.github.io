'use client';

import React, { useState, useEffect } from 'react';
import { Users, TrendingUp, Award, Star, CheckCircle, Zap, Shield, Globe } from 'lucide-react';

interface Statistic {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const ContentStatistics: React.FC = () => {
  const [animatedStats, setAnimatedStats] = useState<Record<string, number>>({});

  const statistics: Statistic[] = [
    {
      id: 'clients',
      value: '10,000+',
      label: 'Happy Clients',
      description: 'Businesses trust our solutions worldwide',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'uptime',
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service guarantee',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'rating',
      value: '4.9/5',
      label: 'Rating',
      description: 'Highly rated by our clients',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'awards',
      value: '50+',
      label: 'Awards',
      description: 'Industry recognition and accolades',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'projects',
      value: '5,000+',
      label: 'Projects',
      description: 'Successfully completed projects',
      icon: CheckCircle,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'countries',
      value: '50+',
      label: 'Countries',
      description: 'Global presence and reach',
      icon: Globe,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for maximum speed'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 support from our expert team'
    }
  ];

  useEffect(() => {
    // Animate statistics on mount
    const animateStats = () => {
      statistics.forEach((stat) => {
        const numericValue = parseInt(stat.value.replace(/[^\d]/g, ''));
        if (!isNaN(numericValue)) {
          let current = 0;
          const increment = numericValue / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              current = numericValue;
              clearInterval(timer);
            }
            setAnimatedStats(prev => ({
              ...prev,
              [stat.id]: Math.floor(current)
            }));
          }, 30);
        }
      });
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our solutions have helped thousands of businesses achieve their goals and transform their operations.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {statistics.map((stat) => (
            <div key={stat.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.id in animatedStats ? animatedStats[stat.id] : stat.value}
                  {stat.id in animatedStats && stat.value.includes('%') && '%'}
                  {stat.id in animatedStats && stat.value.includes('/') && '/5'}
                  {stat.id in animatedStats && stat.value.includes('+') && '+'}
                </div>
                
                <div className="text-xl font-semibold text-cyan-400 mb-2">{stat.label}</div>
                <div className="text-gray-400">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-slate-800/30 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you achieve the same results as our satisfied clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Get Started Today
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;