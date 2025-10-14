'use client';
import React from 'react';

interface ServicesPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ServicesPage({ children, className = '' }: ServicesPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}