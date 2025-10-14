'use client';
import React from 'react';

interface CloudInfrastructurePageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function CloudInfrastructurePage({ children, className = '' }: CloudInfrastructurePageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}