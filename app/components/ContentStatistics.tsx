'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

interface Statistic {
  id: string;
  value: number;
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  suffix?: string;
  prefix?: string;
}

interface ContentStatisticsProps {
  statistics?: Statistic[];
  animationDuration?: number;
  showAnimation?: boolean;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({
  statistics = [
    {
      id: '1',
      value: 10000,
      label: 'Happy Clients',
      description: 'Businesses transformed with our solutions',
      icon: <Users className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: '2',
      value: 500,
      label: 'Projects Completed',
      description: 'Successful implementations delivered',
      icon: <Award className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: '3',
      value: 99,
      label: 'Success Rate',
      description: 'Client satisfaction and project success',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      suffix: '%'
    },
    {
      id: '4',
      value: 24,
      label: 'Support Hours',
      description: 'Round-the-clock technical assistance',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      suffix: '/7'
    }
  ],
  animationDuration = 2000,
  showAnimation = true
}) => {
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('statistics-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && showAnimation) {
      statistics.forEach((stat) => {
        const duration = animationDuration;
        const startTime = Date.now();
        const startValue = 0;
        const endValue = stat.value;

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutCubic);
          
          setAnimatedValues(prev => ({
            ...prev,
            [stat.id]: currentValue
          }));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      });
    } else if (!showAnimation) {
      // Set final values immediately if animation is disabled
      const initialValues: Record<string, number> = {};
      statistics.forEach((stat) => {
        initialValues[stat.id] = stat.value;
      });
      setAnimatedValues(initialValues);
    }
  }, [isVisible, showAnimation, statistics, animationDuration]);

  return (
    <div id="statistics-section" className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div 
              key={stat.id} 
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 text-center group hover:scale-105"
            >
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${stat.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              
              <div className="mb-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.prefix || ''}
                  {animatedValues[stat.id] || 0}
                  {stat.suffix || ''}
                </div>
                <div className="text-xl font-semibold text-gray-300 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-300 mb-6">
              Our solutions have been implemented across various industries, from Fortune 500 companies to innovative startups, 
              helping them achieve their digital transformation goals.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">25+</div>
                <div className="text-sm text-gray-400">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">$2M+</div>
                <div className="text-sm text-gray-400">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">300%</div>
                <div className="text-sm text-gray-400">Productivity Boost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;