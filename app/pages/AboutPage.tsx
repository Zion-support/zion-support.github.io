'use client';
import React from 'react';

interface AboutPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function AboutPage({ children, className = '' }: AboutPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}