import React from 'react';

interface FuturisticTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

const FuturisticText: React.FC<FuturisticTextProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  animated = true
}) => {
  const baseClasses = 'font-bold tracking-wide';
  
  const variantClasses = {
    primary: 'text-blue-400',
    secondary: 'text-purple-400',
    accent: 'text-cyan-400'
  };
  
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };
  
  const animationClasses = animated ? 'animate-pulse' : '';
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${animationClasses} ${className}`.trim();
  
  return (
    <span className={combinedClasses}>
      {children}
    </span>
  );
};

export default FuturisticText;