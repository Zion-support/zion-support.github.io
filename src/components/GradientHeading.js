import React from 'react';

const GradientHeading = ({ level = 'h1', children, className = '', ...props }) => {
  const Tag = level;
  
  return (
<<<<<<< HEAD
    <Tag 
      className={`bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ${className}`}
=======
    <Tag
      className={`bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent ${className}`}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
      {...props}
    >
      {children}
    </Tag>
  );
};

export { GradientHeading };