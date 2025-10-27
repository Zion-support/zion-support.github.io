import React from 'react';

interface _LoadingProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Loading({ 
  className = '', 
  children 
}: _LoadingProps) {
  return (
    <div className={'loading ' + className}>
      {children || <p>Loading component</p>}
    </div>
  );
}
