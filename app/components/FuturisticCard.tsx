import React from 'react';
import { cn } from '../lib/utils';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'blue' | 'green' | 'orange' | 'red' | 'yellow';
  hover?: boolean;
}

const FuturisticCard = ({ 
  children, 
  className, 
  glowColor = 'cyan',
  hover = true 
}: FuturisticCardProps) => {
  const glowColors = {
    cyan: 'hover:shadow-cyan-500/25',
    purple: 'hover:shadow-purple-500/25',
    pink: 'hover:shadow-pink-500/25',
    blue: 'hover:shadow-blue-500/25',
    green: 'hover:shadow-green-500/25',
    orange: 'hover:shadow-orange-500/25',
    red: 'hover:shadow-red-500/25',
    yellow: 'hover:shadow-yellow-500/25',
  };

  return (
    <div
      className={cn(
        'relative bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300',
        hover && 'hover:bg-white/20 hover:scale-105 hover:shadow-2xl',
        hover && glowColors[glowColor],
        'before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300',
        'after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-r after:from-transparent after:via-white/5 after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300',
        className
      )}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticCard;