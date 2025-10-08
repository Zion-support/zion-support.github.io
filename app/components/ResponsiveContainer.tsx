import React from 'react';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  center?: boolean;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = '',
  maxWidth = '7xl',
  padding = 'md',
  center = true
}) => {
  const getMaxWidthClass = () => {
    switch (maxWidth) {
      case 'sm': return 'max-w-sm';
      case 'md': return 'max-w-md';
      case 'lg': return 'max-w-lg';
      case 'xl': return 'max-w-xl';
      case '2xl': return 'max-w-2xl';
      case '3xl': return 'max-w-3xl';
      case '4xl': return 'max-w-4xl';
      case '5xl': return 'max-w-5xl';
      case '6xl': return 'max-w-6xl';
      case '7xl': return 'max-w-7xl';
      case 'full': return 'max-w-full';
      default: return 'max-w-7xl';
    }
  };

  const getPaddingClass = () => {
    switch (padding) {
      case 'none': return 'px-0';
      case 'sm': return 'px-2 sm:px-4';
      case 'md': return 'px-4 sm:px-6 lg:px-8';
      case 'lg': return 'px-6 sm:px-8 lg:px-12';
      case 'xl': return 'px-8 sm:px-12 lg:px-16';
      default: return 'px-4 sm:px-6 lg:px-8';
    }
  };

  const containerClass = `
    w-full
    ${getMaxWidthClass()}
    ${getPaddingClass()}
    ${center ? 'mx-auto' : ''}
    ${className}
  `.trim();

  return (
    <div className={containerClass}>
      {children}
    </div>
  );
};

export default ResponsiveContainer;