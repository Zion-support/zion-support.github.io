import React from 'react';
import { clsx } from 'clsx';

interface ResponsiveTextProps {
  children: React.ReactNode;
  className?: string;
  size?: {
    default?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    sm?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    md?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    lg?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    xl?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    '2xl'?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
  };
  weight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  color?: 'white' | 'gray-100' | 'gray-200' | 'gray-300' | 'gray-400' | 'cyan-400' | 'purple-400' | 'pink-400';
  align?: 'left' | 'center' | 'right' | 'justify';
  lineHeight?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  children,
  className,
  size = { default: 'base' },
  weight = 'normal',
  color = 'white',
  align = 'left',
  lineHeight = 'normal',
  as: Component = 'p'
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
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl'
  };

  const weightClasses = {
    thin: 'font-thin',
    extralight: 'font-extralight',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black'
  };

  const colorClasses = {
    white: 'text-white',
    'gray-100': 'text-gray-100',
    'gray-200': 'text-gray-200',
    'gray-300': 'text-gray-300',
    'gray-400': 'text-gray-400',
    'cyan-400': 'text-cyan-400',
    'purple-400': 'text-purple-400',
    'pink-400': 'text-pink-400'
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  };

  const lineHeightClasses = {
    none: 'leading-none',
    tight: 'leading-tight',
    snug: 'leading-snug',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose'
  };

  const getSizeClasses = () => {
    const classes = [];
    
    if (size.default) {
      classes.push(sizeClasses[size.default]);
    }
    if (size.sm) {
      classes.push(`sm:${sizeClasses[size.sm]}`);
    }
    if (size.md) {
      classes.push(`md:${sizeClasses[size.md]}`);
    }
    if (size.lg) {
      classes.push(`lg:${sizeClasses[size.lg]}`);
    }
    if (size.xl) {
      classes.push(`xl:${sizeClasses[size.xl]}`);
    }
      if (size['2xl']) {
        classes.push(`2xl:${sizeClasses[size['2xl']]}`);
      }

    return classes.join(' ');
  };

  return (
    <Component
      className={clsx(
        getSizeClasses(),
        weightClasses[weight],
        colorClasses[color],
        alignClasses[align],
        lineHeightClasses[lineHeight],
        className
      )}
    >
      {children}
    </Component>
  );
};

export default ResponsiveText;