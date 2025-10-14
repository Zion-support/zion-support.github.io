import React from 'react;

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'purple' | 'cyan' | 'pink' | 'green' | 'blue' | 'yellow';
  hoverEffect?: boolean}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = ''
  glowColor = 'purple'
  hoverEffect = true
}) => {
  const glowColors = {
    purple: 'shadow-purple-500/25 hover:shadow-purple-500/40'
    cyan: 'shadow-cyan-500/25 hover:shadow-cyan-500/40'
    pink: 'shadow-pink-500/25 hover:shadow-pink-500/40'
    green: 'shadow-green-500/25 hover:shadow-green-500/40'
    blue: 'shadow-blue-500/25 hover:shadow-blue-500/40'
    yellow: 'shadow-yellow-500/25 hover:shadow-yellow-500/40'
  };

  const borderColors = {
    purple: 'border-purple-500/30 hover:border-purple-500/60'
    cyan: 'border-cyan-500/30 hover:border-cyan-500/60'
    pink: 'border-pink-500/30 hover:border-pink-500/60'
    green: 'border-green-500/30 hover:border-green-500/60'
    blue: 'border-blue-500/30 hover:border-blue-500/60'
    yellow: 'border-yellow-500/30 hover:border-yellow-500/60'
  };

  return (
    <div className={`${baseClasses} ${hoverClasses} ${glowClass} ${className}`}>
      {children}
    </div>
  )};

export default AnimatedCard;
