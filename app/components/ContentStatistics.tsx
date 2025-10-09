'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Clock, Zap, Shield, Globe, Target } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    clients: 0,
    roi: 0,
    uptime: 0
  });

  const stats = [
    {
      icon: TrendingUp,
      value: 50,
      suffix: '+',
      label: 'Successful Projects',
      color: 'from-cyan-500 to-blue-600',
      description: 'AI implementations delivered'
    },
    {
      icon: Users,
      value: 100,
      suffix: '+',
      label: 'Happy Clients',
      color: 'from-purple-500 to-pink-600',
      description: 'Enterprises worldwide'
    },
    {
      icon: Award,
      value: 300,
      suffix: '%',
      label: 'Average ROI',
      color: 'from-green-500 to-emerald-600',
      description: 'Return on investment'
    },
    {
      icon: Shield,
      value: 99.9,
      suffix: '%',
      label: 'Uptime Guarantee',
      color: 'from-orange-500 to-red-600',
      description: 'System reliability'
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

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedStats({
          projects: Math.floor(50 * progress),
          clients: Math.floor(100 * progress),
          roi: Math.floor(300 * progress),
          uptime: Math.floor(99.9 * progress * 10) / 10
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedStats({
            projects: 50,
            clients: 100,
            roi: 300,
            uptime: 99.9
          });
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section id="stats-section" className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Proven Results
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our track record speaks for itself. See the measurable impact we've delivered for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const currentValue = index === 0 ? animatedStats.projects :
                               index === 1 ? animatedStats.clients :
                               index === 2 ? animatedStats.roi :
                               animatedStats.uptime;

            return (
              <div
                key={index}
                className="cyber-card-enhanced holographic-card quantum-field p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 cyber-glow-enhanced">
                  {currentValue}{stat.suffix}
                </div>
                
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-sm text-gray-400">
                  {stat.description}
                </p>

                {/* Animated progress bar */}
                <div className="mt-4 w-full bg-gray-700 rounded-full h-1 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-2000 ease-out`}
                    style={{ 
                      width: isVisible ? '100%' : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Globe className="w-6 h-6 text-cyan-400" />
              <span className="text-2xl font-bold text-white">25+</span>
            </div>
            <p className="text-gray-300">Countries Served</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Target className="w-6 h-6 text-purple-400" />
              <span className="text-2xl font-bold text-white">95%</span>
            </div>
            <p className="text-gray-300">Process Automation</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="text-2xl font-bold text-white">24/7</span>
            </div>
            <p className="text-gray-300">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;