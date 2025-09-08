import React from 'react';

interface SimpleBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'dark' | 'gradient';
  className?: string;
}

const SimpleBackground: React.FC<SimpleBackgroundProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const backgroundClasses = {
    default: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white'
  };

  return (
    <div className={`min-h-screen ${backgroundClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default SimpleBackground;