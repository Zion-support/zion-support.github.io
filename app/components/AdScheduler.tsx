'use client';
import React from 'react';

interface AdSchedulerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function AdScheduler({ children, className = '' }: AdSchedulerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}