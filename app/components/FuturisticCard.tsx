import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'green' | 'pink' | 'blue';
  hover?: boolean;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
  hover = true
}) => {
  const glowColors = {
    cyan: 'shadow-cyan-500/20 hover:shadow-cyan-500/40',
    purple: 'shadow-purple-500/20 hover:shadow-purple-500/40',
    green: 'shadow-green-500/20 hover:shadow-green-500/40',
    pink: 'shadow-pink-500/20 hover:shadow-pink-500/40',
    blue: 'shadow-blue-500/20 hover:shadow-blue-500/40'
  };

  const borderColors = {
    cyan: 'border-cyan-500/30 hover:border-cyan-500/60',
    purple: 'border-purple-500/30 hover:border-purple-500/60',
    green: 'border-green-500/30 hover:border-green-500/60',
    pink: 'border-pink-500/30 hover:border-pink-500/60',
    blue: 'border-blue-500/30 hover:border-blue-500/60'
  };

  const baseClasses = `
    relative bg-gray-900/80 backdrop-blur-sm border border-opacity-30 rounded-xl
    transition-all duration-300 transform
    ${hover ? 'hover:-translate-y-2 hover:scale-105' : ''}
    ${glowColors[glowColor]}
    ${borderColors[glowColor]}
  `;

  return (
    <div className={`${baseClasses} ${className}`}>
      {/* Animated border glow */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-${glowColor}-500/20 to-transparent opacity-0 transition-opacity duration-300 ${hover ? 'hover:opacity-100' : ''}`} />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Corner accents */}
      <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-${glowColor}-500 rounded-tl-xl`} />
      <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-${glowColor}-500 rounded-tr-xl`} />
      <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-${glowColor}-500 rounded-bl-xl`} />
      <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-${glowColor}-500 rounded-br-xl`} />
    </div>
  );
};

export default FuturisticCard;