import React from 'react';

interface ResponsiveTextProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({ 
  children, 
  className = '',
  size = 'base',
  weight = 'normal'
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  return (
    <div className={`${sizeClasses[size]} ${weightClasses[weight]} ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveText;
