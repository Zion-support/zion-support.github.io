'use client';
import React from 'react';

interface AdDashboardProps {
  children?: React.ReactNode;
  className?: string;
}

export default function AdDashboard({ children, className = '' }: AdDashboardProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}