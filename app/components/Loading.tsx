import React from 'react';
export type LoadingProps = {
  // Add your props here
};

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
