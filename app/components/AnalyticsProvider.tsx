'use client';
import React from 'react';

interface AnalyticsProviderProps {
  children?: React.ReactNode;
  className?: string;
}

export default function AnalyticsProvider({ children, className = '' }: AnalyticsProviderProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}