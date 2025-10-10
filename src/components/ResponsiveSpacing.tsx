import React from 'react';

interface ResponsiveSpacingProps {
  children: React.ReactNode;
  className?: string;
  section?: 'hero' | 'content' | 'footer' | 'card' | 'container';
}

const ResponsiveSpacing: React.FC<ResponsiveSpacingProps> = ({
  children,
  className = '',
  section = 'content'
}) => {
  const getSpacingClasses = () => {
    switch (section) {
      case 'hero':
        return 'py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8';
      case 'content':
        return 'py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8';
      case 'footer':
        return 'py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8';
      case 'card':
        return 'p-4 sm:p-6 lg:p-8';
      case 'container':
        return 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
      default:
        return 'py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8';
    }
  };

  return (
    <div className={`${getSpacingClasses()} ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveSpacing;