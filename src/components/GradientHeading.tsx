import React from 'react';
import { cn } from '@/lib/utils';

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  gradient?: 'default' | 'purple' | 'blue' | 'green' | 'orange' | 'pink';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
}

const gradientClasses = {
  default: 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600',
  purple: 'bg-gradient-to-r from-purple-600 via-pink-600 to-red-600',
  blue: 'bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600',
  green: 'bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600',
  orange: 'bg-gradient-to-r from-orange-600 via-red-600 to-pink-600',
  pink: 'bg-gradient-to-r from-pink-600 via-rose-600 to-red-600',
};

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
};

export const GradientHeading: React.FC<GradientHeadingProps> = ({
  children,
  className,
  as: Component = 'h1',
  gradient = 'default',
  size = '4xl',
}) => {
  const gradientClass = gradientClasses[gradient];
  const sizeClass = sizeClasses[size];

  return (
    <Component
      className={cn(
        'font-bold bg-clip-text text-transparent',
        gradientClass,
        sizeClass,
        className
      )}
    >
      {children}
    </Component>
  );
};

export default GradientHeading;