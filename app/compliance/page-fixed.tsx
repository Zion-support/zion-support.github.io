'use client';

import React from 'react';

interface PageFixedProps {
  children?: React.ReactNode;
  className?: string;
}

const PageFixed: React.FC<PageFixedProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default PageFixed;