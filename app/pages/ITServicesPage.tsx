'use client';
import React from 'react';

interface ITServicesPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ITServicesPage({ children, className = '' }: ITServicesPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}