'use client'

import React from 'react';

interface SimpleNavigationProps {
  className?: string;
  children?: React.ReactNode;
}

const SimpleNavigation: React.FC<SimpleNavigationProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'simplenavigation ' + className}>
      {children || <p>SimpleNavigation component</p>}
    </div>
  );
};

export default SimpleNavigation;