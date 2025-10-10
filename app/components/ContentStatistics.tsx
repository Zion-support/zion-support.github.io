'use client';

import React from 'react';
import { TrendingUp, Users, Award, Star } from 'lucide-react';

interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  change?: string;
  description?: string;
}

interface ContentStatisticsProps {
  stats?: Stat[];
  title?: string;
  description?: string;
  showChange?: boolean;
  layout?: 'grid' | 'carousel';
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({
  stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
      change: '+25%',
      description: 'Growing client base'
    },
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Average Growth',
      change: '+15%',
      description: 'Year over year growth'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Customer Rating',
      change: '+0.2',
      description: 'Client satisfaction'
    },
    {
      icon: Award,
      value: '15',
      label: 'Industry Awards',
      change: '+3',
      description: 'Recognition received'
    }
  ],
  title = 'Our Impact',
  description = 'Numbers that speak for themselves',
  showChange = true,
  layout = 'grid'
}) => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {layout === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {stat.value}
                </div>
                
                <div className="text-gray-400 mb-2 font-semibold">
                  {stat.label}
                </div>
                
                {stat.description && (
                  <div className="text-gray-500 text-sm mb-2">
                    {stat.description}
                  </div>
                )}
                
                {showChange && stat.change && (
                  <div className="text-green-400 text-sm font-semibold">
                    {stat.change} from last year
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="relative overflow-hidden">
            <div className="flex space-x-8 animate-scroll">
              {stats.map((stat, index) => (
                <div key={index} className="flex-shrink-0 text-center min-w-[200px]">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  
                  <div className="text-gray-400 mb-1">
                    {stat.label}
                  </div>
                  
                  {stat.description && (
                    <div className="text-gray-500 text-sm">
                      {stat.description}
                    </div>
                  )}
                  
                  {showChange && stat.change && (
                    <div className="text-green-400 text-sm font-semibold mt-1">
                      {stat.change}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentStatistics;
