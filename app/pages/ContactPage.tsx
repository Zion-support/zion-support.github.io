'use client';
import React from 'react';

interface ContactPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ContactPage({ children, className = '' }: ContactPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}