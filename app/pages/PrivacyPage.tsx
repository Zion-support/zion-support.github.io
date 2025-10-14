'use client';
import React from 'react';

interface PrivacyPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function PrivacyPage({ children, className = '' }: PrivacyPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}