'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, DollarSign, Award } from 'lucide-react';

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  description?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

interface ContentStatisticsProps {
  title?: string;
  subtitle?: string;
  stats?: StatItem[];
  animationDuration?: number;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({
  title = "Our Impact in Numbers",
  subtitle = "Real results from real implementations across industries",
  stats = [
    {
      icon: TrendingUp,
      value: "300%",
      label: "Average ROI",
      description: "Return on investment across all projects",
      trend: 'up',
      trendValue: '+15%'
    },
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      description: "Companies worldwide trust our solutions",
      trend: 'up',
      trendValue: '+50'
    },
    {
      icon: DollarSign,
      value: "$2.5M",
      label: "Cost Savings",
      description: "Average annual savings per client",
      trend: 'up',
      trendValue: '+$500K'
    },
    {
      icon: Award,
      value: "99.9%",
      label: "Uptime",
      description: "System reliability and availability",
      trend: 'neutral',
      trendValue: '0.1%'
    }
  ],
  animationDuration = 2000
}) => {
  const [animatedStats, setAnimatedStats] = useState<StatItem[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats(stats);
    }, 100);

    return () => clearTimeout(timer);
  }, [stats]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {animatedStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              
              <div className="text-lg font-semibold text-gray-300 mb-2">
                {stat.label}
              </div>
              
              {stat.description && (
                <p className="text-sm text-gray-400 mb-4">
                  {stat.description}
                </p>
              )}
              
              {stat.trend && stat.trendValue && (
                <div className={`flex items-center justify-center space-x-1 ${
                  stat.trend === 'up' ? 'text-green-400' : 
                  stat.trend === 'down' ? 'text-red-400' : 
                  'text-gray-400'
                }`}>
                  {stat.trend === 'up' && <TrendingUp className="w-4 h-4" />}
                  <span className="text-sm font-medium">
                    {stat.trendValue}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-300 mb-6">
              Our solutions have been implemented across various industries, 
              from Fortune 500 companies to innovative startups.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-400 mb-1">50+</div>
                <div className="text-sm text-gray-400">Industries</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">15+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400 mb-1">100%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;
