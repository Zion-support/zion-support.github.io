
import React from 'react';

interface AnalyticsproviderProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Analyticsprovider({ className = '', children, ...props }: AnalyticsproviderProps) {

  return (
    <div className={`analyticsprovider-component ${className}`} {...props}>
      {children}
    </div>
  );

}

