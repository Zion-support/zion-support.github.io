'use client';
import React from 'react';

interface ServiceWorkerRegistrationProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ServiceWorkerRegistration({ children, className = '' }: ServiceWorkerRegistrationProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}