'use client';
import React from 'react';

interface AnimatedCardProps {
  children?: React.ReactNode;
  className?: string;
}

export default function AnimatedCard({ children, className = '' }: AnimatedCardProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}