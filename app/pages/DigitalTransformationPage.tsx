'use client';
import React from 'react';

interface DigitalTransformationPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function DigitalTransformationPage({ children, className = '' }: DigitalTransformationPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}