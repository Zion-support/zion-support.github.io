

import React from 'react';

interface ImprovedimageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Improvedimage({ className = '', children, ...props }: ImprovedimageProps) {
  return (
    <div className={`improvedimage-component ${className}`} {...props}>
      {children}
    </div>
  );

}

