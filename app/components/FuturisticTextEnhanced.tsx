import React from 'react';

interface FuturisticTextEnhancedProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'heading' | 'subheading' | 'body' | 'caption';
  glow?: boolean;
  gradient?: boolean;
  animate?: boolean;
}

const FuturisticTextEnhanced: React.FC<FuturisticTextEnhancedProps> = ({
  children,
  className = '',
  variant = 'body',
  glow = false,
  gradient = false,
  animate = false
}) => {
  const variantClasses = {
    heading: 'text-4xl font-bold',
    subheading: 'text-2xl font-semibold',
    body: 'text-base',
    caption: 'text-sm'
  };

  const glowClasses = glow ? 'text-shadow-lg shadow-cyan-500/50' : '';
  const gradientClasses = gradient ? 'bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent' : 'text-white';
  const animateClasses = animate ? 'animate-pulse' : '';

  return (
    <span
      className={`
        ${variantClasses[variant]}
        ${glowClasses}
        ${gradientClasses}
        ${animateClasses}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default FuturisticTextEnhanced;