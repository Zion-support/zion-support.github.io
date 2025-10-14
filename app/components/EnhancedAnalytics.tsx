'use client';
import React from 'react';

interface EnhancedAnalyticsProps {
  children?: React.ReactNode;
  className?: string;
}

export default function EnhancedAnalytics({ children, className = '' }: EnhancedAnalyticsProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}