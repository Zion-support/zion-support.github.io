'use client';

import React from 'react';

interface DynamicContentShowcaseProps {
  children?: React.ReactNode;
  className?: string;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default DynamicContentShowcase;