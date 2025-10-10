'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [animatedStats, setAnimatedStats] = useState({
    clients: 0,
    projects: 0,
    savings: 0,
    satisfaction: 0
  });

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      value: 500,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Companies trust us with their digital transformation'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      value: 1000,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successful AI and IT implementations'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      value: 50,
      suffix: 'M+',
      label: 'Cost Savings',
      description: 'Annual savings generated for our clients'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      value: 98,
      suffix: '%',
      label: 'Satisfaction Rate',
      description: 'Client satisfaction and retention rate'
    }
  ];

  const animateValue = (start: number, end: number, duration: number, callback: (value: number) => void) => {
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = start + (end - start) * progress;
      callback(Math.floor(current));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    stats.forEach((stat, index) => {
      const timer = setTimeout(() => {
        animateValue(0, stat.value, 2000, (value) => {
          setAnimatedStats(prev => ({
            ...prev,
            [Object.keys(prev)[index]]: value
          }));
        });
      }, index * 200);
      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            See how we've helped businesses transform and achieve remarkable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const animatedValue = animatedStats[Object.keys(animatedStats)[index] as keyof typeof animatedStats];
            return (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {animatedValue}{stat.suffix}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Stats Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="cyber-card hologram-card p-6 text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-2">24/7</div>
            <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
            <p className="text-gray-300 text-sm">Round-the-clock technical support</p>
          </div>
          <div className="cyber-card hologram-card p-6 text-center">
            <div className="text-2xl font-bold text-green-400 mb-2">99.9%</div>
            <h3 className="text-lg font-semibold text-white mb-2">Uptime</h3>
            <p className="text-gray-300 text-sm">Reliable service availability</p>
          </div>
          <div className="cyber-card hologram-card p-6 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-2">5+</div>
            <h3 className="text-lg font-semibold text-white mb-2">Years</h3>
            <p className="text-gray-300 text-sm">Industry experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;