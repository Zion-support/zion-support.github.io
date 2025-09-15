import React from 'react';
import { TrendingUp, Users, Zap, Shield } from 'lucide-react';

interface Stat {
  label: string;
  value: string;
  description: string;
}

interface InteractiveStatsProps {
  stats: Stat[];
  className?: string;
}

export default function InteractiveStats({ stats, className = '' }: InteractiveStatsProps) {
  const getIcon = (index: number) => {
    const icons = [TrendingUp, Users, Zap, Shield];
    return icons[index % icons.length];
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`}>
      {stats.map((stat, index) => {
        const IconComponent = getIcon(index);
        
        return (
          <div
            key={index}
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {stat.description}
              </p>
              
              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-b-xl"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}