<<<<<<< HEAD
import React from 'react';

interface ResponsiveContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveContainer;
=======
'use client'

import React from 'react'

interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`responsive-container ${className}`}>
      {children}
    </div>
  )
}

export default ResponsiveContainer
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
