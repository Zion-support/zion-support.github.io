import React from 'react';

interface ResponsiveTextProps {
  children: React.ReactNode;
  className?: string;
  size?: {
    default?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'accent' | 'muted' | 'white' | 'gray';
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  children,
  className = '',
  size = { default: 'base', sm: 'lg', md: 'xl' },
  weight = 'normal',
  color = 'white'
}) => {
  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const colorClasses = {
    primary: 'text-cyan-400',
    secondary: 'text-purple-400',
    accent: 'text-pink-400',
    muted: 'text-gray-400',
    white: 'text-white',
    gray: 'text-gray-300'
  };

  const sizeClasses = `text-${size.default || 'base'} ${
    size.sm ? `sm:text-${size.sm}` : ''
  } ${size.md ? `md:text-${size.md}` : ''} ${
    size.lg ? `lg:text-${size.lg}` : ''
  } ${size.xl ? `xl:text-${size.xl}` : ''}`;

  return (
    <span className={`${sizeClasses} ${weightClasses[weight]} ${colorClasses[color]} ${className}`}>
      {children}
    </span>
  );
};

export default ResponsiveText;