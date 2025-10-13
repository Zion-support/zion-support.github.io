import React from 'react';

interface ResponsiveTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
  weight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  align?: 'left' | 'center' | 'right' | 'justify';
  color?: 'white' | 'gray' | 'cyan' | 'purple' | 'pink' | 'gradient';
  responsive?: boolean;
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  children,
  className = '',
  as: Component = 'p',
  size = 'base',
  weight = 'normal',
  align = 'left',
  color = 'white',
  responsive = true
}) => {
  const getSizeClasses = () => {
    if (!responsive) {
      return `text-${size}`;
    }

    const sizeMap = {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-xl sm:text-2xl',
      '3xl': 'text-2xl sm:text-3xl',
      '4xl': 'text-3xl sm:text-4xl',
      '5xl': 'text-4xl sm:text-5xl',
      '6xl': 'text-5xl sm:text-6xl',
      '7xl': 'text-6xl sm:text-7xl',
      '8xl': 'text-7xl sm:text-8xl',
      '9xl': 'text-8xl sm:text-9xl'
    };

    return sizeMap[size] || 'text-base';
  };

  const getWeightClasses = () => {
    return `font-${weight}`;
  };

  const getAlignClasses = () => {
    return `text-${align}`;
  };

  const getColorClasses = () => {
    const colorMap = {
      white: 'text-white',
      gray: 'text-gray-300',
      cyan: 'text-cyan-400',
      purple: 'text-purple-400',
      pink: 'text-pink-400',
      gradient: 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400'
    };

    return colorMap[color] || 'text-white';
  };

  const classes = [
    getSizeClasses(),
    getWeightClasses(),
    getAlignClasses(),
    getColorClasses(),
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes}>
      {children}
    </Component>
  );
};

export default ResponsiveText;