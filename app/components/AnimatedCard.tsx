import React from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'purple' | 'cyan' | 'pink' | 'green' | 'blue' | 'yellow';
  hoverEffect?: boolean;
  delay?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  glowColor = 'purple',
  hoverEffect = true,
  delay = 0
}) => {
  const glowColors = {
    purple: 'shadow-purple-500/25',
    cyan: 'shadow-cyan-500/25',
    pink: 'shadow-pink-500/25',
    green: 'shadow-green-500/25',
    blue: 'shadow-blue-500/25',
    yellow: 'shadow-yellow-500/25'
  };
  
  const baseClasses = "relative overflow-hidden rounded-lg transition-all duration-300";
  const hoverClasses = hoverEffect ? "hover:scale-105 hover:shadow-2xl" : "";
  const glowClass = glowColors[glowColor];
  
  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${glowClass} ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-lg shadow-lg ${glowClass} opacity-0 hover:opacity-100 transition-opacity duration-300`}></div>
    </div>
  );
};

export default AnimatedCard;