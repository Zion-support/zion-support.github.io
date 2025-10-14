'use client';
import React from 'react';

interface PricingPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function PricingPage({ children, className = '' }: PricingPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}