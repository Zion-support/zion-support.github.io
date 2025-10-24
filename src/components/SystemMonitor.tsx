import React from 'react';

interface SystemMonitorProps {
  className?: string;
}

export default function SystemMonitor({ className }: SystemMonitorProps) {
  return (
    <div className={className}>
      <h1>SystemMonitor</h1>
      <p>Component content</p>
    </div>
  );
}