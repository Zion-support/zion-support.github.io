'use client';
import React from 'react';

interface HomePageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function HomePage({ children, className = '' }: HomePageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}