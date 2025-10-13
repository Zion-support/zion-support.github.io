import React from 'react';
import { cn } from '../lib/utils';

interface ResponsiveTextProps {
  children: React.ReactNode;
  className?: string;
  size?: {
    default?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
    sm?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
    md?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
    lg?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
    xl?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  };
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  color?: 'white' | 'gray' | 'cyan' | 'purple' | 'pink' | 'gradient';
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  children,
  className = '',
  size = { default: 'base' },
  weight = 'normal',
  color = 'white'
}) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl'
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold'
  };

  const colorClasses = {
    white: 'text-white',
    gray: 'text-gray-300',
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400',
    gradient: 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400'
  };

  const responsiveSizeClasses = [
    size.default && sizeClasses[size.default],
    size.sm && `sm:${sizeClasses[size.sm]}`,
    size.md && `md:${sizeClasses[size.md]}`,
    size.lg && `lg:${sizeClasses[size.lg]}`,
    size.xl && `xl:${sizeClasses[size.xl]}`
  ].filter(Boolean).join(' ');

  return (
    <span className={cn(
      responsiveSizeClasses,
      weightClasses[weight],
      colorClasses[color],
      className
    )}>
      {children}
    </span>
  );
};

export default ResponsiveText;