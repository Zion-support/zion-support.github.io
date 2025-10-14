'use client';
import React from 'react';

interface WebVitalsTrackerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function WebVitalsTracker({ children, className = '' }: WebVitalsTrackerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}