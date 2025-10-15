import React from 'react';
interface FuturisticTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'heading' | 'subheading' | 'body' | 'caption' | 'gradient';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  color?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}
const FuturisticText: React.FC<FuturisticTextProps> = ({ 
  children, 
  className = '', 
  variant = 'body',
  size = 'base',
  weight = 'normal',
  color = 'text-gray-300',
  as: Component = 'p'
}) => {
  const variantClasses = {
    heading: 'text-4xl md:text-5xl lg:text-6xl font-bold text-white',
    subheading: 'text-2xl md:text-3xl lg:text-4xl font-semibold text-white',
    body: 'text-base md:text-lg text-gray-300 leading-relaxed',
    caption: 'text-sm text-gray-400',
    gradient: 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400'
  };

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
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black'
  };

const textClasses = [
    variant === 'gradient' ? variantClasses.gradient : variantClasses[variant],
    variant !== 'heading' && variant !== 'subheading' && variant !== 'gradient' ? sizeClasses[size] : '',
    variant !== 'heading' && variant !== 'subheading' && variant !== 'gradient' ? weightClasses[weight] : '',
    variant !== 'gradient' ? color : '',
    className
  ].filter(Boolean).join(' ');
  return (
    <Component className="{textClasses}">
      {children}
    </Component>
  );
};
export default FuturisticText;