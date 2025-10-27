import React from 'react';

interface LoadingProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Loading({ 
  className = '', 
  children 
}: LoadingProps) {
  return (
    <div className={'loading ' + className}>
      {children || <p>Loading component</p>}
    </div>
  );
}
