import React from 'react';

interface AdSchedulerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AdScheduler({ className = '', children }: AdSchedulerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
