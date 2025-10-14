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
    <div className={`${baseClasses} ${hoverClasses} ${glowClass} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedCard;
