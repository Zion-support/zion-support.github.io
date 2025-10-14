'use client';
import React from 'react';

interface AnalyticsContextProps {
  children?: React.ReactNode;
  className?: string;
}

export default function AnalyticsContext({ children, className = '' }: AnalyticsContextProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}