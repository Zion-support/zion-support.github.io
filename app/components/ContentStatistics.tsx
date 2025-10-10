'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Clock, CheckCircle, ArrowRight } from 'lucide-react';

interface Statistic {
  id: string;
  label: string;
  value: number;
  target: number;
  unit: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  description?: string;
}

interface ContentStatisticsProps {
  title?: string;
  description?: string;
  statistics: Statistic[];
  showProgress?: boolean;
  animateOnScroll?: boolean;
  className?: string;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({
  title = "Our Impact in Numbers",
  description = "See how we've helped businesses achieve their goals",
  statistics,
  showProgress = true,
  animateOnScroll = true,
  className = ""
}) => {
  const [animatedStats, setAnimatedStats] = useState<Record<string, number>>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (animateOnScroll) {
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

      return () => observer.disconnect();
    } else {
      setIsVisible(true);
    }
  }, [animateOnScroll]);

  useEffect(() => {
    if (isVisible) {
      const animationDuration = 2000; // 2 seconds
      const frameRate = 60;
      const totalFrames = (animationDuration / 1000) * frameRate;

      statistics.forEach((stat) => {
        const increment = stat.target / totalFrames;
        let currentValue = 0;
        let frame = 0;

        const animate = () => {
          if (frame < totalFrames) {
            currentValue += increment;
            setAnimatedStats(prev => ({
              ...prev,
              [stat.id]: Math.min(currentValue, stat.target)
            }));
            frame++;
            requestAnimationFrame(animate);
          } else {
            setAnimatedStats(prev => ({
              ...prev,
              [stat.id]: stat.target
            }));
          }
        };

        requestAnimationFrame(animate);
      });
    }
  }, [isVisible, statistics]);

  const getProgressPercentage = (stat: Statistic) => {
    const currentValue = animatedStats[stat.id] || 0;
    return Math.min((currentValue / stat.target) * 100, 100);
  };

  return (
    <section id="statistics-section" className={`py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">{title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat) => {
            const currentValue = animatedStats[stat.id] || 0;
            const progressPercentage = getProgressPercentage(stat);

            return (
              <div
                key={stat.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${stat.color}`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <div className="mb-4">
                  <div className="text-4xl font-bold text-white mb-2">
                    {Math.floor(currentValue).toLocaleString()}
                    <span className="text-2xl text-gray-400 ml-1">{stat.unit}</span>
                  </div>
                  <div className="text-lg text-gray-300">{stat.label}</div>
                  {stat.description && (
                    <div className="text-sm text-gray-400 mt-2">{stat.description}</div>
                  )}
                </div>

                {showProgress && (
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 ease-out ${stat.color.replace('bg-', 'bg-gradient-to-r from-').replace('-500', '-500 to-blue-500')}`}
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                )}

                <div className="flex items-center justify-center text-sm text-gray-400">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Target: {stat.target.toLocaleString()}{stat.unit}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Our Numbers Matter</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Proven Results</h4>
                <p className="text-gray-300">Our statistics are backed by real client success stories and measurable outcomes.</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Industry Recognition</h4>
                <p className="text-gray-300">Award-winning solutions that consistently exceed expectations and industry standards.</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Client Satisfaction</h4>
                <p className="text-gray-300">High satisfaction rates and long-term partnerships with businesses worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;