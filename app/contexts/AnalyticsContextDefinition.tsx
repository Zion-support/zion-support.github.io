'use client';
import React from 'react';

interface AnalyticsContextDefinitionProps {
  children?: React.ReactNode;
  className?: string;
}

export default function AnalyticsContextDefinition({ children, className = '' }: AnalyticsContextDefinitionProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}