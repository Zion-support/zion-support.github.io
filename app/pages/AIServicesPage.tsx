'use client';
import React from 'react';

interface AIServicesPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function AIServicesPage({ children, className = '' }: AIServicesPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}