'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Zap, Brain, Target, ArrowRight, CheckCircle } from 'lucide-react';

interface Statistic {
  id: number;
  value: string;
  label: string;
  icon: React.ComponentType<any>;
  color: string;
  trend: 'up' | 'down' | 'stable';
  change: string;
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  year: string;
}

const DynamicContentShowcase: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState<number[]>([]);

  const statistics: Statistic[] = [
    {
      id: 1,
      value: '$50M+',
      label: 'Annual Savings Delivered',
      icon: TrendingUp,
      color: 'text-green-400',
      trend: 'up',
      change: '+25%'
    },
    {
      id: 2,
      value: '95%',
      label: 'Process Automation Rate',
      icon: Zap,
      color: 'text-cyan-400',
      trend: 'up',
      change: '+15%'
    },
    {
      id: 3,
      value: '300%',
      label: 'Average ROI',
      icon: Target,
      color: 'text-purple-400',
      trend: 'up',
      change: '+50%'
    },
    {
      id: 4,
      value: '500+',
      label: 'Enterprise Clients',
      icon: Users,
      color: 'text-blue-400',
      trend: 'up',
      change: '+100'
    },
    {
      id: 5,
      value: '99.9%',
      label: 'Uptime Guarantee',
      icon: Award,
      color: 'text-yellow-400',
      trend: 'stable',
      change: '0%'
    },
    {
      id: 6,
      value: '24/7',
      label: 'Expert Support',
      icon: Brain,
      color: 'text-pink-400',
      trend: 'stable',
      change: '0%'
    }
  ];

  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'AI Innovation Award 2024',
      description: 'Recognized for breakthrough in autonomous enterprise systems',
      icon: Award,
      color: 'text-yellow-400',
      year: '2024'
    },
    {
      id: 2,
      title: 'Best AI Solutions Provider',
      description: 'Industry leader in AI-powered business transformation',
      icon: Brain,
      color: 'text-purple-400',
      year: '2024'
    },
    {
      id: 3,
      title: 'Enterprise Excellence',
      description: 'Top performer in enterprise AI implementation',
      icon: Target,
      color: 'text-cyan-400',
      year: '2023'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      statistics.forEach((stat, index) => {
        setTimeout(() => {
          setAnimatedStats(prev => [...prev, stat.id]);
        }, index * 200);
      });
    }
  }, [isVisible, statistics]);

  const animateValue = (start: number, end: number, duration: number, callback: (value: number) => void) => {
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = start + (end - start) * progress;
      callback(value);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Statistics Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Proven Results & Impact
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            Our AI solutions have delivered measurable results for hundreds of enterprise clients worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {statistics.map((stat) => {
            const IconComponent = stat.icon;
            const isAnimated = animatedStats.includes(stat.id);
            
            return (
              <div
                key={stat.id}
                className={`cyber-card p-6 text-center transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${stat.id * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <div className={`text-3xl md:text-4xl font-bold mb-2 neon-text ${stat.color}`}>
                  {stat.value}
                </div>
                
                <div className="text-gray-300 mb-2 font-medium">
                  {stat.label}
                </div>
                
                <div className={`flex items-center justify-center space-x-1 text-sm ${
                  stat.trend === 'up' ? 'text-green-400' : 
                  stat.trend === 'down' ? 'text-red-400' : 'text-gray-400'
                }`}>
                  <TrendingUp className={`w-4 h-4 ${
                    stat.trend === 'down' ? 'rotate-180' : ''
                  }`} />
                  <span>{stat.change}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-400/20 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Industry Recognition
            </h3>
            <p className="text-gray-300">
              Our innovative solutions have earned recognition from leading industry organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement) => {
              const IconComponent = achievement.icon;
              
              return (
                <div
                  key={achievement.id}
                  className="text-center p-6 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className={`text-sm font-semibold ${achievement.color} mb-2`}>
                    {achievement.year}
                  </div>
                  
                  <h4 className="text-white font-bold mb-2">
                    {achievement.title}
                  </h4>
                  
                  <p className="text-gray-300 text-sm">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-xl p-8 border border-cyan-400/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of enterprise clients who have already achieved remarkable results with our AI solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="/case-studies"
                className="flex items-center justify-center space-x-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicContentShowcase;