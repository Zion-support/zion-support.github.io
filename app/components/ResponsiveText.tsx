import React from 'react';
import FuturisticText from './FuturisticText';

interface ResponsiveTextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  size?: {
    default?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    sm?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    md?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    lg?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    xl?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
  };
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  color?: 'white' | 'gray' | 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'yellow' | 'red';
  align?: 'left' | 'center' | 'right';
  gradient?: boolean;
  neon?: boolean;
  animated?: boolean;
  delay?: number;
  speed?: number;
  className?: string;
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  children,
  as = 'span',
  size = { default: 'base', md: 'lg', lg: 'xl' },
  weight = 'normal',
  color = 'white',
  align = 'left',
  gradient = false,
  neon = false,
  animated = false,
  delay = 0,
  speed = 100,
  className = ''
}) => {
  const getResponsiveSize = () => {
    const sizeClasses = [];
    
    if (size.default) sizeClasses.push(`text-${size.default}`);
    if (size.sm) sizeClasses.push(`sm:text-${size.sm}`);
    if (size.md) sizeClasses.push(`md:text-${size.md}`);
    if (size.lg) sizeClasses.push(`lg:text-${size.lg}`);
    if (size.xl) sizeClasses.push(`xl:text-${size.xl}`);
    
    return sizeClasses.join(' ');
  };

  const textClasses = `${getResponsiveSize()} ${className}`;

  if (animated) {
    return (
      <FuturisticText
        text={children as string}
        as={as}
        size={size.default || 'base'}
        weight={weight}
        color={color}
        align={align}
        gradient={gradient}
        neon={neon}
        animated={animated}
        delay={delay}
        speed={speed}
        className={textClasses}
      />
    );
  }

  const TextComponent = as;

  return (
    <TextComponent className={textClasses}>
      {children}
    </TextComponent>
  );
};

export default ResponsiveText;