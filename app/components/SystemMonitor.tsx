'use client';
import React from 'react';

interface SystemMonitorProps {
  children?: React.ReactNode;
  className?: string;
}

export default function SystemMonitor({ children, className = '' }: SystemMonitorProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}