'use client';
import React from 'react';

interface MicroSaasServicesProps {
  children?: React.ReactNode;
  className?: string;
}

export default function MicroSaasServices({ children, className = '' }: MicroSaasServicesProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}