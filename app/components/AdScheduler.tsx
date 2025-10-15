import React from 'react';

interface AdschedulerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Adscheduler({ className = '', children }: AdschedulerProps) {
  return (
    <div className={`AdScheduler-component ${className}`}>
      {children}
    </div>
  );
}