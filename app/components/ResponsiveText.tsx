import React from 'react';
import { cn } from '../lib/utils';

interface ResponsiveTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  size?: {
    default: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
    sm?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
    md?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
    lg?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
    xl?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  };
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  color?: 'white' | 'gray' | 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'orange' | 'red';
  align?: 'left' | 'center' | 'right' | 'justify';
  leading?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  children,
  className = '',
  as: Component = 'p',
  size = { default: 'base', sm: 'lg', md: 'xl', lg: '2xl' },
  weight = 'normal',
  color = 'white',
  align = 'left',
  leading = 'normal'
}) => {
  const getSizeClass = () => {
    const sizeClasses = [];
    
    if (size.default) {
      sizeClasses.push(`text-${size.default}`);
    }
    if (size.sm) {
      sizeClasses.push(`sm:text-${size.sm}`);
    }
    if (size.md) {
      sizeClasses.push(`md:text-${size.md}`);
    }
    if (size.lg) {
      sizeClasses.push(`lg:text-${size.lg}`);
    }
    if (size.xl) {
      sizeClasses.push(`xl:text-${size.xl}`);
    }
    
    return sizeClasses.join(' ');
  };

  const getWeightClass = () => {
    const weights = {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black'
    };
    return weights[weight];
  };

  const getColorClass = () => {
    const colors = {
      white: 'text-white',
      gray: 'text-gray-300',
      cyan: 'text-cyan-400',
      purple: 'text-purple-400',
      pink: 'text-pink-400',
      green: 'text-green-400',
      blue: 'text-blue-400',
      orange: 'text-orange-400',
      red: 'text-red-400'
    };
    return colors[color];
  };

  const getAlignClass = () => {
    const aligns = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify'
    };
    return aligns[align];
  };

  const getLeadingClass = () => {
    const leadings = {
      none: 'leading-none',
      tight: 'leading-tight',
      snug: 'leading-snug',
      normal: 'leading-normal',
      relaxed: 'leading-relaxed',
      loose: 'leading-loose'
    };
    return leadings[leading];
  };

  const baseClasses = cn(
    getSizeClass(),
    getWeightClass(),
    getColorClass(),
    getAlignClass(),
    getLeadingClass(),
    className
  );

  return (
    <Component className={baseClasses}>
      {children}
    </Component>
  );
};

export default ResponsiveText;