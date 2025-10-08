import React from 'react';

interface ResponsiveTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  size?: {
    default?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    sm?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    md?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    lg?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    xl?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    '2xl'?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
  };
  weight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  color?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  lineHeight?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';
  truncate?: boolean;
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  children,
  className = '',
  as: Component = 'p',
  size = { default: 'base', sm: 'lg', md: 'xl' },
  weight = 'normal',
  color = 'text-gray-900',
  align = 'left',
  lineHeight = 'normal',
  truncate = false
}) => {
  const getSizeClass = () => {
    const sizeClasses = [];
    
    if (size.default) sizeClasses.push(`text-${size.default}`);
    if (size.sm) sizeClasses.push(`sm:text-${size.sm}`);
    if (size.md) sizeClasses.push(`md:text-${size.md}`);
    if (size.lg) sizeClasses.push(`lg:text-${size.lg}`);
    if (size.xl) sizeClasses.push(`xl:text-${size.xl}`);
    if (size['2xl']) sizeClasses.push(`2xl:text-${size['2xl']}`);
    
    return sizeClasses.join(' ');
  };

  const getWeightClass = () => `font-${weight}`;
  const getAlignClass = () => `text-${align}`;
  const getLineHeightClass = () => `leading-${lineHeight}`;
  const getTruncateClass = () => truncate ? 'truncate' : '';

  const textClass = `
    ${getSizeClass()}
    ${getWeightClass()}
    ${color}
    ${getAlignClass()}
    ${getLineHeightClass()}
    ${getTruncateClass()}
    ${className}
  `.trim();

  return (
    <Component className={textClass}>
      {children}
    </Component>
  );
};

export default ResponsiveText;