'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Globe, Clock, CheckCircle, Zap, Brain, Target } from 'lucide-react';

interface Statistic {
  id: number;
  value: string;
  label: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  trend: {
    value: string;
    direction: 'up' | 'down' | 'stable';
  };
}

const ContentStatistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState<Set<number>>(new Set());

  const statistics: Statistic[] = [
    {
      id: 1,
      value: '500+',
      label: 'Active Clients',
      description: 'Enterprise clients across 50+ countries',
      icon: Users,
      color: 'text-blue-400',
      trend: { value: '+25%', direction: 'up' }
    },
    {
      id: 2,
      value: '99.9%',
      label: 'Uptime',
      description: 'Guaranteed system availability',
      icon: Clock,
      color: 'text-green-400',
      trend: { value: '0%', direction: 'stable' }
    },
    {
      id: 3,
      value: '50+',
      label: 'Countries',
      description: 'Global presence and support',
      icon: Globe,
      color: 'text-purple-400',
      trend: { value: '+5', direction: 'up' }
    },
    {
      id: 4,
      value: '24/7',
      label: 'Support',
      description: 'Round-the-clock expert assistance',
      icon: Zap,
      color: 'text-cyan-400',
      trend: { value: '0%', direction: 'stable' }
    },
    {
      id: 5,
      value: '95%',
      label: 'Automation',
      description: 'Process automation success rate',
      icon: Brain,
      color: 'text-pink-400',
      trend: { value: '+15%', direction: 'up' }
    },
    {
      id: 6,
      value: '300%',
      label: 'ROI',
      description: 'Average return on investment',
      icon: Target,
      color: 'text-yellow-400',
      trend: { value: '+50%', direction: 'up' }
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      statistics.forEach((stat, index) => {
        setTimeout(() => {
          setAnimatedStats(prev => new Set([...prev, stat.id]));
        }, index * 150);
      });
    }
  }, [isVisible, statistics]);

  return (
    <section className="py-16 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our proven track record speaks for itself. See why leading enterprises choose Zion Tech Group.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statistics.map((stat) => {
            const IconComponent = stat.icon;
            const isAnimated = animatedStats.has(stat.id);
            
            return (
              <div
                key={stat.id}
                className={`cyber-card p-8 text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20`}
                style={{ transitionDelay: `${stat.id * 100}ms` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                <div className={`text-4xl md:text-5xl font-bold mb-3 neon-text ${stat.color} transition-all duration-500 ${
                  isAnimated ? 'scale-110' : 'scale-100'
                }`}>
                  {stat.value}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm">
                  {stat.description}
                </p>
                
                <div className={`flex items-center justify-center space-x-1 text-sm font-medium ${
                  stat.trend.direction === 'up' ? 'text-green-400' : 
                  stat.trend.direction === 'down' ? 'text-red-400' : 'text-gray-400'
                }`}>
                  <TrendingUp className={`w-4 h-4 ${
                    stat.trend.direction === 'down' ? 'rotate-180' : ''
                  }`} />
                  <span>{stat.trend.value}</span>
                  <span className="text-gray-500">vs last year</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-400/20 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">ISO 27001</div>
              <div className="text-gray-300 text-sm">Security Certified</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">SOC 2</div>
              <div className="text-gray-300 text-sm">Compliance Ready</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">GDPR</div>
              <div className="text-gray-300 text-sm">Privacy Compliant</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">HIPAA</div>
              <div className="text-gray-300 text-sm">Healthcare Ready</div>
            </div>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="mt-12 text-center">
          <blockquote className="text-xl md:text-2xl text-gray-300 italic max-w-4xl mx-auto mb-6">
            "Zion Tech Group's AI solutions transformed our operations completely. We achieved 95% process automation and 300% ROI within the first year."
          </blockquote>
          <div className="text-cyan-400 font-semibold">
            — Sarah Johnson, CTO at TechCorp
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;