'use client';
import React from 'react';

interface AdAnalyticsProps {
  children?: React.ReactNode;
  className?: string;
}

export default function AdAnalytics({ children, className = '' }: AdAnalyticsProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}