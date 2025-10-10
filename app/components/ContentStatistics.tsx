'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Star, Award, CheckCircle, ArrowRight } from 'lucide-react';

interface Statistic {
  id: string;
  label: string;
  value: string;
  icon: React.ComponentType<any>;
  color: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

interface ContentStatisticsProps {
  statistics: Statistic[];
  title?: string;
  description?: string;
  showTrends?: boolean;
  showIcons?: boolean;
  backgroundColor?: string;
  textColor?: string;
  gridCols?: number;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({
  statistics,
  title = 'Our Impact',
  description = 'Numbers that speak for themselves',
  showTrends = true,
  showIcons = true,
  backgroundColor = 'bg-slate-800',
  textColor = 'text-white',
  gridCols = 4
}) => {
  const [animatedStats, setAnimatedStats] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const animateStats = () => {
      statistics.forEach((stat) => {
        const numericValue = parseFloat(stat.value.replace(/[^\d.]/g, ''));
        if (!isNaN(numericValue)) {
          const duration = 2000; // 2 seconds
          const steps = 60;
          const stepValue = numericValue / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            setAnimatedStats(prev => ({
              ...prev,
              [stat.id]: Math.min(stepValue * currentStep, numericValue)
            }));

            if (currentStep >= steps) {
              clearInterval(timer);
            }
          }, duration / steps);
        }
      });
    };

    animateStats();
  }, [statistics]);

  const getGridColsClass = () => {
    switch (gridCols) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      case 5: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5';
      case 6: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-6';
      default: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
    }
  };

  return (
    <div className={`${backgroundColor} ${textColor} py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-300">{description}</p>
        </div>

        {/* Statistics Grid */}
        <div className={`grid ${getGridColsClass()} gap-8`}>
          {statistics.map((stat) => {
            const IconComponent = stat.icon;
            const animatedValue = animatedStats[stat.id] || 0;
            const displayValue = stat.value.includes('%') 
              ? `${Math.round(animatedValue)}%`
              : stat.value.includes('+')
              ? `${Math.round(animatedValue)}+`
              : stat.value.includes('K')
              ? `${Math.round(animatedValue)}K`
              : stat.value.includes('M')
              ? `${Math.round(animatedValue)}M`
              : Math.round(animatedValue).toString();

            return (
              <div key={stat.id} className="text-center">
                <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600 hover:border-slate-500 transition-all duration-300">
                  {showIcons && (
                    <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  )}
                  
                  <div className="text-4xl font-bold mb-2">{displayValue}</div>
                  <div className="text-lg text-gray-300 mb-4">{stat.label}</div>
                  
                  {showTrends && stat.trend && (
                    <div className={`flex items-center justify-center space-x-1 ${
                      stat.trend.isPositive ? 'text-green-400' : 'text-red-400'
                    }`}>
                      <TrendingUp className={`w-4 h-4 ${
                        stat.trend.isPositive ? 'rotate-0' : 'rotate-180'
                      }`} />
                      <span className="text-sm font-semibold">
                        {stat.trend.isPositive ? '+' : ''}{stat.trend.value}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;
