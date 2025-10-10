'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Zap, Shield, Star, CheckCircle } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [animatedStats, setAnimatedStats] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    uptime: 0
  });

  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      value: 1000,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successful AI and IT implementations',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Star,
      value: 99,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Customer satisfaction rate',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      value: 99.9,
      suffix: '%',
      label: 'Uptime Guarantee',
      description: 'System reliability and availability',
      color: 'from-green-500 to-teal-500'
    }
  ];

  useEffect(() => {
    const animateValue = (start: number, end: number, duration: number, callback: (value: number) => void) => {
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = start + (end - start) * progress;
        callback(current);
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    };

    // Animate each stat
    stats.forEach((stat, index) => {
      setTimeout(() => {
        animateValue(0, stat.value, 2000, (value) => {
          setAnimatedStats(prev => ({
            ...prev,
            [stat.label.toLowerCase().replace(/\s+/g, '')]: value
          }));
        });
      }, index * 200);
    });
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Impact in Numbers
        </h2>
        <p className="text-xl text-gray-300">
          Proven results and measurable success across all our services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group">
            <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <stat.icon className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              {stat.value === 99.9 ? '99.9' : Math.floor(animatedStats[stat.label.toLowerCase().replace(/\s+/g, '') as keyof typeof animatedStats] || 0)}
              <span className="text-cyan-400">{stat.suffix}</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {stat.label}
            </h3>
            <p className="text-gray-300 text-sm">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Additional Stats */}
      <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-white font-semibold mb-1">Support</div>
            <div className="text-gray-300 text-sm">Round-the-clock assistance</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-white font-semibold mb-1">Countries</div>
            <div className="text-gray-300 text-sm">Global presence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
            <div className="text-white font-semibold mb-1">Years</div>
            <div className="text-gray-300 text-sm">Industry experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;
