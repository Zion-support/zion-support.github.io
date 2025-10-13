import React from 'react';

interface ResponsiveTextProps {
  children: React.ReactNode;
  variant?: 'heading' | 'subheading' | 'body' | 'caption';
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  children,
  variant = 'body',
  className = '',
  as: Component = 'p'
}) => {
  const baseClasses = 'transition-all duration-300';
  
  const variantClasses = {
    heading: 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white',
    subheading: 'text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-white',
    body: 'text-base md:text-lg leading-relaxed text-gray-300',
    caption: 'text-sm md:text-base leading-relaxed text-gray-400'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return <Component className={classes}>{children}</Component>;
};

export default ResponsiveText;