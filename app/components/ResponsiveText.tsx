import React from 'react';
interface ResponsiveTextProps {
  children: React.ReactNode;
  size?: {
    default?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'white' | 'gray' | 'cyan' | 'purple' | 'pink';
  className?: string;
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  children,
  size = { default: 'text-base', sm: 'text-lg', md: 'text-xl' },
  weight = 'normal',
  color = 'white',
  className = ''
}) => {
  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const colorClasses = {
    white: 'text-white',
    gray: 'text-gray-300',
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400'
  };

  const sizeClasses = `${
    size.default || 'text-base'
  } ${size.sm ? `sm:${size.sm}` : ''} ${
    size.md ? `md:${size.md}` : ''
  } ${size.lg ? `lg:${size.lg}` : ''} ${
    size.xl ? `xl:${size.xl}` : ''
  }`;

  return (
    <span
      className={`${sizeClasses} ${weightClasses[weight]} ${colorClasses[color]} ${className}`}
    >
      {children}
    </span>
  );
};

export default ResponsiveText;