'use client';
import React from 'react';
import { TrendingUp, Users, Award, Zap, Star, Shield, Globe, CheckCircle } from 'lucide-react';

interface StatItem {
  id: string;
  value: string;
  label: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon?: React.ComponentType<any>;
  description?: string;
}

interface ContentStatisticsProps {
  title?: string;
  description?: string;
  stats: StatItem[];
  variant?: 'default' | 'compact' | 'detailed';
  showIcons?: boolean;
  animated?: boolean;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({
  title = 'Our Impact',
  description = 'Numbers that speak for themselves',
  stats,
  variant = 'default',
  showIcons = true,
  animated = true
}) => {
  const getChangeColor = (changeType?: string) => {
    switch (changeType) {
      case 'positive':
        return 'text-green-400';
      case 'negative':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getChangeIcon = (changeType?: string) => {
    switch (changeType) {
      case 'positive':
        return '↗';
      case 'negative':
        return '↘';
      default:
        return '→';
    }
  };

  const renderStatItem = (stat: StatItem, index: number) => {
    const IconComponent = stat.icon || TrendingUp;
    
    return (
      <div
        key={stat.id}
        className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 ${
          animated ? 'group' : ''
        }`}
      >
        <div className="flex items-start justify-between mb-4">
          {showIcons && (
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
          )}
          {stat.change && (
            <div className={`text-sm font-medium ${getChangeColor(stat.changeType)}`}>
              <span className="mr-1">{getChangeIcon(stat.changeType)}</span>
              {stat.change}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="text-3xl md:text-4xl font-bold text-white">
            {stat.value}
          </div>
          <div className="text-lg text-gray-300 font-medium">
            {stat.label}
          </div>
          {stat.description && variant === 'detailed' && (
            <div className="text-sm text-gray-400">
              {stat.description}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid gap-8 ${
          variant === 'compact' 
            ? 'grid-cols-2 md:grid-cols-4' 
            : variant === 'detailed'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
        }`}>
          {stats.map((stat, index) => renderStatItem(stat, index))}
        </div>

        {/* Additional Info */}
        {variant === 'detailed' && (
          <div className="mt-16 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium">Trusted by Industry Leaders</span>
              </div>
              <p className="text-gray-300">
                Our solutions are powering innovation across industries, from startups to Fortune 500 companies.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentStatistics;