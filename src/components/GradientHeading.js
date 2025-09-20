import React from 'react';

const GradientHeading = ({ level = 'h1', children, className = '', ...props }) => {
  const Tag = level;
  
  return (
    <Tag 
      className={`bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export { GradientHeading };