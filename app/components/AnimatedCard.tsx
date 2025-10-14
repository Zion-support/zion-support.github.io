import React from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  hoverEffect?: boolean;
  glowColor?: 'purple' | 'cyan' | 'pink' | 'blue' | 'green';
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  hoverEffect = true,
  glowColor = 'purple',
  className = ''
}) => {
  const glowClasses = {
    purple: 'shadow-purple-500/25 hover:shadow-purple-500/40',
    cyan: 'shadow-cyan-500/25 hover:shadow-cyan-500/40',
    pink: 'shadow-pink-500/25 hover:shadow-pink-500/40',
    blue: 'shadow-blue-500/25 hover:shadow-blue-500/40',
    green: 'shadow-green-500/25 hover:shadow-green-500/40'
  };

  const baseClasses = 'bg-white rounded-lg shadow-lg transition-all duration-300';
  const hoverClasses = hoverEffect ? 'hover:scale-105 hover:shadow-xl' : '';
  const glowClass = glowClasses[glowColor];

const AnimatedCard: React.FC = () => {
  return (
    <div
      className={`
        relative bg-gradient-to-br from-slate-800/80 to-slate-700/80 
        backdrop-blur-sm border border-slate-600/50 
        rounded-xl p-6 transition-all duration-300
        ${hoverEffect ? 'hover:transform hover:scale-105 hover:-translate-y-1' : ''}
        ${glowColors[glowColor]}
        ${borderColors[glowColor]}
        ${className}
      `}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
);
};

export default AnimatedCard;

