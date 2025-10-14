'use client';
import React from 'react';

interface TutorialsPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function TutorialsPage({ children, className = '' }: TutorialsPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}