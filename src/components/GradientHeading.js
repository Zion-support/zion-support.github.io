import React from 'react';

const GradientHeading = ({ 
  children, 
  level = 'h1', 
  className = '',
  ...props 
}) => {
  const Component = level;
  
  return (
    <Component 
      className={`bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export { GradientHeading };
export default GradientHeading;