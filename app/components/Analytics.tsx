import React from 'react';

interface AnalyticsProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Analytics({ children, className = '' }: AnalyticsProps) {
  return (
    <div className={`analytics ${className}`}>
      {children || <div>Analytics Component</div>}
    </div>
  );
}