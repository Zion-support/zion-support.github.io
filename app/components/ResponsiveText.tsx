import React from 'react';

interface ResponsiveTextProps {
  children: React.ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
  responsiveSize?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    '2xl'?: string;
  };
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  color?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  responsive?: boolean;
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({ 
  children, 
  className = '', 
  size = 'base',
  responsiveSize,
  weight = 'normal',
  color = 'text-gray-300',
  align = 'left',
  as: Component = 'p',
  responsive = true
}) => {
  const textClasses = [
    `text-${size}`,
    responsive && responsiveSize?.sm && `sm:text-${responsiveSize.sm}`,
    responsive && responsiveSize?.md && `md:text-${responsiveSize.md}`,
    responsive && responsiveSize?.lg && `lg:text-${responsiveSize.lg}`,
    responsive && responsiveSize?.xl && `xl:text-${responsiveSize.xl}`,
    responsive && responsiveSize?.['2xl'] && `2xl:text-${responsiveSize['2xl']}`,
    `font-${weight}`,
    `text-${align}`,
    color,
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={textClasses}>
      {children}
    </Component>
  );
};

export default ResponsiveText;