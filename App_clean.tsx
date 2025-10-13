import React from 'react';

interface App_cleanProps {
  className?: string;
  children?: React.ReactNode;
}

export default function App_clean({ className = '', children }: App_cleanProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}