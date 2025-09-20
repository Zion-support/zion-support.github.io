import React from 'react';

const GradientHeading = ({ level = 'h1', children, className = '', ...props }) => {
  const Tag = level;
  
  return (
    <Tag 
      className={`bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export { GradientHeading };