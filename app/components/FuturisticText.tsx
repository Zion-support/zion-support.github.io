import React from 'react';

interface FuturisticTextProps {
  children: React.ReactNode;
  variant?: 'heading' | 'subheading' | 'body' | 'caption';
  className?: string;
  gradient?: boolean;
}

const FuturisticText: React.FC<FuturisticTextProps> = ({
  children,
  variant = 'body',
  className = '',
  gradient = false
}) => {
  const baseClasses = 'transition-all duration-300';
  
  const variantClasses = {
    heading: 'text-4xl md:text-6xl lg:text-7xl font-bold leading-tight',
    subheading: 'text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight',
    body: 'text-base md:text-lg leading-relaxed',
    caption: 'text-sm md:text-base leading-relaxed'
  };

  const gradientClasses = gradient 
    ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400'
    : 'text-white';

  const classes = `${baseClasses} ${variantClasses[variant]} ${gradientClasses} ${className}`;

  return <span className={classes}>{children}</span>;
};

export default FuturisticText;